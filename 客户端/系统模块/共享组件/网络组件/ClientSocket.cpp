#include "Stdafx.h"
#include "ClientSocket.h"

#include "../../��Ϣ����/pb/NullPmd.pb.h"
#include "../../��Ϣ����/pb/NullPmd.pb.cc"

//////////////////////////////////////////////////////////////////////////

//�궨��
#define ID_SOCKET_WND				10								//SOCKET ���� ID
#define WM_SOCKET_NOTIFY			WM_USER+10						//SOCKET ��Ϣ

//////////////////////////////////////////////////////////////////////////

BEGIN_MESSAGE_MAP(CClientSocket, CWnd)
	ON_MESSAGE(WM_SOCKET_NOTIFY,OnSocketNotify)
END_MESSAGE_MAP()

//////////////////////////////////////////////////////////////////////////

//���캯��
CClientSocket::CClientSocket()
{
	m_wRecvSize=0;
	m_cbSendRound=0;
	m_cbRecvRound=0;
	m_dwSendXorKey=0;
	m_dwRecvXorKey=0;
	m_dwSendTickCount=0;
	m_dwRecvTickCount=0;
	m_dwSendPacketCount=0;
	m_dwRecvPacketCount=0;
	m_bCloseByServer=false;
	m_hSocket=INVALID_SOCKET;
	m_pIClientSocketSink=NULL;
	m_ProxyInfo.wProxyPort=0;
	m_ProxyInfo.cbProxyType=PROXY_NONE;
	m_SocketState=SocketState_NoConnect;
}

//��������
CClientSocket::~CClientSocket()
{
	CloseSocket(false);
}

//�ӿڲ�ѯ
void * __cdecl CClientSocket::QueryInterface(const IID & Guid, DWORD dwQueryVer)
{
	QUERYINTERFACE(IClientSocket,Guid,dwQueryVer);
	QUERYINTERFACE_IUNKNOWNEX(IClientSocket,Guid,dwQueryVer);
	return NULL;
}

//ȡ������
void __cdecl CClientSocket::CancelProxyServer()
{
	m_ProxyInfo.wProxyPort=0;
	m_ProxyInfo.strHttpDomain.Empty();
	m_ProxyInfo.strProxyName.Empty();
	m_ProxyInfo.strProxyPass.Empty();
	m_ProxyInfo.strProxyServer.Empty();
	m_ProxyInfo.cbProxyType=PROXY_NONE;
	return;
}

//���������
void __cdecl CClientSocket::SetProxyServer(tagProxyInfo & ProxyInfo)
{
	m_ProxyInfo=ProxyInfo;
	return;
}

//���ýӿ�
bool __cdecl CClientSocket::SetSocketSink(IUnknownEx * pIUnknownEx)
{
	ASSERT(pIUnknownEx!=NULL);
	m_pIClientSocketSink=(IClientSocketSink *)pIUnknownEx->QueryInterface(IID_IClientSocketSink,VER_IClientSocketSink);
	ASSERT(m_pIClientSocketSink!=NULL);
	return (m_pIClientSocketSink!=NULL);
}

//��ȡ�ӿ�
void * __cdecl CClientSocket::GetSocketSink(const IID & Guid, DWORD dwQueryVer)
{
	if (m_pIClientSocketSink==NULL) return NULL;
	return m_pIClientSocketSink->QueryInterface(Guid,dwQueryVer);
}

