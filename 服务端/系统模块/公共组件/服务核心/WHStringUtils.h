#pragma once

#include "ServiceCoreHead.h"
#include <vector>
#include <iostream>
#include <codecvt>
using namespace std;

class SERVICE_CORE_CLASS WHStringUtils
{
public:
	WHStringUtils();
	~WHStringUtils();

public:
	//·Ö¸î×Ö·û
	static vector<string> split(const string& str, const string& delim);

	static std::wstring StringToWString(const std::string& str);

	static SCORE CreateNewUserID();

	static const std::string ws2s(const wstring& ws);

	static const std::wstring s2ws(const string& s);

	static const std::string ws2utf8(const wstring& src);

	static const wstring utf8_2_ws(const string& src);
};

