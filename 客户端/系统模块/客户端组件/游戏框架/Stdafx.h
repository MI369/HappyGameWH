#pragma once

#ifndef VC_EXTRALEAN
#define VC_EXTRALEAN		// �� Windows ͷ���ų�����ʹ�õ�����
#endif

// ���������ʹ��������ָ����ƽ̨֮ǰ��ƽ̨�����޸�����Ķ��塣
// �йز�ͬƽ̨����Ӧֵ��������Ϣ����ο� MSDN��
#ifndef WINVER				// ����ʹ���ض��� Windows 95 �� Windows NT 4 ����߰汾�Ĺ��ܡ�
#define WINVER 0x0501		// ���˸���Ϊ����� Windows 98 �� Windows 2000 ����߰汾�ĺ��ʵ�ֵ��
#endif

#ifndef _WIN32_WINNT		// ����ʹ���ض��� Windows NT 4 ����߰汾�Ĺ��ܡ�
#define _WIN32_WINNT 0x0501	// ���˸���Ϊ����� Windows 2000 ����߰汾�ĺ��ʵ�ֵ��
#endif						

#ifndef _WIN32_WINDOWS		// ����ʹ���ض��� Windows 98 ����߰汾�Ĺ��ܡ�
#define _WIN32_WINDOWS 0x0501 // ���˸���Ϊ����� Windows Me ����߰汾�ĺ��ʵ�ֵ��
#endif

#ifndef _WIN32_IE			// ����ʹ���ض��� IE 4.0 ����߰汾�Ĺ��ܡ�
#define _WIN32_IE 0x0400	// ���˸���Ϊ����� IE 5.0 ����߰汾�ĺ��ʵ�ֵ��
#endif

#define _ATL_CSTRING_EXPLICIT_CONSTRUCTORS	// ĳЩ CString ���캯����Ϊ��ʽ��

#include <afxwin.h>         // MFC ��������ͱ�׼���
#include <afxext.h>         // MFC ��չ

#ifndef _AFX_NO_OLE_SUPPORT
#include <afxole.h>         // MFC OLE ��
#include <afxodlgs.h>       // MFC OLE �Ի�����
#include <afxdisp.h>        // MFC �Զ�����
#endif // _AFX_NO_OLE_SUPPORT

#ifndef _AFX_NO_DB_SUPPORT
#include <afxdb.h>			// MFC ODBC ���ݿ���
#endif // _AFX_NO_DB_SUPPORT

#ifndef _AFX_NO_DAO_SUPPORT
#include <afxdao.h>			// MFC DAO ���ݿ���
#endif // _AFX_NO_DAO_SUPPORT

#include <afxdtctl.h>		// MFC �� Internet Explorer 4 �����ؼ���֧��
#ifndef _AFX_NO_AFXCMN_SUPPORT
#include <afxcmn.h>			// MFC �� Windows �����ؼ���֧��
#endif // _AFX_NO_AFXCMN_SUPPORT

#include "../../������/Include/flypublicdefine.h"
#define HOME_WEB_URL "http://www.cctvdodo.com/FlyGameWeb"

#include "..\..\�������\����ؼ�\SkinControls.h"

extern void WriteLog(CString strFileName, CString strText);

//////////////////////////////////////////////////////////////////////////

#ifndef _DEBUG
#ifndef _UNICODE
#pragma comment (lib,"../../���ӿ�/Release/Ansi/ComService.lib")
#pragma comment (lib,"../../���ӿ�/Release/Ansi/SkinControls.lib")
#pragma comment (lib,"../../���ӿ�/Release/Ansi/ClientShare.lib")
#pragma comment (lib,"../../���ӿ�/Release/Ansi/ChannelModule.lib")
#else
#pragma comment (lib,"../../���ӿ�/Release/Unicode/ComService.lib")
#pragma comment (lib,"../../���ӿ�/Release/Unicode/SkinControls.lib")
#pragma comment (lib,"../../���ӿ�/Release/Unicode/ClientShare.lib")
#pragma comment (lib,"../../���ӿ�/Release/Unicode/ChannelModule.lib")
#endif
#else
#ifndef _UNICODE
#pragma comment (lib,"../../���ӿ�/Debug/Ansi/ComService.lib")
#pragma comment (lib,"../../���ӿ�/Debug/Ansi/SkinControls.lib")
#pragma comment (lib,"../../���ӿ�/Debug/Ansi/ClientShare.lib")
#pragma comment (lib,"../../���ӿ�/Debug/Ansi/ChannelModule.lib")
#else
#pragma comment (lib,"../../���ӿ�/Debug/Unicode/ComService.lib")
#pragma comment (lib,"../../���ӿ�/Debug/Unicode/SkinControls.lib")
#pragma comment (lib,"../../���ӿ�/Debug/Unicode/ClientShare.lib")
#pragma comment (lib,"../../���ӿ�/Debug/Unicode/ChannelModule.lib")
#endif
#endif