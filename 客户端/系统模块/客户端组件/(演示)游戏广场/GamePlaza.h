#pragma once

#ifndef __AFXWIN_H__
	#error �ڰ������� PCH �Ĵ��ļ�֮ǰ������stdafx.h��
#endif

#include "GlobalUnits.h"

//////////////////////////////////////////////////////////////////////////
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


class CGlobal
{
public :
	CGlobal()
	{
		CString s=CINIFile::GetAppPath ();
	    CINIFile f( s + "GamePlaceSetup.ini");

		m_CenterServerIPAddr=f.GetKeyVal ("System","CenterServerIPAddr","127.0.0.1");////�ͻ��˵�ǰ�汾ϵ�к�

//		m_CenterServerPort=CENTER_SERVER_PORT;
		//CString showMsg;
		//showMsg.Format("m_CenterServerPort=%d, m_CenterServerIPAddr=%s", m_CenterServerPort, m_CenterServerIPAddr);
		//AfxMessageBox(showMsg);
		m_HelpUrlAddr=f.GetKeyVal ("System","HelpUrlAddr","www.cctvdodo.com");//

		VirtualFaceWebAddr=f.GetKeyVal ("System","VirtualFaceWebAddr","www.cctvdodo.com");

		m_AdUrl = f.GetKeyVal ("System","AdUrl","www.cctvdodo.com");//
		m_MainHomeUrl =f.GetKeyVal ("System","MainHomeUrl","www.cctvdodo.com");//

		 m_CZUrl = f.GetKeyVal ("System","CZUrl","cz_free.asp");//;//=cz_free.asp
		 m_BBSUrl = f.GetKeyVal ("System","BBSUrl","liuyanlist.asp");//;//=liuyanlist.asp
		 m_MemberUrl = f.GetKeyVal ("System","MemberUrl","login.asp");//;//=login.asp

	}
	virtual ~CGlobal(){}

//	CenterServerMsg m_CenterServerPara;
	CString m_CenterServerIPAddr;
	CString m_HelpUrlAddr;
	CString m_MainHomeUrl;
	UINT m_CenterServerPort;

	CString VirtualFaceWebAddr;
	CString m_AdUrl;//���

	CString m_CZUrl;//=cz_free.asp
	CString m_BBSUrl;//=liuyanlist.asp
	CString m_MemberUrl;//=login.asp


};


static CGlobal g_global;

static CGlobal& Glb(){return g_global;}

//Ӧ�ó������
class CGamePlazaApp : public CWinApp
{
	//��������
public:
void WriteLog(CString strFileName, CString strText);

	CSkinRecordFile							m_SkinRecordFile;				//��������

	//��������
public:
	//���캯��
	CGamePlazaApp();

	//���غ���
public:
	//��ʼ������
	virtual BOOL InitInstance();

	DECLARE_MESSAGE_MAP()
};

//////////////////////////////////////////////////////////////////////////

//Ӧ�ó������˵��
extern CGamePlazaApp theApp;

//////////////////////////////////////////////////////////////////////////
