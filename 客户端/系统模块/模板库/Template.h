#ifndef TEMPLATE_HEAD_FILE
#define TEMPLATE_HEAD_FILE

/////////////////////////////////////////////////////////////////////////////////////////

//计算数组维数
#define CountArray(Array) (sizeof(Array)/sizeof(Array[0]))

//计算字符长度
#define CountString(String) ((UINT)((lstrlen(String)+1)*sizeof(TCHAR)))

//安全删除指针
#define  SafeDelete(pData)	{ try { delete pData; } catch (...) { } pData=NULL; } 

//安全删除指针
#define  SafeDeleteArray(pData)	{ try { delete [] pData; } catch (...) { } pData=NULL; } 

//接口释放
#define SafeRelease(pObject) { if (pObject!=NULL) { pObject->Release(); pObject=NULL; } }

//存储长度
#ifdef _UNICODE
#define CountStringBuffer CountStringBufferW
#else
#define CountStringBuffer CountStringBufferA
#endif

//存储长度
#define CountStringBufferA(String) ((UINT)((lstrlenA(String)+1)*sizeof(CHAR)))
#define CountStringBufferW(String) ((UINT)((lstrlenW(String)+1)*sizeof(WCHAR)))

/////////////////////////////////////////////////////////////////////////////////////////

//模板头文件
#include "Array.h"
#include "Modelu.h"
#include "Factory.h"
#include "Property.h"
#include "Packet.h"
#include "json/json.h"
#include "util/Util.h"

/////////////////////////////////////////////////////////////////////////////////////////

#endif