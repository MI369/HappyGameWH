#include "stdafx.h"
#include "WHStringUtils.h"


WHStringUtils::WHStringUtils()
{
}

WHStringUtils::~WHStringUtils()
{
}

vector<string> WHStringUtils::split(const string& str, const string& delim) {
	vector<string> res;
	if ("" == str) return res;
	//先将要切割的字符串从string类型转换为char*类型
	char * strs = new char[str.length() + 1]; //不要忘了
	strcpy(strs, str.c_str());

	char * d = new char[delim.length() + 1];
	strcpy(d, delim.c_str());

	char *p = strtok(strs, d);
	while (p) {
		string s = p; //分割得到的字符串转换为string类型
		res.push_back(s); //存入结果数组
		p = strtok(NULL, d);
	}

	return res;
}

std::wstring WHStringUtils::StringToWString(const std::string& str) {
	int num = MultiByteToWideChar(CP_UTF8, 0, str.c_str(), -1, NULL, 0);
	if (num <= 0) return std::wstring(L"");
	wchar_t *wide = new wchar_t[num];
	MultiByteToWideChar(CP_UTF8, 0, str.c_str(), -1, wide, num);
	std::wstring w_str(wide);
	delete[] wide;
	return w_str;
}

SCORE WHStringUtils::CreateNewUserID() {
	static int nUserCount = 0;
	nUserCount++;
	struct timeval tv;
	time_t clock;
	struct tm tm;
	SYSTEMTIME wtm;

	GetLocalTime(&wtm);
	tm.tm_year = wtm.wYear - 1900;
	tm.tm_mon = wtm.wMonth - 1;
	tm.tm_mday = wtm.wDay;
	tm.tm_hour = wtm.wHour;
	tm.tm_min = wtm.wMinute;
	tm.tm_sec = wtm.wSecond;
	tm.tm_isdst = -1;
	clock = mktime(&tm);
	tv.tv_sec = clock;
	tv.tv_usec = wtm.wMilliseconds * 1000;
	unsigned long long x = ((unsigned long long)tv.tv_sec * 1000 + (unsigned long long)tv.tv_usec / 1000);
	return (x * 100 + nUserCount % 100);
}

const std::string WHStringUtils::ws2s(const wstring& ws)
{
	locale old_loc = locale::global(locale(""));
	const wchar_t* src_wstr = ws.c_str();
	size_t buffer_size = ws.size() * 4 + 1;
	char* dst_str = new char[buffer_size];
	memset(dst_str, 0, buffer_size);
	size_t i = 0;
	wcstombs_s(&i, dst_str, buffer_size, src_wstr, buffer_size);
	string result = dst_str;
	delete[]dst_str;
	locale::global(old_loc);
	return result;
}

const std::wstring WHStringUtils::s2ws(const string& s)
{
	locale old_loc = locale::global(locale(""));
	const char* src_str = s.c_str();
	const size_t buffer_size = s.size() + 1;
	wchar_t* dst_wstr = new wchar_t[buffer_size];
	wmemset(dst_wstr, 0, buffer_size);
	size_t i = 0;
	mbstowcs_s(&i, dst_wstr, buffer_size, src_str, buffer_size);
	wstring result = dst_wstr;
	delete[]dst_wstr;
	locale::global(old_loc);
	return result;
}

const std::string WHStringUtils::ws2utf8(const wstring& src)
{
	wstring_convert<codecvt_utf8<wchar_t>> conv;
	return conv.to_bytes(src);
}

const wstring WHStringUtils::utf8_2_ws(const string& src)
{
	wstring_convert<codecvt_utf8<wchar_t> > conv;
	return conv.from_bytes(src);
}