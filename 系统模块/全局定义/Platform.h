#ifndef PLATFORM_HEAD_FILE
#define PLATFORM_HEAD_FILE

//////////////////////////////////////////////////////////////////////////////////
//�����ļ�
#include <iostream>
//�����ļ�
#include "Macro.h"
#include "Define.h"

//�ṹ�ļ�
#include "Struct.h"
#include "Packet.h"
#include "Property.h"

//ģ���ļ�
#include "Array.h"
#include "Module.h"
#include "PacketAide.h"
#include "ServerRule.h"
#include "RightDefine.h"
#include "util/Util.h"

//////////////////////////////////////////////////////////////////////////////////

//����汾
#define VERSION_FRAME				PROCESS_VERSION(7,0,1)				//��ܰ汾
#define VERSION_PLAZA				PROCESS_VERSION(7,0,1)				//�����汾
#define VERSION_MOBILE_ANDROID		PROCESS_VERSION(7,0,1)				//�ֻ��汾
#define VERSION_MOBILE_IOS			PROCESS_VERSION(7,0,1)				//�ֻ��汾

//�汾����
#define VERSION_EFFICACY			0									//Ч��汾
#define VERSION_FRAME_SDK			INTERFACE_VERSION(7,1)				//��ܰ汾

//////////////////////////////////////////////////////////////////////////////////
//�����汾

#ifndef _DEBUG

//ƽ̨����
const TCHAR szProduct[]=TEXT("�������ƾ���ƽ̨");							//��Ʒ����
const TCHAR szPlazaClass[]=TEXT("WHSZCYWLQPGamePlaza");						//�㳡����
const TCHAR szProductKey[]=TEXT("WHSZCYWLQPGamePlatform");					//��Ʒ����

//��ַ����
const TCHAR szCookieUrl[]=TEXT("http://");					//��¼��ַ
const TCHAR szLogonServer[]=TEXT("ry.foxuc.net");						//��¼��ַ
const TCHAR szPlatformLink[]=TEXT("http://");				//ƽ̨��վ
const TCHAR szValidateKey[]=TEXT("RYSyncLoginKey");						//��֤��Կ
const TCHAR szValidateLink[]=TEXT("SyncLogin.aspx?userid=%d&time=%d&signature=%s&url=/"); //��֤��ַ 

#else

//////////////////////////////////////////////////////////////////////////////////
//�ڲ�汾

//ƽ̨����
const TCHAR szProduct[]=TEXT("�������ƾ���ƽ̨");						//��Ʒ����
const TCHAR szPlazaClass[]=TEXT("WHJHGamePlaza");						//�㳡����
const TCHAR szProductKey[]=TEXT("WHJHGamePlatform");					//��Ʒ����

//��ַ����
const TCHAR szCookieUrl[]=TEXT("http://ry.foxuc.net");					//��¼��ַ
const TCHAR szLogonServer[]=TEXT("ry.foxuc.net");						//��¼��ַ
const TCHAR szPlatformLink[]=TEXT("http://ry.foxuc.net");				//ƽ̨��վ
const TCHAR szValidateKey[]=TEXT("RYSyncLoginKey");						//��֤��Կ
const TCHAR szValidateLink[]=TEXT("SyncLogin.aspx?userid=%d&time=%d&signature=%s&url=/"); //��֤��ַ 

#endif

//////////////////////////////////////////////////////////////////////////////////

//���ݿ���
const TCHAR szPlatformDB[]=TEXT("QPPlatformDB");						//ƽ̨���ݿ�
const TCHAR szAccountsDB[]=TEXT("QPAccountsDB");						//�û����ݿ�
const TCHAR szTreasureDB[]=TEXT("QPTreasureDB");						//�Ƹ����ݿ�
const TCHAR szGameMatchDB[]=TEXT("QPGameMatchDB");					//�������ݿ�
const TCHAR szExerciseDB[]=TEXT("QPEducateDB"); 						//��ϰ���ݿ�
const TCHAR szGameScoreDB[]=TEXT("QPGameScoreDB");					//��ϰ���ݿ�

//////////////////////////////////////////////////////////////////////////////////

//��Ȩ��Ϣ
const TCHAR szCompilation[]=TEXT("ED56BE63-3026-465B-9DFC-17F595145F3D");

//////////////////////////////////////////////////////////////////////////////////

#endif