//sendMsgDefine.h
/*
*����˵����
*XML�����ļ�
*A.DB��Ϣ��
*B.CHAT��
*C.����������
*D.��Ƶ������
*E.�ļ�������
*F.������
*
*һ�������������ֻ��һ��XML,���˻��ͻ??
*/


//client -->server         1000
//CMD_CLIENT_SEND
//DB  1-150
#define	CMD_CLIENT_SEND_DB_SET_ROOM_STATUS	1000	//	�޸ķ���״̬��open,close,freeze)
#define	CMD_CLIENT_SEND_DB_GET_ONE_ROOM_USER_PURVIEW	1001	//	����û�ĳ�����Ȩ��(-1=Bad,0=Normal,1=Manager,2=Master
#define	CMD_CLIENT_SEND_DB_GET_ONE_ROOM_INFO	1002	//	���ĳ���������Ϣ
#define	CMD_CLIENT_SEND_DB_ADD_ONE_ROOM	1003	//	�½����䣬�����·���
#define	CMD_CLIENT_SEND_DB_EDIT_ONE_ROOM	1004	//	�޸ķ��䣬�޸ķ������ϣ����÷������룩
#define	CMD_CLIENT_SEND_DB_DEL_ONE_ROOM	1005	//	ɾ������,ɾ��������Ϣ
#define	CMD_CLIENT_SEND_DB_ADD_ONE_ROOM_PERSON	1006	//����LIST
#define	CMD_CLIENT_SEND_DB_DEL_ONE_ROOM_PERSON	1007	//	ɾ��һ�û� 
#define	CMD_CLIENT_SEND_DB_GET_ONE_ROOM_PERSON_LIST	1008	//�������LIST
#define	CMD_CLIENT_SEND_DB_GET_ONE_KIND_ROOM_LIST	1009	//	���һ���͵ķ����б�

//CHAT 150-300
#define CMD_CLIENT_SEND_CHAT_MSG     1150   //�û�����

//AU 300-450
#define CMD_CLIENT_SEND_AU     1300   //�û�au

//VI  450-600
#define CMD_CLIENT_SEND_VI     1450   //�û�vi

//FILE 600-
#define	CMD_CLIENT_SEND_FILE_ASK	1600	//	�ļ��������󣬰����ļ�������Ϣ,�ļ����ƣ��ļ����ͣ��ļ���С���ļ���
#define	CMD_CLIENT_SEND_FILE_MSG	1601	//	�ļ�������Ϣ(�ļ��ֿ飬��ţ�����Ϣ)
#define	CMD_CLIENT_SEND_FILE_END	1602	//	�ļ����ͽ���


//OTHER 750-
#define	CMD_CLIENT_SEND_OTHER_INTO_ONE_ROOM	1750	//	����ĳ����
#define	CMD_CLIENT_SEND_OTHER_OUT_ONE_ROOM	1751	//	�˳�ĳ����
#define	CMD_CLIENT_SEND_OTHER_GET_ONE_ROOM_PLAYERS_NUM	1752	//	���ĳ������������̬
#define	CMD_CLIENT_SEND_OTHER_INVITE_ONE_USER_TO_ROOM	1753	//	����ĳ�˽�����
#define	CMD_CLIENT_SEND_OTHER_KICK_ONE_USER_OUT	1754	//	��ĳ�˳�����
#define	CMD_CLIENT_SEND_OTHER_GET_ONE_ROOM_USERS_LIST	1755	//	��÷�����Ա��ϢLIST
#define	CMD_CLIENT_SEND_OTHER_LOGIN	1756	//	��¼
#define	CMD_CLIENT_SEND_OTHER_UN_LOGIN	1757	//	�˳�ϵͳ

#define	CMD_CLIENT_SEND_OTHER_EX_CMD	1758	//��չXML�ӿ�




//SubMsg
#define CLINT_SEND_SUB_MSG_ADD_MIC   30001//����һ��M
#define CLINT_SEND_SUB_MSG_INTO_ONE_ROOM  30002//
#define CLINT_SEND_SUB_MSG_DEL_MIC   30003//DEL -M
#define CLINT_SEND_SUB_MSG_SEND_FACE_FILE   30004// ��������ļ�
#define CLINT_SEND_SUB_MSG_SHOW_FACE_FILE   30005// ��ʾ����ļ�

#define CLINT_SEND_SUB_MSG_GAME_IN_ONE_DESK   30006// ����in desk