//���ӷ�����
bool __cdecl CClientSocket::Connect(DWORD dwServerIP, WORD wPort)
{
	//Ч�����
	ASSERT(m_hSocket==INVALID_SOCKET);
	ASSERT(m_SocketState==SocketState_NoConnect);

	//Ч��״̬
	if (m_hSocket!=INVALID_SOCKET) throw TEXT("���� SOCKET ����Ѿ�����");
	if (m_SocketState!=SocketState_NoConnect) throw TEXT("����״̬���ǵȴ�����״̬");
	if (dwServerIP==INADDR_NONE) throw TEXT("Ŀ���������ַ��ʽ����ȷ��������ٴγ��ԣ�");

	//���ò���
	m_wRecvSize=0;
	m_cbSendRound=0;
	m_cbRecvRound=0;
	m_dwSendXorKey=0x12345678;
	m_dwRecvXorKey=0x12345678;
	m_dwSendTickCount=GetTickCount()/1000L;
	m_dwRecvTickCount=GetTickCount()/1000L;

	try
	{
		//���� SOCKET
		m_hSocket=socket(AF_INET,SOCK_STREAM,IPPROTO_TCP);
		if (m_hSocket==INVALID_SOCKET) throw TEXT("SOCKET ����ʧ��");
		if ((m_hWnd==NULL)&&(!Create(NULL,NULL,WS_CHILD,CRect(0,0,0,0),GetDesktopWindow(),ID_SOCKET_WND,NULL)))
			throw TEXT("SOCKET �ڲ����ڴ���ʧ��");

		//��д��������ַ
		SOCKADDR_IN SocketAddr;
		memset(&SocketAddr,0,sizeof(SocketAddr));
		SocketAddr.sin_family=AF_INET;
		SocketAddr.sin_port=htons(wPort);
		SocketAddr.sin_addr.S_un.S_addr=dwServerIP;

		//���ӷ�����
		int iErrorCode=0;
		WSASetLastError(0);
		if (m_ProxyInfo.cbProxyType!=PROXY_NONE)
		{
			throw TEXT("δ֧�ִ��������");
		}
		else
		{
			//�󶨴���
			iErrorCode=WSAAsyncSelect(m_hSocket,m_hWnd,WM_SOCKET_NOTIFY,FD_READ|FD_CONNECT|FD_CLOSE);
			if (iErrorCode==SOCKET_ERROR) throw TEXT("���ڲ����ڴ���");

			//���ӷ�����
			iErrorCode=connect(m_hSocket,(SOCKADDR *)&SocketAddr,sizeof(SocketAddr));
			if (iErrorCode==SOCKET_ERROR)
			{
				iErrorCode=WSAGetLastError();
				if (iErrorCode!=WSAEWOULDBLOCK)
				{
					static TCHAR szBuffer[64];
					_snprintf(szBuffer,sizeof(szBuffer),TEXT("���ӷ������󣬴������ [ %d ]"),iErrorCode);
					throw szBuffer;
				}
			}

			//���ñ���
			m_SocketState=SocketState_Connecting;
		}

		return true;
	}
	catch (LPCTSTR pszError)
	{
		CloseSocket(false);
		throw pszError;
	}
	catch (...)
	{
		CloseSocket(false);
		throw TEXT("���Ӳ���δ֪�쳣����");
	}

	return false;
}

//���ӷ�����
bool __cdecl CClientSocket::Connect(const LPCTSTR szServerIP, WORD wPort)
{
	//Ч������
	ASSERT(wPort!=0);
	ASSERT(szServerIP!=NULL);
	if ((szServerIP==NULL)||(wPort==0)) return false;
	return Connect(TranslateAddr(szServerIP),wPort);
}

//���ͺ���
bool __cdecl CClientSocket::SendData(WORD wMainCmdID, WORD wSubCmdID)
{
	//Ч��״̬
	if (m_hSocket==INVALID_SOCKET) return false;
	if (m_SocketState!=SocketState_Connected) return false;

	//��������
	BYTE cbDataBuffer[SOCKET_BUFFER];
	CMD_Head * pHead=(CMD_Head *)cbDataBuffer;
	pHead->CommandInfo.wMainCmdID=wMainCmdID;
	pHead->CommandInfo.wSubCmdID=wSubCmdID;

	//��������
	WORD wSendSize=EncryptBuffer(cbDataBuffer,sizeof(CMD_Head),sizeof(cbDataBuffer));

	//��������
	return SendBuffer(cbDataBuffer,wSendSize);
}

