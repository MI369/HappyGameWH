#include "Stdafx.h"
#include "Resource.h"
#include "GameFrameApp.h"
#include "GlobalOption.h"

//////////////////////////////////////////////////////////////////////////

BEGIN_MESSAGE_MAP(CGameFrameApp, CWinApp)
END_MESSAGE_MAP()

//////////////////////////////////////////////////////////////////////////

//���캯��
CGameFrameApp::CGameFrameApp()
{
	m_pGameFrame=NULL;
}

//��������
CGameFrameApp::~CGameFrameApp()
{
}

//��ʼ������
BOOL CGameFrameApp::InitInstance()
{
	__super::InitInstance();

	CString strFile,strTemp;
	CTime tmCur = CTime::GetCurrentTime();
	CString strTime = tmCur.Format("%m%d");
	strFile.Format("log\\%sCGameFrameApp.log",strTime);

	strTemp.Format("into InitInstance");
	WriteLog(strFile, strTemp);

	//�ڲ���ʼ��
	AfxOleInit();
	AfxInitRichEdit2();
	InitCommonControls();
	AfxEnableControlContainer();

	strTemp.Format("into InitInstance 1");
	WriteLog(strFile, strTemp);

	//��ʼ�������
	IUnknownEx * pIUnknownEx=(IUnknownEx *)m_SkinRecordFile.QueryInterface(IID_IUnknownEx,VER_IUnknownEx);
	CSkinAttribute::LoadSkinAttribute(pIUnknownEx);

	//��������
	g_GlobalOption.LoadOptionParameter();

	strTemp.Format("into InitInstance 2");
	WriteLog(strFile, strTemp);

	try
	{
		//����������
		m_pGameFrame=GetGameFrameDlg();
		ASSERT(m_pGameFrame!=NULL);
		if (m_pGameFrame==NULL) throw TEXT("��Ϸ�����ڴ���ʧ��");

		//����������
		m_pMainWnd=m_pGameFrame;
		AfxSetResourceHandle(GetModuleHandle(GAME_FRAME_DLL_NAME));
		m_pGameFrame->Create(IDD_GAME_FRAME,NULL);
		AfxSetResourceHandle(GetModuleHandle(NULL));
	}
	catch (LPCTSTR pszMesssage)
	{
		CString strBuffer;
		strBuffer.Format(TEXT("���� [ %s ] ��Ϸ���򼴽��˳���"),pszMesssage);
		AfxMessageBox(strBuffer,MB_ICONSTOP);
		if (m_pGameFrame!=NULL) SafeDelete(m_pGameFrame);
		return FALSE;
	}

	return TRUE;
}

//�˳���Ϣ
int CGameFrameApp::ExitInstance()
{
	//ɾ������
	if (m_pGameFrame!=NULL) SafeDelete(m_pGameFrame);
	return __super::ExitInstance();
}

//////////////////////////////////////////////////////////////////////////
