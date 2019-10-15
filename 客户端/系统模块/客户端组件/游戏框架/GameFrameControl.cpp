#include "Stdafx.h"
#include "Resource.h"
#include "GlobalOption.h"
#include "GameFrameControl.h"

#define		WEB_HEIGHT					100					//��ҳ�߶�

//////////////////////////////////////////////////////////////////////////

BEGIN_MESSAGE_MAP(CGameFrameControl, CDialog)
	ON_WM_SIZE()
	ON_WM_PAINT()
	ON_WM_ERASEBKGND()
	ON_MESSAGE(WM_HIT_EXPMESSTION,OnHitExpression)
//	ON_BN_CLICKED(IDC_GAME_RULE, OnBnClickedRule)
//	ON_BN_CLICKED(IDC_GAME_OPTION, OnBnClickedOption)
//	ON_BN_CLICKED(IDC_QUIT_GAME, OnBnClickedQuitGame)
	ON_BN_CLICKED(IDC_SEND_CHAT, OnBnClickedSendChat)
	ON_BN_CLICKED(IDC_EXPRESSION, OnBnClickedExpression)
	ON_BN_CLICKED(IDC_COLOR_SET, OnBnClickedColorSet)
	ON_BN_CLICKED(IDC_CLEAN_SCREEN, OnBnClickedCleanScreen)
END_MESSAGE_MAP()

//////////////////////////////////////////////////////////////////////////

//���캯��
CGameFrameControl::CGameFrameControl(CGameFrameDlg * pGameFrameDlg) : CDialog(IDD_FRAME_CONTROL), m_pGameFrameDlg(pGameFrameDlg)
{
	//���ñ���
	m_bRectify=false;
	m_bInitDialog=false;
	m_pAdBrower=NULL;
	m_pIClientKernel=NULL;
	HINSTANCE hInstance=GetModuleHandle(GAME_FRAME_DLL_NAME);
	m_ImageLeftViewLM.SetLoadInfo(IDB_LEFT_VIEW_LM,hInstance);
	m_ImageLeftViewMM.SetLoadInfo(IDB_LEFT_VIEW_MM,hInstance);
	m_ImageLeftViewRM.SetLoadInfo(IDB_LEFT_VIEW_RM,hInstance);
	m_ImageLeftViewLTM.SetLoadInfo(IDB_LEFT_VIEW_LTM,hInstance);
	m_ImageLeftViewRTM.SetLoadInfo(IDB_LEFT_VIEW_RTM,hInstance);
	m_ImageLeftViewLT.SetLoadInfo(IDB_LEFT_VIEW_LT,hInstance);
	m_ImageLeftViewMT.SetLoadInfo(IDB_LEFT_VIEW_MT,hInstance);
	m_ImageLeftViewRT.SetLoadInfo(IDB_LEFT_VIEW_RT,hInstance);
	m_ImageLeftViewLB.SetLoadInfo(IDB_LEFT_VIEW_LB,hInstance);
	m_ImageLeftViewMB.SetLoadInfo(IDB_LEFT_VIEW_MB,hInstance);
	m_ImageLeftViewRB.SetLoadInfo(IDB_LEFT_VIEW_RB,hInstance);
	m_ImageLeftViewLBM.SetLoadInfo(IDB_LEFT_VIEW_LBM,hInstance);
	m_ImageLeftViewRBM.SetLoadInfo(IDB_LEFT_VIEW_RBM,hInstance);

	return;
}

//��������
CGameFrameControl::~CGameFrameControl()
{
}

