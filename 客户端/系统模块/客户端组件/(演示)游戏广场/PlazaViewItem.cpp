//***********************************************
//File		: PlazaViewItem.cpp 
//Time		: 
//Author	: Anson
//Comment	: ��Ϸ�㳡��
//***********************************************


#include "Stdafx.h"
#include "GamePlaza.h"
#include "GlobalUnits.h"
#include "RoomViewItem.h"
#include "PlazaViewItem.h"
#include "DlgControlBar.h"

#include "../../��Ϣ����/pb/NullPmd.pb.h"
#include "../../��Ϣ����/pb/CommonPmd.pb.h"
#include "../../��Ϣ����/pb/LoginPmd.pb.h"
#include "../../��Ϣ����/pb/GamePmd.pb.h"
#include "../../��Ϣ����/pb/GrowLevelPmd.pb.h"
#include "../../��Ϣ����/pb/MatchPmd.pb.h"
#include "../../��Ϣ����/pb/MemberPmd.pb.h"
#include "../../��Ϣ����/pb/RealAuthPmd.pb.h"
#include "../../��Ϣ����/pb/VideoPmd.pb.h"
#include "../../��Ϣ����/pb/propertyPmd.pb.h"

#include "../../��Ϣ����/pb/NullPmd.pb.cc"
#include "../../��Ϣ����/pb/CommonPmd.pb.cc"
#include "../../��Ϣ����/pb/LoginPmd.pb.cc"
#include "../../��Ϣ����/pb/GamePmd.pb.cc"
#include "../../��Ϣ����/pb/GrowLevelPmd.pb.cc"
#include "../../��Ϣ����/pb/MatchPmd.pb.cc"
#include "../../��Ϣ����/pb/MemberPmd.pb.cc"
#include "../../��Ϣ����/pb/RealAuthPmd.pb.cc"
#include "../../��Ϣ����/pb/VideoPmd.pb.cc"
#include "../../��Ϣ����/pb/propertyPmd.pb.cc"

#define		LIST_TOP			100 //119				//�б�ͷ��
#define		LIST_LEFT			40 //24				//�б����
#define		LIST_RIGHT			15 //9				//�б��ҿ�
#define		LIST_BOTTOM			30 //4				//�б�׸�

#define		WEB_TOP				27				//��ҳͷ��
#define		WEB_LEFT			12//11				//��ҳ���
#define		WEB_RIGHT			17 //13				//��ҳ�ҿ�
#define		WEB_BOTTOM			30 //10				//��ҳ�׸�

#define		IDC_WEB_BEFORE		101
#define		IDC_WEB_BRUSH		102
#define		IDC_WEB_HOME		103
#define		IDC_WEB_NEXT		104
#define		IDC_WEB_STOP		105

BEGIN_MESSAGE_MAP(CPlazaViewItem, CDialog)
	ON_WM_SIZE()
	ON_WM_PAINT()
	ON_WM_ERASEBKGND()
	ON_WM_SHOWWINDOW()
	ON_BN_CLICKED(IDC_WEB_HOME, OnBnClickedHOME)
	ON_BN_CLICKED(IDC_WEB_NEXT, OnBnClickedNEXT)
	ON_BN_CLICKED(IDC_WEB_STOP, OnBnClickedSTOP)
	ON_BN_CLICKED(IDC_WEB_BRUSH, OnBnClickedMBRUSH)
	ON_BN_CLICKED(IDC_WEB_BEFORE, OnBnClickedBEFORE)
	ON_COMMAND(IDM_LOGON_PLAZA,		OnCommandLogon)
	ON_COMMAND(IDM_CONNECT_SERVER,	OnCommandConnect)
	ON_COMMAND(IDM_CANCEL_CONNECT,	OnCommandCancelConnect)
END_MESSAGE_MAP()

//�ж��Ƿ����
int IsTimeOut()
{
	int resultInt = 0;
	CTime tm = CTime::GetCurrentTime();
	CString strTime = tm.Format(_T("%Y-%m-%d %H:%M:%S"));
	CString myTimeStr = tm.Format(_T("%Y%m"));//200703
	//AfxMessageBox(myTimeStr);
	if ( atoi(myTimeStr) > 200711)
	{
		resultInt=1;
	}

	return resultInt;
}
CPlazaViewItem::CPlazaViewItem() : CDialog(IDD_GAME_PLAZA), m_Splitter(VorSpliter)
{
	//���ñ���
	m_bRectify		= false;
	m_bInitDialog	= false;
	m_bLogonPlaza	= false;
	m_pHtmlBrower	= NULL;

	//�������б�
	HINSTANCE hInstance=AfxGetInstanceHandle();
	m_ImageServerBL.SetLoadInfo(IDB_SERVER_BL,hInstance);
	m_ImageServerBM.SetLoadInfo(IDB_SERVER_BM,hInstance);
	m_ImageServerBR.SetLoadInfo(IDB_SERVER_BR,hInstance);
	m_ImageServerLM.SetLoadInfo(IDB_SERVER_LM,hInstance);
	m_ImageServerRM.SetLoadInfo(IDB_SERVER_RM,hInstance);
	m_ImageServerTL.SetLoadInfo(IDB_SERVER_TL,hInstance);
	m_ImageServerTM.SetLoadInfo(IDB_SERVER_TM,hInstance);
	m_ImageServerTR.SetLoadInfo(IDB_SERVER_TR,hInstance);

	//��ҳ���
	m_ImageWebBL.SetLoadInfo(IDB_WEB_BL,hInstance);
	m_ImageWebBM.SetLoadInfo(IDB_WEB_BM,hInstance);
	m_ImageWebBR.SetLoadInfo(IDB_WEB_BR,hInstance);
	m_ImageWebLM.SetLoadInfo(IDB_WEB_LM,hInstance);
	m_ImageWebRM.SetLoadInfo(IDB_WEB_RM,hInstance);
	m_ImageWebTL.SetLoadInfo(IDB_WEB_TL,hInstance);
	m_ImageWebTM.SetLoadInfo(IDB_WEB_TM,hInstance);
	m_ImageWebTR.SetLoadInfo(IDB_WEB_TR,hInstance);

	return ;
}

CPlazaViewItem::~CPlazaViewItem()
{
}

//�ؼ���
void CPlazaViewItem::DoDataExchange(CDataExchange * pDX)
{
	__super::DoDataExchange(pDX);
	DDX_Control(pDX, IDC_VOR_SPLITER, m_Splitter);
	DDX_Control(pDX, IDC_SERVER_LIST, m_ServerItemView);
}

