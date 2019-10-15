// AMMsgType.h: 
//
//////////////////////////////////////////////////////////////////////

#if !defined(__MSGTYPE___HEAD_DEFINE____H___)
#define __MSGTYPE___HEAD_DEFINE____H___

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

// User defined system message
//csw +400
#define  WM_SYNCHRONIZE           WM_USER+401
#define  WM_CANCEL_SYNCH          WM_USER+402
#define  WM_DISPCOL_CHANGED       WM_USER+403
#define  WM_COLOR_CHANGED         WM_USER+404
#define  WM_RECEIVING_CHANGED     WM_USER+405  

#define  WM_ALARM_RECEIVED        WM_USER+406
#define  WM_OP_REPLY_RECEIVED     WM_USER+407
#define  WM_SYN_DATA_RECEIVED     WM_USER+408
#define  WM_RELATED_ALM_RECEIVED  WM_USER+409
#define  WM_OP_WAIT_RECEIVED      WM_USER+410
#define  WM_REG_REPLY_RECEIVED    WM_USER+410
#define  WM_SET_FLT_ACK_RECEIVED  WM_USER+412

#define  WM_OPERATE_ALARM         WM_USER+413
#define  WM_OPERATE_ALARM_FWD     WM_USER+414

#define  WM_FWD_ALM_ACK_RECEIVED  WM_USER+415
#define  WM_TICKET_ACK_RECEIVED   WM_USER+416
#define  WM_RECONNECT_MQ          WM_USER+ 417
#define  WM_MQ_DISCONNECTED       WM_USER+ 418

// MQ Message
#define  REGISTER_MSG             1401
#define  REGISTER_REPLY_MSG       1402
#define  DEREGISTER_MSG           1403

#define  SYNCH_REQ_MSG            1404
#define  SYNCH_DATA_MSG           1405
#define  FM_ALARM_ACT_MSG         1406

#define  SYNCH_CANCEL_MSG         1416
#define  SYNCH_CANCEL_REPLY_MSG   1417

#define  FETCH_RELATED_MSG        1407
#define  RELATED_ALM_MSG          1430

#define  USER_OPERATION_MSG       1408
#define  USER_OP_REPLY_MSG        1409

//#define  USER_OP_WAIT_MSG        1418

#define  SET_FILTER_MSG           1410
#define  SET_FILTER_REPLY_MSG     1411

#define  COND_MODIFIED_MSG        1412
#define  COND_MOD_REPLY_MSG       1413
#define  MSG_SEND_TICKET          1417
#define  MSG_SEND_TICKET_REPLY    1418

#define  NETREE_REQ_MSG           1450
#define  GIVE_NETREE_MSG          1451

#define  MSG_FORWARD_ALARM        1421
#define  MSG_FORWARD_ALARM_ACK    1423
#define  MSG_COND_CHANGE_NOTIFY   1422



#define  ALARM_CONFIRM_MSG		  204 
#define  AM_NOTIFY_FMH_MSG        205
#define  ALARM_FWD_ACK_MSG		  209 
#define  FM_FORWARD_MSG		      212 

// Timer id
#define  TIMER_REGISTER_REPLY     1
#define  TIMER_CHECK_NEW_ALARM    2
#define  TIMER_CHECK_CAN_GRID     3
#define  TIMER_TEST               4
#define  TIMER_GET_NETREE         5

// Wait time in ms
#define  WAIT_REGISTRER_REPLY     30000   //30��
#define  SYNCH_DATA_NUMBER        10

//Control id
#define IDC_GRID_ACTIVE           0x1001
#define IDC_GRID_CONFIRM          0x1002
#define IDC_GRID_CANCEL           0x1003
#define IDC_STATIC_ACT_CRI        0x1004
#define IDC_STATIC_ACT_MAJ        0x1005
#define IDC_STATIC_ACT_MIN        0x1006
#define IDC_STATIC_ACT_WAR        0x1007
#define IDC_STATIC_ACT_UNK        0x1008
#define IDC_STATIC_CON_CRI        0x1009
#define IDC_STATIC_CON_MAJ        0x1010
#define IDC_STATIC_CON_MIN        0x1011
#define IDC_STATIC_CON_WAR        0x1012
#define IDC_STATIC_CON_UNK        0x1013
#define IDC_GRID_RELATED_ALM      0x1014
#define IDC_STATIC_CAN_CRI        0x1015
#define IDC_STATIC_CAN_MAJ        0x1016
#define IDC_STATIC_CAN_MIN        0x1017
#define IDC_STATIC_CAN_WAR        0x1018
#define IDC_STATIC_CAN_UNK        0x1019

//#define CDMST_SHOWWAIT            10000
//#define CDMST_SETMQSTATE          10001

#define REC_VIDEO_PORT_NUM  4 //������Ƶ�˿�
#define REC_AUDIO_PORT_NUM  1 //������Ƶ�˿�

#define		DOCTYPE_NORMAL  	_T("BCAlmM")
#define		DOCTYPE_RELATED		_T("RelatedM")

// Province
enum eProvince
{
    PROV_ANHUI    =   12,
    PROV_FUJIAN   =   14,
    PROV_GUOJIJU  =   1,
	PROV_HEILONGJIANG = 8,
};