//�ؼ���
void CGameFrameControl::DoDataExchange(CDataExchange* pDX)
{
	__super::DoDataExchange(pDX);
	DDX_Control(pDX, IDC_PHRASE, m_btPhrase);
	DDX_Control(pDX, IDC_COLOR_SET, m_btColorSet);
	DDX_Control(pDX, IDC_SEND_CHAT, m_btSendChat);
	DDX_Control(pDX, IDC_EXPRESSION, m_btExpression);
	DDX_Control(pDX, IDC_CLEAN_SCREEN, m_btCleanScreen);
	DDX_Control(pDX, IDC_CHAT_INPUT, m_ChatInput);
	DDX_Control(pDX, IDC_CHAT_MESSAGE, m_ChatMessage);
	DDX_Control(pDX, IDC_USER_LIST, m_UserListView);

	DDX_Control(pDX, IDC_CHAT_OBJECT, m_ChatObject);
}

//��ʼ������
BOOL CGameFrameControl::OnInitDialog()
{
	__super::OnInitDialog();

	//���ÿؼ�
	m_UserListView.InitUserListView();
	m_ChatMessage.SetBackgroundColor(FALSE,RGB(255,255,255));

	//���ð�ť
	HINSTANCE hInstance=GetModuleHandle(GAME_FRAME_DLL_NAME);
	m_btPhrase.SetButtonImage(IDB_BT_EXPESSION,hInstance,false);
	m_btExpression.SetButtonImage(IDB_BT_EXPESSION,hInstance,false);
	m_btColorSet.SetButtonImage(IDB_BT_COLOR_SET,hInstance,false);
	m_btCleanScreen.SetButtonImage(IDB_BT_CLEAN_SCREEN,hInstance,false);
	m_btSendChat.SetButtonImage(IDB_BT_SEND_CHAT,hInstance,false);


	//������ʾ�ؼ�
	m_ToolTipCtrl.Create(this);
	m_ToolTipCtrl.Activate(TRUE);
	m_ToolTipCtrl.AddTool(GetDlgItem(IDC_EXPRESSION),TEXT("����"));
	m_ToolTipCtrl.AddTool(GetDlgItem(IDC_COLOR_SET),TEXT("��ɫ"));
	m_ToolTipCtrl.AddTool(GetDlgItem(IDC_CLEAN_SCREEN),TEXT("����"));
	m_ToolTipCtrl.AddTool(GetDlgItem(IDC_SEND_CHAT),TEXT("����"));

	//�������
	m_pAdBrower = new CHtmlBrower;
	m_pAdBrower->Create(NULL,NULL,WS_VISIBLE|WS_CHILD,CRect(0,0,0,0),this,20,NULL);
	//m_pAdBrower->Navigate(TEXT("http://www.kkqipai.com/AD/GameRoomAD.asp?KindID=0"));
//	m_pAdBrower->Navigate(TEXT("http://61.187.55.150/AD/RoomAd.htm"));
	CString urlStr;
	urlStr.Format("%s/AD/RoomAd.htm", HOME_WEB_URL);
	m_pAdBrower->Navigate(TEXT(urlStr));

	m_pAdBrower->EnableBrowser(true);

	//�������
	m_ChatObject.AddString(TEXT("������"));
	m_ChatObject.SetCurSel(0);

	//���ñ���
	m_bInitDialog=true;

	return TRUE;
}

//��Ϣ����
BOOL CGameFrameControl::PreTranslateMessage(MSG * pMsg)
{
	if ((pMsg->message==WM_KEYDOWN)&&(pMsg->wParam==VK_RETURN))
	{
		OnBnClickedSendChat();
		return TRUE;
	}
	m_ToolTipCtrl.RelayEvent(pMsg);
	return __super::PreTranslateMessage(pMsg);
}

//�����ں�
void CGameFrameControl::SetClientKernel(IClientKernel * pIClientKernel)
{
	m_pIClientKernel=pIClientKernel;
	return;
}

//���ÿ���
void CGameFrameControl::ResetGameFrameControl()
{
	//�������
	int nChatCount=m_ChatObject.GetCount();
	for (int i=1;i<nChatCount;i++) m_ChatObject.DeleteString(1);

	//�����б�
	m_UserListView.DeleteAllItems();

	return;
}

//�����û�
bool CGameFrameControl::InsertUserItem(tagUserData * pUserData)
{
	return m_UserListView.InsertUserItem(pUserData);
}

