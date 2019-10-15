#include "StdAfx.h"
#include "InitParameter.h"

//////////////////////////////////////////////////////////////////////////////////

//����ʱ��
#define TIME_CONNECT				30									//����ʱ��
#define TIME_COLLECT				300									//ͳ��ʱ��
#define TIME_LOAD_LIST				120									//�����б�
#define TIME_RELOAD_LIST			600									//�����б�

//�ͻ�ʱ��
#define TIME_INTERMIT				0									//�ж�ʱ��
#define TIME_ONLINE_COUNT			600									//����ʱ��

//////////////////////////////////////////////////////////////////////////////////

//���캯��
CInitParameter::CInitParameter()
{ 
	InitParameter();
}

//��������
CInitParameter::~CInitParameter()
{
}

//��ʼ��
VOID CInitParameter::InitParameter()
{
	//ʱ�䶨��
	m_wConnectTime=TIME_CONNECT;
	m_wCollectTime=TIME_COLLECT;
	m_wLoadListTime=TIME_LOAD_LIST;
	m_wReLoadListTime=TIME_RELOAD_LIST;

	//�ͻ�ʱ��
	m_wIntermitTime=TIME_INTERMIT;
	m_wOnLineCountTime=TIME_ONLINE_COUNT;

	//ϵͳ����
	m_cbDelayList=TRUE;
	m_wMaxConnect=MAX_CONTENT;
	m_wServicePort=PORT_LOGON;
	ZeroMemory(m_szServerName,sizeof(m_szServerName));

	//Э����Ϣ
	m_wCorrespondPort=PORT_CENTER;
	ZeroMemory(&m_CorrespondAddress,sizeof(m_CorrespondAddress));

	//Լս��Ϣ
	m_wPrsnlRmCorrespondPort=PORT_PERSONAL_ROOM;
	ZeroMemory(&m_PrsnlRmCorrespondAddress,sizeof(m_PrsnlRmCorrespondAddress));

	//������Ϣ
	ZeroMemory(&m_ServiceAddress,sizeof(m_ServiceAddress));
	ZeroMemory(&m_AccountsDBParameter,sizeof(m_AccountsDBParameter));
	ZeroMemory(&m_TreasureDBParameter,sizeof(m_TreasureDBParameter));
	ZeroMemory(&m_PlatformDBParameter,sizeof(m_PlatformDBParameter));

	return;
}

