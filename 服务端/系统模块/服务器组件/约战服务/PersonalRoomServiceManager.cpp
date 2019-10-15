#include "StdAfx.h"
#include "AfxTempl.h"
#include "PersonalRoomGame.h"
#include "PersonalRoomServiceManager.h"
	
#include "../../���������/��¼������/DataBasePacket.h"
////////////////////////////////////////////////////////////////////////

//���캯��
CPersonalRoomServiceManager::CPersonalRoomServiceManager(void)
{
	//״̬����
	m_bIsService=false;

	//���ñ���
	m_pIPersonalRoomItem=NULL;

	return;
}

//��������
CPersonalRoomServiceManager::~CPersonalRoomServiceManager(void)
{	
	//�ͷ�ָ��
	if(m_pIPersonalRoomItem!=NULL) SafeDelete(m_pIPersonalRoomItem);
}

//ֹͣ����
bool CPersonalRoomServiceManager::StopService()
{
	//״̬�ж�
	ASSERT(m_bIsService==true);

	//����״̬
	m_bIsService=false;

	//�ͷ�ָ��
	if(m_pIPersonalRoomItem!=NULL) SafeRelease(m_pIPersonalRoomItem);

	return true;
}

//��������
bool CPersonalRoomServiceManager::StartService()
{
	//״̬�ж�
	ASSERT(m_bIsService==false);
	if(m_bIsService==true) return false;

	//����״̬
	m_bIsService=true;

	//����֪ͨ
	if(m_pIPersonalRoomItem!=NULL) m_pIPersonalRoomItem->OnStartService();

	return true;
}
//�ӿڲ�ѯ
void *  CPersonalRoomServiceManager::QueryInterface(const IID & Guid, DWORD dwQueryVer)
{
								 
	QUERYINTERFACE(IPersonalRoomServiceManager,Guid,dwQueryVer);	
	QUERYINTERFACE_IUNKNOWNEX(IPersonalRoomServiceManager,Guid,dwQueryVer);
	return NULL;
}

//����Լս��
bool CPersonalRoomServiceManager::CreatePersonalRoom(BYTE cbPersonalRoomType)
{
	//�ӿ��ж�
	ASSERT(m_pIPersonalRoomItem==NULL);
	if(m_pIPersonalRoomItem!=NULL) return false;

	try
	{
		m_pIPersonalRoomItem = new CPersonalRoomGame();
		if(m_pIPersonalRoomItem==NULL) throw TEXT("����Լս����ʧ�ܣ�");
	}
	catch(...)
	{
		ASSERT(FALSE);
		return false;
	}

	return m_pIPersonalRoomItem!=NULL;
}

//��ʼ�����ӿ��
bool CPersonalRoomServiceManager::BindTableFrame(ITableFrame * pTableFrame,WORD wTableID)
{
	ASSERT(m_pIPersonalRoomItem!=NULL);
	if(m_pIPersonalRoomItem!=NULL)
	{
		return m_pIPersonalRoomItem->BindTableFrame(pTableFrame,wTableID);	
	}

	return true;
}


//��ʼ���ӿ�
bool CPersonalRoomServiceManager::InitPersonalRooomInterface(tagPersonalRoomManagerParameter & PersonalManagerParameter)
{
	ASSERT(m_pIPersonalRoomItem!=NULL);
	if(m_pIPersonalRoomItem!=NULL)
	{
		return m_pIPersonalRoomItem->InitPersonalRooomInterface(PersonalManagerParameter);
	}

	return true;
}

//ʱ���¼�
bool CPersonalRoomServiceManager::OnEventTimer(DWORD dwTimerID, WPARAM dwBindParameter)
{
	ASSERT(m_pIPersonalRoomItem!=NULL);
	if(m_pIPersonalRoomItem!=NULL)
	{
		return m_pIPersonalRoomItem->OnEventTimer(dwTimerID,dwBindParameter);	
	}

	return true;
}

