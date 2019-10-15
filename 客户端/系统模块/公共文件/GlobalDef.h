#ifndef GLOBAL_DEF_HEAD_FILE
#define GLOBAL_DEF_HEAD_FILE

#pragma once

/////////////////////////////////////////////////////////////////////////////////////////
//��������

const TCHAR	szProductName[]= TEXT("������Ϸ�ռ�");								//��Ʒ����
const TCHAR szSystemRegKey[]= TEXT("HappyGame");								//ע������
const TCHAR szStationPage[]= TEXT("127.0.0.1");									//��Ϸ��ҳ
const TCHAR szProductKey[] = TEXT("WHQPGamePlatform");							//��Ʒ����

/////////////////////////////////////////////////////////////////////////////////////////
//��Ϸ��ʶ

//ͨ����Ϸ
#define ID_PLAZA						0									//����

#define ID_SHOWHAND					1								  //���
#define ID_CHINA_CHESS			2						    	//����
#define ID_WEIQI						3									//Χ��
#define ID_HZMJ		4	//	�����齫
#define ID_CHESS						5									//��������
#define ID_LAND							6									//������
#define ID_SPARROW					7							  	//�齫
#define ID_RUN_FAST					8							  	//�ܵÿ�
#define ID_HOE							9								//�����

//������Ϸ
#define ID_BACK_JACK					10									//�ڽܿ�
#define ID_UPGRADE						11									//������
#define ID_FOURENSIGN					12									//�Ĺ�����
#define ID_THREELEAF					13									//թ��
#define ID_UNCOVERPIG					14									//����
#define ID_PAOPAI							15									//����

#define ID_FiveChess		16	//	������
#define ID_BWChess		17	//	�ڰ���
#define ID_CrazyLand		18	//	��񶷵���
#define ID_3V1Card		19	//	����һ
#define ID_510KCard		20	//	510K
#define ID_SKCard		21	//	˫��
#define ID_XZMJ		22	//	�����齫
#define ID_SCMJ		23	//	�Ĵ��齫
#define ID_2RenMJ		24	//	2���齫
#define ID_HBMJ		25	//	�����齫
#define ID_DQMJ		26	//	�����齫
#define ID_SHMJ		27	//	�Ϻ��齫
#define ID_TWMJ		28	//	̨���齫
#define ID_CSMJ		29	//	��ɳ�齫
#define ID_LLK		30	//	������
#define ID_DDP		31	//	�Զ���
#define ID_ELS		32	//	������˹
#define ID_MaZu		33	//	����
#define ID_WaJin		34	//	�ڽ���
#define ID_PaoPao		35	//	������
#define ID_Horse		36	//	����
#define ID_Down100		37	//	����һ�ٲ�
#define ID_GXDSCard		38	//	������ʳ
#define ID_XZUupdate    39	//	����������	XZUpdate.exe
#define ID_GAME_XN	40	//	��ţ	GS_TS_LiftOx.exe
#define ID_GAME_81	41	//	�ذ�һ	DEightOne.exe
#define ID_GAME_BRIDGE	42	//	����	Bridge.exe
#define ID_GAME_7KING	43	//	����	SevenThree.exe
#define ID_GAME_NINE	44	//	��ʮ	CNine.exe
#define ID_GAME_CLOSE_CARD	45	//	����	NT_Close.exe
#define ID_GAME_GJ	46	//	����	GJ.exe
#define ID_GAME_DD	47	//	�Ե�	CF_DD.exe
#define ID_GAME_GOLD_COW	48	//	��ţ	GoldCow.exe
#define ID_GAME_LAND_LZ	49	//	���Ӷ�����	land_laiziOne.exe
#define ID_GAME_240	50	//	240��	TwoForty.exe
#define ID_GAME_BH	51	//	����	BH.exe
#define ID_GAME_SDMJ	52	//	ɽ���齫	SD_Mj.exe
#define ID_GAME_QZ_MJ		53	//	Ȫ���齫
#define ID_GAME_BIG_2		54	//	���϶�
#define ID_GAME_QZ_80		55	//	Ȫ��80��
#define ID_GAME_QZ_CDP		56	//	Ȫ�ݳ���Ƥ
#define ID_GAME_QZ_YC		57	//	Ȫ��Ӳ��	

#define ID_GDMJ						95 //�㶫�齫
#define ID_TSWAKEN					96 //��ˮ�ڿ�
#define ID_TSMJ						97//��ˮ�齫
#define ID_WAKEN					98//�ڿ�
#define ID_PKJ						99									//�˿˻�
#define ID_IQGame	101	//IQGame
/////////////////////////////////////////////////////////////////////////////////////////
//�궨��

#define ACCOUNT_TYPE_VISITOR        1     //�ο�
#define ACCOUNT_TYPE_WX             2     //΢�����
#define ACCOUNT_TYPE_ROBOT          3     //������

