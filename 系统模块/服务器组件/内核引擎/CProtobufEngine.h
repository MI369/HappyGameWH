#pragma once
//#include "protobufHead.h"
#include "CMessageSerializer.h"
#include "KernelEngineHead.h"

class KERNEL_ENGINE_CLASS CProtobufEngine
{
public:
	static CProtobufEngine* getInstance() {
		if (m_protobufEngine == NULL) {
			m_protobufEngine = new CProtobufEngine();
			if (m_protobufEngine->initMessageSerializer() == false)
			{
				delete m_protobufEngine;
			}
		}
		return m_protobufEngine;
	}

private:
	CProtobufEngine();
	~CProtobufEngine();
private:
	bool registerMessage(MessageSerializer* serializer);
	
	bool initMessageSerializer();
public:
	bool decode(google::protobuf::Message* message, void* buff, int buffsize);

	bool decode(unsigned char byCmd, unsigned char byParam, void* buff, int buffsize);

	bool encode(google::protobuf::Message* message, void* buff);

	bool encode(unsigned char byCmd, unsigned char byParam, void* buff);

	MessageSerializer* getMessageSerializer() { return m_messageSerializer; }
private:
	MessageSerializer* m_messageSerializer;

private:
	static CProtobufEngine * m_protobufEngine;
};

