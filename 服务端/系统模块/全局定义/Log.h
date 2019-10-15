#pragma once
#include "stdio.h"
#include <stdarg.h>    ////�ñ�κ���������� 
#include <time.h>
#include <direct.h> 
#include <mmsystem.h>
#include <memory>
#pragma comment(lib, "winmm.lib")

// �����ֽ�wchar_t* ת�� ���ֽ�char*
static char* UnicodeToAnsi( const wchar_t* szStr )
{
	int nLen = WideCharToMultiByte( CP_ACP, 0, szStr, -1, NULL, 0, NULL, NULL );
	if (nLen == 0)
	{
		return NULL;
	}
	char* pResult = new char[nLen];
	WideCharToMultiByte( CP_ACP, 0, szStr, -1, pResult, nLen, NULL, NULL );
	return pResult;
}

// �����ֽ�char* ת�� ���ֽ�wchar_t*
static wchar_t* AnsiToUnicode( const char* szStr )
{
	wchar_t* pWCHAR=NULL;  
  
	//����pChar��ָ��Ķ��ֽ��ַ����൱�ڶ��ٸ����ֽ�  
	DWORD num=MultiByteToWideChar(CP_ACP,0,szStr,-1,NULL,0);  
  
	pWCHAR=(wchar_t*)malloc(num*sizeof(wchar_t));  
  
	if (pWCHAR==NULL)  
	{  
		free(pWCHAR);  
	}  
  
	memset(pWCHAR,0,num*sizeof(wchar_t));  
  
	//���ֽ�ת��Ϊ���ֽ�  
	MultiByteToWideChar(CP_ACP,0,szStr,-1,pWCHAR,num);  

	return pWCHAR;
}

// �����ֽ�char* ת�� ���ֽ�wchar_t*
static void AnsiToUnicode( const char* szStr , wchar_t *szDes)
{
	if (NULL == szDes) return;

	//����pChar��ָ��Ķ��ֽ��ַ����൱�ڶ��ٸ����ֽ�  
	DWORD num=MultiByteToWideChar(CP_ACP,0,szStr,-1,NULL,0);  
  
	//���ֽ�ת��Ϊ���ֽ�  
	MultiByteToWideChar(CP_ACP,0,szStr,-1,szDes,num);
}

static char* UnicodeToUtf8( const wchar_t* szStr )
{
	int nLen = WideCharToMultiByte(CP_UTF8, 0, szStr, -1, NULL, 0, NULL, NULL);
	if (nLen == 0)
	{
		return NULL;
	}
	char* pResult = new char[nLen];
	WideCharToMultiByte(CP_UTF8, 0, szStr, -1, pResult, nLen, NULL, NULL);
	return pResult;
}

static void Utf8ToUnicode( const char* szStr , wchar_t *szDes)
{
	if (NULL == szDes) return;

	//����pChar��ָ��Ķ��ֽ��ַ����൱�ڶ��ٸ����ֽ�  
	DWORD num=MultiByteToWideChar(CP_UTF8,0,szStr,-1,NULL,0);
  
	//���ֽ�ת��Ϊ���ֽ�
	MultiByteToWideChar(CP_UTF8,0,szStr,-1,szDes,num);
}

static void DebugPrintf(const char* pszFormat, ...)
{
	char sLog[1024] = {0};
	va_list args; 
	va_start(args, pszFormat); 
	_vsnprintf(sLog, 1024, pszFormat, args); 
	va_end(args); 
	OutputDebugStringA(sLog);
}

static void LogPrintf( const char* pszFormat, ...) 
//void LogPrintf( const WCHAR* pszFormat, ...) 
{ 
	//char *pTmpBuf = UnicodeToAnsi(pszFormat);

	char sLog[1024] = {0};
	va_list args; 
	va_start(args, pszFormat); 
	_vsnprintf(sLog, 1024, pszFormat, args); 
	va_end(args); 

	//va_start(args, pTmpBuf); 
	//_vsnprintf(sLog, 1024, pTmpBuf, args);
	//va_end(args); 


	SYSTEMTIME sysTime;
	GetLocalTime(&sysTime);
	char sInfo[1024] = {0};
	sprintf(sInfo, "open *** ��־��Ϣ %s ", sLog);
	//OutputDebugStringA(sInfo);
	//DebugPrintf(sLog);

	sprintf(sInfo, "%d-%d-%d-%d: %s \r\n",sysTime.wDay, sysTime.wHour, sysTime.wMinute, sysTime.wSecond, sLog );
	int nStatus;

	//����log�ļ���
	nStatus = _mkdir("Log"); 

	char szPath[MAX_PATH] = {0};
	sprintf(szPath, "Log//%d-%d-%d-ServerLog.txt", sysTime.wYear, sysTime.wDay, sysTime.wHour);

	DebugPrintf("openfile  %s",  szPath);

	//��׷�ӵķ�ʽ��log�ļ����µ�ServerLog.txt �ļ���������ļ��������򴴽�
	FILE *fp;
	fp = NULL;
	fp = fopen(szPath, "at+");
	if (fp)
	{
		fwrite(sInfo, strlen(sInfo), 1 , fp);
		
		DebugPrintf("openfile ���ļ��ɹ�");
	}
	else
	{
		DebugPrintf("openfile ���ļ�����");
	}
	fclose(fp);
}