//�����û�
bool CGameFrameControl::UpdateUserItem(tagUserData * pUserData)
{
	return m_UserListView.UpdateUserItem(pUserData);
}

//ɾ���û�
bool CGameFrameControl::DeleteUserItem(tagUserData * pUserData)
{
	return m_UserListView.DeleteUserItem(pUserData);
}

//�滭��Ϣ
void CGameFrameControl::OnPaint()
{
	CPaintDC dc(this);

	//�滭����
	DrawLeftViewFrame(&dc);

	return;
}


//�滭����
BOOL CGameFrameControl::OnEraseBkgnd(CDC * pDC)
{
	return TRUE;
}

//λ����Ϣ
void CGameFrameControl::OnSize(UINT nType, int cx, int cy)
{
	__super::OnSize(nType, cx, cy);

	//�����ؼ�
	RectifyControl(cx,cy);

	return;
}

//������Ϣ
LRESULT CGameFrameControl::OnHitExpression(WPARAM wParam, LPARAM lParam)
{
	CExpressionItem * pExpressionItem=m_Expression.GetExpressItem((WORD)wParam);
	if (pExpressionItem!=NULL)
	{
		CString strBuffer;
		m_ChatInput.GetWindowText(strBuffer);
		strBuffer+=pExpressionItem->m_szTrancelate;
		m_ChatInput.SetWindowText(strBuffer);
		m_ChatInput.SetFocus();
		m_ChatInput.SetSel(strBuffer.GetLength(),strBuffer.GetLength());
	}

	return 0;
}
	//��������
void CGameFrameControl::SendChatMsg(CString chatMsg)
{
//	m_ChatInput.GetWindowText(szChatMessage,CountArray(szChatMessage));
	if (chatMsg.GetLength()> 0)
	{
		DWORD dwTargetUserID=0L;
		m_pIClientKernel->SendChatMessage(dwTargetUserID,chatMsg,g_GlobalOption.m_crChatTX);
	}

}
//���Ͱ�ť
void CGameFrameControl::OnBnClickedSendChat()
{
	//������Ϣ
	TCHAR szChatMessage[MAX_CHAT_LEN]=TEXT("");
	m_ChatInput.GetWindowText(szChatMessage,CountArray(szChatMessage));
	if (szChatMessage[0]!=0)
	{
		DWORD dwTargetUserID=0L;
		int nItem=m_ChatObject.GetCurSel();
		if ((nItem!=LB_ERR)&&(nItem!=0)) 
		{
			dwTargetUserID=(DWORD)m_ChatObject.GetItemData(nItem);
		}
		m_ChatInput.SetWindowText(TEXT(""));
		m_pIClientKernel->SendChatMessage(dwTargetUserID,szChatMessage,g_GlobalOption.m_crChatTX);
	}

	//���ý���
	m_ChatInput.SetFocus();

	return;
}

//���鰴ť
void CGameFrameControl::OnBnClickedExpression()
{
	//�������鴰��
	if (m_Expression.GetSafeHwnd()==NULL) m_Expression.CreateExpression(this);

	//�ƶ�����
	CRect rcButton;
	CSize ExpressSize;
	m_Expression.GetFixSize(ExpressSize);
	m_btExpression.GetWindowRect(&rcButton);
	m_Expression.MoveWindow(rcButton.right-ExpressSize.cx,rcButton.top-ExpressSize.cy,ExpressSize.cx,ExpressSize.cy);
	m_Expression.ShowWindow(SW_SHOW);
	m_Expression.SetFocus();

	return;
}

//��ɫ��ť
void CGameFrameControl::OnBnClickedColorSet()
{
	//������ɫ
	CColorDialog ColorDialog(g_GlobalOption.m_crChatTX,CC_FULLOPEN);
	if (ColorDialog.DoModal()==IDOK) g_GlobalOption.m_crChatTX=ColorDialog.GetColor();

	//���ý���
	m_ChatInput.SetFocus();

	return;
}