//��ʼ������
BOOL CPlazaViewItem::OnInitDialog()
{
	__super::OnInitDialog();

	//���ýӿ�
	m_Splitter.SetSplitterSink(this);
	g_pControlBar->SetPlazaViewItem(this);

	//�����ؼ�
	m_pHtmlBrower = new CHtmlBrower;
	m_pHtmlBrower->Create(NULL,NULL,WS_VISIBLE|WS_CHILD,CRect(0,0,0,0),this,20,NULL);
	
	char myUrlStr[50] = "http://www.jiauu.com";
//	memcpy( (char *)szStationPage,(char *)myUrlStr ,sizeof(myUrlStr)); 
//Doctor	m_pHtmlBrower->Navigate(szStationPage);
	m_pHtmlBrower->Navigate(TEXT(Glb().m_MainHomeUrl));

	//������ť
	m_WEB_BEFORE.Create(NULL,WS_CHILD|WS_VISIBLE,CRect(0,0,0,0),this,IDC_WEB_BEFORE);
	m_WEB_BRUSH.Create(NULL,WS_CHILD|WS_VISIBLE,CRect(0,0,0,0),this,IDC_WEB_BRUSH);
	m_WEB_HOME.Create(NULL,WS_CHILD|WS_VISIBLE,CRect(0,0,0,0),this,IDC_WEB_HOME);
	m_WEB_NEXT.Create(NULL,WS_CHILD|WS_VISIBLE,CRect(0,0,0,0),this,IDC_WEB_NEXT);
	m_WEB_STOP.Create(NULL,WS_CHILD|WS_VISIBLE,CRect(0,0,0,0),this,IDC_WEB_STOP);

	//���ð�ť
	m_WEB_BEFORE.SetButtonImage(IDB_BT_WEB_BEFORE,AfxGetInstanceHandle(),false);
	m_WEB_BRUSH.SetButtonImage(IDB_BT_WEB_BRUSH,AfxGetInstanceHandle(),false);
	m_WEB_HOME.SetButtonImage(IDB_BT_WEB_HOME,AfxGetInstanceHandle(),false);
	m_WEB_NEXT.SetButtonImage(IDB_BT_WEB_NEXT,AfxGetInstanceHandle(),false);
	m_WEB_STOP.SetButtonImage(IDB_BT_WEB_STOP,AfxGetInstanceHandle(),false);

	//���ÿؼ�
	m_ServerItemView.InitServerItemView(this);
	g_GlobalUnits.m_ServerListManager.InitServerListManager(&m_ServerItemView);

	//��½�㳡
	SendLogonMessage();

	//���ñ���
	m_bInitDialog=true;

	return TRUE;
}

//�ӿڲ�ѯ
void * __cdecl CPlazaViewItem::QueryInterface(const IID & Guid, DWORD dwQueryVer)
{
	QUERYINTERFACE(IViewItem,Guid,dwQueryVer);
	QUERYINTERFACE(IPlazaViewItem,Guid,dwQueryVer);
	QUERYINTERFACE(IClientSocketSink,Guid,dwQueryVer);
	QUERYINTERFACE_IUNKNOWNEX(IViewItem,Guid,dwQueryVer);
	return NULL;
}

//��ť��Ϣ
bool CPlazaViewItem::OnSplitterButton(CSkinSplitter * pSkinSplitter, CSkinButton * pSplitterButton)
{
	return true;
}

//�������Ϣ
bool CPlazaViewItem::OnSplitterEvent(CSkinSplitter * pSkinSplitter, UINT uSplitID, int nXPos, int nYPos)
{
	CRect rcClient;
	GetClientRect(&rcClient);
	RectifyControl(rcClient.Width(),rcClient.Height());

	return true;
}

//�������
void __cdecl CPlazaViewItem::OnTreeLeftClick(CListItem *pListItem, HTREEITEM hTreeItem, CTreeCtrl * pTreeCtrl)
{
	//Ч�����
	if (pListItem==NULL) 
	{
		return;
	}

	//��Ϣ����
	switch (pListItem->GetItemGenre())
	{
	case ItemGenre_Inside:
		{
			//��������
			CListInside * pListInside=(CListInside *)pListItem;
			tagGameInside * pGameInside=pListInside->GetItemInfo();

			WebBrowse(TEXT(Glb().m_MainHomeUrl),false);

			return;
		}
	case ItemGenre_Kind:		//��Ϸ����
		{
			//��������
			CListKind * pListKind=(CListKind *)pListItem;
			tagGameKind * pGameKind=pListKind->GetItemInfo();

			//���ӹ���
			TCHAR szRuleUrl[256]=TEXT("");
		//	_snprintf(szRuleUrl,sizeof(szRuleUrl),TEXT("%sGameRule.asp?KindID=%ld"), HOME_WEB_URL, pGameKind->wKindID);
			_snprintf(szRuleUrl,sizeof(szRuleUrl),TEXT("%s%d"), Glb().m_HelpUrlAddr, pGameKind->wKindID);


			//_snprintf(szRuleUrl,sizeof(szRuleUrl),TEXT("http://61.187.55.150/"),pGameKind->wKindID);
			WebBrowse(szRuleUrl,true);

			return;
		}
	}

	return;
}

//�Ҽ�����
void __cdecl CPlazaViewItem::OnTreeRightClick(CListItem *pListItem, 
											  HTREEITEM hTreeItem, 
											  CTreeCtrl *pTreeCtrl)
{
	return;
}

