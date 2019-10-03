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

	/** ע��protoЭ��.
	 * @param type_name ��Э��enum��Ϣ  ns �����ռ�
	 * @return true or false.
	*/
	bool Register(const std::string& type_name, const std::string ns);

	/** ����һ��Э��ע��.
	 * @param byCmd ��Э���  byParam ��Э���  typeDescriptor ����һ��Э����Ϣ
	 * @return true or false.
	*/
	bool Register(unsigned char byCmd, unsigned char byParam, const google::protobuf::Descriptor* typeDescriptor);

	/** ͨ��������Э��Ż�ȡЭ�����.
	 * @param byCmd ��Э���  byParam ��Э���
	 * @return google::protobuf::Message.
	*/
	const google::protobuf::Message* getMessageByCmdParam(unsigned char byCmd, unsigned char byParam);

	google::protobuf::Message* createMessage(unsigned char byCmd, unsigned char byParam);

	google::protobuf::Message* createMessage();

	void ReleaseMessage(google::protobuf::Message* pMsg);

private:
	//��������Э��ṹ����
	const google::protobuf::Message* m_unserializeTable[PROTO_MESSAGE_NUM];
};