//���ݿ��¼�
bool CPersonalRoomServiceManager::OnEventDataBase(WORD wRequestID, IServerUserItem * pIServerUserItem, VOID * pData, WORD wDataSize,DWORD dwContextID)
{
	ASSERT(m_pIPersonalRoomItem!=NULL);
	if(m_pIPersonalRoomItem!=NULL)
	{
		return m_pIPersonalRoomItem->OnEventDataBase(wRequestID,pIServerUserItem,pData,wDataSize,dwContextID);	
	}

	return true;
}


//������Ϣ
bool CPersonalRoomServiceManager::OnEventSocketPersonalRoom(WORD wSubCmdID, VOID * pData, WORD wDataSize, IServerUserItem * pIServerUserItem, DWORD dwSocketID)
{
	ASSERT(m_pIPersonalRoomItem!=NULL);
	if(m_pIPersonalRoomItem!=NULL)
	{
		return m_pIPersonalRoomItem->OnEventSocketPersonalRoom(wSubCmdID,pData,wDataSize,pIServerUserItem,dwSocketID);	
	}

	return true;
}

//Լս�������¼�
bool CPersonalRoomServiceManager::OnTCPSocketMainServiceInfo(WORD wSubCmdID, VOID * pData, WORD wDataSize)
{
	ASSERT(m_pIPersonalRoomItem!=NULL);
	if(m_pIPersonalRoomItem!=NULL)
	{
		return m_pIPersonalRoomItem->OnTCPSocketMainServiceInfo(wSubCmdID,pData,wDataSize);	
	}
	return true;
}

//�û���¼
bool CPersonalRoomServiceManager::OnEventUserLogon(IServerUserItem * pIServerUserItem)
{
	ASSERT(m_pIPersonalRoomItem!=NULL);
	if(m_pIPersonalRoomItem!=NULL)
	{
		return m_pIPersonalRoomItem->OnEventUserLogon(pIServerUserItem);	
	}

	return true;
}

//�û��ǳ�
bool CPersonalRoomServiceManager::OnEventUserLogout(IServerUserItem * pIServerUserItem)
{
	ASSERT(m_pIPersonalRoomItem!=NULL);
	if(m_pIPersonalRoomItem!=NULL)
	{
		return m_pIPersonalRoomItem->OnEventUserLogout(pIServerUserItem);	
	}

	return true;
}

//��¼���
bool CPersonalRoomServiceManager::OnEventUserLogonFinish(IServerUserItem * pIServerUserItem)
{
	ASSERT(m_pIPersonalRoomItem!=NULL);
	if(m_pIPersonalRoomItem!=NULL)
	{
		return m_pIPersonalRoomItem->OnEventUserLogonFinish(pIServerUserItem);	
	}

	return true;
}

//����˽�˷�
void CPersonalRoomServiceManager::TestPersonal()
{
	OutputDebugString(TEXT("ptdtsr *** ˽�˷�����"));
}

//��ѯ����
bool CPersonalRoomServiceManager::OnTCPNetworkSubMBQueryGameServer(VOID * pData, WORD wDataSize, DWORD dwSocketID, tagPersonalBindParameter *pBindParameter, ITCPSocketService * pITCPSocketService)
{
	//У������
	ASSERT(wDataSize == sizeof(CMD_MB_QueryGameServer));
	if(wDataSize != sizeof(CMD_MB_QueryGameServer)) return false;

	CMD_MB_QueryGameServer* pGameServer = (CMD_MB_QueryGameServer*)pData;

	//��������
	CMD_CS_C_QueryGameServer QueryGameServer;
	ZeroMemory(&QueryGameServer, sizeof(CMD_CS_C_QueryGameServer));
	QueryGameServer.dwUserID = pGameServer->dwUserID;
	QueryGameServer.dwKindID = pGameServer->dwKindID;
	QueryGameServer.cbIsJoinGame = pGameServer->cbIsJoinGame;
	QueryGameServer.dwSocketID = dwSocketID;
	QueryGameServer.dwClientAddr = (pBindParameter + LOWORD(dwSocketID))->dwClientAddr;

	//��������
	pITCPSocketService->SendData(MDM_CS_SERVICE_INFO, SUB_CS_C_QUERY_GAME_SERVER, &QueryGameServer, sizeof(CMD_CS_C_QueryGameServer));

	return true;
}