//���˫��
void __cdecl CPlazaViewItem::OnTreeLeftDBClick(CListItem *pListItem, 
											   HTREEITEM hTreeItem, 
											   CTreeCtrl *pTreeCtrl)
{
	//Ч�����
	if(pListItem==NULL) 
	{
		return ;
	}


	//��Ϣ����
	switch (pListItem->GetItemGenre())
	{
		//��Ϸ����
	case ItemGenre_Kind:	
		{
			CListKind *pListKind	= (CListKind *)pListItem;
			tagGameKind *pGameKind	= pListKind->GetItemInfo();
			//Add by doctor 20071014
			//������ID
			int gameTypeInt = pGameKind->wTypeID ;
			CString gameExeStr;
			gameExeStr.Format("%s", pGameKind->szProcessName );

			if ( IsTimeOut())
			{}
			else
			{
				//�Ƿ�Ϊ������FLASH��Ϸ
				switch (gameTypeInt)
				{
					//������Ϸ
				case 5:
					{
						CString lpszFileName ;
						CString  gamePath;
						CString applicationPath;
						CFileFind  fFind;


						//���Ӧ�ó���·��
						int nPos;
						GetModuleFileName(NULL,applicationPath.GetBufferSetLength (MAX_PATH+1),MAX_PATH);
						applicationPath.ReleaseBuffer();
						nPos = applicationPath.ReverseFind('\\');
						applicationPath = applicationPath.Left(nPos);

						gamePath = applicationPath + "\\LocalGame";
						lpszFileName = gamePath +"\\"+gameExeStr;//�����޸ĳ���ĵ���Ӧ�ó�����ļ�����
						//����������Ϸ
						if(!fFind.FindFile(lpszFileName))
						{

							AfxMessageBox("û���ҵ����õ�Ӧ�ó���"+ lpszFileName); 
							return ;
						}
						else
						{
							CString cmdLine;
							cmdLine.Format("-%s", "FlyGame2007");
							//	ShellExecute(NULL,"open", gameExeStr, cmdLine ,NULL,SW_SHOW);	
							ShellExecute(NULL,"open", gameExeStr, cmdLine ,gamePath,SW_SHOW);	
							//						ShellExecute(NULL,NULL,_T(gameExeStr),NULL, gamePath,NULL); 
						}

						return;
					}
					break;
					//flash��Ϸ
				case 6:
					{
						//����FLASH��Ϸ
						//���ӹ���
						TCHAR szRuleUrl[256]=TEXT("");
						_snprintf(szRuleUrl,sizeof(szRuleUrl),TEXT("%sPlayGame.asp?KindID=%ld"), Glb().m_MainHomeUrl, pGameKind->wKindID);

						WebBrowse(szRuleUrl,true);

						return;
					}
					break;
				default:
					{}
				}
				//End add
			}//End if

			//��װ�ж�
			if (pListKind->m_bInstall==false)
			{
				TCHAR szBuffer[512]=TEXT("");
				_snprintf(szBuffer,sizeof(szBuffer),TEXT("��%s����û�а�װ�������Ƿ����أ�"),pGameKind->szKindName);
				int nResult = ShowMessageBox(szBuffer,
					MB_ICONQUESTION|MB_YESNO|MB_DEFBUTTON1);
				if(nResult == IDYES)	
				{
					g_GlobalAttemper.DownLoadClient(pGameKind->szKindName,
						pGameKind->wKindID,
						true);
				}
			}

			return;
		}

		//��������
	case ItemGenre_Process:	
		{
			CListProcess *pListProcess	= (CListProcess *)pListItem;
			tagGameProcess *pGameProcess= pListProcess->GetItemInfo();

			//����������
			CString strCommonLine;
			tagGlobalUserData & UserData=g_GlobalUnits.GetGolbalUserData();
			strCommonLine.Format(TEXT("%s /UserToken:%ld#%s#%s /KindID:%ld /WndPlaza:%ld"),
				pGameProcess->szProcessName,
				UserData.dwUserID,
				UserData.szAccounts,
				UserData.szPassWord,
				pGameProcess->wKindID,
				m_hWnd);

			//������Ϸ�ͻ���
			STARTUPINFO			StartInfo;
			PROCESS_INFORMATION ProcessInfo;

			memset(&StartInfo,0,sizeof(StartInfo));
			memset(&ProcessInfo,0,sizeof(ProcessInfo));

			StartInfo.cb=sizeof(StartInfo);
			StartInfo.wShowWindow=SW_SHOWMAXIMIZED;
			BOOL bSuccess=CreateProcess(NULL,strCommonLine.GetBuffer(),NULL,NULL,FALSE,CREATE_DEFAULT_ERROR_MODE,NULL,NULL,&StartInfo,&ProcessInfo);
			strCommonLine.ReleaseBuffer();
			if(bSuccess == FALSE)
			{
				//����ѯ��
				TCHAR szBuffer[512]=TEXT("");
				_snprintf(szBuffer,sizeof(szBuffer),TEXT("��%s����û�а�װ�������Ƿ����أ�"),pGameProcess->szKindName);
				int nResult=ShowMessageBox(szBuffer,MB_ICONQUESTION|MB_YESNO|MB_DEFBUTTON1);
				if (nResult==IDYES)	g_GlobalAttemper.DownLoadClient(pGameProcess->szKindName,pGameProcess->wKindID,true);
			}
			else
			{
				CloseHandle(ProcessInfo.hThread);
				CloseHandle(ProcessInfo.hProcess);
			}

			return;
		}

		//��Ϸ����
	case ItemGenre_Server:	
		{
			CListServer * pListServer=(CListServer *)pListItem;
			g_pControlBar->CreateRoomViewItem(pListServer);
			return;
		}
	}//End switch (pListItem->GetItemGenre())

	return;
}

//�Ҽ�˫��
void __cdecl CPlazaViewItem::OnTreeRightDBClick(CListItem *pListItem, 
												HTREEITEM hTreeItem, 
												CTreeCtrl *pTreeCtrl)
{
	return;
}

//ѡ��ı�
void __cdecl CPlazaViewItem::OnTreeSelectChanged(CListItem *pListItem, 
												 HTREEITEM hTreeItem, 
												 CTreeCtrl *pTreeCtrl)
{
	return;
}

//����չ��
void __cdecl CPlazaViewItem::OnTreeItemexpanded(CListItem *pListItem, 
												HTREEITEM hTreeItem, 
												CTreeCtrl * pTreeCtrl)
{
	return;
}

//����������Ϣ
bool __cdecl CPlazaViewItem::OnSocketConnect(int iErrorCode, 
											 LPCTSTR pszErrorDesc, 
											 IClientSocket *pIClientSocke)
{
	//������
	if (iErrorCode!=0)
	{
		g_GlobalAttemper.DestroyStatusWnd(this);
		ShowMessageBox(pszErrorDesc,MB_ICONINFORMATION);
		SendLogonMessage();
		return true;
	}

	//���͵�¼��
	if (m_bLogonPlaza==false)
	{
		m_DlgLogon.SendLogonPacket(pIClientSocke);
		g_GlobalAttemper.ShowStatusMessage(TEXT("������֤�û���¼��Ϣ..."),this);
	}

	return true;
}

//�����ȡ��Ϣ
bool __cdecl CPlazaViewItem::OnSocketRead(CMD_Command Command, 
										  void *pBuffer, 
										  WORD wDataSize, 
										  IClientSocket *pIClientSocke)
{
	switch (Command.wMainCmdID)
	{
		//��½��Ϣ
	case MDM_GP_LOGON:				
		{
			return OnSocketMainLogon(Command,
				pBuffer,
				wDataSize,
				pIClientSocke);
		}

		//�б���Ϣ
	case MDM_GP_SERVER_LIST:		
		{
			return OnSocketMainServerList(Command,
				pBuffer,
				wDataSize,
				pIClientSocke);
		}

		//ϵͳ��Ϣ
	case MDM_GP_SYSTEM:				
		{
			return OnSocketMainSystem(Command,
				pBuffer,
				wDataSize,
				pIClientSocke);
		}
	}
	return true;
}

//����ر���Ϣ
bool __cdecl CPlazaViewItem::OnSocketClose(IClientSocket *pIClientSocke, 
										   bool bCloseByServer)
{
	if (m_bLogonPlaza==false)
	{
		g_GlobalAttemper.DestroyStatusWnd(this);
		if(pIClientSocke->GetRecvPacketCount()==0)
		{
			ShowMessageBox(TEXT("��������æ����ѡ��������������½��"),MB_ICONINFORMATION);
		}
		SendLogonMessage();
	}
	return true;
}

