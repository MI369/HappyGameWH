//UDP SOCKET
/*��Ҫ����
*����֧�ֶ�˿�,���UDP_NUM·
*
*
*
*
*
*/
#define UDP_NUM   6 //���Խ���10· ��������,��Ƶ,����
extern "C" int FlyNetRecvFromIp(char *pBuf, int iLen,char *pszRemoteSockAddr, int uPort,  int udpID); 

extern "C"  int FlyNetRecvDataFromIpAndPort(char *pBuf, int iLen,char *pszRemoteSockAddr, int *uPort, int udpID);//Add by 2005-11-2
extern "C"  BOOL FlyNetIsSocket(int udpID);
//����ָ���˿� SOCKET
//����:�ɹ�,ʧ��
extern "C"  BOOL FlyNetCreate(UINT uSocketPort, int udpID);

//ɾ��socket
extern "C"  int FlyNetDestroy();
//������Ϣ��ָ��IP��PORT
extern "C"  int FlyNetSendToPort(const char *pBuf, int iLen, char *pszRemoteSockAddr,unsigned short uPort, int udpID) ;
//��ʼ��
extern "C"  int FlyNetInitializeSocket();
//���
extern "C"  int FlyNetCleanUpSocket();

