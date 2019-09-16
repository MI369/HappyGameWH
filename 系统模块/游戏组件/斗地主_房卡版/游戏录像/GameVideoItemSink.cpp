#include "StdAfx.h"
#include "GameVideoItemSink.h"

#define  ADD_VIDEO_BUF  4096

CGameVideoItemSink::CGameVideoItemSink(void)
{
	//���ñ���
	m_iCurPos	= 0;	
	m_iBufferSize	= 0;
	m_pVideoDataBuffer = NULL;
	m_pITableFrame = NULL;
}

CGameVideoItemSink::~CGameVideoItemSink( void )
{
}

bool __cdecl CGameVideoItemSink::StartVideo(ITableFrame	*pTableFrame)
{
	try
	{
		ResetVideoItem();

		m_pITableFrame = pTableFrame;

		m_iCurPos	= 0;
		m_iBufferSize  = ADD_VIDEO_BUF;

		//�����ڴ�
		m_pVideoDataBuffer =new BYTE [m_iBufferSize];
		if (m_pVideoDataBuffer==NULL) return false;	
		memset(m_pVideoDataBuffer,0,m_iBufferSize);
	}
	catch (...) 
	{
		ASSERT (FALSE);
		return false; 
	}
	
	return true;
}

bool __cdecl CGameVideoItemSink::StopAndSaveVideo(WORD wServerID, WORD wTableID)
{
	//���浽���ݿ�
	if (m_pITableFrame == NULL) return false;
	//�����ʽ���ַ���+Ψһ��ʶID (ID��������������ʱ����+����ID+����ID) 	
	CHAR   szVideoNumber[22];
	szVideoNumber[0] = 0;
	BuildVideoNumber(szVideoNumber, 22, wServerID, wTableID);

	bool bAllAndroid = true;
	for (WORD i = 0; i<GAME_PLAYER; i++)
	{
		IServerUserItem *pServerUserItem = m_pITableFrame->GetTableUserItem(i);
		if (pServerUserItem && pServerUserItem->IsAndroidUser() == false)
		{
			bAllAndroid = false;
		}
	}
	if (bAllAndroid) return TRUE;

	for (WORD i = 0; i<GAME_PLAYER; i++)
	{
		IServerUserItem *pServerUserItem = m_pITableFrame->GetTableUserItem(i);
		if (pServerUserItem)
		{
			m_pITableFrame->WriteTableVideoPlayer(pServerUserItem->GetUserID(), szVideoNumber);
		}
	}

	m_pITableFrame->WriteTableVideoData(szVideoNumber, wServerID, wTableID, m_pVideoDataBuffer, (WORD)m_iCurPos);

	ResetVideoItem();

	return TRUE;
}

bool __cdecl CGameVideoItemSink::AddVideoData(WORD wMsgKind, Video_GameStart *pVideoGameStart, bool bFirst)
{
	//һ��Ҫ��˳��д
	if(bFirst)
		WriteUint16(wMsgKind);

	Write(pVideoGameStart->szNickName, sizeof(TCHAR) * LEN_NICKNAME);
	WriteUint16(pVideoGameStart->wChairID);
	WriteUint16(pVideoGameStart->wStartUser);
	WriteUint16(pVideoGameStart->wCurrentUser);
	WriteUint8(pVideoGameStart->cbValidCardData);
	WriteUint8(pVideoGameStart->cbValidCardIndex);
	Write(pVideoGameStart->cbCardData, sizeof(BYTE)* NORMAL_COUNT);
	WriteUint64(pVideoGameStart->lScore);
	WriteUint32(pVideoGameStart->lCellScore);

	return TRUE;
}

bool __cdecl CGameVideoItemSink::AddVideoData(WORD wMsgKind, BYTE *pPack, int nSize)
{
	//һ��Ҫ��˳��д
	WriteUint16(wMsgKind);
	Write(pPack, sizeof(BYTE) * nSize);

	return TRUE;
}

bool __cdecl CGameVideoItemSink::AddVideoData(WORD wMsgKind, CMD_S_CallScore *pVideoOutCard)
{
	//һ��Ҫ��˳��д
	WriteUint16(wMsgKind);

	WriteUint16(pVideoOutCard->wCurrentUser);
	WriteUint16(pVideoOutCard->wCallScoreUser);
	WriteUint8(pVideoOutCard->cbCurrentScore);
	WriteUint8(pVideoOutCard->cbUserCallScore);

	return true;
}