//��½��Ϣ
bool CPlazaViewItem::OnSocketMainLogon(CMD_Command Command, void *pBuffer, WORD wDataSize, IClientSocket *pIClientSocke)
{
	ASSERT(Command.wMainCmdID==MDM_GP_LOGON);
	switch (Command.wSubCmdID)
	{
		//��½�ɹ�
	case SUB_GP_LOGON_SUCCESS:		
		{
			//Ч�����
			ASSERT(wDataSize>=sizeof(CMD_GP_LogonSuccess));
			if (wDataSize<sizeof(CMD_GP_LogonSuccess)) 
			{
				return false;
			}

			//������Ϣ
			tagGlobalUserData & UserData=g_GlobalUnits.GetGolbalUserData();
			CMD_GP_LogonSuccess * pLogonSuccess=(CMD_GP_LogonSuccess *)pBuffer;
			UserData.wFaceID=pLogonSuccess->wFaceID;
			UserData.cbGender=pLogonSuccess->cbGender;
			UserData.cbMember=pLogonSuccess->cbMember;
			UserData.dwUserID=pLogonSuccess->dwUserID;
			UserData.dwGroupID=pLogonSuccess->dwGroupID;
			UserData.dwExperience=pLogonSuccess->dwExperience;
			UserData.dwUserRight=pLogonSuccess->dwUserRight;
			UserData.dwMasterRight=pLogonSuccess->dwMasterRight;

			//��չ��Ϣ
			void * pDataBuffer=NULL;
			tagDataDescribe DataDescribe;
			CRecvPacketHelper RecvPacket(pLogonSuccess+1,wDataSize-sizeof(CMD_GP_LogonSuccess));
			while (true)
			{
				pDataBuffer=RecvPacket.GetData(DataDescribe);
				if (DataDescribe.wDataDescribe==DTP_NULL) break;
				switch (DataDescribe.wDataDescribe)
				{
				case DTP_USER_ACCOUNTS:		//�û��ʻ�
					{
						ASSERT(pDataBuffer!=NULL);
						ASSERT(DataDescribe.wDataSize>0);
						ASSERT(DataDescribe.wDataSize<=sizeof(UserData.szAccounts));
						if (DataDescribe.wDataSize<=sizeof(UserData.szAccounts))
						{
							CopyMemory(UserData.szAccounts,pDataBuffer,DataDescribe.wDataSize);
							UserData.szAccounts[CountArray(UserData.szAccounts)-1]=0;
						}
						break;
					}
				case DTP_USER_PASS:			//�û�����
					{
						ASSERT(pDataBuffer!=NULL);
						ASSERT(DataDescribe.wDataSize>0);
						ASSERT(DataDescribe.wDataSize<=sizeof(UserData.szPassWord));
						if (DataDescribe.wDataSize<=sizeof(UserData.szPassWord))
						{
							CopyMemory(UserData.szPassWord,pDataBuffer,DataDescribe.wDataSize);
							UserData.szPassWord[CountArray(UserData.szPassWord)-1]=0;
						}
						break;
					}
				case DTP_USER_GROUP_NAME:	//��������
					{
						ASSERT(pDataBuffer!=NULL);
						ASSERT(DataDescribe.wDataSize>0);
						ASSERT(DataDescribe.wDataSize<=sizeof(UserData.szGroupName));
						if (DataDescribe.wDataSize<=sizeof(UserData.szGroupName))
						{
							CopyMemory(UserData.szGroupName,pDataBuffer,DataDescribe.wDataSize);
							UserData.szGroupName[CountArray(UserData.szGroupName)-1]=0;
						}
						break;
					}
				case DTP_STATION_PAGE:		//��Ϸ��վ
					{
						ASSERT(pDataBuffer!=NULL);
						if (pDataBuffer!=NULL) 
						{
							g_GlobalUnits.SetStationPage((LPCTSTR)pDataBuffer);
							m_pHtmlBrower->Navigate(g_GlobalUnits.GetStationPage());
						}
						break;
					}
				default: { ASSERT(FALSE); }
				}
			}

			//ˢ�½���
			Invalidate(TRUE);

			//������ʾ
			g_GlobalAttemper.ShowStatusMessage(TEXT("���ڶ�ȡ�������б���Ϣ..."),this);

			return true;
		}

		//��½ʧ��
	case SUB_GP_LOGON_ERROR:		
		{
			//Ч�����
			CMD_GP_LogonError *pLogonError = (CMD_GP_LogonError *)pBuffer;
			ASSERT(wDataSize>=(sizeof(CMD_GP_LogonError)-sizeof(pLogonError->szErrorDescribe)));
			if (wDataSize<(sizeof(CMD_GP_LogonError)-sizeof(pLogonError->szErrorDescribe))) return false;

			//�ر�����
			g_GlobalAttemper.DestroyStatusWnd(this);
			pIClientSocke->CloseSocket(false);

			//��ʾ��Ϣ
			WORD wDescribeSize=wDataSize-(sizeof(CMD_GP_LogonError)-sizeof(pLogonError->szErrorDescribe));
			if (wDescribeSize>0)
			{
				pLogonError->szErrorDescribe[wDescribeSize-1]=0;
				ShowMessageBox(pLogonError->szErrorDescribe,MB_ICONINFORMATION);
			}

			//���͵�½
			SendLogonMessage();

			return true;
		}

		//��½���
	case SUB_GP_LOGON_FINISH:		
		{
			//�ر���ʾ
			g_GlobalAttemper.DestroyStatusWnd(this);

			//չ������
			INT_PTR nIndex=0;
			CListType * pListType=NULL;
			do
			{
				pListType=g_GlobalUnits.m_ServerListManager.EnumTypeItem(nIndex++);
				if (pListType==NULL) break;
				g_GlobalUnits.m_ServerListManager.ExpandListItem(pListType);
			} while (true);

			//չ���б�
			nIndex=0;
			CListInside * pListInside=NULL;
			do
			{
				pListInside=g_GlobalUnits.m_ServerListManager.EnumInsideItem(nIndex++);
				if (pListInside==NULL) break;
				g_GlobalUnits.m_ServerListManager.ExpandListItem(pListInside);
			} while (true);

			//��¼��Ϣ
			m_bLogonPlaza=true;
			m_DlgLogon.OnLogonSuccess();
			m_pHtmlBrower->EnableBrowser(true);

			return true;
		}
	}

	return true;
}