//��������
#define MAX_CHAIR						8									//�����Ϸ��
#define MAX_TABLE						512									//�������
#define MAX_ANDROID						256									//������
#define MAX_PROPERTY					128									//������
#define MAX_WHISPER_USER				16									//���˽��

#define MAX_CHAT_LEN					512									//���쳤��
#define TIME_USER_CHAT					1L									//������
#define INVALID_TABLE					((WORD)(-1))						//��Ч���Ӻ�
#define INVALID_CHAIR					((WORD)(-1))						//��Ч���Ӻ�
#define MAIN_DLG_CLASSNAME				TEXT("114PKGamePlaza")				//����ע����

//˰�ն���
#define REVENUE_BENCHMARK				1000L								//˰�����
#define REVENUE_DENOMINATOR				1000L								//˰�շ�ĸ

//���ж���
#define INSURE_LESS_SCORE				1000L								//�������
#define INSURE_REVENUE_RATIO			1L/1000L							//����˰��

//��������
#define SCORE							LONGLONG							//��������
#define SCORE_STRING					TEXT("%I64d")						//��������

//�˿ڶ���
#define PORT_VIDEO_SERVER				7600								//��Ƶ������
#define PORT_LOGON_SERVER				6002								//��½������
#define PORT_CENTER_SERVER				6005								//���ķ�����

//������ʶ
#define LEN_NETWORK_ID					13									//��������
#define LEN_MACHINE_ID					33									//���г���

//�������ݶ���
#define SOCKET_VER						68									//���ݰ��汾
#define SOCKET_PACKAGE					2046								//��������
#define SOCKET_BUFFER					(sizeof(CMD_Head)+SOCKET_PACKAGE+2*sizeof(DWORD))

//�ں�������
#define MDM_KN_COMMAND					0									//�ں�����
#define SUB_KN_DETECT_SOCKET			1									//�������
#define SUB_KN_VALIDATE_SOCKET			2									//��֤����

//���Ⱥ궨��
#define TYPE_LEN						32									//���೤��
#define KIND_LEN						32									//���ͳ���
#define STATION_LEN						32									//վ�㳤��
#define SERVER_LEN						32									//���䳤��
#define MODULE_LEN						32									//���̳���

//��Ϸ����
#define GAME_GENRE_SCORE				0x0001								//��ֵ����
#define GAME_GENRE_GOLD					0x0002								//�������
#define GAME_GENRE_MATCH				0x0004								//��������
#define GAME_GENRE_EDUCATE				0x0008								//ѵ������

//�û�״̬����
#define US_NULL							0x00								//û��״̬
#define US_FREE							0x01								//վ��״̬
#define US_SIT							0x02								//����״̬
#define US_READY						0x03								//ͬ��״̬
#define US_LOOKON						0x04								//�Թ�״̬
#define US_PLAY							0x05								//��Ϸ״̬
#define US_OFFLINE						0x06								//����״̬

//���Ⱥ궨��
#define LEN_MD5							33									//��������
#define LEN_USERNOTE					32									//��ע����
#define LEN_ACCOUNTS					32									//�ʺų���
#define NAME_LEN						32									//���ֳ���
#define PASS_LEN						33									//���볤��
#define GROUP_LEN						32									//���ų���
#define LEN_UNDER_WRITE					32									//����ǩ��

//����ģʽ
#define DISTRIBUTE_MODE_NONE			0									//���ɷ���
#define DISTRIBUTE_MODE_RAND			1									//�������
#define DISTRIBUTE_MODE_PLAN			2									//��λ����

//���ȶ���
#define LEN_LESS_ACCOUNTS				6									//����ʺ�
#define LEN_LESS_NICKNAME				6									//����ǳ�
#define LEN_LESS_PASSWORD				6									//�������

//ͷ���С
#define FACE_CX							48									//ͷ����
#define FACE_CY							48									//ͷ��߶�

//�û���ϵ
#define	CP_NORMAL						0									//δ֪��ϵ
#define	CP_FRIEND						1									//���ѹ�ϵ
#define	CP_DETEST						2									//����ϵ

//��Ч��ֵ
#define INVALID_BYTE				((BYTE)(0xFF))						//��Ч��ֵ
#define INVALID_WORD				((WORD)(0xFFFF))					//��Ч��ֵ
#define INVALID_DWORD				((DWORD)(0xFFFFFFFF))				//��Ч��ֵ

#define TIME_BREAK_READY			9000L								//�ж�ʱ��
#define TIME_BREAK_CONNECT			4000L								//�ж�ʱ��
#define TIME_DETECT_SOCKET			20000L								//���ʱ��

//////////////////////////////////////////////////////////////////////////