//���ͺ���
bool __cdecl CClientSocket::SendData(WORD wMainCmdID, WORD wSubCmdID, void * pData, WORD wDataSize)
{
	//Ч��״̬
	if (m_hSocket==INVALID_SOCKET) return false;
	if (m_SocketState!=SocketState_Connected) return false;

	//Ч���С
	ASSERT(wDataSize<=SOCKET_PACKAGE);
	if (wDataSize>SOCKET_PACKAGE) return false;

	//��������
	BYTE cbDataBuffer[SOCKET_BUFFER];
	CMD_Head * pHead=(CMD_Head *)cbDataBuffer;
	pHead->CommandInfo.wMainCmdID=wMainCmdID;
	pHead->CommandInfo.wSubCmdID=wSubCmdID;
	if (wDataSize>0)
	{
		ASSERT(pData!=NULL);
		CopyMemory(pHead+1,pData,wDataSize);
	}

	//��������
	WORD wSendSize=EncryptBuffer(cbDataBuffer,sizeof(CMD_Head)+wDataSize,sizeof(cbDataBuffer));

	//��������
	return SendBuffer(cbDataBuffer,wSendSize);
}

//�ر�����
bool __cdecl CClientSocket::CloseSocket(bool bNotify)
{
	//�ر�����
	bool bClose=(m_hSocket!=INVALID_SOCKET);
	m_SocketState=SocketState_NoConnect;
	if (m_hSocket!=INVALID_SOCKET)
	{
		WSAAsyncSelect(m_hSocket,GetSafeHwnd(),WM_SOCKET_NOTIFY,0);
		closesocket(m_hSocket);
		m_hSocket=INVALID_SOCKET;
		m_SocketState=SocketState_NoConnect;
	}
	if ((bNotify==true)&&(bClose==true)&&(m_pIClientSocketSink!=NULL))
	{
		ASSERT(m_pIClientSocketSink!=NULL);
		try { m_pIClientSocketSink->OnSocketClose(this,m_bCloseByServer); }
		catch (...) {}
	}

	//�ָ�����
	m_wRecvSize=0;
	m_cbSendRound=0;
	m_cbRecvRound=0;
	m_dwSendXorKey=0;
	m_dwRecvXorKey=0;
	m_dwSendTickCount=0;
	m_dwRecvTickCount=0;
	m_dwSendPacketCount=0;
	m_dwRecvPacketCount=0;
	m_bCloseByServer=false;

	return true;
}

//��������
bool CClientSocket::SendBuffer(void * pBuffer, WORD wSendSize)
{
	//Ч�����
	ASSERT(wSendSize!=0);
	ASSERT(pBuffer!=NULL);
	
	//��������
	WORD wSended=0;
	while (wSended<wSendSize)
	{
		int iErrorCode=send(m_hSocket,(char *)pBuffer+wSended,wSendSize-wSended,0);
		if (iErrorCode==SOCKET_ERROR)
		{
			if (WSAGetLastError()==WSAEWOULDBLOCK)
			{
				m_dwSendTickCount=GetTickCount()/1000L;
				return true;
			}
			return false;
		}
		wSended+=iErrorCode;
	}
	m_dwSendTickCount=GetTickCount()/1000L;

	return true;
}

//���ӳ��
WORD CClientSocket::SeedRandMap(WORD wSeed)
{
	DWORD dwHold=wSeed;
	return (WORD)((dwHold=dwHold*241103L+2533101L)>>16);
}

//ӳ�䷢������
BYTE CClientSocket::MapSendByte(BYTE const cbData)
{
	BYTE cbMap= g_SendByteMap[(BYTE)(cbData+m_cbSendRound)];
	m_cbSendRound+=3;
	return cbMap;
}

//ӳ���������
BYTE CClientSocket::MapRecvByte(BYTE const cbData)
{
	BYTE cbMap= g_RecvByteMap[cbData]-m_cbRecvRound;
	m_cbRecvRound+=3;
	return cbMap;
}

//���ͷ�������ַ
DWORD CClientSocket::TranslateAddr(LPCTSTR pszServerAddr)
{
	//ת����ַ
	DWORD dwServerIP=inet_addr(pszServerAddr);
	if (dwServerIP==INADDR_NONE)
	{
		LPHOSTENT lpHost=gethostbyname(pszServerAddr);
		if (lpHost==NULL) return INADDR_NONE;
		dwServerIP=((LPIN_ADDR)lpHost->h_addr)->s_addr;
	}
	return dwServerIP;
}

