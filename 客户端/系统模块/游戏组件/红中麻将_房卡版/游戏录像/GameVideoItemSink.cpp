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

bool __cdecl CGameVideoItemSink::StopAndSaveVideo(WORD wServerID,WORD wTableID)
{
	//���浽���ݿ�
	if(m_pITableFrame == NULL) return false;
	//�����ʽ���ַ���+Ψһ��ʶID (ID��������������ʱ����+����ID+����ID) 	
	CHAR   szVideoNumber[22];
	szVideoNumber[0] = 0;
	BuildVideoNumber(szVideoNumber,22,wServerID,wTableID);
	
	bool bAllAndroid = true;
	for (WORD i=0;i<GAME_PLAYER;i++)
	{
		IServerUserItem *pServerUserItem = m_pITableFrame->GetTableUserItem(i);
		if (pServerUserItem && pServerUserItem->IsAndroidUser() == false)
		{
			bAllAndroid = false;
		}
	}
	if(bAllAndroid) return TRUE;

	for (WORD i=0;i<GAME_PLAYER;i++)
	{
		IServerUserItem *pServerUserItem = m_pITableFrame->GetTableUserItem(i);
		if (pServerUserItem)
		{
			m_pITableFrame->WriteTableVideoPlayer(pServerUserItem->GetUserID(),szVideoNumber);
		}
	}
	m_pITableFrame->WriteTableVideoData(szVideoNumber,wServerID,wTableID,m_pVideoDataBuffer,(WORD)m_iCurPos);
	
	int iLength ;  
	TCHAR   szVideoID[50];
	iLength = MultiByteToWideChar (CP_ACP, 0, szVideoNumber, strlen (szVideoNumber) + 1, NULL, 0) ;  
	MultiByteToWideChar (CP_ACP, 0, szVideoNumber, strlen (szVideoNumber) + 1, szVideoID, iLength) ;  

	TCHAR szFilePath[MAX_PATH];
	_sntprintf(szFilePath,CountArray(szFilePath),TEXT("%s.Video"),szVideoID);

//	CFile VideoFile(szFilePath,CFile::modeReadWrite|CFile::modeCreate|CFile::typeBinary);
//	VideoFile.Write(m_pVideoDataBuffer,m_iCurPos);

	ResetVideoItem();

	return TRUE;
}

bool __cdecl CGameVideoItemSink::AddVideoData(WORD wMsgKind,Video_GameStart *pVideoGameStart,bool bFirst)
{
	//һ��Ҫ��˳��д
	if(bFirst)
		WriteUint16(wMsgKind);

	Write(pVideoGameStart->szNickName,sizeof(TCHAR)*LEN_NICKNAME);
	WriteUint16(pVideoGameStart->wChairID);
	WriteUint64(pVideoGameStart->lScore);
	WriteUint32(pVideoGameStart->lCellScore);
	WriteUint16(pVideoGameStart->wBankerUser);
	WriteUint16(pVideoGameStart->wSiceCount);
	WriteUint8(pVideoGameStart->cbPlayerCount);
	WriteUint8(pVideoGameStart->cbMagicIndex);
	WriteUint8(pVideoGameStart->cbUserAction);
	Write(pVideoGameStart->cbCardData,sizeof(BYTE)*MAX_COUNT);
	WriteUint8(pVideoGameStart->cbMaCount);
	Write(pVideoGameStart->lRoomCardInitialScore,sizeof(SCORE)*GAME_PLAYER);
	return TRUE;
}
//������
//������
//�����˿�
//���Ƹ���
bool __cdecl CGameVideoItemSink::AddVideoData(WORD wMsgKind,BYTE *pPack,int nSize)
{
	//һ��Ҫ��˳��д
	WriteUint16(wMsgKind);
	Write(pPack,sizeof(BYTE)*nSize);

	return TRUE;
}
bool __cdecl CGameVideoItemSink::AddVideoData(WORD wMsgKind,CMD_S_OutCard *pVideoOutCard)
{
	//һ��Ҫ��˳��д
	WriteUint16(wMsgKind);

	WriteUint16(pVideoOutCard->wOutCardUser);
	WriteUint8(pVideoOutCard->cbOutCardData);
	WriteUint8(pVideoOutCard->bSysOut);

	return true;
}
bool __cdecl CGameVideoItemSink::AddVideoData(WORD wMsgKind,CMD_S_OperateNotify *pVideoNotify)
{
	//һ��Ҫ��˳��д
	WriteUint16(wMsgKind);

	WriteUint8(pVideoNotify->cbActionMask);
	WriteUint8(pVideoNotify->cbActionCard);
	return true;
}
bool __cdecl CGameVideoItemSink::AddVideoData(WORD wMsgKind,CMD_S_OperateResult *pVideoResult)
{
	//һ��Ҫ��˳��д
	WriteUint16(wMsgKind);

	WriteUint16(pVideoResult->wOperateUser);
	WriteUint8(pVideoResult->cbActionMask);
	WriteUint16(pVideoResult->wProvideUser);
	WriteUint8(pVideoResult->cbOperateCode);
	Write(pVideoResult->cbOperateCard,sizeof(BYTE)*3);
	return true;
}

