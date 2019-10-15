//UDPSendMsgDefine.h
/*
*����˵����UDP ��Ϣ�����ļ�

*/

//�������˿ں�
#define SERVER_PORT   8765
#define SERVER_RECV_VIDEO_PORT   8865
#define SERVER_SEND_VIDEO_PORT   8866
#define SERVER_SEND_CMD_PORT   8867

#define UDP_SOCKET_RECV_PORT   40001 //������Ƶ�˿�
#define UDP_SOCKET_RECV_PORT1   40003 //������Ƶ�˿�
#define UDP_SOCKET_RECV_PORT2   40005 //������Ƶ�˿�
#define UDP_SOCKET_RECV_PORT3   40007 //������Ƶ�˿�
//	int recAiduoPort[REC_AIDIO_PORT_NUM];//������Ƶ�˿�      
#define UDP_SOCKET_RECV_AUDIO_PORT  50001 //������Ƶ�˿�

#define UDP_SOCKET_REG_PORT     60001 //UDP ע��˿�

//#define HEART_CHECK_TIME  1000*20  //����������� 20s
#define HEART_CHECK_TIME  50  //����������� 20s

//pack flag
#define FLAG_AUDIO 0x3131
#define FLAG_VIDEO 0x3132
#define FLAG_CMD   0x3133
#define FLAG_MP3   0x3134 //Add by 2005-11-10
#define FLAG_FILE   0x3135 //Add by 2005-11-15�ļ�����


//��Ϣ
#define CMD_SEND_REG      1  //ע����Ϣ
#define CMD_SEND_HEART      2  //������Ϣ
#define CMD_SEND_UN_REG      3  //ȡ��ע����Ϣ
#define CMD_SEND_GET_TABLE_PLAYER_LIST      4  //��ȡtable�û��б���Ϣ

#define 	CMD_SEND_NET_TEST	5//	�����������
#define 	CMD_SEND_NET_TEST_BAK	6//	������������Ӧ
#define 	CMD_SEND_NET_P2PTRANS	7//	����������
#define 	CMD_SEND_NET_P2PSOMEONEWANTTOCALLYOU	8//	�Է���CALL��
#define 	CMD_SEND_NET_P2PTRASH	9//	P2P��Ӧ

#define SAFE_DELETE(p)  { if(p) { delete (p);     (p)=NULL; } }
#define SAFE_RELEASE(p) { if(p) { (p)->Release(); (p)=NULL; } }


#define VIDEO_SHOW_W    176
#define VIDEO_SHOW_H    144

#define QCIF_WIDTH  176
#define QCIF_HEIGHT 144

#define IMAGE_WIDTH       QCIF_WIDTH
#define IMAGE_HEIGHT      QCIF_HEIGHT

#define MAX_UDP_SIZE   1024*4 //1024*8   //̫С�����������