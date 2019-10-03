#include "stdafx.h"
#include "CMessageSerializer.h"
#include "protobufHead.h"
MessageSerializer::MessageSerializer()
{
	GOOGLE_PROTOBUF_VERIFY_VERSION;
	memset(m_unserializeTable, 0, sizeof(m_unserializeTable));
}

MessageSerializer::~MessageSerializer()
{
	google::protobuf::ShutdownProtobufLibrary();
}

//初始化子协议信息
void MessageSerializer::initParamDescriptor()
{
	PlatPmd::PlatPmdCommand_descriptor();
	PlatPmd::CommonPmdCommand_CommonPmdEnum_descriptor();
	PlatPmd::NullPmdCommand_NullPmdEnum_descriptor();
	PlatPmd::LoginPmdCommand_LoginPmdEnum_descriptor();
	PlatPmd::GamePmdCommand_GamePmdEnum_descriptor();
	PlatPmd::DdzPmdCommand_DdzPmdEnum_descriptor();
}

const google::protobuf::Message* MessageSerializer::getMessageByCmdParam(unsigned char byCmd, unsigned char byParam)
{
	unsigned int uMsgID = (byCmd << 8) + byParam;
	return m_unserializeTable[uMsgID];
}

bool MessageSerializer::Register(const std::string& type_name, const std::string ns)
{
	if (type_name.empty() == true)
	{
		return false;
	}
	const std::string name = ns + "." + type_name;
	
	const google::protobuf::EnumDescriptor* byCmdEnum = google::protobuf::DescriptorPool::generated_pool()->FindEnumTypeByName(name);

	if (byCmdEnum == NULL) {
		return false;
	}

	for (int i = 0; i < byCmdEnum->value_count(); i++)
	{
		const google::protobuf::EnumValueDescriptor* item = byCmdEnum->value(i);
		const int c = item->number();
		std::size_t found = item->name().find_first_of("_");
		std::string cmdname = item->name().substr(found + 1);
		const std::string paramtype = ns + "." + cmdname + "Command" + "." + cmdname + "Enum";

		const google::protobuf::EnumDescriptor* byParamEnum = google::protobuf::DescriptorPool::generated_pool()->FindEnumTypeByName(paramtype);
		if (byParamEnum == NULL)
		{
			return false;
		}
		for (int i = 0; i < byParamEnum->value_count(); i++)
		{
			const google::protobuf::EnumValueDescriptor* item = byParamEnum->value(i);
			const int t = item->number();
			std::size_t found_ = item->name().find_first_of("_");
			std::string cmdname_ = item->name().substr(found_ + 1);
			const std::string paramtype = ns + "." + cmdname_;
			const google::protobuf::Descriptor* message = google::protobuf::DescriptorPool::generated_pool()->FindMessageTypeByName(paramtype);
			if (message != NULL)
			{
				if (Register(c, t, message) == false)
				{
					return false;
				}
			}
		}
	}
	return true;
}

bool MessageSerializer::Register(unsigned char byCmd, unsigned char byParam, const google::protobuf::Descriptor* typeDescriptor)
{
	if (typeDescriptor == NULL)
	{
		return false;
	}
	const google::protobuf::Message* prototype = google::protobuf::MessageFactory::generated_factory()->GetPrototype(typeDescriptor);
	if (m_unserializeTable[(byCmd << 8) + byParam] != NULL && m_unserializeTable[(byCmd << 8) + byParam] != prototype)
	{
		return false;
	}
	m_unserializeTable[(byCmd << 8) + byParam] = prototype;
	return true;
}

google::protobuf::Message* MessageSerializer::createMessage(unsigned char byCmd, unsigned char byParam) {
	const google::protobuf::Message* prototype = getMessageByCmdParam(byCmd, byParam);
	if (prototype == NULL) {
		return false;
	}
	google::protobuf::Message* message = prototype->New();
	return message;
}

google::protobuf::Message* MessageSerializer::createMessage() {
	return createMessage(PlatPmd::PlatPmdCommand::param_NullPmd, PlatPmd::NullPmdCommand::param_null_message);
}

void MessageSerializer::ReleaseMessage(google::protobuf::Message* pMsg) {
	if (NULL != pMsg)
	{
		pMsg->Clear();
		delete pMsg;
	}
}