//��������
#define QUEUE_SEND_REQUEST			1									//���ͱ�ʶ
#define QUEUE_SAFE_CLOSE			2									//��ȫ�ر�
#define QUEUE_ALLOW_BATCH			3									//����Ⱥ��
#define QUEUE_DETECT_SOCKET			4									//�������

/////////////////////////////////////////////////////////////////////////////////////////

//���ݰ��ṹ��Ϣ
struct CMD_Info
{
	WORD								wDataSize;							//���ݴ�С
	BYTE								cbCheckCode;						//Ч���ֶ�
	BYTE								cbMessageVer;						//�汾��ʶ
};

//���ݰ�������Ϣ
struct CMD_Command
{
	WORD								wMainCmdID;							//��������
	WORD								wSubCmdID;							//��������
};

//���ݰ����ݰ�ͷ
struct CMD_Head
{
	CMD_Info							CmdInfo;							//�����ṹ
	CMD_Command							CommandInfo;						//������Ϣ
};

//�������ݰ�����
struct CMD_Buffer
{
	CMD_Head							Head;								//���ݰ�ͷ
	BYTE								cbBuffer[SOCKET_PACKAGE];			//���ݻ���
};

//���ṹ��Ϣ
struct CMD_KN_DetectSocket
{
	DWORD								dwSendTickCount;					//����ʱ��
	DWORD								dwRecvTickCount;					//����ʱ��
};

//////////////////////////////////////////////////////////////////////////

//��Ϸ���ͽṹ
struct tagGameType
{
	WORD								wSortID;							//�������
	WORD								wTypeID;							//�������
	TCHAR								szTypeName[TYPE_LEN];				//��������
};

//��Ϸ���ƽṹ
struct tagGameKind
{
	WORD								wSortID;							//�������
	WORD								wTypeID;							//���ͺ���
	WORD								wKindID;							//���ƺ���
	DWORD								dwMaxVersion;						//���°汾
	DWORD								dwOnLineCount;						//������Ŀ
	TCHAR								szKindName[KIND_LEN];				//��Ϸ����
	TCHAR								szProcessName[MODULE_LEN];			//��������
};

//��Ϸ���̽ṹ
struct tagGameProcess
{
	WORD								wSortID;							//�������
	WORD								wTypeID;							//���ͺ���
	WORD								wKindID;							//���ƺ���
	WORD								wServerPort;						//����˿�
	DWORD								dwServerAddr;						//�����ַ
	DWORD								dwMaxVersion;						//���°汾
	DWORD								dwOnLineCount;						//������Ŀ
	TCHAR								szKindName[KIND_LEN];				//��Ϸ����
	TCHAR								szProcessName[MODULE_LEN];			//��������
};

//��Ϸվ��ṹ
struct tagGameStation
{
	WORD								wSortID;							//�������
	WORD								wKindID;							//���ƺ���
	WORD								wJoinID;							//�ҽӺ���
	WORD								wStationID;							//վ�����
	TCHAR								szStationName[STATION_LEN];			//վ������
};

//��Ϸ�����б�ṹ
struct tagGameServer
{
	WORD								wSortID;							//�������
	WORD								wKindID;							//���ƺ���
	WORD								wServerID;							//�������
	WORD								wStationID;							//վ�����
	WORD								wServerPort;						//����˿�
	DWORD								dwServerAddr;						//�����ַ
	DWORD								dwOnLineCount;						//��������
	TCHAR								szServerName[SERVER_LEN];			//��������
};

//////////////////////////////////////////////////////////////////////////

//�û�������Ϣ
struct tagUserScore
{
	//������Ϣ
	SCORE								lGrade;								//�û��ɼ�
	SCORE								lInsure;							//�û�����
	LONG								lGold;								//�û����
	LONG								lScore;								//�û�����
	LONG								lWinCount;							//ʤ������
	LONG								lLostCount;							//ʧ������
	LONG								lDrawCount;							//�;�����
	LONG								lFleeCount;							//������Ŀ
	LONG								lExperience;						//�û�����
	DWORD								dwUserMedal;						//�û�����
	DWORD								dwLoveLiness;						//�û�����
};

//�û�״̬��Ϣ
struct tagUserStatus
{
	WORD								wTableID;							//���Ӻ���
	WORD								wChairID;							//����λ��
	WORD								wNetDelay;							//������ʱ
	BYTE								cbUserStatus;						//�û�״̬
};

//�û�������Ϣ�ṹ
struct tagUserInfoHead
{
	//�û�����
	WORD								wFaceID;							//ͷ������
	BYTE								cbGender;							//�û��Ա�  0 =woman, 1 =man
	BYTE								cbMember;							//��Ա�ȼ�
	DWORD								dwUserID;							//�û� I D
	DWORD								dwGroupID;							//��������
	DWORD								dwUserRight;						//�û��ȼ�
	DWORD								dwMasterRight;						//����Ȩ��
	DWORD								dwGameID;							//��Ϸ I D
	DWORD								dwCustomID;							//�Զ���ʶ

