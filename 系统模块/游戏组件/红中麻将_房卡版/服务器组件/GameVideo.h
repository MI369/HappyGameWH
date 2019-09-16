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
	virtual bool __cdecl    AddVideoData(WORD wMsgKind,Video_GameStart *pVideoGameStart,bool bFirst)=NULL;
	virtual bool __cdecl    AddVideoData(WORD wMsgKind,BYTE *pPack,int nSize)=NULL;
	virtual bool __cdecl    AddVideoData(WORD wMsgKind,CMD_S_OutCard *pVideoOutCard)=NULL;
		virtual bool __cdecl    AddVideoData(WORD wMsgKind,CMD_S_SendCard *pVideoSendCard)=NULL;
	virtual bool __cdecl    AddVideoData(WORD wMsgKind,CMD_S_OperateNotify *pVideoNotify)=NULL;
	virtual bool __cdecl    AddVideoData(WORD wMsgKind,CMD_S_OperateResult *pVideoResult)=NULL;
	virtual bool __cdecl    AddVideoData(WORD wMsgKind,CMD_S_GameConclude *pVideoConclude)=NULL;	
	virtual bool __cdecl    AddVideoData(WORD wMsgKind,CMD_S_Trustee *pVideoTrustee)=NULL;
	virtual bool __cdecl    AddVideoData(WORD wMsgKind,CMD_S_RECORD *pVideoRecord)=NULL;
};
