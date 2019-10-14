#include "Stdafx.h"
#include "Resource.h"
#include "LogonServerDlg.h"

//////////////////////////////////////////////////////////////////////////////////

BEGIN_MESSAGE_MAP(CSystemOptionDlg, CDialog)
END_MESSAGE_MAP()

BEGIN_MESSAGE_MAP(CLogonServerDlg, CDialog)
	ON_WM_QUERYENDSESSION()
	ON_BN_CLICKED(IDC_STOP_SERVICE, OnBnClickedStopService)
	ON_BN_CLICKED(IDC_START_SERVICE, OnBnClickedStartService)
	//ON_MESSAGE(WM_NETWORK_EVENT, OnNetworkEvent)
	ON_BN_CLICKED(IDC_SYSTEM_OPTION, OnBnClickedInitService)
END_MESSAGE_MAP()

//////////////////////////////////////////////////////////////////////////

//构造函数
CSystemOptionDlg::CSystemOptionDlg() : CDialog(IDD_SYSTEM_OPTION)
{
}

//析构函数
CSystemOptionDlg::~CSystemOptionDlg()
{
}

//控件子类化
void CSystemOptionDlg::DoDataExchange(CDataExchange * pDX)
{
	__super::DoDataExchange(pDX);
}

//初始化函数
BOOL CSystemOptionDlg::OnInitDialog()
{
	__super::OnInitDialog();

	//限制输入
	((CEdit *)GetDlgItem(IDC_SERVER_NAME))->LimitText(31);
	((CEdit *)GetDlgItem(IDC_SERVICE_PORT))->LimitText(5);
	((CEdit *)GetDlgItem(IDC_CORRESPOND_PORT))->LimitText(5);
	((CEdit *)GetDlgItem(IDC_PERSONAL_PORT))->LimitText(5);
	((CEdit *)GetDlgItem(IDC_MAX_CONNECT))->LimitText(3);

	((CEdit *)GetDlgItem(IDC_USER_DATABASE_PORT))->LimitText(5);
	((CEdit *)GetDlgItem(IDC_USER_DATABASE_USER))->LimitText(31);
	((CEdit *)GetDlgItem(IDC_USER_DATABASE_PASS))->LimitText(31);
	((CEdit *)GetDlgItem(IDC_USER_DATABASE_NAME))->LimitText(31);

	((CEdit *)GetDlgItem(IDC_TREASURE_DATABASE_PORT))->LimitText(5);
	((CEdit *)GetDlgItem(IDC_TREASURE_DATABASE_USER))->LimitText(31);
	((CEdit *)GetDlgItem(IDC_TREASURE_DATABASE_PASS))->LimitText(31);
	((CEdit *)GetDlgItem(IDC_TREASURE_DATABASE_NAME))->LimitText(31);

	((CEdit *)GetDlgItem(IDC_PLATFORM_DATABASE_PORT))->LimitText(5);
	((CEdit *)GetDlgItem(IDC_PLATFORM_DATABASE_USER))->LimitText(31);
	((CEdit *)GetDlgItem(IDC_PLATFORM_DATABASE_PASS))->LimitText(31);
	((CEdit *)GetDlgItem(IDC_PLATFORM_DATABASE_NAME))->LimitText(31);

	//加载参数
	CInitParameter InitParamter;

	//设置控件
	SetDlgItemText(IDC_SERVER_NAME, TEXT("本地测试"));
	SetDlgItemText(IDC_SERVICE_ADDRESS, TEXT("127.0.0.1"));
	SetDlgItemText(IDC_CORRESPOND_ADDRESS, TEXT("127.0.0.1"));
	SetDlgItemText(IDC_PERSONAL_ADDRESS, TEXT("127.0.0.1"));

	SetDlgItemText(IDC_USER_DATABASE_NAME, szAccountsDB);
	SetDlgItemText(IDC_USER_DATABASE_USER, TEXT("sa"));
	SetDlgItemInt(IDC_USER_DATABASE_PORT, 1433);
	SetDlgItemText(IDC_USER_DATABASE_PASS, TEXT("people"));
	SetDlgItemText(IDC_USER_DATABASE_IP, TEXT("127.0.0.1"));

	SetDlgItemText(IDC_TREASURE_DATABASE_NAME, szTreasureDB);
	SetDlgItemText(IDC_TREASURE_DATABASE_USER, TEXT("sa"));
	SetDlgItemInt(IDC_TREASURE_DATABASE_PORT, 1433);
	SetDlgItemText(IDC_TREASURE_DATABASE_PASS, TEXT("people"));
	SetDlgItemText(IDC_TREASURE_DATABASE_IP, TEXT("127.0.0.1"));

	SetDlgItemText(IDC_PLATFORM_DATABASE_NAME, szPlatformDB);
	SetDlgItemText(IDC_PLATFORM_DATABASE_USER, TEXT("sa"));
	SetDlgItemInt(IDC_PLATFORM_DATABASE_PORT, 1433);
	SetDlgItemText(IDC_PLATFORM_DATABASE_PASS, TEXT("people"));
	SetDlgItemText(IDC_PLATFORM_DATABASE_IP, TEXT("127.0.0.1"));

	SetDlgItemInt(IDC_SERVICE_PORT, InitParamter.m_wServicePort, FALSE);
	SetDlgItemInt(IDC_CORRESPOND_PORT, InitParamter.m_wCorrespondPort, FALSE);
	SetDlgItemInt(IDC_PERSONAL_PORT, InitParamter.m_wPrsnlRmCorrespondPort, FALSE);
	SetDlgItemInt(IDC_MAX_CONNECT, InitParamter.m_wMaxConnect, FALSE);
	return TRUE;
}

