// FlySoundText.h: interface for the CFlySoundText class.
//
//////////////////////////////////////////////////////////////////////

#if !defined(AFX_FLYSOUNDTEXT_H__34FA2725_4462_4F82_BAC3_9F87512CA746__INCLUDED_)
#define AFX_FLYSOUNDTEXT_H__34FA2725_4462_4F82_BAC3_9F87512CA746__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#include "UtilitFun.h"

//�������Ź�����
class CFlySoundText  
{
public:
	CFlySoundText();
	virtual ~CFlySoundText();
//private:
	SCENE_ITEM  mySceneItemList[MAX_SCENE_NUM];
	int	useSceneInt;//ʹ�õĳ�������
	//����ϵͳ����
	void OnInitSysConfig();
	CUtilitFun myCUtilitFun;
public:
	//��INI�ļ���ȡ���ݣ������浽���ݽṹ��
	void ReadDataFromIni(CString iniFileNameStr);

	//��INI�ļ���ȡһ���������ݣ������浽���ݽṹ��
	void ReadOneSceneDataFromIni(CString iniFileNameStr, int sceneInt);

	//��ó�������
	CString GetOneSceneName(int sceneInt);

	//��ó�������
	bool GetOneSceneDataItem(int sceneInt,SCENE_ITEM * myItemPtr );

	//���one sound����
	bool GetOneSoundDataItem(int sceneInt,int soundInt,SOUND_TEXT_ITEM * myItemPtr );

};

#endif // !defined(AFX_FLYSOUNDTEXT_H__34FA2725_4462_4F82_BAC3_9F87512CA746__INCLUDED_)
