#ifndef GLOBAL_TEMPLATE_HEAD_FILE
#define GLOBAL_TEMPLATE_HEAD_FILE

#pragma once

/////////////////////////////////////////////////////////////////////////////////////////

//������Ϣ����
#define LEN_ERROR					256									//��Ϣ����

//�ӿ������������˵��
typedef void * (__cdecl ModuleCreateFunc)(const GUID & Gudi, DWORD dwInterfaceVer);

//���������ģ��
template <typename IModeluInterface> class CTempldateHelper
{
	//��������
protected:
	LPCTSTR							m_pszFuncName;						//��������
	LPCTSTR							m_pszModuleDll;						//�������
	HINSTANCE						m_hDllInstance;						//DLL ���
	REFGUID							m_GuidInterface;					//�ӿڱ�ʶ
	const DWORD						m_dwVersion;						//�ӿڰ汾
	IModeluInterface				* m_pIModeluInterface;				//ģ��ӿ�
	TCHAR							m_szErrorMsg[LEN_ERROR];			//������Ϣ

	//��������
public:
	//���캯��
	CTempldateHelper(REFGUID GuidInterface, DWORD dwVersion, LPCTSTR pszModuleDll, LPCTSTR pszFuncName)
		: m_GuidInterface(GuidInterface), m_dwVersion(dwVersion)
	{
		m_szErrorMsg[0]=0;
		m_hDllInstance=NULL;
		m_pIModeluInterface=NULL;
		m_pszFuncName=pszFuncName;
		m_pszModuleDll=pszModuleDll;
	}
	//���캯��
	CTempldateHelper(REFGUID Guid, DWORD dwVersion) : m_dwVersion(dwVersion), m_GuidInterface(Guid)
	{
		//��������
		m_szErrorMsg[0] = 0;

		//�ں���Ϣ
		m_hDllInstance = NULL;
		m_pIModeluInterface = NULL;

		//�������
		ZeroMemory(m_pszFuncName, sizeof(m_pszFuncName));
		ZeroMemory(m_pszModuleDll, sizeof(m_pszModuleDll));

		return;
	}
	//��������
	virtual ~CTempldateHelper(void)
	{
		CloseInstance();
	}

	//���ܺ���
public:
	//��������
	bool CreateInstance()
	{
		CloseInstance();
		try
		{
			//Ч�����
			ASSERT(m_pszFuncName[0] != 0);
			ASSERT(m_pszModuleDll[0] != 0);

			//���� DLL
			m_hDllInstance=LoadLibrary(m_pszModuleDll);
			if (m_hDllInstance==NULL) 
			{
				_snprintf(m_szErrorMsg,sizeof(m_szErrorMsg),TEXT("%s ����ʧ�ܣ�������룺%ld ��"),m_pszModuleDll,GetLastError());
				return false;
			}

			//Ѱ�ҵ�������
			ModuleCreateFunc * CreateFunc=(ModuleCreateFunc *)GetProcAddress(m_hDllInstance,m_pszFuncName);
			if (CreateFunc==NULL) 
			{
				_snprintf(m_szErrorMsg,sizeof(m_szErrorMsg),TEXT("%s ����������� %s �����ڣ�������룺%ld ��"),m_pszModuleDll,m_pszFuncName,GetLastError());
				return false;
			}

			//�������
			m_pIModeluInterface=(IModeluInterface *)CreateFunc(m_GuidInterface,m_dwVersion);
			if (m_pIModeluInterface==NULL) 
			{
				_snprintf(m_szErrorMsg,sizeof(m_szErrorMsg),TEXT("%s ����������� %s �������ʧ�� ��"),m_pszModuleDll,m_pszFuncName);
				return false;
			}
		}
		catch (...)	
		{ 
			_snprintf(m_szErrorMsg,sizeof(m_szErrorMsg),TEXT("%s ����������� %s �������쳣���� ��"),m_pszModuleDll,m_pszFuncName);
			return false;
		}

		return true;
	}
	//�رպ���
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
	//�Ƿ���Ч
	bool IsValid()
	{ 
		if (m_pIModeluInterface==NULL) return false;
		return m_pIModeluInterface->IsValid();
	}
	//��ȡ����
	LPCTSTR GetErrorMessage() { return m_szErrorMsg; }

	//��������
public:
	//ָ������
	IModeluInterface * operator->() { return GetInterface(); }
	//��ȡ�ӿ�
	IModeluInterface * GetInterface() { return m_pIModeluInterface; }
};
//////////////////////////////////////////////////////////////////////////////////
//���������

//�����������
#define DECLARE_CREATE_MODULE(OBJECT_NAME)																	\
extern "C" __declspec(dllexport) VOID * Create##OBJECT_NAME(REFGUID Guid, DWORD dwInterfaceVer)		\
{																											\
	C##OBJECT_NAME * p##OBJECT_NAME=NULL;																	\
	try																										\
	{																										\
		p##OBJECT_NAME=new C##OBJECT_NAME();																\
		if (p##OBJECT_NAME==NULL) throw TEXT("����ʧ��");													\
		VOID * pObject=p##OBJECT_NAME->QueryInterface(Guid,dwInterfaceVer);									\
		if (pObject==NULL) throw TEXT("�ӿڲ�ѯʧ��");														\
		return pObject;																						\
	}																										\
	catch (...) {}																							\
	SafeDelete(p##OBJECT_NAME);																				\
	return NULL;																							\
}

//����������
#define DECLARE_MODULE_DYNAMIC(OBJECT_NAME)																	\
class C##OBJECT_NAME##Helper : public CTempldateHelper<I##OBJECT_NAME>										\
{																											\
public:																										\
	C##OBJECT_NAME##Helper() : CTempldateHelper<I##OBJECT_NAME>(IID_I##OBJECT_NAME,VER_I##OBJECT_NAME) { }	\
};

//����������
#define DECLARE_MODULE_HELPER(OBJECT_NAME,MODULE_DLL_NAME,CREATE_FUNCTION_NAME)								\
class C##OBJECT_NAME##Helper : public CTempldateHelper<I##OBJECT_NAME>										\
{																											\
public:																										\
	C##OBJECT_NAME##Helper() : CTempldateHelper<I##OBJECT_NAME>(IID_I##OBJECT_NAME,							\
		VER_I##OBJECT_NAME,MODULE_DLL_NAME,CREATE_FUNCTION_NAME) { }										\
};

//////////////////////////////////////////////////////////////////////////
#endif