/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.PlatPmd = (function() {

    /**
     * Namespace PlatPmd.
     * @exports PlatPmd
     * @namespace
     */
    var PlatPmd = {};

    PlatPmd.CommonPmdCommand = (function() {

        /**
         * Properties of a CommonPmdCommand.
         * @memberof PlatPmd
         * @interface ICommonPmdCommand
         */

        /**
         * Constructs a new CommonPmdCommand.
         * @memberof PlatPmd
         * @classdesc Represents a CommonPmdCommand.
         * @implements ICommonPmdCommand
         * @constructor
         * @param {PlatPmd.ICommonPmdCommand=} [properties] Properties to set
         */
        function CommonPmdCommand(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new CommonPmdCommand instance using the specified properties.
         * @function create
         * @memberof PlatPmd.CommonPmdCommand
         * @static
         * @param {PlatPmd.ICommonPmdCommand=} [properties] Properties to set
         * @returns {PlatPmd.CommonPmdCommand} CommonPmdCommand instance
         */
        CommonPmdCommand.create = function create(properties) {
            return new CommonPmdCommand(properties);
        };

        /**
         * Encodes the specified CommonPmdCommand message. Does not implicitly {@link PlatPmd.CommonPmdCommand.verify|verify} messages.
         * @function encode
         * @memberof PlatPmd.CommonPmdCommand
         * @static
         * @param {PlatPmd.ICommonPmdCommand} message CommonPmdCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonPmdCommand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified CommonPmdCommand message, length delimited. Does not implicitly {@link PlatPmd.CommonPmdCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlatPmd.CommonPmdCommand
         * @static
         * @param {PlatPmd.ICommonPmdCommand} message CommonPmdCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CommonPmdCommand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CommonPmdCommand message from the specified reader or buffer.
         * @function decode
         * @memberof PlatPmd.CommonPmdCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlatPmd.CommonPmdCommand} CommonPmdCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonPmdCommand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlatPmd.CommonPmdCommand();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CommonPmdCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlatPmd.CommonPmdCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlatPmd.CommonPmdCommand} CommonPmdCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CommonPmdCommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonPmdCommand message.
         * @function verify
         * @memberof PlatPmd.CommonPmdCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonPmdCommand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a CommonPmdCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlatPmd.CommonPmdCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlatPmd.CommonPmdCommand} CommonPmdCommand
         */
        CommonPmdCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.PlatPmd.CommonPmdCommand)
                return object;
            return new $root.PlatPmd.CommonPmdCommand();
        };

        /**
         * Creates a plain object from a CommonPmdCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlatPmd.CommonPmdCommand
         * @static
         * @param {PlatPmd.CommonPmdCommand} message CommonPmdCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CommonPmdCommand.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this CommonPmdCommand to JSON.
         * @function toJSON
         * @memberof PlatPmd.CommonPmdCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonPmdCommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * CommonPmdEnum enum.
         * @name PlatPmd.CommonPmdCommand.CommonPmdEnum
         * @enum {string}
         * @property {number} param_nullmessage=0 param_nullmessage value
         * @property {number} param_common_personinfo=1 param_common_personinfo value
         */
        CommonPmdCommand.CommonPmdEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "param_nullmessage"] = 0;
            values[valuesById[1] = "param_common_personinfo"] = 1;
            return values;
        })();

        return CommonPmdCommand;
    })();

    PlatPmd.common_personinfo = (function() {

        /**
         * Properties of a common_personinfo.
         * @memberof PlatPmd
         * @interface Icommon_personinfo
         * @property {number|null} [wfaceid] common_personinfo wfaceid
         * @property {number|null} [dwuserid] common_personinfo dwuserid
         * @property {number|null} [dwgameid] common_personinfo dwgameid
         * @property {number|null} [dwgroupid] common_personinfo dwgroupid
         * @property {number|null} [dwcustomid] common_personinfo dwcustomid
         * @property {number|null} [dwexperience] common_personinfo dwexperience
         * @property {number|Long|null} [lloveliness] common_personinfo lloveliness
         * @property {number|Long|null} [luserscore] common_personinfo luserscore
         * @property {number|Long|null} [luserinsure] common_personinfo luserinsure
         * @property {number|Long|null} [luseringot] common_personinfo luseringot
         * @property {number|null} [duserbeans] common_personinfo duserbeans
         * @property {Uint8Array|null} [cbgender] common_personinfo cbgender
         * @property {Uint8Array|null} [cbmoormachine] common_personinfo cbmoormachine
         * @property {string|null} [szaccounts] common_personinfo szaccounts
         * @property {string|null} [sznickname] common_personinfo sznickname
         * @property {string|null} [szdynamicpass] common_personinfo szdynamicpass
         * @property {string|null} [szgroupname] common_personinfo szgroupname
         * @property {Uint8Array|null} [cbinsureenabled] common_personinfo cbinsureenabled
         * @property {Uint8Array|null} [cbshowserverstatus] common_personinfo cbshowserverstatus
         * @property {Uint8Array|null} [cbisagent] common_personinfo cbisagent
         */

        /**
         * Constructs a new common_personinfo.
         * @memberof PlatPmd
         * @classdesc Represents a common_personinfo.
         * @implements Icommon_personinfo
         * @constructor
         * @param {PlatPmd.Icommon_personinfo=} [properties] Properties to set
         */
        function common_personinfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * common_personinfo wfaceid.
         * @member {number} wfaceid
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.wfaceid = 0;

        /**
         * common_personinfo dwuserid.
         * @member {number} dwuserid
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.dwuserid = 0;

        /**
         * common_personinfo dwgameid.
         * @member {number} dwgameid
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.dwgameid = 0;

        /**
         * common_personinfo dwgroupid.
         * @member {number} dwgroupid
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.dwgroupid = 0;

        /**
         * common_personinfo dwcustomid.
         * @member {number} dwcustomid
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.dwcustomid = 0;

        /**
         * common_personinfo dwexperience.
         * @member {number} dwexperience
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.dwexperience = 0;

        /**
         * common_personinfo lloveliness.
         * @member {number|Long} lloveliness
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.lloveliness = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * common_personinfo luserscore.
         * @member {number|Long} luserscore
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.luserscore = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * common_personinfo luserinsure.
         * @member {number|Long} luserinsure
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.luserinsure = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * common_personinfo luseringot.
         * @member {number|Long} luseringot
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.luseringot = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * common_personinfo duserbeans.
         * @member {number} duserbeans
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.duserbeans = 0;

        /**
         * common_personinfo cbgender.
         * @member {Uint8Array} cbgender
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.cbgender = $util.newBuffer([]);

        /**
         * common_personinfo cbmoormachine.
         * @member {Uint8Array} cbmoormachine
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.cbmoormachine = $util.newBuffer([]);

        /**
         * common_personinfo szaccounts.
         * @member {string} szaccounts
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.szaccounts = "";

        /**
         * common_personinfo sznickname.
         * @member {string} sznickname
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.sznickname = "";

        /**
         * common_personinfo szdynamicpass.
         * @member {string} szdynamicpass
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.szdynamicpass = "";

        /**
         * common_personinfo szgroupname.
         * @member {string} szgroupname
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.szgroupname = "";

        /**
         * common_personinfo cbinsureenabled.
         * @member {Uint8Array} cbinsureenabled
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.cbinsureenabled = $util.newBuffer([]);

        /**
         * common_personinfo cbshowserverstatus.
         * @member {Uint8Array} cbshowserverstatus
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.cbshowserverstatus = $util.newBuffer([]);

        /**
         * common_personinfo cbisagent.
         * @member {Uint8Array} cbisagent
         * @memberof PlatPmd.common_personinfo
         * @instance
         */
        common_personinfo.prototype.cbisagent = $util.newBuffer([]);

        /**
         * Creates a new common_personinfo instance using the specified properties.
         * @function create
         * @memberof PlatPmd.common_personinfo
         * @static
         * @param {PlatPmd.Icommon_personinfo=} [properties] Properties to set
         * @returns {PlatPmd.common_personinfo} common_personinfo instance
         */
        common_personinfo.create = function create(properties) {
            return new common_personinfo(properties);
        };

        /**
         * Encodes the specified common_personinfo message. Does not implicitly {@link PlatPmd.common_personinfo.verify|verify} messages.
         * @function encode
         * @memberof PlatPmd.common_personinfo
         * @static
         * @param {PlatPmd.Icommon_personinfo} message common_personinfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        common_personinfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wfaceid != null && message.hasOwnProperty("wfaceid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.wfaceid);
            if (message.dwuserid != null && message.hasOwnProperty("dwuserid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.dwuserid);
            if (message.dwgameid != null && message.hasOwnProperty("dwgameid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.dwgameid);
            if (message.dwgroupid != null && message.hasOwnProperty("dwgroupid"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.dwgroupid);
            if (message.dwcustomid != null && message.hasOwnProperty("dwcustomid"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.dwcustomid);
            if (message.dwexperience != null && message.hasOwnProperty("dwexperience"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.dwexperience);
            if (message.lloveliness != null && message.hasOwnProperty("lloveliness"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.lloveliness);
            if (message.luserscore != null && message.hasOwnProperty("luserscore"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.luserscore);
            if (message.luserinsure != null && message.hasOwnProperty("luserinsure"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.luserinsure);
            if (message.luseringot != null && message.hasOwnProperty("luseringot"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.luseringot);
            if (message.duserbeans != null && message.hasOwnProperty("duserbeans"))
                writer.uint32(/* id 11, wireType 1 =*/89).double(message.duserbeans);
            if (message.cbgender != null && message.hasOwnProperty("cbgender"))
                writer.uint32(/* id 12, wireType 2 =*/98).bytes(message.cbgender);
            if (message.cbmoormachine != null && message.hasOwnProperty("cbmoormachine"))
                writer.uint32(/* id 13, wireType 2 =*/106).bytes(message.cbmoormachine);
            if (message.szaccounts != null && message.hasOwnProperty("szaccounts"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.szaccounts);
            if (message.sznickname != null && message.hasOwnProperty("sznickname"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.sznickname);
            if (message.szdynamicpass != null && message.hasOwnProperty("szdynamicpass"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.szdynamicpass);
            if (message.szgroupname != null && message.hasOwnProperty("szgroupname"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.szgroupname);
            if (message.cbinsureenabled != null && message.hasOwnProperty("cbinsureenabled"))
                writer.uint32(/* id 18, wireType 2 =*/146).bytes(message.cbinsureenabled);
            if (message.cbshowserverstatus != null && message.hasOwnProperty("cbshowserverstatus"))
                writer.uint32(/* id 19, wireType 2 =*/154).bytes(message.cbshowserverstatus);
            if (message.cbisagent != null && message.hasOwnProperty("cbisagent"))
                writer.uint32(/* id 20, wireType 2 =*/162).bytes(message.cbisagent);
            return writer;
        };

        /**
         * Encodes the specified common_personinfo message, length delimited. Does not implicitly {@link PlatPmd.common_personinfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlatPmd.common_personinfo
         * @static
         * @param {PlatPmd.Icommon_personinfo} message common_personinfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        common_personinfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a common_personinfo message from the specified reader or buffer.
         * @function decode
         * @memberof PlatPmd.common_personinfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlatPmd.common_personinfo} common_personinfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        common_personinfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlatPmd.common_personinfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.wfaceid = reader.int32();
                    break;
                case 2:
                    message.dwuserid = reader.uint32();
                    break;
                case 3:
                    message.dwgameid = reader.uint32();
                    break;
                case 4:
                    message.dwgroupid = reader.uint32();
                    break;
                case 5:
                    message.dwcustomid = reader.uint32();
                    break;
                case 6:
                    message.dwexperience = reader.uint32();
                    break;
                case 7:
                    message.lloveliness = reader.uint64();
                    break;
                case 8:
                    message.luserscore = reader.uint64();
                    break;
                case 9:
                    message.luserinsure = reader.uint64();
                    break;
                case 10:
                    message.luseringot = reader.uint64();
                    break;
                case 11:
                    message.duserbeans = reader.double();
                    break;
                case 12:
                    message.cbgender = reader.bytes();
                    break;
                case 13:
                    message.cbmoormachine = reader.bytes();
                    break;
                case 14:
                    message.szaccounts = reader.string();
                    break;
                case 15:
                    message.sznickname = reader.string();
                    break;
                case 16:
                    message.szdynamicpass = reader.string();
                    break;
                case 17:
                    message.szgroupname = reader.string();
                    break;
                case 18:
                    message.cbinsureenabled = reader.bytes();
                    break;
                case 19:
                    message.cbshowserverstatus = reader.bytes();
                    break;
                case 20:
                    message.cbisagent = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a common_personinfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlatPmd.common_personinfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlatPmd.common_personinfo} common_personinfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        common_personinfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a common_personinfo message.
         * @function verify
         * @memberof PlatPmd.common_personinfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        common_personinfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.wfaceid != null && message.hasOwnProperty("wfaceid"))
                if (!$util.isInteger(message.wfaceid))
                    return "wfaceid: integer expected";
            if (message.dwuserid != null && message.hasOwnProperty("dwuserid"))
                if (!$util.isInteger(message.dwuserid))
                    return "dwuserid: integer expected";
            if (message.dwgameid != null && message.hasOwnProperty("dwgameid"))
                if (!$util.isInteger(message.dwgameid))
                    return "dwgameid: integer expected";
            if (message.dwgroupid != null && message.hasOwnProperty("dwgroupid"))
                if (!$util.isInteger(message.dwgroupid))
                    return "dwgroupid: integer expected";
            if (message.dwcustomid != null && message.hasOwnProperty("dwcustomid"))
                if (!$util.isInteger(message.dwcustomid))
                    return "dwcustomid: integer expected";
            if (message.dwexperience != null && message.hasOwnProperty("dwexperience"))
                if (!$util.isInteger(message.dwexperience))
                    return "dwexperience: integer expected";
            if (message.lloveliness != null && message.hasOwnProperty("lloveliness"))
                if (!$util.isInteger(message.lloveliness) && !(message.lloveliness && $util.isInteger(message.lloveliness.low) && $util.isInteger(message.lloveliness.high)))
                    return "lloveliness: integer|Long expected";
            if (message.luserscore != null && message.hasOwnProperty("luserscore"))
                if (!$util.isInteger(message.luserscore) && !(message.luserscore && $util.isInteger(message.luserscore.low) && $util.isInteger(message.luserscore.high)))
                    return "luserscore: integer|Long expected";
            if (message.luserinsure != null && message.hasOwnProperty("luserinsure"))
                if (!$util.isInteger(message.luserinsure) && !(message.luserinsure && $util.isInteger(message.luserinsure.low) && $util.isInteger(message.luserinsure.high)))
                    return "luserinsure: integer|Long expected";
            if (message.luseringot != null && message.hasOwnProperty("luseringot"))
                if (!$util.isInteger(message.luseringot) && !(message.luseringot && $util.isInteger(message.luseringot.low) && $util.isInteger(message.luseringot.high)))
                    return "luseringot: integer|Long expected";
            if (message.duserbeans != null && message.hasOwnProperty("duserbeans"))
                if (typeof message.duserbeans !== "number")
                    return "duserbeans: number expected";
            if (message.cbgender != null && message.hasOwnProperty("cbgender"))
                if (!(message.cbgender && typeof message.cbgender.length === "number" || $util.isString(message.cbgender)))
                    return "cbgender: buffer expected";
            if (message.cbmoormachine != null && message.hasOwnProperty("cbmoormachine"))
                if (!(message.cbmoormachine && typeof message.cbmoormachine.length === "number" || $util.isString(message.cbmoormachine)))
                    return "cbmoormachine: buffer expected";
            if (message.szaccounts != null && message.hasOwnProperty("szaccounts"))
                if (!$util.isString(message.szaccounts))
                    return "szaccounts: string expected";
            if (message.sznickname != null && message.hasOwnProperty("sznickname"))
                if (!$util.isString(message.sznickname))
                    return "sznickname: string expected";
            if (message.szdynamicpass != null && message.hasOwnProperty("szdynamicpass"))
                if (!$util.isString(message.szdynamicpass))
                    return "szdynamicpass: string expected";
            if (message.szgroupname != null && message.hasOwnProperty("szgroupname"))
                if (!$util.isString(message.szgroupname))
                    return "szgroupname: string expected";
            if (message.cbinsureenabled != null && message.hasOwnProperty("cbinsureenabled"))
                if (!(message.cbinsureenabled && typeof message.cbinsureenabled.length === "number" || $util.isString(message.cbinsureenabled)))
                    return "cbinsureenabled: buffer expected";
            if (message.cbshowserverstatus != null && message.hasOwnProperty("cbshowserverstatus"))
                if (!(message.cbshowserverstatus && typeof message.cbshowserverstatus.length === "number" || $util.isString(message.cbshowserverstatus)))
                    return "cbshowserverstatus: buffer expected";
            if (message.cbisagent != null && message.hasOwnProperty("cbisagent"))
                if (!(message.cbisagent && typeof message.cbisagent.length === "number" || $util.isString(message.cbisagent)))
                    return "cbisagent: buffer expected";
            return null;
        };

        /**
         * Creates a common_personinfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlatPmd.common_personinfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlatPmd.common_personinfo} common_personinfo
         */
        common_personinfo.fromObject = function fromObject(object) {
            if (object instanceof $root.PlatPmd.common_personinfo)
                return object;
            var message = new $root.PlatPmd.common_personinfo();
            if (object.wfaceid != null)
                message.wfaceid = object.wfaceid | 0;
            if (object.dwuserid != null)
                message.dwuserid = object.dwuserid >>> 0;
            if (object.dwgameid != null)
                message.dwgameid = object.dwgameid >>> 0;
            if (object.dwgroupid != null)
                message.dwgroupid = object.dwgroupid >>> 0;
            if (object.dwcustomid != null)
                message.dwcustomid = object.dwcustomid >>> 0;
            if (object.dwexperience != null)
                message.dwexperience = object.dwexperience >>> 0;
            if (object.lloveliness != null)
                if ($util.Long)
                    (message.lloveliness = $util.Long.fromValue(object.lloveliness)).unsigned = true;
                else if (typeof object.lloveliness === "string")
                    message.lloveliness = parseInt(object.lloveliness, 10);
                else if (typeof object.lloveliness === "number")
                    message.lloveliness = object.lloveliness;
                else if (typeof object.lloveliness === "object")
                    message.lloveliness = new $util.LongBits(object.lloveliness.low >>> 0, object.lloveliness.high >>> 0).toNumber(true);
            if (object.luserscore != null)
                if ($util.Long)
                    (message.luserscore = $util.Long.fromValue(object.luserscore)).unsigned = true;
                else if (typeof object.luserscore === "string")
                    message.luserscore = parseInt(object.luserscore, 10);
                else if (typeof object.luserscore === "number")
                    message.luserscore = object.luserscore;
                else if (typeof object.luserscore === "object")
                    message.luserscore = new $util.LongBits(object.luserscore.low >>> 0, object.luserscore.high >>> 0).toNumber(true);
            if (object.luserinsure != null)
                if ($util.Long)
                    (message.luserinsure = $util.Long.fromValue(object.luserinsure)).unsigned = true;
                else if (typeof object.luserinsure === "string")
                    message.luserinsure = parseInt(object.luserinsure, 10);
                else if (typeof object.luserinsure === "number")
                    message.luserinsure = object.luserinsure;
                else if (typeof object.luserinsure === "object")
                    message.luserinsure = new $util.LongBits(object.luserinsure.low >>> 0, object.luserinsure.high >>> 0).toNumber(true);
            if (object.luseringot != null)
                if ($util.Long)
                    (message.luseringot = $util.Long.fromValue(object.luseringot)).unsigned = true;
                else if (typeof object.luseringot === "string")
                    message.luseringot = parseInt(object.luseringot, 10);
                else if (typeof object.luseringot === "number")
                    message.luseringot = object.luseringot;
                else if (typeof object.luseringot === "object")
                    message.luseringot = new $util.LongBits(object.luseringot.low >>> 0, object.luseringot.high >>> 0).toNumber(true);
            if (object.duserbeans != null)
                message.duserbeans = Number(object.duserbeans);
            if (object.cbgender != null)
                if (typeof object.cbgender === "string")
                    $util.base64.decode(object.cbgender, message.cbgender = $util.newBuffer($util.base64.length(object.cbgender)), 0);
                else if (object.cbgender.length)
                    message.cbgender = object.cbgender;
            if (object.cbmoormachine != null)
                if (typeof object.cbmoormachine === "string")
                    $util.base64.decode(object.cbmoormachine, message.cbmoormachine = $util.newBuffer($util.base64.length(object.cbmoormachine)), 0);
                else if (object.cbmoormachine.length)
                    message.cbmoormachine = object.cbmoormachine;
            if (object.szaccounts != null)
                message.szaccounts = String(object.szaccounts);
            if (object.sznickname != null)
                message.sznickname = String(object.sznickname);
            if (object.szdynamicpass != null)
                message.szdynamicpass = String(object.szdynamicpass);
            if (object.szgroupname != null)
                message.szgroupname = String(object.szgroupname);
            if (object.cbinsureenabled != null)
                if (typeof object.cbinsureenabled === "string")
                    $util.base64.decode(object.cbinsureenabled, message.cbinsureenabled = $util.newBuffer($util.base64.length(object.cbinsureenabled)), 0);
                else if (object.cbinsureenabled.length)
                    message.cbinsureenabled = object.cbinsureenabled;
            if (object.cbshowserverstatus != null)
                if (typeof object.cbshowserverstatus === "string")
                    $util.base64.decode(object.cbshowserverstatus, message.cbshowserverstatus = $util.newBuffer($util.base64.length(object.cbshowserverstatus)), 0);
                else if (object.cbshowserverstatus.length)
                    message.cbshowserverstatus = object.cbshowserverstatus;
            if (object.cbisagent != null)
                if (typeof object.cbisagent === "string")
                    $util.base64.decode(object.cbisagent, message.cbisagent = $util.newBuffer($util.base64.length(object.cbisagent)), 0);
                else if (object.cbisagent.length)
                    message.cbisagent = object.cbisagent;
            return message;
        };

        /**
         * Creates a plain object from a common_personinfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlatPmd.common_personinfo
         * @static
         * @param {PlatPmd.common_personinfo} message common_personinfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        common_personinfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.wfaceid = 0;
                object.dwuserid = 0;
                object.dwgameid = 0;
                object.dwgroupid = 0;
                object.dwcustomid = 0;
                object.dwexperience = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lloveliness = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lloveliness = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.luserscore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.luserscore = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.luserinsure = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.luserinsure = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.luseringot = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.luseringot = options.longs === String ? "0" : 0;
                object.duserbeans = 0;
                if (options.bytes === String)
                    object.cbgender = "";
                else {
                    object.cbgender = [];
                    if (options.bytes !== Array)
                        object.cbgender = $util.newBuffer(object.cbgender);
                }
                if (options.bytes === String)
                    object.cbmoormachine = "";
                else {
                    object.cbmoormachine = [];
                    if (options.bytes !== Array)
                        object.cbmoormachine = $util.newBuffer(object.cbmoormachine);
                }
                object.szaccounts = "";
                object.sznickname = "";
                object.szdynamicpass = "";
                object.szgroupname = "";
                if (options.bytes === String)
                    object.cbinsureenabled = "";
                else {
                    object.cbinsureenabled = [];
                    if (options.bytes !== Array)
                        object.cbinsureenabled = $util.newBuffer(object.cbinsureenabled);
                }
                if (options.bytes === String)
                    object.cbshowserverstatus = "";
                else {
                    object.cbshowserverstatus = [];
                    if (options.bytes !== Array)
                        object.cbshowserverstatus = $util.newBuffer(object.cbshowserverstatus);
                }
                if (options.bytes === String)
                    object.cbisagent = "";
                else {
                    object.cbisagent = [];
                    if (options.bytes !== Array)
                        object.cbisagent = $util.newBuffer(object.cbisagent);
                }
            }
            if (message.wfaceid != null && message.hasOwnProperty("wfaceid"))
                object.wfaceid = message.wfaceid;
            if (message.dwuserid != null && message.hasOwnProperty("dwuserid"))
                object.dwuserid = message.dwuserid;
            if (message.dwgameid != null && message.hasOwnProperty("dwgameid"))
                object.dwgameid = message.dwgameid;
            if (message.dwgroupid != null && message.hasOwnProperty("dwgroupid"))
                object.dwgroupid = message.dwgroupid;
            if (message.dwcustomid != null && message.hasOwnProperty("dwcustomid"))
                object.dwcustomid = message.dwcustomid;
            if (message.dwexperience != null && message.hasOwnProperty("dwexperience"))
                object.dwexperience = message.dwexperience;
            if (message.lloveliness != null && message.hasOwnProperty("lloveliness"))
                if (typeof message.lloveliness === "number")
                    object.lloveliness = options.longs === String ? String(message.lloveliness) : message.lloveliness;
                else
                    object.lloveliness = options.longs === String ? $util.Long.prototype.toString.call(message.lloveliness) : options.longs === Number ? new $util.LongBits(message.lloveliness.low >>> 0, message.lloveliness.high >>> 0).toNumber(true) : message.lloveliness;
            if (message.luserscore != null && message.hasOwnProperty("luserscore"))
                if (typeof message.luserscore === "number")
                    object.luserscore = options.longs === String ? String(message.luserscore) : message.luserscore;
                else
                    object.luserscore = options.longs === String ? $util.Long.prototype.toString.call(message.luserscore) : options.longs === Number ? new $util.LongBits(message.luserscore.low >>> 0, message.luserscore.high >>> 0).toNumber(true) : message.luserscore;
            if (message.luserinsure != null && message.hasOwnProperty("luserinsure"))
                if (typeof message.luserinsure === "number")
                    object.luserinsure = options.longs === String ? String(message.luserinsure) : message.luserinsure;
                else
                    object.luserinsure = options.longs === String ? $util.Long.prototype.toString.call(message.luserinsure) : options.longs === Number ? new $util.LongBits(message.luserinsure.low >>> 0, message.luserinsure.high >>> 0).toNumber(true) : message.luserinsure;
            if (message.luseringot != null && message.hasOwnProperty("luseringot"))
                if (typeof message.luseringot === "number")
                    object.luseringot = options.longs === String ? String(message.luseringot) : message.luseringot;
                else
                    object.luseringot = options.longs === String ? $util.Long.prototype.toString.call(message.luseringot) : options.longs === Number ? new $util.LongBits(message.luseringot.low >>> 0, message.luseringot.high >>> 0).toNumber(true) : message.luseringot;
            if (message.duserbeans != null && message.hasOwnProperty("duserbeans"))
                object.duserbeans = options.json && !isFinite(message.duserbeans) ? String(message.duserbeans) : message.duserbeans;
            if (message.cbgender != null && message.hasOwnProperty("cbgender"))
                object.cbgender = options.bytes === String ? $util.base64.encode(message.cbgender, 0, message.cbgender.length) : options.bytes === Array ? Array.prototype.slice.call(message.cbgender) : message.cbgender;
            if (message.cbmoormachine != null && message.hasOwnProperty("cbmoormachine"))
                object.cbmoormachine = options.bytes === String ? $util.base64.encode(message.cbmoormachine, 0, message.cbmoormachine.length) : options.bytes === Array ? Array.prototype.slice.call(message.cbmoormachine) : message.cbmoormachine;
            if (message.szaccounts != null && message.hasOwnProperty("szaccounts"))
                object.szaccounts = message.szaccounts;
            if (message.sznickname != null && message.hasOwnProperty("sznickname"))
                object.sznickname = message.sznickname;
            if (message.szdynamicpass != null && message.hasOwnProperty("szdynamicpass"))
                object.szdynamicpass = message.szdynamicpass;
            if (message.szgroupname != null && message.hasOwnProperty("szgroupname"))
                object.szgroupname = message.szgroupname;
            if (message.cbinsureenabled != null && message.hasOwnProperty("cbinsureenabled"))
                object.cbinsureenabled = options.bytes === String ? $util.base64.encode(message.cbinsureenabled, 0, message.cbinsureenabled.length) : options.bytes === Array ? Array.prototype.slice.call(message.cbinsureenabled) : message.cbinsureenabled;
            if (message.cbshowserverstatus != null && message.hasOwnProperty("cbshowserverstatus"))
                object.cbshowserverstatus = options.bytes === String ? $util.base64.encode(message.cbshowserverstatus, 0, message.cbshowserverstatus.length) : options.bytes === Array ? Array.prototype.slice.call(message.cbshowserverstatus) : message.cbshowserverstatus;
            if (message.cbisagent != null && message.hasOwnProperty("cbisagent"))
                object.cbisagent = options.bytes === String ? $util.base64.encode(message.cbisagent, 0, message.cbisagent.length) : options.bytes === Array ? Array.prototype.slice.call(message.cbisagent) : message.cbisagent;
            return object;
        };

        /**
         * Converts this common_personinfo to JSON.
         * @function toJSON
         * @memberof PlatPmd.common_personinfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        common_personinfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return common_personinfo;
    })();

    PlatPmd.DdzPmdCommand = (function() {

        /**
         * Properties of a DdzPmdCommand.
         * @memberof PlatPmd
         * @interface IDdzPmdCommand
         */

        /**
         * Constructs a new DdzPmdCommand.
         * @memberof PlatPmd
         * @classdesc Represents a DdzPmdCommand.
         * @implements IDdzPmdCommand
         * @constructor
         * @param {PlatPmd.IDdzPmdCommand=} [properties] Properties to set
         */
        function DdzPmdCommand(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new DdzPmdCommand instance using the specified properties.
         * @function create
         * @memberof PlatPmd.DdzPmdCommand
         * @static
         * @param {PlatPmd.IDdzPmdCommand=} [properties] Properties to set
         * @returns {PlatPmd.DdzPmdCommand} DdzPmdCommand instance
         */
        DdzPmdCommand.create = function create(properties) {
            return new DdzPmdCommand(properties);
        };

        /**
         * Encodes the specified DdzPmdCommand message. Does not implicitly {@link PlatPmd.DdzPmdCommand.verify|verify} messages.
         * @function encode
         * @memberof PlatPmd.DdzPmdCommand
         * @static
         * @param {PlatPmd.IDdzPmdCommand} message DdzPmdCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DdzPmdCommand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified DdzPmdCommand message, length delimited. Does not implicitly {@link PlatPmd.DdzPmdCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlatPmd.DdzPmdCommand
         * @static
         * @param {PlatPmd.IDdzPmdCommand} message DdzPmdCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DdzPmdCommand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DdzPmdCommand message from the specified reader or buffer.
         * @function decode
         * @memberof PlatPmd.DdzPmdCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlatPmd.DdzPmdCommand} DdzPmdCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DdzPmdCommand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlatPmd.DdzPmdCommand();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DdzPmdCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlatPmd.DdzPmdCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlatPmd.DdzPmdCommand} DdzPmdCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DdzPmdCommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DdzPmdCommand message.
         * @function verify
         * @memberof PlatPmd.DdzPmdCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DdzPmdCommand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a DdzPmdCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlatPmd.DdzPmdCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlatPmd.DdzPmdCommand} DdzPmdCommand
         */
        DdzPmdCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.PlatPmd.DdzPmdCommand)
                return object;
            return new $root.PlatPmd.DdzPmdCommand();
        };

        /**
         * Creates a plain object from a DdzPmdCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlatPmd.DdzPmdCommand
         * @static
         * @param {PlatPmd.DdzPmdCommand} message DdzPmdCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DdzPmdCommand.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this DdzPmdCommand to JSON.
         * @function toJSON
         * @memberof PlatPmd.DdzPmdCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DdzPmdCommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * DdzPmdEnum enum.
         * @name PlatPmd.DdzPmdCommand.DdzPmdEnum
         * @enum {string}
         * @property {number} param_nullmessage=0 param_nullmessage value
         * @property {number} param_ddz_c2s=1 param_ddz_c2s value
         */
        DdzPmdCommand.DdzPmdEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "param_nullmessage"] = 0;
            values[valuesById[1] = "param_ddz_c2s"] = 1;
            return values;
        })();

        return DdzPmdCommand;
    })();

    PlatPmd.ddz_c2s = (function() {

        /**
         * Properties of a ddz_c2s.
         * @memberof PlatPmd
         * @interface Iddz_c2s
         * @property {PlatPmd.Inull_request|null} [reqcmd] ddz_c2s reqcmd
         */

        /**
         * Constructs a new ddz_c2s.
         * @memberof PlatPmd
         * @classdesc Represents a ddz_c2s.
         * @implements Iddz_c2s
         * @constructor
         * @param {PlatPmd.Iddz_c2s=} [properties] Properties to set
         */
        function ddz_c2s(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ddz_c2s reqcmd.
         * @member {PlatPmd.Inull_request|null|undefined} reqcmd
         * @memberof PlatPmd.ddz_c2s
         * @instance
         */
        ddz_c2s.prototype.reqcmd = null;

        /**
         * Creates a new ddz_c2s instance using the specified properties.
         * @function create
         * @memberof PlatPmd.ddz_c2s
         * @static
         * @param {PlatPmd.Iddz_c2s=} [properties] Properties to set
         * @returns {PlatPmd.ddz_c2s} ddz_c2s instance
         */
        ddz_c2s.create = function create(properties) {
            return new ddz_c2s(properties);
        };

        /**
         * Encodes the specified ddz_c2s message. Does not implicitly {@link PlatPmd.ddz_c2s.verify|verify} messages.
         * @function encode
         * @memberof PlatPmd.ddz_c2s
         * @static
         * @param {PlatPmd.Iddz_c2s} message ddz_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ddz_c2s.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd"))
                $root.PlatPmd.null_request.encode(message.reqcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ddz_c2s message, length delimited. Does not implicitly {@link PlatPmd.ddz_c2s.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlatPmd.ddz_c2s
         * @static
         * @param {PlatPmd.Iddz_c2s} message ddz_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ddz_c2s.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ddz_c2s message from the specified reader or buffer.
         * @function decode
         * @memberof PlatPmd.ddz_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlatPmd.ddz_c2s} ddz_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ddz_c2s.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlatPmd.ddz_c2s();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqcmd = $root.PlatPmd.null_request.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ddz_c2s message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlatPmd.ddz_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlatPmd.ddz_c2s} ddz_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ddz_c2s.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ddz_c2s message.
         * @function verify
         * @memberof PlatPmd.ddz_c2s
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ddz_c2s.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd")) {
                var error = $root.PlatPmd.null_request.verify(message.reqcmd);
                if (error)
                    return "reqcmd." + error;
            }
            return null;
        };

        /**
         * Creates a ddz_c2s message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlatPmd.ddz_c2s
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlatPmd.ddz_c2s} ddz_c2s
         */
        ddz_c2s.fromObject = function fromObject(object) {
            if (object instanceof $root.PlatPmd.ddz_c2s)
                return object;
            var message = new $root.PlatPmd.ddz_c2s();
            if (object.reqcmd != null) {
                if (typeof object.reqcmd !== "object")
                    throw TypeError(".PlatPmd.ddz_c2s.reqcmd: object expected");
                message.reqcmd = $root.PlatPmd.null_request.fromObject(object.reqcmd);
            }
            return message;
        };

        /**
         * Creates a plain object from a ddz_c2s message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlatPmd.ddz_c2s
         * @static
         * @param {PlatPmd.ddz_c2s} message ddz_c2s
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ddz_c2s.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.reqcmd = null;
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd"))
                object.reqcmd = $root.PlatPmd.null_request.toObject(message.reqcmd, options);
            return object;
        };

        /**
         * Converts this ddz_c2s to JSON.
         * @function toJSON
         * @memberof PlatPmd.ddz_c2s
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ddz_c2s.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ddz_c2s;
    })();

    PlatPmd.NullPmdCommand = (function() {

        /**
         * Properties of a NullPmdCommand.
         * @memberof PlatPmd
         * @interface INullPmdCommand
         */

        /**
         * Constructs a new NullPmdCommand.
         * @memberof PlatPmd
         * @classdesc Represents a NullPmdCommand.
         * @implements INullPmdCommand
         * @constructor
         * @param {PlatPmd.INullPmdCommand=} [properties] Properties to set
         */
        function NullPmdCommand(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new NullPmdCommand instance using the specified properties.
         * @function create
         * @memberof PlatPmd.NullPmdCommand
         * @static
         * @param {PlatPmd.INullPmdCommand=} [properties] Properties to set
         * @returns {PlatPmd.NullPmdCommand} NullPmdCommand instance
         */
        NullPmdCommand.create = function create(properties) {
            return new NullPmdCommand(properties);
        };

        /**
         * Encodes the specified NullPmdCommand message. Does not implicitly {@link PlatPmd.NullPmdCommand.verify|verify} messages.
         * @function encode
         * @memberof PlatPmd.NullPmdCommand
         * @static
         * @param {PlatPmd.INullPmdCommand} message NullPmdCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NullPmdCommand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified NullPmdCommand message, length delimited. Does not implicitly {@link PlatPmd.NullPmdCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlatPmd.NullPmdCommand
         * @static
         * @param {PlatPmd.INullPmdCommand} message NullPmdCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NullPmdCommand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NullPmdCommand message from the specified reader or buffer.
         * @function decode
         * @memberof PlatPmd.NullPmdCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlatPmd.NullPmdCommand} NullPmdCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NullPmdCommand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlatPmd.NullPmdCommand();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NullPmdCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlatPmd.NullPmdCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlatPmd.NullPmdCommand} NullPmdCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NullPmdCommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NullPmdCommand message.
         * @function verify
         * @memberof PlatPmd.NullPmdCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NullPmdCommand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a NullPmdCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlatPmd.NullPmdCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlatPmd.NullPmdCommand} NullPmdCommand
         */
        NullPmdCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.PlatPmd.NullPmdCommand)
                return object;
            return new $root.PlatPmd.NullPmdCommand();
        };

        /**
         * Creates a plain object from a NullPmdCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlatPmd.NullPmdCommand
         * @static
         * @param {PlatPmd.NullPmdCommand} message NullPmdCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NullPmdCommand.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this NullPmdCommand to JSON.
         * @function toJSON
         * @memberof PlatPmd.NullPmdCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NullPmdCommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * NullPmdEnum enum.
         * @name PlatPmd.NullPmdCommand.NullPmdEnum
         * @enum {string}
         * @property {number} param_nullmessage=0 param_nullmessage value
         * @property {number} param_null_nettick=1 param_null_nettick value
         * @property {number} param_null_message=2 param_null_message value
         * @property {number} param_null_command=3 param_null_command value
         * @property {number} param_null_request=4 param_null_request value
         * @property {number} param_null_response=5 param_null_response value
         * @property {number} param_null_indication=6 param_null_indication value
         */
        NullPmdCommand.NullPmdEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "param_nullmessage"] = 0;
            values[valuesById[1] = "param_null_nettick"] = 1;
            values[valuesById[2] = "param_null_message"] = 2;
            values[valuesById[3] = "param_null_command"] = 3;
            values[valuesById[4] = "param_null_request"] = 4;
            values[valuesById[5] = "param_null_response"] = 5;
            values[valuesById[6] = "param_null_indication"] = 6;
            return values;
        })();

        return NullPmdCommand;
    })();

    PlatPmd.null_nettick = (function() {

        /**
         * Properties of a null_nettick.
         * @memberof PlatPmd
         * @interface Inull_nettick
         * @property {number|null} [requesttime] null_nettick requesttime
         * @property {number|null} [mytime] null_nettick mytime
         */

        /**
         * Constructs a new null_nettick.
         * @memberof PlatPmd
         * @classdesc Represents a null_nettick.
         * @implements Inull_nettick
         * @constructor
         * @param {PlatPmd.Inull_nettick=} [properties] Properties to set
         */
        function null_nettick(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * null_nettick requesttime.
         * @member {number} requesttime
         * @memberof PlatPmd.null_nettick
         * @instance
         */
        null_nettick.prototype.requesttime = 0;

        /**
         * null_nettick mytime.
         * @member {number} mytime
         * @memberof PlatPmd.null_nettick
         * @instance
         */
        null_nettick.prototype.mytime = 0;

        /**
         * Creates a new null_nettick instance using the specified properties.
         * @function create
         * @memberof PlatPmd.null_nettick
         * @static
         * @param {PlatPmd.Inull_nettick=} [properties] Properties to set
         * @returns {PlatPmd.null_nettick} null_nettick instance
         */
        null_nettick.create = function create(properties) {
            return new null_nettick(properties);
        };

        /**
         * Encodes the specified null_nettick message. Does not implicitly {@link PlatPmd.null_nettick.verify|verify} messages.
         * @function encode
         * @memberof PlatPmd.null_nettick
         * @static
         * @param {PlatPmd.Inull_nettick} message null_nettick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        null_nettick.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.requesttime != null && message.hasOwnProperty("requesttime"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requesttime);
            if (message.mytime != null && message.hasOwnProperty("mytime"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.mytime);
            return writer;
        };

        /**
         * Encodes the specified null_nettick message, length delimited. Does not implicitly {@link PlatPmd.null_nettick.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlatPmd.null_nettick
         * @static
         * @param {PlatPmd.Inull_nettick} message null_nettick message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        null_nettick.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a null_nettick message from the specified reader or buffer.
         * @function decode
         * @memberof PlatPmd.null_nettick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlatPmd.null_nettick} null_nettick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        null_nettick.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlatPmd.null_nettick();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requesttime = reader.uint32();
                    break;
                case 2:
                    message.mytime = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a null_nettick message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlatPmd.null_nettick
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlatPmd.null_nettick} null_nettick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        null_nettick.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a null_nettick message.
         * @function verify
         * @memberof PlatPmd.null_nettick
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        null_nettick.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.requesttime != null && message.hasOwnProperty("requesttime"))
                if (!$util.isInteger(message.requesttime))
                    return "requesttime: integer expected";
            if (message.mytime != null && message.hasOwnProperty("mytime"))
                if (!$util.isInteger(message.mytime))
                    return "mytime: integer expected";
            return null;
        };

        /**
         * Creates a null_nettick message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlatPmd.null_nettick
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlatPmd.null_nettick} null_nettick
         */
        null_nettick.fromObject = function fromObject(object) {
            if (object instanceof $root.PlatPmd.null_nettick)
                return object;
            var message = new $root.PlatPmd.null_nettick();
            if (object.requesttime != null)
                message.requesttime = object.requesttime >>> 0;
            if (object.mytime != null)
                message.mytime = object.mytime >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a null_nettick message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlatPmd.null_nettick
         * @static
         * @param {PlatPmd.null_nettick} message null_nettick
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        null_nettick.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.requesttime = 0;
                object.mytime = 0;
            }
            if (message.requesttime != null && message.hasOwnProperty("requesttime"))
                object.requesttime = message.requesttime;
            if (message.mytime != null && message.hasOwnProperty("mytime"))
                object.mytime = message.mytime;
            return object;
        };

        /**
         * Converts this null_nettick to JSON.
         * @function toJSON
         * @memberof PlatPmd.null_nettick
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        null_nettick.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return null_nettick;
    })();

    PlatPmd.null_message = (function() {

        /**
         * Properties of a null_message.
         * @memberof PlatPmd
         * @interface Inull_message
         * @property {number|null} [mainID] null_message mainID
         * @property {number|null} [subID] null_message subID
         * @property {Uint8Array|null} [data] null_message data
         * @property {number|null} [sequence] null_message sequence
         * @property {number|Long|null} [fid] null_message fid
         * @property {number|Long|null} [protoType] null_message protoType
         * @property {number|null} [bitmask] null_message bitmask
         * @property {number|null} [time] null_message time
         */

        /**
         * Constructs a new null_message.
         * @memberof PlatPmd
         * @classdesc Represents a null_message.
         * @implements Inull_message
         * @constructor
         * @param {PlatPmd.Inull_message=} [properties] Properties to set
         */
        function null_message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * null_message mainID.
         * @member {number} mainID
         * @memberof PlatPmd.null_message
         * @instance
         */
        null_message.prototype.mainID = 0;

        /**
         * null_message subID.
         * @member {number} subID
         * @memberof PlatPmd.null_message
         * @instance
         */
        null_message.prototype.subID = 0;

        /**
         * null_message data.
         * @member {Uint8Array} data
         * @memberof PlatPmd.null_message
         * @instance
         */
        null_message.prototype.data = $util.newBuffer([]);

        /**
         * null_message sequence.
         * @member {number} sequence
         * @memberof PlatPmd.null_message
         * @instance
         */
        null_message.prototype.sequence = 0;

        /**
         * null_message fid.
         * @member {number|Long} fid
         * @memberof PlatPmd.null_message
         * @instance
         */
        null_message.prototype.fid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * null_message protoType.
         * @member {number|Long} protoType
         * @memberof PlatPmd.null_message
         * @instance
         */
        null_message.prototype.protoType = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * null_message bitmask.
         * @member {number} bitmask
         * @memberof PlatPmd.null_message
         * @instance
         */
        null_message.prototype.bitmask = 0;

        /**
         * null_message time.
         * @member {number} time
         * @memberof PlatPmd.null_message
         * @instance
         */
        null_message.prototype.time = 0;

        /**
         * Creates a new null_message instance using the specified properties.
         * @function create
         * @memberof PlatPmd.null_message
         * @static
         * @param {PlatPmd.Inull_message=} [properties] Properties to set
         * @returns {PlatPmd.null_message} null_message instance
         */
        null_message.create = function create(properties) {
            return new null_message(properties);
        };

        /**
         * Encodes the specified null_message message. Does not implicitly {@link PlatPmd.null_message.verify|verify} messages.
         * @function encode
         * @memberof PlatPmd.null_message
         * @static
         * @param {PlatPmd.Inull_message} message null_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        null_message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mainID != null && message.hasOwnProperty("mainID"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.mainID);
            if (message.subID != null && message.hasOwnProperty("subID"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.subID);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                writer.uint32(/* id 4, wireType 5 =*/37).fixed32(message.sequence);
            if (message.fid != null && message.hasOwnProperty("fid"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.fid);
            if (message.protoType != null && message.hasOwnProperty("protoType"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.protoType);
            if (message.bitmask != null && message.hasOwnProperty("bitmask"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.bitmask);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.time);
            return writer;
        };

        /**
         * Encodes the specified null_message message, length delimited. Does not implicitly {@link PlatPmd.null_message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlatPmd.null_message
         * @static
         * @param {PlatPmd.Inull_message} message null_message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        null_message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a null_message message from the specified reader or buffer.
         * @function decode
         * @memberof PlatPmd.null_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlatPmd.null_message} null_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        null_message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlatPmd.null_message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mainID = reader.uint32();
                    break;
                case 2:
                    message.subID = reader.uint32();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                case 4:
                    message.sequence = reader.fixed32();
                    break;
                case 5:
                    message.fid = reader.uint64();
                    break;
                case 6:
                    message.protoType = reader.uint64();
                    break;
                case 7:
                    message.bitmask = reader.uint32();
                    break;
                case 8:
                    message.time = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a null_message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlatPmd.null_message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlatPmd.null_message} null_message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        null_message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a null_message message.
         * @function verify
         * @memberof PlatPmd.null_message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        null_message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mainID != null && message.hasOwnProperty("mainID"))
                if (!$util.isInteger(message.mainID))
                    return "mainID: integer expected";
            if (message.subID != null && message.hasOwnProperty("subID"))
                if (!$util.isInteger(message.subID))
                    return "subID: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                if (!$util.isInteger(message.sequence))
                    return "sequence: integer expected";
            if (message.fid != null && message.hasOwnProperty("fid"))
                if (!$util.isInteger(message.fid) && !(message.fid && $util.isInteger(message.fid.low) && $util.isInteger(message.fid.high)))
                    return "fid: integer|Long expected";
            if (message.protoType != null && message.hasOwnProperty("protoType"))
                if (!$util.isInteger(message.protoType) && !(message.protoType && $util.isInteger(message.protoType.low) && $util.isInteger(message.protoType.high)))
                    return "protoType: integer|Long expected";
            if (message.bitmask != null && message.hasOwnProperty("bitmask"))
                if (!$util.isInteger(message.bitmask))
                    return "bitmask: integer expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time))
                    return "time: integer expected";
            return null;
        };

        /**
         * Creates a null_message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlatPmd.null_message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlatPmd.null_message} null_message
         */
        null_message.fromObject = function fromObject(object) {
            if (object instanceof $root.PlatPmd.null_message)
                return object;
            var message = new $root.PlatPmd.null_message();
            if (object.mainID != null)
                message.mainID = object.mainID >>> 0;
            if (object.subID != null)
                message.subID = object.subID >>> 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            if (object.sequence != null)
                message.sequence = object.sequence >>> 0;
            if (object.fid != null)
                if ($util.Long)
                    (message.fid = $util.Long.fromValue(object.fid)).unsigned = true;
                else if (typeof object.fid === "string")
                    message.fid = parseInt(object.fid, 10);
                else if (typeof object.fid === "number")
                    message.fid = object.fid;
                else if (typeof object.fid === "object")
                    message.fid = new $util.LongBits(object.fid.low >>> 0, object.fid.high >>> 0).toNumber(true);
            if (object.protoType != null)
                if ($util.Long)
                    (message.protoType = $util.Long.fromValue(object.protoType)).unsigned = true;
                else if (typeof object.protoType === "string")
                    message.protoType = parseInt(object.protoType, 10);
                else if (typeof object.protoType === "number")
                    message.protoType = object.protoType;
                else if (typeof object.protoType === "object")
                    message.protoType = new $util.LongBits(object.protoType.low >>> 0, object.protoType.high >>> 0).toNumber(true);
            if (object.bitmask != null)
                message.bitmask = object.bitmask >>> 0;
            if (object.time != null)
                message.time = object.time >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a null_message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlatPmd.null_message
         * @static
         * @param {PlatPmd.null_message} message null_message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        null_message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.mainID = 0;
                object.subID = 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.sequence = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.fid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.fid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.protoType = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.protoType = options.longs === String ? "0" : 0;
                object.bitmask = 0;
                object.time = 0;
            }
            if (message.mainID != null && message.hasOwnProperty("mainID"))
                object.mainID = message.mainID;
            if (message.subID != null && message.hasOwnProperty("subID"))
                object.subID = message.subID;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            if (message.sequence != null && message.hasOwnProperty("sequence"))
                object.sequence = message.sequence;
            if (message.fid != null && message.hasOwnProperty("fid"))
                if (typeof message.fid === "number")
                    object.fid = options.longs === String ? String(message.fid) : message.fid;
                else
                    object.fid = options.longs === String ? $util.Long.prototype.toString.call(message.fid) : options.longs === Number ? new $util.LongBits(message.fid.low >>> 0, message.fid.high >>> 0).toNumber(true) : message.fid;
            if (message.protoType != null && message.hasOwnProperty("protoType"))
                if (typeof message.protoType === "number")
                    object.protoType = options.longs === String ? String(message.protoType) : message.protoType;
                else
                    object.protoType = options.longs === String ? $util.Long.prototype.toString.call(message.protoType) : options.longs === Number ? new $util.LongBits(message.protoType.low >>> 0, message.protoType.high >>> 0).toNumber(true) : message.protoType;
            if (message.bitmask != null && message.hasOwnProperty("bitmask"))
                object.bitmask = message.bitmask;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            return object;
        };

        /**
         * Converts this null_message to JSON.
         * @function toJSON
         * @memberof PlatPmd.null_message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        null_message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return null_message;
    })();

    PlatPmd.null_command = (function() {

        /**
         * Properties of a null_command.
         * @memberof PlatPmd
         * @interface Inull_command
         */

        /**
         * Constructs a new null_command.
         * @memberof PlatPmd
         * @classdesc Represents a null_command.
         * @implements Inull_command
         * @constructor
         * @param {PlatPmd.Inull_command=} [properties] Properties to set
         */
        function null_command(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new null_command instance using the specified properties.
         * @function create
         * @memberof PlatPmd.null_command
         * @static
         * @param {PlatPmd.Inull_command=} [properties] Properties to set
         * @returns {PlatPmd.null_command} null_command instance
         */
        null_command.create = function create(properties) {
            return new null_command(properties);
        };

        /**
         * Encodes the specified null_command message. Does not implicitly {@link PlatPmd.null_command.verify|verify} messages.
         * @function encode
         * @memberof PlatPmd.null_command
         * @static
         * @param {PlatPmd.Inull_command} message null_command message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        null_command.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified null_command message, length delimited. Does not implicitly {@link PlatPmd.null_command.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlatPmd.null_command
         * @static
         * @param {PlatPmd.Inull_command} message null_command message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        null_command.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a null_command message from the specified reader or buffer.
         * @function decode
         * @memberof PlatPmd.null_command
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlatPmd.null_command} null_command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        null_command.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlatPmd.null_command();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a null_command message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlatPmd.null_command
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlatPmd.null_command} null_command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        null_command.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a null_command message.
         * @function verify
         * @memberof PlatPmd.null_command
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        null_command.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a null_command message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlatPmd.null_command
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlatPmd.null_command} null_command
         */
        null_command.fromObject = function fromObject(object) {
            if (object instanceof $root.PlatPmd.null_command)
                return object;
            return new $root.PlatPmd.null_command();
        };

        /**
         * Creates a plain object from a null_command message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlatPmd.null_command
         * @static
         * @param {PlatPmd.null_command} message null_command
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        null_command.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this null_command to JSON.
         * @function toJSON
         * @memberof PlatPmd.null_command
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        null_command.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return null_command;
    })();

    PlatPmd.null_request = (function() {

        /**
         * Properties of a null_request.
         * @memberof PlatPmd
         * @interface Inull_request
         */

        /**
         * Constructs a new null_request.
         * @memberof PlatPmd
         * @classdesc Represents a null_request.
         * @implements Inull_request
         * @constructor
         * @param {PlatPmd.Inull_request=} [properties] Properties to set
         */
        function null_request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new null_request instance using the specified properties.
         * @function create
         * @memberof PlatPmd.null_request
         * @static
         * @param {PlatPmd.Inull_request=} [properties] Properties to set
         * @returns {PlatPmd.null_request} null_request instance
         */
        null_request.create = function create(properties) {
            return new null_request(properties);
        };

        /**
         * Encodes the specified null_request message. Does not implicitly {@link PlatPmd.null_request.verify|verify} messages.
         * @function encode
         * @memberof PlatPmd.null_request
         * @static
         * @param {PlatPmd.Inull_request} message null_request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        null_request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified null_request message, length delimited. Does not implicitly {@link PlatPmd.null_request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlatPmd.null_request
         * @static
         * @param {PlatPmd.Inull_request} message null_request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        null_request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a null_request message from the specified reader or buffer.
         * @function decode
         * @memberof PlatPmd.null_request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlatPmd.null_request} null_request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        null_request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlatPmd.null_request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a null_request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlatPmd.null_request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlatPmd.null_request} null_request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        null_request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a null_request message.
         * @function verify
         * @memberof PlatPmd.null_request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        null_request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a null_request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlatPmd.null_request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlatPmd.null_request} null_request
         */
        null_request.fromObject = function fromObject(object) {
            if (object instanceof $root.PlatPmd.null_request)
                return object;
            return new $root.PlatPmd.null_request();
        };

        /**
         * Creates a plain object from a null_request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlatPmd.null_request
         * @static
         * @param {PlatPmd.null_request} message null_request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        null_request.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this null_request to JSON.
         * @function toJSON
         * @memberof PlatPmd.null_request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        null_request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return null_request;
    })();

    PlatPmd.null_response = (function() {

        /**
         * Properties of a null_response.
         * @memberof PlatPmd
         * @interface Inull_response
         * @property {boolean|null} [result] null_response result
         * @property {string|null} [errordescription] null_response errordescription
         * @property {boolean|null} [lastblock] null_response lastblock
         * @property {number|null} [blockindex] null_response blockindex
         */

        /**
         * Constructs a new null_response.
         * @memberof PlatPmd
         * @classdesc Represents a null_response.
         * @implements Inull_response
         * @constructor
         * @param {PlatPmd.Inull_response=} [properties] Properties to set
         */
        function null_response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * null_response result.
         * @member {boolean} result
         * @memberof PlatPmd.null_response
         * @instance
         */
        null_response.prototype.result = false;

        /**
         * null_response errordescription.
         * @member {string} errordescription
         * @memberof PlatPmd.null_response
         * @instance
         */
        null_response.prototype.errordescription = "";

        /**
         * null_response lastblock.
         * @member {boolean} lastblock
         * @memberof PlatPmd.null_response
         * @instance
         */
        null_response.prototype.lastblock = false;

        /**
         * null_response blockindex.
         * @member {number} blockindex
         * @memberof PlatPmd.null_response
         * @instance
         */
        null_response.prototype.blockindex = 0;

        /**
         * Creates a new null_response instance using the specified properties.
         * @function create
         * @memberof PlatPmd.null_response
         * @static
         * @param {PlatPmd.Inull_response=} [properties] Properties to set
         * @returns {PlatPmd.null_response} null_response instance
         */
        null_response.create = function create(properties) {
            return new null_response(properties);
        };

        /**
         * Encodes the specified null_response message. Does not implicitly {@link PlatPmd.null_response.verify|verify} messages.
         * @function encode
         * @memberof PlatPmd.null_response
         * @static
         * @param {PlatPmd.Inull_response} message null_response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        null_response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.result);
            if (message.errordescription != null && message.hasOwnProperty("errordescription"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.errordescription);
            if (message.lastblock != null && message.hasOwnProperty("lastblock"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.lastblock);
            if (message.blockindex != null && message.hasOwnProperty("blockindex"))
                writer.uint32(/* id 5, wireType 5 =*/45).fixed32(message.blockindex);
            return writer;
        };

        /**
         * Encodes the specified null_response message, length delimited. Does not implicitly {@link PlatPmd.null_response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlatPmd.null_response
         * @static
         * @param {PlatPmd.Inull_response} message null_response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        null_response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a null_response message from the specified reader or buffer.
         * @function decode
         * @memberof PlatPmd.null_response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlatPmd.null_response} null_response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        null_response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlatPmd.null_response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.result = reader.bool();
                    break;
                case 3:
                    message.errordescription = reader.string();
                    break;
                case 4:
                    message.lastblock = reader.bool();
                    break;
                case 5:
                    message.blockindex = reader.fixed32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a null_response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlatPmd.null_response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlatPmd.null_response} null_response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        null_response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a null_response message.
         * @function verify
         * @memberof PlatPmd.null_response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        null_response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (typeof message.result !== "boolean")
                    return "result: boolean expected";
            if (message.errordescription != null && message.hasOwnProperty("errordescription"))
                if (!$util.isString(message.errordescription))
                    return "errordescription: string expected";
            if (message.lastblock != null && message.hasOwnProperty("lastblock"))
                if (typeof message.lastblock !== "boolean")
                    return "lastblock: boolean expected";
            if (message.blockindex != null && message.hasOwnProperty("blockindex"))
                if (!$util.isInteger(message.blockindex))
                    return "blockindex: integer expected";
            return null;
        };

        /**
         * Creates a null_response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlatPmd.null_response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlatPmd.null_response} null_response
         */
        null_response.fromObject = function fromObject(object) {
            if (object instanceof $root.PlatPmd.null_response)
                return object;
            var message = new $root.PlatPmd.null_response();
            if (object.result != null)
                message.result = Boolean(object.result);
            if (object.errordescription != null)
                message.errordescription = String(object.errordescription);
            if (object.lastblock != null)
                message.lastblock = Boolean(object.lastblock);
            if (object.blockindex != null)
                message.blockindex = object.blockindex >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a null_response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlatPmd.null_response
         * @static
         * @param {PlatPmd.null_response} message null_response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        null_response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = false;
                object.errordescription = "";
                object.lastblock = false;
                object.blockindex = 0;
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.errordescription != null && message.hasOwnProperty("errordescription"))
                object.errordescription = message.errordescription;
            if (message.lastblock != null && message.hasOwnProperty("lastblock"))
                object.lastblock = message.lastblock;
            if (message.blockindex != null && message.hasOwnProperty("blockindex"))
                object.blockindex = message.blockindex;
            return object;
        };

        /**
         * Converts this null_response to JSON.
         * @function toJSON
         * @memberof PlatPmd.null_response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        null_response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return null_response;
    })();

    PlatPmd.null_indication = (function() {

        /**
         * Properties of a null_indication.
         * @memberof PlatPmd
         * @interface Inull_indication
         */

        /**
         * Constructs a new null_indication.
         * @memberof PlatPmd
         * @classdesc Represents a null_indication.
         * @implements Inull_indication
         * @constructor
         * @param {PlatPmd.Inull_indication=} [properties] Properties to set
         */
        function null_indication(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new null_indication instance using the specified properties.
         * @function create
         * @memberof PlatPmd.null_indication
         * @static
         * @param {PlatPmd.Inull_indication=} [properties] Properties to set
         * @returns {PlatPmd.null_indication} null_indication instance
         */
        null_indication.create = function create(properties) {
            return new null_indication(properties);
        };

        /**
         * Encodes the specified null_indication message. Does not implicitly {@link PlatPmd.null_indication.verify|verify} messages.
         * @function encode
         * @memberof PlatPmd.null_indication
         * @static
         * @param {PlatPmd.Inull_indication} message null_indication message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        null_indication.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified null_indication message, length delimited. Does not implicitly {@link PlatPmd.null_indication.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlatPmd.null_indication
         * @static
         * @param {PlatPmd.Inull_indication} message null_indication message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        null_indication.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a null_indication message from the specified reader or buffer.
         * @function decode
         * @memberof PlatPmd.null_indication
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlatPmd.null_indication} null_indication
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        null_indication.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlatPmd.null_indication();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a null_indication message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlatPmd.null_indication
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlatPmd.null_indication} null_indication
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        null_indication.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a null_indication message.
         * @function verify
         * @memberof PlatPmd.null_indication
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        null_indication.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a null_indication message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlatPmd.null_indication
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlatPmd.null_indication} null_indication
         */
        null_indication.fromObject = function fromObject(object) {
            if (object instanceof $root.PlatPmd.null_indication)
                return object;
            return new $root.PlatPmd.null_indication();
        };

        /**
         * Creates a plain object from a null_indication message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlatPmd.null_indication
         * @static
         * @param {PlatPmd.null_indication} message null_indication
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        null_indication.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this null_indication to JSON.
         * @function toJSON
         * @memberof PlatPmd.null_indication
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        null_indication.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return null_indication;
    })();

    PlatPmd.GamePmdCommand = (function() {

        /**
         * Properties of a GamePmdCommand.
         * @memberof PlatPmd
         * @interface IGamePmdCommand
         */

        /**
         * Constructs a new GamePmdCommand.
         * @memberof PlatPmd
         * @classdesc Represents a GamePmdCommand.
         * @implements IGamePmdCommand
         * @constructor
         * @param {PlatPmd.IGamePmdCommand=} [properties] Properties to set
         */
        function GamePmdCommand(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new GamePmdCommand instance using the specified properties.
         * @function create
         * @memberof PlatPmd.GamePmdCommand
         * @static
         * @param {PlatPmd.IGamePmdCommand=} [properties] Properties to set
         * @returns {PlatPmd.GamePmdCommand} GamePmdCommand instance
         */
        GamePmdCommand.create = function create(properties) {
            return new GamePmdCommand(properties);
        };

        /**
         * Encodes the specified GamePmdCommand message. Does not implicitly {@link PlatPmd.GamePmdCommand.verify|verify} messages.
         * @function encode
         * @memberof PlatPmd.GamePmdCommand
         * @static
         * @param {PlatPmd.IGamePmdCommand} message GamePmdCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePmdCommand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified GamePmdCommand message, length delimited. Does not implicitly {@link PlatPmd.GamePmdCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlatPmd.GamePmdCommand
         * @static
         * @param {PlatPmd.IGamePmdCommand} message GamePmdCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GamePmdCommand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GamePmdCommand message from the specified reader or buffer.
         * @function decode
         * @memberof PlatPmd.GamePmdCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlatPmd.GamePmdCommand} GamePmdCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePmdCommand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlatPmd.GamePmdCommand();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GamePmdCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlatPmd.GamePmdCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlatPmd.GamePmdCommand} GamePmdCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GamePmdCommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GamePmdCommand message.
         * @function verify
         * @memberof PlatPmd.GamePmdCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GamePmdCommand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a GamePmdCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlatPmd.GamePmdCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlatPmd.GamePmdCommand} GamePmdCommand
         */
        GamePmdCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.PlatPmd.GamePmdCommand)
                return object;
            return new $root.PlatPmd.GamePmdCommand();
        };

        /**
         * Creates a plain object from a GamePmdCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlatPmd.GamePmdCommand
         * @static
         * @param {PlatPmd.GamePmdCommand} message GamePmdCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GamePmdCommand.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this GamePmdCommand to JSON.
         * @function toJSON
         * @memberof PlatPmd.GamePmdCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GamePmdCommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * GamePmdEnum enum.
         * @name PlatPmd.GamePmdCommand.GamePmdEnum
         * @enum {string}
         * @property {number} param_nullmessage=0 param_nullmessage value
         * @property {number} param_game_c2s=1 param_game_c2s value
         */
        GamePmdCommand.GamePmdEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "param_nullmessage"] = 0;
            values[valuesById[1] = "param_game_c2s"] = 1;
            return values;
        })();

        return GamePmdCommand;
    })();

    PlatPmd.game_c2s = (function() {

        /**
         * Properties of a game_c2s.
         * @memberof PlatPmd
         * @interface Igame_c2s
         * @property {PlatPmd.Inull_request|null} [reqcmd] game_c2s reqcmd
         */

        /**
         * Constructs a new game_c2s.
         * @memberof PlatPmd
         * @classdesc Represents a game_c2s.
         * @implements Igame_c2s
         * @constructor
         * @param {PlatPmd.Igame_c2s=} [properties] Properties to set
         */
        function game_c2s(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * game_c2s reqcmd.
         * @member {PlatPmd.Inull_request|null|undefined} reqcmd
         * @memberof PlatPmd.game_c2s
         * @instance
         */
        game_c2s.prototype.reqcmd = null;

        /**
         * Creates a new game_c2s instance using the specified properties.
         * @function create
         * @memberof PlatPmd.game_c2s
         * @static
         * @param {PlatPmd.Igame_c2s=} [properties] Properties to set
         * @returns {PlatPmd.game_c2s} game_c2s instance
         */
        game_c2s.create = function create(properties) {
            return new game_c2s(properties);
        };

        /**
         * Encodes the specified game_c2s message. Does not implicitly {@link PlatPmd.game_c2s.verify|verify} messages.
         * @function encode
         * @memberof PlatPmd.game_c2s
         * @static
         * @param {PlatPmd.Igame_c2s} message game_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        game_c2s.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd"))
                $root.PlatPmd.null_request.encode(message.reqcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified game_c2s message, length delimited. Does not implicitly {@link PlatPmd.game_c2s.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlatPmd.game_c2s
         * @static
         * @param {PlatPmd.Igame_c2s} message game_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        game_c2s.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a game_c2s message from the specified reader or buffer.
         * @function decode
         * @memberof PlatPmd.game_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlatPmd.game_c2s} game_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        game_c2s.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlatPmd.game_c2s();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqcmd = $root.PlatPmd.null_request.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a game_c2s message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlatPmd.game_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlatPmd.game_c2s} game_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        game_c2s.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a game_c2s message.
         * @function verify
         * @memberof PlatPmd.game_c2s
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        game_c2s.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd")) {
                var error = $root.PlatPmd.null_request.verify(message.reqcmd);
                if (error)
                    return "reqcmd." + error;
            }
            return null;
        };

        /**
         * Creates a game_c2s message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlatPmd.game_c2s
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlatPmd.game_c2s} game_c2s
         */
        game_c2s.fromObject = function fromObject(object) {
            if (object instanceof $root.PlatPmd.game_c2s)
                return object;
            var message = new $root.PlatPmd.game_c2s();
            if (object.reqcmd != null) {
                if (typeof object.reqcmd !== "object")
                    throw TypeError(".PlatPmd.game_c2s.reqcmd: object expected");
                message.reqcmd = $root.PlatPmd.null_request.fromObject(object.reqcmd);
            }
            return message;
        };

        /**
         * Creates a plain object from a game_c2s message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlatPmd.game_c2s
         * @static
         * @param {PlatPmd.game_c2s} message game_c2s
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        game_c2s.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.reqcmd = null;
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd"))
                object.reqcmd = $root.PlatPmd.null_request.toObject(message.reqcmd, options);
            return object;
        };

        /**
         * Converts this game_c2s to JSON.
         * @function toJSON
         * @memberof PlatPmd.game_c2s
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        game_c2s.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return game_c2s;
    })();

    PlatPmd.LoginPmdCommand = (function() {

        /**
         * Properties of a LoginPmdCommand.
         * @memberof PlatPmd
         * @interface ILoginPmdCommand
         */

        /**
         * Constructs a new LoginPmdCommand.
         * @memberof PlatPmd
         * @classdesc Represents a LoginPmdCommand.
         * @implements ILoginPmdCommand
         * @constructor
         * @param {PlatPmd.ILoginPmdCommand=} [properties] Properties to set
         */
        function LoginPmdCommand(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new LoginPmdCommand instance using the specified properties.
         * @function create
         * @memberof PlatPmd.LoginPmdCommand
         * @static
         * @param {PlatPmd.ILoginPmdCommand=} [properties] Properties to set
         * @returns {PlatPmd.LoginPmdCommand} LoginPmdCommand instance
         */
        LoginPmdCommand.create = function create(properties) {
            return new LoginPmdCommand(properties);
        };

        /**
         * Encodes the specified LoginPmdCommand message. Does not implicitly {@link PlatPmd.LoginPmdCommand.verify|verify} messages.
         * @function encode
         * @memberof PlatPmd.LoginPmdCommand
         * @static
         * @param {PlatPmd.ILoginPmdCommand} message LoginPmdCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginPmdCommand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified LoginPmdCommand message, length delimited. Does not implicitly {@link PlatPmd.LoginPmdCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlatPmd.LoginPmdCommand
         * @static
         * @param {PlatPmd.ILoginPmdCommand} message LoginPmdCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginPmdCommand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginPmdCommand message from the specified reader or buffer.
         * @function decode
         * @memberof PlatPmd.LoginPmdCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlatPmd.LoginPmdCommand} LoginPmdCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginPmdCommand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlatPmd.LoginPmdCommand();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginPmdCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlatPmd.LoginPmdCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlatPmd.LoginPmdCommand} LoginPmdCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginPmdCommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginPmdCommand message.
         * @function verify
         * @memberof PlatPmd.LoginPmdCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginPmdCommand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a LoginPmdCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlatPmd.LoginPmdCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlatPmd.LoginPmdCommand} LoginPmdCommand
         */
        LoginPmdCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.PlatPmd.LoginPmdCommand)
                return object;
            return new $root.PlatPmd.LoginPmdCommand();
        };

        /**
         * Creates a plain object from a LoginPmdCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlatPmd.LoginPmdCommand
         * @static
         * @param {PlatPmd.LoginPmdCommand} message LoginPmdCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginPmdCommand.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this LoginPmdCommand to JSON.
         * @function toJSON
         * @memberof PlatPmd.LoginPmdCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginPmdCommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * LoginPmdEnum enum.
         * @name PlatPmd.LoginPmdCommand.LoginPmdEnum
         * @enum {string}
         * @property {number} param_nullmessage=0 param_nullmessage value
         * @property {number} param_loginbyid_c2s=1 param_loginbyid_c2s value
         * @property {number} param_loginbyaccounts_c2s=2 param_loginbyaccounts_c2s value
         * @property {number} param_loginbyvisitor_c2s=6 param_loginbyvisitor_c2s value
         * @property {number} param_loginsuccess_s2c=100 param_loginsuccess_s2c value
         */
        LoginPmdCommand.LoginPmdEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "param_nullmessage"] = 0;
            values[valuesById[1] = "param_loginbyid_c2s"] = 1;
            values[valuesById[2] = "param_loginbyaccounts_c2s"] = 2;
            values[valuesById[6] = "param_loginbyvisitor_c2s"] = 6;
            values[valuesById[100] = "param_loginsuccess_s2c"] = 100;
            return values;
        })();

        return LoginPmdCommand;
    })();

    PlatPmd.loginbyid_c2s = (function() {

        /**
         * Properties of a loginbyid_c2s.
         * @memberof PlatPmd
         * @interface Iloginbyid_c2s
         * @property {PlatPmd.Inull_request|null} [reqcmd] loginbyid_c2s reqcmd
         * @property {number|null} [dwplazaversion] loginbyid_c2s dwplazaversion
         * @property {string|null} [szmachineid] loginbyid_c2s szmachineid
         * @property {number|null} [dwgameid] loginbyid_c2s dwgameid
         * @property {string|null} [szpassword] loginbyid_c2s szpassword
         * @property {number|null} [cbvalidateflags] loginbyid_c2s cbvalidateflags
         */

        /**
         * Constructs a new loginbyid_c2s.
         * @memberof PlatPmd
         * @classdesc Represents a loginbyid_c2s.
         * @implements Iloginbyid_c2s
         * @constructor
         * @param {PlatPmd.Iloginbyid_c2s=} [properties] Properties to set
         */
        function loginbyid_c2s(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * loginbyid_c2s reqcmd.
         * @member {PlatPmd.Inull_request|null|undefined} reqcmd
         * @memberof PlatPmd.loginbyid_c2s
         * @instance
         */
        loginbyid_c2s.prototype.reqcmd = null;

        /**
         * loginbyid_c2s dwplazaversion.
         * @member {number} dwplazaversion
         * @memberof PlatPmd.loginbyid_c2s
         * @instance
         */
        loginbyid_c2s.prototype.dwplazaversion = 0;

        /**
         * loginbyid_c2s szmachineid.
         * @member {string} szmachineid
         * @memberof PlatPmd.loginbyid_c2s
         * @instance
         */
        loginbyid_c2s.prototype.szmachineid = "";

        /**
         * loginbyid_c2s dwgameid.
         * @member {number} dwgameid
         * @memberof PlatPmd.loginbyid_c2s
         * @instance
         */
        loginbyid_c2s.prototype.dwgameid = 0;

        /**
         * loginbyid_c2s szpassword.
         * @member {string} szpassword
         * @memberof PlatPmd.loginbyid_c2s
         * @instance
         */
        loginbyid_c2s.prototype.szpassword = "";

        /**
         * loginbyid_c2s cbvalidateflags.
         * @member {number} cbvalidateflags
         * @memberof PlatPmd.loginbyid_c2s
         * @instance
         */
        loginbyid_c2s.prototype.cbvalidateflags = 0;

        /**
         * Creates a new loginbyid_c2s instance using the specified properties.
         * @function create
         * @memberof PlatPmd.loginbyid_c2s
         * @static
         * @param {PlatPmd.Iloginbyid_c2s=} [properties] Properties to set
         * @returns {PlatPmd.loginbyid_c2s} loginbyid_c2s instance
         */
        loginbyid_c2s.create = function create(properties) {
            return new loginbyid_c2s(properties);
        };

        /**
         * Encodes the specified loginbyid_c2s message. Does not implicitly {@link PlatPmd.loginbyid_c2s.verify|verify} messages.
         * @function encode
         * @memberof PlatPmd.loginbyid_c2s
         * @static
         * @param {PlatPmd.Iloginbyid_c2s} message loginbyid_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginbyid_c2s.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd"))
                $root.PlatPmd.null_request.encode(message.reqcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.dwplazaversion);
            if (message.szmachineid != null && message.hasOwnProperty("szmachineid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.szmachineid);
            if (message.dwgameid != null && message.hasOwnProperty("dwgameid"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.dwgameid);
            if (message.szpassword != null && message.hasOwnProperty("szpassword"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.szpassword);
            if (message.cbvalidateflags != null && message.hasOwnProperty("cbvalidateflags"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cbvalidateflags);
            return writer;
        };

        /**
         * Encodes the specified loginbyid_c2s message, length delimited. Does not implicitly {@link PlatPmd.loginbyid_c2s.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlatPmd.loginbyid_c2s
         * @static
         * @param {PlatPmd.Iloginbyid_c2s} message loginbyid_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginbyid_c2s.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a loginbyid_c2s message from the specified reader or buffer.
         * @function decode
         * @memberof PlatPmd.loginbyid_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlatPmd.loginbyid_c2s} loginbyid_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginbyid_c2s.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlatPmd.loginbyid_c2s();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqcmd = $root.PlatPmd.null_request.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.dwplazaversion = reader.uint32();
                    break;
                case 3:
                    message.szmachineid = reader.string();
                    break;
                case 4:
                    message.dwgameid = reader.uint32();
                    break;
                case 5:
                    message.szpassword = reader.string();
                    break;
                case 6:
                    message.cbvalidateflags = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a loginbyid_c2s message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlatPmd.loginbyid_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlatPmd.loginbyid_c2s} loginbyid_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginbyid_c2s.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a loginbyid_c2s message.
         * @function verify
         * @memberof PlatPmd.loginbyid_c2s
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        loginbyid_c2s.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd")) {
                var error = $root.PlatPmd.null_request.verify(message.reqcmd);
                if (error)
                    return "reqcmd." + error;
            }
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                if (!$util.isInteger(message.dwplazaversion))
                    return "dwplazaversion: integer expected";
            if (message.szmachineid != null && message.hasOwnProperty("szmachineid"))
                if (!$util.isString(message.szmachineid))
                    return "szmachineid: string expected";
            if (message.dwgameid != null && message.hasOwnProperty("dwgameid"))
                if (!$util.isInteger(message.dwgameid))
                    return "dwgameid: integer expected";
            if (message.szpassword != null && message.hasOwnProperty("szpassword"))
                if (!$util.isString(message.szpassword))
                    return "szpassword: string expected";
            if (message.cbvalidateflags != null && message.hasOwnProperty("cbvalidateflags"))
                if (!$util.isInteger(message.cbvalidateflags))
                    return "cbvalidateflags: integer expected";
            return null;
        };

        /**
         * Creates a loginbyid_c2s message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlatPmd.loginbyid_c2s
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlatPmd.loginbyid_c2s} loginbyid_c2s
         */
        loginbyid_c2s.fromObject = function fromObject(object) {
            if (object instanceof $root.PlatPmd.loginbyid_c2s)
                return object;
            var message = new $root.PlatPmd.loginbyid_c2s();
            if (object.reqcmd != null) {
                if (typeof object.reqcmd !== "object")
                    throw TypeError(".PlatPmd.loginbyid_c2s.reqcmd: object expected");
                message.reqcmd = $root.PlatPmd.null_request.fromObject(object.reqcmd);
            }
            if (object.dwplazaversion != null)
                message.dwplazaversion = object.dwplazaversion >>> 0;
            if (object.szmachineid != null)
                message.szmachineid = String(object.szmachineid);
            if (object.dwgameid != null)
                message.dwgameid = object.dwgameid >>> 0;
            if (object.szpassword != null)
                message.szpassword = String(object.szpassword);
            if (object.cbvalidateflags != null)
                message.cbvalidateflags = object.cbvalidateflags | 0;
            return message;
        };

        /**
         * Creates a plain object from a loginbyid_c2s message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlatPmd.loginbyid_c2s
         * @static
         * @param {PlatPmd.loginbyid_c2s} message loginbyid_c2s
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        loginbyid_c2s.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reqcmd = null;
                object.dwplazaversion = 0;
                object.szmachineid = "";
                object.dwgameid = 0;
                object.szpassword = "";
                object.cbvalidateflags = 0;
            }
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd"))
                object.reqcmd = $root.PlatPmd.null_request.toObject(message.reqcmd, options);
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                object.dwplazaversion = message.dwplazaversion;
            if (message.szmachineid != null && message.hasOwnProperty("szmachineid"))
                object.szmachineid = message.szmachineid;
            if (message.dwgameid != null && message.hasOwnProperty("dwgameid"))
                object.dwgameid = message.dwgameid;
            if (message.szpassword != null && message.hasOwnProperty("szpassword"))
                object.szpassword = message.szpassword;
            if (message.cbvalidateflags != null && message.hasOwnProperty("cbvalidateflags"))
                object.cbvalidateflags = message.cbvalidateflags;
            return object;
        };

        /**
         * Converts this loginbyid_c2s to JSON.
         * @function toJSON
         * @memberof PlatPmd.loginbyid_c2s
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        loginbyid_c2s.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return loginbyid_c2s;
    })();

    PlatPmd.loginbyaccounts_c2s = (function() {

        /**
         * Properties of a loginbyaccounts_c2s.
         * @memberof PlatPmd
         * @interface Iloginbyaccounts_c2s
         * @property {PlatPmd.Inull_request|null} [reqcmd] loginbyaccounts_c2s reqcmd
         * @property {number|null} [dwplazaversion] loginbyaccounts_c2s dwplazaversion
         * @property {string|null} [szmachineid] loginbyaccounts_c2s szmachineid
         * @property {string|null} [szpassword] loginbyaccounts_c2s szpassword
         * @property {string|null} [szaccounts] loginbyaccounts_c2s szaccounts
         * @property {string|null} [szpassportid] loginbyaccounts_c2s szpassportid
         * @property {number|null} [cbvalidateflags] loginbyaccounts_c2s cbvalidateflags
         */

        /**
         * Constructs a new loginbyaccounts_c2s.
         * @memberof PlatPmd
         * @classdesc Represents a loginbyaccounts_c2s.
         * @implements Iloginbyaccounts_c2s
         * @constructor
         * @param {PlatPmd.Iloginbyaccounts_c2s=} [properties] Properties to set
         */
        function loginbyaccounts_c2s(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * loginbyaccounts_c2s reqcmd.
         * @member {PlatPmd.Inull_request|null|undefined} reqcmd
         * @memberof PlatPmd.loginbyaccounts_c2s
         * @instance
         */
        loginbyaccounts_c2s.prototype.reqcmd = null;

        /**
         * loginbyaccounts_c2s dwplazaversion.
         * @member {number} dwplazaversion
         * @memberof PlatPmd.loginbyaccounts_c2s
         * @instance
         */
        loginbyaccounts_c2s.prototype.dwplazaversion = 0;

        /**
         * loginbyaccounts_c2s szmachineid.
         * @member {string} szmachineid
         * @memberof PlatPmd.loginbyaccounts_c2s
         * @instance
         */
        loginbyaccounts_c2s.prototype.szmachineid = "";

        /**
         * loginbyaccounts_c2s szpassword.
         * @member {string} szpassword
         * @memberof PlatPmd.loginbyaccounts_c2s
         * @instance
         */
        loginbyaccounts_c2s.prototype.szpassword = "";

        /**
         * loginbyaccounts_c2s szaccounts.
         * @member {string} szaccounts
         * @memberof PlatPmd.loginbyaccounts_c2s
         * @instance
         */
        loginbyaccounts_c2s.prototype.szaccounts = "";

        /**
         * loginbyaccounts_c2s szpassportid.
         * @member {string} szpassportid
         * @memberof PlatPmd.loginbyaccounts_c2s
         * @instance
         */
        loginbyaccounts_c2s.prototype.szpassportid = "";

        /**
         * loginbyaccounts_c2s cbvalidateflags.
         * @member {number} cbvalidateflags
         * @memberof PlatPmd.loginbyaccounts_c2s
         * @instance
         */
        loginbyaccounts_c2s.prototype.cbvalidateflags = 0;

        /**
         * Creates a new loginbyaccounts_c2s instance using the specified properties.
         * @function create
         * @memberof PlatPmd.loginbyaccounts_c2s
         * @static
         * @param {PlatPmd.Iloginbyaccounts_c2s=} [properties] Properties to set
         * @returns {PlatPmd.loginbyaccounts_c2s} loginbyaccounts_c2s instance
         */
        loginbyaccounts_c2s.create = function create(properties) {
            return new loginbyaccounts_c2s(properties);
        };

        /**
         * Encodes the specified loginbyaccounts_c2s message. Does not implicitly {@link PlatPmd.loginbyaccounts_c2s.verify|verify} messages.
         * @function encode
         * @memberof PlatPmd.loginbyaccounts_c2s
         * @static
         * @param {PlatPmd.Iloginbyaccounts_c2s} message loginbyaccounts_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginbyaccounts_c2s.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd"))
                $root.PlatPmd.null_request.encode(message.reqcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.dwplazaversion);
            if (message.szmachineid != null && message.hasOwnProperty("szmachineid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.szmachineid);
            if (message.szpassword != null && message.hasOwnProperty("szpassword"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.szpassword);
            if (message.szaccounts != null && message.hasOwnProperty("szaccounts"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.szaccounts);
            if (message.szpassportid != null && message.hasOwnProperty("szpassportid"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.szpassportid);
            if (message.cbvalidateflags != null && message.hasOwnProperty("cbvalidateflags"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.cbvalidateflags);
            return writer;
        };

        /**
         * Encodes the specified loginbyaccounts_c2s message, length delimited. Does not implicitly {@link PlatPmd.loginbyaccounts_c2s.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlatPmd.loginbyaccounts_c2s
         * @static
         * @param {PlatPmd.Iloginbyaccounts_c2s} message loginbyaccounts_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginbyaccounts_c2s.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a loginbyaccounts_c2s message from the specified reader or buffer.
         * @function decode
         * @memberof PlatPmd.loginbyaccounts_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlatPmd.loginbyaccounts_c2s} loginbyaccounts_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginbyaccounts_c2s.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlatPmd.loginbyaccounts_c2s();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqcmd = $root.PlatPmd.null_request.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.dwplazaversion = reader.uint32();
                    break;
                case 3:
                    message.szmachineid = reader.string();
                    break;
                case 4:
                    message.szpassword = reader.string();
                    break;
                case 5:
                    message.szaccounts = reader.string();
                    break;
                case 6:
                    message.szpassportid = reader.string();
                    break;
                case 7:
                    message.cbvalidateflags = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a loginbyaccounts_c2s message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlatPmd.loginbyaccounts_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlatPmd.loginbyaccounts_c2s} loginbyaccounts_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginbyaccounts_c2s.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a loginbyaccounts_c2s message.
         * @function verify
         * @memberof PlatPmd.loginbyaccounts_c2s
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        loginbyaccounts_c2s.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd")) {
                var error = $root.PlatPmd.null_request.verify(message.reqcmd);
                if (error)
                    return "reqcmd." + error;
            }
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                if (!$util.isInteger(message.dwplazaversion))
                    return "dwplazaversion: integer expected";
            if (message.szmachineid != null && message.hasOwnProperty("szmachineid"))
                if (!$util.isString(message.szmachineid))
                    return "szmachineid: string expected";
            if (message.szpassword != null && message.hasOwnProperty("szpassword"))
                if (!$util.isString(message.szpassword))
                    return "szpassword: string expected";
            if (message.szaccounts != null && message.hasOwnProperty("szaccounts"))
                if (!$util.isString(message.szaccounts))
                    return "szaccounts: string expected";
            if (message.szpassportid != null && message.hasOwnProperty("szpassportid"))
                if (!$util.isString(message.szpassportid))
                    return "szpassportid: string expected";
            if (message.cbvalidateflags != null && message.hasOwnProperty("cbvalidateflags"))
                if (!$util.isInteger(message.cbvalidateflags))
                    return "cbvalidateflags: integer expected";
            return null;
        };

        /**
         * Creates a loginbyaccounts_c2s message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlatPmd.loginbyaccounts_c2s
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlatPmd.loginbyaccounts_c2s} loginbyaccounts_c2s
         */
        loginbyaccounts_c2s.fromObject = function fromObject(object) {
            if (object instanceof $root.PlatPmd.loginbyaccounts_c2s)
                return object;
            var message = new $root.PlatPmd.loginbyaccounts_c2s();
            if (object.reqcmd != null) {
                if (typeof object.reqcmd !== "object")
                    throw TypeError(".PlatPmd.loginbyaccounts_c2s.reqcmd: object expected");
                message.reqcmd = $root.PlatPmd.null_request.fromObject(object.reqcmd);
            }
            if (object.dwplazaversion != null)
                message.dwplazaversion = object.dwplazaversion >>> 0;
            if (object.szmachineid != null)
                message.szmachineid = String(object.szmachineid);
            if (object.szpassword != null)
                message.szpassword = String(object.szpassword);
            if (object.szaccounts != null)
                message.szaccounts = String(object.szaccounts);
            if (object.szpassportid != null)
                message.szpassportid = String(object.szpassportid);
            if (object.cbvalidateflags != null)
                message.cbvalidateflags = object.cbvalidateflags | 0;
            return message;
        };

        /**
         * Creates a plain object from a loginbyaccounts_c2s message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlatPmd.loginbyaccounts_c2s
         * @static
         * @param {PlatPmd.loginbyaccounts_c2s} message loginbyaccounts_c2s
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        loginbyaccounts_c2s.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reqcmd = null;
                object.dwplazaversion = 0;
                object.szmachineid = "";
                object.szpassword = "";
                object.szaccounts = "";
                object.szpassportid = "";
                object.cbvalidateflags = 0;
            }
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd"))
                object.reqcmd = $root.PlatPmd.null_request.toObject(message.reqcmd, options);
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                object.dwplazaversion = message.dwplazaversion;
            if (message.szmachineid != null && message.hasOwnProperty("szmachineid"))
                object.szmachineid = message.szmachineid;
            if (message.szpassword != null && message.hasOwnProperty("szpassword"))
                object.szpassword = message.szpassword;
            if (message.szaccounts != null && message.hasOwnProperty("szaccounts"))
                object.szaccounts = message.szaccounts;
            if (message.szpassportid != null && message.hasOwnProperty("szpassportid"))
                object.szpassportid = message.szpassportid;
            if (message.cbvalidateflags != null && message.hasOwnProperty("cbvalidateflags"))
                object.cbvalidateflags = message.cbvalidateflags;
            return object;
        };

        /**
         * Converts this loginbyaccounts_c2s to JSON.
         * @function toJSON
         * @memberof PlatPmd.loginbyaccounts_c2s
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        loginbyaccounts_c2s.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return loginbyaccounts_c2s;
    })();

    PlatPmd.loginbyvisitor_c2s = (function() {

        /**
         * Properties of a loginbyvisitor_c2s.
         * @memberof PlatPmd
         * @interface Iloginbyvisitor_c2s
         * @property {PlatPmd.Inull_request|null} [reqcmd] loginbyvisitor_c2s reqcmd
         * @property {number|null} [dwplazaversion] loginbyvisitor_c2s dwplazaversion
         * @property {string|null} [szmachineid] loginbyvisitor_c2s szmachineid
         * @property {number|null} [cbvalidateflags] loginbyvisitor_c2s cbvalidateflags
         */

        /**
         * Constructs a new loginbyvisitor_c2s.
         * @memberof PlatPmd
         * @classdesc Represents a loginbyvisitor_c2s.
         * @implements Iloginbyvisitor_c2s
         * @constructor
         * @param {PlatPmd.Iloginbyvisitor_c2s=} [properties] Properties to set
         */
        function loginbyvisitor_c2s(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * loginbyvisitor_c2s reqcmd.
         * @member {PlatPmd.Inull_request|null|undefined} reqcmd
         * @memberof PlatPmd.loginbyvisitor_c2s
         * @instance
         */
        loginbyvisitor_c2s.prototype.reqcmd = null;

        /**
         * loginbyvisitor_c2s dwplazaversion.
         * @member {number} dwplazaversion
         * @memberof PlatPmd.loginbyvisitor_c2s
         * @instance
         */
        loginbyvisitor_c2s.prototype.dwplazaversion = 0;

        /**
         * loginbyvisitor_c2s szmachineid.
         * @member {string} szmachineid
         * @memberof PlatPmd.loginbyvisitor_c2s
         * @instance
         */
        loginbyvisitor_c2s.prototype.szmachineid = "";

        /**
         * loginbyvisitor_c2s cbvalidateflags.
         * @member {number} cbvalidateflags
         * @memberof PlatPmd.loginbyvisitor_c2s
         * @instance
         */
        loginbyvisitor_c2s.prototype.cbvalidateflags = 0;

        /**
         * Creates a new loginbyvisitor_c2s instance using the specified properties.
         * @function create
         * @memberof PlatPmd.loginbyvisitor_c2s
         * @static
         * @param {PlatPmd.Iloginbyvisitor_c2s=} [properties] Properties to set
         * @returns {PlatPmd.loginbyvisitor_c2s} loginbyvisitor_c2s instance
         */
        loginbyvisitor_c2s.create = function create(properties) {
            return new loginbyvisitor_c2s(properties);
        };

        /**
         * Encodes the specified loginbyvisitor_c2s message. Does not implicitly {@link PlatPmd.loginbyvisitor_c2s.verify|verify} messages.
         * @function encode
         * @memberof PlatPmd.loginbyvisitor_c2s
         * @static
         * @param {PlatPmd.Iloginbyvisitor_c2s} message loginbyvisitor_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginbyvisitor_c2s.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd"))
                $root.PlatPmd.null_request.encode(message.reqcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.dwplazaversion);
            if (message.szmachineid != null && message.hasOwnProperty("szmachineid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.szmachineid);
            if (message.cbvalidateflags != null && message.hasOwnProperty("cbvalidateflags"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cbvalidateflags);
            return writer;
        };

        /**
         * Encodes the specified loginbyvisitor_c2s message, length delimited. Does not implicitly {@link PlatPmd.loginbyvisitor_c2s.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlatPmd.loginbyvisitor_c2s
         * @static
         * @param {PlatPmd.Iloginbyvisitor_c2s} message loginbyvisitor_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginbyvisitor_c2s.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a loginbyvisitor_c2s message from the specified reader or buffer.
         * @function decode
         * @memberof PlatPmd.loginbyvisitor_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlatPmd.loginbyvisitor_c2s} loginbyvisitor_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginbyvisitor_c2s.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlatPmd.loginbyvisitor_c2s();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqcmd = $root.PlatPmd.null_request.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.dwplazaversion = reader.uint32();
                    break;
                case 3:
                    message.szmachineid = reader.string();
                    break;
                case 4:
                    message.cbvalidateflags = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a loginbyvisitor_c2s message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlatPmd.loginbyvisitor_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlatPmd.loginbyvisitor_c2s} loginbyvisitor_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginbyvisitor_c2s.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a loginbyvisitor_c2s message.
         * @function verify
         * @memberof PlatPmd.loginbyvisitor_c2s
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        loginbyvisitor_c2s.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd")) {
                var error = $root.PlatPmd.null_request.verify(message.reqcmd);
                if (error)
                    return "reqcmd." + error;
            }
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                if (!$util.isInteger(message.dwplazaversion))
                    return "dwplazaversion: integer expected";
            if (message.szmachineid != null && message.hasOwnProperty("szmachineid"))
                if (!$util.isString(message.szmachineid))
                    return "szmachineid: string expected";
            if (message.cbvalidateflags != null && message.hasOwnProperty("cbvalidateflags"))
                if (!$util.isInteger(message.cbvalidateflags))
                    return "cbvalidateflags: integer expected";
            return null;
        };

        /**
         * Creates a loginbyvisitor_c2s message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlatPmd.loginbyvisitor_c2s
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlatPmd.loginbyvisitor_c2s} loginbyvisitor_c2s
         */
        loginbyvisitor_c2s.fromObject = function fromObject(object) {
            if (object instanceof $root.PlatPmd.loginbyvisitor_c2s)
                return object;
            var message = new $root.PlatPmd.loginbyvisitor_c2s();
            if (object.reqcmd != null) {
                if (typeof object.reqcmd !== "object")
                    throw TypeError(".PlatPmd.loginbyvisitor_c2s.reqcmd: object expected");
                message.reqcmd = $root.PlatPmd.null_request.fromObject(object.reqcmd);
            }
            if (object.dwplazaversion != null)
                message.dwplazaversion = object.dwplazaversion >>> 0;
            if (object.szmachineid != null)
                message.szmachineid = String(object.szmachineid);
            if (object.cbvalidateflags != null)
                message.cbvalidateflags = object.cbvalidateflags | 0;
            return message;
        };

        /**
         * Creates a plain object from a loginbyvisitor_c2s message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlatPmd.loginbyvisitor_c2s
         * @static
         * @param {PlatPmd.loginbyvisitor_c2s} message loginbyvisitor_c2s
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        loginbyvisitor_c2s.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reqcmd = null;
                object.dwplazaversion = 0;
                object.szmachineid = "";
                object.cbvalidateflags = 0;
            }
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd"))
                object.reqcmd = $root.PlatPmd.null_request.toObject(message.reqcmd, options);
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                object.dwplazaversion = message.dwplazaversion;
            if (message.szmachineid != null && message.hasOwnProperty("szmachineid"))
                object.szmachineid = message.szmachineid;
            if (message.cbvalidateflags != null && message.hasOwnProperty("cbvalidateflags"))
                object.cbvalidateflags = message.cbvalidateflags;
            return object;
        };

        /**
         * Converts this loginbyvisitor_c2s to JSON.
         * @function toJSON
         * @memberof PlatPmd.loginbyvisitor_c2s
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        loginbyvisitor_c2s.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return loginbyvisitor_c2s;
    })();

    PlatPmd.loginsuccess_s2c = (function() {

        /**
         * Properties of a loginsuccess_s2c.
         * @memberof PlatPmd
         * @interface Iloginsuccess_s2c
         * @property {PlatPmd.Inull_response|null} [respcmd] loginsuccess_s2c respcmd
         * @property {PlatPmd.Icommon_personinfo|null} [personinfo] loginsuccess_s2c personinfo
         */

        /**
         * Constructs a new loginsuccess_s2c.
         * @memberof PlatPmd
         * @classdesc Represents a loginsuccess_s2c.
         * @implements Iloginsuccess_s2c
         * @constructor
         * @param {PlatPmd.Iloginsuccess_s2c=} [properties] Properties to set
         */
        function loginsuccess_s2c(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * loginsuccess_s2c respcmd.
         * @member {PlatPmd.Inull_response|null|undefined} respcmd
         * @memberof PlatPmd.loginsuccess_s2c
         * @instance
         */
        loginsuccess_s2c.prototype.respcmd = null;

        /**
         * loginsuccess_s2c personinfo.
         * @member {PlatPmd.Icommon_personinfo|null|undefined} personinfo
         * @memberof PlatPmd.loginsuccess_s2c
         * @instance
         */
        loginsuccess_s2c.prototype.personinfo = null;

        /**
         * Creates a new loginsuccess_s2c instance using the specified properties.
         * @function create
         * @memberof PlatPmd.loginsuccess_s2c
         * @static
         * @param {PlatPmd.Iloginsuccess_s2c=} [properties] Properties to set
         * @returns {PlatPmd.loginsuccess_s2c} loginsuccess_s2c instance
         */
        loginsuccess_s2c.create = function create(properties) {
            return new loginsuccess_s2c(properties);
        };

        /**
         * Encodes the specified loginsuccess_s2c message. Does not implicitly {@link PlatPmd.loginsuccess_s2c.verify|verify} messages.
         * @function encode
         * @memberof PlatPmd.loginsuccess_s2c
         * @static
         * @param {PlatPmd.Iloginsuccess_s2c} message loginsuccess_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginsuccess_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.PlatPmd.null_response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.personinfo != null && message.hasOwnProperty("personinfo"))
                $root.PlatPmd.common_personinfo.encode(message.personinfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified loginsuccess_s2c message, length delimited. Does not implicitly {@link PlatPmd.loginsuccess_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PlatPmd.loginsuccess_s2c
         * @static
         * @param {PlatPmd.Iloginsuccess_s2c} message loginsuccess_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginsuccess_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a loginsuccess_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof PlatPmd.loginsuccess_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PlatPmd.loginsuccess_s2c} loginsuccess_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginsuccess_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlatPmd.loginsuccess_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.PlatPmd.null_response.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.personinfo = $root.PlatPmd.common_personinfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a loginsuccess_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PlatPmd.loginsuccess_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PlatPmd.loginsuccess_s2c} loginsuccess_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginsuccess_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a loginsuccess_s2c message.
         * @function verify
         * @memberof PlatPmd.loginsuccess_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        loginsuccess_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.PlatPmd.null_response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.personinfo != null && message.hasOwnProperty("personinfo")) {
                var error = $root.PlatPmd.common_personinfo.verify(message.personinfo);
                if (error)
                    return "personinfo." + error;
            }
            return null;
        };

        /**
         * Creates a loginsuccess_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PlatPmd.loginsuccess_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PlatPmd.loginsuccess_s2c} loginsuccess_s2c
         */
        loginsuccess_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.PlatPmd.loginsuccess_s2c)
                return object;
            var message = new $root.PlatPmd.loginsuccess_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".PlatPmd.loginsuccess_s2c.respcmd: object expected");
                message.respcmd = $root.PlatPmd.null_response.fromObject(object.respcmd);
            }
            if (object.personinfo != null) {
                if (typeof object.personinfo !== "object")
                    throw TypeError(".PlatPmd.loginsuccess_s2c.personinfo: object expected");
                message.personinfo = $root.PlatPmd.common_personinfo.fromObject(object.personinfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a loginsuccess_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PlatPmd.loginsuccess_s2c
         * @static
         * @param {PlatPmd.loginsuccess_s2c} message loginsuccess_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        loginsuccess_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.respcmd = null;
                object.personinfo = null;
            }
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.PlatPmd.null_response.toObject(message.respcmd, options);
            if (message.personinfo != null && message.hasOwnProperty("personinfo"))
                object.personinfo = $root.PlatPmd.common_personinfo.toObject(message.personinfo, options);
            return object;
        };

        /**
         * Converts this loginsuccess_s2c to JSON.
         * @function toJSON
         * @memberof PlatPmd.loginsuccess_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        loginsuccess_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return loginsuccess_s2c;
    })();

    /**
     * PlatPmdCommand enum.
     * @name PlatPmd.PlatPmdCommand
     * @enum {string}
     * @property {number} param_NullPmd=0 param_NullPmd value
     * @property {number} param_CommonPmd=16 param_CommonPmd value
     * @property {number} param_LoginPmd=1 param_LoginPmd value
     * @property {number} param_GamePmd=3 param_GamePmd value
     * @property {number} param_DdzPmd=4 param_DdzPmd value
     */
    PlatPmd.PlatPmdCommand = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "param_NullPmd"] = 0;
        values[valuesById[16] = "param_CommonPmd"] = 16;
        values[valuesById[1] = "param_LoginPmd"] = 1;
        values[valuesById[3] = "param_GamePmd"] = 3;
        values[valuesById[4] = "param_DdzPmd"] = 4;
        return values;
    })();

    return PlatPmd;
})();

module.exports = $root;