//���ʹ���
LPCTSTR CClientSocket::GetConnectError(int iErrorCode, LPTSTR pszBuffer, WORD wBufferSize)
{
	//Ч�����
	ASSERT(pszBuffer!=NULL);
	if (pszBuffer==NULL) return NULL;

	//���ʹ���
	switch (iErrorCode)
	{
	case 0:					//û�д���
		{
			lstrcpyn(pszBuffer,TEXT("����ִ�гɹ�"),wBufferSize);
			break;
		}
	case WSAEADDRNOTAVAIL:	//��ַ��ʽ����
		{
			lstrcpyn(pszBuffer,TEXT("Ŀ���������ַ��ʽ����ȷ��������ٴγ��ԣ�"),wBufferSize);
			break;
		}
	case WSAECONNREFUSED:	//������û������
		{
			lstrcpyn(pszBuffer,TEXT("Ŀ���������æ����û��������"),wBufferSize);
			break;
		}
	case WSAETIMEDOUT:		//���ӳ�ʱ
		{
			lstrcpyn(pszBuffer,TEXT("���ӳ�ʱ��������Ŀ������������ڻ��߷�������ַ��ʽ����ȷ��"),wBufferSize);
			break;
		}
	case WSAEHOSTUNREACH:
		{
			lstrcpyn(pszBuffer,TEXT("��������ʧ�ܣ������Ƿ��Ѿ��ɹ����ź����� Internet ��"),wBufferSize);
			break;
		}
	default:				//Ĭ�ϴ���
		{
			_snprintf(pszBuffer,wBufferSize,TEXT("���Ӵ���ţ�%ld����ϸ������Ϣ��ο����������ֲᣡ"),iErrorCode);
			break;
		}
	}

	return pszBuffer;
}

//��������
WORD CClientSocket::EncryptBuffer(BYTE *pcbDataBuffer, WORD wDataSize, WORD wBufferSize)
{
	int i = 0;
	//Ч�����
	ASSERT(wDataSize>=sizeof(CMD_Head));
	ASSERT(wBufferSize>=(wDataSize+2*sizeof(DWORD)));
	ASSERT(wDataSize<=(sizeof(CMD_Head)+SOCKET_PACKAGE));

	//��������
	WORD wEncryptSize=wDataSize-sizeof(CMD_Command),wSnapCount=0;
	if ((wEncryptSize%sizeof(DWORD))!=0)
	{
		wSnapCount=sizeof(DWORD)-wEncryptSize%sizeof(DWORD);
		memset(pcbDataBuffer+sizeof(CMD_Info)+wEncryptSize,0,wSnapCount);
	}

	//Ч�������ֽ�ӳ��
	BYTE cbCheckCode=0;
	for (WORD i=sizeof(CMD_Info);i<wDataSize;i++)
	{
		cbCheckCode+=pcbDataBuffer[i];
		pcbDataBuffer[i]=MapSendByte(pcbDataBuffer[i]);
	}

	//��д��Ϣͷ
	CMD_Head * pHead=(CMD_Head *)pcbDataBuffer;
	pHead->CmdInfo.cbCheckCode=~cbCheckCode+1;
	pHead->CmdInfo.wDataSize=wDataSize;
	pHead->CmdInfo.cbMessageVer=SOCKET_VER;

	//������Կ
	DWORD dwXorKey=m_dwSendXorKey;
	if (m_dwSendPacketCount==0)
	{
		//���ɵ�һ���������
		GUID Guid;
		CoCreateGuid(&Guid);
		dwXorKey=GetTickCount()*GetTickCount();
		dwXorKey^=Guid.Data1;
		dwXorKey^=Guid.Data2;
		dwXorKey^=Guid.Data3;
		dwXorKey^=*((DWORD *)Guid.Data4);
		
		//���ӳ������
		dwXorKey=SeedRandMap((WORD)dwXorKey);
		dwXorKey|=((DWORD)SeedRandMap((WORD)(dwXorKey>>16)))<<16;
		dwXorKey^=g_dwPacketKey;
		m_dwSendXorKey=dwXorKey;
		m_dwRecvXorKey=dwXorKey;
	}

	//��������
	WORD * pwSeed=(WORD *)(pcbDataBuffer+sizeof(CMD_Info));
	DWORD * pdwXor=(DWORD *)(pcbDataBuffer+sizeof(CMD_Info));
	WORD wEncrypCount=(wEncryptSize+wSnapCount)/sizeof(DWORD);
	for (i=0;i<wEncrypCount;i++)
	{
		*pdwXor++^=dwXorKey;
		dwXorKey=SeedRandMap(*pwSeed++);
		dwXorKey|=((DWORD)SeedRandMap(*pwSeed++))<<16;
		dwXorKey^=g_dwPacketKey;
	}

	//������Կ
	if (m_dwSendPacketCount==0)
	{
		MoveMemory(pcbDataBuffer+sizeof(CMD_Head)+sizeof(DWORD),pcbDataBuffer+sizeof(CMD_Head),wDataSize);
		*((DWORD *)(pcbDataBuffer+sizeof(CMD_Head)))=m_dwSendXorKey;
		pHead->CmdInfo.wDataSize+=sizeof(DWORD);
		wDataSize+=sizeof(DWORD);
	}

	//���ñ���
	m_dwSendPacketCount++;
	m_dwSendXorKey=dwXorKey;

	return wDataSize;
}

