#include "Stdafx.h"
#include "GameFrame.h"
#include "GlobalUnits.h"

//////////////////////////////////////////////////////////////////////////

//�궨��
#define BORDER_WIDTH						1							//�߿���
#define TITLE_HEIGHT						81							//����߶�
#define MIN_CLIENT_WIDTH					800							//��С���
#define MIN_CLIENT_HEIGHT					500							//��С�߶�

//��ť��ʾ
#define IDC_BT_MIN							1000						//��С��ť
#define IDC_BT_CLOSE						1001						//�رհ�ť
#define IDC_BT_BUTTON_1						1002						//���ܰ�ť
#define IDC_BT_BUTTON_2						1003						//���ܰ�ť
#define IDC_BT_BUTTON_3						1004						//���ܰ�ť
#define IDC_BT_BUTTON_4						1005						//���ܰ�ť
#define IDC_BT_BUTTON_5						1006						//���ܰ�ť

//��Ϣ����
#define WM_SETUP_FINISH						WM_USER+100					//��װ���

//////////////////////////////////////////////////////////////////////////

BEGIN_MESSAGE_MAP(CGameFrame, CFrameWnd)
	ON_WM_SIZE()
	ON_WM_PAINT()
	ON_WM_CLOSE()
	ON_WM_CREATE()
	ON_WM_ERASEBKGND()
	ON_WM_SETTINGCHANGE()
	ON_WM_GETMINMAXINFO()
	ON_BN_CLICKED(IDC_BT_MIN, OnBnClickedMin)
	ON_BN_CLICKED(IDC_BT_CLOSE, OnBnClickedClose)
	ON_MESSAGE(WM_SETUP_FINISH,OnMessageSetupFinish)
	ON_BN_CLICKED(IDC_BT_BUTTON_1, OnBnClickedButton1)
	ON_BN_CLICKED(IDC_BT_BUTTON_2, OnBnClickedButton2)
	ON_BN_CLICKED(IDC_BT_BUTTON_3, OnBnClickedButton3)
	ON_BN_CLICKED(IDC_BT_BUTTON_4, OnBnClickedButton4)
	ON_BN_CLICKED(IDC_BT_BUTTON_5, OnBnClickedButton5)
END_MESSAGE_MAP()

//////////////////////////////////////////////////////////////////////////

//���캯��
CGameFrame::CGameFrame()
{
	//���ñ���
	m_pAdBrower=NULL;

	//������Դ
	HINSTANCE hInstance=AfxGetInstanceHandle();
	m_ImageL.SetLoadInfo(IDB_FRAME_L,hInstance);
	m_ImageR.SetLoadInfo(IDB_FRAME_R,hInstance);
	m_ImageTL.SetLoadInfo(IDB_FRAME_TL,hInstance);
	m_ImageTM.SetLoadInfo(IDB_FRAME_TM,hInstance);
	m_ImageTR.SetLoadInfo(IDB_FRAME_TR,hInstance);

	return;
}

//��������
CGameFrame::~CGameFrame()
{
}

//��Ϣ����
BOOL CGameFrame::PreTranslateMessage(MSG * pMsg)
{
	m_ToolTipCtrl.RelayEvent(pMsg);
	return __super::PreTranslateMessage(pMsg);
}

