#pragma once
#include "resource.h"
#include "FlySoundText.h"
#include "GameFrameDlg.h"
// CDlgDTSound �Ի���
#define DT_BUT_MAX_NUM	20 //�����Խ����ĸ���

//class CDlgDTSound : public CDialog
class CDlgDTSound :  public CSkinDialogEx
{
	DECLARE_DYNAMIC(CDlgDTSound)
	//��������
public:
	CWnd								* m_pParentWnd;						//������


public:
		CFlySoundText myCFlySoundText;
	CGameFrameDlg						* m_pGameFrameDlg;				//�Ի���
private:
	CBitmap  m_bmp;
	//��ò�������
	CString GetPlaySoundFileStr(CString inStr, CString *charStr);

	int currentTypeInt;//��ǰѡ�������
	int currentSoundInt;//��ǰ����ID


	int minDTButID;//��̬��ť�Ŀ�ʼֵ
	int DTButAllNum;//��̬��ť����
//	CButton * dtButList[DT_BUT_MAX_NUM];//��̬��ť����
	CSkinButton * dtButList[DT_BUT_MAX_NUM];//��̬��ť����
	//�������еĶ�̬�ؼ�
	void CreateAllButtons();

	//������������
	void InsertOneTypeSoundList(int kindInt);
	CListCtrl	m_mySoundList;
public:
	//���캯��
	CDlgDTSound(CWnd * pParentWnd);
	//���캯��
//	CDlgDTSound(CGameFrameDlg * pGameFrameDlg); 
//	CDlgDTSound(CWnd* pParent = NULL);   // ��׼���캯��
	virtual ~CDlgDTSound();

// �Ի�������
	enum { IDD = IDD_DLG_DT_SOUND };

protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV ֧��

	virtual BOOL OnInitDialog();
	afx_msg	void OnDTButClick(UINT   nID);
	afx_msg void OnDTButClick2();
	afx_msg void OnDblclkListSound(NMHDR* pNMHDR, LRESULT* pResult);
//	afx_msg void OnLButtonDown(UINT nFlags, CPoint point);
	//
	afx_msg void OnPaint();
	DECLARE_MESSAGE_MAP()
};
