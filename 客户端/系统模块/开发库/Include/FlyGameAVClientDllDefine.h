

//����:��������
//����:
//���:
typedef int(*StartAVClient)( 
	HWND myhWnd,

												  char * serverIP,
												  int portInt,
												  int userID, 
												  int roomID, 
												  int tableID,
												  int deskID
												  );

//����:ֹͣ����
//����:
//���:
typedef int(*StopAVClient)();

//����:����ע����Ϣ
//����:
//���:
typedef int(*AVClientSendRegMsg)();

//����:����ȡ��ע����Ϣ
//����:
//���:
typedef int(*AVClientSendUnRegMsg)();

//����:��ȡͬDESK����б�
//����:
//���:
typedef int(*GetOneTablePlayerList)();


//����:����Զ��HWND
//����:
//���:
typedef int(*SetRemoteShowHWND)( 
												  HWND myhRemoteWnd,
												  int deskInt
												  );


//����:�����û��б�/����,������Ϣ,����
//����:
//���:
typedef int(*OpPlayerList)( int opType  );

//����:���Ʊ��ط���
//����:������Ƶ����;��������
//DATA_TYPE_AUDIO, DATA_TYPE_VIDEO;
//AV_OP_TYPE_CLOSE, AV_OP_TYPE_OPEN
//���:
typedef int(*OpNetSendMode)(int avType, int opType);

//����:����λ�ò�������
//����:
//���:
typedef int(*SetAVClientPostionValue)( 
												  int roomID, 
												  int tableID,
												  int deskID
												  );

