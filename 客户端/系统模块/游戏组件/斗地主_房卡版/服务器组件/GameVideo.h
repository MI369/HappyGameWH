#pragma once

//��Ϸ��Ƶ����
class IGameVideo
{
public:
	IGameVideo(void){};
	virtual ~IGameVideo(void){};

public:
	//��ʼ¼��
	virtual bool __cdecl	StartVideo(ITableFrame	*pTableFrame)		= NULL;
	//ֹͣ�ͱ���
	virtual bool __cdecl	StopAndSaveVideo(WORD wServerID,WORD wTableID)	= NULL;
	//����¼������
	virtual bool __cdecl    AddVideoData(WORD wMsgKind, Video_GameStart *pVideoGameStart, bool bFirst) = NULL;
	virtual bool __cdecl    AddVideoData(WORD wMsgKind, BYTE *pPack, int nSize)=NULL;
	virtual bool __cdecl    AddVideoData(WORD wMsgKind, CMD_S_CallScore *pVideoOutCard) = NULL;
	virtual bool __cdecl    AddVideoData(WORD wMsgKind, CMD_S_BankerInfo *pVideoSendCard) = NULL;
	virtual bool __cdecl    AddVideoData(WORD wMsgKind, CMD_S_PassCard *pVideoNotify) = NULL;
	virtual bool __cdecl    AddVideoData(WORD wMsgKind, CMD_S_OutCard *pVideoResult) = NULL;
	virtual bool __cdecl    AddVideoData(WORD wMsgKind, CMD_S_GameConclude *pVideoResult) = NULL;
};