//������ť
void CGameFrameControl::OnBnClickedCleanScreen()
{
	m_ChatMessage.CleanScreen();
	return;
}

//����ͼ��
void CGameFrameControl::DrawLeftViewFrame(CDC * pDC)
{
	//��ȡλ��
	CRect rcClient;
	GetClientRect(&rcClient);

	//��������
	HDC hDC=pDC->m_hDC;
	int nXPos=0,nYPos=0;
	int nComminutePos=rcClient.Height()*3/7+50;

	//������Դ
	CImageHandle ImageLeftViewLMHandle(&m_ImageLeftViewLM);
	CImageHandle ImageLeftViewMMHandle(&m_ImageLeftViewMM);
	CImageHandle ImageLeftViewRMHandle(&m_ImageLeftViewRM);
	CImageHandle ImageLeftViewLTMHandle(&m_ImageLeftViewLTM);
	CImageHandle ImageLeftViewRTMHandle(&m_ImageLeftViewRTM);
	CImageHandle ImageLeftViewLTHandle(&m_ImageLeftViewLT);
	CImageHandle ImageLeftViewMTHandle(&m_ImageLeftViewMT);
	CImageHandle ImageLeftViewRTHandle(&m_ImageLeftViewRT);
	CImageHandle ImageLeftViewLBHandle(&m_ImageLeftViewLB);
	CImageHandle ImageLeftViewMBHandle(&m_ImageLeftViewMB);
	CImageHandle ImageLeftViewRBHandle(&m_ImageLeftViewRB);
	CImageHandle ImageLeftViewLBMHandle(&m_ImageLeftViewLBM);
	CImageHandle ImageLeftViewRBMHandle(&m_ImageLeftViewRBM);

	//�滭�Ͽ�
	m_ImageLeftViewLT.BitBlt(hDC,0,0);
	for (nXPos=m_ImageLeftViewLT.GetWidth();nXPos<rcClient.Width();nXPos+=m_ImageLeftViewMT.GetWidth())
	{
		m_ImageLeftViewMT.BitBlt(hDC,nXPos,0);
	}
	m_ImageLeftViewRT.BitBlt(hDC,rcClient.Width()-m_ImageLeftViewRT.GetWidth(),0);

	//�滭����
	nXPos=rcClient.Width()-m_ImageLeftViewRTM.GetWidth();
	for (nYPos=m_ImageLeftViewLT.GetHeight();nYPos<nComminutePos-m_ImageLeftViewLM.GetHeight();nYPos+=m_ImageLeftViewLTM.GetHeight())
	{
		m_ImageLeftViewLTM.BitBlt(hDC,0,nYPos);
		m_ImageLeftViewRTM.BitBlt(hDC,nXPos,nYPos);
	}

	//�滭�м�
	m_ImageLeftViewLM.BitBlt(hDC,0,nComminutePos-m_ImageLeftViewLM.GetHeight());
	for (nXPos=m_ImageLeftViewLM.GetWidth();nXPos<rcClient.Width();nXPos+=m_ImageLeftViewMM.GetWidth())
	{
		m_ImageLeftViewMM.BitBlt(hDC,nXPos,nComminutePos-m_ImageLeftViewMM.GetHeight());
	}
	m_ImageLeftViewRM.BitBlt(hDC,rcClient.Width()-m_ImageLeftViewRM.GetWidth(),nComminutePos-m_ImageLeftViewRM.GetHeight());

	//�滭����
	nXPos=rcClient.Width()-m_ImageLeftViewRBM.GetWidth();
	for (nYPos=nComminutePos;nYPos<rcClient.Height()-m_ImageLeftViewLB.GetHeight();nYPos+=m_ImageLeftViewLBM.GetHeight())
	{
		m_ImageLeftViewLBM.BitBlt(hDC,0,nYPos);
		m_ImageLeftViewRBM.BitBlt(hDC,nXPos,nYPos);
	}

	//�滭�¿�
	nYPos=rcClient.Height()-m_ImageLeftViewMB.GetHeight();
	m_ImageLeftViewLB.BitBlt(hDC,0,rcClient.Height()-m_ImageLeftViewLB.GetHeight());
	for (nXPos=m_ImageLeftViewLB.GetWidth();nXPos<rcClient.Width()-m_ImageLeftViewRB.GetWidth();nXPos+=m_ImageLeftViewMB.GetWidth())
	{
		m_ImageLeftViewMB.BitBlt(hDC,nXPos,nYPos);
	}
	m_ImageLeftViewRB.BitBlt(hDC,rcClient.Width()-m_ImageLeftViewRB.GetWidth(),rcClient.Height()-m_ImageLeftViewRB.GetHeight());

	return;
}

