#pragma once
#include "KernelEngineHead.h"
#include <google/protobuf/descriptor.h>
#include <google/protobuf/message.h>
#include <google/protobuf/reflection.h>
#include <google/protobuf/dynamic_message.h>
#include <google/protobuf/compiler/importer.h>
#include <google/protobuf/text_format.h>

using namespace google::protobuf;
using namespace google::protobuf::compiler;

#define PROTO_MESSAGE_NUM 65536

class KERNEL_ENGINE_CLASS MessageSerializer
{
public:
	MessageSerializer();
	~MessageSerializer();

	void initParamDescriptor();

	/** 注册proto协议.
	 * @param type_name 主协议enum信息  ns 命名空间
	 * @return true or false.
	*/
	bool Register(const std::string& type_name, const std::string ns);

	/** 具体一条协议注册.
	 * @param byCmd 主协议号  byParam 子协议号  typeDescriptor 具体一条协议信息
	 * @return true or false.
	*/
	bool Register(unsigned char byCmd, unsigned char byParam, const google::protobuf::Descriptor* typeDescriptor);

	/** 通过主、子协议号获取协议对象.
	 * @param byCmd 主协议号  byParam 子协议号
	 * @return google::protobuf::Message.
	*/
	const google::protobuf::Message* getMessageByCmdParam(unsigned char byCmd, unsigned char byParam);

	google::protobuf::Message* createMessage(unsigned char byCmd, unsigned char byParam);

	google::protobuf::Message* createMessage();

	void ReleaseMessage(google::protobuf::Message* pMsg);

private:
	//保存所有协议结构对象
	const google::protobuf::Message* m_unserializeTable[PROTO_MESSAGE_NUM];
};