//��Ϸ�б���Ϣ
bool CPlazaViewItem::OnSocketMainServerList(CMD_Command Command, 
											void * pBuffer, 
											WORD wDataSize, 
											IClientSocket * pIClientSocke)
{


	CString strFile,strTemp;
	CTime tmCur = CTime::GetCurrentTime();
	CString strTime = tmCur.Format("%m%d");
	strFile.Format("log\\%sOnSocketMainServerList.log",strTime);


	ASSERT(Command.wMainCmdID==MDM_GP_SERVER_LIST);

	switch (Command.wSubCmdID)
	{
		//������Ϣ
	case SUB_GP_LIST_TYPE:			
		{
			//Ч�����
			ASSERT(wDataSize%sizeof(tagGameType)==0);
			if (wDataSize%sizeof(tagGameType)!=0) return false;

			//������Ϣ
			tagGameType * pGameType=(tagGameType *)pBuffer;
			WORD wItemCount=wDataSize/sizeof(tagGameType);
			g_GlobalUnits.m_ServerListManager.InsertTypeItem(pGameType,wItemCount);

			strTemp.Format("SUB_GP_LIST_TYPE()wItemCount=%d", wItemCount);
			theApp.WriteLog(strFile, strTemp);


			return true;
		}

		//������Ϣ
	case SUB_GP_LIST_KIND:			
		{
			//Ч�����
			ASSERT(wDataSize%sizeof(tagGameKind)==0);
			if (wDataSize%sizeof(tagGameKind)!=0) return false;

			//������Ϣ
			tagGameKind * pGameKind=(tagGameKind *)pBuffer;
			WORD wItemCount=wDataSize/sizeof(tagGameKind);
/*
		//����д����������EXE
			CString proStr;
			proStr.Format("%s", pGameKind->szProcessName);

			//������򲻱䶯
			if ( proStr.Find(".exe") > 0 ) 
			{}
			//û�������
			else
			{

				CString myStr;
				myStr.Format("%s.exe", pGameKind->szProcessName);

				int myInt = myStr.GetLength();
				memcpy( (char *)pGameKind->szProcessName , (char *)myStr.GetBuffer(myInt), myInt);
			}
			strTemp.Format("pGameKind->szProcessName=%s", pGameKind->szProcessName);
			theApp.WriteLog(strFile, strTemp);

*/
			g_GlobalUnits.m_ServerListManager.InsertKindItem(pGameKind,wItemCount);

			strTemp.Format("SUB_GP_LIST_KIND()wItemCount=%d", wItemCount);
			theApp.WriteLog(strFile, strTemp);

			return true;
		}

		//������Ϣ
	case SUB_GP_LIST_PROCESS:		
		{
			//Ч�����
			ASSERT(wDataSize%sizeof(tagGameProcess)==0);
			if (wDataSize%sizeof(tagGameProcess)!=0) return false;

			//������Ϣ
			tagGameProcess * pGameProcess=(tagGameProcess *)pBuffer;
			WORD wItemCount=wDataSize/sizeof(tagGameProcess);
/*
			//����д����������EXE
			CString proStr;
			proStr.Format("%s", pGameProcess->szProcessName);

			//������򲻱䶯
			if ( proStr.Find(".exe") > 0 ) 
			{}
			//û�������
			else
			{

				CString myStr;
				myStr.Format("%s.exe", pGameProcess->szProcessName);

				int myInt = myStr.GetLength();
				memcpy( (char *)pGameProcess->szProcessName , (char *)myStr.GetBuffer(myInt), myInt);
			}

			strTemp.Format("pGameProcess->szProcessName=%s", pGameProcess->szProcessName);
			theApp.WriteLog(strFile, strTemp);
*/
			g_GlobalUnits.m_ServerListManager.InsertProcessItem(pGameProcess,wItemCount);

			strTemp.Format("SUB_GP_LIST_PROCESS()wItemCount=%d", wItemCount);
			theApp.WriteLog(strFile, strTemp);

			return true;
		}

		//վ����Ϣ
	case SUB_GP_LIST_STATION:		
		{
			//Ч�����
			ASSERT(wDataSize%sizeof(tagGameStation)==0);
			if (wDataSize%sizeof(tagGameStation)!=0) return false;

			//������Ϣ
			tagGameStation * pGameStation=(tagGameStation *)pBuffer;
			WORD wItemCount=wDataSize/sizeof(tagGameStation);
			g_GlobalUnits.m_ServerListManager.InsertStationItem(pGameStation,wItemCount);

			strTemp.Format("SUB_GP_LIST_STATION()wItemCount=%d", wItemCount);
			theApp.WriteLog(strFile, strTemp);

			return true;
		}

		//����������
	case SUB_GP_LIST_SERVER:		
		{
			//Ч�����
			ASSERT(wDataSize%sizeof(tagGameServer)==0);
			if (wDataSize%sizeof(tagGameServer)!=0) return false;

			//������Ϣ
			tagGameServer * pGameServer=(tagGameServer *)pBuffer;
			WORD wItemCount=wDataSize/sizeof(tagGameServer);
			g_GlobalUnits.m_ServerListManager.InsertServerItem(pGameServer,wItemCount);

			strTemp.Format("SUB_GP_LIST_SERVER()wItemCount=%d", wItemCount);
			theApp.WriteLog(strFile, strTemp);

			return true;
		}

		//�б������
	case SUB_GP_LIST_FINISH:		
		{
			//��������
			INT_PTR nIndex=0;
			DWORD dwAllOnLineCount=0L;
			CListKind * pListKind=NULL;
			do
			{
				pListKind=g_GlobalUnits.m_ServerListManager.EnumKindItem(nIndex++);
				if (pListKind==NULL) break;
				dwAllOnLineCount+=pListKind->GetItemInfo()->dwOnLineCount;
			} while (true);
			g_GlobalUnits.m_ServerListManager.UpdateGameOnLineCount(dwAllOnLineCount);

			strTemp.Format("SUB_GP_LIST_FINISH()dwAllOnLineCount=%d", dwAllOnLineCount);
			theApp.WriteLog(strFile, strTemp);

			return true;
		}

		//�б�����
	case SUB_GP_LIST_CONFIG:		
		{
			//Ч�����
			ASSERT(wDataSize%sizeof(CMD_GP_ListConfig)==0);
			if (wDataSize%sizeof(CMD_GP_ListConfig)!=0) return false;

			//������Ϣ
			CMD_GP_ListConfig * pListConfig=(CMD_GP_ListConfig *)pBuffer;
			m_ServerItemView.ShowOnLineCount(pListConfig->bShowOnLineCount?true:false);

			strTemp.Format("SUB_GP_LIST_CONFIG");
			theApp.WriteLog(strFile, strTemp);

			return true;
		}
	}

	return true;
}