//������Ϣ
int CGameFrame::OnCreate(LPCREATESTRUCT lpCreateStruct)
{
	if (__super::OnCreate(lpCreateStruct)==-1) return -1;

	//��������
	ModifyStyle(WS_CAPTION|WS_BORDER,0,0);

	//����ͼ��
	HICON hIcon=LoadIcon(AfxGetInstanceHandle(),MAKEINTRESOURCE(IDR_MAINFRAME));
	SetIcon(hIcon,TRUE);
	SetIcon(hIcon,FALSE);

	//���ñ���
	CString strTitle;
	strTitle.LoadString(AfxGetInstanceHandle(),IDS_MAIN_TITLE);
	SetWindowText(strTitle);

	//�������
	m_pAdBrower = new CHtmlBrower;
	m_pAdBrower->Create(NULL,NULL,WS_VISIBLE|WS_CHILD,CRect(0,0,0,0),this,20,NULL);
//	m_pAdBrower->Navigate(TEXT("http://61.187.55.150/AD/FrameAD.htm"));]
	CString urlStr;
	urlStr.Format("%sAD/FrameAD.htm", Glb().m_MainHomeUrl);
	m_pAdBrower->Navigate(TEXT(urlStr));


	m_pAdBrower->EnableBrowser(true);

	//������ť
	m_btMin.Create(NULL,WS_CHILD|WS_VISIBLE,CRect(0,0,0,0),this,IDC_BT_MIN);
	m_btClose.Create(NULL,WS_CHILD|WS_VISIBLE,CRect(0,0,0,0),this,IDC_BT_CLOSE);
	m_btButton1.Create(TEXT(""),WS_CHILD|WS_VISIBLE,CRect(0,0,0,0),this,IDC_BT_BUTTON_1);
	m_btButton2.Create(TEXT(""),WS_CHILD|WS_VISIBLE,CRect(0,0,0,0),this,IDC_BT_BUTTON_2);
	m_btButton3.Create(TEXT(""),WS_CHILD|WS_VISIBLE,CRect(0,0,0,0),this,IDC_BT_BUTTON_3);
	m_btButton4.Create(TEXT(""),WS_CHILD|WS_VISIBLE,CRect(0,0,0,0),this,IDC_BT_BUTTON_4);
	m_btButton5.Create(TEXT(""),WS_CHILD|WS_VISIBLE,CRect(0,0,0,0),this,IDC_BT_BUTTON_5);

	//����ͼƬ
	m_btMin.SetButtonImage(IDB_FRAME_MIN,AfxGetInstanceHandle(),false);
	m_btClose.SetButtonImage(IDB_FRAME_CLOSE,AfxGetInstanceHandle(),false);
	m_btButton1.SetButtonImage(IDB_FRAME_BT_BUTTON_1,AfxGetInstanceHandle(),false);
	m_btButton2.SetButtonImage(IDB_FRAME_BT_BUTTON_2,AfxGetInstanceHandle(),false);
	m_btButton3.SetButtonImage(IDB_FRAME_BT_BUTTON_3,AfxGetInstanceHandle(),false);
	m_btButton4.SetButtonImage(IDB_FRAME_BT_BUTTON_4,AfxGetInstanceHandle(),false);
	m_btButton5.SetButtonImage(IDB_FRAME_BT_BUTTON_5,AfxGetInstanceHandle(),false);

	//������ʾ�ؼ�
	m_ToolTipCtrl.Create(this);
	m_ToolTipCtrl.Activate(TRUE);
	m_ToolTipCtrl.AddTool(GetDlgItem(IDC_BT_MIN),TEXT("��С����Ϸ�㳡"));
	m_ToolTipCtrl.AddTool(GetDlgItem(IDC_BT_CLOSE),TEXT("�˳���Ϸ�㳡"));

	//�����ؼ�
	m_DlgControlBar.Create(IDD_CONTROL_BAR,this);
	m_DlgGamePlaza.Create(IDD_GAME_PLAZA,this);
	m_DlgControlBar.ActivePlazaViewItem();
	m_DlgControlBar.ShowWindow(SW_SHOW);

	//��ʾ����
	CRect rcRect;
	SystemParametersInfo(SPI_GETWORKAREA,0,&rcRect,SPIF_SENDCHANGE);
	SetWindowPos(&wndTop,rcRect.left,rcRect.top,rcRect.Width(),rcRect.Height(),SWP_DRAWFRAME|SWP_SHOWWINDOW);
	

	return 0;
}