//��������
WORD CClientSocket::CrevasseBuffer(BYTE pcbDataBuffer[], WORD wDataSize)
{
	//Ч�����
	ASSERT(m_dwSendPacketCount>0);
	ASSERT(wDataSize>=sizeof(CMD_Head));
	ASSERT(((CMD_Head *)pcbDataBuffer)->CmdInfo.wDataSize==wDataSize);

	//��������
	WORD wSnapCount=0;
	if ((wDataSize%sizeof(DWORD))!=0)
	{
		wSnapCount=sizeof(DWORD)-wDataSize%sizeof(DWORD);
		memset(pcbDataBuffer+wDataSize,0,wSnapCount);
	}

	//��������
	DWORD dwXorKey=m_dwRecvXorKey;
	DWORD * pdwXor=(DWORD *)(pcbDataBuffer+sizeof(CMD_Info));
	WORD  * pwSeed=(WORD *)(pcbDataBuffer+sizeof(CMD_Info));
	WORD wEncrypCount=(wDataSize+wSnapCount-sizeof(CMD_Info))/4;
	for (WORD i=0;i<wEncrypCount;i++)
	{
		if ((i==(wEncrypCount-1))&&(wSnapCount>0))
		{
			BYTE * pcbKey=((BYTE *)&m_dwRecvXorKey)+sizeof(DWORD)-wSnapCount;
			CopyMemory(pcbDataBuffer+wDataSize,pcbKey,wSnapCount);
		}
		dwXorKey=SeedRandMap(*pwSeed++);
		dwXorKey|=((DWORD)SeedRandMap(*pwSeed++))<<16;
		dwXorKey^=g_dwPacketKey;
		*pdwXor++^=m_dwRecvXorKey;
		m_dwRecvXorKey=dwXorKey;
	}

	//Ч�������ֽ�ӳ��
	CMD_Head * pHead=(CMD_Head *)pcbDataBuffer;
	BYTE cbCheckCode=pHead->CmdInfo.cbCheckCode;
	for (int i=sizeof(CMD_Info);i<wDataSize;i++)
	{
		pcbDataBuffer[i]=MapRecvByte(pcbDataBuffer[i]);
		cbCheckCode+=pcbDataBuffer[i];
	}
	if (cbCheckCode!=0) throw TEXT("���ݰ�Ч�������");

	return wDataSize;
}

//��������
LRESULT CClientSocket::OnSocketNotifyConnect(WPARAM wParam, LPARAM lParam)
{
	//�ж�״̬
	int iErrorCode=WSAGETSELECTERROR(lParam);
	if (iErrorCode==0) m_SocketState=SocketState_Connected;
	else CloseSocket(false);

	//����֪ͨ
	TCHAR szErrorDesc[128]=TEXT("");
	GetConnectError(iErrorCode,szErrorDesc,sizeof(szErrorDesc));
	m_pIClientSocketSink->OnSocketConnect(iErrorCode,szErrorDesc,this);

	return 1;
}

