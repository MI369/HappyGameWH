#include "stdafx.h"
#include "CProtobufEngine.h"
//#include "protobufHead.h"
#include "TraceServiceManager.h"

CProtobufEngine* CProtobufEngine::m_protobufEngine = NULL;

CProtobufEngine::CProtobufEngine()
{
	m_messageSerializer = NULL;
}

CProtobufEngine::~CProtobufEngine()
{
	delete m_messageSerializer;
}

bool CProtobufEngine::initMessageSerializer()
{
	m_messageSerializer = new MessageSerializer();
	m_messageSerializer->initParamDescriptor();
	if (registerMessage(m_messageSerializer) == false) {
		g_TraceServiceManager.TraceString(TEXT("ע��protobuf��Ϣ����"), TraceLevel_Exception);
		return false;
	}
	return true;
}

//ע��protoЭ��(��ʼ�����,ӳ����Ϣ������serializer������)
bool CProtobufEngine::registerMessage(MessageSerializer* serializer)
{
	//��Э����Ϣ
	if (serializer->Register("PlatPmdCommand", "PlatPmd") == false)
		return false;
	
	return true;
}

bool CProtobufEngine::decode(google::protobuf::Message* message, void* buff, int buffsize) {
	if (message == NULL) {
		return false;
	}
	return message->ParseFromArray(buff, buffsize);
}

bool CProtobufEngine::decode(unsigned char byCmd, unsigned char byParam, void* buff, int buffsize) {
	google::protobuf::Message* message = m_messageSerializer->createMessage(byCmd, byParam);
	return decode(message,buff, buffsize);
}

bool CProtobufEngine::encode(google::protobuf::Message* message, void* buff) {
	if (message == NULL) {
		return false;
	}
	int buffsize = message->ByteSize();
	return message->SerializeToArray(buff, buffsize);
}

bool CProtobufEngine::encode(unsigned char byCmd, unsigned char byParam, void* buff) {
	google::protobuf::Message* message = m_messageSerializer->createMessage(byCmd, byParam);
	return encode(message,buff);
}