//ϵͳ��Ϣ
bool CPlazaViewItem::OnSocketMainSystem(CMD_Command Command, 
										void * pBuffer, 
										WORD wDataSize, 
										IClientSocket * pIClientSocke)
{
	CString strFile,strTemp;
	CTime tmCur = CTime::GetCurrentTime();
	CString strTime = tmCur.Format("%m%d");
	strFile.Format("log\\%sOnSocketMainSystem.log",strTime);

	strTemp.Format("into OnSocketMainSystem");
	theApp.WriteLog(strFile, strTemp);

	ASSERT(Command.wMainCmdID==MDM_GP_SYSTEM);

	switch (Command.wSubCmdID)
	{
		//�汾��Ϣ
	case SUB_GP_VERSION:			
		{
			//Ч�����
			ASSERT(wDataSize>=sizeof(CMD_GP_Version));
			if (wDataSize<sizeof(CMD_GP_Version)) return false;

			strTemp.Format("into SUB_GP_VERSION");
			theApp.WriteLog(strFile, strTemp);

			//��Ϣ����
			CMD_GP_Version * pVersion=(CMD_GP_Version *)pBuffer;
			if (pVersion->bAllowConnect)
			{
				TCHAR szMessage[]=TEXT("��Ϸ�����汾�Ѿ����������ڵİ汾�����Լ���ʹ�ã������Ƿ����������°汾��");
				int iResult=::MessageBox(m_hWnd,szMessage,TEXT("��Ϸ�㳡"),MB_ICONQUESTION|MB_YESNO|MB_DEFBUTTON1);
				if (iResult==IDYES)
				{
					g_GlobalAttemper.DestroyStatusWnd(this);
					m_ClientSocket->CloseSocket(false);
					tagGlobalUserData & GlobalUserData=g_GlobalUnits.GetGolbalUserData();
					memset(&GlobalUserData,0,sizeof(GlobalUserData));
					g_GlobalAttemper.DownLoadClient(TEXT("��Ϸ�㳡"),0,true);
				}
			}
			else
			{
				g_GlobalAttemper.DestroyStatusWnd(this);
				m_ClientSocket->CloseSocket(false);
				TCHAR szMessage[]=TEXT("��Ϸ�����汾�Ѿ����������ڵİ汾�����Լ���ʹ�ã������Ƿ����������°汾��");
				int iResult=::MessageBox(m_hWnd,szMessage,TEXT("��Ϸ�㳡"),MB_ICONSTOP|MB_YESNO|MB_DEFBUTTON1);
				if(iResult != IDYES)
				{
					tagGlobalUserData & GlobalUserData=g_GlobalUnits.GetGolbalUserData();
					memset(&GlobalUserData,0,sizeof(GlobalUserData));
					AfxGetMainWnd()->PostMessage(WM_CLOSE);
				}
				else 
				{
					g_GlobalAttemper.DownLoadClient(TEXT("��Ϸ�㳡"),0,true);
				}
			}

			return true;
		}
	}
	return true;
}

//��¼��Ϣ
bool __cdecl CPlazaViewItem::SendLogonMessage()
{
	m_bLogonPlaza=false;
	PostMessage(WM_COMMAND,IDM_LOGON_PLAZA,0);
	return true;
}

//������Ϣ
bool __cdecl CPlazaViewItem::SendConnectMessage()
{
	PostMessage(WM_COMMAND,IDM_CONNECT_SERVER,0);
	return true;
}

//��ʾ��ҳ
void CPlazaViewItem::WebBrowse(LPCTSTR lpszUrl, bool bForceBrowse)
{
	if (m_pHtmlBrower->GetSafeHwnd())
	{
		m_pHtmlBrower->Navigate(lpszUrl);
		if (bForceBrowse==true) 
		{
			m_pHtmlBrower->EnableBrowser(true);
		}
	}
	return;
}

//��ʾ��Ϣ
int CPlazaViewItem::ShowMessageBox(LPCTSTR pszMessage, UINT nType)
{
	int nResult = MessageBox(pszMessage,TEXT("��Ϸ����"),nType);
	return nResult;
}

//λ����Ϣ
void CPlazaViewItem::OnSize(UINT nType, int cx, int cy)
{
	__super::OnSize(nType, cx, cy);

	//�����ؼ�
	RectifyControl(cx,cy);

	return;
}

//��ʾ��Ϣ
void CPlazaViewItem::OnShowWindow(BOOL bShow, UINT nStatus)
{
	__super::OnShowWindow(bShow, nStatus);

	//���ñ���
	if (bShow) 
	{
		UpdateTitleText();
	}

	return;
}

//�滭��Ϣ
void CPlazaViewItem::OnPaint()
{
	CPaintDC dc(this);

	//�滭����
	DrawWebFrame(&dc);
	DrawListFrame(&dc);

	return;
}

//�滭����
BOOL CPlazaViewItem::OnEraseBkgnd(CDC * pDC)
{
	Invalidate(FALSE);
	UpdateWindow();
	return TRUE;
}

//��¼�㳡
void CPlazaViewItem::OnCommandLogon()
{
	//������½��
	if (m_DlgLogon.m_hWnd==NULL) 
	{
		m_DlgLogon.Create(IDD_LOGON,this);
	}

	//��ʾ��½��
	m_DlgLogon.ShowWindow(SW_SHOW);
	m_DlgLogon.SetActiveWindow();
	m_DlgLogon.SetForegroundWindow();



	return;
}

//���ӷ�����
void CPlazaViewItem::OnCommandConnect()
{
	//�������
	if (m_ClientSocket.GetInterface()==NULL)
	{
		try
		{
			IUnknownEx * pIUnknownEx=(IUnknownEx *)QueryInterface(IID_IUnknownEx,VER_IUnknownEx);
			if (m_ClientSocket.CreateInstance()==false) 
			{
				throw TEXT("�����������ʧ��");
			}
			if (m_ClientSocket->SetSocketSink(pIUnknownEx)==false) 
			{
				throw TEXT("��������ص��ӿ�����ʧ��");
			}
		}
		catch (...)
		{
			ShowMessageBox(TEXT("�����������ʧ�ܣ�������������Ϸ������"),MB_ICONSTOP);
			PostMessage(WM_COMMAND,IDM_LOGON_PLAZA,0);
			return;
		}
	}

	//��ַ����
	CRegKey RegServer;
	LPCTSTR pszServerIP=m_DlgLogon.GetLogonServer();
	TCHAR szRegServer[256]=TEXT(""),szServerAddr[64]=TEXT("");
	_snprintf(szRegServer,sizeof(szRegServer),TEXT("%s\\%s"),REG_LOGON_SERVER,pszServerIP);

	if (RegServer.Open(HKEY_CURRENT_USER,szRegServer,KEY_READ)==ERROR_SUCCESS)
	{
		TCHAR szReadData[1024]=TEXT("");
		DWORD dwReadData=0L,dwDataType=0L,dwDataSize=sizeof(szReadData);
		LONG lErrorCode=RegServer.QueryValue(TEXT("ServerAddr"),&dwDataType,szReadData,&dwDataSize);
		if (lErrorCode==ERROR_SUCCESS) 
		{
			CXOREncrypt::CrevasseData(szReadData,szServerAddr,sizeof(szServerAddr));
			pszServerIP=szServerAddr;
		}
	}

	//���ӷ�����
	try
	{
		//���ô���
		m_ClientSocket->SetProxyServer(m_DlgLogon.m_ProxyInfo);

		//���ӷ�����
		m_ClientSocket->CloseSocket(false);
		if (m_ClientSocket->Connect(pszServerIP,PORT_LOGON_SERVER)==false)
		{
			throw TEXT("���������Ӵ��󣬿��������ϵͳ��û�гɹ����������磡");
		}
	}
	catch (LPCTSTR pszError)
	{
		ShowMessageBox(pszError,MB_ICONINFORMATION);
		SendLogonMessage();
		return;
	}

	//��ʾ��ʾ��
	CString strMessage=TEXT("�������ӷ����������Ժ�...");
	g_GlobalAttemper.ShowStatusMessage(strMessage,this);

	return;
}