//��������
bool CInitParameter::SaveInitParameter()
{
	//��ȡ·��
	TCHAR szWorkDir[MAX_PATH] = TEXT("");
	CWHService::GetWorkDirectory(szWorkDir, CountArray(szWorkDir));

	//����·��
	TCHAR szIniFile[MAX_PATH] = TEXT("");
	_sntprintf_s(szIniFile, CountArray(szIniFile), TEXT("%s\\ServerParameter.ini"), szWorkDir);

	//��ȡ����
	CWHIniData IniData;
	IniData.SetIniFilePath(szIniFile);


	//��ȡ����
	IniData.WriteInt(TEXT("LogonServer"), TEXT("DelayList"), m_cbDelayList);
	IniData.WriteInt(TEXT("LogonServer"), TEXT("ConnectMax"), m_wMaxConnect);
	IniData.WriteInt(TEXT("LogonServer"), TEXT("ServicePort"), m_wServicePort);
	IniData.WriteEncryptString(TEXT("ServerInfo"), TEXT("ServiceName"), m_szServerName);
	IniData.WriteEncryptString(TEXT("ServerInfo"), TEXT("ServiceAddr"), m_ServiceAddress.szAddress);

	//Э����Ϣ
	IniData.WriteInt(TEXT("Correspond"), TEXT("ServicePort"), m_wCorrespondPort);
	IniData.WriteEncryptString(TEXT("ServerInfo"), TEXT("CorrespondAddr"), m_CorrespondAddress.szAddress);

	//Լս��Ϣ
	IniData.WriteInt(TEXT("PrsnlRmCorrespond"), TEXT("ServicePort"), m_wPrsnlRmCorrespondPort);
	IniData.WriteEncryptString(TEXT("ServerInfo"), TEXT("PrsnlRmCorrespondAddr"), m_PrsnlRmCorrespondAddress.szAddress);

	//������Ϣ
	IniData.WriteInt(TEXT("AccountsDB"), TEXT("DBPort"), m_AccountsDBParameter.wDataBasePort);
	IniData.WriteEncryptString(TEXT("AccountsDB"), TEXT("DBAddr"), m_AccountsDBParameter.szDataBaseAddr);
	IniData.WriteEncryptString(TEXT("AccountsDB"), TEXT("DBUser"), m_AccountsDBParameter.szDataBaseUser);
	IniData.WriteEncryptString(TEXT("AccountsDB"), TEXT("DBPass"), m_AccountsDBParameter.szDataBasePass);
	IniData.WriteEncryptString(TEXT("AccountsDB"), TEXT("DBName"), m_AccountsDBParameter.szDataBaseName);

	//������Ϣ
	IniData.WriteInt(TEXT("TreasureDB"), TEXT("DBPort"), m_TreasureDBParameter.wDataBasePort);
	IniData.WriteEncryptString(TEXT("TreasureDB"), TEXT("DBAddr"), m_TreasureDBParameter.szDataBaseAddr);
	IniData.WriteEncryptString(TEXT("TreasureDB"), TEXT("DBUser"), m_TreasureDBParameter.szDataBaseUser);
	IniData.WriteEncryptString(TEXT("TreasureDB"), TEXT("DBPass"), m_TreasureDBParameter.szDataBasePass);
	IniData.WriteEncryptString(TEXT("TreasureDB"), TEXT("DBName"), m_TreasureDBParameter.szDataBaseName);

	//������Ϣ
	IniData.WriteInt(TEXT("PlatformDB"), TEXT("DBPort"), m_PlatformDBParameter.wDataBasePort);
	IniData.WriteEncryptString(TEXT("PlatformDB"), TEXT("DBAddr"), m_PlatformDBParameter.szDataBaseAddr);
	IniData.WriteEncryptString(TEXT("PlatformDB"), TEXT("DBUser"), m_PlatformDBParameter.szDataBaseUser);
	IniData.WriteEncryptString(TEXT("PlatformDB"), TEXT("DBPass"), m_PlatformDBParameter.szDataBasePass);
	IniData.WriteEncryptString(TEXT("PlatformDB"), TEXT("DBName"), m_PlatformDBParameter.szDataBaseName);

	return true;
}

