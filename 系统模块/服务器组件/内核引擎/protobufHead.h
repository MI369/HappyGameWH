#pragma once

#define PROTO_CC
#define PROTO_H
#include <google/protobuf/descriptor.h>
#include <google/protobuf/message.h>
#include <google/protobuf/reflection.h>
#include <google/protobuf/dynamic_message.h>
#include <google/protobuf/compiler/importer.h>
#include <google/protobuf/text_format.h>
#include <google/protobuf/message_lite.h>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/io/zero_copy_stream_impl_lite.h>

#ifdef PROTO_H
#include "../../��Ϣ����/pb/CommonPmd.pb.h"
#include "../../��Ϣ����/pb/NullPmd.pb.h"
#include "../../��Ϣ����/pb/LoginPmd.pb.h"
#include "../../��Ϣ����/pb/GamePmd.pb.h"
#include "../../��Ϣ����/pb/DdzPmd.pb.h"
#endif

#ifdef PROTO_CC
#include "../../��Ϣ����/pb/CommonPmd.pb.cc"
#include "../../��Ϣ����/pb/NullPmd.pb.cc"
#include "../../��Ϣ����/pb/LoginPmd.pb.cc"
#include "../../��Ϣ����/pb/GamePmd.pb.cc"
#include "../../��Ϣ����/pb/DdzPmd.pb.cc"
#endif