bool __cdecl  CGameVideoItemSink::AddVideoData(WORD wMsgKind,CMD_S_GameConclude *pVideoConclude)
{
	//һ��Ҫ��˳��д
	WriteUint16(wMsgKind);
	
	WriteUint32(pVideoConclude->lCellScore);
	Write(pVideoConclude->lGameScore,sizeof(SCORE)*GAME_PLAYER);
	Write(pVideoConclude->lRevenue,sizeof(SCORE)*GAME_PLAYER);
	Write(pVideoConclude->lGangScore,sizeof(SCORE)*GAME_PLAYER);

	WriteUint16(pVideoConclude->wProvideUser);
	WriteUint8(pVideoConclude->cbProvideCard);
	WriteUint8(pVideoConclude->cbSendCardData);

	Write(pVideoConclude->dwChiHuKind,sizeof(DWORD)*GAME_PLAYER);
	Write(pVideoConclude->dwChiHuRight,sizeof(DWORD)*GAME_PLAYER);

	WriteUint16(pVideoConclude->wLeftUser);

	WriteUint16(pVideoConclude->wLianZhuang);
	Write(pVideoConclude->cbCardCount,sizeof(BYTE)*GAME_PLAYER);
	Write(pVideoConclude->cbHandCardData,sizeof(BYTE)*GAME_PLAYER*MAX_COUNT);
	
	Write(pVideoConclude->cbMaCount,sizeof(BYTE)*GAME_PLAYER);
	Write(pVideoConclude->cbMaData,sizeof(BYTE)*7);
	WriteUint8(pVideoConclude->cbLeftCardCount);
	Write(pVideoConclude->cbLeftCardData,sizeof(BYTE)*MAX_REPERTORY);

 	Write(pVideoConclude->cbWeaveItemCount,sizeof(BYTE)*GAME_PLAYER);
 
 	for(int i=0;i<GAME_PLAYER;i++)
 	{
 		for(int j=0;j<4;j++)
 		{
 			WriteUint8(pVideoConclude->WeaveItemArray[i][j].cbWeaveKind);
 			WriteUint8(pVideoConclude->WeaveItemArray[i][j].cbCenterCard);
 			WriteUint8(pVideoConclude->WeaveItemArray[i][j].cbParam);
 			WriteUint16(pVideoConclude->WeaveItemArray[i][j].wProvideUser);
 			Write(pVideoConclude->WeaveItemArray[i][j].cbCardData,sizeof(BYTE)*4);
 		}
 	}
	
	return true;
}

bool __cdecl CGameVideoItemSink::AddVideoData(WORD wMsgKind,CMD_S_Trustee *pVideoTrustee)
{
	//һ��Ҫ��˳��д
	WriteUint16(wMsgKind);

	WriteUint8(pVideoTrustee->bTrustee);
	WriteUint16(pVideoTrustee->wChairID);
	return true;
}

bool __cdecl CGameVideoItemSink::AddVideoData(WORD wMsgKind,CMD_S_RECORD *pVideoRecord)
{
	//һ��Ҫ��˳��д
	WriteUint16(wMsgKind);

	WriteUint32(pVideoRecord->nCount);
	Write(pVideoRecord->cbHuCount,sizeof(BYTE)*GAME_PLAYER);
	Write(pVideoRecord->cbMaCount,sizeof(BYTE)*GAME_PLAYER);
	Write(pVideoRecord->cbAnGang,sizeof(BYTE)*GAME_PLAYER);
	Write(pVideoRecord->cbMingGang,sizeof(BYTE)*GAME_PLAYER);
	Write(pVideoRecord->lAllScore,sizeof(SCORE)*GAME_PLAYER);
	Write(pVideoRecord->lDetailScore,sizeof(SCORE)*GAME_PLAYER*32);

	return true;
}

bool __cdecl CGameVideoItemSink::AddVideoData(WORD wMsgKind,CMD_S_SendCard *pVideoSendCard)
{
	//һ��Ҫ��˳��д
	WriteUint16(wMsgKind);

	WriteUint8(pVideoSendCard->cbCardData);
	WriteUint8(pVideoSendCard->cbActionMask);
	WriteUint16(pVideoSendCard->wCurrentUser);
	WriteUint16(pVideoSendCard->wSendCardUser);
	WriteUint16(pVideoSendCard->wReplaceUser);
	WriteUint8(pVideoSendCard->bTail);

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
		size_t iNewbufSize =  iSize+m_iBufferSize;
		//�����ڴ�
		BYTE * pNewVideoBuffer=new BYTE [iNewbufSize];
		if (pNewVideoBuffer==NULL) return false;
		memset(pNewVideoBuffer,0,iNewbufSize);

		//��������
		if (m_pVideoDataBuffer!=NULL) 
		{
			CopyMemory(pNewVideoBuffer,m_pVideoDataBuffer,m_iCurPos);				
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