bool __cdecl CGameVideoItemSink::AddVideoData(WORD wMsgKind, CMD_S_BankerInfo *pVideoNotify)
{
	//һ��Ҫ��˳��д
	WriteUint16(wMsgKind);

	WriteUint16(pVideoNotify->wBankerUser);
	WriteUint16(pVideoNotify->wCurrentUser);
	WriteUint8(pVideoNotify->cbBankerScore);
	Write(pVideoNotify->cbBankerCard, sizeof(BYTE)*GAME_PLAYER);
	return true;
}

bool __cdecl CGameVideoItemSink::AddVideoData(WORD wMsgKind, CMD_S_PassCard *pVideoResult)
{
	//һ��Ҫ��˳��д
	WriteUint16(wMsgKind);

	WriteUint8(pVideoResult->cbTurnOver);
	WriteUint16(pVideoResult->wCurrentUser);
	WriteUint16(pVideoResult->wPassCardUser);

	return true;
}

bool __cdecl  CGameVideoItemSink::AddVideoData(WORD wMsgKind, CMD_S_OutCard *pVideoConclude)
{
	//һ��Ҫ��˳��д
	WriteUint16(wMsgKind);
	
	WriteUint8(pVideoConclude->cbCardCount);
	WriteUint16(pVideoConclude->wCurrentUser);
	WriteUint16(pVideoConclude->wOutCardUser);
	Write(pVideoConclude->cbCardData, sizeof(BYTE)*MAX_COUNT);

	return true;
}

bool __cdecl  CGameVideoItemSink::AddVideoData(WORD wMsgKind, CMD_S_GameConclude *pVideoConclude)
{
	//һ��Ҫ��˳��д
	WriteUint16(wMsgKind);

	WriteUint32(pVideoConclude->lCellScore);
	Write(pVideoConclude->lGameScore, sizeof(SCORE)* GAME_PLAYER);
	WriteUint8(pVideoConclude->bChunTian);
	WriteUint8(pVideoConclude->bFanChunTian);
	WriteUint8(pVideoConclude->cbBombCount);
	Write(pVideoConclude->cbEachBombCount, sizeof(BYTE)*GAME_PLAYER);
	WriteUint8(pVideoConclude->cbBankerScore);
	Write(pVideoConclude->cbCardCount, sizeof(BYTE)*GAME_PLAYER);
	Write(pVideoConclude->cbHandCardData, sizeof(BYTE)*FULL_COUNT);
	Write(pVideoConclude->lScore, sizeof(SCORE)*GAME_PLAYER);

	return true;
}

size_t	CGameVideoItemSink::Write(const void* data, size_t size)
{   
	if(size + m_iCurPos > m_iBufferSize)
	{
		if(RectifyBuffer(ADD_VIDEO_BUF/2)!=TRUE) return 0;
	}
	
	CopyMemory(m_pVideoDataBuffer+m_iCurPos,data,size);
	m_iCurPos += size;

	return size;
}

//��������
bool CGameVideoItemSink::RectifyBuffer(size_t iSize)
{
	try
	{		
		size_t iNewbufSize = iSize+m_iBufferSize;
		//�����ڴ�
		BYTE * pNewVideoBuffer=new BYTE [iNewbufSize];
		if (pNewVideoBuffer==NULL) return false;
		memset(pNewVideoBuffer,0,iNewbufSize);

		//��������
		if (m_pVideoDataBuffer!=NULL) 
		{
			CopyMemory(pNewVideoBuffer, m_pVideoDataBuffer, m_iCurPos);				
		}

		//���ñ���			
		m_iBufferSize=iNewbufSize;
		SafeDeleteArray(m_pVideoDataBuffer);
		m_pVideoDataBuffer=pNewVideoBuffer;
	}
	catch (...) 
	{
		ASSERT (FALSE);
		return false; 
	}

	return true;
}

//��������
void CGameVideoItemSink::ResetVideoItem()
{
	//���ñ���
	m_iCurPos	= 0;	
	m_iBufferSize  = 0;
	SafeDeleteArray(m_pVideoDataBuffer);
}

//¼����
VOID CGameVideoItemSink::BuildVideoNumber(CHAR szVideoNumber[], WORD wLen,WORD wServerID,WORD wTableID)
{
	//��ȡʱ��
	SYSTEMTIME SystemTime;
	GetLocalTime(&SystemTime); 

	//��ʽ�����
	_snprintf(szVideoNumber,wLen,"%04d%02d%02d%02d%02d%02d%03d%03d",SystemTime.wYear,SystemTime.wMonth,SystemTime.wDay,
		SystemTime.wHour,SystemTime.wMinute,SystemTime.wSecond,wServerID,wTableID);
}