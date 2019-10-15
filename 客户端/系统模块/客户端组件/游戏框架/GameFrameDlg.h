#ifndef GAME_FRAME_DLG_HEAD_FILE
#define GAME_FRAME_DLG_HEAD_FILE

#pragma once

#include "GameFrame.h"
#include "GameFrameView.h"

#include "LabelEx.h"
#include "DlgDTSound.h"

#include "../../������/Include/FlyGameAVClientDllDefine.h"
#include "../../������/Include/FlyGamePublicDefine.h"
#include "../../������/Include/UDPSendMsgDefine.h"

//�궨��
#define CONTROL_SPACE						2							//�ؼ����
#define SPLIT_WIDE							0							//��������
#define TITLE_HIGHT							26							//�������߶�
#define BUTTON_WIDE							8							//���ذ�ť���
#define BUTTON_HIGHT						80							//���ذ�ť�߶�
#define TALK_HIGHT							53							//��������߶�
#define PIC_BT_WIDE							20							//λͼ��ť���
#define PIC_BT_HIGHT						20							//λͼ��ť�߶�
#define BT_BUTTON_WIDE						55							//��ť���
#define BT_BUTTON_HIGHT						20							//��ť�߶�

//�궨��
#define CONTROL_SPACE						2							//�ؼ����
#define SPLIT_WIDE							0							//��������
#define BUTTON_WIDE							7//8							//���ذ�ť���
#define BUTTON_HIGHT						82//80							//���ذ�ť�߶�
#define BT_BUTTON_WIDE						63							//��ť���
#define BT_BUTTON_HIGHT						39							//��ť�߶�
#define BUTTON_MORE_WIDE					0							//���Ҹ��Ӱ�ť
#define BUTTON_Y_POS						10							//��ť Y ����
#define BUTTON_START_POS					160							//��ť��ʼ��
#define BUTTON_END_POS						115							//��ť��ֹ��
#define ROOM_BAR_HEIGHT						8							//�����ܸ߶�
#define BOTTOM_HIDE_WIDTH					80							//���ذ�ť���							
#define BOTTOM_HIDE_HEIGHT					8							//���ذ�ť�߶�
#define CHAR_HEIGHT							24							//����߶�

//��ܴ�С 
#define ROOM_FRAME_TOP						82 //(62+20)//56							//����ϸ�
#define ROOM_FRAME_LEFT						3							//������
#define ROOM_FRAME_RIGHT					4							//����ҿ�
#define ROOM_FRAME_BOTTOM					12							//����¸�

#define INFO_WIDTH							275							//�ұ���Ϣ�����

#define EX_TOOL_EXE  "FlyFileDownLoadClient.exe"
#define TOOLS_LABLE_USE_MAX_NUM  6
#define TOOLS_LABLE_MYSELF_USE_MAX_NUM  4
#define DJ_LABLE_USE_MAX_NUM  4

#define TOOLS_LABLE_NUM    4  //4��������
#define DJ_LABLE_NUM    2  //4��������



enum LABLE_ID_TYPE{LABLE_ID_TYPE_TOOLS,LABLE_ID_TYPE_TOOLS_1,LABLE_ID_TYPE_TOOLS_2,LABLE_ID_TYPE_TOOLS_3,LABLE_ID_TYPE_DJ_1,LABLE_ID_TYPE_DJ_2,LABLE_ID_TYPE_MYSELF_TOOLS,LABLE_ID_TYPE_MAX};
//1.�����2����Ϊ���ѣ�3���ؿ���4���ؿ���Ƶ��5��������Ƶ��6������ģ�
enum TOOLS_OP_TYPE{TOOLS_OP_TYPE_GIFT,TOOLS_OP_TYPE_ADD_FRIEND,TOOLS_OP_TYPE_MIC,TOOLS_OP_TYPE_VIDEO,TOOLS_OP_TYPE_ZOOM_VIDEO,TOOLS_OP_TYPE_MORE,TOOLS_OP_TYPE_MAX};

//����,��Ƶ������
enum DATA_TYPE{DATA_TYPE_CMD,DATA_TYPE_AUDIO, DATA_TYPE_VIDEO};
//�����û�״̬
typedef struct _USER_STATUS_ITEM
{
int userId;
int micStatus;//MIC
int videoStatus;//��Ƶ

}
USER_STATUS_ITEM;

//��˵��
class CGameFrameControl;
class CClientKernelSink;

#define MAX_STRING_SIZE 128


