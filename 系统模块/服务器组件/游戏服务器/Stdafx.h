#pragma once

//////////////////////////////////////////////////////////////////////////////////
//MFC �ļ�

#ifndef VC_EXTRALEAN
#define VC_EXTRALEAN
#endif

#ifndef WINVER
#define WINVER 0x0501
#endif

#ifndef _WIN32_WINNT
#define _WIN32_WINNT 0x0501
#endif						

#ifndef _WIN32_WINDOWS
#define _WIN32_WINDOWS 0x0410
#endif

#ifndef _WIN32_IE
#define _WIN32_IE 0x0400
#endif

#define _ATL_CSTRING_EXPLICIT_CONSTRUCTORS

#define _AFX_ALL_WARNINGS

#include <AfxWin.h>
#include <AfxExt.h>
#include <AfxDisp.h>
#include <AfxDtctl.h>

#ifndef _AFX_NO_AFXCMN_SUPPORT
#include <AfxCmn.h>
#endif

//////////////////////////////////////////////////////////////////////////////////
//�����ļ�

//ƽ̨����
#include "..\..\ȫ�ֶ���\Platform.h"
#include "..\..\��Ϣ����\CMD_Correspond.h"
#include "..\..\��Ϣ����\CMD_GameServer.h"

//�������
#include "..\..\�������\�������\ServiceCoreHead.h"
#include "..\..\���������\��Ϸ����\GameServiceHead.h"
#include "..\..\���������\��������\MatchServiceHead.h"
#include "..\..\���������\��Ϸ������\PersonalRoomServiceHead.h"
#include "..\..\���������\�ں�����\KernelEngineHead.h"
#include "..\..\���������\ģ�����\ModuleManagerHead.h"
#include "..\..\ȫ�ֶ���\Log.h"

//////////////////////////////////////////////////////////////////////////////////
//���Ӵ���

#ifndef _DEBUG
#ifndef _UNICODE
	#pragma comment (lib,"../../���ӿ�/Release/Ansi/ServiceCore.lib")
	#pragma comment (lib,"../../���ӿ�/Release/Ansi/GameService.lib")
	#pragma comment (lib,"../../���ӿ�/Release/Ansi/KernelEngine.lib")
	#pragma comment (lib,"../../���ӿ�/Release/Ansi/ModuleManager.lib")
#else
	#pragma comment (lib,"../../���ӿ�/Release/Unicode/ServiceCore.lib")
	#pragma comment (lib,"../../���ӿ�/Release/Unicode/GameService.lib")
	#pragma comment (lib,"../../���ӿ�/Release/Unicode/KernelEngine.lib")
	#pragma comment (lib,"../../���ӿ�/Release/Unicode/ModuleManager.lib")	
#endif
#else
#ifndef _UNICODE
	#pragma comment (lib,"../../���ӿ�/Debug/Ansi/ServiceCore.lib")
	#pragma comment (lib,"../../���ӿ�/Debug/Ansi/GameService.lib")
	#pragma comment (lib,"../../���ӿ�/Debug/Ansi/KernelEngine.lib")
	#pragma comment (lib,"../../���ӿ�/Debug/Ansi/ModuleManager.lib")
#else
	#pragma comment (lib,"../../���ӿ�/Debug/Unicode/ServiceCore.lib")
	#pragma comment (lib,"../../���ӿ�/Debug/Unicode/GameService.lib")
	#pragma comment (lib,"../../���ӿ�/Debug/Unicode/KernelEngine.lib")
	#pragma comment (lib,"../../���ӿ�/Debug/Unicode/ModuleManager.lib")	
#endif
#endif

//////////////////////////////////////////////////////////////////////////////////