//�����ȡ
LRESULT CClientSocket::OnSocketNotifyRead(WPARAM wParam, LPARAM lParam)
{
	try
	{
		//��ȡ����
		int iRetCode=recv(m_hSocket,(char *)m_cbRecvBuf+m_wRecvSize,sizeof(m_cbRecvBuf)-m_wRecvSize,0);
		if (iRetCode==SOCKET_ERROR) throw TEXT("�������ӹرգ���ȡ����ʧ��");
		ASSERT(m_dwSendPacketCount>0);
		m_wRecvSize+=iRetCode;
		m_dwRecvTickCount=GetTickCount()/1000L;

		//��������
		WORD wPacketSize=0;
		BYTE cbDataBuffer[SOCKET_PACKAGE+sizeof(CMD_Head)];
		CMD_Head * pHead=(CMD_Head *)m_cbRecvBuf;

		while (m_wRecvSize>=sizeof(CMD_Head))
		{
			//Ч�����
			wPacketSize=pHead->CmdInfo.wDataSize;
			ASSERT(pHead->CmdInfo.cbMessageVer==SOCKET_VER);
			ASSERT(wPacketSize<=(SOCKET_PACKAGE+sizeof(CMD_Head)));
			if (pHead->CmdInfo.cbMessageVer!=SOCKET_VER) throw TEXT("���ݰ��汾����");
			if (wPacketSize>(SOCKET_PACKAGE+sizeof(CMD_Head))) throw TEXT("���ݰ�̫��");
			if (m_wRecvSize<wPacketSize) return 1;

			//��������
			m_dwRecvPacketCount++;
			CopyMemory(cbDataBuffer,m_cbRecvBuf,wPacketSize);
			m_wRecvSize-=wPacketSize;
			MoveMemory(m_cbRecvBuf,m_cbRecvBuf+wPacketSize,m_wRecvSize);

			//��������
			WORD wRealySize=CrevasseBuffer(cbDataBuffer,wPacketSize);
			ASSERT(wRealySize>=sizeof(CMD_Head));

			//��������
			WORD wDataSize=wRealySize-sizeof(CMD_Head);
			void * pDataBuffer=cbDataBuffer+sizeof(CMD_Head);
			CMD_Command Command=((CMD_Head *)cbDataBuffer)->CommandInfo;

			//�ں�����
			if (Command.wMainCmdID==MDM_KN_COMMAND)
			{
				switch (Command.wSubCmdID)
				{
				case SUB_KN_DETECT_SOCKET:	//������
					{
						//��������
						SendData(MDM_KN_COMMAND,SUB_KN_DETECT_SOCKET,pDataBuffer,wDataSize);
						break;
					}
				}
				continue;
			}

			//��������
			bool bSuccess=m_pIClientSocketSink->OnSocketRead(Command,pDataBuffer,wDataSize,this);
			if (bSuccess==false) throw TEXT("�������ݰ�����ʧ��");
		};
	}
	catch (...) 
	{ 
		CloseSocket(true); 
	}

	return 1;
}

//����ر�
LRESULT CClientSocket::OnSocketNotifyClose(WPARAM wParam, LPARAM lParam)
{
	m_bCloseByServer=true;
	CloseSocket(true);
	return 1;
}

//SOCKET ��Ϣ�������
LRESULT	CClientSocket::OnSocketNotify(WPARAM wParam, LPARAM lParam)
{
	switch (WSAGETSELECTEVENT(lParam))
	{
	case FD_CONNECT:	//��������
		{ 
			return OnSocketNotifyConnect(wParam,lParam); 
		}
	case FD_READ:		//���ݶ�ȡ
		{ 
			return OnSocketNotifyRead(wParam,lParam); 
		}
	case FD_CLOSE:		//����ر�
		{ 
			return OnSocketNotifyClose(wParam,lParam);	
		}
	}

	return 0;
}

//////////////////////////////////////////////////////////////////////////

//����������
extern "C" __declspec(dllexport) void * __cdecl CreateClientSocket(const GUID & Guid, DWORD dwInterfaceVer)
{
	//��������
	CClientSocket * pClientSocket=NULL;
	try
	{
		pClientSocket=new CClientSocket();
		if (pClientSocket==NULL) throw TEXT("����ʧ��");
		void * pObject=pClientSocket->QueryInterface(Guid,dwInterfaceVer);
		if (pObject==NULL) throw TEXT("�ӿڲ�ѯʧ��");
		return pObject;
	}
	catch (...) {}

	//�������
	SafeDelete(pClientSocket);
	return NULL;
}

//////////////////////////////////////////////////////////////////////////