class CINIFile  
{
  CString lpFileName ;
  DWORD mMaxSize ;
public:
	static bool IsFileExist(CString fileName)
	{
		WIN32_FIND_DATA  d;
		HANDLE  hd= FindFirstFile(fileName,&d);
		if(hd != INVALID_HANDLE_VALUE)
			return true;

		return false;
	}
	static void CopyFileTo(CString destFileName,CString srcFileName)
	{
		bool bb=IsFileExist(srcFileName);
		if(!bb)return;
		CopyFile( srcFileName, destFileName, FALSE);

	}
		
	static CString GetWinSysPath()
	{
		char lpBuffer[MAX_STRING_SIZE];
		GetSystemDirectory( lpBuffer, MAX_STRING_SIZE);
		CString ss=lpBuffer;
		ss += "\\";
		return ss;

	}
		
	static CString GetAppPath()
	{
		char lpBuffer[MAX_STRING_SIZE];
		GetCurrentDirectory(MAX_STRING_SIZE,lpBuffer);
		CString ss=lpBuffer;
		ss += "\\";
		return ss;
	}

	

	int GetKeyVal(CString secName,CString keyName,int lpDefault)
	{
		return (int) GetPrivateProfileInt(
					secName,// points to section name
					keyName,// points to key name
					lpDefault,       // return value if key name not found
					lpFileName//LPCTSTR lpFileName  // initialization file name
					);

	}
	

	CString GetKeyVal(CString secName,CString keyName,LPCTSTR lpDefault)
	{ 
		char* re = new char[mMaxSize + 1];
		GetPrivateProfileString(
								secName,// points to section name
								keyName,// points to key name
								lpDefault,// points to default string
								re,// points to destination buffer
								mMaxSize,// size of destination buffer
								lpFileName // points to initialization filename
							);
		CString ss=re;
		delete []re;
		return ss;
	}
		
	void SetKeyValString(CString secName,CString keyName,CString Val)
	{ 

		WritePrivateProfileString(
								secName,// pointer to section name
								keyName,// pointer to key name
								Val,// pointer to string to add
								lpFileName// pointer to initialization filename
								);

	}

		
	CINIFile(CString FileName,int maxsize=MAX_STRING_SIZE)
	{
		lpFileName=FileName;
		mMaxSize = maxsize;

	}

	~CINIFile()	{}
	void SetINIFileName(CString fileName){lpFileName=fileName;}
	
};

//////////////////////////////////////////////////////////////////////////
class CGlobal
{
public :
	CGlobal()
	{
		CString s=CINIFile::GetAppPath ();
	    CINIFile f( s + "GamePlaceSetup.ini");

		m_CenterServerIPAddr=f.GetKeyVal ("System","CenterServerIPAddr","127.0.0.1");////�ͻ��˵�ǰ�汾ϵ�к�

	//	m_CenterServerPort=CENTER_SERVER_PORT;
		//CString showMsg;
		//showMsg.Format("m_CenterServerPort=%d, m_CenterServerIPAddr=%s", m_CenterServerPort, m_CenterServerIPAddr);
		//AfxMessageBox(showMsg);
		m_HelpUrlAddr=f.GetKeyVal ("System","HelpUrlAddr","www.cctvdodo.com");//

		VirtualFaceWebAddr=f.GetKeyVal ("System","VirtualFaceWebAddr","www.cctvdodo.com");

		m_AdUrl = f.GetKeyVal ("System","AdUrl","www.cctvdodo.com");//

	}
	virtual ~CGlobal(){}

//	CenterServerMsg m_CenterServerPara;
	CString m_CenterServerIPAddr;
	CString m_HelpUrlAddr;
	CString m_MainHomeUrl;
	UINT m_CenterServerPort;

	CString VirtualFaceWebAddr;
	CString m_AdUrl;//���


};


static CGlobal g_global;

static CGlobal& Glb(){return g_global;}
//��Ϸ������
class GAME_FRAME_CLASS CGameFrameDlg : public CSkinDialog, public ISplitterSink
{
	//��Ԫ����
	friend class CClientKernelSink;
	friend class CGameFrameControl;
	friend class CDlgDTSound;

public:
	void PlayMP3Sound(CString fileStr);
private:
	int showDlgX,showDlgY;
	//����̬����
//	bool DealwithDTSoundMsg(MSG_GR_RS_NormalTalk * pNormalTalk);

	CString GetPlaySoundFileStr(CString inStr, CString *charStr);

	CDlgDTSound* pOneUserInfoDlg;
	//��Ϸ����
protected:
	bool							m_bHideList;						//�����б�
	//�����б�ť
	void OnBnClickedHideList();

	//��������
	void OnBnClickedYuYin();

	//���ܣ���ʼ��������
	void InitToolsBar();