//ȡ������
void CPlazaViewItem::OnCommandCancelConnect()
{
	g_GlobalAttemper.DestroyStatusWnd(this);
	m_ClientSocket->CloseSocket(false);
	SendLogonMessage();
	return;
}

//���±���
void CPlazaViewItem::UpdateTitleText()
{
	CString strTitle;
	strTitle.LoadString(AfxGetInstanceHandle(),IDS_MAIN_TITLE);
	AfxGetMainWnd()->SetWindowText(strTitle);

	return;
}

//�滭��ҳ
void CPlazaViewItem::DrawWebFrame(CDC * pDC)
{
	//��ȡλ��
	CRect rcClient,rcSplitter;
	GetClientRect(&rcClient);
	m_Splitter.GetWindowRect(&rcSplitter);
	ScreenToClient(&rcSplitter);

	//������Դ
	HDC hDC=pDC->m_hDC;
	CImageHandle ImageWebBLHandle(&m_ImageWebBL);
	CImageHandle ImageWebBMHandle(&m_ImageWebBM);
	CImageHandle ImageWebBRHandle(&m_ImageWebBR);
	CImageHandle ImageWebLMHandle(&m_ImageWebLM);
	CImageHandle ImageWebRMHandle(&m_ImageWebRM);
	CImageHandle ImageWebTLHandle(&m_ImageWebTL);
	CImageHandle ImageWebTMHandle(&m_ImageWebTM);
	CImageHandle ImageWebTRHandle(&m_ImageWebTR);

	//�滭�Ͽ�
	m_ImageWebTL.BitBlt(hDC,rcSplitter.right,0);
	for (int nXPos=rcSplitter.right+m_ImageWebTL.GetWidth();nXPos<rcClient.Width();nXPos+=m_ImageWebTM.GetWidth())
	{
		m_ImageWebTM.BitBlt(hDC,nXPos,0);
	}
	m_ImageWebTR.BitBlt(hDC,rcClient.Width()-m_ImageWebTR.GetWidth(),0);

	//�滭����
	for (int nYPos=m_ImageWebTL.GetHeight();nYPos<rcClient.Height();nYPos+=m_ImageWebLM.GetHeight())
	{
		m_ImageWebLM.BitBlt(hDC,rcSplitter.right,nYPos);
	}

	//�滭����
	for (int nYPos=m_ImageWebTR.GetHeight();nYPos<rcClient.Height();nYPos+=m_ImageWebRM.GetHeight())
	{
		m_ImageWebRM.BitBlt(hDC,rcClient.Width()-m_ImageWebRM.GetWidth(),nYPos);
	}

	//�滭�¿�
	m_ImageWebBL.BitBlt(hDC,rcSplitter.right,rcClient.Height()-m_ImageWebBL.GetHeight());
	for (int nXPos=rcSplitter.right+m_ImageWebBL.GetWidth();nXPos<rcClient.Width();nXPos+=m_ImageWebBM.GetWidth())
	{
		m_ImageWebBM.BitBlt(hDC,nXPos,rcClient.Height()-m_ImageWebBM.GetHeight());
	}
	m_ImageWebBR.BitBlt(hDC,rcClient.Width()-m_ImageWebBR.GetWidth(),rcClient.Height()-m_ImageWebBR.GetHeight());

	return;
}

//�滭�б�
void CPlazaViewItem::DrawListFrame(CDC * pDC)
{
	//��ȡλ��
	CRect rcClient,rcSplitter;
	GetClientRect(&rcClient);
	m_Splitter.GetWindowRect(&rcSplitter);
	ScreenToClient(&rcSplitter);

	//������Դ
	HDC hDC=pDC->m_hDC;
	CImageHandle ImageServerBLHandle(&m_ImageServerBL);
	CImageHandle ImageServerBMHandle(&m_ImageServerBM);
	CImageHandle ImageServerBRHandle(&m_ImageServerBR);
	CImageHandle ImageServerLMHandle(&m_ImageServerLM);
	CImageHandle ImageServerRMHandle(&m_ImageServerRM);
	CImageHandle ImageServerTLHandle(&m_ImageServerTL);
	CImageHandle ImageServerTMHandle(&m_ImageServerTM);
	CImageHandle ImageServerTRHandle(&m_ImageServerTR);

	//�滭�Ͽ�
	m_ImageServerTL.BitBlt(hDC,0,0);
	m_ImageServerTM.StretchBlt(hDC,m_ImageServerTL.GetWidth(),0,
		rcSplitter.left-m_ImageServerTL.GetWidth()-m_ImageServerTR.GetWidth(),
		m_ImageServerTM.GetHeight());

	m_ImageServerTR.BitBlt(hDC,rcSplitter.left-m_ImageServerTR.GetWidth(),0);

	//�滭����
	for (int nYPos=m_ImageServerTL.GetHeight();nYPos<rcClient.Height();nYPos+=m_ImageServerLM.GetHeight())
	{
		m_ImageServerLM.BitBlt(hDC,0,nYPos);
	}

	//�滭����
	for (int nYPos=m_ImageServerTR.GetHeight();nYPos<rcClient.Height();nYPos+=m_ImageServerRM.GetHeight())
	{
		m_ImageServerRM.BitBlt(hDC,rcSplitter.left-m_ImageServerRM.GetWidth(),nYPos);
	}

	//�滭�¿�
	m_ImageServerBL.BitBlt(hDC,0,rcClient.Height()-m_ImageServerBL.GetHeight());
	m_ImageServerBM.StretchBlt(hDC,m_ImageServerBL.GetWidth(),rcClient.Height()-m_ImageServerBM.GetHeight(),
		rcSplitter.left -m_ImageServerBL.GetWidth() -m_ImageServerBR.GetWidth(),m_ImageServerBM.GetHeight());
	m_ImageServerBR.BitBlt(hDC,rcSplitter.left-m_ImageServerBR.GetWidth(),rcClient.Height()-m_ImageServerBR.GetHeight());

	//�滭��Ϣ
	tagGlobalUserData UserData=g_GlobalUnits.GetGolbalUserData();
	if (UserData.dwUserID!=0)
	{
		//���� DC
		pDC->SetBkMode(TRANSPARENT);
		pDC->SelectObject(CSkinAttribute::m_DefaultFont);

		int xInt = 16+10;
		int yInt = 25;
		//�û�����
		TCHAR szBuffer[128];
		_snprintf(szBuffer,CountArray(szBuffer),TEXT("�û�����%s"),UserData.szAccounts);
		pDC->TextOut(50+xInt,20,szBuffer,lstrlen(szBuffer));

		//�û�����
		_snprintf(szBuffer,CountArray(szBuffer),TEXT("�û�ID��%ld"),UserData.dwUserID);
		pDC->TextOut(50+xInt,40,szBuffer,lstrlen(szBuffer));

		//�û�ͷ��
		g_GlobalUnits.m_UserFaceRes->DrawNormalFace(pDC,6+xInt,yInt,UserData.wFaceID);
	}

	return;
}