// Stage     ��¼�����Ľ׶Σ�STAGE_REGISTERING, STAGE_SYNCHRONIZING, STAGE_RECEIVING
enum eStage
{
    STAGE_REGISTERING,
    STAGE_SYNCHRONIZING,
    STAGE_RECEIVING          
};

enum eMouseModes 
{ 
    MOUSE_NOTHING,  
    MOUSE_SIZING_GRID,
    MOUSE_OVER_GRID_SIZING
};

enum eGrids
{
    GRID_ACT =0,
    GRID_CON =1,
    GRID_CAN =2,
    GRID_NOTHING=3
};

enum eSoundStyle
{
	SS_NOTHING = 0,
    SS_REAL_TIME = 1,
    SS_SHUNYAN =2,
    SS_CHIXU =3
};

enum eInsert
{
    INSERT_FIRST =0,
    INSERT_LAST =1
};

enum eOpType
{
    OP_CANCEL_ALARM =1,
    OP_CONFIRM_ALARM =2,
    OP_MODIFY_SEVERITY =3,
	OP_FORWARD_ALARM = 4,
    OP_SEND_TICKET =5
};

enum eCopyDataType
{
    CD_CONNECT_MQ = 0,
	CD_SYNCHRONIZE =1,
    CD_SHOW_DEBUG_INFO = 2,
    CD_SHOW_DEBUG_ERROR =3,
    CD_SHOW_USER_INFO =4,
    CD_SHOW_USER_ERROR =5,
	CD_OPERATE_REPLY =6,
	CD_REGISTER = 7
};

typedef struct tagDISPCOLITEM
{
	CString strEnName;       //�澯�ֶ�Ӣ������
	CString strZhName;       //�澯�ֶ���ʾ����
    int     nCol;            //�澯�ֶζ�Ӧ����ʾ�к�
    int     nSn;             //�澯�ֶε�˳��ţ����ڱ����û�������
} DISPCOLITEM;
//typedef CList<DISPCOLITEM, DISPCOLITEM&> CDispColItemList;

typedef struct tagMESSAGEITEM
{
    long     nSn;            //�澯��ˮ��
    CTime    tmRecved;       //���յ��澯��ʱ��
    CString  strMsg;         //�澯��Ϣ
} MESSAGEITEM, FAR* LPMESSAGEITEM;


//USERLISTITEM
struct USERLISTITEM
{
    USERLISTITEM* pNext;
    int      nFrequency;

	char	  	UserID[50]	;
	char	  	User_num[50]	;
/*
	char	  	UserCreateTime	;
	char	  	UserStatus	;
	char	  	User_Name	;
	char	  	Pass_word	;
	char	  	PurviewID	;
	char	  	DepartmentID	;
	*/
//Add by 2005-11-2
	char ipAdd[20];//IP 
	int recCmdPort;//���տ������� 
	int recVideoPort[REC_VIDEO_PORT_NUM];//������Ƶ�˿� 4*3; 40001, 40003, 40005, 40007
	int recAudioPort[REC_AUDIO_PORT_NUM];//������Ƶ�˿�      50001

//End add

	//Add by 2005-11-22
	int UserLiveTimeNum;//�û��Ƿ���� 0=die ,> 0  //base = 5; +1=�������, -1=���һ�� 
	//End add

	int GroupID;//������	
	int IsOnLine;//1=���ߣ�0=no �Ƿ�����


	//������Ϣ
	int	room_id;//�����
	int table_id;//����
	int desk_id;//���Ӻ�

	int linkTypeInt;//�������ӷ�ʽ,�������䷽ʽ

    USERLISTITEM()
    {
        pNext = NULL;
        nFrequency = 1;
    }
};
//ROOMLISTITEM ���������Ϣ
struct ROOMLISTITEM
{
    ROOMLISTITEM* pNext;
    int      nFrequency;

	//DB ������ĵ�Ϊ��׼
	int id;
	CString	room_name	;
	int	room_status	;
	int	parent_id	;
	CString	member	;
	CString	room_master	;
	CString	title	;
	int	room_id	;

	CString	room_pwd	;
	int	room_max_num	;
	int	room_type	;
	CString room_roll_title;//������Ϣ
	CString room_create_time;//����ʱ��

	//Add by 2005-10-20
	CString	room_manager_list	;	//	������Ա�б�	*22*3434*5656*332
	CString	room_bad_person_list	;	//	���������	
	CString	room_friend_list	;	//	�������	
	//End by 2005-10-20

	//��̬��Ϣ
	int room_current_player_num;

    ROOMLISTITEM()
    {
        pNext = NULL;
        nFrequency = 1;
    }
};
//KINDLISTITEM
struct KINDLISTITEM
{
    KINDLISTITEM* pNext;
    int      nFrequency;

	int	kind_id;
	int	parent_id;
	CString	kind_name;
	int download_status; //�Ƿ����ش��෿����Ϣ


    KINDLISTITEM()
    {
        pNext = NULL;
        nFrequency = 1;
    }
} ;


/*ALARMITEM, FAR* LPALARMITEM*/ ;

typedef struct tagOPERATEALARM
{
	long     nSn;
	int      nGrid;
	int      nOpType;
}OPERATEALARM;

typedef struct tagOPERATIONITEM
{
    int      nUserId;
    CString  strUserName;
    CString  strOpTime;
    CString  strHost;
} OPERATIONITEM;

#endif // !defined(__MSGTYPE___HEAD_DEFINE____H___)
