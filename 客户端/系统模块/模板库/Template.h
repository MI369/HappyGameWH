#ifndef TEMPLATE_HEAD_FILE
#define TEMPLATE_HEAD_FILE

/////////////////////////////////////////////////////////////////////////////////////////

//��������ά��
#define CountArray(Array) (sizeof(Array)/sizeof(Array[0]))

//�����ַ�����
#define CountString(String) ((UINT)((lstrlen(String)+1)*sizeof(TCHAR)))

//��ȫɾ��ָ��
#define  SafeDelete(pData)	{ try { delete pData; } catch (...) { } pData=NULL; } 

//��ȫɾ��ָ��
#define  SafeDeleteArray(pData)	{ try { delete [] pData; } catch (...) { } pData=NULL; } 

//�ӿ��ͷ�
#define SafeRelease(pObject) { if (pObject!=NULL) { pObject->Release(); pObject=NULL; } }

//�洢����
#ifdef _UNICODE
#define CountStringBuffer CountStringBufferW
#else
#define CountStringBuffer CountStringBufferA
#endif

//�洢����
#define CountStringBufferA(String) ((UINT)((lstrlenA(String)+1)*sizeof(CHAR)))
#define CountStringBufferW(String) ((UINT)((lstrlenW(String)+1)*sizeof(WCHAR)))

/////////////////////////////////////////////////////////////////////////////////////////

//ģ��ͷ�ļ�
#include "Array.h"
#include "Modelu.h"
#include "Factory.h"
#include "Property.h"
#include "Packet.h"
#include "json/json.h"
#include "util/Util.h"

/////////////////////////////////////////////////////////////////////////////////////////

#endif