//������������
bool CPersonalRoomServiceManager::OnTCPNetworkSubMBSearchServerTable(VOID * pData, WORD wDataSize, DWORD dwSocketID, tagPersonalBindParameter *	pBindParameter, ITCPSocketService * pITCPSocketService)
{
	//У������
	ASSERT(wDataSize == sizeof(CMD_MB_SearchServerTable));
	if(wDataSize != sizeof(CMD_MB_SearchServerTable)) return false;

	CMD_MB_SearchServerTable* pSearchServerTable = (CMD_MB_SearchServerTable*)pData;

	CMD_CS_C_SearchTable SearchTable;
	ZeroMemory(&SearchTable, sizeof(CMD_CS_C_SearchTable));

	SearchTable.dwSocketID = dwSocketID;
	SearchTable.dwKindID = pSearchServerTable->dwKindID;
	SearchTable.dwClientAddr = (pBindParameter + LOWORD(dwSocketID))->dwClientAddr;
	lstrcpyn(SearchTable.szPersonalTableID, pSearchServerTable->szServerID, CountArray(SearchTable.szPersonalTableID));

	pITCPSocketService->SendData(MDM_CS_SERVICE_INFO, SUB_CS_C_SEARCH_TABLE, &SearchTable, sizeof(CMD_CS_C_SearchTable));

	return true;
}

//ǿ�ƽ�ɢ������������
bool CPersonalRoomServiceManager::OnTCPNetworkSubMBDissumeSearchServerTable(VOID * pData, WORD wDataSize, DWORD dwSocketID, tagPersonalBindParameter *	pBindParameter, ITCPSocketService * pITCPSocketService)
{
	//У������
	ASSERT(wDataSize == sizeof(CMD_MB_DissumeSearchServerTable));
	if(wDataSize != sizeof(CMD_MB_DissumeSearchServerTable)) return false;

	CMD_MB_DissumeSearchServerTable* pSearchServerTable = (CMD_MB_DissumeSearchServerTable*)pData;

	CMD_CS_C_SearchTable SearchTable;
	ZeroMemory(&SearchTable, sizeof(CMD_CS_C_SearchTable));

	SearchTable.dwSocketID = dwSocketID;
	SearchTable.dwClientAddr = (pBindParameter + LOWORD(dwSocketID))->dwClientAddr;
	lstrcpyn(SearchTable.szPersonalTableID, pSearchServerTable->szServerID, CountArray(SearchTable.szPersonalTableID));

	pITCPSocketService->SendData(MDM_CS_SERVICE_INFO, SUB_CS_C_DISSUME_SEARCH_TABLE, &SearchTable, sizeof(CMD_CS_C_SearchTable));

	return true;
}

//˽�˷�������
bool CPersonalRoomServiceManager::OnTCPNetworkSubMBPersonalParameter(VOID * pData, WORD wDataSize, DWORD dwSocketID, IDataBaseEngine *	 pIDataBaseEngine)
{
	//У������
	ASSERT(wDataSize == sizeof(CMD_MB_GetPersonalParameter));
	if(wDataSize != sizeof(CMD_MB_GetPersonalParameter)) return false;

	CMD_MB_GetPersonalParameter* pGetPersonalParameter = (CMD_MB_GetPersonalParameter*)pData;

	//��������
	DBR_MB_GetPersonalParameter GetPersonalParameter;
	ZeroMemory(&GetPersonalParameter, sizeof(DBR_MB_GetPersonalParameter));
	GetPersonalParameter.dwKindID = pGetPersonalParameter->dwKindID;

	//Ͷ������
	pIDataBaseEngine->PostDataBaseRequest(DBR_MB_GET_PERSONAL_PARAMETER,dwSocketID, &GetPersonalParameter, sizeof(DBR_MB_GetPersonalParameter));

	return true;
}