//确定函数
void CSystemOptionDlg::OnOK()
{
	//获取输入
	CInitParameter InitParamter;
	InitParamter.m_wServicePort = GetDlgItemInt(IDC_SERVICE_PORT);
	InitParamter.m_wCorrespondPort = GetDlgItemInt(IDC_CORRESPOND_PORT);
	InitParamter.m_wPrsnlRmCorrespondPort = GetDlgItemInt(IDC_PERSONAL_PORT);
	InitParamter.m_wMaxConnect = GetDlgItemInt(IDC_MAX_CONNECT);
	GetDlgItemText(IDC_SERVER_NAME, InitParamter.m_szServerName, sizeof(InitParamter.m_szServerName));
	//服务地址
	DWORD dwDataBaseIP_service = INADDR_NONE;
	BYTE * pAddrByte_service = (BYTE *)&dwDataBaseIP_service;
	((CIPAddressCtrl *)GetDlgItem(IDC_SERVICE_ADDRESS))->GetAddress(dwDataBaseIP_service);
	_snprintf(InitParamter.m_ServiceAddress.szAddress, sizeof(InitParamter.m_ServiceAddress.szAddress), TEXT("%d.%d.%d.%d"),
		pAddrByte_service[3], pAddrByte_service[2], pAddrByte_service[1], pAddrByte_service[0]);
	//协调地址
	DWORD dwDataBaseIP_correspond = INADDR_NONE;
	BYTE * pAddrByte_correspond = (BYTE *)&dwDataBaseIP_correspond;
	((CIPAddressCtrl *)GetDlgItem(IDC_CORRESPOND_ADDRESS))->GetAddress(dwDataBaseIP_correspond);
	_snprintf(InitParamter.m_CorrespondAddress.szAddress, sizeof(InitParamter.m_CorrespondAddress.szAddress), TEXT("%d.%d.%d.%d"),
		pAddrByte_correspond[3], pAddrByte_correspond[2], pAddrByte_correspond[1], pAddrByte_correspond[0]);
	//约战地址
	DWORD dwDataBaseIP_personal = INADDR_NONE;
	BYTE * pAddrByte_personal = (BYTE *)&dwDataBaseIP_personal;
	((CIPAddressCtrl *)GetDlgItem(IDC_PERSONAL_ADDRESS))->GetAddress(dwDataBaseIP_personal);
	_snprintf(InitParamter.m_PrsnlRmCorrespondAddress.szAddress, sizeof(InitParamter.m_PrsnlRmCorrespondAddress.szAddress), TEXT("%d.%d.%d.%d"),
		pAddrByte_personal[3], pAddrByte_personal[2], pAddrByte_personal[1], pAddrByte_personal[0]);


	//用户数据库 
	InitParamter.m_AccountsDBParameter.wDataBasePort = GetDlgItemInt(IDC_USER_DATABASE_PORT);
	GetDlgItemText(IDC_USER_DATABASE_USER, InitParamter.m_AccountsDBParameter.szDataBaseUser, sizeof(InitParamter.m_AccountsDBParameter.szDataBaseUser));
	GetDlgItemText(IDC_USER_DATABASE_PASS, InitParamter.m_AccountsDBParameter.szDataBasePass, sizeof(InitParamter.m_AccountsDBParameter.szDataBasePass));
	GetDlgItemText(IDC_USER_DATABASE_NAME, InitParamter.m_AccountsDBParameter.szDataBaseName, sizeof(InitParamter.m_AccountsDBParameter.szDataBaseName));
	DWORD dwDataBaseIP_accounts = INADDR_NONE;
	BYTE * pAddrByte_accounts = (BYTE *)&dwDataBaseIP_accounts;
	((CIPAddressCtrl *)GetDlgItem(IDC_USER_DATABASE_IP))->GetAddress(dwDataBaseIP_accounts);
	_snprintf(InitParamter.m_AccountsDBParameter.szDataBaseAddr, sizeof(InitParamter.m_AccountsDBParameter.szDataBaseAddr), TEXT("%d.%d.%d.%d"),
		pAddrByte_accounts[3], pAddrByte_accounts[2], pAddrByte_accounts[1], pAddrByte_accounts[0]);

	//金币数据库 
	InitParamter.m_TreasureDBParameter.wDataBasePort = GetDlgItemInt(IDC_TREASURE_DATABASE_PORT);
	GetDlgItemText(IDC_TREASURE_DATABASE_USER, InitParamter.m_TreasureDBParameter.szDataBaseUser, sizeof(InitParamter.m_TreasureDBParameter.szDataBaseUser));
	GetDlgItemText(IDC_TREASURE_DATABASE_PASS, InitParamter.m_TreasureDBParameter.szDataBasePass, sizeof(InitParamter.m_TreasureDBParameter.szDataBasePass));
	GetDlgItemText(IDC_TREASURE_DATABASE_NAME, InitParamter.m_TreasureDBParameter.szDataBaseName, sizeof(InitParamter.m_TreasureDBParameter.szDataBaseName));
	DWORD dwDataBaseIP_treasure = INADDR_NONE;
	BYTE * pAddrByte_treasure = (BYTE *)&dwDataBaseIP_treasure;
	((CIPAddressCtrl *)GetDlgItem(IDC_TREASURE_DATABASE_IP))->GetAddress(dwDataBaseIP_treasure);
	_snprintf(InitParamter.m_TreasureDBParameter.szDataBaseAddr, sizeof(InitParamter.m_TreasureDBParameter.szDataBaseAddr), TEXT("%d.%d.%d.%d"),
		pAddrByte_treasure[3], pAddrByte_treasure[2], pAddrByte_treasure[1], pAddrByte_treasure[0]);

	//平台数据库 
	InitParamter.m_PlatformDBParameter.wDataBasePort = GetDlgItemInt(IDC_PLATFORM_DATABASE_PORT);
	GetDlgItemText(IDC_PLATFORM_DATABASE_USER, InitParamter.m_PlatformDBParameter.szDataBaseUser, sizeof(InitParamter.m_PlatformDBParameter.szDataBaseUser));
	GetDlgItemText(IDC_PLATFORM_DATABASE_PASS, InitParamter.m_PlatformDBParameter.szDataBasePass, sizeof(InitParamter.m_PlatformDBParameter.szDataBasePass));
	GetDlgItemText(IDC_PLATFORM_DATABASE_NAME, InitParamter.m_PlatformDBParameter.szDataBaseName, sizeof(InitParamter.m_PlatformDBParameter.szDataBaseName));
	DWORD dwDataBaseIP_platform = INADDR_NONE;
	BYTE * pAddrByte_platform = (BYTE *)&dwDataBaseIP_platform;
	((CIPAddressCtrl *)GetDlgItem(IDC_PLATFORM_DATABASE_IP))->GetAddress(dwDataBaseIP_platform);
	_snprintf(InitParamter.m_PlatformDBParameter.szDataBaseAddr, sizeof(InitParamter.m_PlatformDBParameter.szDataBaseAddr), TEXT("%d.%d.%d.%d"),
		pAddrByte_platform[3], pAddrByte_platform[2], pAddrByte_platform[1], pAddrByte_platform[0]);
	

	//保存设置
	InitParamter.SaveInitParameter();

	__super::OnOK();
}