	//�û�״̬
	WORD								wTableID;							//���Ӻ���
	WORD								wChairID;							//����λ��
	WORD								wNetDelay;							//������ʱ
	BYTE								cbUserStatus;						//�û�״̬

	//�û�����
	tagUserScore						UserScoreInfo;						//������Ϣ
};

//�û���Ϣ�ṹ
struct tagUserData
{
	//�û�����
	WORD								wFaceID;							//ͷ������
	BYTE								cbGender;							//�û��Ա�  0 =woman, 1 =man
	BYTE								cbMember;							//��Ա�ȼ�
	DWORD								dwUserID;							//�û� I D
	DWORD								dwGroupID;							//��������
	DWORD								dwUserRight;						//�û��ȼ�
	DWORD								dwMasterRight;						//����Ȩ��
	TCHAR								szName[NAME_LEN];					//�û�����
	TCHAR								szGroupName[GROUP_LEN];				//��������
	TCHAR								szUnderWrite[LEN_UNDER_WRITE];		//����ǩ��
	DWORD								dwCustomID;							//�Զ���ʶ
	DWORD								dwGameID;							//��Ϸ I D

	//�û�����
	LONG								lGold;								//�û����
	LONG								lScore;								//�û�����
	LONG								lWinCount;							//ʤ������
	LONG								lLostCount;							//ʧ������
	LONG								lDrawCount;							//�;�����
	LONG								lFleeCount;							//��������
	LONG								lExperience;						//�û�����

	DWORD								dwUserMedal;						//�û�����
	DWORD								dwLoveLiness;						//�û�����
	BYTE								cbMemberOrder;						//��Ա�ȼ�
	BYTE								cbMasterOrder;						//����ȼ�
	SCORE								lGrade;								//�û��ɼ�
	SCORE								lInsure;							//�û�����

	//�û�״̬
	WORD								wTableID;							//���Ӻ���
	WORD								wChairID;							//����λ��
	WORD								wNetDelay;							//������ʱ
	BYTE								cbUserStatus;						//�û�״̬

	//������Ϣ
	BYTE								cbCompanion;						//�û���ϵ
};

//ͷ����Ϣ
struct tagCustomFaceInfo
{
	DWORD							dwDataSize;							//���ݴ�С
	DWORD							dwCustomFace[FACE_CX*FACE_CY];		//ͼƬ��Ϣ
};
//////////////////////////////////////////////////////////////////////////

//�������кŽṹ
struct tagClientSerial
{
	DWORD								dwComputerID[3];					//��������
};

//���û���ṹ
struct tagOptionBuffer
{
	BYTE								cbBufferLen;						//���ݳ���
	BYTE								cbOptionBuf[32];					//���û���
};

//��������
struct tagLevelItem
{
	LONG							lLevelScore;						//�������
	TCHAR							szLevelName[16];					//��������
};

//��Ա����
struct tagMemberItem
{
	BYTE							cbMemberOrder;						//�ȼ���ʶ
	TCHAR							szMemberName[16];					//�ȼ�����
};

//��������
struct tagMasterItem
{
	BYTE							cbMasterOrder;						//�ȼ���ʶ
	TCHAR							szMasterName[16];					//�ȼ�����
};

//������ͷ
struct tagDataHead
{
	WORD							wDataSize;							//���ݴ�С
	WORD							wIdentifier;						//���ͱ�ʶ
	DWORD							dwInsertTime;						//����ʱ��
};

//������Ϣ
struct tagBurthenInfo
{
	DWORD							dwDataSize;							//���ݴ�С
	DWORD							dwBufferSize;						//���峤��
	DWORD							dwDataPacketCount;					//���ݰ���
};

//������Ϣ
struct tagDataBuffer
{
	WORD							wDataSize;							//���ݴ�С
	LPVOID							pDataBuffer;						//����ָ��
};
/////////////////////////////////////////////////////////////////////////////////////////
#define MAX_SCENE_NUM	10//��󳡾���
#define ONE_SCENE_MAX_TEXT_NUM	15//ÿ������TEXT�����

//��������
typedef struct _SOUND_TEXT_ITEM
{
	char showInfo[50];
	char playSound[50];
}
SOUND_TEXT_ITEM;

//����
typedef struct _SCENE_ITEM
{
	int	 useTextInt;//�Ѿ�ʹ�õĸ���
	char TypeName[50];
	SOUND_TEXT_ITEM TextList[ONE_SCENE_MAX_TEXT_NUM];
}
SCENE_ITEM;

#endif