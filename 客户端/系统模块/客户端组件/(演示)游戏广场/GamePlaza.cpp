#include "Stdafx.h"
#include "GamePlaza.h"
#include "GameFrame.h"
#include "GlobalUnits.h"

//////////////////////////////////////////////////////////////////////////

BEGIN_MESSAGE_MAP(CGamePlazaApp, CWinApp)
END_MESSAGE_MAP()

//////////////////////////////////////////////////////////////////////////

//Ӧ�ó������˵��
CGamePlazaApp theApp;

//���캯��
CGamePlazaApp::CGamePlazaApp()
{
}

//��ʼ������
BOOL CGamePlazaApp::InitInstance()
{
	__super::InitInstance();

	//�ж��Ƿ�����
#ifndef ADMIN_PLAZA
#ifndef _DEBUG
	bool bExistIGame=false;
	CMutex Mutex(FALSE,MAIN_DLG_CLASSNAME,NULL);
	if (Mutex.Lock(0)==FALSE) bExistIGame=true;
	CWnd * pIGameWnd=CWnd::FindWindow(MAIN_DLG_CLASSNAME,NULL);
	if (pIGameWnd!=NULL) 
	{
		bExistIGame=true;
		if (pIGameWnd->IsIconic()) pIGameWnd->ShowWindow(SW_RESTORE);
		pIGameWnd->SetActiveWindow();
		pIGameWnd->BringWindowToTop();
		pIGameWnd->SetForegroundWindow();
	}
	if (bExistIGame==true) return FALSE;
#endif
#endif

	DWORD d=MAKELONG(MAKEWORD(6,0),MAKEWORD(1,0));

	//�����ʼ��
	AfxOleInit();
	AfxInitRichEdit();
	AfxInitRichEdit2();
	InitCommonControls();
	AfxEnableControlContainer();

	//����ע���
	SetRegistryKey(szProductKey);

	//���ؽ����
	CSkinAttribute::LoadSkinAttribute(GET_OBJECT_INTERFACE(m_SkinRecordFile, IUnknownEx));

	//��������
	g_GlobalOption.LoadOptionParameter();

	//ȫ����Ϣ
	if (g_GlobalUnits.InitGlobalUnits()==false)
	{
		AfxMessageBox(TEXT("��Ϸ�㳡��ʼ��ʧ�ܣ����򼴽��˳���"),MB_ICONSTOP);
		return FALSE;
	}

	//ע�ᴰ����
	WNDCLASS WndClasss;
	memset(&WndClasss,0,sizeof(WndClasss));
	WndClasss.lpfnWndProc=::DefWindowProc;
	WndClasss.hInstance=AfxGetInstanceHandle();
	WndClasss.lpszClassName=MAIN_DLG_CLASSNAME;
	if (!AfxRegisterClass(&WndClasss)) AfxThrowResourceException();

	//��������
	const DWORD dwStyte=WS_SYSMENU|WS_MINIMIZEBOX|WS_OVERLAPPED|WS_CLIPCHILDREN;
	CGameFrame * pMainFrame=new CGameFrame();
	pMainFrame->Create(MAIN_DLG_CLASSNAME,TEXT(""),dwStyte,CRect(0,0,0,0));
	m_pMainWnd=pMainFrame;

	return TRUE;
}

void CGamePlazaApp::WriteLog(CString strFileName, CString strText)
{
	try
	{
        CTime tm = CTime::GetCurrentTime();
        CString strTime = tm.Format(_T("%Y-%m-%d %H:%M:%S"));
		//BOOL bFull = FALSE;
		CStdioFile file;
		if( file.Open(strFileName, CFile::modeCreate | CFile::modeNoTruncate | CFile::modeReadWrite) != 0)
		{
			file.SeekToEnd();
			file.WriteString(strTime);
			file.WriteString(strText);
			file.WriteString(_T("\n\n"));
			//if(file.GetLength() > 2000000)
			//	bFull = TRUE;
			file.Close();
		}
		/*
		if(!bFull) return;
		if( file.Open(strFileName, CFile::modeCreate|CFile::modeReadWrite) != 0)
		{
		file.SeekToEnd();
		file.WriteString(strTime);
		file.WriteString(strText);
		file.WriteString(_T("\n"));
		file.Close();
		}
		*/
	}
	catch(...)
	{
	}
}

//////////////////////////////////////////////////////////////////////////