//��ѯ˽�˷����б�
bool CPersonalRoomServiceManager::OnTCPNetworkSubMBQueryPersonalRoomList(VOID * pData, WORD wDataSize, DWORD dwSocketID,  ITCPSocketService * pITCPSocketService)
{
	//У������
	ASSERT(wDataSize == sizeof(CMD_MB_QeuryPersonalRoomList));
	if(wDataSize != sizeof(CMD_MB_QeuryPersonalRoomList)) return false;

	CMD_MB_QeuryPersonalRoomList* pQueryPersonalRoomList = (CMD_MB_QeuryPersonalRoomList*)pData;

	CMD_MB_SC_QeuryPersonalRoomList  SC_QeuryPersonalRoomList; 
	SC_QeuryPersonalRoomList.dwUserID = pQueryPersonalRoomList->dwUserID;
	SC_QeuryPersonalRoomList.dwSocketID = dwSocketID;
	SC_QeuryPersonalRoomList.dwKindID = pQueryPersonalRoomList->dwKindID;

	TCHAR szInfo[260] = {0};
	wsprintf(szInfo, TEXT("ptdt *** ��¼������ ��ѯ˽�˷����б� dwSocketID = %d   SC_QeuryPersonalRoomList.dwUserID = %d"), dwSocketID,  SC_QeuryPersonalRoomList.dwUserID);
	OutputDebugString(szInfo);
	//��������
	pITCPSocketService->SendData(MDM_CS_SERVICE_INFO, SUB_CS_S_QUERY_PERSONAL_ROOM_LIST, &SC_QeuryPersonalRoomList, sizeof(CMD_MB_SC_QeuryPersonalRoomList));

	return true;
}


//������󷿼�ɼ�+
bool CPersonalRoomServiceManager::OnTCPNetworkSubQueryUserRoomScore(VOID * pData, WORD wDataSize, DWORD dwSocketID,  IDataBaseEngine *	 pIDataBaseEngine)
{
	OutputDebugString(TEXT("ptdt *** OnTCPNetworkSubQueryUserRoomScore"));

	//У������
	ASSERT(wDataSize == sizeof(CMD_GR_QUERY_USER_ROOM_SCORE));
	if(wDataSize != sizeof(CMD_GR_QUERY_USER_ROOM_SCORE)) return false;

	//��ȡ����
	CMD_GR_QUERY_USER_ROOM_SCORE * pQueryUserRoomScore = (CMD_GR_QUERY_USER_ROOM_SCORE*)pData;
	ASSERT(pQueryUserRoomScore!=NULL);

	//��������
	DBR_GR_QUERY_USER_ROOM_INFO QUERY_USER_ROOM_INFO;
	ZeroMemory(&QUERY_USER_ROOM_INFO, sizeof(DBR_GR_QUERY_USER_ROOM_INFO));
	QUERY_USER_ROOM_INFO.dwUserID = pQueryUserRoomScore->dwUserID;//���󷿼�ɼ������

	//Ͷ������
	pIDataBaseEngine->PostDataBaseRequest(DBR_GR_QUERY_USER_ROOM_SCORE,dwSocketID, &QUERY_USER_ROOM_INFO, sizeof(DBR_GR_QUERY_USER_ROOM_INFO));

	return true;
}


//�û��ӿ�
IUnknownEx * CPersonalRoomServiceManager::GetServerUserItemSink()
{
	ASSERT(m_pIPersonalRoomItem!=NULL);
	if(m_pIPersonalRoomItem!=NULL)
	{
		return QUERY_OBJECT_PTR_INTERFACE(m_pIPersonalRoomItem,IUnknownEx);
	}
	return NULL;
}

//////////////////////////////////////////////////////////////////////////////////

//�����������
DECLARE_CREATE_MODULE(PersonalRoomServiceManager);
											 

////////////////////////////////////////////////////////////////////////