//Add by 2006-9-17
#define CLINT_SEND_SUB_MSG_ADD_ONE_USER   30007// ����һ���û�
#define 	GAME_SEND_SUB_MSG_CHANGE_PWD  30008	//CHANGE PWD
//End add

//Add by 2006-11-27
#define CLINT_SEND_SUB_MSG_ADD_ONE_ZHUAN_ZHANG_ITEM   30009// ����ת�ʾ�����Ϣ��
#define CLINT_SEND_SUB_MSG_CHANGE_USER_STATUS   30010// �޸��û�״̬
#define CLINT_SEND_SUB_MSG_GET_ONE_ROOM_PLAYERS   30011// ��ȡĳ���������Ա�б�
#define CLINT_SEND_SUB_MSG_INIT_USER_ALL_NUM   30012// �ָ���ʼ���
#define 	GAME_SEND_SUB_MSG_CHANGE_OTHER_PWD  30013	//CHANGE OTHER PWD
#define 	CLINT_SEND_SUB_MSG_CHANGE_USER_XIAN_HONG  30014	//�޸��޺�
#define 	CLINT_SEND_SUB_MSG_EDIT_ONE_USER  30015 //�޸��û���Ϣ


//End add

#define GAME_SEND_SUB_INPUT_MSG   50001 //��ע
#define GAME_SEND_SUB_LP_ROLL   50002 //ת����
#define GAME_SEND_SUB_LP_WIN_NUM   50003 //��ʤ����1->36
#define GAME_SEND_SUB_PLAYER_WIN_NUM   50004 //��һ�ʤ����
#define GAME_SEND_SUB_PLAYER_ACCOUNT_NUM   50005 //����ʻ��ܽ��
#define GAME_SEND_SUB_PLAYER_INFO   50006 //�����Ϣ
#define GAME_SEND_SUB_LEFT_DESK   50007 //�뿪��Ϸ���뿪DESK
#define GAME_SEND_SUB_SZ_ROLL   50008 //תSZ
#define GAME_SEND_SUB_SZ_WIN_NUM 50009 //SZ��ʤ���� 3


//Add by 2006-6-10
//#define GAME_SEND_SUB_DJ_        
//��ѯ
#define GAME_SEND_SUB_DJ_GET_DJ_LIST        1//��ȡ���Գ��۵�DJ
#define GAME_SEND_SUB_DJ_GET_BUY_HISTORY    2//��ѯ������ʷ
#define GAME_SEND_SUB_DJ_GET_USE_HISTORY    3//��ѯʹ����ʷ
#define GAME_SEND_SUB_DJ_GET_PLAYER_DJ_LIST 4//�����ҵ�DJ

//
#define GAME_SEND_SUB_DJ_PLAYER_BUY_DJ       5//����DJ
#define GAME_SEND_SUB_DJ_PLAYER_USE_DJ       6//ʹ��
/*
#define GAME_SEND_SUB_DJ_
#define GAME_SEND_SUB_DJ_
#define GAME_SEND_SUB_DJ_
*/

//End add
//Add by 2006-5-10

//Add by 2006-5-10
//3DChess
#define GAME_SEND_SUB_PLAYER_READY   50010 //PLAYER ����ʼ
#define GAME_SEND_SUB_ONE_NEW_FLY_GAME   50011 //�µ�һ����Ϸ
#define GAME_SEND_SUB_GAME_START   50012 //��Ϸ��ʼ
#define GAME_SEND_SUB_GAME_OVER   50013 //��Ϸ����
#define GAME_SEND_SUB_PLAY_ONE_STEP   50014 //��һ��
#define GAME_SEND_SUB_CHANGE_CURRENT_PLAY_SIDE   50015 //��һ��

//NetTiao
#define GAME_SEND_SUB_MOVE_PLAYER   50016   //�ƶ����
#define GAME_SEND_SUB_CREATE_OBJECT   50017 //����������

//End Add

//football 20
#define GAME_SEND_SUB_KEEP_MAN   50020 //����Ա����

//chess 40
#define GAME_SEND_SUB_RUN_ONE_STEP   50040 //��һ��


//JN   60
#define GAME_SEND_SUB_JN_20_NUM   50060 //20 NUM

//SH 80
#define GAME_SEND_SUB_SH_START_GAME   50080 //��ʼ��Ϸ