//////////////////////////////////////////////////////////////////////////////////

//构造函数
CLogonServerDlg::CLogonServerDlg() : CDialog(IDD_DLG_LOGON_SERVER)
{
}

//析构函数
CLogonServerDlg::~CLogonServerDlg()
{
}

//控件绑定
VOID CLogonServerDlg::DoDataExchange(CDataExchange * pDX)
{
	__super::DoDataExchange(pDX);
	DDX_Control(pDX, IDC_TRACE_MESSAGE, m_TraceServiceControl);
}

//初始化函数
BOOL CLogonServerDlg::OnInitDialog()
{
	__super::OnInitDialog();

	//设置标题
	SetWindowText(TEXT("登录服务器 -- [ 停止 ]"));

	//设置图标
	HICON hIcon=LoadIcon(AfxGetInstanceHandle(),MAKEINTRESOURCE(IDR_MAINFRAME));
	SetIcon(hIcon,TRUE);
	SetIcon(hIcon,FALSE);

	//设置组件
	m_ServiceUnits.SetServiceUnitsSink(this);
	m_FlashAccredit.SetServiceParameter(843);
	m_FlashAccredit.StartService();

	return TRUE;
}

//确定消息
VOID CLogonServerDlg::OnOK()
{
	return;
}

//取消函数
VOID CLogonServerDlg::OnCancel()
{
	//关闭询问
	if (m_ServiceUnits.GetServiceStatus()!=ServiceStatus_Stop)
	{
		LPCTSTR pszQuestion=TEXT("登录服务器正在运行中，您确实要关闭服务器吗？");
		if (AfxMessageBox(pszQuestion,MB_YESNO|MB_DEFBUTTON2|MB_ICONQUESTION)!=IDYES) return;
	}

	//停止服务
	m_ServiceUnits.ConcludeService();

	__super::OnCancel();
}

