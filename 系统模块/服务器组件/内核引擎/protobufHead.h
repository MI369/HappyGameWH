#pragma once

#define PROTO_CC

#include "../../消息定义/pb/PlatPmd.pb.h"
#include "../../消息定义/pb/CommonPmd.pb.h"
#include "../../消息定义/pb/NullPmd.pb.h"
#include "../../消息定义/pb/LoginPmd.pb.h"
#include "../../消息定义/pb/GamePmd.pb.h"
#include "../../消息定义/pb/DdzPmd.pb.h"

#ifdef PROTO_CC
#include "../../消息定义/pb/PlatPmd.pb.cc"
#include "../../消息定义/pb/CommonPmd.pb.cc"
#include "../../消息定义/pb/NullPmd.pb.cc"
#include "../../消息定义/pb/LoginPmd.pb.cc"
#include "../../消息定义/pb/GamePmd.pb.cc"
#include "../../消息定义/pb/DdzPmd.pb.cc"
#endif
