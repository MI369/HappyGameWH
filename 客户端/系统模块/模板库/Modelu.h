#ifndef GLOBAL_TEMPLATE_HEAD_FILE
#define GLOBAL_TEMPLATE_HEAD_FILE

#pragma once

/////////////////////////////////////////////////////////////////////////////////////////

//错误信息长度
#define LEN_ERROR					256									//信息长度

//接口组件创建函数说明
typedef void * (__cdecl ModuleCreateFunc)(const GUID & Gudi, DWORD dwInterfaceVer);

//组件辅助类模板
template <typename IModeluInterface> class CTempldateHelper
{
	//变量定义
protected:
	LPCTSTR							m_pszFuncName;						//函数名字
	LPCTSTR							m_pszModuleDll;						//组件名字
	HINSTANCE						m_hDllInstance;						//DLL 句柄
	REFGUID							m_GuidInterface;					//接口标识
	const DWORD						m_dwVersion;						//接口版本
	IModeluInterface				* m_pIModeluInterface;				//模块接口
	TCHAR							m_szErrorMsg[LEN_ERROR];			//错误信息

	//函数定义
public:
	//构造函数
	CTempldateHelper(REFGUID GuidInterface, DWORD dwVersion, LPCTSTR pszModuleDll, LPCTSTR pszFuncName)
		: m_GuidInterface(GuidInterface), m_dwVersion(dwVersion)
	{
		m_szErrorMsg[0]=0;
		m_hDllInstance=NULL;
		m_pIModeluInterface=NULL;
		m_pszFuncName=pszFuncName;
		m_pszModuleDll=pszModuleDll;
	}
	//构造函数
	CTempldateHelper(REFGUID Guid, DWORD dwVersion) : m_dwVersion(dwVersion), m_GuidInterface(Guid)
	{
		//辅助变量
		m_szErrorMsg[0] = 0;

		//内核信息
		m_hDllInstance = NULL;
		m_pIModeluInterface = NULL;

		//组件属性
		ZeroMemory(m_pszFuncName, sizeof(m_pszFuncName));
		ZeroMemory(m_pszModuleDll, sizeof(m_pszModuleDll));

		return;
	}
	//析构函数
	virtual ~CTempldateHelper(void)
	{
		CloseInstance();
	}

	//功能函数
public:
	//创建函数
	bool CreateInstance()
	{
		CloseInstance();
		try
		{
			//效验参数
			ASSERT(m_pszFuncName[0] != 0);
			ASSERT(m_pszModuleDll[0] != 0);

			//加载 DLL
			m_hDllInstance=LoadLibrary(m_pszModuleDll);
			if (m_hDllInstance==NULL) 
			{
				_snprintf(m_szErrorMsg,sizeof(m_szErrorMsg),TEXT("%s 加载失败，错误代码：%ld ！"),m_pszModuleDll,GetLastError());
				return false;
			}

			//寻找导出函数
			ModuleCreateFunc * CreateFunc=(ModuleCreateFunc *)GetProcAddress(m_hDllInstance,m_pszFuncName);
			if (CreateFunc==NULL) 
			{
				_snprintf(m_szErrorMsg,sizeof(m_szErrorMsg),TEXT("%s 组件创建函数 %s 不存在，错误代码：%ld ！"),m_pszModuleDll,m_pszFuncName,GetLastError());
				return false;
			}

			//创建组件
			m_pIModeluInterface=(IModeluInterface *)CreateFunc(m_GuidInterface,m_dwVersion);
			if (m_pIModeluInterface==NULL) 
			{
				_snprintf(m_szErrorMsg,sizeof(m_szErrorMsg),TEXT("%s 组件创建函数 %s 创建组件失败 ！"),m_pszModuleDll,m_pszFuncName);
				return false;
			}
		}
		catch (...)	
		{ 
			_snprintf(m_szErrorMsg,sizeof(m_szErrorMsg),TEXT("%s 组件创建函数 %s 发生了异常错误 ！"),m_pszModuleDll,m_pszFuncName);
			return false;
		}

		return true;
	}
	//关闭函数
	bool CloseInstance()
	{
		if (m_pIModeluInterface!=NULL)
		{
			m_pIModeluInterface->Release();
			m_pIModeluInterface=NULL;
		}
		if (m_hDllInstance!=NULL)
		{
			FreeLibrary(m_hDllInstance);
			m_hDllInstance=m_hDllInstance;
		}
		return true;
	}
	//是否有效
	bool IsValid()
	{ 
		if (m_pIModeluInterface==NULL) return false;
		return m_pIModeluInterface->IsValid();
	}
	//获取错误
	LPCTSTR GetErrorMessage() { return m_szErrorMsg; }

	//辅助函数
public:
	//指针重载
	IModeluInterface * operator->() { return GetInterface(); }
	//获取接口
	IModeluInterface * GetInterface() { return m_pIModeluInterface; }
};
//////////////////////////////////////////////////////////////////////////////////
//组件辅助宏

//组件创建函数
#define DECLARE_CREATE_MODULE(OBJECT_NAME)																	\
extern "C" __declspec(dllexport) VOID * Create##OBJECT_NAME(REFGUID Guid, DWORD dwInterfaceVer)		\
{																											\
	C##OBJECT_NAME * p##OBJECT_NAME=NULL;																	\
	try																										\
	{																										\
		p##OBJECT_NAME=new C##OBJECT_NAME();																\
		if (p##OBJECT_NAME==NULL) throw TEXT("创建失败");													\
		VOID * pObject=p##OBJECT_NAME->QueryInterface(Guid,dwInterfaceVer);									\
		if (pObject==NULL) throw TEXT("接口查询失败");														\
		return pObject;																						\
	}																										\
	catch (...) {}																							\
	SafeDelete(p##OBJECT_NAME);																				\
	return NULL;																							\
}

//组件辅助类宏
#define DECLARE_MODULE_DYNAMIC(OBJECT_NAME)																	\
class C##OBJECT_NAME##Helper : public CTempldateHelper<I##OBJECT_NAME>										\
{																											\
public:																										\
	C##OBJECT_NAME##Helper() : CTempldateHelper<I##OBJECT_NAME>(IID_I##OBJECT_NAME,VER_I##OBJECT_NAME) { }	\
};

//组件辅助类宏
#define DECLARE_MODULE_HELPER(OBJECT_NAME,MODULE_DLL_NAME,CREATE_FUNCTION_NAME)								\
class C##OBJECT_NAME##Helper : public CTempldateHelper<I##OBJECT_NAME>										\
{																											\
public:																										\
	C##OBJECT_NAME##Helper() : CTempldateHelper<I##OBJECT_NAME>(IID_I##OBJECT_NAME,							\
		VER_I##OBJECT_NAME,MODULE_DLL_NAME,CREATE_FUNCTION_NAME) { }										\
};

//////////////////////////////////////////////////////////////////////////
#endif