static void WriteLog( TCHAR * pText, ... )
{
	
	// ��Ϣ����
	TCHAR szBuffer[1024] = { _T("") };

	// ת����Ϣ
	va_list VaList;	
	va_start(VaList,pText);
	_vstprintf_s(szBuffer, pText, VaList);	
	va_end(VaList);			

	// ���ļ�
	SYSTEMTIME sysTime;
	GetLocalTime(&sysTime);

	//����log�ļ���
	int nStatus = _mkdir("Log"); 

	char szPath[MAX_PATH] = {0};
	sprintf(szPath, "Log//%d-%d-%d-Log.txt", sysTime.wYear, sysTime.wDay, sysTime.wHour);

	FILE *pFile = NULL;
	pFile = fopen(szPath, "at+");
	if(pFile == NULL) return;

	// �任��Ϣ
	//CW2AEX<1024 * 2> szBufferA(szBuffer);
#ifdef UNICODE
	char* pResult = UnicodeToAnsi(szBuffer);
#else
	char* pResult = szBuffer;
#endif // !UNICODE
	

	// ��ȡʱ��
	SYSTEMTIME SystemTime;	
	GetLocalTime( &SystemTime );	
	fprintf( pFile, "%04d-%02d-%02d %02d:%02d:%02d��%s \n",  SystemTime.wYear, SystemTime.wMonth, SystemTime.wDay,  SystemTime.wHour, SystemTime.wMinute, SystemTime.wSecond,pResult );	
	fflush( pFile ); 
	fclose( pFile ); 
	delete pResult;
	pResult = NULL;
}

// debug log
static void _DebugLog(const char* func, int line, const char* pszFormat, ...)
{
	static BOOL con = false;
	static FILE* fp = 0;
	if (!con) {
		con = AllocConsole();
		freopen_s(&fp, "CONOUT$", "w", stdout);
		SetConsoleOutputCP(65001); //UTF8
		// Remove close button
		HWND handle = GetConsoleWindow();
		HMENU hMenu = GetSystemMenu(handle, false);
		// DeleteMenu(hMenu, SC_CLOSE, MF_BYCOMMAND);
    EnableMenuItem(hMenu, SC_CLOSE, MF_GRAYED);
	}
	char sLog[2048];
	va_list args; 
	va_start(args, pszFormat);
	int ret = _vsnprintf_s(sLog, sizeof(sLog), _TRUNCATE, pszFormat, args); 
	va_end(args);

	SYSTEMTIME SystemTime;
	GetLocalTime(&SystemTime);
	printf("%02d-%02d %02d:%02d:%02d:[%s:%d]%s %s\n",
		SystemTime.wMonth, SystemTime.wDay, SystemTime.wHour, SystemTime.wMinute, SystemTime.wSecond,
		func, line,
		ret < 0 ? "T]":"", sLog);
}

#define DebugLog(format, ...) _DebugLog(__FUNCTION__, __LINE__, format, __VA_ARGS__)

// debug log
static void DebugLogW(const wchar_t* pszFormat, ...)
{
	wchar_t sLog[4096];
	va_list args;
	va_start(args, pszFormat);
	int ret = vswprintf_s(sLog, sizeof(sLog), pszFormat, args);
	va_end(args);

	char* pLog = UnicodeToAnsi(sLog);
	if (!pLog) {
		printf("convert form u to a error");
		return ;
	}

	SYSTEMTIME SystemTime;
	GetLocalTime(&SystemTime);
	printf("%02d-%02d %02d:%02d:%02d:%s %s\n", SystemTime.wMonth, SystemTime.wDay, SystemTime.wHour, SystemTime.wMinute, SystemTime.wSecond, ret < 0 ? "T]":"", pLog);
	delete [] pLog;
}

#define UNI2ANC_S(s,d) char*d=UnicodeToAnsi((s));std::unique_ptr<char[],std::default_delete<char[]>> safe_##d(d)
#define UNI2UTF_S(s,d) char*d=UnicodeToUtf8((s));std::unique_ptr<char[],std::default_delete<char[]>> safe_##d(d)