//�滭��Ϣ
void CGameFrame::OnPaint()
{
	CPaintDC dc(this);

	//��ȡλ��
	CRect rcClient;
	GetClientRect(&rcClient);

	//������Դ
	int nXPos=0,nYPos=0;
	CImageHandle ImageLHandle(&m_ImageL);
	CImageHandle ImageRHandle(&m_ImageR);
	CImageHandle ImageTLHandle(&m_ImageTL);
	CImageHandle ImageTMHandle(&m_ImageTM);
	CImageHandle ImageTRHandle(&m_ImageTR);

	//�滭�ϱ�
	m_ImageTL.BitBlt(dc,0,0);
	for (nXPos=m_ImageTL.GetWidth();nXPos<rcClient.Width()-m_ImageTR.GetWidth();nXPos+=m_ImageTM.GetWidth())
	{
		m_ImageTM.BitBlt(dc,nXPos,0);
	}
	m_ImageTR.BitBlt(dc,rcClient.Width()-m_ImageTR.GetWidth(),0);

	//�滭����
	nXPos=rcClient.Width()-m_ImageR.GetWidth();
	for (int nYPos=m_ImageTL.GetHeight();nYPos<rcClient.Height();nYPos+=m_ImageL.GetHeight()) 
	{
		m_ImageL.BitBlt(dc,0,nYPos);
		m_ImageR.BitBlt(dc,nXPos,nYPos);
	}

	return;
}

//�滭����
BOOL CGameFrame::OnEraseBkgnd(CDC * pDC)
{
	Invalidate(FALSE);
	UpdateWindow();
	return TRUE;
}

//���øı�
void CGameFrame::OnSettingChange(UINT uFlags, LPCTSTR lpszSection)
{
	__super::OnSettingChange(uFlags, lpszSection);

	//������ܴ�С
	CRect rcClient;
	SystemParametersInfo(SPI_GETWORKAREA,0,&rcClient,SPIF_SENDCHANGE);
	MoveWindow(&rcClient,TRUE);

	return;
}

//�ر���Ϣ
void CGameFrame::OnClose()
{
	//�ر���ʾ
	if (g_GlobalUnits.GetGolbalUserData().dwUserID!=0L)
	{
		int nCode=AfxMessageBox(TEXT("��ȷʵҪ�ر���Ϸ�㳡��"),MB_YESNO|MB_DEFBUTTON2|MB_ICONQUESTION);
		if (nCode!=IDYES) return;
	}

	//���ؽ���
	ShowWindow(SW_HIDE);

	//�رշ���
	g_pControlBar->CloseAllRoomViewItem();

	//��������
	g_GlobalOption.SaveOptionParameter();
	g_GlobalUnits.m_CompanionManager->SaveCompanion();

	__super::OnClose();
}

//���ܰ�ť
void CGameFrame::OnBnClickedButton1()
{
	m_DlgControlBar.WebBrowse(TEXT(Glb().m_MainHomeUrl),true);

	return;
}

//���ܰ�ť �ʺų�ֵ
void CGameFrame::OnBnClickedButton2()
{
	CString urlStr;
	urlStr.Format("%s%s", Glb().m_MainHomeUrl, Glb().m_CZUrl);

	m_DlgControlBar.WebBrowse(TEXT(urlStr),true);

	return;
}

//���ܰ�ť  �ҵļ�԰
void CGameFrame::OnBnClickedButton3()
{
	CString urlStr;
	urlStr.Format("%s%s", Glb().m_MainHomeUrl, Glb().m_MemberUrl);

	m_DlgControlBar.WebBrowse(TEXT(urlStr),true);
	return;
}

//���ܰ�ť
void CGameFrame::OnBnClickedButton4()
{
//	m_DlgControlBar.WebBrowse(TEXT(HOME_WEB_URL),true);
	return;
}

//���ܰ�ť bbs
void CGameFrame::OnBnClickedButton5()
{
	CString urlStr;
	urlStr.Format("%s%s", Glb().m_MainHomeUrl, Glb().m_BBSUrl);

	m_DlgControlBar.WebBrowse(TEXT(urlStr),true);

	return;
}



//��ȡ���λ��
void CGameFrame::OnGetMinMaxInfo(MINMAXINFO FAR * lpMMI) 
{
	lpMMI->ptMinTrackSize.x=MIN_CLIENT_WIDTH;
	lpMMI->ptMinTrackSize.y=MIN_CLIENT_HEIGHT;
	__super::OnGetMinMaxInfo(lpMMI);
}