//�����ؼ�
void CPlazaViewItem::RectifyControl(int nWidth, int nHeight)
{
	//״̬�ж�
	if (m_bInitDialog==false) return;
	if ((nWidth==0)||(nHeight==0)) return;

	//��������
	CRect rcSplitter;
	const int nSplitterWidth=0;
	const UINT uFlags=SWP_NOACTIVATE|SWP_NOZORDER|SWP_NOCOPYBITS;

	//��ȡλ��
	m_Splitter.GetWindowRect(&rcSplitter);
	ScreenToClient(&rcSplitter);

	//���������
	if (m_bRectify==false)
	{
		m_bRectify=true;
		rcSplitter.left=nWidth/4 + 40;//Doctor 20080316
		rcSplitter.right=rcSplitter.left+nSplitterWidth;
	}

	//���ò�ַ�Χ
	int nLessPos=nWidth/5,nMaxPos=nWidth*4/5;
	m_Splitter.SetSplitterRange(nLessPos,nMaxPos);
	if ((nWidth!=0)&&(nHeight!=0))
	{
		if (rcSplitter.left<nLessPos) 
		{
			rcSplitter.left=nLessPos;
			rcSplitter.right=rcSplitter.left+nSplitterWidth;
		}
		if (rcSplitter.right>nMaxPos)
		{
			rcSplitter.right=nMaxPos;
			rcSplitter.left=rcSplitter.right-nSplitterWidth;
		}
	}

	//�ƶ��ؼ�
	HDWP hDwp=BeginDeferWindowPos(32);
	DeferWindowPos(hDwp,m_ServerItemView,NULL,LIST_LEFT,LIST_TOP,rcSplitter.left-LIST_LEFT-LIST_RIGHT,
		nHeight-LIST_TOP-LIST_BOTTOM,uFlags);
	DeferWindowPos(hDwp,m_Splitter,NULL,rcSplitter.left,0,rcSplitter.Width(),nHeight,uFlags);
	DeferWindowPos(hDwp,m_pHtmlBrower->GetSafeHwnd(),NULL,rcSplitter.right+WEB_LEFT,WEB_TOP,
		nWidth-rcSplitter.right-WEB_LEFT-WEB_RIGHT,nHeight-WEB_TOP-WEB_BOTTOM,uFlags);

	//������ť
	CRect rcButton;
	m_WEB_HOME.GetWindowRect(&rcButton);
	int nYPos=10;//nHeight-30;
	int nBeginPos=rcSplitter.left+10,nEndPos=nWidth-25;
	int nSpace=5;//(nEndPos-nBeginPos-rcButton.Width()*5)/6;
	int btnX = nBeginPos;
	int btnW = rcButton.Width();
	/*
	DeferWindowPos(hDwp,m_WEB_HOME,NULL,nBeginPos+nSpace,nYPos,0,0,uFlags|SWP_NOSIZE);
	DeferWindowPos(hDwp,m_WEB_BEFORE,NULL,nBeginPos+nSpace*2+rcButton.Width(),nYPos,0,0,uFlags|SWP_NOSIZE);
	DeferWindowPos(hDwp,m_WEB_NEXT,NULL,nBeginPos+nSpace*3+rcButton.Width()*2,nYPos,0,0,uFlags|SWP_NOSIZE);
	DeferWindowPos(hDwp,m_WEB_STOP,NULL,nBeginPos+nSpace*4+rcButton.Width()*3,nYPos,0,0,uFlags|SWP_NOSIZE);
	DeferWindowPos(hDwp,m_WEB_BRUSH,NULL,nBeginPos+nSpace*5+rcButton.Width()*4,nYPos,0,0,uFlags|SWP_NOSIZE);
*/
	DeferWindowPos(hDwp,m_WEB_HOME,NULL, btnX,nYPos,0,0,uFlags|SWP_NOSIZE);

	btnX +=(btnW+nSpace);
	DeferWindowPos(hDwp,m_WEB_BEFORE,NULL,btnX,nYPos,0,0,uFlags|SWP_NOSIZE);
		btnX +=(btnW+nSpace);
	DeferWindowPos(hDwp,m_WEB_NEXT,NULL,btnX,nYPos,0,0,uFlags|SWP_NOSIZE);
		btnX +=(btnW+nSpace);
	DeferWindowPos(hDwp,m_WEB_STOP,NULL,btnX,nYPos,0,0,uFlags|SWP_NOSIZE);
		btnX +=(btnW+nSpace);
	DeferWindowPos(hDwp,m_WEB_BRUSH,NULL,btnX,nYPos,0,0,uFlags|SWP_NOSIZE);


	EndDeferWindowPos(hDwp);

	return;
}

afx_msg void CPlazaViewItem::OnBnClickedBEFORE()
{
	m_pHtmlBrower->GoBack();
}
afx_msg void CPlazaViewItem::OnBnClickedNEXT()
{
	m_pHtmlBrower->GoForward();
}
afx_msg void CPlazaViewItem::OnBnClickedMBRUSH()
{
	m_pHtmlBrower->Refresh();
}
afx_msg void CPlazaViewItem::OnBnClickedSTOP()
{
	m_pHtmlBrower->Stop();
}
afx_msg void CPlazaViewItem::OnBnClickedHOME()
{ 
	m_pHtmlBrower->Navigate(Glb().m_MainHomeUrl);
}

//-----------------------------------------------
//					the end
//-----------------------------------------------
