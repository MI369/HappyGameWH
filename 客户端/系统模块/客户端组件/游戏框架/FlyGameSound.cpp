// FlyGameSound.cpp : implementation file
//

#include "stdafx.h"
//#include "FlyGameBJL.h"
#include "FlyGameSound.h"



#ifdef _DEBUG
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CFlyGameSound

CFlyGameSound::CFlyGameSound()
{
	isPlaySound = true;
}

CFlyGameSound::~CFlyGameSound()
{
}


BEGIN_MESSAGE_MAP(CFlyGameSound, CWnd)
	//{{AFX_MSG_MAP(CFlyGameSound)
		// NOTE - the ClassWizard will add and remove mapping macros here.
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()


/////////////////////////////////////////////////////////////////////////////
// CFlyGameSound message handlers
DWORD CFlyGameSound::getinfo(DWORD item)
{
	MCI_STATUS_PARMS mcistatusparms;
	mcistatusparms.dwCallback=(DWORD)GetSafeHwnd();
	mcistatusparms.dwItem=item;
	mcistatusparms.dwReturn=0;
	mciSendCommand(m_count,MCI_STATUS,MCI_STATUS_ITEM,(DWORD)&mcistatusparms);
	return mcistatusparms.dwReturn;
}

	//����MP3�����ļ�
void CFlyGameSound::PlayMP3Sound(CString fileStr)
{
	MCI_OPEN_PARMS mciopenparms;
		MCI_PLAY_PARMS mciplayparms;
		mciopenparms.lpstrElementName=fileStr;
		mciopenparms.lpstrDeviceType=NULL;
		mciSendCommand(0,MCI_OPEN,MCI_DEVTYPE_WAVEFORM_AUDIO,(DWORD)(LPVOID)&mciopenparms);
		m_count=mciopenparms.wDeviceID;
		mciplayparms.dwCallback=(DWORD)GetSafeHwnd();	
		cdlen=getinfo(MCI_STATUS_LENGTH);                                                                                                                                                                                                                                              
		cdfrom=MCI_MAKE_HMS(0,0,0);
		cdto=MCI_MAKE_HMS(MCI_HMS_HOUR(cdlen),MCI_HMS_MINUTE(cdlen),MCI_HMS_SECOND(cdlen));  
		mciplayparms.dwFrom=cdfrom;
		mciplayparms.dwTo=cdto;
		mciSendCommand(m_count,MCI_PLAY,MCI_TO|MCI_FROM,(DWORD)(LPVOID)& mciplayparms);
}
BOOL CFlyGameSound::PlaySounds(UINT IDSoundRes, WORD wFlag)//��������
{  //PlaySound �Ǳ�׼����<win.h>      
	
	//������
	if ( isPlaySound )
	{
		if (PlaySound(MAKEINTRESOURCE(IDSoundRes),//���ŵ�������Դ
			AfxGetInstanceHandle(),//ָ��ʵ��
			wFlag|SND_RESOURCE|SND_NODEFAULT))//��־λ����Ĭ�ϣ�ʹ��ʵ����������Դ
			return TRUE;
	}
	return FALSE;
}