//�����ؼ�
void CGameFrameControl::RectifyControl(int nWidth, int nHeight)
{
	CString strFile,strTemp;
	CTime tmCur = CTime::GetCurrentTime();
	CString strTime = tmCur.Format("%m%d");
	strFile.Format("log\\%sRectifyControl.log",strTime);

	strTemp.Format("RectifyControl %d  %d", nWidth,  nHeight);
//	WriteLog(strFile, strTemp);

	//״̬�ж�
	if (m_bInitDialog==false) return;
	if ((nWidth==0)||(nHeight==0)) return;

	//��������
	const int nComminutePos=nHeight*3/7;
	const UINT uFlags=SWP_NOACTIVATE|SWP_NOZORDER|SWP_NOCOPYBITS;

	//�ƶ��ؼ�
	HDWP hDwp=BeginDeferWindowPos(32);

	int ctrlXInt = 10;
	int ctrlYInt = 197;
	int crtlWInt = nWidth-20;
	int crtlHInt = nComminutePos-186;
	//�б�����
	//�û��б�
	DeferWindowPos(hDwp,m_UserListView,NULL,ctrlXInt,ctrlYInt,crtlWInt,nComminutePos-194,uFlags);

	//��������
	CRect rcButton;
	m_btPhrase.GetWindowRect(&rcButton);
	CButton * pButtonArray[]={&m_btExpression,&m_btColorSet,&m_btCleanScreen};

	ctrlYInt = nHeight-50;
	//3����ť
	for (int i=0;i<CountArray(pButtonArray);i++)
	{
		DeferWindowPos(hDwp,pButtonArray[i]->m_hWnd,NULL,ctrlXInt+(rcButton.Width()+5)*i,ctrlYInt ,rcButton.Width(),rcButton.Height(),uFlags);
	}
	m_btSendChat.GetWindowRect(&rcButton);
	//
	ctrlYInt = nHeight- 30;
	DeferWindowPos(hDwp,m_btSendChat,NULL,nWidth-rcButton.Width()-17,ctrlYInt ,rcButton.Width(),rcButton.Height(),uFlags);
	DeferWindowPos(hDwp,m_ChatObject,NULL,ctrlXInt, ctrlYInt,70,200,uFlags);
	//
	DeferWindowPos(hDwp,m_ChatInput,NULL,80, ctrlYInt,nWidth-rcButton.Width()-107,19,uFlags);

	//������Ϣ
	ctrlYInt = nComminutePos+50;
	crtlHInt = nHeight-nComminutePos-rcButton.Height()-90;
	DeferWindowPos(hDwp,m_ChatMessage,NULL,ctrlXInt,ctrlYInt ,crtlWInt,crtlHInt ,uFlags);

	//���ҳ
	ctrlYInt = 23;
	crtlHInt = 174;
	DeferWindowPos(hDwp,m_pAdBrower->GetSafeHwnd(),NULL,ctrlXInt,ctrlYInt, crtlWInt,crtlHInt,uFlags);


	EndDeferWindowPos(hDwp);

	//�ػ�����
	Invalidate(FALSE);
	UpdateWindow();

	return;
}

//////////////////////////////////////////////////////////////////////////