	//���ܣ���ʼ��myself������
	void InitMyselfToolsBar();

	//���ܣ���ʼ��DJ��
	void InitDJBar();

	//���ܣ������û�����
	void DealwithOp(int lableID, int opInt);

	//���ܣ�����myself tool�û�����
	void DealwithMyselfToolsOp( int opInt);	

	//���ܣ�����tool�û�����
	void DealwithToolsOp(int lableID, int opInt);

	//���ܣ�����DJ�û�����
	void DealwithDJOp(int lableID, int opInt);
	//���ܣ���ȡ�û�IDͨ��LABE
	int GetOneUserIdFromLableID(int lableID);

//1.������

			void OpenGiftExe(int opUserInt );

//2����Ϊ����

		
			void AddOneFriend(int opUserInt );
		
		
		 
//3���ؿ���

		
			void OpOneMic(int opUserInt, int opType=0 );
		
		
		 
//4���ؿ���Ƶ

		
			void OpOneVideo(int opUserInt, int opType=0 );
		
		
		 
//5��������Ƶ
void OpZoomVideo(int opUserInt, int opType=0);
		
		 
//6�������

		
			void ShowOneMoreMenu(int opUserInt , int opType=0);

	USER_STATUS_ITEM  myUserStatusList[TOOLS_LABLE_NUM];
	USER_STATUS_ITEM  mySelfStatusList;

	//���ܣ�init
	void InitUserStatus();
LRESULT MyWndProc(WPARAM wParam, LPARAM lParam);

	int isHaveSetupAV;//��Ƶ����Ƿ����
//�����Լ���λ��
void SetMyselfAVClientPostion();
    HINSTANCE myhinstDLL ; //��Ƶ
//���ܣ�������ƵDLL
//���룺
//���أ�
	void SetupVideoDLL();

//���ܣ��ͷ���ƵDLL
//���룺
//���أ�
	void FreeVideoDLL();

//��Ƶ�����ӿ�	
//����:���Ʊ��ط���
//����:������Ƶ����;��������
//DATA_TYPE_AUDIO, DATA_TYPE_VIDEO;
void FlyOpNetSendMode(int avType, int opType);

void FlyGetOneTablePlayerList();

void FlyAVClientSendUnRegMsg();

void FlyAVClientSendRegMsg();

void FlySetAVClientPostionValue( 
												  int roomID, 
												  int tableID,
												  int deskID
												  );

void  SetOneRemoteShowHWND( HWND myhRemoteWnd, int deskInt);
public:
	CSkinButton				m_BtHideList;					//�������б�
	CSkinButton			    m_BtYuYin;//������ť
	CSkinButton							m_btQuitGame;					//�˳���Ϸ
	CSkinButton							m_btGameOption;					//��Ϸ����
	CSkinButton							m_btGameRule;					//��Ϸ����

	CStatic	m_showSelfVideo;//��ʾ������Ƶ

	CStatic	m_showRemoteVideo;

	CStatic	m_showRemoteVideo1;
	CStatic	m_showRemoteVideo2;

	CStatic	m_showRemoteVideo3;

	CLabelEx     m_MyselfOpKuang;
	CLabelEx     m_OpKuang;
	CLabelEx     m_OpKuang1;
	CLabelEx     m_OpKuang2;
	CLabelEx     m_OpKuang3;
//CLabelEx     m_OpKuang, m_OpKuang1, m_OpKuang2, m_OpKuang3;

	//���渨��
private:
	bool								m_bReset;						//�Ƿ�����
	bool								m_bRectify;						//������־
	bool								m_bInitDialog;					//��ʼ��־

	//���ñ���
private:
	bool								m_bAllowSound;					//��������

	//�ؼ�����
protected:
	CSkinSplitter						m_VorSplitter;					//��ֿؼ�
	CGameFrameView						* m_pGameFrameView;				//��ͼָ��
	CGameFrameControl					* m_pGameFrameControl;			//������ͼ

	//�ں˱���
private:
	CClientKernelSink					* m_pKernelSink;				//���ӽӿ�
	CUserFaceResHelper					m_UserFaceResHelper;			//ͷ�����
	CClientKernelHelper					m_ClientKernelHelper;			//��Ϸ�߼�
	CMessageProxyHelper					m_MessageProxyHelper;			//�������

	//��������
public:
	//���캯��
	CGameFrameDlg(CGameFrameView * pGameFrameView);
	//��������
	virtual ~CGameFrameDlg();

	//������ӿ�
public:
	//��ť��Ϣ
	virtual bool __cdecl OnSplitterButton(CSkinSplitter * pSkinSplitter, CSkinButton * pSplitterButton);
	//�������Ϣ
	virtual bool __cdecl OnSplitterEvent(CSkinSplitter * pSkinSplitter, UINT uSplitID, int nXPos, int nYPos);

