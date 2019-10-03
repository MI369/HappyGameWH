#pragma once

#include "ServiceCoreHead.h"
#include <vector>
#include <iostream>
using namespace std;

class SERVICE_CORE_CLASS WHStringUtils
{
public:
	WHStringUtils();
	~WHStringUtils();

public:
	//·Ö¸î×Ö·û
	static vector<string> split(const string& str, const string& delim);

	std::wstring StringToWString(const std::string& str);

	SCORE CreateNewUserID();
};

