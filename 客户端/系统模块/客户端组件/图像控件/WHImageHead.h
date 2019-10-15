#ifndef WH_IMAGE_HEAD_FILE
#define WH_IMAGE_HEAD_FILE

//////////////////////////////////////////////////////////////////////////////////
//�����ļ�

//MFC �ļ�
#include <GdiPlus.h>
#include <AtlImage.h>

//�����ռ�
using namespace Gdiplus;

//ƽ̨ͷ�ļ�
#include "..\..\ģ���\Template.h"
#include "..\..\�����ļ�\GlobalDef.h"

//////////////////////////////////////////////////////////////////////////////////
//��������

//��������
#ifndef WH_IMAGE_CLASS
	#ifdef  WH_IMAGE_DLL
		#define WH_IMAGE_CLASS _declspec(dllexport)
	#else
		#define WH_IMAGE_CLASS _declspec(dllimport)
	#endif
#endif

//ģ�鶨��
#ifndef _DEBUG
	#define WH_IMAGE_DLL_NAME		TEXT("WHImage.dll")					//�������
#else
	#define WH_IMAGE_DLL_NAME		TEXT("WHImage.dll")				//�������
#endif

//////////////////////////////////////////////////////////////////////////////////
//�����ļ�

#ifndef WH_IMAGE_DLL
	#include "BitImage.h"
	#include "GIFImage.h"
	#include "PngImage.h"
#endif

//////////////////////////////////////////////////////////////////////////////////

#endif