//消息解释
BOOL CLogonServerDlg::PreTranslateMessage(MSG * pMsg)
{
	//按键过滤
	if ((pMsg->message==WM_KEYDOWN)&&(pMsg->wParam==VK_ESCAPE))
	{
		return TRUE;
	}

	return __super::PreTranslateMessage(pMsg);
}

//服务状态
VOID CLogonServerDlg::OnServiceUnitsStatus(enServiceStatus ServiceStatus)
{
	//状态设置
	switch (ServiceStatus)
	{
	case ServiceStatus_Stop:	//停止状态
		{
			//设置标题
			SetWindowText(TEXT("登录服务器 -- [ 停止 ]"));

			//设置按钮
			GetDlgItem(IDC_STOP_SERVICE)->EnableWindow(FALSE);
			GetDlgItem(IDC_START_SERVICE)->EnableWindow(TRUE);

			//提示信息
			LPCTSTR pszDescribe=TEXT("服务停止成功");
			CTraceService::TraceString(pszDescribe,TraceLevel_Normal);

			break;
		}
	case ServiceStatus_Config:	//配置状态
		{
			//设置标题
			SetWindowText(TEXT("登录服务器 -- [ 初始化 ]"));

			//设置按钮
			GetDlgItem(IDC_STOP_SERVICE)->EnableWindow(TRUE);
			GetDlgItem(IDC_START_SERVICE)->EnableWindow(FALSE);

			//提示信息
			LPCTSTR pszDescribe=TEXT("正在初始化组件...");
			CTraceService::TraceString(pszDescribe,TraceLevel_Normal);

			break;
		}
	case ServiceStatus_Service:	//服务状态
		{
			//设置标题
			SetWindowText(TEXT("登录服务器 -- [ 运行 ]"));

			//设置按钮
			GetDlgItem(IDC_STOP_SERVICE)->EnableWindow(TRUE);
			GetDlgItem(IDC_START_SERVICE)->EnableWindow(FALSE);
			GetDlgItem(IDC_SYSTEM_OPTION)->EnableWindow(FALSE);
			//提示信息
			TCHAR szString[512] = TEXT("");
			_sntprintf(szString, CountArray(szString), TEXT("服务启动成功 [ 端口:%d ]"), m_ServiceUnits.GetInitParameter().m_wServicePort);
			CTraceService::TraceString(szString,TraceLevel_Normal);

			break;
		}
	}

	return;
}

//启动服务
VOID CLogonServerDlg::OnBnClickedStartService()
{
	//启动服务
	try
	{
		m_ServiceUnits.StartService();
	}
	catch (...)
	{
		ASSERT(FALSE);
	}

	return;
}

//停止服务
VOID CLogonServerDlg::OnBnClickedStopService()
{
	//停止服务
	try
	{
		m_ServiceUnits.ConcludeService();
	}
	catch (...)
	{
		ASSERT(FALSE);
	}

	return;
}

//关闭询问
BOOL CLogonServerDlg::OnQueryEndSession()
{
	//提示消息
	if (m_ServiceUnits.GetServiceStatus()!=ServiceStatus_Stop)
	{
		CTraceService::TraceString(TEXT("服务正在运行中，系统要求注销回话请求失败"),TraceLevel_Warning);
		return FALSE;
	}

	return TRUE;
}

//网络事件
LRESULT CLogonServerDlg::OnNetworkEvent(WPARAM wparam, LPARAM lparam)
{
	return 0;//m_NetworkEngine.OnNetworkEvent(wparam, lparam);
}

//系统配置
void CLogonServerDlg::OnBnClickedInitService()
{
	CSystemOptionDlg SystemOptionDlg;
	SystemOptionDlg.DoModal();

	return;
}

//////////////////////////////////////////////////////////////////////////////////
