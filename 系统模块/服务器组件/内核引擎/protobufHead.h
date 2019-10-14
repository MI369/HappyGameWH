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
#include "../../消息定义/pb/CommonPmd.pb.h"
#include "../../消息定义/pb/NullPmd.pb.h"
#include "../../消息定义/pb/LoginPmd.pb.h"
#include "../../消息定义/pb/GamePmd.pb.h"
#include "../../消息定义/pb/DdzPmd.pb.h"
#endif

#ifdef PROTO_CC
#include "../../消息定义/pb/CommonPmd.pb.cc"
#include "../../消息定义/pb/NullPmd.pb.cc"
#include "../../消息定义/pb/LoginPmd.pb.cc"
#include "../../消息定义/pb/GamePmd.pb.cc"
#include "../../消息定义/pb/DdzPmd.pb.cc"
#endif