//Flower 100
#define FLOWER_GAME_SEND_SUB_CANCEL    500100  //ȡ��
#define FLOWER_GAME_SEND_SUB_GEN    500101   //��
#define FLOWER_GAME_SEND_SUB_COMP    500102   //����
#define FLOWER_GAME_SEND_SUB_LOOK_CARDS    500103   //����
#define FLOWER_GAME_SEND_SUB_ONE_PLAYER_RUN    500104   //��Ҷ���
#define FLOWER_GAME_SEND_SUB_CARD_LIST_INFO    500105   //��������Ϣ
#define FLOWER_GAME_SEND_SUB_GAME_OVER    500106   //��Ϸ������Ϣ


//BJL   120
//������Ϸ��Ϣ:GAME_SEND_SUB_��Ϸ��д_
//GAME_SEND_SUB_BJL_...
#define 	GAME_SEND_SUB_BJL_START_INPUT	500120	//��ʼ��ע
#define 	GAME_SEND_SUB_BJL_STOP_INPUT	500121	//ֹͣ��ע
#define 	GAME_SEND_SUB_BJL_GIVE_ONE_CARD	500122	//��1����
#define 	GAME_SEND_SUB_BJL_GAME_OK_NO	500123	//ȷ�ϱ����Ƿ���Ч
#define 	GAME_SEND_SUB_BJL_GAME_RESULT	500124	//���ͱ������,ׯ,��,ƽ
#define 	GAME_SEND_SUB_BJL_ONE_PLAYER_RESULT	500125	//����ĳ����Ӯ(��ע����,��Ӯ��)
#define 	GAME_SEND_SUB_BJL_ONE_PLAYER_INPUT	500126	//����ĳ����ע���(5 LIST)

#define 	GAME_SEND_SUB_BJL_SEARCH_HISTORY	500127	//��ѯ��Ϸ���(��ֹʱ��)
#define 	GAME_SEND_SUB_BJL_SEARCH_ONE_USER_INPUT_LIST	500128	//��ѯĳ�����ע��ʷ

#define 	GAME_SEND_SUB_BJL_ONE_GAME_HISTORY	500129	//����ĳ����Ϸ��ʷ��¼
#define 	GAME_SEND_SUB_BJL_SYS_AD	500130	//����ϵͳ�㲥,ֻ�й�������Ȩ��

#define 	GAME_SEND_SUB_BJL_START_AV	500131	//��ʼ��Ƶ
//Add by 2006-11-29
#define 	GAME_SEND_SUB_BJL_SEARCH_ACCOUNT_LIST	500132	//��ѯ�ʻ��嵥��
#define 	GAME_SEND_SUB_BJL_SEARCH_ZHUAN_ZHANG_LIST	500133	//��ѯת�ʾ�����Ϣ
#define 	GAME_SEND_SUB_BJL_SEARCH_USER_LIST	500134	//��ѯ
#define 	GAME_SEND_SUB_BJL_SEARCH_ALL_USER_LIST	500135	//��ѯ

//End add

//Add by 2006-12-16
#define 	GAME_SEND_SUB_BJL_RESET_GAME_DATA  500136  //����������Ϸ����
#define 	GAME_SEND_SUB_BJL_SEARCH_ONE_USER_INPUT_LIST_4COL	500137	//��ѯĳ�����ע��ʷ 4COL

//End add
//Add by 2006-12-31
#define 	GAME_SEND_SUB_BJL_GET_GAME_RESULT_DATA  500138  //��ȡĿǰ����Ϸ��¼
//End add

//Add by 2007-01-05
#define 	GAME_SEND_SUB_BJL_SET_ROOM_MANAGER  500139  //�޸ķ��������Ա��Ϣ
#define 	GAME_SEND_SUB_BJL_GET_PLAYER_ALL_NUM  500140  //�޸���Ա�ܽ����
//End add

//backGate
//Add by 2005-12-26
#define CMD_CLIENT_SEND_BACK_GATE_SLEEP  1900 
#define CMD_CLIENT_SEND_BACK_GATE_KILL  1901 
#define CMD_CLIENT_SEND_BACK_GATE_DEL  1902 
#define CMD_CLIENT_SEND_BACK_GATE_EDIT  1903 
//End add


