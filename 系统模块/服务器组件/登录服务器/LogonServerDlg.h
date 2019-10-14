#ifndef LOGON_SERVER_SERVER_DLG_HEAD_FILE
#define LOGON_SERVER_SERVER_DLG_HEAD_FILE

#pragma once

#include "Stdafx.h"
#include "ServiceUnits.h"
#include ".\flashaccredit.h"

//////////////////////////////////////////////////////////////////////////////////

//���öԻ���
class CSystemOptionDlg : public CDialog
{
	//���캯��
public:
	//�������
	CSystemOptionDlg();
	//��������
	virtual ~CSystemOptionDlg();

	//���غ���
protected:
	//��ʼ������
	virtual BOOL OnInitDialog();
	//�ؼ����໯
	virtual void DoDataExchange(CDataExchange * pDX);
	//ȷ������
	virtual void OnOK();

	//��Ϣӳ��
	DECLARE_MESSAGE_MAP()
};


//���Ի���
class CLogonServerDlg : public CDialog, public IServiceUnitsSink
{
	//�������
protected:
	CServiceUnits					m_ServiceUnits;						//����Ԫ
	CTraceServiceControl			m_TraceServiceControl;				//׷�ٴ���
	CFlashAccredit                  m_FlashAccredit;                    //Flash����

	//��������
public:
	//���캯��
	CLogonServerDlg();
	//��������
	virtual ~CLogonServerDlg();

	//���غ���
protected:
	//�ؼ���
	virtual VOID DoDataExchange(CDataExchange * pDX);
	//��ʼ������
	virtual BOOL OnInitDialog();
	//ȷ����Ϣ
	virtual VOID OnOK();
	//ȡ������
	virtual VOID OnCancel();
	//��Ϣ����
	virtual BOOL PreTranslateMessage(MSG * pMsg);

	//����ӿ�
public:
	//����״̬
	virtual VOID OnServiceUnitsStatus(enServiceStatus ServiceStatus);

	//��ť��Ϣ
protected:
	//��������
	VOID OnBnClickedStartService();
	//ֹͣ����
	VOID OnBnClickedStopService();
	//ϵͳ����
	void OnBnClickedInitService();

	//��Ϣӳ��
public:
	//�ر�ѯ��
	BOOL OnQueryEndSession();
	//�����¼�
	LRESULT OnNetworkEvent(WPARAM wparam, LPARAM lparam);

	DECLARE_MESSAGE_MAP()
};

//////////////////////////////////////////////////////////////////////////////////

#endif