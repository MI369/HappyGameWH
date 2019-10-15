#ifndef DLG_LOGON_HEAD_FILE
#define DLG_LOGON_HEAD_FILE

#pragma once

#include "Stdafx.h"
#include "Resource.h"
#include "..\..\�������\��������\HtmlBrowser.h"

//////////////////////////////////////////////////////////////////////////

//��¼ģʽ
enum enLogonMode
{
	LogonMode_Accounts,			//�ʺŵ�¼
	LogonMode_UserID,			//I D ��¼
};

//ע�������
#define REG_OPTION_LOGON		TEXT("OptionLogon")
#define REG_USER_INFO			TEXT("Software\\114PKGame\\GamePlaza\\UserInfo")
#define REG_LOGON_SERVER		TEXT("Software\\114PKGame\\GamePlaza\\LogonServer")

//////////////////////////////////////////////////////////////////////////

//��½ TAB �ؼ�
class CTabCtrlLogon : public CTabCtrl
{
	//��������
public:
	//���캯��
	CTabCtrlLogon();
	//��������
	virtual ~CTabCtrlLogon();

	//��Ϣ����
protected:
	//�ػ�����	
	afx_msg void OnPaint();

	DECLARE_MESSAGE_MAP()
};

//////////////////////////////////////////////////////////////////////////

//�û�ע��
class CDlgRegister : public CSkinDialogEx
{
	friend class CDlgLogon;

	//��½��Ϣ
public:
	WORD								m_wFaceID;
	TCHAR								m_szAccounts[NAME_LEN];			//��Ϸ�ʺ�
	CString								m_strPassWord;					//��¼����

	//�ؼ�����
public:
	CImageList							m_ImageList;
	CComboBoxEx							m_FaceSelect;
	CSkinButton							m_btLogon;						//��½��ť
	CSkinButton							m_btCancel;						//ȡ����ť
	CSkinHyperLink						m_LineMainPage;					//��Ϸ��ҳ
	CSkinHyperLink						m_LinePassWord;					//���뱣��

	//��������
public:
	//���캯��
	CDlgRegister();
	//��������
	virtual ~CDlgRegister();

	//���غ���
protected:
	//�ؼ���
	virtual void DoDataExchange(CDataExchange * pDX);
	//��ʼ������
	virtual BOOL OnInitDialog();
	//ȷ������
	virtual void OnOK();
	//ȡ����Ϣ
	virtual void OnCancel();

	DECLARE_MESSAGE_MAP()
};

//////////////////////////////////////////////////////////////////////////

//��½�Ի���
class CDlgLogon : public CSkinDialogEx
{
	friend class CRoomViewItem;
	friend class CPlazaViewItem;

	//��½��Ϣ
protected:
	WORD								m_wFaceID;						//ͷ���ʶ
	DWORD								m_dwUserID;						//�û� I D
	TCHAR								m_szAccounts[NAME_LEN];			//��Ϸ�ʺ�
	CString								m_strPassWord;					//��¼����
	enLogonMode							m_LogonMode;					//��¼ģʽ

	CHtmlBrower                         m_pRegisterBrower;


	//������Ϣ
protected:
	bool								m_bRegister;					//ע���־
	bool								m_bChangePassWord;				//�ı��־

	//������Ϣ
protected:
	CString								m_strLogonServer;				//��������ַ
	static tagProxyInfo					m_ProxyInfo;					//������Ϣ

	//λ�ñ���
protected:
	int									m_nFullWidth;					//ȫ�����
	int									m_nFullHeight;					//ȫ���߶�
	bool								m_bNetOption;					//��������
	CRect								m_rcNormalFrame;				//���λ��

	//�ؼ�����
public:
	CSkinButton							m_btLogon;						//��½��ť
	CSkinButton							m_btCancel;						//ȡ����ť
	CSkinButton							m_btDelete;						//ɾ����ť
	CSkinButton							m_btRegister;					//ע�ᰴť
	CSkinButton							m_btNetOption;					//���簴ť
	CTabCtrlLogon						m_TabLogonMode;					//��½ѡ��
	CSkinHyperLink						m_LineMainPage;					//��Ϸ��ҳ
	CSkinHyperLink						m_LinePassWord;					//���뱣��
	CSkinHyperLink						m_LineGetPassWord;				//ȡ������
    CSkinHyperLink                      m_ApplyAccount;


	CStatic                             m_LoginServer;
	CStatic                             m_Account;
	CStatic                             m_Password;
	//CCheckBox               ������������m_RememberPass;



	//��������
public:
	//���캯��
	CDlgLogon();
	//��������
	virtual ~CDlgLogon();

	//���غ���
protected:
	//�ؼ���
	virtual void DoDataExchange(CDataExchange * pDX);
	//��Ϣ����
	virtual BOOL PreTranslateMessage(MSG * pMsg);
	//��ʼ������
	virtual BOOL OnInitDialog();
	//ȷ������
	virtual void OnOK();
	//ȡ����Ϣ
	virtual void OnCancel();

	//���ܺ���
public:
	//��ȡ������
	LPCTSTR GetLogonServer() { return m_strLogonServer; }
	//���͵�¼��
	bool SendLogonPacket(IClientSocket * pIClientSocke);
	//��½�ɹ�����
	bool OnLogonSuccess();

	//�ڲ�����
private:
	//���ط�����
	void LoadLogonServer();
	//��ȡ�ʺ�
	void LoadAccountsInfo();
	//Ч������
	bool CheckLogonInput(bool bShowError);
	//����ģʽ
	void SetLogonMode(enLogonMode LogonMode);
    void Setup();
	//��������
private:
	//��������
	void UpdateUserPassWord(DWORD dwUserDBID);
	//����ѡ��
	void UpdateUserComboBox(UINT uComboBoxID);
	//�����ַ�
	int ComboBoxFindString(CComboBox * pComboBox, LPCTSTR pszFindString);

	//��Ϣ����
public:
	//ע���ʺ�
	afx_msg void OnRegisterAccounts();
	//ɾ���û�
	afx_msg void OnDeleteAccounts();
	//����ı�
	afx_msg void OnEnChangePassword();
	//ѡ��ı�
	afx_msg void OnSelchangeAccounts();
	//ѡ��ı�
	afx_msg void OnSelchangeUserID();
	//��������
	afx_msg void OnBnClickedNetOption();
	//���͸ı�
	afx_msg void OnTcnSelchangeLogonType(NMHDR * pNMHDR, LRESULT * pResult);
	//�˳�
	afx_msg void OnExit();

	DECLARE_MESSAGE_MAP()
};

//////////////////////////////////////////////////////////////////////////

#endif