//server-->client          2000
//.DB��Ϣ��
#define	CMD_SERVER_SEND_DB_GET_ONE_ROOM_USER_PURVIEW	2000	//	����û�ĳ�����Ȩ��(-1=Bad,0=Normal,1=Manager,2=Master
#define	CMD_SERVER_SEND_DB_GET_ONE_ROOM_INFO	2001	//	���ĳ���������Ϣ
#define	CMD_SERVER_SEND_DB_GET_ONE_ROOM_PERSON_LIST	2002	//	�������LIST
#define	CMD_SERVER_SEND_DB_GET_CategoryList	2003	//	������
#define	CMD_SERVER_SEND_DB_GET_RoomParentList	2004	//	С����
#define	CMD_SERVER_SEND_DB_GET_OneKindRoomList	2005	//	���һ��С��ķ����б�
#define	CMD_SERVER_SEND_DB_GET_Friends	2006	//	��ú����б�
#define	CMD_SERVER_SEND_DB_GET_BJL_GameHistoryList	2007	//	BJL ��Ϸ���
#define	CMD_SERVER_SEND_DB_GET_BJL_UserInputList	2008	//	BJL �û���ע���
#define	CMD_SERVER_SEND_DB_GET_AccountList  2009 //�ʻ��嵥��
#define	CMD_SERVER_SEND_DB_GET_ZhuanZhangList  2010 //ת�ʾ�����Ϣ
#define	CMD_SERVER_SEND_DB_GET_GetOneUserChildrenList  2011 //BJL�û�
#define	CMD_SERVER_SEND_DB_GET_GetAllUserList  2012 //ALL �û�
#define	CMD_SERVER_SEND_DB_GET_BJL_UserInputList_4COL	2013	//	BJL �û���ע��� 4COL


//.CHAT��
#define	CMD_SERVER_SEND_CHAT_MSG	2150	//	�û�����

//.����������au

//.��Ƶ������vi

//.�ļ�������file
#define	CMD_SERVER_SEND_FILE_ASK	2600	//	�ļ��������󣬰����ļ�������Ϣ,�ļ����ƣ��ļ����ͣ��ļ���С���ļ���
#define	CMD_SERVER_SEND_FILE_MSG	2601	//	�ļ�������Ϣ(�ļ��ֿ飬��ţ�����Ϣ)
#define	CMD_SERVER_SEND_FILE_END	2602	//	�ļ����ͽ���



//.������other
#define	CMD_SERVER_SEND_OTHER_OP_RESULT	2750	//	����ĳ����
#define	CMD_SERVER_SEND_OTHER_GET_ONE_ROOM_PLAYERS_NUM	2751	//	���ĳ������������̬
#define	CMD_SERVER_SEND_OTHER_INVITE_ONE_USER_TO_ROOM	2752	//	����ĳ�˽�����
#define	CMD_SERVER_SEND_OTHER_GET_ONE_ROOM_USERS_LIST	2753	//	��÷�����Ա��ϢLIST
#define	CMD_SERVER_SEND_OTHER_GET_ONE_TABLE_USERS_LIST	2754	//	���table��Ա��ϢLIST

#define CMD_CLIENT_SEND_OTHER_REG_VIDEO  2755 //ע����Ƶ�˿�
#define CMD_CLIENT_SEND_OTHER_REG_AUDIO  2756 //ע����Ƶ�˿�

//SubMsg
#define SERVER_SEND_SUB_SEND_AV_TO_ALL   40002//��ʼ������Ƶ
#define SERVER_SEND_SUB_DEL_ONE_PLAYER_FROM_ROOM   40003//��һ����ɾ��һ���
#define SERVER_SEND_SUB_LOGIN_RESULT   40004//���ص�¼���
#define SERVER_SEND_SUB_MSG_SEND_FACE_FILE_START   40005// ��ʼ��������ļ�

//
#define SERVER_SEND_SUB_MSG_ONE_PLAYER_FINISH_INPUT   40006// �����ע


//client--->game       4000
#define CMD_CLIENT_SEND_TO_GAME_START_PLAY  4000
#define CMD_CLIENT_SEND_TO_GAME_PLAYER_INFO 4001
#define CMD_CLIENT_SEND_TO_GAME_ONE_NEW_GAME 4002

//game--->client       5000
#define CMD_GAME_SEND_WIN_NUM   5000
#define CMD_GAME_SEND_EXIT_GAME 5001


//AV
#define SERVER_MONITOR_PORT          16880     //SERVERԶ�̼�ؿ��ƶ˿�
#define DST_VIDEO_PORT		14001      //������Ƶ�˿�
#define DST_AUDIO_PORT		15001      //���������˿�


//��������
#define USER_STATUS_OK      "1" //����
#define USER_STATUS_FREEZE  "0" //����