//λ����Ϣ
void CGameFrame::OnSize(UINT nType, int cx, int cy) 
{
	__super::OnSize(nType, cx, cy);

	//���ÿؼ�
	m_DlgControlBar.SetViewItemRect(BORDER_WIDTH,TITLE_HEIGHT,cx-2*BORDER_WIDTH,cy-TITLE_HEIGHT-CONTROL_BAR_HEIGHT);

	//������Ļ
	LockWindowUpdate();

	//�ƶ��ؼ�
	HDWP hDwp=BeginDeferWindowPos(20);
	const UINT uFlags=SWP_NOACTIVATE|SWP_NOZORDER|SWP_NOCOPYBITS;

	//�����ؼ�

	int minBtnX = cx-70;
	int closeBtnX = minBtnX + 32;
	DeferWindowPos(hDwp,m_btMin,NULL, minBtnX,7,0,0,uFlags|SWP_NOSIZE);
	DeferWindowPos(hDwp,m_btClose,NULL,closeBtnX,7,0,0,uFlags|SWP_NOSIZE);
	DeferWindowPos(hDwp,m_pAdBrower->GetSafeHwnd(),NULL,161,17,279,48,uFlags);
	m_pAdBrower->ShowWindow(false);

	DeferWindowPos(hDwp,m_DlgControlBar,NULL,0,cy-CONTROL_BAR_HEIGHT,cx,CONTROL_BAR_HEIGHT,uFlags);

	//������ť
	CRect rcButton;
	int nBeginPos=320;//460;
	m_btButton1.GetWindowRect(&rcButton);
//	int nSpace=(cx-nBeginPos-rcButton.Width()*7-10)/6;

	int btnY = 5;
	int btnX = nBeginPos;
	int btnW = rcButton.Width();
	int nSpace= btnW/8;

	DeferWindowPos(hDwp,m_btButton1,NULL,btnX,btnY,0,0,uFlags|SWP_NOSIZE);

	btnX+=(btnW+nSpace);
	DeferWindowPos(hDwp,m_btButton2,NULL,btnX,btnY,0,0,uFlags|SWP_NOSIZE);
	btnX+=(btnW+nSpace);
	DeferWindowPos(hDwp,m_btButton3,NULL,btnX,btnY,0,0,uFlags|SWP_NOSIZE);
	btnX+=(btnW+nSpace);
	DeferWindowPos(hDwp,m_btButton4,NULL,btnX,btnY,0,0,uFlags|SWP_NOSIZE);
	btnX+=(btnW+nSpace);
	DeferWindowPos(hDwp,m_btButton5,NULL,btnX,btnY,0,0,uFlags|SWP_NOSIZE);
/*
	m_btButton1.ShowWindow(false);
	m_btButton2.ShowWindow(false);
	m_btButton3.ShowWindow(false);
	m_btButton4.ShowWindow(false);
	m_btButton5.ShowWindow(false);
*/
	//DeferWindowPos(hDwp,m_btButton6,NULL,nBeginPos+rcButton.Width()*5+nSpace*5,25,0,0,uFlags|SWP_NOSIZE);
	//DeferWindowPos(hDwp,m_btButton7,NULL,nBeginPos+rcButton.Width()*6+nSpace*6,25,0,0,uFlags|SWP_NOSIZE);

	//�ƶ��ؼ�
	EndDeferWindowPos(hDwp);

	//�������
	UnlockWindowUpdate();

	return;
}

//��С��ť
void CGameFrame::OnBnClickedMin()
{
	ShowWindow(SW_MINIMIZE);
	return;
}

//�رհ�ť
void CGameFrame::OnBnClickedClose()
{
	g_pControlBar->CloseCurrentViewItem();
	return;
}

//��װ���
LRESULT CGameFrame::OnMessageSetupFinish(WPARAM wParam, LPARAM lParam)
{
	g_GlobalUnits.m_ServerListManager.UpdateGameKind((WORD)wParam);
	return 0;
}

//////////////////////////////////////////////////////////////////////////