	//����̳�
private:
	//��ʼ����
	virtual bool InitGameFrame()=NULL;
	//���ÿ��
	virtual void ResetGameFrame()=NULL;
	//��Ϸ����
	virtual void OnGameOptionSet()=NULL;
	//ʱ����Ϣ
	virtual bool OnTimerMessage(WORD wChairID, UINT nElapse, UINT nTimerID)=NULL;
	//�Թ�״̬
	virtual void OnLookonChanged(bool bLookonUser, const void * pBuffer, WORD wDataSize)=NULL;
	//������Ϣ
	virtual bool OnGameMessage(WORD wSubCmdID, const void * pBuffer, WORD wDataSize)=NULL;
	//��Ϸ����
	virtual bool OnGameSceneMessage(BYTE cbGameStatus, bool bLookonOther, const void * pBuffer, WORD wDataSize)=NULL;

	//����̳�
private:
	//��������
	virtual void RectifyControl(int nWidth, int nHeight);
	//�����Ϣ
	virtual bool OnFrameMessage(WORD wSubCmdID, const void * pBuffer, WORD wDataSize);

	//���ܺ���
public:
	//���ͺ���
	bool SendData(WORD wSubCmdID);
	//���ͺ���
	bool SendData(WORD wSubCmdID, void * pData, WORD wDataSize);
	//����׼��
	bool SendUserReady(void * pBuffer, WORD wDataSize);
	//���ö�ʱ��
	bool SetGameTimer(WORD wChairID, UINT nTimerID, UINT nElapse);
	//ɾ����ʱ��
	bool KillGameTimer(UINT nTimerID);
	//��������
	bool PlayGameSound(LPCTSTR pszSoundName);
	//��������
	bool PlayGameSound(HINSTANCE hInstance, LPCTSTR pszSoundName);

	//��Ϣ����
public:
	//����ͼƬ
	bool InsertImage(CBitmap * pBitmap);
	//��������
	bool InsertUserName(LPCTSTR pszUserName);
	//ϵͳ��Ϣ
	bool InsertSystemString(LPCTSTR pszString);
	//��ɫ��Ϣ
	bool InsertShtickString(LPCTSTR pszString, COLORREF crColor, bool bNewLine);
	//��ͨ��Ϣ
	bool InsertGeneralString(LPCTSTR pszString, COLORREF crColor, bool bNewLine);

	//��������
public:
	//�������
	void ActiveGameFrame();
	//�л�����
	WORD SwitchViewChairID(WORD wChairID);

	//��������
public:
	//�Ƿ�����
	bool IsEnableSound();
	//��������
	void EnableSound(bool bEnable);

	//��Ϣ����
public:
	//�Թ�ģʽ
	bool IsLookonMode();
	//�����Թ�
	bool IsAllowLookon();
	//�Լ�λ��
	WORD GetMeChairID();
	//ʱ��λ��
	WORD GetTimeChairID();
	//��ȡ�û�
	const tagUserData * GetUserData(WORD wChairID);
	//�ں˽ӿ�
	void * GetClientKernel(const IID & Guid, DWORD dwQueryVer);

	//��Ϸ״̬
public:
	//��Ϸ״̬
	BYTE GetGameStatus();
	//��Ϸ״̬
	void SetGameStatus(BYTE bGameStatus);

	//���غ���
protected:
	//�ؼ���
	virtual void DoDataExchange(CDataExchange * pDX);
	//��ʼ������
	virtual BOOL OnInitDialog();
	//��Ϣ����
	virtual BOOL PreTranslateMessage(MSG * pMsg);
	//ȷ����Ϣ
	virtual void OnOK();
	//ȡ����Ϣ
	virtual void OnCancel();

	//��Ϣӳ��
private:
//���Ͷ�̬����
LRESULT OnSendDTSound(WPARAM wparam, LPARAM lparam);
	//λ�øı�
	afx_msg void OnSize(UINT nType, int cx, int cy);
	//λ�øı�
	afx_msg void OnWindowPosChanging(WINDOWPOS * lpwndpos);
	//��ʱ����Ϣ
	afx_msg void OnTimer(UINT nIDEvent);
	//��Ϸ����
	afx_msg void OnBnClickedOption();
	//��Ϸ����
	afx_msg void OnBnClickedRule();
	//�˳���ť
	afx_msg void OnBnClickedQuitGame();

	DECLARE_MESSAGE_MAP()
};

//////////////////////////////////////////////////////////////////////////

#endif