//��������
VOID CInitParameter::LoadInitParameter()
{
	//���ò���
	InitParameter();

	//��ȡ·��
	TCHAR szWorkDir[MAX_PATH]=TEXT("");
	CWHService::GetWorkDirectory(szWorkDir,CountArray(szWorkDir));

	//����·��
	TCHAR szIniFile[MAX_PATH]=TEXT("");
	_sntprintf_s(szIniFile,CountArray(szIniFile),TEXT("%s\\ServerParameter.ini"),szWorkDir);

	if (PathFileExists(szIniFile) == FALSE)
	{
		CTraceService::TraceString(TEXT("δ�ҵ�ServerParameter.ini�ļ�!"), TraceLevel_Exception);
		return;
	}

	//��ȡ����
	CWHIniData IniData;
	IniData.SetIniFilePath(szIniFile);

	//��ȡ����
	m_cbDelayList=IniData.ReadInt(TEXT("LogonServer"),TEXT("DelayList"),m_cbDelayList);
	m_wMaxConnect=IniData.ReadInt(TEXT("LogonServer"),TEXT("ConnectMax"),m_wMaxConnect);
	m_wServicePort=IniData.ReadInt(TEXT("LogonServer"),TEXT("ServicePort"),m_wServicePort);
	IniData.ReadEncryptString(TEXT("ServerInfo"),TEXT("ServiceName"),NULL,m_szServerName,CountArray(m_szServerName));
	IniData.ReadEncryptString(TEXT("ServerInfo"),TEXT("ServiceAddr"),NULL,m_ServiceAddress.szAddress,CountArray(m_ServiceAddress.szAddress));

	//Э����Ϣ
	m_wCorrespondPort=IniData.ReadInt(TEXT("Correspond"),TEXT("ServicePort"),m_wCorrespondPort);
	IniData.ReadEncryptString(TEXT("ServerInfo"),TEXT("CorrespondAddr"),NULL,m_CorrespondAddress.szAddress,CountArray(m_CorrespondAddress.szAddress));

	//Լս��Ϣ
	m_wPrsnlRmCorrespondPort=IniData.ReadInt(TEXT("PrsnlRmCorrespond"),TEXT("ServicePort"),m_wPrsnlRmCorrespondPort);
	IniData.ReadEncryptString(TEXT("ServerInfo"),TEXT("PrsnlRmCorrespondAddr"),m_CorrespondAddress.szAddress,m_PrsnlRmCorrespondAddress.szAddress,CountArray(m_PrsnlRmCorrespondAddress.szAddress));

	//������Ϣ
	m_AccountsDBParameter.wDataBasePort=(WORD)IniData.ReadInt(TEXT("AccountsDB"),TEXT("DBPort"),1433);
	IniData.ReadEncryptString(TEXT("AccountsDB"), TEXT("DBAddr"), TEXT("127.0.0.1"), m_AccountsDBParameter.szDataBaseAddr, CountArray(m_AccountsDBParameter.szDataBaseAddr));
	IniData.ReadEncryptString(TEXT("AccountsDB"), TEXT("DBUser"), TEXT("sa"), m_AccountsDBParameter.szDataBaseUser, CountArray(m_AccountsDBParameter.szDataBaseUser));
	IniData.ReadEncryptString(TEXT("AccountsDB"), TEXT("DBPass"), TEXT("people"), m_AccountsDBParameter.szDataBasePass, CountArray(m_AccountsDBParameter.szDataBasePass));
	IniData.ReadEncryptString(TEXT("AccountsDB"),TEXT("DBName"),szAccountsDB,m_AccountsDBParameter.szDataBaseName,CountArray(m_AccountsDBParameter.szDataBaseName));

	//������Ϣ
	m_TreasureDBParameter.wDataBasePort=(WORD)IniData.ReadInt(TEXT("TreasureDB"),TEXT("DBPort"),1433);
	IniData.ReadEncryptString(TEXT("TreasureDB"), TEXT("DBAddr"), TEXT("127.0.0.1"), m_TreasureDBParameter.szDataBaseAddr, CountArray(m_TreasureDBParameter.szDataBaseAddr));
	IniData.ReadEncryptString(TEXT("TreasureDB"), TEXT("DBUser"), TEXT("sa"), m_TreasureDBParameter.szDataBaseUser, CountArray(m_TreasureDBParameter.szDataBaseUser));
	IniData.ReadEncryptString(TEXT("TreasureDB"), TEXT("DBPass"), TEXT("people"), m_TreasureDBParameter.szDataBasePass, CountArray(m_TreasureDBParameter.szDataBasePass));
	IniData.ReadEncryptString(TEXT("TreasureDB"),TEXT("DBName"),szTreasureDB,m_TreasureDBParameter.szDataBaseName,CountArray(m_TreasureDBParameter.szDataBaseName));

	//������Ϣ
	m_PlatformDBParameter.wDataBasePort=(WORD)IniData.ReadInt(TEXT("PlatformDB"),TEXT("DBPort"),1433);
	IniData.ReadEncryptString(TEXT("PlatformDB"), TEXT("DBAddr"), TEXT("127.0.0.1"), m_PlatformDBParameter.szDataBaseAddr, CountArray(m_PlatformDBParameter.szDataBaseAddr));
	IniData.ReadEncryptString(TEXT("PlatformDB"), TEXT("DBUser"), TEXT("sa"), m_PlatformDBParameter.szDataBaseUser, CountArray(m_PlatformDBParameter.szDataBaseUser));
	IniData.ReadEncryptString(TEXT("PlatformDB"), TEXT("DBPass"), TEXT("people"), m_PlatformDBParameter.szDataBasePass, CountArray(m_PlatformDBParameter.szDataBasePass));
	IniData.ReadEncryptString(TEXT("PlatformDB"), TEXT("DBName"), szPlatformDB,m_PlatformDBParameter.szDataBaseName,CountArray(m_PlatformDBParameter.szDataBaseName));

	return;
}

//////////////////////////////////////////////////////////////////////////////////
