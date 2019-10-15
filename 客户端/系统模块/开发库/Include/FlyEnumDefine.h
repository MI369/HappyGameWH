//�ȽϽ�� A=B,A<B,A>B  ��ǰ��Ĵ�AB  A>B
enum COMP_RESULT_TYPE{COMP_RESULT_A_B,COMP_RESULT_BA, COMP_RESULT_AB};

struct CARDS{
	int iColor;//color
	int iIndex;//num
	int iState;//status
	int iValue;//value
};

enum PLAYERS{
	SOUTH,   // 0
	EAST,    // 1
	NORTH,
	WEST
};

//�ƻ�ɫ
enum CARDS_COLOR{
	SPADE = 0,			//����
	HEART = 1,			//����
	DIAMOND = 2,		//����
	CLUB = 3			//÷��
};

//÷�� 78������ 79������ 80������ 81
//81-0,1,2,3

//�Ƶ�״̬
enum CARDS_STATE {
	NOT_AVAILABLE = -1,
	AT_HAND = 0,
	CAN_PULL_OUT = 1,     //���Գ���
	PULL_OUT = 2,         //
	SHOW_A_MINUTE = 3,   //��ʾ����
	HIDE_A_MINUTE = 4,   //��ʾ����
	AT_TABLE = 5,        //��������ʾ
	KEEP_IT = 6,         //ռ��
	LAST_FLAG,
};
//��Ϸ�������� 4��
enum SAI_ZI_WIN_TYPE{SAI_ZI_WIN_TYPE_ALLNUM=0,SAI_ZI_WIN_TYPE_LEVEL,SAI_ZI_WIN_TYPE_JO,SAI_ZI_WIN_TYPE_ONE};

enum {DEL_OP=0,ADD_OP};

enum    USERSTATUS						//״̬����
{
	STATUSNOTDEFINE	=0,	//δ����
	IDLESSE			=1,	//����	
	INGAMES			=2,	//��������Ϸ������Ϸδ��ʼ
	PLAYING			=3,	//��Ϸ������
	READY			=4,	//��һ�������У�����׼����
	NOTREADY		=5,	//������һ�������ϣ���δ׼����
};

enum    GAMESTATUS						//״̬����
{
	GAME_IDLESSE			=1,	//����	
	GAME_PLAYING			=2,	//��Ϸ������
	GAME_OVER			=3,	//��Ϸ����

};
//�������,�Թ���,����1,����2.....
enum PLAYER_TYPE{PLAYER_RED=0,PLAYER_BLACK,PLAYER_OTHER};

//����,��Ƶ������
enum DATA_TYPE{DATA_TYPE_CMD,DATA_TYPE_AUDIO, DATA_TYPE_VIDEO};

//������Ƶ��,��
enum AV_OP_TYPE{AV_OP_TYPE_CLOSE, AV_OP_TYPE_OPEN};


//������UDP SOCKET����
enum UDP_SOCKET_TYPE{UDP_SOCKET_TYPE_SEND_CMD,UDP_SOCKET_TYPE_RECV_CMD,UDP_SOCKET_TYPE_SEND_VIDEO,UDP_SOCKET_TYPE_RECV_VIDEO,UDP_SOCKET_TYPE_SEND_AUDIO,UDP_SOCKET_TYPE_RECV_AUDIO};

//Ȩ������
//��ͨ���,����,��Ϸ����(�ɹ�),ϵͳ����,�������,�߼��û�����
enum PurviewType{PurviewTypePlayer,PurviewTypeAgent, PurviewTypeGameManager, PurviewTypeSetting, PurviewTypeRoomManager, PurviewTypeUserManager, PurviewTypeMaxNum};

