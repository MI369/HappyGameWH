#pragma once

#if _MSC_VER>=1600
#define _CRT_SECURE_NO_WARNINGS
#else  
#endif 
//////////////////////////////////////////////////////////////////////////////////

#ifndef VC_EXTRALEAN
#define VC_EXTRALEAN
#endif

#if _MSC_VER>=1600

#ifndef WINVER
#define WINVER 0x0501
#endif

#ifndef _WIN32_WINNT
#define _WIN32_WINNT 0x0501
#endif						

#ifndef _WIN32_WINDOWS
#define _WIN32_WINDOWS 0x0501
#endif

#ifndef _WIN32_IE
#define _WIN32_IE 0x0601
#endif
#else  

#ifndef WINVER
#define WINVER 0x0501
#endif

#ifndef _WIN32_WINNT
#define _WIN32_WINNT 0x0501
#endif						

#ifndef _WIN32_WINDOWS
#define _WIN32_WINDOWS 0x0501
#endif

#ifndef _WIN32_IE
#define _WIN32_IE 0x0501
#endif

#endif 

#ifdef _DEBUG
#pragma optimize("",off) 
#endif // _DEBUG


#define _ATL_CSTRING_EXPLICIT_CONSTRUCTORS

#include <AfxWin.h>
#include <AfxExt.h>

#ifndef _AFX_NO_OLE_SUPPORT
#include <AfxOLE.h>
#include <AfxDisp.h>
#include <AfxoDlgs.h>
#endif

#include <AfxDtctl.h>
#ifndef _AFX_NO_AFXCMN_SUPPORT
#include <AfxCmn.h>
#endif

//////////////////////////////////////////////////////////////////////////////////
//链接代码

#ifndef _DEBUG
	#ifndef _UNICODE
		#pragma comment (lib,"../../链接库/Release/Ansi/ServiceCore.lib")
		#pragma comment (lib,"../../第三方库/json/lib/release/json_vc71_libmt.lib")
	#else
		#pragma comment (lib,"../../链接库/Release/unicode/ServiceCore.lib")
		#pragma comment (lib,"../../第三方库/json/lib/release/json_vc71_libmtU.lib")
	#endif
#else
	#ifndef _UNICODE
		#pragma comment (lib,"../../链接库/Debug/Ansi/ServiceCore.lib")
		#pragma comment (lib,"../../第三方库/json/lib/debug/json_vc71_libmtd.lib")
	#else
		#pragma comment (lib,"../../链接库/Debug/unicode/ServiceCore.lib")
		#pragma comment (lib,"../../第三方库/json/lib/debug/json_vc71_libmtdU.lib")
	#endif
#endif

//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////

