/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.CommonPmd = (function() {

    /**
     * Namespace CommonPmd.
     * @exports CommonPmd
     * @namespace
     */
    var CommonPmd = {};

    CommonPmd.SYSTEMTIME = (function() {

        /**
         * Properties of a SYSTEMTIME.
         * @memberof CommonPmd
         * @interface ISYSTEMTIME
         * @property {number|null} [wYear] SYSTEMTIME wYear
         * @property {number|null} [wMonth] SYSTEMTIME wMonth
         * @property {number|null} [wDayOfWeek] SYSTEMTIME wDayOfWeek
         * @property {number|null} [wDay] SYSTEMTIME wDay
         * @property {number|null} [wHour] SYSTEMTIME wHour
         * @property {number|null} [wMinute] SYSTEMTIME wMinute
         * @property {number|null} [wSecond] SYSTEMTIME wSecond
         * @property {number|null} [wMilliseconds] SYSTEMTIME wMilliseconds
         */

        /**
         * Constructs a new SYSTEMTIME.
         * @memberof CommonPmd
         * @classdesc Represents a SYSTEMTIME.
         * @implements ISYSTEMTIME
         * @constructor
         * @param {CommonPmd.ISYSTEMTIME=} [properties] Properties to set
         */
        function SYSTEMTIME(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SYSTEMTIME wYear.
         * @member {number} wYear
         * @memberof CommonPmd.SYSTEMTIME
         * @instance
         */
        SYSTEMTIME.prototype.wYear = 0;

        /**
         * SYSTEMTIME wMonth.
         * @member {number} wMonth
         * @memberof CommonPmd.SYSTEMTIME
         * @instance
         */
        SYSTEMTIME.prototype.wMonth = 0;

        /**
         * SYSTEMTIME wDayOfWeek.
         * @member {number} wDayOfWeek
         * @memberof CommonPmd.SYSTEMTIME
         * @instance
         */
        SYSTEMTIME.prototype.wDayOfWeek = 0;

        /**
         * SYSTEMTIME wDay.
         * @member {number} wDay
         * @memberof CommonPmd.SYSTEMTIME
         * @instance
         */
        SYSTEMTIME.prototype.wDay = 0;

        /**
         * SYSTEMTIME wHour.
         * @member {number} wHour
         * @memberof CommonPmd.SYSTEMTIME
         * @instance
         */
        SYSTEMTIME.prototype.wHour = 0;

        /**
         * SYSTEMTIME wMinute.
         * @member {number} wMinute
         * @memberof CommonPmd.SYSTEMTIME
         * @instance
         */
        SYSTEMTIME.prototype.wMinute = 0;

        /**
         * SYSTEMTIME wSecond.
         * @member {number} wSecond
         * @memberof CommonPmd.SYSTEMTIME
         * @instance
         */
        SYSTEMTIME.prototype.wSecond = 0;

        /**
         * SYSTEMTIME wMilliseconds.
         * @member {number} wMilliseconds
         * @memberof CommonPmd.SYSTEMTIME
         * @instance
         */
        SYSTEMTIME.prototype.wMilliseconds = 0;

        /**
         * Creates a new SYSTEMTIME instance using the specified properties.
         * @function create
         * @memberof CommonPmd.SYSTEMTIME
         * @static
         * @param {CommonPmd.ISYSTEMTIME=} [properties] Properties to set
         * @returns {CommonPmd.SYSTEMTIME} SYSTEMTIME instance
         */
        SYSTEMTIME.create = function create(properties) {
            return new SYSTEMTIME(properties);
        };

        /**
         * Encodes the specified SYSTEMTIME message. Does not implicitly {@link CommonPmd.SYSTEMTIME.verify|verify} messages.
         * @function encode
         * @memberof CommonPmd.SYSTEMTIME
         * @static
         * @param {CommonPmd.ISYSTEMTIME} message SYSTEMTIME message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SYSTEMTIME.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wYear != null && message.hasOwnProperty("wYear"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.wYear);
            if (message.wMonth != null && message.hasOwnProperty("wMonth"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.wMonth);
            if (message.wDayOfWeek != null && message.hasOwnProperty("wDayOfWeek"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.wDayOfWeek);
            if (message.wDay != null && message.hasOwnProperty("wDay"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.wDay);
            if (message.wHour != null && message.hasOwnProperty("wHour"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.wHour);
            if (message.wMinute != null && message.hasOwnProperty("wMinute"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.wMinute);
            if (message.wSecond != null && message.hasOwnProperty("wSecond"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.wSecond);
            if (message.wMilliseconds != null && message.hasOwnProperty("wMilliseconds"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.wMilliseconds);
            return writer;
        };

        /**
         * Encodes the specified SYSTEMTIME message, length delimited. Does not implicitly {@link CommonPmd.SYSTEMTIME.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CommonPmd.SYSTEMTIME
         * @static
         * @param {CommonPmd.ISYSTEMTIME} message SYSTEMTIME message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SYSTEMTIME.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SYSTEMTIME message from the specified reader or buffer.
         * @function decode
         * @memberof CommonPmd.SYSTEMTIME
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CommonPmd.SYSTEMTIME} SYSTEMTIME
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SYSTEMTIME.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommonPmd.SYSTEMTIME();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.wYear = reader.int32();
                    break;
                case 2:
                    message.wMonth = reader.int32();
                    break;
                case 3:
                    message.wDayOfWeek = reader.int32();
                    break;
                case 4:
                    message.wDay = reader.int32();
                    break;
                case 5:
                    message.wHour = reader.int32();
                    break;
                case 6:
                    message.wMinute = reader.int32();
                    break;
                case 7:
                    message.wSecond = reader.int32();
                    break;
                case 8:
                    message.wMilliseconds = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SYSTEMTIME message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CommonPmd.SYSTEMTIME
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CommonPmd.SYSTEMTIME} SYSTEMTIME
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SYSTEMTIME.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SYSTEMTIME message.
         * @function verify
         * @memberof CommonPmd.SYSTEMTIME
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SYSTEMTIME.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.wYear != null && message.hasOwnProperty("wYear"))
                if (!$util.isInteger(message.wYear))
                    return "wYear: integer expected";
            if (message.wMonth != null && message.hasOwnProperty("wMonth"))
                if (!$util.isInteger(message.wMonth))
                    return "wMonth: integer expected";
            if (message.wDayOfWeek != null && message.hasOwnProperty("wDayOfWeek"))
                if (!$util.isInteger(message.wDayOfWeek))
                    return "wDayOfWeek: integer expected";
            if (message.wDay != null && message.hasOwnProperty("wDay"))
                if (!$util.isInteger(message.wDay))
                    return "wDay: integer expected";
            if (message.wHour != null && message.hasOwnProperty("wHour"))
                if (!$util.isInteger(message.wHour))
                    return "wHour: integer expected";
            if (message.wMinute != null && message.hasOwnProperty("wMinute"))
                if (!$util.isInteger(message.wMinute))
                    return "wMinute: integer expected";
            if (message.wSecond != null && message.hasOwnProperty("wSecond"))
                if (!$util.isInteger(message.wSecond))
                    return "wSecond: integer expected";
            if (message.wMilliseconds != null && message.hasOwnProperty("wMilliseconds"))
                if (!$util.isInteger(message.wMilliseconds))
                    return "wMilliseconds: integer expected";
            return null;
        };

        /**
         * Creates a SYSTEMTIME message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CommonPmd.SYSTEMTIME
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CommonPmd.SYSTEMTIME} SYSTEMTIME
         */
        SYSTEMTIME.fromObject = function fromObject(object) {
            if (object instanceof $root.CommonPmd.SYSTEMTIME)
                return object;
            var message = new $root.CommonPmd.SYSTEMTIME();
            if (object.wYear != null)
                message.wYear = object.wYear | 0;
            if (object.wMonth != null)
                message.wMonth = object.wMonth | 0;
            if (object.wDayOfWeek != null)
                message.wDayOfWeek = object.wDayOfWeek | 0;
            if (object.wDay != null)
                message.wDay = object.wDay | 0;
            if (object.wHour != null)
                message.wHour = object.wHour | 0;
            if (object.wMinute != null)
                message.wMinute = object.wMinute | 0;
            if (object.wSecond != null)
                message.wSecond = object.wSecond | 0;
            if (object.wMilliseconds != null)
                message.wMilliseconds = object.wMilliseconds | 0;
            return message;
        };

        /**
         * Creates a plain object from a SYSTEMTIME message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CommonPmd.SYSTEMTIME
         * @static
         * @param {CommonPmd.SYSTEMTIME} message SYSTEMTIME
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SYSTEMTIME.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.wYear = 0;
                object.wMonth = 0;
                object.wDayOfWeek = 0;
                object.wDay = 0;
                object.wHour = 0;
                object.wMinute = 0;
                object.wSecond = 0;
                object.wMilliseconds = 0;
            }
            if (message.wYear != null && message.hasOwnProperty("wYear"))
                object.wYear = message.wYear;
            if (message.wMonth != null && message.hasOwnProperty("wMonth"))
                object.wMonth = message.wMonth;
            if (message.wDayOfWeek != null && message.hasOwnProperty("wDayOfWeek"))
                object.wDayOfWeek = message.wDayOfWeek;
            if (message.wDay != null && message.hasOwnProperty("wDay"))
                object.wDay = message.wDay;
            if (message.wHour != null && message.hasOwnProperty("wHour"))
                object.wHour = message.wHour;
            if (message.wMinute != null && message.hasOwnProperty("wMinute"))
                object.wMinute = message.wMinute;
            if (message.wSecond != null && message.hasOwnProperty("wSecond"))
                object.wSecond = message.wSecond;
            if (message.wMilliseconds != null && message.hasOwnProperty("wMilliseconds"))
                object.wMilliseconds = message.wMilliseconds;
            return object;
        };

        /**
         * Converts this SYSTEMTIME to JSON.
         * @function toJSON
         * @memberof CommonPmd.SYSTEMTIME
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SYSTEMTIME.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SYSTEMTIME;
    })();

    CommonPmd.consumptionType = (function() {

        /**
         * Properties of a consumptionType.
         * @memberof CommonPmd
         * @interface IconsumptionType
         * @property {number|Long|null} [lgrade] consumptionType lgrade
         * @property {number|Long|null} [linsure] consumptionType linsure
         * @property {number|Long|null} [lscore] consumptionType lscore
         * @property {number|Long|null} [lingot] consumptionType lingot
         * @property {number|Long|null} [lbeans] consumptionType lbeans
         * @property {number|Long|null} [ldiamond] consumptionType ldiamond
         * @property {number|Long|null} [lcoin] consumptionType lcoin
         * @property {number|Long|null} [lcard] consumptionType lcard
         */

        /**
         * Constructs a new consumptionType.
         * @memberof CommonPmd
         * @classdesc Represents a consumptionType.
         * @implements IconsumptionType
         * @constructor
         * @param {CommonPmd.IconsumptionType=} [properties] Properties to set
         */
        function consumptionType(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * consumptionType lgrade.
         * @member {number|Long} lgrade
         * @memberof CommonPmd.consumptionType
         * @instance
         */
        consumptionType.prototype.lgrade = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * consumptionType linsure.
         * @member {number|Long} linsure
         * @memberof CommonPmd.consumptionType
         * @instance
         */
        consumptionType.prototype.linsure = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * consumptionType lscore.
         * @member {number|Long} lscore
         * @memberof CommonPmd.consumptionType
         * @instance
         */
        consumptionType.prototype.lscore = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * consumptionType lingot.
         * @member {number|Long} lingot
         * @memberof CommonPmd.consumptionType
         * @instance
         */
        consumptionType.prototype.lingot = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * consumptionType lbeans.
         * @member {number|Long} lbeans
         * @memberof CommonPmd.consumptionType
         * @instance
         */
        consumptionType.prototype.lbeans = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * consumptionType ldiamond.
         * @member {number|Long} ldiamond
         * @memberof CommonPmd.consumptionType
         * @instance
         */
        consumptionType.prototype.ldiamond = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * consumptionType lcoin.
         * @member {number|Long} lcoin
         * @memberof CommonPmd.consumptionType
         * @instance
         */
        consumptionType.prototype.lcoin = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * consumptionType lcard.
         * @member {number|Long} lcard
         * @memberof CommonPmd.consumptionType
         * @instance
         */
        consumptionType.prototype.lcard = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new consumptionType instance using the specified properties.
         * @function create
         * @memberof CommonPmd.consumptionType
         * @static
         * @param {CommonPmd.IconsumptionType=} [properties] Properties to set
         * @returns {CommonPmd.consumptionType} consumptionType instance
         */
        consumptionType.create = function create(properties) {
            return new consumptionType(properties);
        };

        /**
         * Encodes the specified consumptionType message. Does not implicitly {@link CommonPmd.consumptionType.verify|verify} messages.
         * @function encode
         * @memberof CommonPmd.consumptionType
         * @static
         * @param {CommonPmd.IconsumptionType} message consumptionType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        consumptionType.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lgrade != null && message.hasOwnProperty("lgrade"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.lgrade);
            if (message.linsure != null && message.hasOwnProperty("linsure"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.linsure);
            if (message.lscore != null && message.hasOwnProperty("lscore"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.lscore);
            if (message.lingot != null && message.hasOwnProperty("lingot"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.lingot);
            if (message.lbeans != null && message.hasOwnProperty("lbeans"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.lbeans);
            if (message.ldiamond != null && message.hasOwnProperty("ldiamond"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.ldiamond);
            if (message.lcoin != null && message.hasOwnProperty("lcoin"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.lcoin);
            if (message.lcard != null && message.hasOwnProperty("lcard"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.lcard);
            return writer;
        };

        /**
         * Encodes the specified consumptionType message, length delimited. Does not implicitly {@link CommonPmd.consumptionType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CommonPmd.consumptionType
         * @static
         * @param {CommonPmd.IconsumptionType} message consumptionType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        consumptionType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a consumptionType message from the specified reader or buffer.
         * @function decode
         * @memberof CommonPmd.consumptionType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CommonPmd.consumptionType} consumptionType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        consumptionType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommonPmd.consumptionType();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.lgrade = reader.uint64();
                    break;
                case 2:
                    message.linsure = reader.uint64();
                    break;
                case 3:
                    message.lscore = reader.uint64();
                    break;
                case 4:
                    message.lingot = reader.uint64();
                    break;
                case 5:
                    message.lbeans = reader.uint64();
                    break;
                case 6:
                    message.ldiamond = reader.uint64();
                    break;
                case 7:
                    message.lcoin = reader.uint64();
                    break;
                case 8:
                    message.lcard = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a consumptionType message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CommonPmd.consumptionType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CommonPmd.consumptionType} consumptionType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        consumptionType.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a consumptionType message.
         * @function verify
         * @memberof CommonPmd.consumptionType
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        consumptionType.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lgrade != null && message.hasOwnProperty("lgrade"))
                if (!$util.isInteger(message.lgrade) && !(message.lgrade && $util.isInteger(message.lgrade.low) && $util.isInteger(message.lgrade.high)))
                    return "lgrade: integer|Long expected";
            if (message.linsure != null && message.hasOwnProperty("linsure"))
                if (!$util.isInteger(message.linsure) && !(message.linsure && $util.isInteger(message.linsure.low) && $util.isInteger(message.linsure.high)))
                    return "linsure: integer|Long expected";
            if (message.lscore != null && message.hasOwnProperty("lscore"))
                if (!$util.isInteger(message.lscore) && !(message.lscore && $util.isInteger(message.lscore.low) && $util.isInteger(message.lscore.high)))
                    return "lscore: integer|Long expected";
            if (message.lingot != null && message.hasOwnProperty("lingot"))
                if (!$util.isInteger(message.lingot) && !(message.lingot && $util.isInteger(message.lingot.low) && $util.isInteger(message.lingot.high)))
                    return "lingot: integer|Long expected";
            if (message.lbeans != null && message.hasOwnProperty("lbeans"))
                if (!$util.isInteger(message.lbeans) && !(message.lbeans && $util.isInteger(message.lbeans.low) && $util.isInteger(message.lbeans.high)))
                    return "lbeans: integer|Long expected";
            if (message.ldiamond != null && message.hasOwnProperty("ldiamond"))
                if (!$util.isInteger(message.ldiamond) && !(message.ldiamond && $util.isInteger(message.ldiamond.low) && $util.isInteger(message.ldiamond.high)))
                    return "ldiamond: integer|Long expected";
            if (message.lcoin != null && message.hasOwnProperty("lcoin"))
                if (!$util.isInteger(message.lcoin) && !(message.lcoin && $util.isInteger(message.lcoin.low) && $util.isInteger(message.lcoin.high)))
                    return "lcoin: integer|Long expected";
            if (message.lcard != null && message.hasOwnProperty("lcard"))
                if (!$util.isInteger(message.lcard) && !(message.lcard && $util.isInteger(message.lcard.low) && $util.isInteger(message.lcard.high)))
                    return "lcard: integer|Long expected";
            return null;
        };

        /**
         * Creates a consumptionType message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CommonPmd.consumptionType
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CommonPmd.consumptionType} consumptionType
         */
        consumptionType.fromObject = function fromObject(object) {
            if (object instanceof $root.CommonPmd.consumptionType)
                return object;
            var message = new $root.CommonPmd.consumptionType();
            if (object.lgrade != null)
                if ($util.Long)
                    (message.lgrade = $util.Long.fromValue(object.lgrade)).unsigned = true;
                else if (typeof object.lgrade === "string")
                    message.lgrade = parseInt(object.lgrade, 10);
                else if (typeof object.lgrade === "number")
                    message.lgrade = object.lgrade;
                else if (typeof object.lgrade === "object")
                    message.lgrade = new $util.LongBits(object.lgrade.low >>> 0, object.lgrade.high >>> 0).toNumber(true);
            if (object.linsure != null)
                if ($util.Long)
                    (message.linsure = $util.Long.fromValue(object.linsure)).unsigned = true;
                else if (typeof object.linsure === "string")
                    message.linsure = parseInt(object.linsure, 10);
                else if (typeof object.linsure === "number")
                    message.linsure = object.linsure;
                else if (typeof object.linsure === "object")
                    message.linsure = new $util.LongBits(object.linsure.low >>> 0, object.linsure.high >>> 0).toNumber(true);
            if (object.lscore != null)
                if ($util.Long)
                    (message.lscore = $util.Long.fromValue(object.lscore)).unsigned = true;
                else if (typeof object.lscore === "string")
                    message.lscore = parseInt(object.lscore, 10);
                else if (typeof object.lscore === "number")
                    message.lscore = object.lscore;
                else if (typeof object.lscore === "object")
                    message.lscore = new $util.LongBits(object.lscore.low >>> 0, object.lscore.high >>> 0).toNumber(true);
            if (object.lingot != null)
                if ($util.Long)
                    (message.lingot = $util.Long.fromValue(object.lingot)).unsigned = true;
                else if (typeof object.lingot === "string")
                    message.lingot = parseInt(object.lingot, 10);
                else if (typeof object.lingot === "number")
                    message.lingot = object.lingot;
                else if (typeof object.lingot === "object")
                    message.lingot = new $util.LongBits(object.lingot.low >>> 0, object.lingot.high >>> 0).toNumber(true);
            if (object.lbeans != null)
                if ($util.Long)
                    (message.lbeans = $util.Long.fromValue(object.lbeans)).unsigned = true;
                else if (typeof object.lbeans === "string")
                    message.lbeans = parseInt(object.lbeans, 10);
                else if (typeof object.lbeans === "number")
                    message.lbeans = object.lbeans;
                else if (typeof object.lbeans === "object")
                    message.lbeans = new $util.LongBits(object.lbeans.low >>> 0, object.lbeans.high >>> 0).toNumber(true);
            if (object.ldiamond != null)
                if ($util.Long)
                    (message.ldiamond = $util.Long.fromValue(object.ldiamond)).unsigned = true;
                else if (typeof object.ldiamond === "string")
                    message.ldiamond = parseInt(object.ldiamond, 10);
                else if (typeof object.ldiamond === "number")
                    message.ldiamond = object.ldiamond;
                else if (typeof object.ldiamond === "object")
                    message.ldiamond = new $util.LongBits(object.ldiamond.low >>> 0, object.ldiamond.high >>> 0).toNumber(true);
            if (object.lcoin != null)
                if ($util.Long)
                    (message.lcoin = $util.Long.fromValue(object.lcoin)).unsigned = true;
                else if (typeof object.lcoin === "string")
                    message.lcoin = parseInt(object.lcoin, 10);
                else if (typeof object.lcoin === "number")
                    message.lcoin = object.lcoin;
                else if (typeof object.lcoin === "object")
                    message.lcoin = new $util.LongBits(object.lcoin.low >>> 0, object.lcoin.high >>> 0).toNumber(true);
            if (object.lcard != null)
                if ($util.Long)
                    (message.lcard = $util.Long.fromValue(object.lcard)).unsigned = true;
                else if (typeof object.lcard === "string")
                    message.lcard = parseInt(object.lcard, 10);
                else if (typeof object.lcard === "number")
                    message.lcard = object.lcard;
                else if (typeof object.lcard === "object")
                    message.lcard = new $util.LongBits(object.lcard.low >>> 0, object.lcard.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a consumptionType message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CommonPmd.consumptionType
         * @static
         * @param {CommonPmd.consumptionType} message consumptionType
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        consumptionType.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lgrade = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lgrade = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.linsure = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.linsure = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lscore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lscore = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lingot = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lingot = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lbeans = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lbeans = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ldiamond = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ldiamond = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lcoin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lcoin = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lcard = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lcard = options.longs === String ? "0" : 0;
            }
            if (message.lgrade != null && message.hasOwnProperty("lgrade"))
                if (typeof message.lgrade === "number")
                    object.lgrade = options.longs === String ? String(message.lgrade) : message.lgrade;
                else
                    object.lgrade = options.longs === String ? $util.Long.prototype.toString.call(message.lgrade) : options.longs === Number ? new $util.LongBits(message.lgrade.low >>> 0, message.lgrade.high >>> 0).toNumber(true) : message.lgrade;
            if (message.linsure != null && message.hasOwnProperty("linsure"))
                if (typeof message.linsure === "number")
                    object.linsure = options.longs === String ? String(message.linsure) : message.linsure;
                else
                    object.linsure = options.longs === String ? $util.Long.prototype.toString.call(message.linsure) : options.longs === Number ? new $util.LongBits(message.linsure.low >>> 0, message.linsure.high >>> 0).toNumber(true) : message.linsure;
            if (message.lscore != null && message.hasOwnProperty("lscore"))
                if (typeof message.lscore === "number")
                    object.lscore = options.longs === String ? String(message.lscore) : message.lscore;
                else
                    object.lscore = options.longs === String ? $util.Long.prototype.toString.call(message.lscore) : options.longs === Number ? new $util.LongBits(message.lscore.low >>> 0, message.lscore.high >>> 0).toNumber(true) : message.lscore;
            if (message.lingot != null && message.hasOwnProperty("lingot"))
                if (typeof message.lingot === "number")
                    object.lingot = options.longs === String ? String(message.lingot) : message.lingot;
                else
                    object.lingot = options.longs === String ? $util.Long.prototype.toString.call(message.lingot) : options.longs === Number ? new $util.LongBits(message.lingot.low >>> 0, message.lingot.high >>> 0).toNumber(true) : message.lingot;
            if (message.lbeans != null && message.hasOwnProperty("lbeans"))
                if (typeof message.lbeans === "number")
                    object.lbeans = options.longs === String ? String(message.lbeans) : message.lbeans;
                else
                    object.lbeans = options.longs === String ? $util.Long.prototype.toString.call(message.lbeans) : options.longs === Number ? new $util.LongBits(message.lbeans.low >>> 0, message.lbeans.high >>> 0).toNumber(true) : message.lbeans;
            if (message.ldiamond != null && message.hasOwnProperty("ldiamond"))
                if (typeof message.ldiamond === "number")
                    object.ldiamond = options.longs === String ? String(message.ldiamond) : message.ldiamond;
                else
                    object.ldiamond = options.longs === String ? $util.Long.prototype.toString.call(message.ldiamond) : options.longs === Number ? new $util.LongBits(message.ldiamond.low >>> 0, message.ldiamond.high >>> 0).toNumber(true) : message.ldiamond;
            if (message.lcoin != null && message.hasOwnProperty("lcoin"))
                if (typeof message.lcoin === "number")
                    object.lcoin = options.longs === String ? String(message.lcoin) : message.lcoin;
                else
                    object.lcoin = options.longs === String ? $util.Long.prototype.toString.call(message.lcoin) : options.longs === Number ? new $util.LongBits(message.lcoin.low >>> 0, message.lcoin.high >>> 0).toNumber(true) : message.lcoin;
            if (message.lcard != null && message.hasOwnProperty("lcard"))
                if (typeof message.lcard === "number")
                    object.lcard = options.longs === String ? String(message.lcard) : message.lcard;
                else
                    object.lcard = options.longs === String ? $util.Long.prototype.toString.call(message.lcard) : options.longs === Number ? new $util.LongBits(message.lcard.low >>> 0, message.lcard.high >>> 0).toNumber(true) : message.lcard;
            return object;
        };

        /**
         * Converts this consumptionType to JSON.
         * @function toJSON
         * @memberof CommonPmd.consumptionType
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        consumptionType.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return consumptionType;
    })();

    CommonPmd.personinfo = (function() {

        /**
         * Properties of a personinfo.
         * @memberof CommonPmd
         * @interface Ipersoninfo
         * @property {number|null} [wfaceid] personinfo wfaceid
         * @property {number|Long|null} [dwuserid] personinfo dwuserid
         * @property {number|Long|null} [dwgameid] personinfo dwgameid
         * @property {number|Long|null} [dwgroupid] personinfo dwgroupid
         * @property {number|Long|null} [dwcustomid] personinfo dwcustomid
         * @property {number|Long|null} [dwexperience] personinfo dwexperience
         * @property {number|Long|null} [lloveliness] personinfo lloveliness
         * @property {number|Long|null} [luserscore] personinfo luserscore
         * @property {number|Long|null} [luserinsure] personinfo luserinsure
         * @property {number|Long|null} [luseringot] personinfo luseringot
         * @property {number|null} [duserbeans] personinfo duserbeans
         * @property {number|Long|null} [cbgender] personinfo cbgender
         * @property {number|Long|null} [cbmoormachine] personinfo cbmoormachine
         * @property {string|null} [szaccounts] personinfo szaccounts
         * @property {string|null} [sznickname] personinfo sznickname
         * @property {string|null} [szdynamicpass] personinfo szdynamicpass
         * @property {string|null} [szPassword] personinfo szPassword
         * @property {string|null} [szgroupname] personinfo szgroupname
         * @property {number|Long|null} [cbinsureenabled] personinfo cbinsureenabled
         * @property {number|Long|null} [cbshowserverstatus] personinfo cbshowserverstatus
         * @property {number|Long|null} [cbisagent] personinfo cbisagent
         * @property {string|null} [szUnderWrite] personinfo szUnderWrite
         * @property {number|null} [cbMemberOrder] personinfo cbMemberOrder
         * @property {CommonPmd.ISYSTEMTIME|null} [MemberOverDate] personinfo MemberOverDate
         * @property {number|Long|null} [dwCheckUserRight] personinfo dwCheckUserRight
         * @property {string|null} [szDescribeString] personinfo szDescribeString
         */

        /**
         * Constructs a new personinfo.
         * @memberof CommonPmd
         * @classdesc Represents a personinfo.
         * @implements Ipersoninfo
         * @constructor
         * @param {CommonPmd.Ipersoninfo=} [properties] Properties to set
         */
        function personinfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * personinfo wfaceid.
         * @member {number} wfaceid
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.wfaceid = 0;

        /**
         * personinfo dwuserid.
         * @member {number|Long} dwuserid
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.dwuserid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * personinfo dwgameid.
         * @member {number|Long} dwgameid
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.dwgameid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * personinfo dwgroupid.
         * @member {number|Long} dwgroupid
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.dwgroupid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * personinfo dwcustomid.
         * @member {number|Long} dwcustomid
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.dwcustomid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * personinfo dwexperience.
         * @member {number|Long} dwexperience
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.dwexperience = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * personinfo lloveliness.
         * @member {number|Long} lloveliness
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.lloveliness = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * personinfo luserscore.
         * @member {number|Long} luserscore
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.luserscore = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * personinfo luserinsure.
         * @member {number|Long} luserinsure
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.luserinsure = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * personinfo luseringot.
         * @member {number|Long} luseringot
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.luseringot = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * personinfo duserbeans.
         * @member {number} duserbeans
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.duserbeans = 0;

        /**
         * personinfo cbgender.
         * @member {number|Long} cbgender
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.cbgender = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * personinfo cbmoormachine.
         * @member {number|Long} cbmoormachine
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.cbmoormachine = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * personinfo szaccounts.
         * @member {string} szaccounts
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.szaccounts = "";

        /**
         * personinfo sznickname.
         * @member {string} sznickname
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.sznickname = "";

        /**
         * personinfo szdynamicpass.
         * @member {string} szdynamicpass
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.szdynamicpass = "";

        /**
         * personinfo szPassword.
         * @member {string} szPassword
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.szPassword = "";

        /**
         * personinfo szgroupname.
         * @member {string} szgroupname
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.szgroupname = "";

        /**
         * personinfo cbinsureenabled.
         * @member {number|Long} cbinsureenabled
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.cbinsureenabled = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * personinfo cbshowserverstatus.
         * @member {number|Long} cbshowserverstatus
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.cbshowserverstatus = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * personinfo cbisagent.
         * @member {number|Long} cbisagent
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.cbisagent = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * personinfo szUnderWrite.
         * @member {string} szUnderWrite
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.szUnderWrite = "";

        /**
         * personinfo cbMemberOrder.
         * @member {number} cbMemberOrder
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.cbMemberOrder = 0;

        /**
         * personinfo MemberOverDate.
         * @member {CommonPmd.ISYSTEMTIME|null|undefined} MemberOverDate
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.MemberOverDate = null;

        /**
         * personinfo dwCheckUserRight.
         * @member {number|Long} dwCheckUserRight
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.dwCheckUserRight = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * personinfo szDescribeString.
         * @member {string} szDescribeString
         * @memberof CommonPmd.personinfo
         * @instance
         */
        personinfo.prototype.szDescribeString = "";

        /**
         * Creates a new personinfo instance using the specified properties.
         * @function create
         * @memberof CommonPmd.personinfo
         * @static
         * @param {CommonPmd.Ipersoninfo=} [properties] Properties to set
         * @returns {CommonPmd.personinfo} personinfo instance
         */
        personinfo.create = function create(properties) {
            return new personinfo(properties);
        };

        /**
         * Encodes the specified personinfo message. Does not implicitly {@link CommonPmd.personinfo.verify|verify} messages.
         * @function encode
         * @memberof CommonPmd.personinfo
         * @static
         * @param {CommonPmd.Ipersoninfo} message personinfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        personinfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wfaceid != null && message.hasOwnProperty("wfaceid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.wfaceid);
            if (message.dwuserid != null && message.hasOwnProperty("dwuserid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.dwuserid);
            if (message.dwgameid != null && message.hasOwnProperty("dwgameid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.dwgameid);
            if (message.dwgroupid != null && message.hasOwnProperty("dwgroupid"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.dwgroupid);
            if (message.dwcustomid != null && message.hasOwnProperty("dwcustomid"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.dwcustomid);
            if (message.dwexperience != null && message.hasOwnProperty("dwexperience"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.dwexperience);
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
                writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.cbgender);
            if (message.cbmoormachine != null && message.hasOwnProperty("cbmoormachine"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint64(message.cbmoormachine);
            if (message.szaccounts != null && message.hasOwnProperty("szaccounts"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.szaccounts);
            if (message.sznickname != null && message.hasOwnProperty("sznickname"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.sznickname);
            if (message.szdynamicpass != null && message.hasOwnProperty("szdynamicpass"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.szdynamicpass);
            if (message.szPassword != null && message.hasOwnProperty("szPassword"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.szPassword);
            if (message.szgroupname != null && message.hasOwnProperty("szgroupname"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.szgroupname);
            if (message.cbinsureenabled != null && message.hasOwnProperty("cbinsureenabled"))
                writer.uint32(/* id 19, wireType 0 =*/152).uint64(message.cbinsureenabled);
            if (message.cbshowserverstatus != null && message.hasOwnProperty("cbshowserverstatus"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint64(message.cbshowserverstatus);
            if (message.cbisagent != null && message.hasOwnProperty("cbisagent"))
                writer.uint32(/* id 21, wireType 0 =*/168).uint64(message.cbisagent);
            if (message.szUnderWrite != null && message.hasOwnProperty("szUnderWrite"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.szUnderWrite);
            if (message.cbMemberOrder != null && message.hasOwnProperty("cbMemberOrder"))
                writer.uint32(/* id 23, wireType 0 =*/184).int32(message.cbMemberOrder);
            if (message.MemberOverDate != null && message.hasOwnProperty("MemberOverDate"))
                $root.CommonPmd.SYSTEMTIME.encode(message.MemberOverDate, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
            if (message.dwCheckUserRight != null && message.hasOwnProperty("dwCheckUserRight"))
                writer.uint32(/* id 25, wireType 0 =*/200).uint64(message.dwCheckUserRight);
            if (message.szDescribeString != null && message.hasOwnProperty("szDescribeString"))
                writer.uint32(/* id 26, wireType 2 =*/210).string(message.szDescribeString);
            return writer;
        };

        /**
         * Encodes the specified personinfo message, length delimited. Does not implicitly {@link CommonPmd.personinfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CommonPmd.personinfo
         * @static
         * @param {CommonPmd.Ipersoninfo} message personinfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        personinfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a personinfo message from the specified reader or buffer.
         * @function decode
         * @memberof CommonPmd.personinfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CommonPmd.personinfo} personinfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        personinfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CommonPmd.personinfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.wfaceid = reader.int32();
                    break;
                case 2:
                    message.dwuserid = reader.uint64();
                    break;
                case 3:
                    message.dwgameid = reader.uint64();
                    break;
                case 4:
                    message.dwgroupid = reader.uint64();
                    break;
                case 5:
                    message.dwcustomid = reader.uint64();
                    break;
                case 6:
                    message.dwexperience = reader.uint64();
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
                    message.cbgender = reader.uint64();
                    break;
                case 13:
                    message.cbmoormachine = reader.uint64();
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
                    message.szPassword = reader.string();
                    break;
                case 18:
                    message.szgroupname = reader.string();
                    break;
                case 19:
                    message.cbinsureenabled = reader.uint64();
                    break;
                case 20:
                    message.cbshowserverstatus = reader.uint64();
                    break;
                case 21:
                    message.cbisagent = reader.uint64();
                    break;
                case 22:
                    message.szUnderWrite = reader.string();
                    break;
                case 23:
                    message.cbMemberOrder = reader.int32();
                    break;
                case 24:
                    message.MemberOverDate = $root.CommonPmd.SYSTEMTIME.decode(reader, reader.uint32());
                    break;
                case 25:
                    message.dwCheckUserRight = reader.uint64();
                    break;
                case 26:
                    message.szDescribeString = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a personinfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CommonPmd.personinfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CommonPmd.personinfo} personinfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        personinfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a personinfo message.
         * @function verify
         * @memberof CommonPmd.personinfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        personinfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.wfaceid != null && message.hasOwnProperty("wfaceid"))
                if (!$util.isInteger(message.wfaceid))
                    return "wfaceid: integer expected";
            if (message.dwuserid != null && message.hasOwnProperty("dwuserid"))
                if (!$util.isInteger(message.dwuserid) && !(message.dwuserid && $util.isInteger(message.dwuserid.low) && $util.isInteger(message.dwuserid.high)))
                    return "dwuserid: integer|Long expected";
            if (message.dwgameid != null && message.hasOwnProperty("dwgameid"))
                if (!$util.isInteger(message.dwgameid) && !(message.dwgameid && $util.isInteger(message.dwgameid.low) && $util.isInteger(message.dwgameid.high)))
                    return "dwgameid: integer|Long expected";
            if (message.dwgroupid != null && message.hasOwnProperty("dwgroupid"))
                if (!$util.isInteger(message.dwgroupid) && !(message.dwgroupid && $util.isInteger(message.dwgroupid.low) && $util.isInteger(message.dwgroupid.high)))
                    return "dwgroupid: integer|Long expected";
            if (message.dwcustomid != null && message.hasOwnProperty("dwcustomid"))
                if (!$util.isInteger(message.dwcustomid) && !(message.dwcustomid && $util.isInteger(message.dwcustomid.low) && $util.isInteger(message.dwcustomid.high)))
                    return "dwcustomid: integer|Long expected";
            if (message.dwexperience != null && message.hasOwnProperty("dwexperience"))
                if (!$util.isInteger(message.dwexperience) && !(message.dwexperience && $util.isInteger(message.dwexperience.low) && $util.isInteger(message.dwexperience.high)))
                    return "dwexperience: integer|Long expected";
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
                if (!$util.isInteger(message.cbgender) && !(message.cbgender && $util.isInteger(message.cbgender.low) && $util.isInteger(message.cbgender.high)))
                    return "cbgender: integer|Long expected";
            if (message.cbmoormachine != null && message.hasOwnProperty("cbmoormachine"))
                if (!$util.isInteger(message.cbmoormachine) && !(message.cbmoormachine && $util.isInteger(message.cbmoormachine.low) && $util.isInteger(message.cbmoormachine.high)))
                    return "cbmoormachine: integer|Long expected";
            if (message.szaccounts != null && message.hasOwnProperty("szaccounts"))
                if (!$util.isString(message.szaccounts))
                    return "szaccounts: string expected";
            if (message.sznickname != null && message.hasOwnProperty("sznickname"))
                if (!$util.isString(message.sznickname))
                    return "sznickname: string expected";
            if (message.szdynamicpass != null && message.hasOwnProperty("szdynamicpass"))
                if (!$util.isString(message.szdynamicpass))
                    return "szdynamicpass: string expected";
            if (message.szPassword != null && message.hasOwnProperty("szPassword"))
                if (!$util.isString(message.szPassword))
                    return "szPassword: string expected";
            if (message.szgroupname != null && message.hasOwnProperty("szgroupname"))
                if (!$util.isString(message.szgroupname))
                    return "szgroupname: string expected";
            if (message.cbinsureenabled != null && message.hasOwnProperty("cbinsureenabled"))
                if (!$util.isInteger(message.cbinsureenabled) && !(message.cbinsureenabled && $util.isInteger(message.cbinsureenabled.low) && $util.isInteger(message.cbinsureenabled.high)))
                    return "cbinsureenabled: integer|Long expected";
            if (message.cbshowserverstatus != null && message.hasOwnProperty("cbshowserverstatus"))
                if (!$util.isInteger(message.cbshowserverstatus) && !(message.cbshowserverstatus && $util.isInteger(message.cbshowserverstatus.low) && $util.isInteger(message.cbshowserverstatus.high)))
                    return "cbshowserverstatus: integer|Long expected";
            if (message.cbisagent != null && message.hasOwnProperty("cbisagent"))
                if (!$util.isInteger(message.cbisagent) && !(message.cbisagent && $util.isInteger(message.cbisagent.low) && $util.isInteger(message.cbisagent.high)))
                    return "cbisagent: integer|Long expected";
            if (message.szUnderWrite != null && message.hasOwnProperty("szUnderWrite"))
                if (!$util.isString(message.szUnderWrite))
                    return "szUnderWrite: string expected";
            if (message.cbMemberOrder != null && message.hasOwnProperty("cbMemberOrder"))
                if (!$util.isInteger(message.cbMemberOrder))
                    return "cbMemberOrder: integer expected";
            if (message.MemberOverDate != null && message.hasOwnProperty("MemberOverDate")) {
                var error = $root.CommonPmd.SYSTEMTIME.verify(message.MemberOverDate);
                if (error)
                    return "MemberOverDate." + error;
            }
            if (message.dwCheckUserRight != null && message.hasOwnProperty("dwCheckUserRight"))
                if (!$util.isInteger(message.dwCheckUserRight) && !(message.dwCheckUserRight && $util.isInteger(message.dwCheckUserRight.low) && $util.isInteger(message.dwCheckUserRight.high)))
                    return "dwCheckUserRight: integer|Long expected";
            if (message.szDescribeString != null && message.hasOwnProperty("szDescribeString"))
                if (!$util.isString(message.szDescribeString))
                    return "szDescribeString: string expected";
            return null;
        };

        /**
         * Creates a personinfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CommonPmd.personinfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CommonPmd.personinfo} personinfo
         */
        personinfo.fromObject = function fromObject(object) {
            if (object instanceof $root.CommonPmd.personinfo)
                return object;
            var message = new $root.CommonPmd.personinfo();
            if (object.wfaceid != null)
                message.wfaceid = object.wfaceid | 0;
            if (object.dwuserid != null)
                if ($util.Long)
                    (message.dwuserid = $util.Long.fromValue(object.dwuserid)).unsigned = true;
                else if (typeof object.dwuserid === "string")
                    message.dwuserid = parseInt(object.dwuserid, 10);
                else if (typeof object.dwuserid === "number")
                    message.dwuserid = object.dwuserid;
                else if (typeof object.dwuserid === "object")
                    message.dwuserid = new $util.LongBits(object.dwuserid.low >>> 0, object.dwuserid.high >>> 0).toNumber(true);
            if (object.dwgameid != null)
                if ($util.Long)
                    (message.dwgameid = $util.Long.fromValue(object.dwgameid)).unsigned = true;
                else if (typeof object.dwgameid === "string")
                    message.dwgameid = parseInt(object.dwgameid, 10);
                else if (typeof object.dwgameid === "number")
                    message.dwgameid = object.dwgameid;
                else if (typeof object.dwgameid === "object")
                    message.dwgameid = new $util.LongBits(object.dwgameid.low >>> 0, object.dwgameid.high >>> 0).toNumber(true);
            if (object.dwgroupid != null)
                if ($util.Long)
                    (message.dwgroupid = $util.Long.fromValue(object.dwgroupid)).unsigned = true;
                else if (typeof object.dwgroupid === "string")
                    message.dwgroupid = parseInt(object.dwgroupid, 10);
                else if (typeof object.dwgroupid === "number")
                    message.dwgroupid = object.dwgroupid;
                else if (typeof object.dwgroupid === "object")
                    message.dwgroupid = new $util.LongBits(object.dwgroupid.low >>> 0, object.dwgroupid.high >>> 0).toNumber(true);
            if (object.dwcustomid != null)
                if ($util.Long)
                    (message.dwcustomid = $util.Long.fromValue(object.dwcustomid)).unsigned = true;
                else if (typeof object.dwcustomid === "string")
                    message.dwcustomid = parseInt(object.dwcustomid, 10);
                else if (typeof object.dwcustomid === "number")
                    message.dwcustomid = object.dwcustomid;
                else if (typeof object.dwcustomid === "object")
                    message.dwcustomid = new $util.LongBits(object.dwcustomid.low >>> 0, object.dwcustomid.high >>> 0).toNumber(true);
            if (object.dwexperience != null)
                if ($util.Long)
                    (message.dwexperience = $util.Long.fromValue(object.dwexperience)).unsigned = true;
                else if (typeof object.dwexperience === "string")
                    message.dwexperience = parseInt(object.dwexperience, 10);
                else if (typeof object.dwexperience === "number")
                    message.dwexperience = object.dwexperience;
                else if (typeof object.dwexperience === "object")
                    message.dwexperience = new $util.LongBits(object.dwexperience.low >>> 0, object.dwexperience.high >>> 0).toNumber(true);
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
                if ($util.Long)
                    (message.cbgender = $util.Long.fromValue(object.cbgender)).unsigned = true;
                else if (typeof object.cbgender === "string")
                    message.cbgender = parseInt(object.cbgender, 10);
                else if (typeof object.cbgender === "number")
                    message.cbgender = object.cbgender;
                else if (typeof object.cbgender === "object")
                    message.cbgender = new $util.LongBits(object.cbgender.low >>> 0, object.cbgender.high >>> 0).toNumber(true);
            if (object.cbmoormachine != null)
                if ($util.Long)
                    (message.cbmoormachine = $util.Long.fromValue(object.cbmoormachine)).unsigned = true;
                else if (typeof object.cbmoormachine === "string")
                    message.cbmoormachine = parseInt(object.cbmoormachine, 10);
                else if (typeof object.cbmoormachine === "number")
                    message.cbmoormachine = object.cbmoormachine;
                else if (typeof object.cbmoormachine === "object")
                    message.cbmoormachine = new $util.LongBits(object.cbmoormachine.low >>> 0, object.cbmoormachine.high >>> 0).toNumber(true);
            if (object.szaccounts != null)
                message.szaccounts = String(object.szaccounts);
            if (object.sznickname != null)
                message.sznickname = String(object.sznickname);
            if (object.szdynamicpass != null)
                message.szdynamicpass = String(object.szdynamicpass);
            if (object.szPassword != null)
                message.szPassword = String(object.szPassword);
            if (object.szgroupname != null)
                message.szgroupname = String(object.szgroupname);
            if (object.cbinsureenabled != null)
                if ($util.Long)
                    (message.cbinsureenabled = $util.Long.fromValue(object.cbinsureenabled)).unsigned = true;
                else if (typeof object.cbinsureenabled === "string")
                    message.cbinsureenabled = parseInt(object.cbinsureenabled, 10);
                else if (typeof object.cbinsureenabled === "number")
                    message.cbinsureenabled = object.cbinsureenabled;
                else if (typeof object.cbinsureenabled === "object")
                    message.cbinsureenabled = new $util.LongBits(object.cbinsureenabled.low >>> 0, object.cbinsureenabled.high >>> 0).toNumber(true);
            if (object.cbshowserverstatus != null)
                if ($util.Long)
                    (message.cbshowserverstatus = $util.Long.fromValue(object.cbshowserverstatus)).unsigned = true;
                else if (typeof object.cbshowserverstatus === "string")
                    message.cbshowserverstatus = parseInt(object.cbshowserverstatus, 10);
                else if (typeof object.cbshowserverstatus === "number")
                    message.cbshowserverstatus = object.cbshowserverstatus;
                else if (typeof object.cbshowserverstatus === "object")
                    message.cbshowserverstatus = new $util.LongBits(object.cbshowserverstatus.low >>> 0, object.cbshowserverstatus.high >>> 0).toNumber(true);
            if (object.cbisagent != null)
                if ($util.Long)
                    (message.cbisagent = $util.Long.fromValue(object.cbisagent)).unsigned = true;
                else if (typeof object.cbisagent === "string")
                    message.cbisagent = parseInt(object.cbisagent, 10);
                else if (typeof object.cbisagent === "number")
                    message.cbisagent = object.cbisagent;
                else if (typeof object.cbisagent === "object")
                    message.cbisagent = new $util.LongBits(object.cbisagent.low >>> 0, object.cbisagent.high >>> 0).toNumber(true);
            if (object.szUnderWrite != null)
                message.szUnderWrite = String(object.szUnderWrite);
            if (object.cbMemberOrder != null)
                message.cbMemberOrder = object.cbMemberOrder | 0;
            if (object.MemberOverDate != null) {
                if (typeof object.MemberOverDate !== "object")
                    throw TypeError(".CommonPmd.personinfo.MemberOverDate: object expected");
                message.MemberOverDate = $root.CommonPmd.SYSTEMTIME.fromObject(object.MemberOverDate);
            }
            if (object.dwCheckUserRight != null)
                if ($util.Long)
                    (message.dwCheckUserRight = $util.Long.fromValue(object.dwCheckUserRight)).unsigned = true;
                else if (typeof object.dwCheckUserRight === "string")
                    message.dwCheckUserRight = parseInt(object.dwCheckUserRight, 10);
                else if (typeof object.dwCheckUserRight === "number")
                    message.dwCheckUserRight = object.dwCheckUserRight;
                else if (typeof object.dwCheckUserRight === "object")
                    message.dwCheckUserRight = new $util.LongBits(object.dwCheckUserRight.low >>> 0, object.dwCheckUserRight.high >>> 0).toNumber(true);
            if (object.szDescribeString != null)
                message.szDescribeString = String(object.szDescribeString);
            return message;
        };

        /**
         * Creates a plain object from a personinfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CommonPmd.personinfo
         * @static
         * @param {CommonPmd.personinfo} message personinfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        personinfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.wfaceid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwuserid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwuserid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwgameid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwgameid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwgroupid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwgroupid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwcustomid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwcustomid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwexperience = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwexperience = options.longs === String ? "0" : 0;
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.cbgender = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cbgender = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.cbmoormachine = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cbmoormachine = options.longs === String ? "0" : 0;
                object.szaccounts = "";
                object.sznickname = "";
                object.szdynamicpass = "";
                object.szPassword = "";
                object.szgroupname = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.cbinsureenabled = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cbinsureenabled = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.cbshowserverstatus = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cbshowserverstatus = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.cbisagent = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cbisagent = options.longs === String ? "0" : 0;
                object.szUnderWrite = "";
                object.cbMemberOrder = 0;
                object.MemberOverDate = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwCheckUserRight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwCheckUserRight = options.longs === String ? "0" : 0;
                object.szDescribeString = "";
            }
            if (message.wfaceid != null && message.hasOwnProperty("wfaceid"))
                object.wfaceid = message.wfaceid;
            if (message.dwuserid != null && message.hasOwnProperty("dwuserid"))
                if (typeof message.dwuserid === "number")
                    object.dwuserid = options.longs === String ? String(message.dwuserid) : message.dwuserid;
                else
                    object.dwuserid = options.longs === String ? $util.Long.prototype.toString.call(message.dwuserid) : options.longs === Number ? new $util.LongBits(message.dwuserid.low >>> 0, message.dwuserid.high >>> 0).toNumber(true) : message.dwuserid;
            if (message.dwgameid != null && message.hasOwnProperty("dwgameid"))
                if (typeof message.dwgameid === "number")
                    object.dwgameid = options.longs === String ? String(message.dwgameid) : message.dwgameid;
                else
                    object.dwgameid = options.longs === String ? $util.Long.prototype.toString.call(message.dwgameid) : options.longs === Number ? new $util.LongBits(message.dwgameid.low >>> 0, message.dwgameid.high >>> 0).toNumber(true) : message.dwgameid;
            if (message.dwgroupid != null && message.hasOwnProperty("dwgroupid"))
                if (typeof message.dwgroupid === "number")
                    object.dwgroupid = options.longs === String ? String(message.dwgroupid) : message.dwgroupid;
                else
                    object.dwgroupid = options.longs === String ? $util.Long.prototype.toString.call(message.dwgroupid) : options.longs === Number ? new $util.LongBits(message.dwgroupid.low >>> 0, message.dwgroupid.high >>> 0).toNumber(true) : message.dwgroupid;
            if (message.dwcustomid != null && message.hasOwnProperty("dwcustomid"))
                if (typeof message.dwcustomid === "number")
                    object.dwcustomid = options.longs === String ? String(message.dwcustomid) : message.dwcustomid;
                else
                    object.dwcustomid = options.longs === String ? $util.Long.prototype.toString.call(message.dwcustomid) : options.longs === Number ? new $util.LongBits(message.dwcustomid.low >>> 0, message.dwcustomid.high >>> 0).toNumber(true) : message.dwcustomid;
            if (message.dwexperience != null && message.hasOwnProperty("dwexperience"))
                if (typeof message.dwexperience === "number")
                    object.dwexperience = options.longs === String ? String(message.dwexperience) : message.dwexperience;
                else
                    object.dwexperience = options.longs === String ? $util.Long.prototype.toString.call(message.dwexperience) : options.longs === Number ? new $util.LongBits(message.dwexperience.low >>> 0, message.dwexperience.high >>> 0).toNumber(true) : message.dwexperience;
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
                if (typeof message.cbgender === "number")
                    object.cbgender = options.longs === String ? String(message.cbgender) : message.cbgender;
                else
                    object.cbgender = options.longs === String ? $util.Long.prototype.toString.call(message.cbgender) : options.longs === Number ? new $util.LongBits(message.cbgender.low >>> 0, message.cbgender.high >>> 0).toNumber(true) : message.cbgender;
            if (message.cbmoormachine != null && message.hasOwnProperty("cbmoormachine"))
                if (typeof message.cbmoormachine === "number")
                    object.cbmoormachine = options.longs === String ? String(message.cbmoormachine) : message.cbmoormachine;
                else
                    object.cbmoormachine = options.longs === String ? $util.Long.prototype.toString.call(message.cbmoormachine) : options.longs === Number ? new $util.LongBits(message.cbmoormachine.low >>> 0, message.cbmoormachine.high >>> 0).toNumber(true) : message.cbmoormachine;
            if (message.szaccounts != null && message.hasOwnProperty("szaccounts"))
                object.szaccounts = message.szaccounts;
            if (message.sznickname != null && message.hasOwnProperty("sznickname"))
                object.sznickname = message.sznickname;
            if (message.szdynamicpass != null && message.hasOwnProperty("szdynamicpass"))
                object.szdynamicpass = message.szdynamicpass;
            if (message.szPassword != null && message.hasOwnProperty("szPassword"))
                object.szPassword = message.szPassword;
            if (message.szgroupname != null && message.hasOwnProperty("szgroupname"))
                object.szgroupname = message.szgroupname;
            if (message.cbinsureenabled != null && message.hasOwnProperty("cbinsureenabled"))
                if (typeof message.cbinsureenabled === "number")
                    object.cbinsureenabled = options.longs === String ? String(message.cbinsureenabled) : message.cbinsureenabled;
                else
                    object.cbinsureenabled = options.longs === String ? $util.Long.prototype.toString.call(message.cbinsureenabled) : options.longs === Number ? new $util.LongBits(message.cbinsureenabled.low >>> 0, message.cbinsureenabled.high >>> 0).toNumber(true) : message.cbinsureenabled;
            if (message.cbshowserverstatus != null && message.hasOwnProperty("cbshowserverstatus"))
                if (typeof message.cbshowserverstatus === "number")
                    object.cbshowserverstatus = options.longs === String ? String(message.cbshowserverstatus) : message.cbshowserverstatus;
                else
                    object.cbshowserverstatus = options.longs === String ? $util.Long.prototype.toString.call(message.cbshowserverstatus) : options.longs === Number ? new $util.LongBits(message.cbshowserverstatus.low >>> 0, message.cbshowserverstatus.high >>> 0).toNumber(true) : message.cbshowserverstatus;
            if (message.cbisagent != null && message.hasOwnProperty("cbisagent"))
                if (typeof message.cbisagent === "number")
                    object.cbisagent = options.longs === String ? String(message.cbisagent) : message.cbisagent;
                else
                    object.cbisagent = options.longs === String ? $util.Long.prototype.toString.call(message.cbisagent) : options.longs === Number ? new $util.LongBits(message.cbisagent.low >>> 0, message.cbisagent.high >>> 0).toNumber(true) : message.cbisagent;
            if (message.szUnderWrite != null && message.hasOwnProperty("szUnderWrite"))
                object.szUnderWrite = message.szUnderWrite;
            if (message.cbMemberOrder != null && message.hasOwnProperty("cbMemberOrder"))
                object.cbMemberOrder = message.cbMemberOrder;
            if (message.MemberOverDate != null && message.hasOwnProperty("MemberOverDate"))
                object.MemberOverDate = $root.CommonPmd.SYSTEMTIME.toObject(message.MemberOverDate, options);
            if (message.dwCheckUserRight != null && message.hasOwnProperty("dwCheckUserRight"))
                if (typeof message.dwCheckUserRight === "number")
                    object.dwCheckUserRight = options.longs === String ? String(message.dwCheckUserRight) : message.dwCheckUserRight;
                else
                    object.dwCheckUserRight = options.longs === String ? $util.Long.prototype.toString.call(message.dwCheckUserRight) : options.longs === Number ? new $util.LongBits(message.dwCheckUserRight.low >>> 0, message.dwCheckUserRight.high >>> 0).toNumber(true) : message.dwCheckUserRight;
            if (message.szDescribeString != null && message.hasOwnProperty("szDescribeString"))
                object.szDescribeString = message.szDescribeString;
            return object;
        };

        /**
         * Converts this personinfo to JSON.
         * @function toJSON
         * @memberof CommonPmd.personinfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        personinfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return personinfo;
    })();

    return CommonPmd;
})();

$root.DdzPmd = (function() {

    /**
     * Namespace DdzPmd.
     * @exports DdzPmd
     * @namespace
     */
    var DdzPmd = {};

    DdzPmd.ddz_c2s = (function() {

        /**
         * Properties of a ddz_c2s.
         * @memberof DdzPmd
         * @interface Iddz_c2s
         * @property {NullPmd.Irequest|null} [reqcmd] ddz_c2s reqcmd
         */

        /**
         * Constructs a new ddz_c2s.
         * @memberof DdzPmd
         * @classdesc Represents a ddz_c2s.
         * @implements Iddz_c2s
         * @constructor
         * @param {DdzPmd.Iddz_c2s=} [properties] Properties to set
         */
        function ddz_c2s(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ddz_c2s reqcmd.
         * @member {NullPmd.Irequest|null|undefined} reqcmd
         * @memberof DdzPmd.ddz_c2s
         * @instance
         */
        ddz_c2s.prototype.reqcmd = null;

        /**
         * Creates a new ddz_c2s instance using the specified properties.
         * @function create
         * @memberof DdzPmd.ddz_c2s
         * @static
         * @param {DdzPmd.Iddz_c2s=} [properties] Properties to set
         * @returns {DdzPmd.ddz_c2s} ddz_c2s instance
         */
        ddz_c2s.create = function create(properties) {
            return new ddz_c2s(properties);
        };

        /**
         * Encodes the specified ddz_c2s message. Does not implicitly {@link DdzPmd.ddz_c2s.verify|verify} messages.
         * @function encode
         * @memberof DdzPmd.ddz_c2s
         * @static
         * @param {DdzPmd.Iddz_c2s} message ddz_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ddz_c2s.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd"))
                $root.NullPmd.request.encode(message.reqcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ddz_c2s message, length delimited. Does not implicitly {@link DdzPmd.ddz_c2s.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DdzPmd.ddz_c2s
         * @static
         * @param {DdzPmd.Iddz_c2s} message ddz_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ddz_c2s.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ddz_c2s message from the specified reader or buffer.
         * @function decode
         * @memberof DdzPmd.ddz_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DdzPmd.ddz_c2s} ddz_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ddz_c2s.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.DdzPmd.ddz_c2s();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqcmd = $root.NullPmd.request.decode(reader, reader.uint32());
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
         * @memberof DdzPmd.ddz_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DdzPmd.ddz_c2s} ddz_c2s
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
         * @memberof DdzPmd.ddz_c2s
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ddz_c2s.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd")) {
                var error = $root.NullPmd.request.verify(message.reqcmd);
                if (error)
                    return "reqcmd." + error;
            }
            return null;
        };

        /**
         * Creates a ddz_c2s message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DdzPmd.ddz_c2s
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DdzPmd.ddz_c2s} ddz_c2s
         */
        ddz_c2s.fromObject = function fromObject(object) {
            if (object instanceof $root.DdzPmd.ddz_c2s)
                return object;
            var message = new $root.DdzPmd.ddz_c2s();
            if (object.reqcmd != null) {
                if (typeof object.reqcmd !== "object")
                    throw TypeError(".DdzPmd.ddz_c2s.reqcmd: object expected");
                message.reqcmd = $root.NullPmd.request.fromObject(object.reqcmd);
            }
            return message;
        };

        /**
         * Creates a plain object from a ddz_c2s message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DdzPmd.ddz_c2s
         * @static
         * @param {DdzPmd.ddz_c2s} message ddz_c2s
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
                object.reqcmd = $root.NullPmd.request.toObject(message.reqcmd, options);
            return object;
        };

        /**
         * Converts this ddz_c2s to JSON.
         * @function toJSON
         * @memberof DdzPmd.ddz_c2s
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ddz_c2s.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ddz_c2s;
    })();

    return DdzPmd;
})();

$root.NullPmd = (function() {

    /**
     * Namespace NullPmd.
     * @exports NullPmd
     * @namespace
     */
    var NullPmd = {};

    NullPmd.request = (function() {

        /**
         * Properties of a request.
         * @memberof NullPmd
         * @interface Irequest
         */

        /**
         * Constructs a new request.
         * @memberof NullPmd
         * @classdesc Represents a request.
         * @implements Irequest
         * @constructor
         * @param {NullPmd.Irequest=} [properties] Properties to set
         */
        function request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new request instance using the specified properties.
         * @function create
         * @memberof NullPmd.request
         * @static
         * @param {NullPmd.Irequest=} [properties] Properties to set
         * @returns {NullPmd.request} request instance
         */
        request.create = function create(properties) {
            return new request(properties);
        };

        /**
         * Encodes the specified request message. Does not implicitly {@link NullPmd.request.verify|verify} messages.
         * @function encode
         * @memberof NullPmd.request
         * @static
         * @param {NullPmd.Irequest} message request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified request message, length delimited. Does not implicitly {@link NullPmd.request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NullPmd.request
         * @static
         * @param {NullPmd.Irequest} message request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a request message from the specified reader or buffer.
         * @function decode
         * @memberof NullPmd.request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NullPmd.request} request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NullPmd.request();
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
         * Decodes a request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NullPmd.request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NullPmd.request} request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a request message.
         * @function verify
         * @memberof NullPmd.request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NullPmd.request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NullPmd.request} request
         */
        request.fromObject = function fromObject(object) {
            if (object instanceof $root.NullPmd.request)
                return object;
            return new $root.NullPmd.request();
        };

        /**
         * Creates a plain object from a request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NullPmd.request
         * @static
         * @param {NullPmd.request} message request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        request.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this request to JSON.
         * @function toJSON
         * @memberof NullPmd.request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return request;
    })();

    NullPmd.response = (function() {

        /**
         * Properties of a response.
         * @memberof NullPmd
         * @interface Iresponse
         * @property {number|null} [result] response result
         * @property {string|null} [errordescription] response errordescription
         */

        /**
         * Constructs a new response.
         * @memberof NullPmd
         * @classdesc Represents a response.
         * @implements Iresponse
         * @constructor
         * @param {NullPmd.Iresponse=} [properties] Properties to set
         */
        function response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * response result.
         * @member {number} result
         * @memberof NullPmd.response
         * @instance
         */
        response.prototype.result = 0;

        /**
         * response errordescription.
         * @member {string} errordescription
         * @memberof NullPmd.response
         * @instance
         */
        response.prototype.errordescription = "";

        /**
         * Creates a new response instance using the specified properties.
         * @function create
         * @memberof NullPmd.response
         * @static
         * @param {NullPmd.Iresponse=} [properties] Properties to set
         * @returns {NullPmd.response} response instance
         */
        response.create = function create(properties) {
            return new response(properties);
        };

        /**
         * Encodes the specified response message. Does not implicitly {@link NullPmd.response.verify|verify} messages.
         * @function encode
         * @memberof NullPmd.response
         * @static
         * @param {NullPmd.Iresponse} message response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.result != null && message.hasOwnProperty("result"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
            if (message.errordescription != null && message.hasOwnProperty("errordescription"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.errordescription);
            return writer;
        };

        /**
         * Encodes the specified response message, length delimited. Does not implicitly {@link NullPmd.response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NullPmd.response
         * @static
         * @param {NullPmd.Iresponse} message response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a response message from the specified reader or buffer.
         * @function decode
         * @memberof NullPmd.response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NullPmd.response} response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NullPmd.response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                case 2:
                    message.errordescription = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NullPmd.response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NullPmd.response} response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a response message.
         * @function verify
         * @memberof NullPmd.response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.result != null && message.hasOwnProperty("result"))
                if (!$util.isInteger(message.result))
                    return "result: integer expected";
            if (message.errordescription != null && message.hasOwnProperty("errordescription"))
                if (!$util.isString(message.errordescription))
                    return "errordescription: string expected";
            return null;
        };

        /**
         * Creates a response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NullPmd.response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NullPmd.response} response
         */
        response.fromObject = function fromObject(object) {
            if (object instanceof $root.NullPmd.response)
                return object;
            var message = new $root.NullPmd.response();
            if (object.result != null)
                message.result = object.result | 0;
            if (object.errordescription != null)
                message.errordescription = String(object.errordescription);
            return message;
        };

        /**
         * Creates a plain object from a response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NullPmd.response
         * @static
         * @param {NullPmd.response} message response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.result = 0;
                object.errordescription = "";
            }
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = message.result;
            if (message.errordescription != null && message.hasOwnProperty("errordescription"))
                object.errordescription = message.errordescription;
            return object;
        };

        /**
         * Converts this response to JSON.
         * @function toJSON
         * @memberof NullPmd.response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return response;
    })();

    NullPmd.indication = (function() {

        /**
         * Properties of an indication.
         * @memberof NullPmd
         * @interface Iindication
         */

        /**
         * Constructs a new indication.
         * @memberof NullPmd
         * @classdesc Represents an indication.
         * @implements Iindication
         * @constructor
         * @param {NullPmd.Iindication=} [properties] Properties to set
         */
        function indication(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new indication instance using the specified properties.
         * @function create
         * @memberof NullPmd.indication
         * @static
         * @param {NullPmd.Iindication=} [properties] Properties to set
         * @returns {NullPmd.indication} indication instance
         */
        indication.create = function create(properties) {
            return new indication(properties);
        };

        /**
         * Encodes the specified indication message. Does not implicitly {@link NullPmd.indication.verify|verify} messages.
         * @function encode
         * @memberof NullPmd.indication
         * @static
         * @param {NullPmd.Iindication} message indication message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        indication.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified indication message, length delimited. Does not implicitly {@link NullPmd.indication.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NullPmd.indication
         * @static
         * @param {NullPmd.Iindication} message indication message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        indication.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an indication message from the specified reader or buffer.
         * @function decode
         * @memberof NullPmd.indication
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NullPmd.indication} indication
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        indication.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NullPmd.indication();
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
         * Decodes an indication message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NullPmd.indication
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NullPmd.indication} indication
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        indication.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an indication message.
         * @function verify
         * @memberof NullPmd.indication
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        indication.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an indication message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NullPmd.indication
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NullPmd.indication} indication
         */
        indication.fromObject = function fromObject(object) {
            if (object instanceof $root.NullPmd.indication)
                return object;
            return new $root.NullPmd.indication();
        };

        /**
         * Creates a plain object from an indication message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NullPmd.indication
         * @static
         * @param {NullPmd.indication} message indication
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        indication.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this indication to JSON.
         * @function toJSON
         * @memberof NullPmd.indication
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        indication.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return indication;
    })();

    NullPmd.command = (function() {

        /**
         * Properties of a command.
         * @memberof NullPmd
         * @interface Icommand
         * @property {number|Long|null} [mainid] command mainid
         * @property {number|Long|null} [subid] command subid
         */

        /**
         * Constructs a new command.
         * @memberof NullPmd
         * @classdesc Represents a command.
         * @implements Icommand
         * @constructor
         * @param {NullPmd.Icommand=} [properties] Properties to set
         */
        function command(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * command mainid.
         * @member {number|Long} mainid
         * @memberof NullPmd.command
         * @instance
         */
        command.prototype.mainid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * command subid.
         * @member {number|Long} subid
         * @memberof NullPmd.command
         * @instance
         */
        command.prototype.subid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new command instance using the specified properties.
         * @function create
         * @memberof NullPmd.command
         * @static
         * @param {NullPmd.Icommand=} [properties] Properties to set
         * @returns {NullPmd.command} command instance
         */
        command.create = function create(properties) {
            return new command(properties);
        };

        /**
         * Encodes the specified command message. Does not implicitly {@link NullPmd.command.verify|verify} messages.
         * @function encode
         * @memberof NullPmd.command
         * @static
         * @param {NullPmd.Icommand} message command message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        command.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mainid != null && message.hasOwnProperty("mainid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.mainid);
            if (message.subid != null && message.hasOwnProperty("subid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.subid);
            return writer;
        };

        /**
         * Encodes the specified command message, length delimited. Does not implicitly {@link NullPmd.command.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NullPmd.command
         * @static
         * @param {NullPmd.Icommand} message command message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        command.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a command message from the specified reader or buffer.
         * @function decode
         * @memberof NullPmd.command
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NullPmd.command} command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        command.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NullPmd.command();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mainid = reader.uint64();
                    break;
                case 2:
                    message.subid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a command message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NullPmd.command
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NullPmd.command} command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        command.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a command message.
         * @function verify
         * @memberof NullPmd.command
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        command.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mainid != null && message.hasOwnProperty("mainid"))
                if (!$util.isInteger(message.mainid) && !(message.mainid && $util.isInteger(message.mainid.low) && $util.isInteger(message.mainid.high)))
                    return "mainid: integer|Long expected";
            if (message.subid != null && message.hasOwnProperty("subid"))
                if (!$util.isInteger(message.subid) && !(message.subid && $util.isInteger(message.subid.low) && $util.isInteger(message.subid.high)))
                    return "subid: integer|Long expected";
            return null;
        };

        /**
         * Creates a command message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NullPmd.command
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NullPmd.command} command
         */
        command.fromObject = function fromObject(object) {
            if (object instanceof $root.NullPmd.command)
                return object;
            var message = new $root.NullPmd.command();
            if (object.mainid != null)
                if ($util.Long)
                    (message.mainid = $util.Long.fromValue(object.mainid)).unsigned = true;
                else if (typeof object.mainid === "string")
                    message.mainid = parseInt(object.mainid, 10);
                else if (typeof object.mainid === "number")
                    message.mainid = object.mainid;
                else if (typeof object.mainid === "object")
                    message.mainid = new $util.LongBits(object.mainid.low >>> 0, object.mainid.high >>> 0).toNumber(true);
            if (object.subid != null)
                if ($util.Long)
                    (message.subid = $util.Long.fromValue(object.subid)).unsigned = true;
                else if (typeof object.subid === "string")
                    message.subid = parseInt(object.subid, 10);
                else if (typeof object.subid === "number")
                    message.subid = object.subid;
                else if (typeof object.subid === "object")
                    message.subid = new $util.LongBits(object.subid.low >>> 0, object.subid.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a command message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NullPmd.command
         * @static
         * @param {NullPmd.command} message command
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        command.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.mainid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.mainid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.subid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.subid = options.longs === String ? "0" : 0;
            }
            if (message.mainid != null && message.hasOwnProperty("mainid"))
                if (typeof message.mainid === "number")
                    object.mainid = options.longs === String ? String(message.mainid) : message.mainid;
                else
                    object.mainid = options.longs === String ? $util.Long.prototype.toString.call(message.mainid) : options.longs === Number ? new $util.LongBits(message.mainid.low >>> 0, message.mainid.high >>> 0).toNumber(true) : message.mainid;
            if (message.subid != null && message.hasOwnProperty("subid"))
                if (typeof message.subid === "number")
                    object.subid = options.longs === String ? String(message.subid) : message.subid;
                else
                    object.subid = options.longs === String ? $util.Long.prototype.toString.call(message.subid) : options.longs === Number ? new $util.LongBits(message.subid.low >>> 0, message.subid.high >>> 0).toNumber(true) : message.subid;
            return object;
        };

        /**
         * Converts this command to JSON.
         * @function toJSON
         * @memberof NullPmd.command
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        command.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return command;
    })();

    NullPmd.info = (function() {

        /**
         * Properties of an info.
         * @memberof NullPmd
         * @interface Iinfo
         * @property {number|Long|null} [cbdatakind] info cbdatakind
         * @property {number|Long|null} [cbcheckcode] info cbcheckcode
         * @property {number|Long|null} [wpacketsize] info wpacketsize
         */

        /**
         * Constructs a new info.
         * @memberof NullPmd
         * @classdesc Represents an info.
         * @implements Iinfo
         * @constructor
         * @param {NullPmd.Iinfo=} [properties] Properties to set
         */
        function info(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * info cbdatakind.
         * @member {number|Long} cbdatakind
         * @memberof NullPmd.info
         * @instance
         */
        info.prototype.cbdatakind = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * info cbcheckcode.
         * @member {number|Long} cbcheckcode
         * @memberof NullPmd.info
         * @instance
         */
        info.prototype.cbcheckcode = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * info wpacketsize.
         * @member {number|Long} wpacketsize
         * @memberof NullPmd.info
         * @instance
         */
        info.prototype.wpacketsize = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new info instance using the specified properties.
         * @function create
         * @memberof NullPmd.info
         * @static
         * @param {NullPmd.Iinfo=} [properties] Properties to set
         * @returns {NullPmd.info} info instance
         */
        info.create = function create(properties) {
            return new info(properties);
        };

        /**
         * Encodes the specified info message. Does not implicitly {@link NullPmd.info.verify|verify} messages.
         * @function encode
         * @memberof NullPmd.info
         * @static
         * @param {NullPmd.Iinfo} message info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        info.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.cbdatakind != null && message.hasOwnProperty("cbdatakind"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.cbdatakind);
            if (message.cbcheckcode != null && message.hasOwnProperty("cbcheckcode"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.cbcheckcode);
            if (message.wpacketsize != null && message.hasOwnProperty("wpacketsize"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.wpacketsize);
            return writer;
        };

        /**
         * Encodes the specified info message, length delimited. Does not implicitly {@link NullPmd.info.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NullPmd.info
         * @static
         * @param {NullPmd.Iinfo} message info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        info.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an info message from the specified reader or buffer.
         * @function decode
         * @memberof NullPmd.info
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NullPmd.info} info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        info.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NullPmd.info();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cbdatakind = reader.uint64();
                    break;
                case 2:
                    message.cbcheckcode = reader.uint64();
                    break;
                case 3:
                    message.wpacketsize = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an info message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NullPmd.info
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NullPmd.info} info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        info.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an info message.
         * @function verify
         * @memberof NullPmd.info
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        info.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.cbdatakind != null && message.hasOwnProperty("cbdatakind"))
                if (!$util.isInteger(message.cbdatakind) && !(message.cbdatakind && $util.isInteger(message.cbdatakind.low) && $util.isInteger(message.cbdatakind.high)))
                    return "cbdatakind: integer|Long expected";
            if (message.cbcheckcode != null && message.hasOwnProperty("cbcheckcode"))
                if (!$util.isInteger(message.cbcheckcode) && !(message.cbcheckcode && $util.isInteger(message.cbcheckcode.low) && $util.isInteger(message.cbcheckcode.high)))
                    return "cbcheckcode: integer|Long expected";
            if (message.wpacketsize != null && message.hasOwnProperty("wpacketsize"))
                if (!$util.isInteger(message.wpacketsize) && !(message.wpacketsize && $util.isInteger(message.wpacketsize.low) && $util.isInteger(message.wpacketsize.high)))
                    return "wpacketsize: integer|Long expected";
            return null;
        };

        /**
         * Creates an info message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NullPmd.info
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NullPmd.info} info
         */
        info.fromObject = function fromObject(object) {
            if (object instanceof $root.NullPmd.info)
                return object;
            var message = new $root.NullPmd.info();
            if (object.cbdatakind != null)
                if ($util.Long)
                    (message.cbdatakind = $util.Long.fromValue(object.cbdatakind)).unsigned = true;
                else if (typeof object.cbdatakind === "string")
                    message.cbdatakind = parseInt(object.cbdatakind, 10);
                else if (typeof object.cbdatakind === "number")
                    message.cbdatakind = object.cbdatakind;
                else if (typeof object.cbdatakind === "object")
                    message.cbdatakind = new $util.LongBits(object.cbdatakind.low >>> 0, object.cbdatakind.high >>> 0).toNumber(true);
            if (object.cbcheckcode != null)
                if ($util.Long)
                    (message.cbcheckcode = $util.Long.fromValue(object.cbcheckcode)).unsigned = true;
                else if (typeof object.cbcheckcode === "string")
                    message.cbcheckcode = parseInt(object.cbcheckcode, 10);
                else if (typeof object.cbcheckcode === "number")
                    message.cbcheckcode = object.cbcheckcode;
                else if (typeof object.cbcheckcode === "object")
                    message.cbcheckcode = new $util.LongBits(object.cbcheckcode.low >>> 0, object.cbcheckcode.high >>> 0).toNumber(true);
            if (object.wpacketsize != null)
                if ($util.Long)
                    (message.wpacketsize = $util.Long.fromValue(object.wpacketsize)).unsigned = true;
                else if (typeof object.wpacketsize === "string")
                    message.wpacketsize = parseInt(object.wpacketsize, 10);
                else if (typeof object.wpacketsize === "number")
                    message.wpacketsize = object.wpacketsize;
                else if (typeof object.wpacketsize === "object")
                    message.wpacketsize = new $util.LongBits(object.wpacketsize.low >>> 0, object.wpacketsize.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from an info message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NullPmd.info
         * @static
         * @param {NullPmd.info} message info
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        info.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.cbdatakind = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cbdatakind = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.cbcheckcode = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.cbcheckcode = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.wpacketsize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.wpacketsize = options.longs === String ? "0" : 0;
            }
            if (message.cbdatakind != null && message.hasOwnProperty("cbdatakind"))
                if (typeof message.cbdatakind === "number")
                    object.cbdatakind = options.longs === String ? String(message.cbdatakind) : message.cbdatakind;
                else
                    object.cbdatakind = options.longs === String ? $util.Long.prototype.toString.call(message.cbdatakind) : options.longs === Number ? new $util.LongBits(message.cbdatakind.low >>> 0, message.cbdatakind.high >>> 0).toNumber(true) : message.cbdatakind;
            if (message.cbcheckcode != null && message.hasOwnProperty("cbcheckcode"))
                if (typeof message.cbcheckcode === "number")
                    object.cbcheckcode = options.longs === String ? String(message.cbcheckcode) : message.cbcheckcode;
                else
                    object.cbcheckcode = options.longs === String ? $util.Long.prototype.toString.call(message.cbcheckcode) : options.longs === Number ? new $util.LongBits(message.cbcheckcode.low >>> 0, message.cbcheckcode.high >>> 0).toNumber(true) : message.cbcheckcode;
            if (message.wpacketsize != null && message.hasOwnProperty("wpacketsize"))
                if (typeof message.wpacketsize === "number")
                    object.wpacketsize = options.longs === String ? String(message.wpacketsize) : message.wpacketsize;
                else
                    object.wpacketsize = options.longs === String ? $util.Long.prototype.toString.call(message.wpacketsize) : options.longs === Number ? new $util.LongBits(message.wpacketsize.low >>> 0, message.wpacketsize.high >>> 0).toNumber(true) : message.wpacketsize;
            return object;
        };

        /**
         * Converts this info to JSON.
         * @function toJSON
         * @memberof NullPmd.info
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        info.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return info;
    })();

    NullPmd.head = (function() {

        /**
         * Properties of a head.
         * @memberof NullPmd
         * @interface Ihead
         * @property {NullPmd.Icommand|null} [command] head command
         * @property {NullPmd.Iinfo|null} [info] head info
         */

        /**
         * Constructs a new head.
         * @memberof NullPmd
         * @classdesc Represents a head.
         * @implements Ihead
         * @constructor
         * @param {NullPmd.Ihead=} [properties] Properties to set
         */
        function head(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * head command.
         * @member {NullPmd.Icommand|null|undefined} command
         * @memberof NullPmd.head
         * @instance
         */
        head.prototype.command = null;

        /**
         * head info.
         * @member {NullPmd.Iinfo|null|undefined} info
         * @memberof NullPmd.head
         * @instance
         */
        head.prototype.info = null;

        /**
         * Creates a new head instance using the specified properties.
         * @function create
         * @memberof NullPmd.head
         * @static
         * @param {NullPmd.Ihead=} [properties] Properties to set
         * @returns {NullPmd.head} head instance
         */
        head.create = function create(properties) {
            return new head(properties);
        };

        /**
         * Encodes the specified head message. Does not implicitly {@link NullPmd.head.verify|verify} messages.
         * @function encode
         * @memberof NullPmd.head
         * @static
         * @param {NullPmd.Ihead} message head message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        head.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.command != null && message.hasOwnProperty("command"))
                $root.NullPmd.command.encode(message.command, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.info != null && message.hasOwnProperty("info"))
                $root.NullPmd.info.encode(message.info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified head message, length delimited. Does not implicitly {@link NullPmd.head.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NullPmd.head
         * @static
         * @param {NullPmd.Ihead} message head message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        head.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a head message from the specified reader or buffer.
         * @function decode
         * @memberof NullPmd.head
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NullPmd.head} head
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        head.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NullPmd.head();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.command = $root.NullPmd.command.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.info = $root.NullPmd.info.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a head message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NullPmd.head
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NullPmd.head} head
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        head.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a head message.
         * @function verify
         * @memberof NullPmd.head
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        head.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.command != null && message.hasOwnProperty("command")) {
                var error = $root.NullPmd.command.verify(message.command);
                if (error)
                    return "command." + error;
            }
            if (message.info != null && message.hasOwnProperty("info")) {
                var error = $root.NullPmd.info.verify(message.info);
                if (error)
                    return "info." + error;
            }
            return null;
        };

        /**
         * Creates a head message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NullPmd.head
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NullPmd.head} head
         */
        head.fromObject = function fromObject(object) {
            if (object instanceof $root.NullPmd.head)
                return object;
            var message = new $root.NullPmd.head();
            if (object.command != null) {
                if (typeof object.command !== "object")
                    throw TypeError(".NullPmd.head.command: object expected");
                message.command = $root.NullPmd.command.fromObject(object.command);
            }
            if (object.info != null) {
                if (typeof object.info !== "object")
                    throw TypeError(".NullPmd.head.info: object expected");
                message.info = $root.NullPmd.info.fromObject(object.info);
            }
            return message;
        };

        /**
         * Creates a plain object from a head message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NullPmd.head
         * @static
         * @param {NullPmd.head} message head
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        head.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.command = null;
                object.info = null;
            }
            if (message.command != null && message.hasOwnProperty("command"))
                object.command = $root.NullPmd.command.toObject(message.command, options);
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = $root.NullPmd.info.toObject(message.info, options);
            return object;
        };

        /**
         * Converts this head to JSON.
         * @function toJSON
         * @memberof NullPmd.head
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        head.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return head;
    })();

    NullPmd.message = (function() {

        /**
         * Properties of a message.
         * @memberof NullPmd
         * @interface Imessage
         * @property {NullPmd.Ihead|null} [head] message head
         * @property {Uint8Array|null} [data] message data
         */

        /**
         * Constructs a new message.
         * @memberof NullPmd
         * @classdesc Represents a message.
         * @implements Imessage
         * @constructor
         * @param {NullPmd.Imessage=} [properties] Properties to set
         */
        function message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * message head.
         * @member {NullPmd.Ihead|null|undefined} head
         * @memberof NullPmd.message
         * @instance
         */
        message.prototype.head = null;

        /**
         * message data.
         * @member {Uint8Array} data
         * @memberof NullPmd.message
         * @instance
         */
        message.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new message instance using the specified properties.
         * @function create
         * @memberof NullPmd.message
         * @static
         * @param {NullPmd.Imessage=} [properties] Properties to set
         * @returns {NullPmd.message} message instance
         */
        message.create = function create(properties) {
            return new message(properties);
        };

        /**
         * Encodes the specified message message. Does not implicitly {@link NullPmd.message.verify|verify} messages.
         * @function encode
         * @memberof NullPmd.message
         * @static
         * @param {NullPmd.Imessage} message message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.head != null && message.hasOwnProperty("head"))
                $root.NullPmd.head.encode(message.head, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified message message, length delimited. Does not implicitly {@link NullPmd.message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NullPmd.message
         * @static
         * @param {NullPmd.Imessage} message message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a message message from the specified reader or buffer.
         * @function decode
         * @memberof NullPmd.message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NullPmd.message} message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.NullPmd.message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.head = $root.NullPmd.head.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NullPmd.message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NullPmd.message} message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a message message.
         * @function verify
         * @memberof NullPmd.message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.head != null && message.hasOwnProperty("head")) {
                var error = $root.NullPmd.head.verify(message.head);
                if (error)
                    return "head." + error;
            }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates a message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NullPmd.message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NullPmd.message} message
         */
        message.fromObject = function fromObject(object) {
            if (object instanceof $root.NullPmd.message)
                return object;
            var message = new $root.NullPmd.message();
            if (object.head != null) {
                if (typeof object.head !== "object")
                    throw TypeError(".NullPmd.message.head: object expected");
                message.head = $root.NullPmd.head.fromObject(object.head);
            }
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from a message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NullPmd.message
         * @static
         * @param {NullPmd.message} message message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.head = null;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.head != null && message.hasOwnProperty("head"))
                object.head = $root.NullPmd.head.toObject(message.head, options);
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this message to JSON.
         * @function toJSON
         * @memberof NullPmd.message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return message;
    })();

    return NullPmd;
})();

$root.GamePmd = (function() {

    /**
     * Namespace GamePmd.
     * @exports GamePmd
     * @namespace
     */
    var GamePmd = {};

    GamePmd.taggametype = (function() {

        /**
         * Properties of a taggametype.
         * @memberof GamePmd
         * @interface Itaggametype
         * @property {number|null} [wjoinid] taggametype wjoinid
         * @property {number|null} [wsortid] taggametype wsortid
         * @property {number|null} [wtypeid] taggametype wtypeid
         * @property {string|null} [sztypename] taggametype sztypename
         */

        /**
         * Constructs a new taggametype.
         * @memberof GamePmd
         * @classdesc Represents a taggametype.
         * @implements Itaggametype
         * @constructor
         * @param {GamePmd.Itaggametype=} [properties] Properties to set
         */
        function taggametype(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * taggametype wjoinid.
         * @member {number} wjoinid
         * @memberof GamePmd.taggametype
         * @instance
         */
        taggametype.prototype.wjoinid = 0;

        /**
         * taggametype wsortid.
         * @member {number} wsortid
         * @memberof GamePmd.taggametype
         * @instance
         */
        taggametype.prototype.wsortid = 0;

        /**
         * taggametype wtypeid.
         * @member {number} wtypeid
         * @memberof GamePmd.taggametype
         * @instance
         */
        taggametype.prototype.wtypeid = 0;

        /**
         * taggametype sztypename.
         * @member {string} sztypename
         * @memberof GamePmd.taggametype
         * @instance
         */
        taggametype.prototype.sztypename = "";

        /**
         * Creates a new taggametype instance using the specified properties.
         * @function create
         * @memberof GamePmd.taggametype
         * @static
         * @param {GamePmd.Itaggametype=} [properties] Properties to set
         * @returns {GamePmd.taggametype} taggametype instance
         */
        taggametype.create = function create(properties) {
            return new taggametype(properties);
        };

        /**
         * Encodes the specified taggametype message. Does not implicitly {@link GamePmd.taggametype.verify|verify} messages.
         * @function encode
         * @memberof GamePmd.taggametype
         * @static
         * @param {GamePmd.Itaggametype} message taggametype message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        taggametype.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wjoinid != null && message.hasOwnProperty("wjoinid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.wjoinid);
            if (message.wsortid != null && message.hasOwnProperty("wsortid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.wsortid);
            if (message.wtypeid != null && message.hasOwnProperty("wtypeid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.wtypeid);
            if (message.sztypename != null && message.hasOwnProperty("sztypename"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sztypename);
            return writer;
        };

        /**
         * Encodes the specified taggametype message, length delimited. Does not implicitly {@link GamePmd.taggametype.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GamePmd.taggametype
         * @static
         * @param {GamePmd.Itaggametype} message taggametype message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        taggametype.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a taggametype message from the specified reader or buffer.
         * @function decode
         * @memberof GamePmd.taggametype
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePmd.taggametype} taggametype
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        taggametype.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePmd.taggametype();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.wjoinid = reader.int32();
                    break;
                case 2:
                    message.wsortid = reader.int32();
                    break;
                case 3:
                    message.wtypeid = reader.int32();
                    break;
                case 4:
                    message.sztypename = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a taggametype message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GamePmd.taggametype
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GamePmd.taggametype} taggametype
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        taggametype.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a taggametype message.
         * @function verify
         * @memberof GamePmd.taggametype
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        taggametype.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.wjoinid != null && message.hasOwnProperty("wjoinid"))
                if (!$util.isInteger(message.wjoinid))
                    return "wjoinid: integer expected";
            if (message.wsortid != null && message.hasOwnProperty("wsortid"))
                if (!$util.isInteger(message.wsortid))
                    return "wsortid: integer expected";
            if (message.wtypeid != null && message.hasOwnProperty("wtypeid"))
                if (!$util.isInteger(message.wtypeid))
                    return "wtypeid: integer expected";
            if (message.sztypename != null && message.hasOwnProperty("sztypename"))
                if (!$util.isString(message.sztypename))
                    return "sztypename: string expected";
            return null;
        };

        /**
         * Creates a taggametype message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GamePmd.taggametype
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GamePmd.taggametype} taggametype
         */
        taggametype.fromObject = function fromObject(object) {
            if (object instanceof $root.GamePmd.taggametype)
                return object;
            var message = new $root.GamePmd.taggametype();
            if (object.wjoinid != null)
                message.wjoinid = object.wjoinid | 0;
            if (object.wsortid != null)
                message.wsortid = object.wsortid | 0;
            if (object.wtypeid != null)
                message.wtypeid = object.wtypeid | 0;
            if (object.sztypename != null)
                message.sztypename = String(object.sztypename);
            return message;
        };

        /**
         * Creates a plain object from a taggametype message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GamePmd.taggametype
         * @static
         * @param {GamePmd.taggametype} message taggametype
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        taggametype.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.wjoinid = 0;
                object.wsortid = 0;
                object.wtypeid = 0;
                object.sztypename = "";
            }
            if (message.wjoinid != null && message.hasOwnProperty("wjoinid"))
                object.wjoinid = message.wjoinid;
            if (message.wsortid != null && message.hasOwnProperty("wsortid"))
                object.wsortid = message.wsortid;
            if (message.wtypeid != null && message.hasOwnProperty("wtypeid"))
                object.wtypeid = message.wtypeid;
            if (message.sztypename != null && message.hasOwnProperty("sztypename"))
                object.sztypename = message.sztypename;
            return object;
        };

        /**
         * Converts this taggametype to JSON.
         * @function toJSON
         * @memberof GamePmd.taggametype
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        taggametype.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return taggametype;
    })();

    GamePmd.taggamekind = (function() {

        /**
         * Properties of a taggamekind.
         * @memberof GamePmd
         * @interface Itaggamekind
         * @property {number|null} [wtypeid] taggamekind wtypeid
         * @property {number|null} [wjoinid] taggamekind wjoinid
         * @property {number|null} [wsortid] taggamekind wsortid
         * @property {number|null} [wkindid] taggamekind wkindid
         * @property {number|null} [wgameid] taggamekind wgameid
         * @property {number|null} [wrecommend] taggamekind wrecommend
         * @property {number|null} [wgameflag] taggamekind wgameflag
         * @property {number|Long|null} [dwonlinecount] taggamekind dwonlinecount
         * @property {number|Long|null} [dwandroidcount] taggamekind dwandroidcount
         * @property {number|Long|null} [dwsetcount] taggamekind dwsetcount
         * @property {number|Long|null} [dwfullcount] taggamekind dwfullcount
         * @property {string|null} [szkindname] taggamekind szkindname
         * @property {string|null} [szprocessname] taggamekind szprocessname
         */

        /**
         * Constructs a new taggamekind.
         * @memberof GamePmd
         * @classdesc Represents a taggamekind.
         * @implements Itaggamekind
         * @constructor
         * @param {GamePmd.Itaggamekind=} [properties] Properties to set
         */
        function taggamekind(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * taggamekind wtypeid.
         * @member {number} wtypeid
         * @memberof GamePmd.taggamekind
         * @instance
         */
        taggamekind.prototype.wtypeid = 0;

        /**
         * taggamekind wjoinid.
         * @member {number} wjoinid
         * @memberof GamePmd.taggamekind
         * @instance
         */
        taggamekind.prototype.wjoinid = 0;

        /**
         * taggamekind wsortid.
         * @member {number} wsortid
         * @memberof GamePmd.taggamekind
         * @instance
         */
        taggamekind.prototype.wsortid = 0;

        /**
         * taggamekind wkindid.
         * @member {number} wkindid
         * @memberof GamePmd.taggamekind
         * @instance
         */
        taggamekind.prototype.wkindid = 0;

        /**
         * taggamekind wgameid.
         * @member {number} wgameid
         * @memberof GamePmd.taggamekind
         * @instance
         */
        taggamekind.prototype.wgameid = 0;

        /**
         * taggamekind wrecommend.
         * @member {number} wrecommend
         * @memberof GamePmd.taggamekind
         * @instance
         */
        taggamekind.prototype.wrecommend = 0;

        /**
         * taggamekind wgameflag.
         * @member {number} wgameflag
         * @memberof GamePmd.taggamekind
         * @instance
         */
        taggamekind.prototype.wgameflag = 0;

        /**
         * taggamekind dwonlinecount.
         * @member {number|Long} dwonlinecount
         * @memberof GamePmd.taggamekind
         * @instance
         */
        taggamekind.prototype.dwonlinecount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * taggamekind dwandroidcount.
         * @member {number|Long} dwandroidcount
         * @memberof GamePmd.taggamekind
         * @instance
         */
        taggamekind.prototype.dwandroidcount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * taggamekind dwsetcount.
         * @member {number|Long} dwsetcount
         * @memberof GamePmd.taggamekind
         * @instance
         */
        taggamekind.prototype.dwsetcount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * taggamekind dwfullcount.
         * @member {number|Long} dwfullcount
         * @memberof GamePmd.taggamekind
         * @instance
         */
        taggamekind.prototype.dwfullcount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * taggamekind szkindname.
         * @member {string} szkindname
         * @memberof GamePmd.taggamekind
         * @instance
         */
        taggamekind.prototype.szkindname = "";

        /**
         * taggamekind szprocessname.
         * @member {string} szprocessname
         * @memberof GamePmd.taggamekind
         * @instance
         */
        taggamekind.prototype.szprocessname = "";

        /**
         * Creates a new taggamekind instance using the specified properties.
         * @function create
         * @memberof GamePmd.taggamekind
         * @static
         * @param {GamePmd.Itaggamekind=} [properties] Properties to set
         * @returns {GamePmd.taggamekind} taggamekind instance
         */
        taggamekind.create = function create(properties) {
            return new taggamekind(properties);
        };

        /**
         * Encodes the specified taggamekind message. Does not implicitly {@link GamePmd.taggamekind.verify|verify} messages.
         * @function encode
         * @memberof GamePmd.taggamekind
         * @static
         * @param {GamePmd.Itaggamekind} message taggamekind message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        taggamekind.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wtypeid != null && message.hasOwnProperty("wtypeid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.wtypeid);
            if (message.wjoinid != null && message.hasOwnProperty("wjoinid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.wjoinid);
            if (message.wsortid != null && message.hasOwnProperty("wsortid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.wsortid);
            if (message.wkindid != null && message.hasOwnProperty("wkindid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.wkindid);
            if (message.wgameid != null && message.hasOwnProperty("wgameid"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.wgameid);
            if (message.wrecommend != null && message.hasOwnProperty("wrecommend"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.wrecommend);
            if (message.wgameflag != null && message.hasOwnProperty("wgameflag"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.wgameflag);
            if (message.dwonlinecount != null && message.hasOwnProperty("dwonlinecount"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.dwonlinecount);
            if (message.dwandroidcount != null && message.hasOwnProperty("dwandroidcount"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.dwandroidcount);
            if (message.dwsetcount != null && message.hasOwnProperty("dwsetcount"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.dwsetcount);
            if (message.dwfullcount != null && message.hasOwnProperty("dwfullcount"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.dwfullcount);
            if (message.szkindname != null && message.hasOwnProperty("szkindname"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.szkindname);
            if (message.szprocessname != null && message.hasOwnProperty("szprocessname"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.szprocessname);
            return writer;
        };

        /**
         * Encodes the specified taggamekind message, length delimited. Does not implicitly {@link GamePmd.taggamekind.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GamePmd.taggamekind
         * @static
         * @param {GamePmd.Itaggamekind} message taggamekind message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        taggamekind.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a taggamekind message from the specified reader or buffer.
         * @function decode
         * @memberof GamePmd.taggamekind
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePmd.taggamekind} taggamekind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        taggamekind.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePmd.taggamekind();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.wtypeid = reader.int32();
                    break;
                case 2:
                    message.wjoinid = reader.int32();
                    break;
                case 3:
                    message.wsortid = reader.int32();
                    break;
                case 4:
                    message.wkindid = reader.int32();
                    break;
                case 5:
                    message.wgameid = reader.int32();
                    break;
                case 6:
                    message.wrecommend = reader.int32();
                    break;
                case 7:
                    message.wgameflag = reader.int32();
                    break;
                case 8:
                    message.dwonlinecount = reader.uint64();
                    break;
                case 9:
                    message.dwandroidcount = reader.uint64();
                    break;
                case 10:
                    message.dwsetcount = reader.uint64();
                    break;
                case 11:
                    message.dwfullcount = reader.uint64();
                    break;
                case 12:
                    message.szkindname = reader.string();
                    break;
                case 13:
                    message.szprocessname = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a taggamekind message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GamePmd.taggamekind
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GamePmd.taggamekind} taggamekind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        taggamekind.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a taggamekind message.
         * @function verify
         * @memberof GamePmd.taggamekind
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        taggamekind.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.wtypeid != null && message.hasOwnProperty("wtypeid"))
                if (!$util.isInteger(message.wtypeid))
                    return "wtypeid: integer expected";
            if (message.wjoinid != null && message.hasOwnProperty("wjoinid"))
                if (!$util.isInteger(message.wjoinid))
                    return "wjoinid: integer expected";
            if (message.wsortid != null && message.hasOwnProperty("wsortid"))
                if (!$util.isInteger(message.wsortid))
                    return "wsortid: integer expected";
            if (message.wkindid != null && message.hasOwnProperty("wkindid"))
                if (!$util.isInteger(message.wkindid))
                    return "wkindid: integer expected";
            if (message.wgameid != null && message.hasOwnProperty("wgameid"))
                if (!$util.isInteger(message.wgameid))
                    return "wgameid: integer expected";
            if (message.wrecommend != null && message.hasOwnProperty("wrecommend"))
                if (!$util.isInteger(message.wrecommend))
                    return "wrecommend: integer expected";
            if (message.wgameflag != null && message.hasOwnProperty("wgameflag"))
                if (!$util.isInteger(message.wgameflag))
                    return "wgameflag: integer expected";
            if (message.dwonlinecount != null && message.hasOwnProperty("dwonlinecount"))
                if (!$util.isInteger(message.dwonlinecount) && !(message.dwonlinecount && $util.isInteger(message.dwonlinecount.low) && $util.isInteger(message.dwonlinecount.high)))
                    return "dwonlinecount: integer|Long expected";
            if (message.dwandroidcount != null && message.hasOwnProperty("dwandroidcount"))
                if (!$util.isInteger(message.dwandroidcount) && !(message.dwandroidcount && $util.isInteger(message.dwandroidcount.low) && $util.isInteger(message.dwandroidcount.high)))
                    return "dwandroidcount: integer|Long expected";
            if (message.dwsetcount != null && message.hasOwnProperty("dwsetcount"))
                if (!$util.isInteger(message.dwsetcount) && !(message.dwsetcount && $util.isInteger(message.dwsetcount.low) && $util.isInteger(message.dwsetcount.high)))
                    return "dwsetcount: integer|Long expected";
            if (message.dwfullcount != null && message.hasOwnProperty("dwfullcount"))
                if (!$util.isInteger(message.dwfullcount) && !(message.dwfullcount && $util.isInteger(message.dwfullcount.low) && $util.isInteger(message.dwfullcount.high)))
                    return "dwfullcount: integer|Long expected";
            if (message.szkindname != null && message.hasOwnProperty("szkindname"))
                if (!$util.isString(message.szkindname))
                    return "szkindname: string expected";
            if (message.szprocessname != null && message.hasOwnProperty("szprocessname"))
                if (!$util.isString(message.szprocessname))
                    return "szprocessname: string expected";
            return null;
        };

        /**
         * Creates a taggamekind message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GamePmd.taggamekind
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GamePmd.taggamekind} taggamekind
         */
        taggamekind.fromObject = function fromObject(object) {
            if (object instanceof $root.GamePmd.taggamekind)
                return object;
            var message = new $root.GamePmd.taggamekind();
            if (object.wtypeid != null)
                message.wtypeid = object.wtypeid | 0;
            if (object.wjoinid != null)
                message.wjoinid = object.wjoinid | 0;
            if (object.wsortid != null)
                message.wsortid = object.wsortid | 0;
            if (object.wkindid != null)
                message.wkindid = object.wkindid | 0;
            if (object.wgameid != null)
                message.wgameid = object.wgameid | 0;
            if (object.wrecommend != null)
                message.wrecommend = object.wrecommend | 0;
            if (object.wgameflag != null)
                message.wgameflag = object.wgameflag | 0;
            if (object.dwonlinecount != null)
                if ($util.Long)
                    (message.dwonlinecount = $util.Long.fromValue(object.dwonlinecount)).unsigned = true;
                else if (typeof object.dwonlinecount === "string")
                    message.dwonlinecount = parseInt(object.dwonlinecount, 10);
                else if (typeof object.dwonlinecount === "number")
                    message.dwonlinecount = object.dwonlinecount;
                else if (typeof object.dwonlinecount === "object")
                    message.dwonlinecount = new $util.LongBits(object.dwonlinecount.low >>> 0, object.dwonlinecount.high >>> 0).toNumber(true);
            if (object.dwandroidcount != null)
                if ($util.Long)
                    (message.dwandroidcount = $util.Long.fromValue(object.dwandroidcount)).unsigned = true;
                else if (typeof object.dwandroidcount === "string")
                    message.dwandroidcount = parseInt(object.dwandroidcount, 10);
                else if (typeof object.dwandroidcount === "number")
                    message.dwandroidcount = object.dwandroidcount;
                else if (typeof object.dwandroidcount === "object")
                    message.dwandroidcount = new $util.LongBits(object.dwandroidcount.low >>> 0, object.dwandroidcount.high >>> 0).toNumber(true);
            if (object.dwsetcount != null)
                if ($util.Long)
                    (message.dwsetcount = $util.Long.fromValue(object.dwsetcount)).unsigned = true;
                else if (typeof object.dwsetcount === "string")
                    message.dwsetcount = parseInt(object.dwsetcount, 10);
                else if (typeof object.dwsetcount === "number")
                    message.dwsetcount = object.dwsetcount;
                else if (typeof object.dwsetcount === "object")
                    message.dwsetcount = new $util.LongBits(object.dwsetcount.low >>> 0, object.dwsetcount.high >>> 0).toNumber(true);
            if (object.dwfullcount != null)
                if ($util.Long)
                    (message.dwfullcount = $util.Long.fromValue(object.dwfullcount)).unsigned = true;
                else if (typeof object.dwfullcount === "string")
                    message.dwfullcount = parseInt(object.dwfullcount, 10);
                else if (typeof object.dwfullcount === "number")
                    message.dwfullcount = object.dwfullcount;
                else if (typeof object.dwfullcount === "object")
                    message.dwfullcount = new $util.LongBits(object.dwfullcount.low >>> 0, object.dwfullcount.high >>> 0).toNumber(true);
            if (object.szkindname != null)
                message.szkindname = String(object.szkindname);
            if (object.szprocessname != null)
                message.szprocessname = String(object.szprocessname);
            return message;
        };

        /**
         * Creates a plain object from a taggamekind message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GamePmd.taggamekind
         * @static
         * @param {GamePmd.taggamekind} message taggamekind
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        taggamekind.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.wtypeid = 0;
                object.wjoinid = 0;
                object.wsortid = 0;
                object.wkindid = 0;
                object.wgameid = 0;
                object.wrecommend = 0;
                object.wgameflag = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwonlinecount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwonlinecount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwandroidcount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwandroidcount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwsetcount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwsetcount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwfullcount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwfullcount = options.longs === String ? "0" : 0;
                object.szkindname = "";
                object.szprocessname = "";
            }
            if (message.wtypeid != null && message.hasOwnProperty("wtypeid"))
                object.wtypeid = message.wtypeid;
            if (message.wjoinid != null && message.hasOwnProperty("wjoinid"))
                object.wjoinid = message.wjoinid;
            if (message.wsortid != null && message.hasOwnProperty("wsortid"))
                object.wsortid = message.wsortid;
            if (message.wkindid != null && message.hasOwnProperty("wkindid"))
                object.wkindid = message.wkindid;
            if (message.wgameid != null && message.hasOwnProperty("wgameid"))
                object.wgameid = message.wgameid;
            if (message.wrecommend != null && message.hasOwnProperty("wrecommend"))
                object.wrecommend = message.wrecommend;
            if (message.wgameflag != null && message.hasOwnProperty("wgameflag"))
                object.wgameflag = message.wgameflag;
            if (message.dwonlinecount != null && message.hasOwnProperty("dwonlinecount"))
                if (typeof message.dwonlinecount === "number")
                    object.dwonlinecount = options.longs === String ? String(message.dwonlinecount) : message.dwonlinecount;
                else
                    object.dwonlinecount = options.longs === String ? $util.Long.prototype.toString.call(message.dwonlinecount) : options.longs === Number ? new $util.LongBits(message.dwonlinecount.low >>> 0, message.dwonlinecount.high >>> 0).toNumber(true) : message.dwonlinecount;
            if (message.dwandroidcount != null && message.hasOwnProperty("dwandroidcount"))
                if (typeof message.dwandroidcount === "number")
                    object.dwandroidcount = options.longs === String ? String(message.dwandroidcount) : message.dwandroidcount;
                else
                    object.dwandroidcount = options.longs === String ? $util.Long.prototype.toString.call(message.dwandroidcount) : options.longs === Number ? new $util.LongBits(message.dwandroidcount.low >>> 0, message.dwandroidcount.high >>> 0).toNumber(true) : message.dwandroidcount;
            if (message.dwsetcount != null && message.hasOwnProperty("dwsetcount"))
                if (typeof message.dwsetcount === "number")
                    object.dwsetcount = options.longs === String ? String(message.dwsetcount) : message.dwsetcount;
                else
                    object.dwsetcount = options.longs === String ? $util.Long.prototype.toString.call(message.dwsetcount) : options.longs === Number ? new $util.LongBits(message.dwsetcount.low >>> 0, message.dwsetcount.high >>> 0).toNumber(true) : message.dwsetcount;
            if (message.dwfullcount != null && message.hasOwnProperty("dwfullcount"))
                if (typeof message.dwfullcount === "number")
                    object.dwfullcount = options.longs === String ? String(message.dwfullcount) : message.dwfullcount;
                else
                    object.dwfullcount = options.longs === String ? $util.Long.prototype.toString.call(message.dwfullcount) : options.longs === Number ? new $util.LongBits(message.dwfullcount.low >>> 0, message.dwfullcount.high >>> 0).toNumber(true) : message.dwfullcount;
            if (message.szkindname != null && message.hasOwnProperty("szkindname"))
                object.szkindname = message.szkindname;
            if (message.szprocessname != null && message.hasOwnProperty("szprocessname"))
                object.szprocessname = message.szprocessname;
            return object;
        };

        /**
         * Converts this taggamekind to JSON.
         * @function toJSON
         * @memberof GamePmd.taggamekind
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        taggamekind.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return taggamekind;
    })();

    GamePmd.tagGameNode = (function() {

        /**
         * Properties of a tagGameNode.
         * @memberof GamePmd
         * @interface ItagGameNode
         * @property {number|null} [wkindid] tagGameNode wkindid
         * @property {number|null} [wjoinid] tagGameNode wjoinid
         * @property {number|null} [wsortid] tagGameNode wsortid
         * @property {number|null} [wnodeid] tagGameNode wnodeid
         * @property {string|null} [sznodename] tagGameNode sznodename
         */

        /**
         * Constructs a new tagGameNode.
         * @memberof GamePmd
         * @classdesc Represents a tagGameNode.
         * @implements ItagGameNode
         * @constructor
         * @param {GamePmd.ItagGameNode=} [properties] Properties to set
         */
        function tagGameNode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagGameNode wkindid.
         * @member {number} wkindid
         * @memberof GamePmd.tagGameNode
         * @instance
         */
        tagGameNode.prototype.wkindid = 0;

        /**
         * tagGameNode wjoinid.
         * @member {number} wjoinid
         * @memberof GamePmd.tagGameNode
         * @instance
         */
        tagGameNode.prototype.wjoinid = 0;

        /**
         * tagGameNode wsortid.
         * @member {number} wsortid
         * @memberof GamePmd.tagGameNode
         * @instance
         */
        tagGameNode.prototype.wsortid = 0;

        /**
         * tagGameNode wnodeid.
         * @member {number} wnodeid
         * @memberof GamePmd.tagGameNode
         * @instance
         */
        tagGameNode.prototype.wnodeid = 0;

        /**
         * tagGameNode sznodename.
         * @member {string} sznodename
         * @memberof GamePmd.tagGameNode
         * @instance
         */
        tagGameNode.prototype.sznodename = "";

        /**
         * Creates a new tagGameNode instance using the specified properties.
         * @function create
         * @memberof GamePmd.tagGameNode
         * @static
         * @param {GamePmd.ItagGameNode=} [properties] Properties to set
         * @returns {GamePmd.tagGameNode} tagGameNode instance
         */
        tagGameNode.create = function create(properties) {
            return new tagGameNode(properties);
        };

        /**
         * Encodes the specified tagGameNode message. Does not implicitly {@link GamePmd.tagGameNode.verify|verify} messages.
         * @function encode
         * @memberof GamePmd.tagGameNode
         * @static
         * @param {GamePmd.ItagGameNode} message tagGameNode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGameNode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wkindid != null && message.hasOwnProperty("wkindid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.wkindid);
            if (message.wjoinid != null && message.hasOwnProperty("wjoinid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.wjoinid);
            if (message.wsortid != null && message.hasOwnProperty("wsortid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.wsortid);
            if (message.wnodeid != null && message.hasOwnProperty("wnodeid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.wnodeid);
            if (message.sznodename != null && message.hasOwnProperty("sznodename"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.sznodename);
            return writer;
        };

        /**
         * Encodes the specified tagGameNode message, length delimited. Does not implicitly {@link GamePmd.tagGameNode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GamePmd.tagGameNode
         * @static
         * @param {GamePmd.ItagGameNode} message tagGameNode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGameNode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagGameNode message from the specified reader or buffer.
         * @function decode
         * @memberof GamePmd.tagGameNode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePmd.tagGameNode} tagGameNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGameNode.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePmd.tagGameNode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.wkindid = reader.int32();
                    break;
                case 2:
                    message.wjoinid = reader.int32();
                    break;
                case 3:
                    message.wsortid = reader.int32();
                    break;
                case 4:
                    message.wnodeid = reader.int32();
                    break;
                case 5:
                    message.sznodename = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagGameNode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GamePmd.tagGameNode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GamePmd.tagGameNode} tagGameNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGameNode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagGameNode message.
         * @function verify
         * @memberof GamePmd.tagGameNode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagGameNode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.wkindid != null && message.hasOwnProperty("wkindid"))
                if (!$util.isInteger(message.wkindid))
                    return "wkindid: integer expected";
            if (message.wjoinid != null && message.hasOwnProperty("wjoinid"))
                if (!$util.isInteger(message.wjoinid))
                    return "wjoinid: integer expected";
            if (message.wsortid != null && message.hasOwnProperty("wsortid"))
                if (!$util.isInteger(message.wsortid))
                    return "wsortid: integer expected";
            if (message.wnodeid != null && message.hasOwnProperty("wnodeid"))
                if (!$util.isInteger(message.wnodeid))
                    return "wnodeid: integer expected";
            if (message.sznodename != null && message.hasOwnProperty("sznodename"))
                if (!$util.isString(message.sznodename))
                    return "sznodename: string expected";
            return null;
        };

        /**
         * Creates a tagGameNode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GamePmd.tagGameNode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GamePmd.tagGameNode} tagGameNode
         */
        tagGameNode.fromObject = function fromObject(object) {
            if (object instanceof $root.GamePmd.tagGameNode)
                return object;
            var message = new $root.GamePmd.tagGameNode();
            if (object.wkindid != null)
                message.wkindid = object.wkindid | 0;
            if (object.wjoinid != null)
                message.wjoinid = object.wjoinid | 0;
            if (object.wsortid != null)
                message.wsortid = object.wsortid | 0;
            if (object.wnodeid != null)
                message.wnodeid = object.wnodeid | 0;
            if (object.sznodename != null)
                message.sznodename = String(object.sznodename);
            return message;
        };

        /**
         * Creates a plain object from a tagGameNode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GamePmd.tagGameNode
         * @static
         * @param {GamePmd.tagGameNode} message tagGameNode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagGameNode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.wkindid = 0;
                object.wjoinid = 0;
                object.wsortid = 0;
                object.wnodeid = 0;
                object.sznodename = "";
            }
            if (message.wkindid != null && message.hasOwnProperty("wkindid"))
                object.wkindid = message.wkindid;
            if (message.wjoinid != null && message.hasOwnProperty("wjoinid"))
                object.wjoinid = message.wjoinid;
            if (message.wsortid != null && message.hasOwnProperty("wsortid"))
                object.wsortid = message.wsortid;
            if (message.wnodeid != null && message.hasOwnProperty("wnodeid"))
                object.wnodeid = message.wnodeid;
            if (message.sznodename != null && message.hasOwnProperty("sznodename"))
                object.sznodename = message.sznodename;
            return object;
        };

        /**
         * Converts this tagGameNode to JSON.
         * @function toJSON
         * @memberof GamePmd.tagGameNode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagGameNode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagGameNode;
    })();

    GamePmd.tagGamePage = (function() {

        /**
         * Properties of a tagGamePage.
         * @memberof GamePmd
         * @interface ItagGamePage
         * @property {number|null} [wpageid] tagGamePage wpageid
         * @property {number|null} [wkindid] tagGamePage wkindid
         * @property {number|null} [wnodeid] tagGamePage wnodeid
         * @property {number|null} [wsortid] tagGamePage wsortid
         * @property {number|null} [woperatetype] tagGamePage woperatetype
         * @property {string|null} [szdisplayname] tagGamePage szdisplayname
         */

        /**
         * Constructs a new tagGamePage.
         * @memberof GamePmd
         * @classdesc Represents a tagGamePage.
         * @implements ItagGamePage
         * @constructor
         * @param {GamePmd.ItagGamePage=} [properties] Properties to set
         */
        function tagGamePage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagGamePage wpageid.
         * @member {number} wpageid
         * @memberof GamePmd.tagGamePage
         * @instance
         */
        tagGamePage.prototype.wpageid = 0;

        /**
         * tagGamePage wkindid.
         * @member {number} wkindid
         * @memberof GamePmd.tagGamePage
         * @instance
         */
        tagGamePage.prototype.wkindid = 0;

        /**
         * tagGamePage wnodeid.
         * @member {number} wnodeid
         * @memberof GamePmd.tagGamePage
         * @instance
         */
        tagGamePage.prototype.wnodeid = 0;

        /**
         * tagGamePage wsortid.
         * @member {number} wsortid
         * @memberof GamePmd.tagGamePage
         * @instance
         */
        tagGamePage.prototype.wsortid = 0;

        /**
         * tagGamePage woperatetype.
         * @member {number} woperatetype
         * @memberof GamePmd.tagGamePage
         * @instance
         */
        tagGamePage.prototype.woperatetype = 0;

        /**
         * tagGamePage szdisplayname.
         * @member {string} szdisplayname
         * @memberof GamePmd.tagGamePage
         * @instance
         */
        tagGamePage.prototype.szdisplayname = "";

        /**
         * Creates a new tagGamePage instance using the specified properties.
         * @function create
         * @memberof GamePmd.tagGamePage
         * @static
         * @param {GamePmd.ItagGamePage=} [properties] Properties to set
         * @returns {GamePmd.tagGamePage} tagGamePage instance
         */
        tagGamePage.create = function create(properties) {
            return new tagGamePage(properties);
        };

        /**
         * Encodes the specified tagGamePage message. Does not implicitly {@link GamePmd.tagGamePage.verify|verify} messages.
         * @function encode
         * @memberof GamePmd.tagGamePage
         * @static
         * @param {GamePmd.ItagGamePage} message tagGamePage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGamePage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wpageid != null && message.hasOwnProperty("wpageid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.wpageid);
            if (message.wkindid != null && message.hasOwnProperty("wkindid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.wkindid);
            if (message.wnodeid != null && message.hasOwnProperty("wnodeid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.wnodeid);
            if (message.wsortid != null && message.hasOwnProperty("wsortid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.wsortid);
            if (message.woperatetype != null && message.hasOwnProperty("woperatetype"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.woperatetype);
            if (message.szdisplayname != null && message.hasOwnProperty("szdisplayname"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.szdisplayname);
            return writer;
        };

        /**
         * Encodes the specified tagGamePage message, length delimited. Does not implicitly {@link GamePmd.tagGamePage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GamePmd.tagGamePage
         * @static
         * @param {GamePmd.ItagGamePage} message tagGamePage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGamePage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagGamePage message from the specified reader or buffer.
         * @function decode
         * @memberof GamePmd.tagGamePage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePmd.tagGamePage} tagGamePage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGamePage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePmd.tagGamePage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.wpageid = reader.int32();
                    break;
                case 2:
                    message.wkindid = reader.int32();
                    break;
                case 3:
                    message.wnodeid = reader.int32();
                    break;
                case 4:
                    message.wsortid = reader.int32();
                    break;
                case 5:
                    message.woperatetype = reader.int32();
                    break;
                case 6:
                    message.szdisplayname = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagGamePage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GamePmd.tagGamePage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GamePmd.tagGamePage} tagGamePage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGamePage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagGamePage message.
         * @function verify
         * @memberof GamePmd.tagGamePage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagGamePage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.wpageid != null && message.hasOwnProperty("wpageid"))
                if (!$util.isInteger(message.wpageid))
                    return "wpageid: integer expected";
            if (message.wkindid != null && message.hasOwnProperty("wkindid"))
                if (!$util.isInteger(message.wkindid))
                    return "wkindid: integer expected";
            if (message.wnodeid != null && message.hasOwnProperty("wnodeid"))
                if (!$util.isInteger(message.wnodeid))
                    return "wnodeid: integer expected";
            if (message.wsortid != null && message.hasOwnProperty("wsortid"))
                if (!$util.isInteger(message.wsortid))
                    return "wsortid: integer expected";
            if (message.woperatetype != null && message.hasOwnProperty("woperatetype"))
                if (!$util.isInteger(message.woperatetype))
                    return "woperatetype: integer expected";
            if (message.szdisplayname != null && message.hasOwnProperty("szdisplayname"))
                if (!$util.isString(message.szdisplayname))
                    return "szdisplayname: string expected";
            return null;
        };

        /**
         * Creates a tagGamePage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GamePmd.tagGamePage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GamePmd.tagGamePage} tagGamePage
         */
        tagGamePage.fromObject = function fromObject(object) {
            if (object instanceof $root.GamePmd.tagGamePage)
                return object;
            var message = new $root.GamePmd.tagGamePage();
            if (object.wpageid != null)
                message.wpageid = object.wpageid | 0;
            if (object.wkindid != null)
                message.wkindid = object.wkindid | 0;
            if (object.wnodeid != null)
                message.wnodeid = object.wnodeid | 0;
            if (object.wsortid != null)
                message.wsortid = object.wsortid | 0;
            if (object.woperatetype != null)
                message.woperatetype = object.woperatetype | 0;
            if (object.szdisplayname != null)
                message.szdisplayname = String(object.szdisplayname);
            return message;
        };

        /**
         * Creates a plain object from a tagGamePage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GamePmd.tagGamePage
         * @static
         * @param {GamePmd.tagGamePage} message tagGamePage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagGamePage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.wpageid = 0;
                object.wkindid = 0;
                object.wnodeid = 0;
                object.wsortid = 0;
                object.woperatetype = 0;
                object.szdisplayname = "";
            }
            if (message.wpageid != null && message.hasOwnProperty("wpageid"))
                object.wpageid = message.wpageid;
            if (message.wkindid != null && message.hasOwnProperty("wkindid"))
                object.wkindid = message.wkindid;
            if (message.wnodeid != null && message.hasOwnProperty("wnodeid"))
                object.wnodeid = message.wnodeid;
            if (message.wsortid != null && message.hasOwnProperty("wsortid"))
                object.wsortid = message.wsortid;
            if (message.woperatetype != null && message.hasOwnProperty("woperatetype"))
                object.woperatetype = message.woperatetype;
            if (message.szdisplayname != null && message.hasOwnProperty("szdisplayname"))
                object.szdisplayname = message.szdisplayname;
            return object;
        };

        /**
         * Converts this tagGamePage to JSON.
         * @function toJSON
         * @memberof GamePmd.tagGamePage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagGamePage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagGamePage;
    })();

    GamePmd.tagGameServer = (function() {

        /**
         * Properties of a tagGameServer.
         * @memberof GamePmd
         * @interface ItagGameServer
         * @property {number|null} [wkindid] tagGameServer wkindid
         * @property {number|null} [wnodeid] tagGameServer wnodeid
         * @property {number|null} [wsortid] tagGameServer wsortid
         * @property {number|null} [wserverid] tagGameServer wserverid
         * @property {number|null} [wserverkind] tagGameServer wserverkind
         * @property {number|null} [wservertype] tagGameServer wservertype
         * @property {number|null} [wserverlevel] tagGameServer wserverlevel
         * @property {number|null} [wserverport] tagGameServer wserverport
         * @property {number|Long|null} [lcellscore] tagGameServer lcellscore
         * @property {number|null} [cbentermember] tagGameServer cbentermember
         * @property {number|Long|null} [lenterscore] tagGameServer lenterscore
         * @property {number|Long|null} [dwserverrule] tagGameServer dwserverrule
         * @property {number|Long|null} [dwonlinecount] tagGameServer dwonlinecount
         * @property {number|Long|null} [dwandroidcount] tagGameServer dwandroidcount
         * @property {number|Long|null} [dwfullcount] tagGameServer dwfullcount
         * @property {string|null} [szserveraddr] tagGameServer szserveraddr
         * @property {string|null} [szservername] tagGameServer szservername
         * @property {number|Long|null} [dwsurporttype] tagGameServer dwsurporttype
         * @property {number|null} [wtablecount] tagGameServer wtablecount
         * @property {number|Long|null} [dwsetplayercount] tagGameServer dwsetplayercount
         * @property {string|null} [szgameinfomation] tagGameServer szgameinfomation
         */

        /**
         * Constructs a new tagGameServer.
         * @memberof GamePmd
         * @classdesc Represents a tagGameServer.
         * @implements ItagGameServer
         * @constructor
         * @param {GamePmd.ItagGameServer=} [properties] Properties to set
         */
        function tagGameServer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagGameServer wkindid.
         * @member {number} wkindid
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.wkindid = 0;

        /**
         * tagGameServer wnodeid.
         * @member {number} wnodeid
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.wnodeid = 0;

        /**
         * tagGameServer wsortid.
         * @member {number} wsortid
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.wsortid = 0;

        /**
         * tagGameServer wserverid.
         * @member {number} wserverid
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.wserverid = 0;

        /**
         * tagGameServer wserverkind.
         * @member {number} wserverkind
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.wserverkind = 0;

        /**
         * tagGameServer wservertype.
         * @member {number} wservertype
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.wservertype = 0;

        /**
         * tagGameServer wserverlevel.
         * @member {number} wserverlevel
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.wserverlevel = 0;

        /**
         * tagGameServer wserverport.
         * @member {number} wserverport
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.wserverport = 0;

        /**
         * tagGameServer lcellscore.
         * @member {number|Long} lcellscore
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.lcellscore = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagGameServer cbentermember.
         * @member {number} cbentermember
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.cbentermember = 0;

        /**
         * tagGameServer lenterscore.
         * @member {number|Long} lenterscore
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.lenterscore = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagGameServer dwserverrule.
         * @member {number|Long} dwserverrule
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.dwserverrule = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagGameServer dwonlinecount.
         * @member {number|Long} dwonlinecount
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.dwonlinecount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagGameServer dwandroidcount.
         * @member {number|Long} dwandroidcount
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.dwandroidcount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagGameServer dwfullcount.
         * @member {number|Long} dwfullcount
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.dwfullcount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagGameServer szserveraddr.
         * @member {string} szserveraddr
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.szserveraddr = "";

        /**
         * tagGameServer szservername.
         * @member {string} szservername
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.szservername = "";

        /**
         * tagGameServer dwsurporttype.
         * @member {number|Long} dwsurporttype
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.dwsurporttype = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagGameServer wtablecount.
         * @member {number} wtablecount
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.wtablecount = 0;

        /**
         * tagGameServer dwsetplayercount.
         * @member {number|Long} dwsetplayercount
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.dwsetplayercount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagGameServer szgameinfomation.
         * @member {string} szgameinfomation
         * @memberof GamePmd.tagGameServer
         * @instance
         */
        tagGameServer.prototype.szgameinfomation = "";

        /**
         * Creates a new tagGameServer instance using the specified properties.
         * @function create
         * @memberof GamePmd.tagGameServer
         * @static
         * @param {GamePmd.ItagGameServer=} [properties] Properties to set
         * @returns {GamePmd.tagGameServer} tagGameServer instance
         */
        tagGameServer.create = function create(properties) {
            return new tagGameServer(properties);
        };

        /**
         * Encodes the specified tagGameServer message. Does not implicitly {@link GamePmd.tagGameServer.verify|verify} messages.
         * @function encode
         * @memberof GamePmd.tagGameServer
         * @static
         * @param {GamePmd.ItagGameServer} message tagGameServer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGameServer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wkindid != null && message.hasOwnProperty("wkindid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.wkindid);
            if (message.wnodeid != null && message.hasOwnProperty("wnodeid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.wnodeid);
            if (message.wsortid != null && message.hasOwnProperty("wsortid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.wsortid);
            if (message.wserverid != null && message.hasOwnProperty("wserverid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.wserverid);
            if (message.wserverkind != null && message.hasOwnProperty("wserverkind"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.wserverkind);
            if (message.wservertype != null && message.hasOwnProperty("wservertype"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.wservertype);
            if (message.wserverlevel != null && message.hasOwnProperty("wserverlevel"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.wserverlevel);
            if (message.wserverport != null && message.hasOwnProperty("wserverport"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.wserverport);
            if (message.lcellscore != null && message.hasOwnProperty("lcellscore"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.lcellscore);
            if (message.cbentermember != null && message.hasOwnProperty("cbentermember"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.cbentermember);
            if (message.lenterscore != null && message.hasOwnProperty("lenterscore"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.lenterscore);
            if (message.dwserverrule != null && message.hasOwnProperty("dwserverrule"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.dwserverrule);
            if (message.dwonlinecount != null && message.hasOwnProperty("dwonlinecount"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint64(message.dwonlinecount);
            if (message.dwandroidcount != null && message.hasOwnProperty("dwandroidcount"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint64(message.dwandroidcount);
            if (message.dwfullcount != null && message.hasOwnProperty("dwfullcount"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint64(message.dwfullcount);
            if (message.szserveraddr != null && message.hasOwnProperty("szserveraddr"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.szserveraddr);
            if (message.szservername != null && message.hasOwnProperty("szservername"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.szservername);
            if (message.dwsurporttype != null && message.hasOwnProperty("dwsurporttype"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint64(message.dwsurporttype);
            if (message.wtablecount != null && message.hasOwnProperty("wtablecount"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.wtablecount);
            if (message.dwsetplayercount != null && message.hasOwnProperty("dwsetplayercount"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint64(message.dwsetplayercount);
            if (message.szgameinfomation != null && message.hasOwnProperty("szgameinfomation"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.szgameinfomation);
            return writer;
        };

        /**
         * Encodes the specified tagGameServer message, length delimited. Does not implicitly {@link GamePmd.tagGameServer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GamePmd.tagGameServer
         * @static
         * @param {GamePmd.ItagGameServer} message tagGameServer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGameServer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagGameServer message from the specified reader or buffer.
         * @function decode
         * @memberof GamePmd.tagGameServer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePmd.tagGameServer} tagGameServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGameServer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePmd.tagGameServer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.wkindid = reader.int32();
                    break;
                case 2:
                    message.wnodeid = reader.int32();
                    break;
                case 3:
                    message.wsortid = reader.int32();
                    break;
                case 4:
                    message.wserverid = reader.int32();
                    break;
                case 5:
                    message.wserverkind = reader.int32();
                    break;
                case 6:
                    message.wservertype = reader.int32();
                    break;
                case 7:
                    message.wserverlevel = reader.int32();
                    break;
                case 8:
                    message.wserverport = reader.int32();
                    break;
                case 9:
                    message.lcellscore = reader.uint64();
                    break;
                case 10:
                    message.cbentermember = reader.int32();
                    break;
                case 11:
                    message.lenterscore = reader.uint64();
                    break;
                case 12:
                    message.dwserverrule = reader.uint64();
                    break;
                case 13:
                    message.dwonlinecount = reader.uint64();
                    break;
                case 14:
                    message.dwandroidcount = reader.uint64();
                    break;
                case 15:
                    message.dwfullcount = reader.uint64();
                    break;
                case 16:
                    message.szserveraddr = reader.string();
                    break;
                case 17:
                    message.szservername = reader.string();
                    break;
                case 18:
                    message.dwsurporttype = reader.uint64();
                    break;
                case 19:
                    message.wtablecount = reader.int32();
                    break;
                case 20:
                    message.dwsetplayercount = reader.uint64();
                    break;
                case 21:
                    message.szgameinfomation = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagGameServer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GamePmd.tagGameServer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GamePmd.tagGameServer} tagGameServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGameServer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagGameServer message.
         * @function verify
         * @memberof GamePmd.tagGameServer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagGameServer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.wkindid != null && message.hasOwnProperty("wkindid"))
                if (!$util.isInteger(message.wkindid))
                    return "wkindid: integer expected";
            if (message.wnodeid != null && message.hasOwnProperty("wnodeid"))
                if (!$util.isInteger(message.wnodeid))
                    return "wnodeid: integer expected";
            if (message.wsortid != null && message.hasOwnProperty("wsortid"))
                if (!$util.isInteger(message.wsortid))
                    return "wsortid: integer expected";
            if (message.wserverid != null && message.hasOwnProperty("wserverid"))
                if (!$util.isInteger(message.wserverid))
                    return "wserverid: integer expected";
            if (message.wserverkind != null && message.hasOwnProperty("wserverkind"))
                if (!$util.isInteger(message.wserverkind))
                    return "wserverkind: integer expected";
            if (message.wservertype != null && message.hasOwnProperty("wservertype"))
                if (!$util.isInteger(message.wservertype))
                    return "wservertype: integer expected";
            if (message.wserverlevel != null && message.hasOwnProperty("wserverlevel"))
                if (!$util.isInteger(message.wserverlevel))
                    return "wserverlevel: integer expected";
            if (message.wserverport != null && message.hasOwnProperty("wserverport"))
                if (!$util.isInteger(message.wserverport))
                    return "wserverport: integer expected";
            if (message.lcellscore != null && message.hasOwnProperty("lcellscore"))
                if (!$util.isInteger(message.lcellscore) && !(message.lcellscore && $util.isInteger(message.lcellscore.low) && $util.isInteger(message.lcellscore.high)))
                    return "lcellscore: integer|Long expected";
            if (message.cbentermember != null && message.hasOwnProperty("cbentermember"))
                if (!$util.isInteger(message.cbentermember))
                    return "cbentermember: integer expected";
            if (message.lenterscore != null && message.hasOwnProperty("lenterscore"))
                if (!$util.isInteger(message.lenterscore) && !(message.lenterscore && $util.isInteger(message.lenterscore.low) && $util.isInteger(message.lenterscore.high)))
                    return "lenterscore: integer|Long expected";
            if (message.dwserverrule != null && message.hasOwnProperty("dwserverrule"))
                if (!$util.isInteger(message.dwserverrule) && !(message.dwserverrule && $util.isInteger(message.dwserverrule.low) && $util.isInteger(message.dwserverrule.high)))
                    return "dwserverrule: integer|Long expected";
            if (message.dwonlinecount != null && message.hasOwnProperty("dwonlinecount"))
                if (!$util.isInteger(message.dwonlinecount) && !(message.dwonlinecount && $util.isInteger(message.dwonlinecount.low) && $util.isInteger(message.dwonlinecount.high)))
                    return "dwonlinecount: integer|Long expected";
            if (message.dwandroidcount != null && message.hasOwnProperty("dwandroidcount"))
                if (!$util.isInteger(message.dwandroidcount) && !(message.dwandroidcount && $util.isInteger(message.dwandroidcount.low) && $util.isInteger(message.dwandroidcount.high)))
                    return "dwandroidcount: integer|Long expected";
            if (message.dwfullcount != null && message.hasOwnProperty("dwfullcount"))
                if (!$util.isInteger(message.dwfullcount) && !(message.dwfullcount && $util.isInteger(message.dwfullcount.low) && $util.isInteger(message.dwfullcount.high)))
                    return "dwfullcount: integer|Long expected";
            if (message.szserveraddr != null && message.hasOwnProperty("szserveraddr"))
                if (!$util.isString(message.szserveraddr))
                    return "szserveraddr: string expected";
            if (message.szservername != null && message.hasOwnProperty("szservername"))
                if (!$util.isString(message.szservername))
                    return "szservername: string expected";
            if (message.dwsurporttype != null && message.hasOwnProperty("dwsurporttype"))
                if (!$util.isInteger(message.dwsurporttype) && !(message.dwsurporttype && $util.isInteger(message.dwsurporttype.low) && $util.isInteger(message.dwsurporttype.high)))
                    return "dwsurporttype: integer|Long expected";
            if (message.wtablecount != null && message.hasOwnProperty("wtablecount"))
                if (!$util.isInteger(message.wtablecount))
                    return "wtablecount: integer expected";
            if (message.dwsetplayercount != null && message.hasOwnProperty("dwsetplayercount"))
                if (!$util.isInteger(message.dwsetplayercount) && !(message.dwsetplayercount && $util.isInteger(message.dwsetplayercount.low) && $util.isInteger(message.dwsetplayercount.high)))
                    return "dwsetplayercount: integer|Long expected";
            if (message.szgameinfomation != null && message.hasOwnProperty("szgameinfomation"))
                if (!$util.isString(message.szgameinfomation))
                    return "szgameinfomation: string expected";
            return null;
        };

        /**
         * Creates a tagGameServer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GamePmd.tagGameServer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GamePmd.tagGameServer} tagGameServer
         */
        tagGameServer.fromObject = function fromObject(object) {
            if (object instanceof $root.GamePmd.tagGameServer)
                return object;
            var message = new $root.GamePmd.tagGameServer();
            if (object.wkindid != null)
                message.wkindid = object.wkindid | 0;
            if (object.wnodeid != null)
                message.wnodeid = object.wnodeid | 0;
            if (object.wsortid != null)
                message.wsortid = object.wsortid | 0;
            if (object.wserverid != null)
                message.wserverid = object.wserverid | 0;
            if (object.wserverkind != null)
                message.wserverkind = object.wserverkind | 0;
            if (object.wservertype != null)
                message.wservertype = object.wservertype | 0;
            if (object.wserverlevel != null)
                message.wserverlevel = object.wserverlevel | 0;
            if (object.wserverport != null)
                message.wserverport = object.wserverport | 0;
            if (object.lcellscore != null)
                if ($util.Long)
                    (message.lcellscore = $util.Long.fromValue(object.lcellscore)).unsigned = true;
                else if (typeof object.lcellscore === "string")
                    message.lcellscore = parseInt(object.lcellscore, 10);
                else if (typeof object.lcellscore === "number")
                    message.lcellscore = object.lcellscore;
                else if (typeof object.lcellscore === "object")
                    message.lcellscore = new $util.LongBits(object.lcellscore.low >>> 0, object.lcellscore.high >>> 0).toNumber(true);
            if (object.cbentermember != null)
                message.cbentermember = object.cbentermember | 0;
            if (object.lenterscore != null)
                if ($util.Long)
                    (message.lenterscore = $util.Long.fromValue(object.lenterscore)).unsigned = true;
                else if (typeof object.lenterscore === "string")
                    message.lenterscore = parseInt(object.lenterscore, 10);
                else if (typeof object.lenterscore === "number")
                    message.lenterscore = object.lenterscore;
                else if (typeof object.lenterscore === "object")
                    message.lenterscore = new $util.LongBits(object.lenterscore.low >>> 0, object.lenterscore.high >>> 0).toNumber(true);
            if (object.dwserverrule != null)
                if ($util.Long)
                    (message.dwserverrule = $util.Long.fromValue(object.dwserverrule)).unsigned = true;
                else if (typeof object.dwserverrule === "string")
                    message.dwserverrule = parseInt(object.dwserverrule, 10);
                else if (typeof object.dwserverrule === "number")
                    message.dwserverrule = object.dwserverrule;
                else if (typeof object.dwserverrule === "object")
                    message.dwserverrule = new $util.LongBits(object.dwserverrule.low >>> 0, object.dwserverrule.high >>> 0).toNumber(true);
            if (object.dwonlinecount != null)
                if ($util.Long)
                    (message.dwonlinecount = $util.Long.fromValue(object.dwonlinecount)).unsigned = true;
                else if (typeof object.dwonlinecount === "string")
                    message.dwonlinecount = parseInt(object.dwonlinecount, 10);
                else if (typeof object.dwonlinecount === "number")
                    message.dwonlinecount = object.dwonlinecount;
                else if (typeof object.dwonlinecount === "object")
                    message.dwonlinecount = new $util.LongBits(object.dwonlinecount.low >>> 0, object.dwonlinecount.high >>> 0).toNumber(true);
            if (object.dwandroidcount != null)
                if ($util.Long)
                    (message.dwandroidcount = $util.Long.fromValue(object.dwandroidcount)).unsigned = true;
                else if (typeof object.dwandroidcount === "string")
                    message.dwandroidcount = parseInt(object.dwandroidcount, 10);
                else if (typeof object.dwandroidcount === "number")
                    message.dwandroidcount = object.dwandroidcount;
                else if (typeof object.dwandroidcount === "object")
                    message.dwandroidcount = new $util.LongBits(object.dwandroidcount.low >>> 0, object.dwandroidcount.high >>> 0).toNumber(true);
            if (object.dwfullcount != null)
                if ($util.Long)
                    (message.dwfullcount = $util.Long.fromValue(object.dwfullcount)).unsigned = true;
                else if (typeof object.dwfullcount === "string")
                    message.dwfullcount = parseInt(object.dwfullcount, 10);
                else if (typeof object.dwfullcount === "number")
                    message.dwfullcount = object.dwfullcount;
                else if (typeof object.dwfullcount === "object")
                    message.dwfullcount = new $util.LongBits(object.dwfullcount.low >>> 0, object.dwfullcount.high >>> 0).toNumber(true);
            if (object.szserveraddr != null)
                message.szserveraddr = String(object.szserveraddr);
            if (object.szservername != null)
                message.szservername = String(object.szservername);
            if (object.dwsurporttype != null)
                if ($util.Long)
                    (message.dwsurporttype = $util.Long.fromValue(object.dwsurporttype)).unsigned = true;
                else if (typeof object.dwsurporttype === "string")
                    message.dwsurporttype = parseInt(object.dwsurporttype, 10);
                else if (typeof object.dwsurporttype === "number")
                    message.dwsurporttype = object.dwsurporttype;
                else if (typeof object.dwsurporttype === "object")
                    message.dwsurporttype = new $util.LongBits(object.dwsurporttype.low >>> 0, object.dwsurporttype.high >>> 0).toNumber(true);
            if (object.wtablecount != null)
                message.wtablecount = object.wtablecount | 0;
            if (object.dwsetplayercount != null)
                if ($util.Long)
                    (message.dwsetplayercount = $util.Long.fromValue(object.dwsetplayercount)).unsigned = true;
                else if (typeof object.dwsetplayercount === "string")
                    message.dwsetplayercount = parseInt(object.dwsetplayercount, 10);
                else if (typeof object.dwsetplayercount === "number")
                    message.dwsetplayercount = object.dwsetplayercount;
                else if (typeof object.dwsetplayercount === "object")
                    message.dwsetplayercount = new $util.LongBits(object.dwsetplayercount.low >>> 0, object.dwsetplayercount.high >>> 0).toNumber(true);
            if (object.szgameinfomation != null)
                message.szgameinfomation = String(object.szgameinfomation);
            return message;
        };

        /**
         * Creates a plain object from a tagGameServer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GamePmd.tagGameServer
         * @static
         * @param {GamePmd.tagGameServer} message tagGameServer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagGameServer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.wkindid = 0;
                object.wnodeid = 0;
                object.wsortid = 0;
                object.wserverid = 0;
                object.wserverkind = 0;
                object.wservertype = 0;
                object.wserverlevel = 0;
                object.wserverport = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lcellscore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lcellscore = options.longs === String ? "0" : 0;
                object.cbentermember = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lenterscore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lenterscore = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwserverrule = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwserverrule = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwonlinecount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwonlinecount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwandroidcount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwandroidcount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwfullcount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwfullcount = options.longs === String ? "0" : 0;
                object.szserveraddr = "";
                object.szservername = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwsurporttype = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwsurporttype = options.longs === String ? "0" : 0;
                object.wtablecount = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwsetplayercount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwsetplayercount = options.longs === String ? "0" : 0;
                object.szgameinfomation = "";
            }
            if (message.wkindid != null && message.hasOwnProperty("wkindid"))
                object.wkindid = message.wkindid;
            if (message.wnodeid != null && message.hasOwnProperty("wnodeid"))
                object.wnodeid = message.wnodeid;
            if (message.wsortid != null && message.hasOwnProperty("wsortid"))
                object.wsortid = message.wsortid;
            if (message.wserverid != null && message.hasOwnProperty("wserverid"))
                object.wserverid = message.wserverid;
            if (message.wserverkind != null && message.hasOwnProperty("wserverkind"))
                object.wserverkind = message.wserverkind;
            if (message.wservertype != null && message.hasOwnProperty("wservertype"))
                object.wservertype = message.wservertype;
            if (message.wserverlevel != null && message.hasOwnProperty("wserverlevel"))
                object.wserverlevel = message.wserverlevel;
            if (message.wserverport != null && message.hasOwnProperty("wserverport"))
                object.wserverport = message.wserverport;
            if (message.lcellscore != null && message.hasOwnProperty("lcellscore"))
                if (typeof message.lcellscore === "number")
                    object.lcellscore = options.longs === String ? String(message.lcellscore) : message.lcellscore;
                else
                    object.lcellscore = options.longs === String ? $util.Long.prototype.toString.call(message.lcellscore) : options.longs === Number ? new $util.LongBits(message.lcellscore.low >>> 0, message.lcellscore.high >>> 0).toNumber(true) : message.lcellscore;
            if (message.cbentermember != null && message.hasOwnProperty("cbentermember"))
                object.cbentermember = message.cbentermember;
            if (message.lenterscore != null && message.hasOwnProperty("lenterscore"))
                if (typeof message.lenterscore === "number")
                    object.lenterscore = options.longs === String ? String(message.lenterscore) : message.lenterscore;
                else
                    object.lenterscore = options.longs === String ? $util.Long.prototype.toString.call(message.lenterscore) : options.longs === Number ? new $util.LongBits(message.lenterscore.low >>> 0, message.lenterscore.high >>> 0).toNumber(true) : message.lenterscore;
            if (message.dwserverrule != null && message.hasOwnProperty("dwserverrule"))
                if (typeof message.dwserverrule === "number")
                    object.dwserverrule = options.longs === String ? String(message.dwserverrule) : message.dwserverrule;
                else
                    object.dwserverrule = options.longs === String ? $util.Long.prototype.toString.call(message.dwserverrule) : options.longs === Number ? new $util.LongBits(message.dwserverrule.low >>> 0, message.dwserverrule.high >>> 0).toNumber(true) : message.dwserverrule;
            if (message.dwonlinecount != null && message.hasOwnProperty("dwonlinecount"))
                if (typeof message.dwonlinecount === "number")
                    object.dwonlinecount = options.longs === String ? String(message.dwonlinecount) : message.dwonlinecount;
                else
                    object.dwonlinecount = options.longs === String ? $util.Long.prototype.toString.call(message.dwonlinecount) : options.longs === Number ? new $util.LongBits(message.dwonlinecount.low >>> 0, message.dwonlinecount.high >>> 0).toNumber(true) : message.dwonlinecount;
            if (message.dwandroidcount != null && message.hasOwnProperty("dwandroidcount"))
                if (typeof message.dwandroidcount === "number")
                    object.dwandroidcount = options.longs === String ? String(message.dwandroidcount) : message.dwandroidcount;
                else
                    object.dwandroidcount = options.longs === String ? $util.Long.prototype.toString.call(message.dwandroidcount) : options.longs === Number ? new $util.LongBits(message.dwandroidcount.low >>> 0, message.dwandroidcount.high >>> 0).toNumber(true) : message.dwandroidcount;
            if (message.dwfullcount != null && message.hasOwnProperty("dwfullcount"))
                if (typeof message.dwfullcount === "number")
                    object.dwfullcount = options.longs === String ? String(message.dwfullcount) : message.dwfullcount;
                else
                    object.dwfullcount = options.longs === String ? $util.Long.prototype.toString.call(message.dwfullcount) : options.longs === Number ? new $util.LongBits(message.dwfullcount.low >>> 0, message.dwfullcount.high >>> 0).toNumber(true) : message.dwfullcount;
            if (message.szserveraddr != null && message.hasOwnProperty("szserveraddr"))
                object.szserveraddr = message.szserveraddr;
            if (message.szservername != null && message.hasOwnProperty("szservername"))
                object.szservername = message.szservername;
            if (message.dwsurporttype != null && message.hasOwnProperty("dwsurporttype"))
                if (typeof message.dwsurporttype === "number")
                    object.dwsurporttype = options.longs === String ? String(message.dwsurporttype) : message.dwsurporttype;
                else
                    object.dwsurporttype = options.longs === String ? $util.Long.prototype.toString.call(message.dwsurporttype) : options.longs === Number ? new $util.LongBits(message.dwsurporttype.low >>> 0, message.dwsurporttype.high >>> 0).toNumber(true) : message.dwsurporttype;
            if (message.wtablecount != null && message.hasOwnProperty("wtablecount"))
                object.wtablecount = message.wtablecount;
            if (message.dwsetplayercount != null && message.hasOwnProperty("dwsetplayercount"))
                if (typeof message.dwsetplayercount === "number")
                    object.dwsetplayercount = options.longs === String ? String(message.dwsetplayercount) : message.dwsetplayercount;
                else
                    object.dwsetplayercount = options.longs === String ? $util.Long.prototype.toString.call(message.dwsetplayercount) : options.longs === Number ? new $util.LongBits(message.dwsetplayercount.low >>> 0, message.dwsetplayercount.high >>> 0).toNumber(true) : message.dwsetplayercount;
            if (message.szgameinfomation != null && message.hasOwnProperty("szgameinfomation"))
                object.szgameinfomation = message.szgameinfomation;
            return object;
        };

        /**
         * Converts this tagGameServer to JSON.
         * @function toJSON
         * @memberof GamePmd.tagGameServer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagGameServer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagGameServer;
    })();

    GamePmd.taggametype_s2c = (function() {

        /**
         * Properties of a taggametype_s2c.
         * @memberof GamePmd
         * @interface Itaggametype_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] taggametype_s2c respcmd
         * @property {Array.<GamePmd.Itaggametype>|null} [taggametype] taggametype_s2c taggametype
         */

        /**
         * Constructs a new taggametype_s2c.
         * @memberof GamePmd
         * @classdesc Represents a taggametype_s2c.
         * @implements Itaggametype_s2c
         * @constructor
         * @param {GamePmd.Itaggametype_s2c=} [properties] Properties to set
         */
        function taggametype_s2c(properties) {
            this.taggametype = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * taggametype_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof GamePmd.taggametype_s2c
         * @instance
         */
        taggametype_s2c.prototype.respcmd = null;

        /**
         * taggametype_s2c taggametype.
         * @member {Array.<GamePmd.Itaggametype>} taggametype
         * @memberof GamePmd.taggametype_s2c
         * @instance
         */
        taggametype_s2c.prototype.taggametype = $util.emptyArray;

        /**
         * Creates a new taggametype_s2c instance using the specified properties.
         * @function create
         * @memberof GamePmd.taggametype_s2c
         * @static
         * @param {GamePmd.Itaggametype_s2c=} [properties] Properties to set
         * @returns {GamePmd.taggametype_s2c} taggametype_s2c instance
         */
        taggametype_s2c.create = function create(properties) {
            return new taggametype_s2c(properties);
        };

        /**
         * Encodes the specified taggametype_s2c message. Does not implicitly {@link GamePmd.taggametype_s2c.verify|verify} messages.
         * @function encode
         * @memberof GamePmd.taggametype_s2c
         * @static
         * @param {GamePmd.Itaggametype_s2c} message taggametype_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        taggametype_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.taggametype != null && message.taggametype.length)
                for (var i = 0; i < message.taggametype.length; ++i)
                    $root.GamePmd.taggametype.encode(message.taggametype[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified taggametype_s2c message, length delimited. Does not implicitly {@link GamePmd.taggametype_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GamePmd.taggametype_s2c
         * @static
         * @param {GamePmd.Itaggametype_s2c} message taggametype_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        taggametype_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a taggametype_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof GamePmd.taggametype_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePmd.taggametype_s2c} taggametype_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        taggametype_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePmd.taggametype_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.taggametype && message.taggametype.length))
                        message.taggametype = [];
                    message.taggametype.push($root.GamePmd.taggametype.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a taggametype_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GamePmd.taggametype_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GamePmd.taggametype_s2c} taggametype_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        taggametype_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a taggametype_s2c message.
         * @function verify
         * @memberof GamePmd.taggametype_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        taggametype_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.taggametype != null && message.hasOwnProperty("taggametype")) {
                if (!Array.isArray(message.taggametype))
                    return "taggametype: array expected";
                for (var i = 0; i < message.taggametype.length; ++i) {
                    var error = $root.GamePmd.taggametype.verify(message.taggametype[i]);
                    if (error)
                        return "taggametype." + error;
                }
            }
            return null;
        };

        /**
         * Creates a taggametype_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GamePmd.taggametype_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GamePmd.taggametype_s2c} taggametype_s2c
         */
        taggametype_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.GamePmd.taggametype_s2c)
                return object;
            var message = new $root.GamePmd.taggametype_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".GamePmd.taggametype_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.taggametype) {
                if (!Array.isArray(object.taggametype))
                    throw TypeError(".GamePmd.taggametype_s2c.taggametype: array expected");
                message.taggametype = [];
                for (var i = 0; i < object.taggametype.length; ++i) {
                    if (typeof object.taggametype[i] !== "object")
                        throw TypeError(".GamePmd.taggametype_s2c.taggametype: object expected");
                    message.taggametype[i] = $root.GamePmd.taggametype.fromObject(object.taggametype[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a taggametype_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GamePmd.taggametype_s2c
         * @static
         * @param {GamePmd.taggametype_s2c} message taggametype_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        taggametype_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.taggametype = [];
            if (options.defaults)
                object.respcmd = null;
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.taggametype && message.taggametype.length) {
                object.taggametype = [];
                for (var j = 0; j < message.taggametype.length; ++j)
                    object.taggametype[j] = $root.GamePmd.taggametype.toObject(message.taggametype[j], options);
            }
            return object;
        };

        /**
         * Converts this taggametype_s2c to JSON.
         * @function toJSON
         * @memberof GamePmd.taggametype_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        taggametype_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return taggametype_s2c;
    })();

    GamePmd.taggamekind_s2c = (function() {

        /**
         * Properties of a taggamekind_s2c.
         * @memberof GamePmd
         * @interface Itaggamekind_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] taggamekind_s2c respcmd
         * @property {Array.<GamePmd.Itaggamekind>|null} [taggamekind] taggamekind_s2c taggamekind
         */

        /**
         * Constructs a new taggamekind_s2c.
         * @memberof GamePmd
         * @classdesc Represents a taggamekind_s2c.
         * @implements Itaggamekind_s2c
         * @constructor
         * @param {GamePmd.Itaggamekind_s2c=} [properties] Properties to set
         */
        function taggamekind_s2c(properties) {
            this.taggamekind = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * taggamekind_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof GamePmd.taggamekind_s2c
         * @instance
         */
        taggamekind_s2c.prototype.respcmd = null;

        /**
         * taggamekind_s2c taggamekind.
         * @member {Array.<GamePmd.Itaggamekind>} taggamekind
         * @memberof GamePmd.taggamekind_s2c
         * @instance
         */
        taggamekind_s2c.prototype.taggamekind = $util.emptyArray;

        /**
         * Creates a new taggamekind_s2c instance using the specified properties.
         * @function create
         * @memberof GamePmd.taggamekind_s2c
         * @static
         * @param {GamePmd.Itaggamekind_s2c=} [properties] Properties to set
         * @returns {GamePmd.taggamekind_s2c} taggamekind_s2c instance
         */
        taggamekind_s2c.create = function create(properties) {
            return new taggamekind_s2c(properties);
        };

        /**
         * Encodes the specified taggamekind_s2c message. Does not implicitly {@link GamePmd.taggamekind_s2c.verify|verify} messages.
         * @function encode
         * @memberof GamePmd.taggamekind_s2c
         * @static
         * @param {GamePmd.Itaggamekind_s2c} message taggamekind_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        taggamekind_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.taggamekind != null && message.taggamekind.length)
                for (var i = 0; i < message.taggamekind.length; ++i)
                    $root.GamePmd.taggamekind.encode(message.taggamekind[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified taggamekind_s2c message, length delimited. Does not implicitly {@link GamePmd.taggamekind_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GamePmd.taggamekind_s2c
         * @static
         * @param {GamePmd.Itaggamekind_s2c} message taggamekind_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        taggamekind_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a taggamekind_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof GamePmd.taggamekind_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePmd.taggamekind_s2c} taggamekind_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        taggamekind_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePmd.taggamekind_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.taggamekind && message.taggamekind.length))
                        message.taggamekind = [];
                    message.taggamekind.push($root.GamePmd.taggamekind.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a taggamekind_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GamePmd.taggamekind_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GamePmd.taggamekind_s2c} taggamekind_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        taggamekind_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a taggamekind_s2c message.
         * @function verify
         * @memberof GamePmd.taggamekind_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        taggamekind_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.taggamekind != null && message.hasOwnProperty("taggamekind")) {
                if (!Array.isArray(message.taggamekind))
                    return "taggamekind: array expected";
                for (var i = 0; i < message.taggamekind.length; ++i) {
                    var error = $root.GamePmd.taggamekind.verify(message.taggamekind[i]);
                    if (error)
                        return "taggamekind." + error;
                }
            }
            return null;
        };

        /**
         * Creates a taggamekind_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GamePmd.taggamekind_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GamePmd.taggamekind_s2c} taggamekind_s2c
         */
        taggamekind_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.GamePmd.taggamekind_s2c)
                return object;
            var message = new $root.GamePmd.taggamekind_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".GamePmd.taggamekind_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.taggamekind) {
                if (!Array.isArray(object.taggamekind))
                    throw TypeError(".GamePmd.taggamekind_s2c.taggamekind: array expected");
                message.taggamekind = [];
                for (var i = 0; i < object.taggamekind.length; ++i) {
                    if (typeof object.taggamekind[i] !== "object")
                        throw TypeError(".GamePmd.taggamekind_s2c.taggamekind: object expected");
                    message.taggamekind[i] = $root.GamePmd.taggamekind.fromObject(object.taggamekind[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a taggamekind_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GamePmd.taggamekind_s2c
         * @static
         * @param {GamePmd.taggamekind_s2c} message taggamekind_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        taggamekind_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.taggamekind = [];
            if (options.defaults)
                object.respcmd = null;
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.taggamekind && message.taggamekind.length) {
                object.taggamekind = [];
                for (var j = 0; j < message.taggamekind.length; ++j)
                    object.taggamekind[j] = $root.GamePmd.taggamekind.toObject(message.taggamekind[j], options);
            }
            return object;
        };

        /**
         * Converts this taggamekind_s2c to JSON.
         * @function toJSON
         * @memberof GamePmd.taggamekind_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        taggamekind_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return taggamekind_s2c;
    })();

    GamePmd.tagGamePage_s2c = (function() {

        /**
         * Properties of a tagGamePage_s2c.
         * @memberof GamePmd
         * @interface ItagGamePage_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] tagGamePage_s2c respcmd
         * @property {Array.<GamePmd.ItagGamePage>|null} [tagGamePage] tagGamePage_s2c tagGamePage
         */

        /**
         * Constructs a new tagGamePage_s2c.
         * @memberof GamePmd
         * @classdesc Represents a tagGamePage_s2c.
         * @implements ItagGamePage_s2c
         * @constructor
         * @param {GamePmd.ItagGamePage_s2c=} [properties] Properties to set
         */
        function tagGamePage_s2c(properties) {
            this.tagGamePage = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagGamePage_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof GamePmd.tagGamePage_s2c
         * @instance
         */
        tagGamePage_s2c.prototype.respcmd = null;

        /**
         * tagGamePage_s2c tagGamePage.
         * @member {Array.<GamePmd.ItagGamePage>} tagGamePage
         * @memberof GamePmd.tagGamePage_s2c
         * @instance
         */
        tagGamePage_s2c.prototype.tagGamePage = $util.emptyArray;

        /**
         * Creates a new tagGamePage_s2c instance using the specified properties.
         * @function create
         * @memberof GamePmd.tagGamePage_s2c
         * @static
         * @param {GamePmd.ItagGamePage_s2c=} [properties] Properties to set
         * @returns {GamePmd.tagGamePage_s2c} tagGamePage_s2c instance
         */
        tagGamePage_s2c.create = function create(properties) {
            return new tagGamePage_s2c(properties);
        };

        /**
         * Encodes the specified tagGamePage_s2c message. Does not implicitly {@link GamePmd.tagGamePage_s2c.verify|verify} messages.
         * @function encode
         * @memberof GamePmd.tagGamePage_s2c
         * @static
         * @param {GamePmd.ItagGamePage_s2c} message tagGamePage_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGamePage_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.tagGamePage != null && message.tagGamePage.length)
                for (var i = 0; i < message.tagGamePage.length; ++i)
                    $root.GamePmd.tagGamePage.encode(message.tagGamePage[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified tagGamePage_s2c message, length delimited. Does not implicitly {@link GamePmd.tagGamePage_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GamePmd.tagGamePage_s2c
         * @static
         * @param {GamePmd.ItagGamePage_s2c} message tagGamePage_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGamePage_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagGamePage_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof GamePmd.tagGamePage_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePmd.tagGamePage_s2c} tagGamePage_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGamePage_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePmd.tagGamePage_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.tagGamePage && message.tagGamePage.length))
                        message.tagGamePage = [];
                    message.tagGamePage.push($root.GamePmd.tagGamePage.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagGamePage_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GamePmd.tagGamePage_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GamePmd.tagGamePage_s2c} tagGamePage_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGamePage_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagGamePage_s2c message.
         * @function verify
         * @memberof GamePmd.tagGamePage_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagGamePage_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.tagGamePage != null && message.hasOwnProperty("tagGamePage")) {
                if (!Array.isArray(message.tagGamePage))
                    return "tagGamePage: array expected";
                for (var i = 0; i < message.tagGamePage.length; ++i) {
                    var error = $root.GamePmd.tagGamePage.verify(message.tagGamePage[i]);
                    if (error)
                        return "tagGamePage." + error;
                }
            }
            return null;
        };

        /**
         * Creates a tagGamePage_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GamePmd.tagGamePage_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GamePmd.tagGamePage_s2c} tagGamePage_s2c
         */
        tagGamePage_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.GamePmd.tagGamePage_s2c)
                return object;
            var message = new $root.GamePmd.tagGamePage_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".GamePmd.tagGamePage_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.tagGamePage) {
                if (!Array.isArray(object.tagGamePage))
                    throw TypeError(".GamePmd.tagGamePage_s2c.tagGamePage: array expected");
                message.tagGamePage = [];
                for (var i = 0; i < object.tagGamePage.length; ++i) {
                    if (typeof object.tagGamePage[i] !== "object")
                        throw TypeError(".GamePmd.tagGamePage_s2c.tagGamePage: object expected");
                    message.tagGamePage[i] = $root.GamePmd.tagGamePage.fromObject(object.tagGamePage[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a tagGamePage_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GamePmd.tagGamePage_s2c
         * @static
         * @param {GamePmd.tagGamePage_s2c} message tagGamePage_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagGamePage_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tagGamePage = [];
            if (options.defaults)
                object.respcmd = null;
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.tagGamePage && message.tagGamePage.length) {
                object.tagGamePage = [];
                for (var j = 0; j < message.tagGamePage.length; ++j)
                    object.tagGamePage[j] = $root.GamePmd.tagGamePage.toObject(message.tagGamePage[j], options);
            }
            return object;
        };

        /**
         * Converts this tagGamePage_s2c to JSON.
         * @function toJSON
         * @memberof GamePmd.tagGamePage_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagGamePage_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagGamePage_s2c;
    })();

    GamePmd.tagGameNode_s2c = (function() {

        /**
         * Properties of a tagGameNode_s2c.
         * @memberof GamePmd
         * @interface ItagGameNode_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] tagGameNode_s2c respcmd
         * @property {Array.<GamePmd.ItagGameNode>|null} [tagGameNode] tagGameNode_s2c tagGameNode
         */

        /**
         * Constructs a new tagGameNode_s2c.
         * @memberof GamePmd
         * @classdesc Represents a tagGameNode_s2c.
         * @implements ItagGameNode_s2c
         * @constructor
         * @param {GamePmd.ItagGameNode_s2c=} [properties] Properties to set
         */
        function tagGameNode_s2c(properties) {
            this.tagGameNode = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagGameNode_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof GamePmd.tagGameNode_s2c
         * @instance
         */
        tagGameNode_s2c.prototype.respcmd = null;

        /**
         * tagGameNode_s2c tagGameNode.
         * @member {Array.<GamePmd.ItagGameNode>} tagGameNode
         * @memberof GamePmd.tagGameNode_s2c
         * @instance
         */
        tagGameNode_s2c.prototype.tagGameNode = $util.emptyArray;

        /**
         * Creates a new tagGameNode_s2c instance using the specified properties.
         * @function create
         * @memberof GamePmd.tagGameNode_s2c
         * @static
         * @param {GamePmd.ItagGameNode_s2c=} [properties] Properties to set
         * @returns {GamePmd.tagGameNode_s2c} tagGameNode_s2c instance
         */
        tagGameNode_s2c.create = function create(properties) {
            return new tagGameNode_s2c(properties);
        };

        /**
         * Encodes the specified tagGameNode_s2c message. Does not implicitly {@link GamePmd.tagGameNode_s2c.verify|verify} messages.
         * @function encode
         * @memberof GamePmd.tagGameNode_s2c
         * @static
         * @param {GamePmd.ItagGameNode_s2c} message tagGameNode_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGameNode_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.tagGameNode != null && message.tagGameNode.length)
                for (var i = 0; i < message.tagGameNode.length; ++i)
                    $root.GamePmd.tagGameNode.encode(message.tagGameNode[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified tagGameNode_s2c message, length delimited. Does not implicitly {@link GamePmd.tagGameNode_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GamePmd.tagGameNode_s2c
         * @static
         * @param {GamePmd.ItagGameNode_s2c} message tagGameNode_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGameNode_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagGameNode_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof GamePmd.tagGameNode_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePmd.tagGameNode_s2c} tagGameNode_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGameNode_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePmd.tagGameNode_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.tagGameNode && message.tagGameNode.length))
                        message.tagGameNode = [];
                    message.tagGameNode.push($root.GamePmd.tagGameNode.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagGameNode_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GamePmd.tagGameNode_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GamePmd.tagGameNode_s2c} tagGameNode_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGameNode_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagGameNode_s2c message.
         * @function verify
         * @memberof GamePmd.tagGameNode_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagGameNode_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.tagGameNode != null && message.hasOwnProperty("tagGameNode")) {
                if (!Array.isArray(message.tagGameNode))
                    return "tagGameNode: array expected";
                for (var i = 0; i < message.tagGameNode.length; ++i) {
                    var error = $root.GamePmd.tagGameNode.verify(message.tagGameNode[i]);
                    if (error)
                        return "tagGameNode." + error;
                }
            }
            return null;
        };

        /**
         * Creates a tagGameNode_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GamePmd.tagGameNode_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GamePmd.tagGameNode_s2c} tagGameNode_s2c
         */
        tagGameNode_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.GamePmd.tagGameNode_s2c)
                return object;
            var message = new $root.GamePmd.tagGameNode_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".GamePmd.tagGameNode_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.tagGameNode) {
                if (!Array.isArray(object.tagGameNode))
                    throw TypeError(".GamePmd.tagGameNode_s2c.tagGameNode: array expected");
                message.tagGameNode = [];
                for (var i = 0; i < object.tagGameNode.length; ++i) {
                    if (typeof object.tagGameNode[i] !== "object")
                        throw TypeError(".GamePmd.tagGameNode_s2c.tagGameNode: object expected");
                    message.tagGameNode[i] = $root.GamePmd.tagGameNode.fromObject(object.tagGameNode[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a tagGameNode_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GamePmd.tagGameNode_s2c
         * @static
         * @param {GamePmd.tagGameNode_s2c} message tagGameNode_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagGameNode_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tagGameNode = [];
            if (options.defaults)
                object.respcmd = null;
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.tagGameNode && message.tagGameNode.length) {
                object.tagGameNode = [];
                for (var j = 0; j < message.tagGameNode.length; ++j)
                    object.tagGameNode[j] = $root.GamePmd.tagGameNode.toObject(message.tagGameNode[j], options);
            }
            return object;
        };

        /**
         * Converts this tagGameNode_s2c to JSON.
         * @function toJSON
         * @memberof GamePmd.tagGameNode_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagGameNode_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagGameNode_s2c;
    })();

    GamePmd.tagGameServer_s2c = (function() {

        /**
         * Properties of a tagGameServer_s2c.
         * @memberof GamePmd
         * @interface ItagGameServer_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] tagGameServer_s2c respcmd
         * @property {Array.<GamePmd.ItagGameServer>|null} [tagGameServer] tagGameServer_s2c tagGameServer
         */

        /**
         * Constructs a new tagGameServer_s2c.
         * @memberof GamePmd
         * @classdesc Represents a tagGameServer_s2c.
         * @implements ItagGameServer_s2c
         * @constructor
         * @param {GamePmd.ItagGameServer_s2c=} [properties] Properties to set
         */
        function tagGameServer_s2c(properties) {
            this.tagGameServer = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagGameServer_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof GamePmd.tagGameServer_s2c
         * @instance
         */
        tagGameServer_s2c.prototype.respcmd = null;

        /**
         * tagGameServer_s2c tagGameServer.
         * @member {Array.<GamePmd.ItagGameServer>} tagGameServer
         * @memberof GamePmd.tagGameServer_s2c
         * @instance
         */
        tagGameServer_s2c.prototype.tagGameServer = $util.emptyArray;

        /**
         * Creates a new tagGameServer_s2c instance using the specified properties.
         * @function create
         * @memberof GamePmd.tagGameServer_s2c
         * @static
         * @param {GamePmd.ItagGameServer_s2c=} [properties] Properties to set
         * @returns {GamePmd.tagGameServer_s2c} tagGameServer_s2c instance
         */
        tagGameServer_s2c.create = function create(properties) {
            return new tagGameServer_s2c(properties);
        };

        /**
         * Encodes the specified tagGameServer_s2c message. Does not implicitly {@link GamePmd.tagGameServer_s2c.verify|verify} messages.
         * @function encode
         * @memberof GamePmd.tagGameServer_s2c
         * @static
         * @param {GamePmd.ItagGameServer_s2c} message tagGameServer_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGameServer_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.tagGameServer != null && message.tagGameServer.length)
                for (var i = 0; i < message.tagGameServer.length; ++i)
                    $root.GamePmd.tagGameServer.encode(message.tagGameServer[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified tagGameServer_s2c message, length delimited. Does not implicitly {@link GamePmd.tagGameServer_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GamePmd.tagGameServer_s2c
         * @static
         * @param {GamePmd.ItagGameServer_s2c} message tagGameServer_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGameServer_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagGameServer_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof GamePmd.tagGameServer_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePmd.tagGameServer_s2c} tagGameServer_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGameServer_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePmd.tagGameServer_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.tagGameServer && message.tagGameServer.length))
                        message.tagGameServer = [];
                    message.tagGameServer.push($root.GamePmd.tagGameServer.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagGameServer_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GamePmd.tagGameServer_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GamePmd.tagGameServer_s2c} tagGameServer_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGameServer_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagGameServer_s2c message.
         * @function verify
         * @memberof GamePmd.tagGameServer_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagGameServer_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.tagGameServer != null && message.hasOwnProperty("tagGameServer")) {
                if (!Array.isArray(message.tagGameServer))
                    return "tagGameServer: array expected";
                for (var i = 0; i < message.tagGameServer.length; ++i) {
                    var error = $root.GamePmd.tagGameServer.verify(message.tagGameServer[i]);
                    if (error)
                        return "tagGameServer." + error;
                }
            }
            return null;
        };

        /**
         * Creates a tagGameServer_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GamePmd.tagGameServer_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GamePmd.tagGameServer_s2c} tagGameServer_s2c
         */
        tagGameServer_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.GamePmd.tagGameServer_s2c)
                return object;
            var message = new $root.GamePmd.tagGameServer_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".GamePmd.tagGameServer_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.tagGameServer) {
                if (!Array.isArray(object.tagGameServer))
                    throw TypeError(".GamePmd.tagGameServer_s2c.tagGameServer: array expected");
                message.tagGameServer = [];
                for (var i = 0; i < object.tagGameServer.length; ++i) {
                    if (typeof object.tagGameServer[i] !== "object")
                        throw TypeError(".GamePmd.tagGameServer_s2c.tagGameServer: object expected");
                    message.tagGameServer[i] = $root.GamePmd.tagGameServer.fromObject(object.tagGameServer[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a tagGameServer_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GamePmd.tagGameServer_s2c
         * @static
         * @param {GamePmd.tagGameServer_s2c} message tagGameServer_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagGameServer_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tagGameServer = [];
            if (options.defaults)
                object.respcmd = null;
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.tagGameServer && message.tagGameServer.length) {
                object.tagGameServer = [];
                for (var j = 0; j < message.tagGameServer.length; ++j)
                    object.tagGameServer[j] = $root.GamePmd.tagGameServer.toObject(message.tagGameServer[j], options);
            }
            return object;
        };

        /**
         * Converts this tagGameServer_s2c to JSON.
         * @function toJSON
         * @memberof GamePmd.tagGameServer_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagGameServer_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagGameServer_s2c;
    })();

    GamePmd.personalParameter_c2s = (function() {

        /**
         * Properties of a personalParameter_c2s.
         * @memberof GamePmd
         * @interface IpersonalParameter_c2s
         * @property {NullPmd.Iresponse|null} [respcmd] personalParameter_c2s respcmd
         * @property {number|Long|null} [dwkindid] personalParameter_c2s dwkindid
         */

        /**
         * Constructs a new personalParameter_c2s.
         * @memberof GamePmd
         * @classdesc Represents a personalParameter_c2s.
         * @implements IpersonalParameter_c2s
         * @constructor
         * @param {GamePmd.IpersonalParameter_c2s=} [properties] Properties to set
         */
        function personalParameter_c2s(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * personalParameter_c2s respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof GamePmd.personalParameter_c2s
         * @instance
         */
        personalParameter_c2s.prototype.respcmd = null;

        /**
         * personalParameter_c2s dwkindid.
         * @member {number|Long} dwkindid
         * @memberof GamePmd.personalParameter_c2s
         * @instance
         */
        personalParameter_c2s.prototype.dwkindid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new personalParameter_c2s instance using the specified properties.
         * @function create
         * @memberof GamePmd.personalParameter_c2s
         * @static
         * @param {GamePmd.IpersonalParameter_c2s=} [properties] Properties to set
         * @returns {GamePmd.personalParameter_c2s} personalParameter_c2s instance
         */
        personalParameter_c2s.create = function create(properties) {
            return new personalParameter_c2s(properties);
        };

        /**
         * Encodes the specified personalParameter_c2s message. Does not implicitly {@link GamePmd.personalParameter_c2s.verify|verify} messages.
         * @function encode
         * @memberof GamePmd.personalParameter_c2s
         * @static
         * @param {GamePmd.IpersonalParameter_c2s} message personalParameter_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        personalParameter_c2s.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.dwkindid != null && message.hasOwnProperty("dwkindid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.dwkindid);
            return writer;
        };

        /**
         * Encodes the specified personalParameter_c2s message, length delimited. Does not implicitly {@link GamePmd.personalParameter_c2s.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GamePmd.personalParameter_c2s
         * @static
         * @param {GamePmd.IpersonalParameter_c2s} message personalParameter_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        personalParameter_c2s.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a personalParameter_c2s message from the specified reader or buffer.
         * @function decode
         * @memberof GamePmd.personalParameter_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePmd.personalParameter_c2s} personalParameter_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        personalParameter_c2s.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePmd.personalParameter_c2s();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.dwkindid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a personalParameter_c2s message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GamePmd.personalParameter_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GamePmd.personalParameter_c2s} personalParameter_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        personalParameter_c2s.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a personalParameter_c2s message.
         * @function verify
         * @memberof GamePmd.personalParameter_c2s
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        personalParameter_c2s.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.dwkindid != null && message.hasOwnProperty("dwkindid"))
                if (!$util.isInteger(message.dwkindid) && !(message.dwkindid && $util.isInteger(message.dwkindid.low) && $util.isInteger(message.dwkindid.high)))
                    return "dwkindid: integer|Long expected";
            return null;
        };

        /**
         * Creates a personalParameter_c2s message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GamePmd.personalParameter_c2s
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GamePmd.personalParameter_c2s} personalParameter_c2s
         */
        personalParameter_c2s.fromObject = function fromObject(object) {
            if (object instanceof $root.GamePmd.personalParameter_c2s)
                return object;
            var message = new $root.GamePmd.personalParameter_c2s();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".GamePmd.personalParameter_c2s.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.dwkindid != null)
                if ($util.Long)
                    (message.dwkindid = $util.Long.fromValue(object.dwkindid)).unsigned = true;
                else if (typeof object.dwkindid === "string")
                    message.dwkindid = parseInt(object.dwkindid, 10);
                else if (typeof object.dwkindid === "number")
                    message.dwkindid = object.dwkindid;
                else if (typeof object.dwkindid === "object")
                    message.dwkindid = new $util.LongBits(object.dwkindid.low >>> 0, object.dwkindid.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a personalParameter_c2s message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GamePmd.personalParameter_c2s
         * @static
         * @param {GamePmd.personalParameter_c2s} message personalParameter_c2s
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        personalParameter_c2s.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.respcmd = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwkindid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwkindid = options.longs === String ? "0" : 0;
            }
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.dwkindid != null && message.hasOwnProperty("dwkindid"))
                if (typeof message.dwkindid === "number")
                    object.dwkindid = options.longs === String ? String(message.dwkindid) : message.dwkindid;
                else
                    object.dwkindid = options.longs === String ? $util.Long.prototype.toString.call(message.dwkindid) : options.longs === Number ? new $util.LongBits(message.dwkindid.low >>> 0, message.dwkindid.high >>> 0).toNumber(true) : message.dwkindid;
            return object;
        };

        /**
         * Converts this personalParameter_c2s to JSON.
         * @function toJSON
         * @memberof GamePmd.personalParameter_c2s
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        personalParameter_c2s.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return personalParameter_c2s;
    })();

    GamePmd.tagPersonalTableFeeList = (function() {

        /**
         * Properties of a tagPersonalTableFeeList.
         * @memberof GamePmd
         * @interface ItagPersonalTableFeeList
         * @property {number|Long|null} [dwdrawtimelimit] tagPersonalTableFeeList dwdrawtimelimit
         * @property {number|Long|null} [dwdrawcountlimit] tagPersonalTableFeeList dwdrawcountlimit
         * @property {number|Long|null} [liniscore] tagPersonalTableFeeList liniscore
         * @property {number|Long|null} [lfeescore] tagPersonalTableFeeList lfeescore
         * @property {number|null} [waapayfee] tagPersonalTableFeeList waapayfee
         * @property {number|null} [cbgamemode] tagPersonalTableFeeList cbgamemode
         */

        /**
         * Constructs a new tagPersonalTableFeeList.
         * @memberof GamePmd
         * @classdesc Represents a tagPersonalTableFeeList.
         * @implements ItagPersonalTableFeeList
         * @constructor
         * @param {GamePmd.ItagPersonalTableFeeList=} [properties] Properties to set
         */
        function tagPersonalTableFeeList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagPersonalTableFeeList dwdrawtimelimit.
         * @member {number|Long} dwdrawtimelimit
         * @memberof GamePmd.tagPersonalTableFeeList
         * @instance
         */
        tagPersonalTableFeeList.prototype.dwdrawtimelimit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPersonalTableFeeList dwdrawcountlimit.
         * @member {number|Long} dwdrawcountlimit
         * @memberof GamePmd.tagPersonalTableFeeList
         * @instance
         */
        tagPersonalTableFeeList.prototype.dwdrawcountlimit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPersonalTableFeeList liniscore.
         * @member {number|Long} liniscore
         * @memberof GamePmd.tagPersonalTableFeeList
         * @instance
         */
        tagPersonalTableFeeList.prototype.liniscore = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPersonalTableFeeList lfeescore.
         * @member {number|Long} lfeescore
         * @memberof GamePmd.tagPersonalTableFeeList
         * @instance
         */
        tagPersonalTableFeeList.prototype.lfeescore = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPersonalTableFeeList waapayfee.
         * @member {number} waapayfee
         * @memberof GamePmd.tagPersonalTableFeeList
         * @instance
         */
        tagPersonalTableFeeList.prototype.waapayfee = 0;

        /**
         * tagPersonalTableFeeList cbgamemode.
         * @member {number} cbgamemode
         * @memberof GamePmd.tagPersonalTableFeeList
         * @instance
         */
        tagPersonalTableFeeList.prototype.cbgamemode = 0;

        /**
         * Creates a new tagPersonalTableFeeList instance using the specified properties.
         * @function create
         * @memberof GamePmd.tagPersonalTableFeeList
         * @static
         * @param {GamePmd.ItagPersonalTableFeeList=} [properties] Properties to set
         * @returns {GamePmd.tagPersonalTableFeeList} tagPersonalTableFeeList instance
         */
        tagPersonalTableFeeList.create = function create(properties) {
            return new tagPersonalTableFeeList(properties);
        };

        /**
         * Encodes the specified tagPersonalTableFeeList message. Does not implicitly {@link GamePmd.tagPersonalTableFeeList.verify|verify} messages.
         * @function encode
         * @memberof GamePmd.tagPersonalTableFeeList
         * @static
         * @param {GamePmd.ItagPersonalTableFeeList} message tagPersonalTableFeeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPersonalTableFeeList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dwdrawtimelimit != null && message.hasOwnProperty("dwdrawtimelimit"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.dwdrawtimelimit);
            if (message.dwdrawcountlimit != null && message.hasOwnProperty("dwdrawcountlimit"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.dwdrawcountlimit);
            if (message.liniscore != null && message.hasOwnProperty("liniscore"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.liniscore);
            if (message.lfeescore != null && message.hasOwnProperty("lfeescore"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.lfeescore);
            if (message.waapayfee != null && message.hasOwnProperty("waapayfee"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.waapayfee);
            if (message.cbgamemode != null && message.hasOwnProperty("cbgamemode"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cbgamemode);
            return writer;
        };

        /**
         * Encodes the specified tagPersonalTableFeeList message, length delimited. Does not implicitly {@link GamePmd.tagPersonalTableFeeList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GamePmd.tagPersonalTableFeeList
         * @static
         * @param {GamePmd.ItagPersonalTableFeeList} message tagPersonalTableFeeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPersonalTableFeeList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagPersonalTableFeeList message from the specified reader or buffer.
         * @function decode
         * @memberof GamePmd.tagPersonalTableFeeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePmd.tagPersonalTableFeeList} tagPersonalTableFeeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPersonalTableFeeList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePmd.tagPersonalTableFeeList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dwdrawtimelimit = reader.uint64();
                    break;
                case 2:
                    message.dwdrawcountlimit = reader.uint64();
                    break;
                case 3:
                    message.liniscore = reader.uint64();
                    break;
                case 4:
                    message.lfeescore = reader.uint64();
                    break;
                case 5:
                    message.waapayfee = reader.int32();
                    break;
                case 6:
                    message.cbgamemode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagPersonalTableFeeList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GamePmd.tagPersonalTableFeeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GamePmd.tagPersonalTableFeeList} tagPersonalTableFeeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPersonalTableFeeList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagPersonalTableFeeList message.
         * @function verify
         * @memberof GamePmd.tagPersonalTableFeeList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagPersonalTableFeeList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dwdrawtimelimit != null && message.hasOwnProperty("dwdrawtimelimit"))
                if (!$util.isInteger(message.dwdrawtimelimit) && !(message.dwdrawtimelimit && $util.isInteger(message.dwdrawtimelimit.low) && $util.isInteger(message.dwdrawtimelimit.high)))
                    return "dwdrawtimelimit: integer|Long expected";
            if (message.dwdrawcountlimit != null && message.hasOwnProperty("dwdrawcountlimit"))
                if (!$util.isInteger(message.dwdrawcountlimit) && !(message.dwdrawcountlimit && $util.isInteger(message.dwdrawcountlimit.low) && $util.isInteger(message.dwdrawcountlimit.high)))
                    return "dwdrawcountlimit: integer|Long expected";
            if (message.liniscore != null && message.hasOwnProperty("liniscore"))
                if (!$util.isInteger(message.liniscore) && !(message.liniscore && $util.isInteger(message.liniscore.low) && $util.isInteger(message.liniscore.high)))
                    return "liniscore: integer|Long expected";
            if (message.lfeescore != null && message.hasOwnProperty("lfeescore"))
                if (!$util.isInteger(message.lfeescore) && !(message.lfeescore && $util.isInteger(message.lfeescore.low) && $util.isInteger(message.lfeescore.high)))
                    return "lfeescore: integer|Long expected";
            if (message.waapayfee != null && message.hasOwnProperty("waapayfee"))
                if (!$util.isInteger(message.waapayfee))
                    return "waapayfee: integer expected";
            if (message.cbgamemode != null && message.hasOwnProperty("cbgamemode"))
                if (!$util.isInteger(message.cbgamemode))
                    return "cbgamemode: integer expected";
            return null;
        };

        /**
         * Creates a tagPersonalTableFeeList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GamePmd.tagPersonalTableFeeList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GamePmd.tagPersonalTableFeeList} tagPersonalTableFeeList
         */
        tagPersonalTableFeeList.fromObject = function fromObject(object) {
            if (object instanceof $root.GamePmd.tagPersonalTableFeeList)
                return object;
            var message = new $root.GamePmd.tagPersonalTableFeeList();
            if (object.dwdrawtimelimit != null)
                if ($util.Long)
                    (message.dwdrawtimelimit = $util.Long.fromValue(object.dwdrawtimelimit)).unsigned = true;
                else if (typeof object.dwdrawtimelimit === "string")
                    message.dwdrawtimelimit = parseInt(object.dwdrawtimelimit, 10);
                else if (typeof object.dwdrawtimelimit === "number")
                    message.dwdrawtimelimit = object.dwdrawtimelimit;
                else if (typeof object.dwdrawtimelimit === "object")
                    message.dwdrawtimelimit = new $util.LongBits(object.dwdrawtimelimit.low >>> 0, object.dwdrawtimelimit.high >>> 0).toNumber(true);
            if (object.dwdrawcountlimit != null)
                if ($util.Long)
                    (message.dwdrawcountlimit = $util.Long.fromValue(object.dwdrawcountlimit)).unsigned = true;
                else if (typeof object.dwdrawcountlimit === "string")
                    message.dwdrawcountlimit = parseInt(object.dwdrawcountlimit, 10);
                else if (typeof object.dwdrawcountlimit === "number")
                    message.dwdrawcountlimit = object.dwdrawcountlimit;
                else if (typeof object.dwdrawcountlimit === "object")
                    message.dwdrawcountlimit = new $util.LongBits(object.dwdrawcountlimit.low >>> 0, object.dwdrawcountlimit.high >>> 0).toNumber(true);
            if (object.liniscore != null)
                if ($util.Long)
                    (message.liniscore = $util.Long.fromValue(object.liniscore)).unsigned = true;
                else if (typeof object.liniscore === "string")
                    message.liniscore = parseInt(object.liniscore, 10);
                else if (typeof object.liniscore === "number")
                    message.liniscore = object.liniscore;
                else if (typeof object.liniscore === "object")
                    message.liniscore = new $util.LongBits(object.liniscore.low >>> 0, object.liniscore.high >>> 0).toNumber(true);
            if (object.lfeescore != null)
                if ($util.Long)
                    (message.lfeescore = $util.Long.fromValue(object.lfeescore)).unsigned = true;
                else if (typeof object.lfeescore === "string")
                    message.lfeescore = parseInt(object.lfeescore, 10);
                else if (typeof object.lfeescore === "number")
                    message.lfeescore = object.lfeescore;
                else if (typeof object.lfeescore === "object")
                    message.lfeescore = new $util.LongBits(object.lfeescore.low >>> 0, object.lfeescore.high >>> 0).toNumber(true);
            if (object.waapayfee != null)
                message.waapayfee = object.waapayfee | 0;
            if (object.cbgamemode != null)
                message.cbgamemode = object.cbgamemode | 0;
            return message;
        };

        /**
         * Creates a plain object from a tagPersonalTableFeeList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GamePmd.tagPersonalTableFeeList
         * @static
         * @param {GamePmd.tagPersonalTableFeeList} message tagPersonalTableFeeList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagPersonalTableFeeList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwdrawtimelimit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwdrawtimelimit = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwdrawcountlimit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwdrawcountlimit = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.liniscore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.liniscore = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lfeescore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lfeescore = options.longs === String ? "0" : 0;
                object.waapayfee = 0;
                object.cbgamemode = 0;
            }
            if (message.dwdrawtimelimit != null && message.hasOwnProperty("dwdrawtimelimit"))
                if (typeof message.dwdrawtimelimit === "number")
                    object.dwdrawtimelimit = options.longs === String ? String(message.dwdrawtimelimit) : message.dwdrawtimelimit;
                else
                    object.dwdrawtimelimit = options.longs === String ? $util.Long.prototype.toString.call(message.dwdrawtimelimit) : options.longs === Number ? new $util.LongBits(message.dwdrawtimelimit.low >>> 0, message.dwdrawtimelimit.high >>> 0).toNumber(true) : message.dwdrawtimelimit;
            if (message.dwdrawcountlimit != null && message.hasOwnProperty("dwdrawcountlimit"))
                if (typeof message.dwdrawcountlimit === "number")
                    object.dwdrawcountlimit = options.longs === String ? String(message.dwdrawcountlimit) : message.dwdrawcountlimit;
                else
                    object.dwdrawcountlimit = options.longs === String ? $util.Long.prototype.toString.call(message.dwdrawcountlimit) : options.longs === Number ? new $util.LongBits(message.dwdrawcountlimit.low >>> 0, message.dwdrawcountlimit.high >>> 0).toNumber(true) : message.dwdrawcountlimit;
            if (message.liniscore != null && message.hasOwnProperty("liniscore"))
                if (typeof message.liniscore === "number")
                    object.liniscore = options.longs === String ? String(message.liniscore) : message.liniscore;
                else
                    object.liniscore = options.longs === String ? $util.Long.prototype.toString.call(message.liniscore) : options.longs === Number ? new $util.LongBits(message.liniscore.low >>> 0, message.liniscore.high >>> 0).toNumber(true) : message.liniscore;
            if (message.lfeescore != null && message.hasOwnProperty("lfeescore"))
                if (typeof message.lfeescore === "number")
                    object.lfeescore = options.longs === String ? String(message.lfeescore) : message.lfeescore;
                else
                    object.lfeescore = options.longs === String ? $util.Long.prototype.toString.call(message.lfeescore) : options.longs === Number ? new $util.LongBits(message.lfeescore.low >>> 0, message.lfeescore.high >>> 0).toNumber(true) : message.lfeescore;
            if (message.waapayfee != null && message.hasOwnProperty("waapayfee"))
                object.waapayfee = message.waapayfee;
            if (message.cbgamemode != null && message.hasOwnProperty("cbgamemode"))
                object.cbgamemode = message.cbgamemode;
            return object;
        };

        /**
         * Converts this tagPersonalTableFeeList to JSON.
         * @function toJSON
         * @memberof GamePmd.tagPersonalTableFeeList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagPersonalTableFeeList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagPersonalTableFeeList;
    })();

    GamePmd.tagPersonalTableFeeList_s2c = (function() {

        /**
         * Properties of a tagPersonalTableFeeList_s2c.
         * @memberof GamePmd
         * @interface ItagPersonalTableFeeList_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] tagPersonalTableFeeList_s2c respcmd
         * @property {Array.<GamePmd.ItagPersonalTableFeeList>|null} [tagPersonalTableFeeList] tagPersonalTableFeeList_s2c tagPersonalTableFeeList
         */

        /**
         * Constructs a new tagPersonalTableFeeList_s2c.
         * @memberof GamePmd
         * @classdesc Represents a tagPersonalTableFeeList_s2c.
         * @implements ItagPersonalTableFeeList_s2c
         * @constructor
         * @param {GamePmd.ItagPersonalTableFeeList_s2c=} [properties] Properties to set
         */
        function tagPersonalTableFeeList_s2c(properties) {
            this.tagPersonalTableFeeList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagPersonalTableFeeList_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof GamePmd.tagPersonalTableFeeList_s2c
         * @instance
         */
        tagPersonalTableFeeList_s2c.prototype.respcmd = null;

        /**
         * tagPersonalTableFeeList_s2c tagPersonalTableFeeList.
         * @member {Array.<GamePmd.ItagPersonalTableFeeList>} tagPersonalTableFeeList
         * @memberof GamePmd.tagPersonalTableFeeList_s2c
         * @instance
         */
        tagPersonalTableFeeList_s2c.prototype.tagPersonalTableFeeList = $util.emptyArray;

        /**
         * Creates a new tagPersonalTableFeeList_s2c instance using the specified properties.
         * @function create
         * @memberof GamePmd.tagPersonalTableFeeList_s2c
         * @static
         * @param {GamePmd.ItagPersonalTableFeeList_s2c=} [properties] Properties to set
         * @returns {GamePmd.tagPersonalTableFeeList_s2c} tagPersonalTableFeeList_s2c instance
         */
        tagPersonalTableFeeList_s2c.create = function create(properties) {
            return new tagPersonalTableFeeList_s2c(properties);
        };

        /**
         * Encodes the specified tagPersonalTableFeeList_s2c message. Does not implicitly {@link GamePmd.tagPersonalTableFeeList_s2c.verify|verify} messages.
         * @function encode
         * @memberof GamePmd.tagPersonalTableFeeList_s2c
         * @static
         * @param {GamePmd.ItagPersonalTableFeeList_s2c} message tagPersonalTableFeeList_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPersonalTableFeeList_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.tagPersonalTableFeeList != null && message.tagPersonalTableFeeList.length)
                for (var i = 0; i < message.tagPersonalTableFeeList.length; ++i)
                    $root.GamePmd.tagPersonalTableFeeList.encode(message.tagPersonalTableFeeList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified tagPersonalTableFeeList_s2c message, length delimited. Does not implicitly {@link GamePmd.tagPersonalTableFeeList_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GamePmd.tagPersonalTableFeeList_s2c
         * @static
         * @param {GamePmd.ItagPersonalTableFeeList_s2c} message tagPersonalTableFeeList_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPersonalTableFeeList_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagPersonalTableFeeList_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof GamePmd.tagPersonalTableFeeList_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePmd.tagPersonalTableFeeList_s2c} tagPersonalTableFeeList_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPersonalTableFeeList_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePmd.tagPersonalTableFeeList_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.tagPersonalTableFeeList && message.tagPersonalTableFeeList.length))
                        message.tagPersonalTableFeeList = [];
                    message.tagPersonalTableFeeList.push($root.GamePmd.tagPersonalTableFeeList.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagPersonalTableFeeList_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GamePmd.tagPersonalTableFeeList_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GamePmd.tagPersonalTableFeeList_s2c} tagPersonalTableFeeList_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPersonalTableFeeList_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagPersonalTableFeeList_s2c message.
         * @function verify
         * @memberof GamePmd.tagPersonalTableFeeList_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagPersonalTableFeeList_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.tagPersonalTableFeeList != null && message.hasOwnProperty("tagPersonalTableFeeList")) {
                if (!Array.isArray(message.tagPersonalTableFeeList))
                    return "tagPersonalTableFeeList: array expected";
                for (var i = 0; i < message.tagPersonalTableFeeList.length; ++i) {
                    var error = $root.GamePmd.tagPersonalTableFeeList.verify(message.tagPersonalTableFeeList[i]);
                    if (error)
                        return "tagPersonalTableFeeList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a tagPersonalTableFeeList_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GamePmd.tagPersonalTableFeeList_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GamePmd.tagPersonalTableFeeList_s2c} tagPersonalTableFeeList_s2c
         */
        tagPersonalTableFeeList_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.GamePmd.tagPersonalTableFeeList_s2c)
                return object;
            var message = new $root.GamePmd.tagPersonalTableFeeList_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".GamePmd.tagPersonalTableFeeList_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.tagPersonalTableFeeList) {
                if (!Array.isArray(object.tagPersonalTableFeeList))
                    throw TypeError(".GamePmd.tagPersonalTableFeeList_s2c.tagPersonalTableFeeList: array expected");
                message.tagPersonalTableFeeList = [];
                for (var i = 0; i < object.tagPersonalTableFeeList.length; ++i) {
                    if (typeof object.tagPersonalTableFeeList[i] !== "object")
                        throw TypeError(".GamePmd.tagPersonalTableFeeList_s2c.tagPersonalTableFeeList: object expected");
                    message.tagPersonalTableFeeList[i] = $root.GamePmd.tagPersonalTableFeeList.fromObject(object.tagPersonalTableFeeList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a tagPersonalTableFeeList_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GamePmd.tagPersonalTableFeeList_s2c
         * @static
         * @param {GamePmd.tagPersonalTableFeeList_s2c} message tagPersonalTableFeeList_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagPersonalTableFeeList_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tagPersonalTableFeeList = [];
            if (options.defaults)
                object.respcmd = null;
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.tagPersonalTableFeeList && message.tagPersonalTableFeeList.length) {
                object.tagPersonalTableFeeList = [];
                for (var j = 0; j < message.tagPersonalTableFeeList.length; ++j)
                    object.tagPersonalTableFeeList[j] = $root.GamePmd.tagPersonalTableFeeList.toObject(message.tagPersonalTableFeeList[j], options);
            }
            return object;
        };

        /**
         * Converts this tagPersonalTableFeeList_s2c to JSON.
         * @function toJSON
         * @memberof GamePmd.tagPersonalTableFeeList_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagPersonalTableFeeList_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagPersonalTableFeeList_s2c;
    })();

    GamePmd.tagPersonalCellScore_s2c = (function() {

        /**
         * Properties of a tagPersonalCellScore_s2c.
         * @memberof GamePmd
         * @interface ItagPersonalCellScore_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] tagPersonalCellScore_s2c respcmd
         * @property {Array.<number>|null} [ncellscore] tagPersonalCellScore_s2c ncellscore
         */

        /**
         * Constructs a new tagPersonalCellScore_s2c.
         * @memberof GamePmd
         * @classdesc Represents a tagPersonalCellScore_s2c.
         * @implements ItagPersonalCellScore_s2c
         * @constructor
         * @param {GamePmd.ItagPersonalCellScore_s2c=} [properties] Properties to set
         */
        function tagPersonalCellScore_s2c(properties) {
            this.ncellscore = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagPersonalCellScore_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof GamePmd.tagPersonalCellScore_s2c
         * @instance
         */
        tagPersonalCellScore_s2c.prototype.respcmd = null;

        /**
         * tagPersonalCellScore_s2c ncellscore.
         * @member {Array.<number>} ncellscore
         * @memberof GamePmd.tagPersonalCellScore_s2c
         * @instance
         */
        tagPersonalCellScore_s2c.prototype.ncellscore = $util.emptyArray;

        /**
         * Creates a new tagPersonalCellScore_s2c instance using the specified properties.
         * @function create
         * @memberof GamePmd.tagPersonalCellScore_s2c
         * @static
         * @param {GamePmd.ItagPersonalCellScore_s2c=} [properties] Properties to set
         * @returns {GamePmd.tagPersonalCellScore_s2c} tagPersonalCellScore_s2c instance
         */
        tagPersonalCellScore_s2c.create = function create(properties) {
            return new tagPersonalCellScore_s2c(properties);
        };

        /**
         * Encodes the specified tagPersonalCellScore_s2c message. Does not implicitly {@link GamePmd.tagPersonalCellScore_s2c.verify|verify} messages.
         * @function encode
         * @memberof GamePmd.tagPersonalCellScore_s2c
         * @static
         * @param {GamePmd.ItagPersonalCellScore_s2c} message tagPersonalCellScore_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPersonalCellScore_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.ncellscore != null && message.ncellscore.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.ncellscore.length; ++i)
                    writer.int32(message.ncellscore[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified tagPersonalCellScore_s2c message, length delimited. Does not implicitly {@link GamePmd.tagPersonalCellScore_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GamePmd.tagPersonalCellScore_s2c
         * @static
         * @param {GamePmd.ItagPersonalCellScore_s2c} message tagPersonalCellScore_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPersonalCellScore_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagPersonalCellScore_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof GamePmd.tagPersonalCellScore_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePmd.tagPersonalCellScore_s2c} tagPersonalCellScore_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPersonalCellScore_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePmd.tagPersonalCellScore_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.ncellscore && message.ncellscore.length))
                        message.ncellscore = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ncellscore.push(reader.int32());
                    } else
                        message.ncellscore.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagPersonalCellScore_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GamePmd.tagPersonalCellScore_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GamePmd.tagPersonalCellScore_s2c} tagPersonalCellScore_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPersonalCellScore_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagPersonalCellScore_s2c message.
         * @function verify
         * @memberof GamePmd.tagPersonalCellScore_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagPersonalCellScore_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.ncellscore != null && message.hasOwnProperty("ncellscore")) {
                if (!Array.isArray(message.ncellscore))
                    return "ncellscore: array expected";
                for (var i = 0; i < message.ncellscore.length; ++i)
                    if (!$util.isInteger(message.ncellscore[i]))
                        return "ncellscore: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a tagPersonalCellScore_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GamePmd.tagPersonalCellScore_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GamePmd.tagPersonalCellScore_s2c} tagPersonalCellScore_s2c
         */
        tagPersonalCellScore_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.GamePmd.tagPersonalCellScore_s2c)
                return object;
            var message = new $root.GamePmd.tagPersonalCellScore_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".GamePmd.tagPersonalCellScore_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.ncellscore) {
                if (!Array.isArray(object.ncellscore))
                    throw TypeError(".GamePmd.tagPersonalCellScore_s2c.ncellscore: array expected");
                message.ncellscore = [];
                for (var i = 0; i < object.ncellscore.length; ++i)
                    message.ncellscore[i] = object.ncellscore[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a tagPersonalCellScore_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GamePmd.tagPersonalCellScore_s2c
         * @static
         * @param {GamePmd.tagPersonalCellScore_s2c} message tagPersonalCellScore_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagPersonalCellScore_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ncellscore = [];
            if (options.defaults)
                object.respcmd = null;
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.ncellscore && message.ncellscore.length) {
                object.ncellscore = [];
                for (var j = 0; j < message.ncellscore.length; ++j)
                    object.ncellscore[j] = message.ncellscore[j];
            }
            return object;
        };

        /**
         * Converts this tagPersonalCellScore_s2c to JSON.
         * @function toJSON
         * @memberof GamePmd.tagPersonalCellScore_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagPersonalCellScore_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagPersonalCellScore_s2c;
    })();

    GamePmd.tagGetPersonalRule_s2c = (function() {

        /**
         * Properties of a tagGetPersonalRule_s2c.
         * @memberof GamePmd
         * @interface ItagGetPersonalRule_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] tagGetPersonalRule_s2c respcmd
         * @property {string|null} [cbpersonalrule] tagGetPersonalRule_s2c cbpersonalrule
         */

        /**
         * Constructs a new tagGetPersonalRule_s2c.
         * @memberof GamePmd
         * @classdesc Represents a tagGetPersonalRule_s2c.
         * @implements ItagGetPersonalRule_s2c
         * @constructor
         * @param {GamePmd.ItagGetPersonalRule_s2c=} [properties] Properties to set
         */
        function tagGetPersonalRule_s2c(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagGetPersonalRule_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof GamePmd.tagGetPersonalRule_s2c
         * @instance
         */
        tagGetPersonalRule_s2c.prototype.respcmd = null;

        /**
         * tagGetPersonalRule_s2c cbpersonalrule.
         * @member {string} cbpersonalrule
         * @memberof GamePmd.tagGetPersonalRule_s2c
         * @instance
         */
        tagGetPersonalRule_s2c.prototype.cbpersonalrule = "";

        /**
         * Creates a new tagGetPersonalRule_s2c instance using the specified properties.
         * @function create
         * @memberof GamePmd.tagGetPersonalRule_s2c
         * @static
         * @param {GamePmd.ItagGetPersonalRule_s2c=} [properties] Properties to set
         * @returns {GamePmd.tagGetPersonalRule_s2c} tagGetPersonalRule_s2c instance
         */
        tagGetPersonalRule_s2c.create = function create(properties) {
            return new tagGetPersonalRule_s2c(properties);
        };

        /**
         * Encodes the specified tagGetPersonalRule_s2c message. Does not implicitly {@link GamePmd.tagGetPersonalRule_s2c.verify|verify} messages.
         * @function encode
         * @memberof GamePmd.tagGetPersonalRule_s2c
         * @static
         * @param {GamePmd.ItagGetPersonalRule_s2c} message tagGetPersonalRule_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGetPersonalRule_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.cbpersonalrule != null && message.hasOwnProperty("cbpersonalrule"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.cbpersonalrule);
            return writer;
        };

        /**
         * Encodes the specified tagGetPersonalRule_s2c message, length delimited. Does not implicitly {@link GamePmd.tagGetPersonalRule_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GamePmd.tagGetPersonalRule_s2c
         * @static
         * @param {GamePmd.ItagGetPersonalRule_s2c} message tagGetPersonalRule_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGetPersonalRule_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagGetPersonalRule_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof GamePmd.tagGetPersonalRule_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePmd.tagGetPersonalRule_s2c} tagGetPersonalRule_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGetPersonalRule_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePmd.tagGetPersonalRule_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.cbpersonalrule = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagGetPersonalRule_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GamePmd.tagGetPersonalRule_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GamePmd.tagGetPersonalRule_s2c} tagGetPersonalRule_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGetPersonalRule_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagGetPersonalRule_s2c message.
         * @function verify
         * @memberof GamePmd.tagGetPersonalRule_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagGetPersonalRule_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.cbpersonalrule != null && message.hasOwnProperty("cbpersonalrule"))
                if (!$util.isString(message.cbpersonalrule))
                    return "cbpersonalrule: string expected";
            return null;
        };

        /**
         * Creates a tagGetPersonalRule_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GamePmd.tagGetPersonalRule_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GamePmd.tagGetPersonalRule_s2c} tagGetPersonalRule_s2c
         */
        tagGetPersonalRule_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.GamePmd.tagGetPersonalRule_s2c)
                return object;
            var message = new $root.GamePmd.tagGetPersonalRule_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".GamePmd.tagGetPersonalRule_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.cbpersonalrule != null)
                message.cbpersonalrule = String(object.cbpersonalrule);
            return message;
        };

        /**
         * Creates a plain object from a tagGetPersonalRule_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GamePmd.tagGetPersonalRule_s2c
         * @static
         * @param {GamePmd.tagGetPersonalRule_s2c} message tagGetPersonalRule_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagGetPersonalRule_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.respcmd = null;
                object.cbpersonalrule = "";
            }
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.cbpersonalrule != null && message.hasOwnProperty("cbpersonalrule"))
                object.cbpersonalrule = message.cbpersonalrule;
            return object;
        };

        /**
         * Converts this tagGetPersonalRule_s2c to JSON.
         * @function toJSON
         * @memberof GamePmd.tagGetPersonalRule_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagGetPersonalRule_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagGetPersonalRule_s2c;
    })();

    GamePmd.tagPersonalRoomOption_s2c = (function() {

        /**
         * Properties of a tagPersonalRoomOption_s2c.
         * @memberof GamePmd
         * @interface ItagPersonalRoomOption_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] tagPersonalRoomOption_s2c respcmd
         * @property {number|null} [cbisjoingame] tagPersonalRoomOption_s2c cbisjoingame
         * @property {number|null} [cbminpeople] tagPersonalRoomOption_s2c cbminpeople
         * @property {number|null} [cbmaxpeople] tagPersonalRoomOption_s2c cbmaxpeople
         * @property {number|Long|null} [lmaxcellscore] tagPersonalRoomOption_s2c lmaxcellscore
         * @property {number|Long|null} [lpersonalroomtax] tagPersonalRoomOption_s2c lpersonalroomtax
         * @property {CommonPmd.IconsumptionType|null} [bconsumptiontype] tagPersonalRoomOption_s2c bconsumptiontype
         * @property {number|null} [wcancreatecount] tagPersonalRoomOption_s2c wcancreatecount
         * @property {number|Long|null} [dwplayturncount] tagPersonalRoomOption_s2c dwplayturncount
         * @property {number|Long|null} [dwplaytimelimit] tagPersonalRoomOption_s2c dwplaytimelimit
         * @property {number|Long|null} [dwtimeafterbegincount] tagPersonalRoomOption_s2c dwtimeafterbegincount
         * @property {number|Long|null} [dwtimeofflinecount] tagPersonalRoomOption_s2c dwtimeofflinecount
         * @property {number|Long|null} [dwtimenotbegingame] tagPersonalRoomOption_s2c dwtimenotbegingame
         * @property {number|Long|null} [dwtimeaftercreateroom] tagPersonalRoomOption_s2c dwtimeaftercreateroom
         * @property {number|null} [wbeginfreetime] tagPersonalRoomOption_s2c wbeginfreetime
         * @property {number|null} [wendfreetime] tagPersonalRoomOption_s2c wendfreetime
         */

        /**
         * Constructs a new tagPersonalRoomOption_s2c.
         * @memberof GamePmd
         * @classdesc Represents a tagPersonalRoomOption_s2c.
         * @implements ItagPersonalRoomOption_s2c
         * @constructor
         * @param {GamePmd.ItagPersonalRoomOption_s2c=} [properties] Properties to set
         */
        function tagPersonalRoomOption_s2c(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagPersonalRoomOption_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @instance
         */
        tagPersonalRoomOption_s2c.prototype.respcmd = null;

        /**
         * tagPersonalRoomOption_s2c cbisjoingame.
         * @member {number} cbisjoingame
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @instance
         */
        tagPersonalRoomOption_s2c.prototype.cbisjoingame = 0;

        /**
         * tagPersonalRoomOption_s2c cbminpeople.
         * @member {number} cbminpeople
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @instance
         */
        tagPersonalRoomOption_s2c.prototype.cbminpeople = 0;

        /**
         * tagPersonalRoomOption_s2c cbmaxpeople.
         * @member {number} cbmaxpeople
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @instance
         */
        tagPersonalRoomOption_s2c.prototype.cbmaxpeople = 0;

        /**
         * tagPersonalRoomOption_s2c lmaxcellscore.
         * @member {number|Long} lmaxcellscore
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @instance
         */
        tagPersonalRoomOption_s2c.prototype.lmaxcellscore = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPersonalRoomOption_s2c lpersonalroomtax.
         * @member {number|Long} lpersonalroomtax
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @instance
         */
        tagPersonalRoomOption_s2c.prototype.lpersonalroomtax = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPersonalRoomOption_s2c bconsumptiontype.
         * @member {CommonPmd.IconsumptionType|null|undefined} bconsumptiontype
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @instance
         */
        tagPersonalRoomOption_s2c.prototype.bconsumptiontype = null;

        /**
         * tagPersonalRoomOption_s2c wcancreatecount.
         * @member {number} wcancreatecount
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @instance
         */
        tagPersonalRoomOption_s2c.prototype.wcancreatecount = 0;

        /**
         * tagPersonalRoomOption_s2c dwplayturncount.
         * @member {number|Long} dwplayturncount
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @instance
         */
        tagPersonalRoomOption_s2c.prototype.dwplayturncount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPersonalRoomOption_s2c dwplaytimelimit.
         * @member {number|Long} dwplaytimelimit
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @instance
         */
        tagPersonalRoomOption_s2c.prototype.dwplaytimelimit = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPersonalRoomOption_s2c dwtimeafterbegincount.
         * @member {number|Long} dwtimeafterbegincount
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @instance
         */
        tagPersonalRoomOption_s2c.prototype.dwtimeafterbegincount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPersonalRoomOption_s2c dwtimeofflinecount.
         * @member {number|Long} dwtimeofflinecount
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @instance
         */
        tagPersonalRoomOption_s2c.prototype.dwtimeofflinecount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPersonalRoomOption_s2c dwtimenotbegingame.
         * @member {number|Long} dwtimenotbegingame
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @instance
         */
        tagPersonalRoomOption_s2c.prototype.dwtimenotbegingame = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPersonalRoomOption_s2c dwtimeaftercreateroom.
         * @member {number|Long} dwtimeaftercreateroom
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @instance
         */
        tagPersonalRoomOption_s2c.prototype.dwtimeaftercreateroom = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPersonalRoomOption_s2c wbeginfreetime.
         * @member {number} wbeginfreetime
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @instance
         */
        tagPersonalRoomOption_s2c.prototype.wbeginfreetime = 0;

        /**
         * tagPersonalRoomOption_s2c wendfreetime.
         * @member {number} wendfreetime
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @instance
         */
        tagPersonalRoomOption_s2c.prototype.wendfreetime = 0;

        /**
         * Creates a new tagPersonalRoomOption_s2c instance using the specified properties.
         * @function create
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @static
         * @param {GamePmd.ItagPersonalRoomOption_s2c=} [properties] Properties to set
         * @returns {GamePmd.tagPersonalRoomOption_s2c} tagPersonalRoomOption_s2c instance
         */
        tagPersonalRoomOption_s2c.create = function create(properties) {
            return new tagPersonalRoomOption_s2c(properties);
        };

        /**
         * Encodes the specified tagPersonalRoomOption_s2c message. Does not implicitly {@link GamePmd.tagPersonalRoomOption_s2c.verify|verify} messages.
         * @function encode
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @static
         * @param {GamePmd.ItagPersonalRoomOption_s2c} message tagPersonalRoomOption_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPersonalRoomOption_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.cbisjoingame != null && message.hasOwnProperty("cbisjoingame"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cbisjoingame);
            if (message.cbminpeople != null && message.hasOwnProperty("cbminpeople"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cbminpeople);
            if (message.cbmaxpeople != null && message.hasOwnProperty("cbmaxpeople"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cbmaxpeople);
            if (message.lmaxcellscore != null && message.hasOwnProperty("lmaxcellscore"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.lmaxcellscore);
            if (message.lpersonalroomtax != null && message.hasOwnProperty("lpersonalroomtax"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.lpersonalroomtax);
            if (message.bconsumptiontype != null && message.hasOwnProperty("bconsumptiontype"))
                $root.CommonPmd.consumptionType.encode(message.bconsumptiontype, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.wcancreatecount != null && message.hasOwnProperty("wcancreatecount"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.wcancreatecount);
            if (message.dwplayturncount != null && message.hasOwnProperty("dwplayturncount"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.dwplayturncount);
            if (message.dwplaytimelimit != null && message.hasOwnProperty("dwplaytimelimit"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.dwplaytimelimit);
            if (message.dwtimeafterbegincount != null && message.hasOwnProperty("dwtimeafterbegincount"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.dwtimeafterbegincount);
            if (message.dwtimeofflinecount != null && message.hasOwnProperty("dwtimeofflinecount"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.dwtimeofflinecount);
            if (message.dwtimenotbegingame != null && message.hasOwnProperty("dwtimenotbegingame"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint64(message.dwtimenotbegingame);
            if (message.dwtimeaftercreateroom != null && message.hasOwnProperty("dwtimeaftercreateroom"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint64(message.dwtimeaftercreateroom);
            if (message.wbeginfreetime != null && message.hasOwnProperty("wbeginfreetime"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.wbeginfreetime);
            if (message.wendfreetime != null && message.hasOwnProperty("wendfreetime"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.wendfreetime);
            return writer;
        };

        /**
         * Encodes the specified tagPersonalRoomOption_s2c message, length delimited. Does not implicitly {@link GamePmd.tagPersonalRoomOption_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @static
         * @param {GamePmd.ItagPersonalRoomOption_s2c} message tagPersonalRoomOption_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPersonalRoomOption_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagPersonalRoomOption_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GamePmd.tagPersonalRoomOption_s2c} tagPersonalRoomOption_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPersonalRoomOption_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePmd.tagPersonalRoomOption_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.cbisjoingame = reader.int32();
                    break;
                case 3:
                    message.cbminpeople = reader.int32();
                    break;
                case 4:
                    message.cbmaxpeople = reader.int32();
                    break;
                case 5:
                    message.lmaxcellscore = reader.uint64();
                    break;
                case 6:
                    message.lpersonalroomtax = reader.uint64();
                    break;
                case 7:
                    message.bconsumptiontype = $root.CommonPmd.consumptionType.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.wcancreatecount = reader.int32();
                    break;
                case 9:
                    message.dwplayturncount = reader.uint64();
                    break;
                case 10:
                    message.dwplaytimelimit = reader.uint64();
                    break;
                case 11:
                    message.dwtimeafterbegincount = reader.uint64();
                    break;
                case 12:
                    message.dwtimeofflinecount = reader.uint64();
                    break;
                case 13:
                    message.dwtimenotbegingame = reader.uint64();
                    break;
                case 14:
                    message.dwtimeaftercreateroom = reader.uint64();
                    break;
                case 15:
                    message.wbeginfreetime = reader.int32();
                    break;
                case 16:
                    message.wendfreetime = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagPersonalRoomOption_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GamePmd.tagPersonalRoomOption_s2c} tagPersonalRoomOption_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPersonalRoomOption_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagPersonalRoomOption_s2c message.
         * @function verify
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagPersonalRoomOption_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.cbisjoingame != null && message.hasOwnProperty("cbisjoingame"))
                if (!$util.isInteger(message.cbisjoingame))
                    return "cbisjoingame: integer expected";
            if (message.cbminpeople != null && message.hasOwnProperty("cbminpeople"))
                if (!$util.isInteger(message.cbminpeople))
                    return "cbminpeople: integer expected";
            if (message.cbmaxpeople != null && message.hasOwnProperty("cbmaxpeople"))
                if (!$util.isInteger(message.cbmaxpeople))
                    return "cbmaxpeople: integer expected";
            if (message.lmaxcellscore != null && message.hasOwnProperty("lmaxcellscore"))
                if (!$util.isInteger(message.lmaxcellscore) && !(message.lmaxcellscore && $util.isInteger(message.lmaxcellscore.low) && $util.isInteger(message.lmaxcellscore.high)))
                    return "lmaxcellscore: integer|Long expected";
            if (message.lpersonalroomtax != null && message.hasOwnProperty("lpersonalroomtax"))
                if (!$util.isInteger(message.lpersonalroomtax) && !(message.lpersonalroomtax && $util.isInteger(message.lpersonalroomtax.low) && $util.isInteger(message.lpersonalroomtax.high)))
                    return "lpersonalroomtax: integer|Long expected";
            if (message.bconsumptiontype != null && message.hasOwnProperty("bconsumptiontype")) {
                var error = $root.CommonPmd.consumptionType.verify(message.bconsumptiontype);
                if (error)
                    return "bconsumptiontype." + error;
            }
            if (message.wcancreatecount != null && message.hasOwnProperty("wcancreatecount"))
                if (!$util.isInteger(message.wcancreatecount))
                    return "wcancreatecount: integer expected";
            if (message.dwplayturncount != null && message.hasOwnProperty("dwplayturncount"))
                if (!$util.isInteger(message.dwplayturncount) && !(message.dwplayturncount && $util.isInteger(message.dwplayturncount.low) && $util.isInteger(message.dwplayturncount.high)))
                    return "dwplayturncount: integer|Long expected";
            if (message.dwplaytimelimit != null && message.hasOwnProperty("dwplaytimelimit"))
                if (!$util.isInteger(message.dwplaytimelimit) && !(message.dwplaytimelimit && $util.isInteger(message.dwplaytimelimit.low) && $util.isInteger(message.dwplaytimelimit.high)))
                    return "dwplaytimelimit: integer|Long expected";
            if (message.dwtimeafterbegincount != null && message.hasOwnProperty("dwtimeafterbegincount"))
                if (!$util.isInteger(message.dwtimeafterbegincount) && !(message.dwtimeafterbegincount && $util.isInteger(message.dwtimeafterbegincount.low) && $util.isInteger(message.dwtimeafterbegincount.high)))
                    return "dwtimeafterbegincount: integer|Long expected";
            if (message.dwtimeofflinecount != null && message.hasOwnProperty("dwtimeofflinecount"))
                if (!$util.isInteger(message.dwtimeofflinecount) && !(message.dwtimeofflinecount && $util.isInteger(message.dwtimeofflinecount.low) && $util.isInteger(message.dwtimeofflinecount.high)))
                    return "dwtimeofflinecount: integer|Long expected";
            if (message.dwtimenotbegingame != null && message.hasOwnProperty("dwtimenotbegingame"))
                if (!$util.isInteger(message.dwtimenotbegingame) && !(message.dwtimenotbegingame && $util.isInteger(message.dwtimenotbegingame.low) && $util.isInteger(message.dwtimenotbegingame.high)))
                    return "dwtimenotbegingame: integer|Long expected";
            if (message.dwtimeaftercreateroom != null && message.hasOwnProperty("dwtimeaftercreateroom"))
                if (!$util.isInteger(message.dwtimeaftercreateroom) && !(message.dwtimeaftercreateroom && $util.isInteger(message.dwtimeaftercreateroom.low) && $util.isInteger(message.dwtimeaftercreateroom.high)))
                    return "dwtimeaftercreateroom: integer|Long expected";
            if (message.wbeginfreetime != null && message.hasOwnProperty("wbeginfreetime"))
                if (!$util.isInteger(message.wbeginfreetime))
                    return "wbeginfreetime: integer expected";
            if (message.wendfreetime != null && message.hasOwnProperty("wendfreetime"))
                if (!$util.isInteger(message.wendfreetime))
                    return "wendfreetime: integer expected";
            return null;
        };

        /**
         * Creates a tagPersonalRoomOption_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GamePmd.tagPersonalRoomOption_s2c} tagPersonalRoomOption_s2c
         */
        tagPersonalRoomOption_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.GamePmd.tagPersonalRoomOption_s2c)
                return object;
            var message = new $root.GamePmd.tagPersonalRoomOption_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".GamePmd.tagPersonalRoomOption_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.cbisjoingame != null)
                message.cbisjoingame = object.cbisjoingame | 0;
            if (object.cbminpeople != null)
                message.cbminpeople = object.cbminpeople | 0;
            if (object.cbmaxpeople != null)
                message.cbmaxpeople = object.cbmaxpeople | 0;
            if (object.lmaxcellscore != null)
                if ($util.Long)
                    (message.lmaxcellscore = $util.Long.fromValue(object.lmaxcellscore)).unsigned = true;
                else if (typeof object.lmaxcellscore === "string")
                    message.lmaxcellscore = parseInt(object.lmaxcellscore, 10);
                else if (typeof object.lmaxcellscore === "number")
                    message.lmaxcellscore = object.lmaxcellscore;
                else if (typeof object.lmaxcellscore === "object")
                    message.lmaxcellscore = new $util.LongBits(object.lmaxcellscore.low >>> 0, object.lmaxcellscore.high >>> 0).toNumber(true);
            if (object.lpersonalroomtax != null)
                if ($util.Long)
                    (message.lpersonalroomtax = $util.Long.fromValue(object.lpersonalroomtax)).unsigned = true;
                else if (typeof object.lpersonalroomtax === "string")
                    message.lpersonalroomtax = parseInt(object.lpersonalroomtax, 10);
                else if (typeof object.lpersonalroomtax === "number")
                    message.lpersonalroomtax = object.lpersonalroomtax;
                else if (typeof object.lpersonalroomtax === "object")
                    message.lpersonalroomtax = new $util.LongBits(object.lpersonalroomtax.low >>> 0, object.lpersonalroomtax.high >>> 0).toNumber(true);
            if (object.bconsumptiontype != null) {
                if (typeof object.bconsumptiontype !== "object")
                    throw TypeError(".GamePmd.tagPersonalRoomOption_s2c.bconsumptiontype: object expected");
                message.bconsumptiontype = $root.CommonPmd.consumptionType.fromObject(object.bconsumptiontype);
            }
            if (object.wcancreatecount != null)
                message.wcancreatecount = object.wcancreatecount | 0;
            if (object.dwplayturncount != null)
                if ($util.Long)
                    (message.dwplayturncount = $util.Long.fromValue(object.dwplayturncount)).unsigned = true;
                else if (typeof object.dwplayturncount === "string")
                    message.dwplayturncount = parseInt(object.dwplayturncount, 10);
                else if (typeof object.dwplayturncount === "number")
                    message.dwplayturncount = object.dwplayturncount;
                else if (typeof object.dwplayturncount === "object")
                    message.dwplayturncount = new $util.LongBits(object.dwplayturncount.low >>> 0, object.dwplayturncount.high >>> 0).toNumber(true);
            if (object.dwplaytimelimit != null)
                if ($util.Long)
                    (message.dwplaytimelimit = $util.Long.fromValue(object.dwplaytimelimit)).unsigned = true;
                else if (typeof object.dwplaytimelimit === "string")
                    message.dwplaytimelimit = parseInt(object.dwplaytimelimit, 10);
                else if (typeof object.dwplaytimelimit === "number")
                    message.dwplaytimelimit = object.dwplaytimelimit;
                else if (typeof object.dwplaytimelimit === "object")
                    message.dwplaytimelimit = new $util.LongBits(object.dwplaytimelimit.low >>> 0, object.dwplaytimelimit.high >>> 0).toNumber(true);
            if (object.dwtimeafterbegincount != null)
                if ($util.Long)
                    (message.dwtimeafterbegincount = $util.Long.fromValue(object.dwtimeafterbegincount)).unsigned = true;
                else if (typeof object.dwtimeafterbegincount === "string")
                    message.dwtimeafterbegincount = parseInt(object.dwtimeafterbegincount, 10);
                else if (typeof object.dwtimeafterbegincount === "number")
                    message.dwtimeafterbegincount = object.dwtimeafterbegincount;
                else if (typeof object.dwtimeafterbegincount === "object")
                    message.dwtimeafterbegincount = new $util.LongBits(object.dwtimeafterbegincount.low >>> 0, object.dwtimeafterbegincount.high >>> 0).toNumber(true);
            if (object.dwtimeofflinecount != null)
                if ($util.Long)
                    (message.dwtimeofflinecount = $util.Long.fromValue(object.dwtimeofflinecount)).unsigned = true;
                else if (typeof object.dwtimeofflinecount === "string")
                    message.dwtimeofflinecount = parseInt(object.dwtimeofflinecount, 10);
                else if (typeof object.dwtimeofflinecount === "number")
                    message.dwtimeofflinecount = object.dwtimeofflinecount;
                else if (typeof object.dwtimeofflinecount === "object")
                    message.dwtimeofflinecount = new $util.LongBits(object.dwtimeofflinecount.low >>> 0, object.dwtimeofflinecount.high >>> 0).toNumber(true);
            if (object.dwtimenotbegingame != null)
                if ($util.Long)
                    (message.dwtimenotbegingame = $util.Long.fromValue(object.dwtimenotbegingame)).unsigned = true;
                else if (typeof object.dwtimenotbegingame === "string")
                    message.dwtimenotbegingame = parseInt(object.dwtimenotbegingame, 10);
                else if (typeof object.dwtimenotbegingame === "number")
                    message.dwtimenotbegingame = object.dwtimenotbegingame;
                else if (typeof object.dwtimenotbegingame === "object")
                    message.dwtimenotbegingame = new $util.LongBits(object.dwtimenotbegingame.low >>> 0, object.dwtimenotbegingame.high >>> 0).toNumber(true);
            if (object.dwtimeaftercreateroom != null)
                if ($util.Long)
                    (message.dwtimeaftercreateroom = $util.Long.fromValue(object.dwtimeaftercreateroom)).unsigned = true;
                else if (typeof object.dwtimeaftercreateroom === "string")
                    message.dwtimeaftercreateroom = parseInt(object.dwtimeaftercreateroom, 10);
                else if (typeof object.dwtimeaftercreateroom === "number")
                    message.dwtimeaftercreateroom = object.dwtimeaftercreateroom;
                else if (typeof object.dwtimeaftercreateroom === "object")
                    message.dwtimeaftercreateroom = new $util.LongBits(object.dwtimeaftercreateroom.low >>> 0, object.dwtimeaftercreateroom.high >>> 0).toNumber(true);
            if (object.wbeginfreetime != null)
                message.wbeginfreetime = object.wbeginfreetime | 0;
            if (object.wendfreetime != null)
                message.wendfreetime = object.wendfreetime | 0;
            return message;
        };

        /**
         * Creates a plain object from a tagPersonalRoomOption_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @static
         * @param {GamePmd.tagPersonalRoomOption_s2c} message tagPersonalRoomOption_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagPersonalRoomOption_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.respcmd = null;
                object.cbisjoingame = 0;
                object.cbminpeople = 0;
                object.cbmaxpeople = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lmaxcellscore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lmaxcellscore = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lpersonalroomtax = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lpersonalroomtax = options.longs === String ? "0" : 0;
                object.bconsumptiontype = null;
                object.wcancreatecount = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwplayturncount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwplayturncount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwplaytimelimit = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwplaytimelimit = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwtimeafterbegincount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwtimeafterbegincount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwtimeofflinecount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwtimeofflinecount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwtimenotbegingame = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwtimenotbegingame = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwtimeaftercreateroom = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwtimeaftercreateroom = options.longs === String ? "0" : 0;
                object.wbeginfreetime = 0;
                object.wendfreetime = 0;
            }
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.cbisjoingame != null && message.hasOwnProperty("cbisjoingame"))
                object.cbisjoingame = message.cbisjoingame;
            if (message.cbminpeople != null && message.hasOwnProperty("cbminpeople"))
                object.cbminpeople = message.cbminpeople;
            if (message.cbmaxpeople != null && message.hasOwnProperty("cbmaxpeople"))
                object.cbmaxpeople = message.cbmaxpeople;
            if (message.lmaxcellscore != null && message.hasOwnProperty("lmaxcellscore"))
                if (typeof message.lmaxcellscore === "number")
                    object.lmaxcellscore = options.longs === String ? String(message.lmaxcellscore) : message.lmaxcellscore;
                else
                    object.lmaxcellscore = options.longs === String ? $util.Long.prototype.toString.call(message.lmaxcellscore) : options.longs === Number ? new $util.LongBits(message.lmaxcellscore.low >>> 0, message.lmaxcellscore.high >>> 0).toNumber(true) : message.lmaxcellscore;
            if (message.lpersonalroomtax != null && message.hasOwnProperty("lpersonalroomtax"))
                if (typeof message.lpersonalroomtax === "number")
                    object.lpersonalroomtax = options.longs === String ? String(message.lpersonalroomtax) : message.lpersonalroomtax;
                else
                    object.lpersonalroomtax = options.longs === String ? $util.Long.prototype.toString.call(message.lpersonalroomtax) : options.longs === Number ? new $util.LongBits(message.lpersonalroomtax.low >>> 0, message.lpersonalroomtax.high >>> 0).toNumber(true) : message.lpersonalroomtax;
            if (message.bconsumptiontype != null && message.hasOwnProperty("bconsumptiontype"))
                object.bconsumptiontype = $root.CommonPmd.consumptionType.toObject(message.bconsumptiontype, options);
            if (message.wcancreatecount != null && message.hasOwnProperty("wcancreatecount"))
                object.wcancreatecount = message.wcancreatecount;
            if (message.dwplayturncount != null && message.hasOwnProperty("dwplayturncount"))
                if (typeof message.dwplayturncount === "number")
                    object.dwplayturncount = options.longs === String ? String(message.dwplayturncount) : message.dwplayturncount;
                else
                    object.dwplayturncount = options.longs === String ? $util.Long.prototype.toString.call(message.dwplayturncount) : options.longs === Number ? new $util.LongBits(message.dwplayturncount.low >>> 0, message.dwplayturncount.high >>> 0).toNumber(true) : message.dwplayturncount;
            if (message.dwplaytimelimit != null && message.hasOwnProperty("dwplaytimelimit"))
                if (typeof message.dwplaytimelimit === "number")
                    object.dwplaytimelimit = options.longs === String ? String(message.dwplaytimelimit) : message.dwplaytimelimit;
                else
                    object.dwplaytimelimit = options.longs === String ? $util.Long.prototype.toString.call(message.dwplaytimelimit) : options.longs === Number ? new $util.LongBits(message.dwplaytimelimit.low >>> 0, message.dwplaytimelimit.high >>> 0).toNumber(true) : message.dwplaytimelimit;
            if (message.dwtimeafterbegincount != null && message.hasOwnProperty("dwtimeafterbegincount"))
                if (typeof message.dwtimeafterbegincount === "number")
                    object.dwtimeafterbegincount = options.longs === String ? String(message.dwtimeafterbegincount) : message.dwtimeafterbegincount;
                else
                    object.dwtimeafterbegincount = options.longs === String ? $util.Long.prototype.toString.call(message.dwtimeafterbegincount) : options.longs === Number ? new $util.LongBits(message.dwtimeafterbegincount.low >>> 0, message.dwtimeafterbegincount.high >>> 0).toNumber(true) : message.dwtimeafterbegincount;
            if (message.dwtimeofflinecount != null && message.hasOwnProperty("dwtimeofflinecount"))
                if (typeof message.dwtimeofflinecount === "number")
                    object.dwtimeofflinecount = options.longs === String ? String(message.dwtimeofflinecount) : message.dwtimeofflinecount;
                else
                    object.dwtimeofflinecount = options.longs === String ? $util.Long.prototype.toString.call(message.dwtimeofflinecount) : options.longs === Number ? new $util.LongBits(message.dwtimeofflinecount.low >>> 0, message.dwtimeofflinecount.high >>> 0).toNumber(true) : message.dwtimeofflinecount;
            if (message.dwtimenotbegingame != null && message.hasOwnProperty("dwtimenotbegingame"))
                if (typeof message.dwtimenotbegingame === "number")
                    object.dwtimenotbegingame = options.longs === String ? String(message.dwtimenotbegingame) : message.dwtimenotbegingame;
                else
                    object.dwtimenotbegingame = options.longs === String ? $util.Long.prototype.toString.call(message.dwtimenotbegingame) : options.longs === Number ? new $util.LongBits(message.dwtimenotbegingame.low >>> 0, message.dwtimenotbegingame.high >>> 0).toNumber(true) : message.dwtimenotbegingame;
            if (message.dwtimeaftercreateroom != null && message.hasOwnProperty("dwtimeaftercreateroom"))
                if (typeof message.dwtimeaftercreateroom === "number")
                    object.dwtimeaftercreateroom = options.longs === String ? String(message.dwtimeaftercreateroom) : message.dwtimeaftercreateroom;
                else
                    object.dwtimeaftercreateroom = options.longs === String ? $util.Long.prototype.toString.call(message.dwtimeaftercreateroom) : options.longs === Number ? new $util.LongBits(message.dwtimeaftercreateroom.low >>> 0, message.dwtimeaftercreateroom.high >>> 0).toNumber(true) : message.dwtimeaftercreateroom;
            if (message.wbeginfreetime != null && message.hasOwnProperty("wbeginfreetime"))
                object.wbeginfreetime = message.wbeginfreetime;
            if (message.wendfreetime != null && message.hasOwnProperty("wendfreetime"))
                object.wendfreetime = message.wendfreetime;
            return object;
        };

        /**
         * Converts this tagPersonalRoomOption_s2c to JSON.
         * @function toJSON
         * @memberof GamePmd.tagPersonalRoomOption_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagPersonalRoomOption_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagPersonalRoomOption_s2c;
    })();

    return GamePmd;
})();

$root.GrowLevelPmd = (function() {

    /**
     * Namespace GrowLevelPmd.
     * @exports GrowLevelPmd
     * @namespace
     */
    var GrowLevelPmd = {};

    GrowLevelPmd.tagGrowLevelConfig = (function() {

        /**
         * Properties of a tagGrowLevelConfig.
         * @memberof GrowLevelPmd
         * @interface ItagGrowLevelConfig
         * @property {NullPmd.Iresponse|null} [respcmd] tagGrowLevelConfig respcmd
         * @property {number|null} [wlevelid] tagGrowLevelConfig wlevelid
         * @property {number|Long|null} [dwexperience] tagGrowLevelConfig dwexperience
         */

        /**
         * Constructs a new tagGrowLevelConfig.
         * @memberof GrowLevelPmd
         * @classdesc Represents a tagGrowLevelConfig.
         * @implements ItagGrowLevelConfig
         * @constructor
         * @param {GrowLevelPmd.ItagGrowLevelConfig=} [properties] Properties to set
         */
        function tagGrowLevelConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagGrowLevelConfig respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof GrowLevelPmd.tagGrowLevelConfig
         * @instance
         */
        tagGrowLevelConfig.prototype.respcmd = null;

        /**
         * tagGrowLevelConfig wlevelid.
         * @member {number} wlevelid
         * @memberof GrowLevelPmd.tagGrowLevelConfig
         * @instance
         */
        tagGrowLevelConfig.prototype.wlevelid = 0;

        /**
         * tagGrowLevelConfig dwexperience.
         * @member {number|Long} dwexperience
         * @memberof GrowLevelPmd.tagGrowLevelConfig
         * @instance
         */
        tagGrowLevelConfig.prototype.dwexperience = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new tagGrowLevelConfig instance using the specified properties.
         * @function create
         * @memberof GrowLevelPmd.tagGrowLevelConfig
         * @static
         * @param {GrowLevelPmd.ItagGrowLevelConfig=} [properties] Properties to set
         * @returns {GrowLevelPmd.tagGrowLevelConfig} tagGrowLevelConfig instance
         */
        tagGrowLevelConfig.create = function create(properties) {
            return new tagGrowLevelConfig(properties);
        };

        /**
         * Encodes the specified tagGrowLevelConfig message. Does not implicitly {@link GrowLevelPmd.tagGrowLevelConfig.verify|verify} messages.
         * @function encode
         * @memberof GrowLevelPmd.tagGrowLevelConfig
         * @static
         * @param {GrowLevelPmd.ItagGrowLevelConfig} message tagGrowLevelConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGrowLevelConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.wlevelid != null && message.hasOwnProperty("wlevelid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.wlevelid);
            if (message.dwexperience != null && message.hasOwnProperty("dwexperience"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.dwexperience);
            return writer;
        };

        /**
         * Encodes the specified tagGrowLevelConfig message, length delimited. Does not implicitly {@link GrowLevelPmd.tagGrowLevelConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GrowLevelPmd.tagGrowLevelConfig
         * @static
         * @param {GrowLevelPmd.ItagGrowLevelConfig} message tagGrowLevelConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGrowLevelConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagGrowLevelConfig message from the specified reader or buffer.
         * @function decode
         * @memberof GrowLevelPmd.tagGrowLevelConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GrowLevelPmd.tagGrowLevelConfig} tagGrowLevelConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGrowLevelConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GrowLevelPmd.tagGrowLevelConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.wlevelid = reader.int32();
                    break;
                case 3:
                    message.dwexperience = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagGrowLevelConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GrowLevelPmd.tagGrowLevelConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GrowLevelPmd.tagGrowLevelConfig} tagGrowLevelConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGrowLevelConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagGrowLevelConfig message.
         * @function verify
         * @memberof GrowLevelPmd.tagGrowLevelConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagGrowLevelConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.wlevelid != null && message.hasOwnProperty("wlevelid"))
                if (!$util.isInteger(message.wlevelid))
                    return "wlevelid: integer expected";
            if (message.dwexperience != null && message.hasOwnProperty("dwexperience"))
                if (!$util.isInteger(message.dwexperience) && !(message.dwexperience && $util.isInteger(message.dwexperience.low) && $util.isInteger(message.dwexperience.high)))
                    return "dwexperience: integer|Long expected";
            return null;
        };

        /**
         * Creates a tagGrowLevelConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GrowLevelPmd.tagGrowLevelConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GrowLevelPmd.tagGrowLevelConfig} tagGrowLevelConfig
         */
        tagGrowLevelConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.GrowLevelPmd.tagGrowLevelConfig)
                return object;
            var message = new $root.GrowLevelPmd.tagGrowLevelConfig();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".GrowLevelPmd.tagGrowLevelConfig.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.wlevelid != null)
                message.wlevelid = object.wlevelid | 0;
            if (object.dwexperience != null)
                if ($util.Long)
                    (message.dwexperience = $util.Long.fromValue(object.dwexperience)).unsigned = true;
                else if (typeof object.dwexperience === "string")
                    message.dwexperience = parseInt(object.dwexperience, 10);
                else if (typeof object.dwexperience === "number")
                    message.dwexperience = object.dwexperience;
                else if (typeof object.dwexperience === "object")
                    message.dwexperience = new $util.LongBits(object.dwexperience.low >>> 0, object.dwexperience.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a tagGrowLevelConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GrowLevelPmd.tagGrowLevelConfig
         * @static
         * @param {GrowLevelPmd.tagGrowLevelConfig} message tagGrowLevelConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagGrowLevelConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.respcmd = null;
                object.wlevelid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwexperience = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwexperience = options.longs === String ? "0" : 0;
            }
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.wlevelid != null && message.hasOwnProperty("wlevelid"))
                object.wlevelid = message.wlevelid;
            if (message.dwexperience != null && message.hasOwnProperty("dwexperience"))
                if (typeof message.dwexperience === "number")
                    object.dwexperience = options.longs === String ? String(message.dwexperience) : message.dwexperience;
                else
                    object.dwexperience = options.longs === String ? $util.Long.prototype.toString.call(message.dwexperience) : options.longs === Number ? new $util.LongBits(message.dwexperience.low >>> 0, message.dwexperience.high >>> 0).toNumber(true) : message.dwexperience;
            return object;
        };

        /**
         * Converts this tagGrowLevelConfig to JSON.
         * @function toJSON
         * @memberof GrowLevelPmd.tagGrowLevelConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagGrowLevelConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagGrowLevelConfig;
    })();

    GrowLevelPmd.tagGrowLevelConfig_s2c = (function() {

        /**
         * Properties of a tagGrowLevelConfig_s2c.
         * @memberof GrowLevelPmd
         * @interface ItagGrowLevelConfig_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] tagGrowLevelConfig_s2c respcmd
         * @property {number|null} [wlevelcount] tagGrowLevelConfig_s2c wlevelcount
         * @property {Array.<GrowLevelPmd.ItagGrowLevelConfig>|null} [growlevelitem] tagGrowLevelConfig_s2c growlevelitem
         */

        /**
         * Constructs a new tagGrowLevelConfig_s2c.
         * @memberof GrowLevelPmd
         * @classdesc Represents a tagGrowLevelConfig_s2c.
         * @implements ItagGrowLevelConfig_s2c
         * @constructor
         * @param {GrowLevelPmd.ItagGrowLevelConfig_s2c=} [properties] Properties to set
         */
        function tagGrowLevelConfig_s2c(properties) {
            this.growlevelitem = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagGrowLevelConfig_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof GrowLevelPmd.tagGrowLevelConfig_s2c
         * @instance
         */
        tagGrowLevelConfig_s2c.prototype.respcmd = null;

        /**
         * tagGrowLevelConfig_s2c wlevelcount.
         * @member {number} wlevelcount
         * @memberof GrowLevelPmd.tagGrowLevelConfig_s2c
         * @instance
         */
        tagGrowLevelConfig_s2c.prototype.wlevelcount = 0;

        /**
         * tagGrowLevelConfig_s2c growlevelitem.
         * @member {Array.<GrowLevelPmd.ItagGrowLevelConfig>} growlevelitem
         * @memberof GrowLevelPmd.tagGrowLevelConfig_s2c
         * @instance
         */
        tagGrowLevelConfig_s2c.prototype.growlevelitem = $util.emptyArray;

        /**
         * Creates a new tagGrowLevelConfig_s2c instance using the specified properties.
         * @function create
         * @memberof GrowLevelPmd.tagGrowLevelConfig_s2c
         * @static
         * @param {GrowLevelPmd.ItagGrowLevelConfig_s2c=} [properties] Properties to set
         * @returns {GrowLevelPmd.tagGrowLevelConfig_s2c} tagGrowLevelConfig_s2c instance
         */
        tagGrowLevelConfig_s2c.create = function create(properties) {
            return new tagGrowLevelConfig_s2c(properties);
        };

        /**
         * Encodes the specified tagGrowLevelConfig_s2c message. Does not implicitly {@link GrowLevelPmd.tagGrowLevelConfig_s2c.verify|verify} messages.
         * @function encode
         * @memberof GrowLevelPmd.tagGrowLevelConfig_s2c
         * @static
         * @param {GrowLevelPmd.ItagGrowLevelConfig_s2c} message tagGrowLevelConfig_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGrowLevelConfig_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.wlevelcount != null && message.hasOwnProperty("wlevelcount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.wlevelcount);
            if (message.growlevelitem != null && message.growlevelitem.length)
                for (var i = 0; i < message.growlevelitem.length; ++i)
                    $root.GrowLevelPmd.tagGrowLevelConfig.encode(message.growlevelitem[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified tagGrowLevelConfig_s2c message, length delimited. Does not implicitly {@link GrowLevelPmd.tagGrowLevelConfig_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GrowLevelPmd.tagGrowLevelConfig_s2c
         * @static
         * @param {GrowLevelPmd.ItagGrowLevelConfig_s2c} message tagGrowLevelConfig_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGrowLevelConfig_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagGrowLevelConfig_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof GrowLevelPmd.tagGrowLevelConfig_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GrowLevelPmd.tagGrowLevelConfig_s2c} tagGrowLevelConfig_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGrowLevelConfig_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GrowLevelPmd.tagGrowLevelConfig_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.wlevelcount = reader.int32();
                    break;
                case 3:
                    if (!(message.growlevelitem && message.growlevelitem.length))
                        message.growlevelitem = [];
                    message.growlevelitem.push($root.GrowLevelPmd.tagGrowLevelConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagGrowLevelConfig_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GrowLevelPmd.tagGrowLevelConfig_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GrowLevelPmd.tagGrowLevelConfig_s2c} tagGrowLevelConfig_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGrowLevelConfig_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagGrowLevelConfig_s2c message.
         * @function verify
         * @memberof GrowLevelPmd.tagGrowLevelConfig_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagGrowLevelConfig_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.wlevelcount != null && message.hasOwnProperty("wlevelcount"))
                if (!$util.isInteger(message.wlevelcount))
                    return "wlevelcount: integer expected";
            if (message.growlevelitem != null && message.hasOwnProperty("growlevelitem")) {
                if (!Array.isArray(message.growlevelitem))
                    return "growlevelitem: array expected";
                for (var i = 0; i < message.growlevelitem.length; ++i) {
                    var error = $root.GrowLevelPmd.tagGrowLevelConfig.verify(message.growlevelitem[i]);
                    if (error)
                        return "growlevelitem." + error;
                }
            }
            return null;
        };

        /**
         * Creates a tagGrowLevelConfig_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GrowLevelPmd.tagGrowLevelConfig_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GrowLevelPmd.tagGrowLevelConfig_s2c} tagGrowLevelConfig_s2c
         */
        tagGrowLevelConfig_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.GrowLevelPmd.tagGrowLevelConfig_s2c)
                return object;
            var message = new $root.GrowLevelPmd.tagGrowLevelConfig_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".GrowLevelPmd.tagGrowLevelConfig_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.wlevelcount != null)
                message.wlevelcount = object.wlevelcount | 0;
            if (object.growlevelitem) {
                if (!Array.isArray(object.growlevelitem))
                    throw TypeError(".GrowLevelPmd.tagGrowLevelConfig_s2c.growlevelitem: array expected");
                message.growlevelitem = [];
                for (var i = 0; i < object.growlevelitem.length; ++i) {
                    if (typeof object.growlevelitem[i] !== "object")
                        throw TypeError(".GrowLevelPmd.tagGrowLevelConfig_s2c.growlevelitem: object expected");
                    message.growlevelitem[i] = $root.GrowLevelPmd.tagGrowLevelConfig.fromObject(object.growlevelitem[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a tagGrowLevelConfig_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GrowLevelPmd.tagGrowLevelConfig_s2c
         * @static
         * @param {GrowLevelPmd.tagGrowLevelConfig_s2c} message tagGrowLevelConfig_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagGrowLevelConfig_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.growlevelitem = [];
            if (options.defaults) {
                object.respcmd = null;
                object.wlevelcount = 0;
            }
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.wlevelcount != null && message.hasOwnProperty("wlevelcount"))
                object.wlevelcount = message.wlevelcount;
            if (message.growlevelitem && message.growlevelitem.length) {
                object.growlevelitem = [];
                for (var j = 0; j < message.growlevelitem.length; ++j)
                    object.growlevelitem[j] = $root.GrowLevelPmd.tagGrowLevelConfig.toObject(message.growlevelitem[j], options);
            }
            return object;
        };

        /**
         * Converts this tagGrowLevelConfig_s2c to JSON.
         * @function toJSON
         * @memberof GrowLevelPmd.tagGrowLevelConfig_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagGrowLevelConfig_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagGrowLevelConfig_s2c;
    })();

    return GrowLevelPmd;
})();

$root.LoginPmd = (function() {

    /**
     * Namespace LoginPmd.
     * @exports LoginPmd
     * @namespace
     */
    var LoginPmd = {};

    LoginPmd.loginbyid_c2s = (function() {

        /**
         * Properties of a loginbyid_c2s.
         * @memberof LoginPmd
         * @interface Iloginbyid_c2s
         * @property {NullPmd.Irequest|null} [reqcmd] loginbyid_c2s reqcmd
         * @property {number|Long|null} [dwplazaversion] loginbyid_c2s dwplazaversion
         * @property {string|null} [szmachineid] loginbyid_c2s szmachineid
         * @property {number|Long|null} [dwgameid] loginbyid_c2s dwgameid
         * @property {string|null} [szpassword] loginbyid_c2s szpassword
         * @property {number|null} [cbvalidateflags] loginbyid_c2s cbvalidateflags
         */

        /**
         * Constructs a new loginbyid_c2s.
         * @memberof LoginPmd
         * @classdesc Represents a loginbyid_c2s.
         * @implements Iloginbyid_c2s
         * @constructor
         * @param {LoginPmd.Iloginbyid_c2s=} [properties] Properties to set
         */
        function loginbyid_c2s(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * loginbyid_c2s reqcmd.
         * @member {NullPmd.Irequest|null|undefined} reqcmd
         * @memberof LoginPmd.loginbyid_c2s
         * @instance
         */
        loginbyid_c2s.prototype.reqcmd = null;

        /**
         * loginbyid_c2s dwplazaversion.
         * @member {number|Long} dwplazaversion
         * @memberof LoginPmd.loginbyid_c2s
         * @instance
         */
        loginbyid_c2s.prototype.dwplazaversion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * loginbyid_c2s szmachineid.
         * @member {string} szmachineid
         * @memberof LoginPmd.loginbyid_c2s
         * @instance
         */
        loginbyid_c2s.prototype.szmachineid = "";

        /**
         * loginbyid_c2s dwgameid.
         * @member {number|Long} dwgameid
         * @memberof LoginPmd.loginbyid_c2s
         * @instance
         */
        loginbyid_c2s.prototype.dwgameid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * loginbyid_c2s szpassword.
         * @member {string} szpassword
         * @memberof LoginPmd.loginbyid_c2s
         * @instance
         */
        loginbyid_c2s.prototype.szpassword = "";

        /**
         * loginbyid_c2s cbvalidateflags.
         * @member {number} cbvalidateflags
         * @memberof LoginPmd.loginbyid_c2s
         * @instance
         */
        loginbyid_c2s.prototype.cbvalidateflags = 0;

        /**
         * Creates a new loginbyid_c2s instance using the specified properties.
         * @function create
         * @memberof LoginPmd.loginbyid_c2s
         * @static
         * @param {LoginPmd.Iloginbyid_c2s=} [properties] Properties to set
         * @returns {LoginPmd.loginbyid_c2s} loginbyid_c2s instance
         */
        loginbyid_c2s.create = function create(properties) {
            return new loginbyid_c2s(properties);
        };

        /**
         * Encodes the specified loginbyid_c2s message. Does not implicitly {@link LoginPmd.loginbyid_c2s.verify|verify} messages.
         * @function encode
         * @memberof LoginPmd.loginbyid_c2s
         * @static
         * @param {LoginPmd.Iloginbyid_c2s} message loginbyid_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginbyid_c2s.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd"))
                $root.NullPmd.request.encode(message.reqcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.dwplazaversion);
            if (message.szmachineid != null && message.hasOwnProperty("szmachineid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.szmachineid);
            if (message.dwgameid != null && message.hasOwnProperty("dwgameid"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.dwgameid);
            if (message.szpassword != null && message.hasOwnProperty("szpassword"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.szpassword);
            if (message.cbvalidateflags != null && message.hasOwnProperty("cbvalidateflags"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cbvalidateflags);
            return writer;
        };

        /**
         * Encodes the specified loginbyid_c2s message, length delimited. Does not implicitly {@link LoginPmd.loginbyid_c2s.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginPmd.loginbyid_c2s
         * @static
         * @param {LoginPmd.Iloginbyid_c2s} message loginbyid_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginbyid_c2s.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a loginbyid_c2s message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPmd.loginbyid_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPmd.loginbyid_c2s} loginbyid_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginbyid_c2s.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPmd.loginbyid_c2s();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqcmd = $root.NullPmd.request.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.dwplazaversion = reader.uint64();
                    break;
                case 3:
                    message.szmachineid = reader.string();
                    break;
                case 4:
                    message.dwgameid = reader.uint64();
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
         * @memberof LoginPmd.loginbyid_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginPmd.loginbyid_c2s} loginbyid_c2s
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
         * @memberof LoginPmd.loginbyid_c2s
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        loginbyid_c2s.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd")) {
                var error = $root.NullPmd.request.verify(message.reqcmd);
                if (error)
                    return "reqcmd." + error;
            }
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                if (!$util.isInteger(message.dwplazaversion) && !(message.dwplazaversion && $util.isInteger(message.dwplazaversion.low) && $util.isInteger(message.dwplazaversion.high)))
                    return "dwplazaversion: integer|Long expected";
            if (message.szmachineid != null && message.hasOwnProperty("szmachineid"))
                if (!$util.isString(message.szmachineid))
                    return "szmachineid: string expected";
            if (message.dwgameid != null && message.hasOwnProperty("dwgameid"))
                if (!$util.isInteger(message.dwgameid) && !(message.dwgameid && $util.isInteger(message.dwgameid.low) && $util.isInteger(message.dwgameid.high)))
                    return "dwgameid: integer|Long expected";
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
         * @memberof LoginPmd.loginbyid_c2s
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginPmd.loginbyid_c2s} loginbyid_c2s
         */
        loginbyid_c2s.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginPmd.loginbyid_c2s)
                return object;
            var message = new $root.LoginPmd.loginbyid_c2s();
            if (object.reqcmd != null) {
                if (typeof object.reqcmd !== "object")
                    throw TypeError(".LoginPmd.loginbyid_c2s.reqcmd: object expected");
                message.reqcmd = $root.NullPmd.request.fromObject(object.reqcmd);
            }
            if (object.dwplazaversion != null)
                if ($util.Long)
                    (message.dwplazaversion = $util.Long.fromValue(object.dwplazaversion)).unsigned = true;
                else if (typeof object.dwplazaversion === "string")
                    message.dwplazaversion = parseInt(object.dwplazaversion, 10);
                else if (typeof object.dwplazaversion === "number")
                    message.dwplazaversion = object.dwplazaversion;
                else if (typeof object.dwplazaversion === "object")
                    message.dwplazaversion = new $util.LongBits(object.dwplazaversion.low >>> 0, object.dwplazaversion.high >>> 0).toNumber(true);
            if (object.szmachineid != null)
                message.szmachineid = String(object.szmachineid);
            if (object.dwgameid != null)
                if ($util.Long)
                    (message.dwgameid = $util.Long.fromValue(object.dwgameid)).unsigned = true;
                else if (typeof object.dwgameid === "string")
                    message.dwgameid = parseInt(object.dwgameid, 10);
                else if (typeof object.dwgameid === "number")
                    message.dwgameid = object.dwgameid;
                else if (typeof object.dwgameid === "object")
                    message.dwgameid = new $util.LongBits(object.dwgameid.low >>> 0, object.dwgameid.high >>> 0).toNumber(true);
            if (object.szpassword != null)
                message.szpassword = String(object.szpassword);
            if (object.cbvalidateflags != null)
                message.cbvalidateflags = object.cbvalidateflags | 0;
            return message;
        };

        /**
         * Creates a plain object from a loginbyid_c2s message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginPmd.loginbyid_c2s
         * @static
         * @param {LoginPmd.loginbyid_c2s} message loginbyid_c2s
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        loginbyid_c2s.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reqcmd = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwplazaversion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwplazaversion = options.longs === String ? "0" : 0;
                object.szmachineid = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwgameid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwgameid = options.longs === String ? "0" : 0;
                object.szpassword = "";
                object.cbvalidateflags = 0;
            }
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd"))
                object.reqcmd = $root.NullPmd.request.toObject(message.reqcmd, options);
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                if (typeof message.dwplazaversion === "number")
                    object.dwplazaversion = options.longs === String ? String(message.dwplazaversion) : message.dwplazaversion;
                else
                    object.dwplazaversion = options.longs === String ? $util.Long.prototype.toString.call(message.dwplazaversion) : options.longs === Number ? new $util.LongBits(message.dwplazaversion.low >>> 0, message.dwplazaversion.high >>> 0).toNumber(true) : message.dwplazaversion;
            if (message.szmachineid != null && message.hasOwnProperty("szmachineid"))
                object.szmachineid = message.szmachineid;
            if (message.dwgameid != null && message.hasOwnProperty("dwgameid"))
                if (typeof message.dwgameid === "number")
                    object.dwgameid = options.longs === String ? String(message.dwgameid) : message.dwgameid;
                else
                    object.dwgameid = options.longs === String ? $util.Long.prototype.toString.call(message.dwgameid) : options.longs === Number ? new $util.LongBits(message.dwgameid.low >>> 0, message.dwgameid.high >>> 0).toNumber(true) : message.dwgameid;
            if (message.szpassword != null && message.hasOwnProperty("szpassword"))
                object.szpassword = message.szpassword;
            if (message.cbvalidateflags != null && message.hasOwnProperty("cbvalidateflags"))
                object.cbvalidateflags = message.cbvalidateflags;
            return object;
        };

        /**
         * Converts this loginbyid_c2s to JSON.
         * @function toJSON
         * @memberof LoginPmd.loginbyid_c2s
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        loginbyid_c2s.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return loginbyid_c2s;
    })();

    LoginPmd.loginbyaccounts_c2s = (function() {

        /**
         * Properties of a loginbyaccounts_c2s.
         * @memberof LoginPmd
         * @interface Iloginbyaccounts_c2s
         * @property {NullPmd.Irequest|null} [reqcmd] loginbyaccounts_c2s reqcmd
         * @property {number|Long|null} [dwplazaversion] loginbyaccounts_c2s dwplazaversion
         * @property {string|null} [szmachineid] loginbyaccounts_c2s szmachineid
         * @property {string|null} [szpassword] loginbyaccounts_c2s szpassword
         * @property {string|null} [szaccounts] loginbyaccounts_c2s szaccounts
         * @property {string|null} [szpassportid] loginbyaccounts_c2s szpassportid
         * @property {number|null} [cbvalidateflags] loginbyaccounts_c2s cbvalidateflags
         */

        /**
         * Constructs a new loginbyaccounts_c2s.
         * @memberof LoginPmd
         * @classdesc Represents a loginbyaccounts_c2s.
         * @implements Iloginbyaccounts_c2s
         * @constructor
         * @param {LoginPmd.Iloginbyaccounts_c2s=} [properties] Properties to set
         */
        function loginbyaccounts_c2s(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * loginbyaccounts_c2s reqcmd.
         * @member {NullPmd.Irequest|null|undefined} reqcmd
         * @memberof LoginPmd.loginbyaccounts_c2s
         * @instance
         */
        loginbyaccounts_c2s.prototype.reqcmd = null;

        /**
         * loginbyaccounts_c2s dwplazaversion.
         * @member {number|Long} dwplazaversion
         * @memberof LoginPmd.loginbyaccounts_c2s
         * @instance
         */
        loginbyaccounts_c2s.prototype.dwplazaversion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * loginbyaccounts_c2s szmachineid.
         * @member {string} szmachineid
         * @memberof LoginPmd.loginbyaccounts_c2s
         * @instance
         */
        loginbyaccounts_c2s.prototype.szmachineid = "";

        /**
         * loginbyaccounts_c2s szpassword.
         * @member {string} szpassword
         * @memberof LoginPmd.loginbyaccounts_c2s
         * @instance
         */
        loginbyaccounts_c2s.prototype.szpassword = "";

        /**
         * loginbyaccounts_c2s szaccounts.
         * @member {string} szaccounts
         * @memberof LoginPmd.loginbyaccounts_c2s
         * @instance
         */
        loginbyaccounts_c2s.prototype.szaccounts = "";

        /**
         * loginbyaccounts_c2s szpassportid.
         * @member {string} szpassportid
         * @memberof LoginPmd.loginbyaccounts_c2s
         * @instance
         */
        loginbyaccounts_c2s.prototype.szpassportid = "";

        /**
         * loginbyaccounts_c2s cbvalidateflags.
         * @member {number} cbvalidateflags
         * @memberof LoginPmd.loginbyaccounts_c2s
         * @instance
         */
        loginbyaccounts_c2s.prototype.cbvalidateflags = 0;

        /**
         * Creates a new loginbyaccounts_c2s instance using the specified properties.
         * @function create
         * @memberof LoginPmd.loginbyaccounts_c2s
         * @static
         * @param {LoginPmd.Iloginbyaccounts_c2s=} [properties] Properties to set
         * @returns {LoginPmd.loginbyaccounts_c2s} loginbyaccounts_c2s instance
         */
        loginbyaccounts_c2s.create = function create(properties) {
            return new loginbyaccounts_c2s(properties);
        };

        /**
         * Encodes the specified loginbyaccounts_c2s message. Does not implicitly {@link LoginPmd.loginbyaccounts_c2s.verify|verify} messages.
         * @function encode
         * @memberof LoginPmd.loginbyaccounts_c2s
         * @static
         * @param {LoginPmd.Iloginbyaccounts_c2s} message loginbyaccounts_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginbyaccounts_c2s.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd"))
                $root.NullPmd.request.encode(message.reqcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.dwplazaversion);
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
         * Encodes the specified loginbyaccounts_c2s message, length delimited. Does not implicitly {@link LoginPmd.loginbyaccounts_c2s.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginPmd.loginbyaccounts_c2s
         * @static
         * @param {LoginPmd.Iloginbyaccounts_c2s} message loginbyaccounts_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginbyaccounts_c2s.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a loginbyaccounts_c2s message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPmd.loginbyaccounts_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPmd.loginbyaccounts_c2s} loginbyaccounts_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginbyaccounts_c2s.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPmd.loginbyaccounts_c2s();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqcmd = $root.NullPmd.request.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.dwplazaversion = reader.uint64();
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
         * @memberof LoginPmd.loginbyaccounts_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginPmd.loginbyaccounts_c2s} loginbyaccounts_c2s
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
         * @memberof LoginPmd.loginbyaccounts_c2s
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        loginbyaccounts_c2s.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd")) {
                var error = $root.NullPmd.request.verify(message.reqcmd);
                if (error)
                    return "reqcmd." + error;
            }
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                if (!$util.isInteger(message.dwplazaversion) && !(message.dwplazaversion && $util.isInteger(message.dwplazaversion.low) && $util.isInteger(message.dwplazaversion.high)))
                    return "dwplazaversion: integer|Long expected";
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
         * @memberof LoginPmd.loginbyaccounts_c2s
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginPmd.loginbyaccounts_c2s} loginbyaccounts_c2s
         */
        loginbyaccounts_c2s.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginPmd.loginbyaccounts_c2s)
                return object;
            var message = new $root.LoginPmd.loginbyaccounts_c2s();
            if (object.reqcmd != null) {
                if (typeof object.reqcmd !== "object")
                    throw TypeError(".LoginPmd.loginbyaccounts_c2s.reqcmd: object expected");
                message.reqcmd = $root.NullPmd.request.fromObject(object.reqcmd);
            }
            if (object.dwplazaversion != null)
                if ($util.Long)
                    (message.dwplazaversion = $util.Long.fromValue(object.dwplazaversion)).unsigned = true;
                else if (typeof object.dwplazaversion === "string")
                    message.dwplazaversion = parseInt(object.dwplazaversion, 10);
                else if (typeof object.dwplazaversion === "number")
                    message.dwplazaversion = object.dwplazaversion;
                else if (typeof object.dwplazaversion === "object")
                    message.dwplazaversion = new $util.LongBits(object.dwplazaversion.low >>> 0, object.dwplazaversion.high >>> 0).toNumber(true);
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
         * @memberof LoginPmd.loginbyaccounts_c2s
         * @static
         * @param {LoginPmd.loginbyaccounts_c2s} message loginbyaccounts_c2s
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        loginbyaccounts_c2s.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reqcmd = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwplazaversion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwplazaversion = options.longs === String ? "0" : 0;
                object.szmachineid = "";
                object.szpassword = "";
                object.szaccounts = "";
                object.szpassportid = "";
                object.cbvalidateflags = 0;
            }
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd"))
                object.reqcmd = $root.NullPmd.request.toObject(message.reqcmd, options);
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                if (typeof message.dwplazaversion === "number")
                    object.dwplazaversion = options.longs === String ? String(message.dwplazaversion) : message.dwplazaversion;
                else
                    object.dwplazaversion = options.longs === String ? $util.Long.prototype.toString.call(message.dwplazaversion) : options.longs === Number ? new $util.LongBits(message.dwplazaversion.low >>> 0, message.dwplazaversion.high >>> 0).toNumber(true) : message.dwplazaversion;
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
         * @memberof LoginPmd.loginbyaccounts_c2s
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        loginbyaccounts_c2s.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return loginbyaccounts_c2s;
    })();

    LoginPmd.logonOtherPlatform_c2s = (function() {

        /**
         * Properties of a logonOtherPlatform_c2s.
         * @memberof LoginPmd
         * @interface IlogonOtherPlatform_c2s
         * @property {NullPmd.Irequest|null} [reqcmd] logonOtherPlatform_c2s reqcmd
         * @property {number|null} [wmoduleid] logonOtherPlatform_c2s wmoduleid
         * @property {number|Long|null} [dwplazaversion] logonOtherPlatform_c2s dwplazaversion
         * @property {number|null} [cbdevicetype] logonOtherPlatform_c2s cbdevicetype
         * @property {number|null} [cbgender] logonOtherPlatform_c2s cbgender
         * @property {number|null} [cbplatformid] logonOtherPlatform_c2s cbplatformid
         * @property {string|null} [szuseruin] logonOtherPlatform_c2s szuseruin
         * @property {string|null} [sznickname] logonOtherPlatform_c2s sznickname
         * @property {string|null} [szcompellation] logonOtherPlatform_c2s szcompellation
         * @property {string|null} [szmachineid] logonOtherPlatform_c2s szmachineid
         * @property {string|null} [szmobilephone] logonOtherPlatform_c2s szmobilephone
         * @property {string|null} [szdevicetoken] logonOtherPlatform_c2s szdevicetoken
         * @property {string|null} [strfaceurl] logonOtherPlatform_c2s strfaceurl
         */

        /**
         * Constructs a new logonOtherPlatform_c2s.
         * @memberof LoginPmd
         * @classdesc Represents a logonOtherPlatform_c2s.
         * @implements IlogonOtherPlatform_c2s
         * @constructor
         * @param {LoginPmd.IlogonOtherPlatform_c2s=} [properties] Properties to set
         */
        function logonOtherPlatform_c2s(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * logonOtherPlatform_c2s reqcmd.
         * @member {NullPmd.Irequest|null|undefined} reqcmd
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @instance
         */
        logonOtherPlatform_c2s.prototype.reqcmd = null;

        /**
         * logonOtherPlatform_c2s wmoduleid.
         * @member {number} wmoduleid
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @instance
         */
        logonOtherPlatform_c2s.prototype.wmoduleid = 0;

        /**
         * logonOtherPlatform_c2s dwplazaversion.
         * @member {number|Long} dwplazaversion
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @instance
         */
        logonOtherPlatform_c2s.prototype.dwplazaversion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * logonOtherPlatform_c2s cbdevicetype.
         * @member {number} cbdevicetype
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @instance
         */
        logonOtherPlatform_c2s.prototype.cbdevicetype = 0;

        /**
         * logonOtherPlatform_c2s cbgender.
         * @member {number} cbgender
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @instance
         */
        logonOtherPlatform_c2s.prototype.cbgender = 0;

        /**
         * logonOtherPlatform_c2s cbplatformid.
         * @member {number} cbplatformid
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @instance
         */
        logonOtherPlatform_c2s.prototype.cbplatformid = 0;

        /**
         * logonOtherPlatform_c2s szuseruin.
         * @member {string} szuseruin
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @instance
         */
        logonOtherPlatform_c2s.prototype.szuseruin = "";

        /**
         * logonOtherPlatform_c2s sznickname.
         * @member {string} sznickname
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @instance
         */
        logonOtherPlatform_c2s.prototype.sznickname = "";

        /**
         * logonOtherPlatform_c2s szcompellation.
         * @member {string} szcompellation
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @instance
         */
        logonOtherPlatform_c2s.prototype.szcompellation = "";

        /**
         * logonOtherPlatform_c2s szmachineid.
         * @member {string} szmachineid
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @instance
         */
        logonOtherPlatform_c2s.prototype.szmachineid = "";

        /**
         * logonOtherPlatform_c2s szmobilephone.
         * @member {string} szmobilephone
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @instance
         */
        logonOtherPlatform_c2s.prototype.szmobilephone = "";

        /**
         * logonOtherPlatform_c2s szdevicetoken.
         * @member {string} szdevicetoken
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @instance
         */
        logonOtherPlatform_c2s.prototype.szdevicetoken = "";

        /**
         * logonOtherPlatform_c2s strfaceurl.
         * @member {string} strfaceurl
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @instance
         */
        logonOtherPlatform_c2s.prototype.strfaceurl = "";

        /**
         * Creates a new logonOtherPlatform_c2s instance using the specified properties.
         * @function create
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @static
         * @param {LoginPmd.IlogonOtherPlatform_c2s=} [properties] Properties to set
         * @returns {LoginPmd.logonOtherPlatform_c2s} logonOtherPlatform_c2s instance
         */
        logonOtherPlatform_c2s.create = function create(properties) {
            return new logonOtherPlatform_c2s(properties);
        };

        /**
         * Encodes the specified logonOtherPlatform_c2s message. Does not implicitly {@link LoginPmd.logonOtherPlatform_c2s.verify|verify} messages.
         * @function encode
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @static
         * @param {LoginPmd.IlogonOtherPlatform_c2s} message logonOtherPlatform_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        logonOtherPlatform_c2s.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd"))
                $root.NullPmd.request.encode(message.reqcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.wmoduleid != null && message.hasOwnProperty("wmoduleid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.wmoduleid);
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.dwplazaversion);
            if (message.cbdevicetype != null && message.hasOwnProperty("cbdevicetype"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cbdevicetype);
            if (message.cbgender != null && message.hasOwnProperty("cbgender"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cbgender);
            if (message.cbplatformid != null && message.hasOwnProperty("cbplatformid"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cbplatformid);
            if (message.szuseruin != null && message.hasOwnProperty("szuseruin"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.szuseruin);
            if (message.sznickname != null && message.hasOwnProperty("sznickname"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.sznickname);
            if (message.szcompellation != null && message.hasOwnProperty("szcompellation"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.szcompellation);
            if (message.szmachineid != null && message.hasOwnProperty("szmachineid"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.szmachineid);
            if (message.szmobilephone != null && message.hasOwnProperty("szmobilephone"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.szmobilephone);
            if (message.szdevicetoken != null && message.hasOwnProperty("szdevicetoken"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.szdevicetoken);
            if (message.strfaceurl != null && message.hasOwnProperty("strfaceurl"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.strfaceurl);
            return writer;
        };

        /**
         * Encodes the specified logonOtherPlatform_c2s message, length delimited. Does not implicitly {@link LoginPmd.logonOtherPlatform_c2s.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @static
         * @param {LoginPmd.IlogonOtherPlatform_c2s} message logonOtherPlatform_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        logonOtherPlatform_c2s.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a logonOtherPlatform_c2s message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPmd.logonOtherPlatform_c2s} logonOtherPlatform_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        logonOtherPlatform_c2s.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPmd.logonOtherPlatform_c2s();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqcmd = $root.NullPmd.request.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.wmoduleid = reader.int32();
                    break;
                case 3:
                    message.dwplazaversion = reader.uint64();
                    break;
                case 4:
                    message.cbdevicetype = reader.int32();
                    break;
                case 5:
                    message.cbgender = reader.int32();
                    break;
                case 6:
                    message.cbplatformid = reader.int32();
                    break;
                case 7:
                    message.szuseruin = reader.string();
                    break;
                case 8:
                    message.sznickname = reader.string();
                    break;
                case 9:
                    message.szcompellation = reader.string();
                    break;
                case 10:
                    message.szmachineid = reader.string();
                    break;
                case 11:
                    message.szmobilephone = reader.string();
                    break;
                case 12:
                    message.szdevicetoken = reader.string();
                    break;
                case 13:
                    message.strfaceurl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a logonOtherPlatform_c2s message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginPmd.logonOtherPlatform_c2s} logonOtherPlatform_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        logonOtherPlatform_c2s.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a logonOtherPlatform_c2s message.
         * @function verify
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        logonOtherPlatform_c2s.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd")) {
                var error = $root.NullPmd.request.verify(message.reqcmd);
                if (error)
                    return "reqcmd." + error;
            }
            if (message.wmoduleid != null && message.hasOwnProperty("wmoduleid"))
                if (!$util.isInteger(message.wmoduleid))
                    return "wmoduleid: integer expected";
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                if (!$util.isInteger(message.dwplazaversion) && !(message.dwplazaversion && $util.isInteger(message.dwplazaversion.low) && $util.isInteger(message.dwplazaversion.high)))
                    return "dwplazaversion: integer|Long expected";
            if (message.cbdevicetype != null && message.hasOwnProperty("cbdevicetype"))
                if (!$util.isInteger(message.cbdevicetype))
                    return "cbdevicetype: integer expected";
            if (message.cbgender != null && message.hasOwnProperty("cbgender"))
                if (!$util.isInteger(message.cbgender))
                    return "cbgender: integer expected";
            if (message.cbplatformid != null && message.hasOwnProperty("cbplatformid"))
                if (!$util.isInteger(message.cbplatformid))
                    return "cbplatformid: integer expected";
            if (message.szuseruin != null && message.hasOwnProperty("szuseruin"))
                if (!$util.isString(message.szuseruin))
                    return "szuseruin: string expected";
            if (message.sznickname != null && message.hasOwnProperty("sznickname"))
                if (!$util.isString(message.sznickname))
                    return "sznickname: string expected";
            if (message.szcompellation != null && message.hasOwnProperty("szcompellation"))
                if (!$util.isString(message.szcompellation))
                    return "szcompellation: string expected";
            if (message.szmachineid != null && message.hasOwnProperty("szmachineid"))
                if (!$util.isString(message.szmachineid))
                    return "szmachineid: string expected";
            if (message.szmobilephone != null && message.hasOwnProperty("szmobilephone"))
                if (!$util.isString(message.szmobilephone))
                    return "szmobilephone: string expected";
            if (message.szdevicetoken != null && message.hasOwnProperty("szdevicetoken"))
                if (!$util.isString(message.szdevicetoken))
                    return "szdevicetoken: string expected";
            if (message.strfaceurl != null && message.hasOwnProperty("strfaceurl"))
                if (!$util.isString(message.strfaceurl))
                    return "strfaceurl: string expected";
            return null;
        };

        /**
         * Creates a logonOtherPlatform_c2s message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginPmd.logonOtherPlatform_c2s} logonOtherPlatform_c2s
         */
        logonOtherPlatform_c2s.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginPmd.logonOtherPlatform_c2s)
                return object;
            var message = new $root.LoginPmd.logonOtherPlatform_c2s();
            if (object.reqcmd != null) {
                if (typeof object.reqcmd !== "object")
                    throw TypeError(".LoginPmd.logonOtherPlatform_c2s.reqcmd: object expected");
                message.reqcmd = $root.NullPmd.request.fromObject(object.reqcmd);
            }
            if (object.wmoduleid != null)
                message.wmoduleid = object.wmoduleid | 0;
            if (object.dwplazaversion != null)
                if ($util.Long)
                    (message.dwplazaversion = $util.Long.fromValue(object.dwplazaversion)).unsigned = true;
                else if (typeof object.dwplazaversion === "string")
                    message.dwplazaversion = parseInt(object.dwplazaversion, 10);
                else if (typeof object.dwplazaversion === "number")
                    message.dwplazaversion = object.dwplazaversion;
                else if (typeof object.dwplazaversion === "object")
                    message.dwplazaversion = new $util.LongBits(object.dwplazaversion.low >>> 0, object.dwplazaversion.high >>> 0).toNumber(true);
            if (object.cbdevicetype != null)
                message.cbdevicetype = object.cbdevicetype | 0;
            if (object.cbgender != null)
                message.cbgender = object.cbgender | 0;
            if (object.cbplatformid != null)
                message.cbplatformid = object.cbplatformid | 0;
            if (object.szuseruin != null)
                message.szuseruin = String(object.szuseruin);
            if (object.sznickname != null)
                message.sznickname = String(object.sznickname);
            if (object.szcompellation != null)
                message.szcompellation = String(object.szcompellation);
            if (object.szmachineid != null)
                message.szmachineid = String(object.szmachineid);
            if (object.szmobilephone != null)
                message.szmobilephone = String(object.szmobilephone);
            if (object.szdevicetoken != null)
                message.szdevicetoken = String(object.szdevicetoken);
            if (object.strfaceurl != null)
                message.strfaceurl = String(object.strfaceurl);
            return message;
        };

        /**
         * Creates a plain object from a logonOtherPlatform_c2s message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @static
         * @param {LoginPmd.logonOtherPlatform_c2s} message logonOtherPlatform_c2s
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        logonOtherPlatform_c2s.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reqcmd = null;
                object.wmoduleid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwplazaversion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwplazaversion = options.longs === String ? "0" : 0;
                object.cbdevicetype = 0;
                object.cbgender = 0;
                object.cbplatformid = 0;
                object.szuseruin = "";
                object.sznickname = "";
                object.szcompellation = "";
                object.szmachineid = "";
                object.szmobilephone = "";
                object.szdevicetoken = "";
                object.strfaceurl = "";
            }
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd"))
                object.reqcmd = $root.NullPmd.request.toObject(message.reqcmd, options);
            if (message.wmoduleid != null && message.hasOwnProperty("wmoduleid"))
                object.wmoduleid = message.wmoduleid;
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                if (typeof message.dwplazaversion === "number")
                    object.dwplazaversion = options.longs === String ? String(message.dwplazaversion) : message.dwplazaversion;
                else
                    object.dwplazaversion = options.longs === String ? $util.Long.prototype.toString.call(message.dwplazaversion) : options.longs === Number ? new $util.LongBits(message.dwplazaversion.low >>> 0, message.dwplazaversion.high >>> 0).toNumber(true) : message.dwplazaversion;
            if (message.cbdevicetype != null && message.hasOwnProperty("cbdevicetype"))
                object.cbdevicetype = message.cbdevicetype;
            if (message.cbgender != null && message.hasOwnProperty("cbgender"))
                object.cbgender = message.cbgender;
            if (message.cbplatformid != null && message.hasOwnProperty("cbplatformid"))
                object.cbplatformid = message.cbplatformid;
            if (message.szuseruin != null && message.hasOwnProperty("szuseruin"))
                object.szuseruin = message.szuseruin;
            if (message.sznickname != null && message.hasOwnProperty("sznickname"))
                object.sznickname = message.sznickname;
            if (message.szcompellation != null && message.hasOwnProperty("szcompellation"))
                object.szcompellation = message.szcompellation;
            if (message.szmachineid != null && message.hasOwnProperty("szmachineid"))
                object.szmachineid = message.szmachineid;
            if (message.szmobilephone != null && message.hasOwnProperty("szmobilephone"))
                object.szmobilephone = message.szmobilephone;
            if (message.szdevicetoken != null && message.hasOwnProperty("szdevicetoken"))
                object.szdevicetoken = message.szdevicetoken;
            if (message.strfaceurl != null && message.hasOwnProperty("strfaceurl"))
                object.strfaceurl = message.strfaceurl;
            return object;
        };

        /**
         * Converts this logonOtherPlatform_c2s to JSON.
         * @function toJSON
         * @memberof LoginPmd.logonOtherPlatform_c2s
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        logonOtherPlatform_c2s.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return logonOtherPlatform_c2s;
    })();

    LoginPmd.loginbyvisitor_c2s = (function() {

        /**
         * Properties of a loginbyvisitor_c2s.
         * @memberof LoginPmd
         * @interface Iloginbyvisitor_c2s
         * @property {NullPmd.Irequest|null} [reqcmd] loginbyvisitor_c2s reqcmd
         * @property {number|Long|null} [dwplazaversion] loginbyvisitor_c2s dwplazaversion
         * @property {string|null} [szmachineid] loginbyvisitor_c2s szmachineid
         * @property {number|null} [cbvalidateflags] loginbyvisitor_c2s cbvalidateflags
         */

        /**
         * Constructs a new loginbyvisitor_c2s.
         * @memberof LoginPmd
         * @classdesc Represents a loginbyvisitor_c2s.
         * @implements Iloginbyvisitor_c2s
         * @constructor
         * @param {LoginPmd.Iloginbyvisitor_c2s=} [properties] Properties to set
         */
        function loginbyvisitor_c2s(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * loginbyvisitor_c2s reqcmd.
         * @member {NullPmd.Irequest|null|undefined} reqcmd
         * @memberof LoginPmd.loginbyvisitor_c2s
         * @instance
         */
        loginbyvisitor_c2s.prototype.reqcmd = null;

        /**
         * loginbyvisitor_c2s dwplazaversion.
         * @member {number|Long} dwplazaversion
         * @memberof LoginPmd.loginbyvisitor_c2s
         * @instance
         */
        loginbyvisitor_c2s.prototype.dwplazaversion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * loginbyvisitor_c2s szmachineid.
         * @member {string} szmachineid
         * @memberof LoginPmd.loginbyvisitor_c2s
         * @instance
         */
        loginbyvisitor_c2s.prototype.szmachineid = "";

        /**
         * loginbyvisitor_c2s cbvalidateflags.
         * @member {number} cbvalidateflags
         * @memberof LoginPmd.loginbyvisitor_c2s
         * @instance
         */
        loginbyvisitor_c2s.prototype.cbvalidateflags = 0;

        /**
         * Creates a new loginbyvisitor_c2s instance using the specified properties.
         * @function create
         * @memberof LoginPmd.loginbyvisitor_c2s
         * @static
         * @param {LoginPmd.Iloginbyvisitor_c2s=} [properties] Properties to set
         * @returns {LoginPmd.loginbyvisitor_c2s} loginbyvisitor_c2s instance
         */
        loginbyvisitor_c2s.create = function create(properties) {
            return new loginbyvisitor_c2s(properties);
        };

        /**
         * Encodes the specified loginbyvisitor_c2s message. Does not implicitly {@link LoginPmd.loginbyvisitor_c2s.verify|verify} messages.
         * @function encode
         * @memberof LoginPmd.loginbyvisitor_c2s
         * @static
         * @param {LoginPmd.Iloginbyvisitor_c2s} message loginbyvisitor_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginbyvisitor_c2s.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd"))
                $root.NullPmd.request.encode(message.reqcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.dwplazaversion);
            if (message.szmachineid != null && message.hasOwnProperty("szmachineid"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.szmachineid);
            if (message.cbvalidateflags != null && message.hasOwnProperty("cbvalidateflags"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cbvalidateflags);
            return writer;
        };

        /**
         * Encodes the specified loginbyvisitor_c2s message, length delimited. Does not implicitly {@link LoginPmd.loginbyvisitor_c2s.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginPmd.loginbyvisitor_c2s
         * @static
         * @param {LoginPmd.Iloginbyvisitor_c2s} message loginbyvisitor_c2s message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginbyvisitor_c2s.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a loginbyvisitor_c2s message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPmd.loginbyvisitor_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPmd.loginbyvisitor_c2s} loginbyvisitor_c2s
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginbyvisitor_c2s.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPmd.loginbyvisitor_c2s();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.reqcmd = $root.NullPmd.request.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.dwplazaversion = reader.uint64();
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
         * @memberof LoginPmd.loginbyvisitor_c2s
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginPmd.loginbyvisitor_c2s} loginbyvisitor_c2s
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
         * @memberof LoginPmd.loginbyvisitor_c2s
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        loginbyvisitor_c2s.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd")) {
                var error = $root.NullPmd.request.verify(message.reqcmd);
                if (error)
                    return "reqcmd." + error;
            }
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                if (!$util.isInteger(message.dwplazaversion) && !(message.dwplazaversion && $util.isInteger(message.dwplazaversion.low) && $util.isInteger(message.dwplazaversion.high)))
                    return "dwplazaversion: integer|Long expected";
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
         * @memberof LoginPmd.loginbyvisitor_c2s
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginPmd.loginbyvisitor_c2s} loginbyvisitor_c2s
         */
        loginbyvisitor_c2s.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginPmd.loginbyvisitor_c2s)
                return object;
            var message = new $root.LoginPmd.loginbyvisitor_c2s();
            if (object.reqcmd != null) {
                if (typeof object.reqcmd !== "object")
                    throw TypeError(".LoginPmd.loginbyvisitor_c2s.reqcmd: object expected");
                message.reqcmd = $root.NullPmd.request.fromObject(object.reqcmd);
            }
            if (object.dwplazaversion != null)
                if ($util.Long)
                    (message.dwplazaversion = $util.Long.fromValue(object.dwplazaversion)).unsigned = true;
                else if (typeof object.dwplazaversion === "string")
                    message.dwplazaversion = parseInt(object.dwplazaversion, 10);
                else if (typeof object.dwplazaversion === "number")
                    message.dwplazaversion = object.dwplazaversion;
                else if (typeof object.dwplazaversion === "object")
                    message.dwplazaversion = new $util.LongBits(object.dwplazaversion.low >>> 0, object.dwplazaversion.high >>> 0).toNumber(true);
            if (object.szmachineid != null)
                message.szmachineid = String(object.szmachineid);
            if (object.cbvalidateflags != null)
                message.cbvalidateflags = object.cbvalidateflags | 0;
            return message;
        };

        /**
         * Creates a plain object from a loginbyvisitor_c2s message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginPmd.loginbyvisitor_c2s
         * @static
         * @param {LoginPmd.loginbyvisitor_c2s} message loginbyvisitor_c2s
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        loginbyvisitor_c2s.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.reqcmd = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwplazaversion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwplazaversion = options.longs === String ? "0" : 0;
                object.szmachineid = "";
                object.cbvalidateflags = 0;
            }
            if (message.reqcmd != null && message.hasOwnProperty("reqcmd"))
                object.reqcmd = $root.NullPmd.request.toObject(message.reqcmd, options);
            if (message.dwplazaversion != null && message.hasOwnProperty("dwplazaversion"))
                if (typeof message.dwplazaversion === "number")
                    object.dwplazaversion = options.longs === String ? String(message.dwplazaversion) : message.dwplazaversion;
                else
                    object.dwplazaversion = options.longs === String ? $util.Long.prototype.toString.call(message.dwplazaversion) : options.longs === Number ? new $util.LongBits(message.dwplazaversion.low >>> 0, message.dwplazaversion.high >>> 0).toNumber(true) : message.dwplazaversion;
            if (message.szmachineid != null && message.hasOwnProperty("szmachineid"))
                object.szmachineid = message.szmachineid;
            if (message.cbvalidateflags != null && message.hasOwnProperty("cbvalidateflags"))
                object.cbvalidateflags = message.cbvalidateflags;
            return object;
        };

        /**
         * Converts this loginbyvisitor_c2s to JSON.
         * @function toJSON
         * @memberof LoginPmd.loginbyvisitor_c2s
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        loginbyvisitor_c2s.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return loginbyvisitor_c2s;
    })();

    LoginPmd.loginsuccess_s2c = (function() {

        /**
         * Properties of a loginsuccess_s2c.
         * @memberof LoginPmd
         * @interface Iloginsuccess_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] loginsuccess_s2c respcmd
         * @property {CommonPmd.Ipersoninfo|null} [personinfo] loginsuccess_s2c personinfo
         */

        /**
         * Constructs a new loginsuccess_s2c.
         * @memberof LoginPmd
         * @classdesc Represents a loginsuccess_s2c.
         * @implements Iloginsuccess_s2c
         * @constructor
         * @param {LoginPmd.Iloginsuccess_s2c=} [properties] Properties to set
         */
        function loginsuccess_s2c(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * loginsuccess_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof LoginPmd.loginsuccess_s2c
         * @instance
         */
        loginsuccess_s2c.prototype.respcmd = null;

        /**
         * loginsuccess_s2c personinfo.
         * @member {CommonPmd.Ipersoninfo|null|undefined} personinfo
         * @memberof LoginPmd.loginsuccess_s2c
         * @instance
         */
        loginsuccess_s2c.prototype.personinfo = null;

        /**
         * Creates a new loginsuccess_s2c instance using the specified properties.
         * @function create
         * @memberof LoginPmd.loginsuccess_s2c
         * @static
         * @param {LoginPmd.Iloginsuccess_s2c=} [properties] Properties to set
         * @returns {LoginPmd.loginsuccess_s2c} loginsuccess_s2c instance
         */
        loginsuccess_s2c.create = function create(properties) {
            return new loginsuccess_s2c(properties);
        };

        /**
         * Encodes the specified loginsuccess_s2c message. Does not implicitly {@link LoginPmd.loginsuccess_s2c.verify|verify} messages.
         * @function encode
         * @memberof LoginPmd.loginsuccess_s2c
         * @static
         * @param {LoginPmd.Iloginsuccess_s2c} message loginsuccess_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginsuccess_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.personinfo != null && message.hasOwnProperty("personinfo"))
                $root.CommonPmd.personinfo.encode(message.personinfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified loginsuccess_s2c message, length delimited. Does not implicitly {@link LoginPmd.loginsuccess_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginPmd.loginsuccess_s2c
         * @static
         * @param {LoginPmd.Iloginsuccess_s2c} message loginsuccess_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginsuccess_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a loginsuccess_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPmd.loginsuccess_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPmd.loginsuccess_s2c} loginsuccess_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginsuccess_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPmd.loginsuccess_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.personinfo = $root.CommonPmd.personinfo.decode(reader, reader.uint32());
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
         * @memberof LoginPmd.loginsuccess_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginPmd.loginsuccess_s2c} loginsuccess_s2c
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
         * @memberof LoginPmd.loginsuccess_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        loginsuccess_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.personinfo != null && message.hasOwnProperty("personinfo")) {
                var error = $root.CommonPmd.personinfo.verify(message.personinfo);
                if (error)
                    return "personinfo." + error;
            }
            return null;
        };

        /**
         * Creates a loginsuccess_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LoginPmd.loginsuccess_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginPmd.loginsuccess_s2c} loginsuccess_s2c
         */
        loginsuccess_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginPmd.loginsuccess_s2c)
                return object;
            var message = new $root.LoginPmd.loginsuccess_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".LoginPmd.loginsuccess_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.personinfo != null) {
                if (typeof object.personinfo !== "object")
                    throw TypeError(".LoginPmd.loginsuccess_s2c.personinfo: object expected");
                message.personinfo = $root.CommonPmd.personinfo.fromObject(object.personinfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a loginsuccess_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginPmd.loginsuccess_s2c
         * @static
         * @param {LoginPmd.loginsuccess_s2c} message loginsuccess_s2c
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
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.personinfo != null && message.hasOwnProperty("personinfo"))
                object.personinfo = $root.CommonPmd.personinfo.toObject(message.personinfo, options);
            return object;
        };

        /**
         * Converts this loginsuccess_s2c to JSON.
         * @function toJSON
         * @memberof LoginPmd.loginsuccess_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        loginsuccess_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return loginsuccess_s2c;
    })();

    LoginPmd.loginfinish_s2c = (function() {

        /**
         * Properties of a loginfinish_s2c.
         * @memberof LoginPmd
         * @interface Iloginfinish_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] loginfinish_s2c respcmd
         * @property {number|null} [wIntermitTime] loginfinish_s2c wIntermitTime
         * @property {number|null} [wOnLineCountTime] loginfinish_s2c wOnLineCountTime
         */

        /**
         * Constructs a new loginfinish_s2c.
         * @memberof LoginPmd
         * @classdesc Represents a loginfinish_s2c.
         * @implements Iloginfinish_s2c
         * @constructor
         * @param {LoginPmd.Iloginfinish_s2c=} [properties] Properties to set
         */
        function loginfinish_s2c(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * loginfinish_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof LoginPmd.loginfinish_s2c
         * @instance
         */
        loginfinish_s2c.prototype.respcmd = null;

        /**
         * loginfinish_s2c wIntermitTime.
         * @member {number} wIntermitTime
         * @memberof LoginPmd.loginfinish_s2c
         * @instance
         */
        loginfinish_s2c.prototype.wIntermitTime = 0;

        /**
         * loginfinish_s2c wOnLineCountTime.
         * @member {number} wOnLineCountTime
         * @memberof LoginPmd.loginfinish_s2c
         * @instance
         */
        loginfinish_s2c.prototype.wOnLineCountTime = 0;

        /**
         * Creates a new loginfinish_s2c instance using the specified properties.
         * @function create
         * @memberof LoginPmd.loginfinish_s2c
         * @static
         * @param {LoginPmd.Iloginfinish_s2c=} [properties] Properties to set
         * @returns {LoginPmd.loginfinish_s2c} loginfinish_s2c instance
         */
        loginfinish_s2c.create = function create(properties) {
            return new loginfinish_s2c(properties);
        };

        /**
         * Encodes the specified loginfinish_s2c message. Does not implicitly {@link LoginPmd.loginfinish_s2c.verify|verify} messages.
         * @function encode
         * @memberof LoginPmd.loginfinish_s2c
         * @static
         * @param {LoginPmd.Iloginfinish_s2c} message loginfinish_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginfinish_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.wIntermitTime != null && message.hasOwnProperty("wIntermitTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.wIntermitTime);
            if (message.wOnLineCountTime != null && message.hasOwnProperty("wOnLineCountTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.wOnLineCountTime);
            return writer;
        };

        /**
         * Encodes the specified loginfinish_s2c message, length delimited. Does not implicitly {@link LoginPmd.loginfinish_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginPmd.loginfinish_s2c
         * @static
         * @param {LoginPmd.Iloginfinish_s2c} message loginfinish_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginfinish_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a loginfinish_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPmd.loginfinish_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPmd.loginfinish_s2c} loginfinish_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginfinish_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPmd.loginfinish_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.wIntermitTime = reader.int32();
                    break;
                case 3:
                    message.wOnLineCountTime = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a loginfinish_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LoginPmd.loginfinish_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginPmd.loginfinish_s2c} loginfinish_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginfinish_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a loginfinish_s2c message.
         * @function verify
         * @memberof LoginPmd.loginfinish_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        loginfinish_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.wIntermitTime != null && message.hasOwnProperty("wIntermitTime"))
                if (!$util.isInteger(message.wIntermitTime))
                    return "wIntermitTime: integer expected";
            if (message.wOnLineCountTime != null && message.hasOwnProperty("wOnLineCountTime"))
                if (!$util.isInteger(message.wOnLineCountTime))
                    return "wOnLineCountTime: integer expected";
            return null;
        };

        /**
         * Creates a loginfinish_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LoginPmd.loginfinish_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginPmd.loginfinish_s2c} loginfinish_s2c
         */
        loginfinish_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginPmd.loginfinish_s2c)
                return object;
            var message = new $root.LoginPmd.loginfinish_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".LoginPmd.loginfinish_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.wIntermitTime != null)
                message.wIntermitTime = object.wIntermitTime | 0;
            if (object.wOnLineCountTime != null)
                message.wOnLineCountTime = object.wOnLineCountTime | 0;
            return message;
        };

        /**
         * Creates a plain object from a loginfinish_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginPmd.loginfinish_s2c
         * @static
         * @param {LoginPmd.loginfinish_s2c} message loginfinish_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        loginfinish_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.respcmd = null;
                object.wIntermitTime = 0;
                object.wOnLineCountTime = 0;
            }
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.wIntermitTime != null && message.hasOwnProperty("wIntermitTime"))
                object.wIntermitTime = message.wIntermitTime;
            if (message.wOnLineCountTime != null && message.hasOwnProperty("wOnLineCountTime"))
                object.wOnLineCountTime = message.wOnLineCountTime;
            return object;
        };

        /**
         * Converts this loginfinish_s2c to JSON.
         * @function toJSON
         * @memberof LoginPmd.loginfinish_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        loginfinish_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return loginfinish_s2c;
    })();

    LoginPmd.loginfailure_s2c = (function() {

        /**
         * Properties of a loginfailure_s2c.
         * @memberof LoginPmd
         * @interface Iloginfailure_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] loginfailure_s2c respcmd
         */

        /**
         * Constructs a new loginfailure_s2c.
         * @memberof LoginPmd
         * @classdesc Represents a loginfailure_s2c.
         * @implements Iloginfailure_s2c
         * @constructor
         * @param {LoginPmd.Iloginfailure_s2c=} [properties] Properties to set
         */
        function loginfailure_s2c(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * loginfailure_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof LoginPmd.loginfailure_s2c
         * @instance
         */
        loginfailure_s2c.prototype.respcmd = null;

        /**
         * Creates a new loginfailure_s2c instance using the specified properties.
         * @function create
         * @memberof LoginPmd.loginfailure_s2c
         * @static
         * @param {LoginPmd.Iloginfailure_s2c=} [properties] Properties to set
         * @returns {LoginPmd.loginfailure_s2c} loginfailure_s2c instance
         */
        loginfailure_s2c.create = function create(properties) {
            return new loginfailure_s2c(properties);
        };

        /**
         * Encodes the specified loginfailure_s2c message. Does not implicitly {@link LoginPmd.loginfailure_s2c.verify|verify} messages.
         * @function encode
         * @memberof LoginPmd.loginfailure_s2c
         * @static
         * @param {LoginPmd.Iloginfailure_s2c} message loginfailure_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginfailure_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified loginfailure_s2c message, length delimited. Does not implicitly {@link LoginPmd.loginfailure_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LoginPmd.loginfailure_s2c
         * @static
         * @param {LoginPmd.Iloginfailure_s2c} message loginfailure_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        loginfailure_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a loginfailure_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof LoginPmd.loginfailure_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LoginPmd.loginfailure_s2c} loginfailure_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginfailure_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LoginPmd.loginfailure_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a loginfailure_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LoginPmd.loginfailure_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LoginPmd.loginfailure_s2c} loginfailure_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        loginfailure_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a loginfailure_s2c message.
         * @function verify
         * @memberof LoginPmd.loginfailure_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        loginfailure_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            return null;
        };

        /**
         * Creates a loginfailure_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LoginPmd.loginfailure_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LoginPmd.loginfailure_s2c} loginfailure_s2c
         */
        loginfailure_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.LoginPmd.loginfailure_s2c)
                return object;
            var message = new $root.LoginPmd.loginfailure_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".LoginPmd.loginfailure_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            return message;
        };

        /**
         * Creates a plain object from a loginfailure_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LoginPmd.loginfailure_s2c
         * @static
         * @param {LoginPmd.loginfailure_s2c} message loginfailure_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        loginfailure_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.respcmd = null;
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            return object;
        };

        /**
         * Converts this loginfailure_s2c to JSON.
         * @function toJSON
         * @memberof LoginPmd.loginfailure_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        loginfailure_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return loginfailure_s2c;
    })();

    return LoginPmd;
})();

$root.MatchPmd = (function() {

    /**
     * Namespace MatchPmd.
     * @exports MatchPmd
     * @namespace
     */
    var MatchPmd = {};

    MatchPmd.tagMatchRewardInfo = (function() {

        /**
         * Properties of a tagMatchRewardInfo.
         * @memberof MatchPmd
         * @interface ItagMatchRewardInfo
         * @property {number|null} [wrankid] tagMatchRewardInfo wrankid
         * @property {number|Long|null} [lrewardgold] tagMatchRewardInfo lrewardgold
         * @property {number|Long|null} [lrewardingot] tagMatchRewardInfo lrewardingot
         * @property {number|Long|null} [dwrewardexperience] tagMatchRewardInfo dwrewardexperience
         */

        /**
         * Constructs a new tagMatchRewardInfo.
         * @memberof MatchPmd
         * @classdesc Represents a tagMatchRewardInfo.
         * @implements ItagMatchRewardInfo
         * @constructor
         * @param {MatchPmd.ItagMatchRewardInfo=} [properties] Properties to set
         */
        function tagMatchRewardInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagMatchRewardInfo wrankid.
         * @member {number} wrankid
         * @memberof MatchPmd.tagMatchRewardInfo
         * @instance
         */
        tagMatchRewardInfo.prototype.wrankid = 0;

        /**
         * tagMatchRewardInfo lrewardgold.
         * @member {number|Long} lrewardgold
         * @memberof MatchPmd.tagMatchRewardInfo
         * @instance
         */
        tagMatchRewardInfo.prototype.lrewardgold = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagMatchRewardInfo lrewardingot.
         * @member {number|Long} lrewardingot
         * @memberof MatchPmd.tagMatchRewardInfo
         * @instance
         */
        tagMatchRewardInfo.prototype.lrewardingot = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagMatchRewardInfo dwrewardexperience.
         * @member {number|Long} dwrewardexperience
         * @memberof MatchPmd.tagMatchRewardInfo
         * @instance
         */
        tagMatchRewardInfo.prototype.dwrewardexperience = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new tagMatchRewardInfo instance using the specified properties.
         * @function create
         * @memberof MatchPmd.tagMatchRewardInfo
         * @static
         * @param {MatchPmd.ItagMatchRewardInfo=} [properties] Properties to set
         * @returns {MatchPmd.tagMatchRewardInfo} tagMatchRewardInfo instance
         */
        tagMatchRewardInfo.create = function create(properties) {
            return new tagMatchRewardInfo(properties);
        };

        /**
         * Encodes the specified tagMatchRewardInfo message. Does not implicitly {@link MatchPmd.tagMatchRewardInfo.verify|verify} messages.
         * @function encode
         * @memberof MatchPmd.tagMatchRewardInfo
         * @static
         * @param {MatchPmd.ItagMatchRewardInfo} message tagMatchRewardInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagMatchRewardInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wrankid != null && message.hasOwnProperty("wrankid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.wrankid);
            if (message.lrewardgold != null && message.hasOwnProperty("lrewardgold"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.lrewardgold);
            if (message.lrewardingot != null && message.hasOwnProperty("lrewardingot"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.lrewardingot);
            if (message.dwrewardexperience != null && message.hasOwnProperty("dwrewardexperience"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.dwrewardexperience);
            return writer;
        };

        /**
         * Encodes the specified tagMatchRewardInfo message, length delimited. Does not implicitly {@link MatchPmd.tagMatchRewardInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MatchPmd.tagMatchRewardInfo
         * @static
         * @param {MatchPmd.ItagMatchRewardInfo} message tagMatchRewardInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagMatchRewardInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagMatchRewardInfo message from the specified reader or buffer.
         * @function decode
         * @memberof MatchPmd.tagMatchRewardInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MatchPmd.tagMatchRewardInfo} tagMatchRewardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagMatchRewardInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MatchPmd.tagMatchRewardInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.wrankid = reader.int32();
                    break;
                case 2:
                    message.lrewardgold = reader.uint64();
                    break;
                case 3:
                    message.lrewardingot = reader.uint64();
                    break;
                case 4:
                    message.dwrewardexperience = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagMatchRewardInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MatchPmd.tagMatchRewardInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MatchPmd.tagMatchRewardInfo} tagMatchRewardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagMatchRewardInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagMatchRewardInfo message.
         * @function verify
         * @memberof MatchPmd.tagMatchRewardInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagMatchRewardInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.wrankid != null && message.hasOwnProperty("wrankid"))
                if (!$util.isInteger(message.wrankid))
                    return "wrankid: integer expected";
            if (message.lrewardgold != null && message.hasOwnProperty("lrewardgold"))
                if (!$util.isInteger(message.lrewardgold) && !(message.lrewardgold && $util.isInteger(message.lrewardgold.low) && $util.isInteger(message.lrewardgold.high)))
                    return "lrewardgold: integer|Long expected";
            if (message.lrewardingot != null && message.hasOwnProperty("lrewardingot"))
                if (!$util.isInteger(message.lrewardingot) && !(message.lrewardingot && $util.isInteger(message.lrewardingot.low) && $util.isInteger(message.lrewardingot.high)))
                    return "lrewardingot: integer|Long expected";
            if (message.dwrewardexperience != null && message.hasOwnProperty("dwrewardexperience"))
                if (!$util.isInteger(message.dwrewardexperience) && !(message.dwrewardexperience && $util.isInteger(message.dwrewardexperience.low) && $util.isInteger(message.dwrewardexperience.high)))
                    return "dwrewardexperience: integer|Long expected";
            return null;
        };

        /**
         * Creates a tagMatchRewardInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MatchPmd.tagMatchRewardInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MatchPmd.tagMatchRewardInfo} tagMatchRewardInfo
         */
        tagMatchRewardInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.MatchPmd.tagMatchRewardInfo)
                return object;
            var message = new $root.MatchPmd.tagMatchRewardInfo();
            if (object.wrankid != null)
                message.wrankid = object.wrankid | 0;
            if (object.lrewardgold != null)
                if ($util.Long)
                    (message.lrewardgold = $util.Long.fromValue(object.lrewardgold)).unsigned = true;
                else if (typeof object.lrewardgold === "string")
                    message.lrewardgold = parseInt(object.lrewardgold, 10);
                else if (typeof object.lrewardgold === "number")
                    message.lrewardgold = object.lrewardgold;
                else if (typeof object.lrewardgold === "object")
                    message.lrewardgold = new $util.LongBits(object.lrewardgold.low >>> 0, object.lrewardgold.high >>> 0).toNumber(true);
            if (object.lrewardingot != null)
                if ($util.Long)
                    (message.lrewardingot = $util.Long.fromValue(object.lrewardingot)).unsigned = true;
                else if (typeof object.lrewardingot === "string")
                    message.lrewardingot = parseInt(object.lrewardingot, 10);
                else if (typeof object.lrewardingot === "number")
                    message.lrewardingot = object.lrewardingot;
                else if (typeof object.lrewardingot === "object")
                    message.lrewardingot = new $util.LongBits(object.lrewardingot.low >>> 0, object.lrewardingot.high >>> 0).toNumber(true);
            if (object.dwrewardexperience != null)
                if ($util.Long)
                    (message.dwrewardexperience = $util.Long.fromValue(object.dwrewardexperience)).unsigned = true;
                else if (typeof object.dwrewardexperience === "string")
                    message.dwrewardexperience = parseInt(object.dwrewardexperience, 10);
                else if (typeof object.dwrewardexperience === "number")
                    message.dwrewardexperience = object.dwrewardexperience;
                else if (typeof object.dwrewardexperience === "object")
                    message.dwrewardexperience = new $util.LongBits(object.dwrewardexperience.low >>> 0, object.dwrewardexperience.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a tagMatchRewardInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MatchPmd.tagMatchRewardInfo
         * @static
         * @param {MatchPmd.tagMatchRewardInfo} message tagMatchRewardInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagMatchRewardInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.wrankid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lrewardgold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lrewardgold = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lrewardingot = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lrewardingot = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwrewardexperience = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwrewardexperience = options.longs === String ? "0" : 0;
            }
            if (message.wrankid != null && message.hasOwnProperty("wrankid"))
                object.wrankid = message.wrankid;
            if (message.lrewardgold != null && message.hasOwnProperty("lrewardgold"))
                if (typeof message.lrewardgold === "number")
                    object.lrewardgold = options.longs === String ? String(message.lrewardgold) : message.lrewardgold;
                else
                    object.lrewardgold = options.longs === String ? $util.Long.prototype.toString.call(message.lrewardgold) : options.longs === Number ? new $util.LongBits(message.lrewardgold.low >>> 0, message.lrewardgold.high >>> 0).toNumber(true) : message.lrewardgold;
            if (message.lrewardingot != null && message.hasOwnProperty("lrewardingot"))
                if (typeof message.lrewardingot === "number")
                    object.lrewardingot = options.longs === String ? String(message.lrewardingot) : message.lrewardingot;
                else
                    object.lrewardingot = options.longs === String ? $util.Long.prototype.toString.call(message.lrewardingot) : options.longs === Number ? new $util.LongBits(message.lrewardingot.low >>> 0, message.lrewardingot.high >>> 0).toNumber(true) : message.lrewardingot;
            if (message.dwrewardexperience != null && message.hasOwnProperty("dwrewardexperience"))
                if (typeof message.dwrewardexperience === "number")
                    object.dwrewardexperience = options.longs === String ? String(message.dwrewardexperience) : message.dwrewardexperience;
                else
                    object.dwrewardexperience = options.longs === String ? $util.Long.prototype.toString.call(message.dwrewardexperience) : options.longs === Number ? new $util.LongBits(message.dwrewardexperience.low >>> 0, message.dwrewardexperience.high >>> 0).toNumber(true) : message.dwrewardexperience;
            return object;
        };

        /**
         * Converts this tagMatchRewardInfo to JSON.
         * @function toJSON
         * @memberof MatchPmd.tagMatchRewardInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagMatchRewardInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagMatchRewardInfo;
    })();

    MatchPmd.tagGameMatch = (function() {

        /**
         * Properties of a tagGameMatch.
         * @memberof MatchPmd
         * @interface ItagGameMatch
         * @property {number|null} [wserverid] tagGameMatch wserverid
         * @property {number|Long|null} [dwmatchid] tagGameMatch dwmatchid
         * @property {number|null} [cbmatchtype] tagGameMatch cbmatchtype
         * @property {string|null} [szmatchname] tagGameMatch szmatchname
         * @property {number|null} [cbfeetype] tagGameMatch cbfeetype
         * @property {number|null} [cbdeductarea] tagGameMatch cbdeductarea
         * @property {number|Long|null} [lsignupfee] tagGameMatch lsignupfee
         * @property {number|null} [cbsignupmode] tagGameMatch cbsignupmode
         * @property {number|null} [cbjoincondition] tagGameMatch cbjoincondition
         * @property {number|null} [cbmemberorder] tagGameMatch cbmemberorder
         * @property {number|Long|null} [lexperience] tagGameMatch lexperience
         * @property {number|null} [cbrankingmode] tagGameMatch cbrankingmode
         * @property {number|null} [wcountinnings] tagGameMatch wcountinnings
         * @property {number|null} [cbfiltergradesmode] tagGameMatch cbfiltergradesmode
         * @property {number|null} [wrewardcount] tagGameMatch wrewardcount
         * @property {Array.<MatchPmd.ItagMatchRewardInfo>|null} [matchrewardinfo] tagGameMatch matchrewardinfo
         * @property {string|null} [cbmatchrule] tagGameMatch cbmatchrule
         */

        /**
         * Constructs a new tagGameMatch.
         * @memberof MatchPmd
         * @classdesc Represents a tagGameMatch.
         * @implements ItagGameMatch
         * @constructor
         * @param {MatchPmd.ItagGameMatch=} [properties] Properties to set
         */
        function tagGameMatch(properties) {
            this.matchrewardinfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagGameMatch wserverid.
         * @member {number} wserverid
         * @memberof MatchPmd.tagGameMatch
         * @instance
         */
        tagGameMatch.prototype.wserverid = 0;

        /**
         * tagGameMatch dwmatchid.
         * @member {number|Long} dwmatchid
         * @memberof MatchPmd.tagGameMatch
         * @instance
         */
        tagGameMatch.prototype.dwmatchid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagGameMatch cbmatchtype.
         * @member {number} cbmatchtype
         * @memberof MatchPmd.tagGameMatch
         * @instance
         */
        tagGameMatch.prototype.cbmatchtype = 0;

        /**
         * tagGameMatch szmatchname.
         * @member {string} szmatchname
         * @memberof MatchPmd.tagGameMatch
         * @instance
         */
        tagGameMatch.prototype.szmatchname = "";

        /**
         * tagGameMatch cbfeetype.
         * @member {number} cbfeetype
         * @memberof MatchPmd.tagGameMatch
         * @instance
         */
        tagGameMatch.prototype.cbfeetype = 0;

        /**
         * tagGameMatch cbdeductarea.
         * @member {number} cbdeductarea
         * @memberof MatchPmd.tagGameMatch
         * @instance
         */
        tagGameMatch.prototype.cbdeductarea = 0;

        /**
         * tagGameMatch lsignupfee.
         * @member {number|Long} lsignupfee
         * @memberof MatchPmd.tagGameMatch
         * @instance
         */
        tagGameMatch.prototype.lsignupfee = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagGameMatch cbsignupmode.
         * @member {number} cbsignupmode
         * @memberof MatchPmd.tagGameMatch
         * @instance
         */
        tagGameMatch.prototype.cbsignupmode = 0;

        /**
         * tagGameMatch cbjoincondition.
         * @member {number} cbjoincondition
         * @memberof MatchPmd.tagGameMatch
         * @instance
         */
        tagGameMatch.prototype.cbjoincondition = 0;

        /**
         * tagGameMatch cbmemberorder.
         * @member {number} cbmemberorder
         * @memberof MatchPmd.tagGameMatch
         * @instance
         */
        tagGameMatch.prototype.cbmemberorder = 0;

        /**
         * tagGameMatch lexperience.
         * @member {number|Long} lexperience
         * @memberof MatchPmd.tagGameMatch
         * @instance
         */
        tagGameMatch.prototype.lexperience = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagGameMatch cbrankingmode.
         * @member {number} cbrankingmode
         * @memberof MatchPmd.tagGameMatch
         * @instance
         */
        tagGameMatch.prototype.cbrankingmode = 0;

        /**
         * tagGameMatch wcountinnings.
         * @member {number} wcountinnings
         * @memberof MatchPmd.tagGameMatch
         * @instance
         */
        tagGameMatch.prototype.wcountinnings = 0;

        /**
         * tagGameMatch cbfiltergradesmode.
         * @member {number} cbfiltergradesmode
         * @memberof MatchPmd.tagGameMatch
         * @instance
         */
        tagGameMatch.prototype.cbfiltergradesmode = 0;

        /**
         * tagGameMatch wrewardcount.
         * @member {number} wrewardcount
         * @memberof MatchPmd.tagGameMatch
         * @instance
         */
        tagGameMatch.prototype.wrewardcount = 0;

        /**
         * tagGameMatch matchrewardinfo.
         * @member {Array.<MatchPmd.ItagMatchRewardInfo>} matchrewardinfo
         * @memberof MatchPmd.tagGameMatch
         * @instance
         */
        tagGameMatch.prototype.matchrewardinfo = $util.emptyArray;

        /**
         * tagGameMatch cbmatchrule.
         * @member {string} cbmatchrule
         * @memberof MatchPmd.tagGameMatch
         * @instance
         */
        tagGameMatch.prototype.cbmatchrule = "";

        /**
         * Creates a new tagGameMatch instance using the specified properties.
         * @function create
         * @memberof MatchPmd.tagGameMatch
         * @static
         * @param {MatchPmd.ItagGameMatch=} [properties] Properties to set
         * @returns {MatchPmd.tagGameMatch} tagGameMatch instance
         */
        tagGameMatch.create = function create(properties) {
            return new tagGameMatch(properties);
        };

        /**
         * Encodes the specified tagGameMatch message. Does not implicitly {@link MatchPmd.tagGameMatch.verify|verify} messages.
         * @function encode
         * @memberof MatchPmd.tagGameMatch
         * @static
         * @param {MatchPmd.ItagGameMatch} message tagGameMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGameMatch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.wserverid != null && message.hasOwnProperty("wserverid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.wserverid);
            if (message.dwmatchid != null && message.hasOwnProperty("dwmatchid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.dwmatchid);
            if (message.cbmatchtype != null && message.hasOwnProperty("cbmatchtype"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cbmatchtype);
            if (message.szmatchname != null && message.hasOwnProperty("szmatchname"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.szmatchname);
            if (message.cbfeetype != null && message.hasOwnProperty("cbfeetype"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cbfeetype);
            if (message.cbdeductarea != null && message.hasOwnProperty("cbdeductarea"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.cbdeductarea);
            if (message.lsignupfee != null && message.hasOwnProperty("lsignupfee"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.lsignupfee);
            if (message.cbsignupmode != null && message.hasOwnProperty("cbsignupmode"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.cbsignupmode);
            if (message.cbjoincondition != null && message.hasOwnProperty("cbjoincondition"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.cbjoincondition);
            if (message.cbmemberorder != null && message.hasOwnProperty("cbmemberorder"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.cbmemberorder);
            if (message.lexperience != null && message.hasOwnProperty("lexperience"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.lexperience);
            if (message.cbrankingmode != null && message.hasOwnProperty("cbrankingmode"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.cbrankingmode);
            if (message.wcountinnings != null && message.hasOwnProperty("wcountinnings"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.wcountinnings);
            if (message.cbfiltergradesmode != null && message.hasOwnProperty("cbfiltergradesmode"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.cbfiltergradesmode);
            if (message.wrewardcount != null && message.hasOwnProperty("wrewardcount"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.wrewardcount);
            if (message.matchrewardinfo != null && message.matchrewardinfo.length)
                for (var i = 0; i < message.matchrewardinfo.length; ++i)
                    $root.MatchPmd.tagMatchRewardInfo.encode(message.matchrewardinfo[i], writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.cbmatchrule != null && message.hasOwnProperty("cbmatchrule"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.cbmatchrule);
            return writer;
        };

        /**
         * Encodes the specified tagGameMatch message, length delimited. Does not implicitly {@link MatchPmd.tagGameMatch.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MatchPmd.tagGameMatch
         * @static
         * @param {MatchPmd.ItagGameMatch} message tagGameMatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGameMatch.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagGameMatch message from the specified reader or buffer.
         * @function decode
         * @memberof MatchPmd.tagGameMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MatchPmd.tagGameMatch} tagGameMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGameMatch.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MatchPmd.tagGameMatch();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.wserverid = reader.int32();
                    break;
                case 2:
                    message.dwmatchid = reader.uint64();
                    break;
                case 3:
                    message.cbmatchtype = reader.int32();
                    break;
                case 4:
                    message.szmatchname = reader.string();
                    break;
                case 5:
                    message.cbfeetype = reader.int32();
                    break;
                case 6:
                    message.cbdeductarea = reader.int32();
                    break;
                case 7:
                    message.lsignupfee = reader.uint64();
                    break;
                case 8:
                    message.cbsignupmode = reader.int32();
                    break;
                case 9:
                    message.cbjoincondition = reader.int32();
                    break;
                case 10:
                    message.cbmemberorder = reader.int32();
                    break;
                case 11:
                    message.lexperience = reader.uint64();
                    break;
                case 12:
                    message.cbrankingmode = reader.int32();
                    break;
                case 13:
                    message.wcountinnings = reader.int32();
                    break;
                case 14:
                    message.cbfiltergradesmode = reader.int32();
                    break;
                case 15:
                    message.wrewardcount = reader.int32();
                    break;
                case 16:
                    if (!(message.matchrewardinfo && message.matchrewardinfo.length))
                        message.matchrewardinfo = [];
                    message.matchrewardinfo.push($root.MatchPmd.tagMatchRewardInfo.decode(reader, reader.uint32()));
                    break;
                case 17:
                    message.cbmatchrule = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagGameMatch message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MatchPmd.tagGameMatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MatchPmd.tagGameMatch} tagGameMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGameMatch.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagGameMatch message.
         * @function verify
         * @memberof MatchPmd.tagGameMatch
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagGameMatch.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.wserverid != null && message.hasOwnProperty("wserverid"))
                if (!$util.isInteger(message.wserverid))
                    return "wserverid: integer expected";
            if (message.dwmatchid != null && message.hasOwnProperty("dwmatchid"))
                if (!$util.isInteger(message.dwmatchid) && !(message.dwmatchid && $util.isInteger(message.dwmatchid.low) && $util.isInteger(message.dwmatchid.high)))
                    return "dwmatchid: integer|Long expected";
            if (message.cbmatchtype != null && message.hasOwnProperty("cbmatchtype"))
                if (!$util.isInteger(message.cbmatchtype))
                    return "cbmatchtype: integer expected";
            if (message.szmatchname != null && message.hasOwnProperty("szmatchname"))
                if (!$util.isString(message.szmatchname))
                    return "szmatchname: string expected";
            if (message.cbfeetype != null && message.hasOwnProperty("cbfeetype"))
                if (!$util.isInteger(message.cbfeetype))
                    return "cbfeetype: integer expected";
            if (message.cbdeductarea != null && message.hasOwnProperty("cbdeductarea"))
                if (!$util.isInteger(message.cbdeductarea))
                    return "cbdeductarea: integer expected";
            if (message.lsignupfee != null && message.hasOwnProperty("lsignupfee"))
                if (!$util.isInteger(message.lsignupfee) && !(message.lsignupfee && $util.isInteger(message.lsignupfee.low) && $util.isInteger(message.lsignupfee.high)))
                    return "lsignupfee: integer|Long expected";
            if (message.cbsignupmode != null && message.hasOwnProperty("cbsignupmode"))
                if (!$util.isInteger(message.cbsignupmode))
                    return "cbsignupmode: integer expected";
            if (message.cbjoincondition != null && message.hasOwnProperty("cbjoincondition"))
                if (!$util.isInteger(message.cbjoincondition))
                    return "cbjoincondition: integer expected";
            if (message.cbmemberorder != null && message.hasOwnProperty("cbmemberorder"))
                if (!$util.isInteger(message.cbmemberorder))
                    return "cbmemberorder: integer expected";
            if (message.lexperience != null && message.hasOwnProperty("lexperience"))
                if (!$util.isInteger(message.lexperience) && !(message.lexperience && $util.isInteger(message.lexperience.low) && $util.isInteger(message.lexperience.high)))
                    return "lexperience: integer|Long expected";
            if (message.cbrankingmode != null && message.hasOwnProperty("cbrankingmode"))
                if (!$util.isInteger(message.cbrankingmode))
                    return "cbrankingmode: integer expected";
            if (message.wcountinnings != null && message.hasOwnProperty("wcountinnings"))
                if (!$util.isInteger(message.wcountinnings))
                    return "wcountinnings: integer expected";
            if (message.cbfiltergradesmode != null && message.hasOwnProperty("cbfiltergradesmode"))
                if (!$util.isInteger(message.cbfiltergradesmode))
                    return "cbfiltergradesmode: integer expected";
            if (message.wrewardcount != null && message.hasOwnProperty("wrewardcount"))
                if (!$util.isInteger(message.wrewardcount))
                    return "wrewardcount: integer expected";
            if (message.matchrewardinfo != null && message.hasOwnProperty("matchrewardinfo")) {
                if (!Array.isArray(message.matchrewardinfo))
                    return "matchrewardinfo: array expected";
                for (var i = 0; i < message.matchrewardinfo.length; ++i) {
                    var error = $root.MatchPmd.tagMatchRewardInfo.verify(message.matchrewardinfo[i]);
                    if (error)
                        return "matchrewardinfo." + error;
                }
            }
            if (message.cbmatchrule != null && message.hasOwnProperty("cbmatchrule"))
                if (!$util.isString(message.cbmatchrule))
                    return "cbmatchrule: string expected";
            return null;
        };

        /**
         * Creates a tagGameMatch message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MatchPmd.tagGameMatch
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MatchPmd.tagGameMatch} tagGameMatch
         */
        tagGameMatch.fromObject = function fromObject(object) {
            if (object instanceof $root.MatchPmd.tagGameMatch)
                return object;
            var message = new $root.MatchPmd.tagGameMatch();
            if (object.wserverid != null)
                message.wserverid = object.wserverid | 0;
            if (object.dwmatchid != null)
                if ($util.Long)
                    (message.dwmatchid = $util.Long.fromValue(object.dwmatchid)).unsigned = true;
                else if (typeof object.dwmatchid === "string")
                    message.dwmatchid = parseInt(object.dwmatchid, 10);
                else if (typeof object.dwmatchid === "number")
                    message.dwmatchid = object.dwmatchid;
                else if (typeof object.dwmatchid === "object")
                    message.dwmatchid = new $util.LongBits(object.dwmatchid.low >>> 0, object.dwmatchid.high >>> 0).toNumber(true);
            if (object.cbmatchtype != null)
                message.cbmatchtype = object.cbmatchtype | 0;
            if (object.szmatchname != null)
                message.szmatchname = String(object.szmatchname);
            if (object.cbfeetype != null)
                message.cbfeetype = object.cbfeetype | 0;
            if (object.cbdeductarea != null)
                message.cbdeductarea = object.cbdeductarea | 0;
            if (object.lsignupfee != null)
                if ($util.Long)
                    (message.lsignupfee = $util.Long.fromValue(object.lsignupfee)).unsigned = true;
                else if (typeof object.lsignupfee === "string")
                    message.lsignupfee = parseInt(object.lsignupfee, 10);
                else if (typeof object.lsignupfee === "number")
                    message.lsignupfee = object.lsignupfee;
                else if (typeof object.lsignupfee === "object")
                    message.lsignupfee = new $util.LongBits(object.lsignupfee.low >>> 0, object.lsignupfee.high >>> 0).toNumber(true);
            if (object.cbsignupmode != null)
                message.cbsignupmode = object.cbsignupmode | 0;
            if (object.cbjoincondition != null)
                message.cbjoincondition = object.cbjoincondition | 0;
            if (object.cbmemberorder != null)
                message.cbmemberorder = object.cbmemberorder | 0;
            if (object.lexperience != null)
                if ($util.Long)
                    (message.lexperience = $util.Long.fromValue(object.lexperience)).unsigned = true;
                else if (typeof object.lexperience === "string")
                    message.lexperience = parseInt(object.lexperience, 10);
                else if (typeof object.lexperience === "number")
                    message.lexperience = object.lexperience;
                else if (typeof object.lexperience === "object")
                    message.lexperience = new $util.LongBits(object.lexperience.low >>> 0, object.lexperience.high >>> 0).toNumber(true);
            if (object.cbrankingmode != null)
                message.cbrankingmode = object.cbrankingmode | 0;
            if (object.wcountinnings != null)
                message.wcountinnings = object.wcountinnings | 0;
            if (object.cbfiltergradesmode != null)
                message.cbfiltergradesmode = object.cbfiltergradesmode | 0;
            if (object.wrewardcount != null)
                message.wrewardcount = object.wrewardcount | 0;
            if (object.matchrewardinfo) {
                if (!Array.isArray(object.matchrewardinfo))
                    throw TypeError(".MatchPmd.tagGameMatch.matchrewardinfo: array expected");
                message.matchrewardinfo = [];
                for (var i = 0; i < object.matchrewardinfo.length; ++i) {
                    if (typeof object.matchrewardinfo[i] !== "object")
                        throw TypeError(".MatchPmd.tagGameMatch.matchrewardinfo: object expected");
                    message.matchrewardinfo[i] = $root.MatchPmd.tagMatchRewardInfo.fromObject(object.matchrewardinfo[i]);
                }
            }
            if (object.cbmatchrule != null)
                message.cbmatchrule = String(object.cbmatchrule);
            return message;
        };

        /**
         * Creates a plain object from a tagGameMatch message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MatchPmd.tagGameMatch
         * @static
         * @param {MatchPmd.tagGameMatch} message tagGameMatch
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagGameMatch.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.matchrewardinfo = [];
            if (options.defaults) {
                object.wserverid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwmatchid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwmatchid = options.longs === String ? "0" : 0;
                object.cbmatchtype = 0;
                object.szmatchname = "";
                object.cbfeetype = 0;
                object.cbdeductarea = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lsignupfee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lsignupfee = options.longs === String ? "0" : 0;
                object.cbsignupmode = 0;
                object.cbjoincondition = 0;
                object.cbmemberorder = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lexperience = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lexperience = options.longs === String ? "0" : 0;
                object.cbrankingmode = 0;
                object.wcountinnings = 0;
                object.cbfiltergradesmode = 0;
                object.wrewardcount = 0;
                object.cbmatchrule = "";
            }
            if (message.wserverid != null && message.hasOwnProperty("wserverid"))
                object.wserverid = message.wserverid;
            if (message.dwmatchid != null && message.hasOwnProperty("dwmatchid"))
                if (typeof message.dwmatchid === "number")
                    object.dwmatchid = options.longs === String ? String(message.dwmatchid) : message.dwmatchid;
                else
                    object.dwmatchid = options.longs === String ? $util.Long.prototype.toString.call(message.dwmatchid) : options.longs === Number ? new $util.LongBits(message.dwmatchid.low >>> 0, message.dwmatchid.high >>> 0).toNumber(true) : message.dwmatchid;
            if (message.cbmatchtype != null && message.hasOwnProperty("cbmatchtype"))
                object.cbmatchtype = message.cbmatchtype;
            if (message.szmatchname != null && message.hasOwnProperty("szmatchname"))
                object.szmatchname = message.szmatchname;
            if (message.cbfeetype != null && message.hasOwnProperty("cbfeetype"))
                object.cbfeetype = message.cbfeetype;
            if (message.cbdeductarea != null && message.hasOwnProperty("cbdeductarea"))
                object.cbdeductarea = message.cbdeductarea;
            if (message.lsignupfee != null && message.hasOwnProperty("lsignupfee"))
                if (typeof message.lsignupfee === "number")
                    object.lsignupfee = options.longs === String ? String(message.lsignupfee) : message.lsignupfee;
                else
                    object.lsignupfee = options.longs === String ? $util.Long.prototype.toString.call(message.lsignupfee) : options.longs === Number ? new $util.LongBits(message.lsignupfee.low >>> 0, message.lsignupfee.high >>> 0).toNumber(true) : message.lsignupfee;
            if (message.cbsignupmode != null && message.hasOwnProperty("cbsignupmode"))
                object.cbsignupmode = message.cbsignupmode;
            if (message.cbjoincondition != null && message.hasOwnProperty("cbjoincondition"))
                object.cbjoincondition = message.cbjoincondition;
            if (message.cbmemberorder != null && message.hasOwnProperty("cbmemberorder"))
                object.cbmemberorder = message.cbmemberorder;
            if (message.lexperience != null && message.hasOwnProperty("lexperience"))
                if (typeof message.lexperience === "number")
                    object.lexperience = options.longs === String ? String(message.lexperience) : message.lexperience;
                else
                    object.lexperience = options.longs === String ? $util.Long.prototype.toString.call(message.lexperience) : options.longs === Number ? new $util.LongBits(message.lexperience.low >>> 0, message.lexperience.high >>> 0).toNumber(true) : message.lexperience;
            if (message.cbrankingmode != null && message.hasOwnProperty("cbrankingmode"))
                object.cbrankingmode = message.cbrankingmode;
            if (message.wcountinnings != null && message.hasOwnProperty("wcountinnings"))
                object.wcountinnings = message.wcountinnings;
            if (message.cbfiltergradesmode != null && message.hasOwnProperty("cbfiltergradesmode"))
                object.cbfiltergradesmode = message.cbfiltergradesmode;
            if (message.wrewardcount != null && message.hasOwnProperty("wrewardcount"))
                object.wrewardcount = message.wrewardcount;
            if (message.matchrewardinfo && message.matchrewardinfo.length) {
                object.matchrewardinfo = [];
                for (var j = 0; j < message.matchrewardinfo.length; ++j)
                    object.matchrewardinfo[j] = $root.MatchPmd.tagMatchRewardInfo.toObject(message.matchrewardinfo[j], options);
            }
            if (message.cbmatchrule != null && message.hasOwnProperty("cbmatchrule"))
                object.cbmatchrule = message.cbmatchrule;
            return object;
        };

        /**
         * Converts this tagGameMatch to JSON.
         * @function toJSON
         * @memberof MatchPmd.tagGameMatch
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagGameMatch.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagGameMatch;
    })();

    MatchPmd.tagGameMatch_s2c = (function() {

        /**
         * Properties of a tagGameMatch_s2c.
         * @memberof MatchPmd
         * @interface ItagGameMatch_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] tagGameMatch_s2c respcmd
         * @property {Array.<MatchPmd.ItagGameMatch>|null} [tagGameMatch] tagGameMatch_s2c tagGameMatch
         */

        /**
         * Constructs a new tagGameMatch_s2c.
         * @memberof MatchPmd
         * @classdesc Represents a tagGameMatch_s2c.
         * @implements ItagGameMatch_s2c
         * @constructor
         * @param {MatchPmd.ItagGameMatch_s2c=} [properties] Properties to set
         */
        function tagGameMatch_s2c(properties) {
            this.tagGameMatch = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagGameMatch_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof MatchPmd.tagGameMatch_s2c
         * @instance
         */
        tagGameMatch_s2c.prototype.respcmd = null;

        /**
         * tagGameMatch_s2c tagGameMatch.
         * @member {Array.<MatchPmd.ItagGameMatch>} tagGameMatch
         * @memberof MatchPmd.tagGameMatch_s2c
         * @instance
         */
        tagGameMatch_s2c.prototype.tagGameMatch = $util.emptyArray;

        /**
         * Creates a new tagGameMatch_s2c instance using the specified properties.
         * @function create
         * @memberof MatchPmd.tagGameMatch_s2c
         * @static
         * @param {MatchPmd.ItagGameMatch_s2c=} [properties] Properties to set
         * @returns {MatchPmd.tagGameMatch_s2c} tagGameMatch_s2c instance
         */
        tagGameMatch_s2c.create = function create(properties) {
            return new tagGameMatch_s2c(properties);
        };

        /**
         * Encodes the specified tagGameMatch_s2c message. Does not implicitly {@link MatchPmd.tagGameMatch_s2c.verify|verify} messages.
         * @function encode
         * @memberof MatchPmd.tagGameMatch_s2c
         * @static
         * @param {MatchPmd.ItagGameMatch_s2c} message tagGameMatch_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGameMatch_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.tagGameMatch != null && message.tagGameMatch.length)
                for (var i = 0; i < message.tagGameMatch.length; ++i)
                    $root.MatchPmd.tagGameMatch.encode(message.tagGameMatch[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified tagGameMatch_s2c message, length delimited. Does not implicitly {@link MatchPmd.tagGameMatch_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MatchPmd.tagGameMatch_s2c
         * @static
         * @param {MatchPmd.ItagGameMatch_s2c} message tagGameMatch_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagGameMatch_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagGameMatch_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof MatchPmd.tagGameMatch_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MatchPmd.tagGameMatch_s2c} tagGameMatch_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGameMatch_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MatchPmd.tagGameMatch_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.tagGameMatch && message.tagGameMatch.length))
                        message.tagGameMatch = [];
                    message.tagGameMatch.push($root.MatchPmd.tagGameMatch.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagGameMatch_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MatchPmd.tagGameMatch_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MatchPmd.tagGameMatch_s2c} tagGameMatch_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagGameMatch_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagGameMatch_s2c message.
         * @function verify
         * @memberof MatchPmd.tagGameMatch_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagGameMatch_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.tagGameMatch != null && message.hasOwnProperty("tagGameMatch")) {
                if (!Array.isArray(message.tagGameMatch))
                    return "tagGameMatch: array expected";
                for (var i = 0; i < message.tagGameMatch.length; ++i) {
                    var error = $root.MatchPmd.tagGameMatch.verify(message.tagGameMatch[i]);
                    if (error)
                        return "tagGameMatch." + error;
                }
            }
            return null;
        };

        /**
         * Creates a tagGameMatch_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MatchPmd.tagGameMatch_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MatchPmd.tagGameMatch_s2c} tagGameMatch_s2c
         */
        tagGameMatch_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.MatchPmd.tagGameMatch_s2c)
                return object;
            var message = new $root.MatchPmd.tagGameMatch_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".MatchPmd.tagGameMatch_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.tagGameMatch) {
                if (!Array.isArray(object.tagGameMatch))
                    throw TypeError(".MatchPmd.tagGameMatch_s2c.tagGameMatch: array expected");
                message.tagGameMatch = [];
                for (var i = 0; i < object.tagGameMatch.length; ++i) {
                    if (typeof object.tagGameMatch[i] !== "object")
                        throw TypeError(".MatchPmd.tagGameMatch_s2c.tagGameMatch: object expected");
                    message.tagGameMatch[i] = $root.MatchPmd.tagGameMatch.fromObject(object.tagGameMatch[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a tagGameMatch_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MatchPmd.tagGameMatch_s2c
         * @static
         * @param {MatchPmd.tagGameMatch_s2c} message tagGameMatch_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagGameMatch_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tagGameMatch = [];
            if (options.defaults)
                object.respcmd = null;
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.tagGameMatch && message.tagGameMatch.length) {
                object.tagGameMatch = [];
                for (var j = 0; j < message.tagGameMatch.length; ++j)
                    object.tagGameMatch[j] = $root.MatchPmd.tagGameMatch.toObject(message.tagGameMatch[j], options);
            }
            return object;
        };

        /**
         * Converts this tagGameMatch_s2c to JSON.
         * @function toJSON
         * @memberof MatchPmd.tagGameMatch_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagGameMatch_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagGameMatch_s2c;
    })();

    return MatchPmd;
})();

$root.MemberPmd = (function() {

    /**
     * Namespace MemberPmd.
     * @exports MemberPmd
     * @namespace
     */
    var MemberPmd = {};

    MemberPmd.tagMemberParameterNew = (function() {

        /**
         * Properties of a tagMemberParameterNew.
         * @memberof MemberPmd
         * @interface ItagMemberParameterNew
         * @property {NullPmd.Iresponse|null} [respcmd] tagMemberParameterNew respcmd
         * @property {number|null} [cbmemberorder] tagMemberParameterNew cbmemberorder
         * @property {string|null} [szmembername] tagMemberParameterNew szmembername
         * @property {number|Long|null} [dwmemberright] tagMemberParameterNew dwmemberright
         * @property {number|Long|null} [dwmembertask] tagMemberParameterNew dwmembertask
         * @property {number|Long|null} [dwmembershop] tagMemberParameterNew dwmembershop
         * @property {number|Long|null} [dwmemberinsure] tagMemberParameterNew dwmemberinsure
         * @property {number|Long|null} [dwmemberdaypresent] tagMemberParameterNew dwmemberdaypresent
         * @property {number|Long|null} [dwmemberdaygiftid] tagMemberParameterNew dwmemberdaygiftid
         */

        /**
         * Constructs a new tagMemberParameterNew.
         * @memberof MemberPmd
         * @classdesc Represents a tagMemberParameterNew.
         * @implements ItagMemberParameterNew
         * @constructor
         * @param {MemberPmd.ItagMemberParameterNew=} [properties] Properties to set
         */
        function tagMemberParameterNew(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagMemberParameterNew respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof MemberPmd.tagMemberParameterNew
         * @instance
         */
        tagMemberParameterNew.prototype.respcmd = null;

        /**
         * tagMemberParameterNew cbmemberorder.
         * @member {number} cbmemberorder
         * @memberof MemberPmd.tagMemberParameterNew
         * @instance
         */
        tagMemberParameterNew.prototype.cbmemberorder = 0;

        /**
         * tagMemberParameterNew szmembername.
         * @member {string} szmembername
         * @memberof MemberPmd.tagMemberParameterNew
         * @instance
         */
        tagMemberParameterNew.prototype.szmembername = "";

        /**
         * tagMemberParameterNew dwmemberright.
         * @member {number|Long} dwmemberright
         * @memberof MemberPmd.tagMemberParameterNew
         * @instance
         */
        tagMemberParameterNew.prototype.dwmemberright = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagMemberParameterNew dwmembertask.
         * @member {number|Long} dwmembertask
         * @memberof MemberPmd.tagMemberParameterNew
         * @instance
         */
        tagMemberParameterNew.prototype.dwmembertask = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagMemberParameterNew dwmembershop.
         * @member {number|Long} dwmembershop
         * @memberof MemberPmd.tagMemberParameterNew
         * @instance
         */
        tagMemberParameterNew.prototype.dwmembershop = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagMemberParameterNew dwmemberinsure.
         * @member {number|Long} dwmemberinsure
         * @memberof MemberPmd.tagMemberParameterNew
         * @instance
         */
        tagMemberParameterNew.prototype.dwmemberinsure = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagMemberParameterNew dwmemberdaypresent.
         * @member {number|Long} dwmemberdaypresent
         * @memberof MemberPmd.tagMemberParameterNew
         * @instance
         */
        tagMemberParameterNew.prototype.dwmemberdaypresent = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagMemberParameterNew dwmemberdaygiftid.
         * @member {number|Long} dwmemberdaygiftid
         * @memberof MemberPmd.tagMemberParameterNew
         * @instance
         */
        tagMemberParameterNew.prototype.dwmemberdaygiftid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new tagMemberParameterNew instance using the specified properties.
         * @function create
         * @memberof MemberPmd.tagMemberParameterNew
         * @static
         * @param {MemberPmd.ItagMemberParameterNew=} [properties] Properties to set
         * @returns {MemberPmd.tagMemberParameterNew} tagMemberParameterNew instance
         */
        tagMemberParameterNew.create = function create(properties) {
            return new tagMemberParameterNew(properties);
        };

        /**
         * Encodes the specified tagMemberParameterNew message. Does not implicitly {@link MemberPmd.tagMemberParameterNew.verify|verify} messages.
         * @function encode
         * @memberof MemberPmd.tagMemberParameterNew
         * @static
         * @param {MemberPmd.ItagMemberParameterNew} message tagMemberParameterNew message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagMemberParameterNew.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.cbmemberorder != null && message.hasOwnProperty("cbmemberorder"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cbmemberorder);
            if (message.szmembername != null && message.hasOwnProperty("szmembername"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.szmembername);
            if (message.dwmemberright != null && message.hasOwnProperty("dwmemberright"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.dwmemberright);
            if (message.dwmembertask != null && message.hasOwnProperty("dwmembertask"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.dwmembertask);
            if (message.dwmembershop != null && message.hasOwnProperty("dwmembershop"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.dwmembershop);
            if (message.dwmemberinsure != null && message.hasOwnProperty("dwmemberinsure"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.dwmemberinsure);
            if (message.dwmemberdaypresent != null && message.hasOwnProperty("dwmemberdaypresent"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.dwmemberdaypresent);
            if (message.dwmemberdaygiftid != null && message.hasOwnProperty("dwmemberdaygiftid"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.dwmemberdaygiftid);
            return writer;
        };

        /**
         * Encodes the specified tagMemberParameterNew message, length delimited. Does not implicitly {@link MemberPmd.tagMemberParameterNew.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MemberPmd.tagMemberParameterNew
         * @static
         * @param {MemberPmd.ItagMemberParameterNew} message tagMemberParameterNew message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagMemberParameterNew.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagMemberParameterNew message from the specified reader or buffer.
         * @function decode
         * @memberof MemberPmd.tagMemberParameterNew
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MemberPmd.tagMemberParameterNew} tagMemberParameterNew
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagMemberParameterNew.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MemberPmd.tagMemberParameterNew();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.cbmemberorder = reader.int32();
                    break;
                case 3:
                    message.szmembername = reader.string();
                    break;
                case 4:
                    message.dwmemberright = reader.uint64();
                    break;
                case 5:
                    message.dwmembertask = reader.uint64();
                    break;
                case 6:
                    message.dwmembershop = reader.uint64();
                    break;
                case 7:
                    message.dwmemberinsure = reader.uint64();
                    break;
                case 8:
                    message.dwmemberdaypresent = reader.uint64();
                    break;
                case 9:
                    message.dwmemberdaygiftid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagMemberParameterNew message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MemberPmd.tagMemberParameterNew
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MemberPmd.tagMemberParameterNew} tagMemberParameterNew
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagMemberParameterNew.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagMemberParameterNew message.
         * @function verify
         * @memberof MemberPmd.tagMemberParameterNew
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagMemberParameterNew.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.cbmemberorder != null && message.hasOwnProperty("cbmemberorder"))
                if (!$util.isInteger(message.cbmemberorder))
                    return "cbmemberorder: integer expected";
            if (message.szmembername != null && message.hasOwnProperty("szmembername"))
                if (!$util.isString(message.szmembername))
                    return "szmembername: string expected";
            if (message.dwmemberright != null && message.hasOwnProperty("dwmemberright"))
                if (!$util.isInteger(message.dwmemberright) && !(message.dwmemberright && $util.isInteger(message.dwmemberright.low) && $util.isInteger(message.dwmemberright.high)))
                    return "dwmemberright: integer|Long expected";
            if (message.dwmembertask != null && message.hasOwnProperty("dwmembertask"))
                if (!$util.isInteger(message.dwmembertask) && !(message.dwmembertask && $util.isInteger(message.dwmembertask.low) && $util.isInteger(message.dwmembertask.high)))
                    return "dwmembertask: integer|Long expected";
            if (message.dwmembershop != null && message.hasOwnProperty("dwmembershop"))
                if (!$util.isInteger(message.dwmembershop) && !(message.dwmembershop && $util.isInteger(message.dwmembershop.low) && $util.isInteger(message.dwmembershop.high)))
                    return "dwmembershop: integer|Long expected";
            if (message.dwmemberinsure != null && message.hasOwnProperty("dwmemberinsure"))
                if (!$util.isInteger(message.dwmemberinsure) && !(message.dwmemberinsure && $util.isInteger(message.dwmemberinsure.low) && $util.isInteger(message.dwmemberinsure.high)))
                    return "dwmemberinsure: integer|Long expected";
            if (message.dwmemberdaypresent != null && message.hasOwnProperty("dwmemberdaypresent"))
                if (!$util.isInteger(message.dwmemberdaypresent) && !(message.dwmemberdaypresent && $util.isInteger(message.dwmemberdaypresent.low) && $util.isInteger(message.dwmemberdaypresent.high)))
                    return "dwmemberdaypresent: integer|Long expected";
            if (message.dwmemberdaygiftid != null && message.hasOwnProperty("dwmemberdaygiftid"))
                if (!$util.isInteger(message.dwmemberdaygiftid) && !(message.dwmemberdaygiftid && $util.isInteger(message.dwmemberdaygiftid.low) && $util.isInteger(message.dwmemberdaygiftid.high)))
                    return "dwmemberdaygiftid: integer|Long expected";
            return null;
        };

        /**
         * Creates a tagMemberParameterNew message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MemberPmd.tagMemberParameterNew
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MemberPmd.tagMemberParameterNew} tagMemberParameterNew
         */
        tagMemberParameterNew.fromObject = function fromObject(object) {
            if (object instanceof $root.MemberPmd.tagMemberParameterNew)
                return object;
            var message = new $root.MemberPmd.tagMemberParameterNew();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".MemberPmd.tagMemberParameterNew.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.cbmemberorder != null)
                message.cbmemberorder = object.cbmemberorder | 0;
            if (object.szmembername != null)
                message.szmembername = String(object.szmembername);
            if (object.dwmemberright != null)
                if ($util.Long)
                    (message.dwmemberright = $util.Long.fromValue(object.dwmemberright)).unsigned = true;
                else if (typeof object.dwmemberright === "string")
                    message.dwmemberright = parseInt(object.dwmemberright, 10);
                else if (typeof object.dwmemberright === "number")
                    message.dwmemberright = object.dwmemberright;
                else if (typeof object.dwmemberright === "object")
                    message.dwmemberright = new $util.LongBits(object.dwmemberright.low >>> 0, object.dwmemberright.high >>> 0).toNumber(true);
            if (object.dwmembertask != null)
                if ($util.Long)
                    (message.dwmembertask = $util.Long.fromValue(object.dwmembertask)).unsigned = true;
                else if (typeof object.dwmembertask === "string")
                    message.dwmembertask = parseInt(object.dwmembertask, 10);
                else if (typeof object.dwmembertask === "number")
                    message.dwmembertask = object.dwmembertask;
                else if (typeof object.dwmembertask === "object")
                    message.dwmembertask = new $util.LongBits(object.dwmembertask.low >>> 0, object.dwmembertask.high >>> 0).toNumber(true);
            if (object.dwmembershop != null)
                if ($util.Long)
                    (message.dwmembershop = $util.Long.fromValue(object.dwmembershop)).unsigned = true;
                else if (typeof object.dwmembershop === "string")
                    message.dwmembershop = parseInt(object.dwmembershop, 10);
                else if (typeof object.dwmembershop === "number")
                    message.dwmembershop = object.dwmembershop;
                else if (typeof object.dwmembershop === "object")
                    message.dwmembershop = new $util.LongBits(object.dwmembershop.low >>> 0, object.dwmembershop.high >>> 0).toNumber(true);
            if (object.dwmemberinsure != null)
                if ($util.Long)
                    (message.dwmemberinsure = $util.Long.fromValue(object.dwmemberinsure)).unsigned = true;
                else if (typeof object.dwmemberinsure === "string")
                    message.dwmemberinsure = parseInt(object.dwmemberinsure, 10);
                else if (typeof object.dwmemberinsure === "number")
                    message.dwmemberinsure = object.dwmemberinsure;
                else if (typeof object.dwmemberinsure === "object")
                    message.dwmemberinsure = new $util.LongBits(object.dwmemberinsure.low >>> 0, object.dwmemberinsure.high >>> 0).toNumber(true);
            if (object.dwmemberdaypresent != null)
                if ($util.Long)
                    (message.dwmemberdaypresent = $util.Long.fromValue(object.dwmemberdaypresent)).unsigned = true;
                else if (typeof object.dwmemberdaypresent === "string")
                    message.dwmemberdaypresent = parseInt(object.dwmemberdaypresent, 10);
                else if (typeof object.dwmemberdaypresent === "number")
                    message.dwmemberdaypresent = object.dwmemberdaypresent;
                else if (typeof object.dwmemberdaypresent === "object")
                    message.dwmemberdaypresent = new $util.LongBits(object.dwmemberdaypresent.low >>> 0, object.dwmemberdaypresent.high >>> 0).toNumber(true);
            if (object.dwmemberdaygiftid != null)
                if ($util.Long)
                    (message.dwmemberdaygiftid = $util.Long.fromValue(object.dwmemberdaygiftid)).unsigned = true;
                else if (typeof object.dwmemberdaygiftid === "string")
                    message.dwmemberdaygiftid = parseInt(object.dwmemberdaygiftid, 10);
                else if (typeof object.dwmemberdaygiftid === "number")
                    message.dwmemberdaygiftid = object.dwmemberdaygiftid;
                else if (typeof object.dwmemberdaygiftid === "object")
                    message.dwmemberdaygiftid = new $util.LongBits(object.dwmemberdaygiftid.low >>> 0, object.dwmemberdaygiftid.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a tagMemberParameterNew message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MemberPmd.tagMemberParameterNew
         * @static
         * @param {MemberPmd.tagMemberParameterNew} message tagMemberParameterNew
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagMemberParameterNew.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.respcmd = null;
                object.cbmemberorder = 0;
                object.szmembername = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwmemberright = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwmemberright = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwmembertask = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwmembertask = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwmembershop = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwmembershop = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwmemberinsure = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwmemberinsure = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwmemberdaypresent = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwmemberdaypresent = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwmemberdaygiftid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwmemberdaygiftid = options.longs === String ? "0" : 0;
            }
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.cbmemberorder != null && message.hasOwnProperty("cbmemberorder"))
                object.cbmemberorder = message.cbmemberorder;
            if (message.szmembername != null && message.hasOwnProperty("szmembername"))
                object.szmembername = message.szmembername;
            if (message.dwmemberright != null && message.hasOwnProperty("dwmemberright"))
                if (typeof message.dwmemberright === "number")
                    object.dwmemberright = options.longs === String ? String(message.dwmemberright) : message.dwmemberright;
                else
                    object.dwmemberright = options.longs === String ? $util.Long.prototype.toString.call(message.dwmemberright) : options.longs === Number ? new $util.LongBits(message.dwmemberright.low >>> 0, message.dwmemberright.high >>> 0).toNumber(true) : message.dwmemberright;
            if (message.dwmembertask != null && message.hasOwnProperty("dwmembertask"))
                if (typeof message.dwmembertask === "number")
                    object.dwmembertask = options.longs === String ? String(message.dwmembertask) : message.dwmembertask;
                else
                    object.dwmembertask = options.longs === String ? $util.Long.prototype.toString.call(message.dwmembertask) : options.longs === Number ? new $util.LongBits(message.dwmembertask.low >>> 0, message.dwmembertask.high >>> 0).toNumber(true) : message.dwmembertask;
            if (message.dwmembershop != null && message.hasOwnProperty("dwmembershop"))
                if (typeof message.dwmembershop === "number")
                    object.dwmembershop = options.longs === String ? String(message.dwmembershop) : message.dwmembershop;
                else
                    object.dwmembershop = options.longs === String ? $util.Long.prototype.toString.call(message.dwmembershop) : options.longs === Number ? new $util.LongBits(message.dwmembershop.low >>> 0, message.dwmembershop.high >>> 0).toNumber(true) : message.dwmembershop;
            if (message.dwmemberinsure != null && message.hasOwnProperty("dwmemberinsure"))
                if (typeof message.dwmemberinsure === "number")
                    object.dwmemberinsure = options.longs === String ? String(message.dwmemberinsure) : message.dwmemberinsure;
                else
                    object.dwmemberinsure = options.longs === String ? $util.Long.prototype.toString.call(message.dwmemberinsure) : options.longs === Number ? new $util.LongBits(message.dwmemberinsure.low >>> 0, message.dwmemberinsure.high >>> 0).toNumber(true) : message.dwmemberinsure;
            if (message.dwmemberdaypresent != null && message.hasOwnProperty("dwmemberdaypresent"))
                if (typeof message.dwmemberdaypresent === "number")
                    object.dwmemberdaypresent = options.longs === String ? String(message.dwmemberdaypresent) : message.dwmemberdaypresent;
                else
                    object.dwmemberdaypresent = options.longs === String ? $util.Long.prototype.toString.call(message.dwmemberdaypresent) : options.longs === Number ? new $util.LongBits(message.dwmemberdaypresent.low >>> 0, message.dwmemberdaypresent.high >>> 0).toNumber(true) : message.dwmemberdaypresent;
            if (message.dwmemberdaygiftid != null && message.hasOwnProperty("dwmemberdaygiftid"))
                if (typeof message.dwmemberdaygiftid === "number")
                    object.dwmemberdaygiftid = options.longs === String ? String(message.dwmemberdaygiftid) : message.dwmemberdaygiftid;
                else
                    object.dwmemberdaygiftid = options.longs === String ? $util.Long.prototype.toString.call(message.dwmemberdaygiftid) : options.longs === Number ? new $util.LongBits(message.dwmemberdaygiftid.low >>> 0, message.dwmemberdaygiftid.high >>> 0).toNumber(true) : message.dwmemberdaygiftid;
            return object;
        };

        /**
         * Converts this tagMemberParameterNew to JSON.
         * @function toJSON
         * @memberof MemberPmd.tagMemberParameterNew
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagMemberParameterNew.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagMemberParameterNew;
    })();

    MemberPmd.MemberParameterResult_s2c = (function() {

        /**
         * Properties of a MemberParameterResult_s2c.
         * @memberof MemberPmd
         * @interface IMemberParameterResult_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] MemberParameterResult_s2c respcmd
         * @property {number|null} [wmembercount] MemberParameterResult_s2c wmembercount
         * @property {Array.<MemberPmd.ItagMemberParameterNew>|null} [memberparameter] MemberParameterResult_s2c memberparameter
         */

        /**
         * Constructs a new MemberParameterResult_s2c.
         * @memberof MemberPmd
         * @classdesc Represents a MemberParameterResult_s2c.
         * @implements IMemberParameterResult_s2c
         * @constructor
         * @param {MemberPmd.IMemberParameterResult_s2c=} [properties] Properties to set
         */
        function MemberParameterResult_s2c(properties) {
            this.memberparameter = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MemberParameterResult_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof MemberPmd.MemberParameterResult_s2c
         * @instance
         */
        MemberParameterResult_s2c.prototype.respcmd = null;

        /**
         * MemberParameterResult_s2c wmembercount.
         * @member {number} wmembercount
         * @memberof MemberPmd.MemberParameterResult_s2c
         * @instance
         */
        MemberParameterResult_s2c.prototype.wmembercount = 0;

        /**
         * MemberParameterResult_s2c memberparameter.
         * @member {Array.<MemberPmd.ItagMemberParameterNew>} memberparameter
         * @memberof MemberPmd.MemberParameterResult_s2c
         * @instance
         */
        MemberParameterResult_s2c.prototype.memberparameter = $util.emptyArray;

        /**
         * Creates a new MemberParameterResult_s2c instance using the specified properties.
         * @function create
         * @memberof MemberPmd.MemberParameterResult_s2c
         * @static
         * @param {MemberPmd.IMemberParameterResult_s2c=} [properties] Properties to set
         * @returns {MemberPmd.MemberParameterResult_s2c} MemberParameterResult_s2c instance
         */
        MemberParameterResult_s2c.create = function create(properties) {
            return new MemberParameterResult_s2c(properties);
        };

        /**
         * Encodes the specified MemberParameterResult_s2c message. Does not implicitly {@link MemberPmd.MemberParameterResult_s2c.verify|verify} messages.
         * @function encode
         * @memberof MemberPmd.MemberParameterResult_s2c
         * @static
         * @param {MemberPmd.IMemberParameterResult_s2c} message MemberParameterResult_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MemberParameterResult_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.wmembercount != null && message.hasOwnProperty("wmembercount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.wmembercount);
            if (message.memberparameter != null && message.memberparameter.length)
                for (var i = 0; i < message.memberparameter.length; ++i)
                    $root.MemberPmd.tagMemberParameterNew.encode(message.memberparameter[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MemberParameterResult_s2c message, length delimited. Does not implicitly {@link MemberPmd.MemberParameterResult_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MemberPmd.MemberParameterResult_s2c
         * @static
         * @param {MemberPmd.IMemberParameterResult_s2c} message MemberParameterResult_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MemberParameterResult_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MemberParameterResult_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof MemberPmd.MemberParameterResult_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MemberPmd.MemberParameterResult_s2c} MemberParameterResult_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MemberParameterResult_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MemberPmd.MemberParameterResult_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.wmembercount = reader.int32();
                    break;
                case 3:
                    if (!(message.memberparameter && message.memberparameter.length))
                        message.memberparameter = [];
                    message.memberparameter.push($root.MemberPmd.tagMemberParameterNew.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MemberParameterResult_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MemberPmd.MemberParameterResult_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MemberPmd.MemberParameterResult_s2c} MemberParameterResult_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MemberParameterResult_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MemberParameterResult_s2c message.
         * @function verify
         * @memberof MemberPmd.MemberParameterResult_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MemberParameterResult_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.wmembercount != null && message.hasOwnProperty("wmembercount"))
                if (!$util.isInteger(message.wmembercount))
                    return "wmembercount: integer expected";
            if (message.memberparameter != null && message.hasOwnProperty("memberparameter")) {
                if (!Array.isArray(message.memberparameter))
                    return "memberparameter: array expected";
                for (var i = 0; i < message.memberparameter.length; ++i) {
                    var error = $root.MemberPmd.tagMemberParameterNew.verify(message.memberparameter[i]);
                    if (error)
                        return "memberparameter." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MemberParameterResult_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MemberPmd.MemberParameterResult_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MemberPmd.MemberParameterResult_s2c} MemberParameterResult_s2c
         */
        MemberParameterResult_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.MemberPmd.MemberParameterResult_s2c)
                return object;
            var message = new $root.MemberPmd.MemberParameterResult_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".MemberPmd.MemberParameterResult_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.wmembercount != null)
                message.wmembercount = object.wmembercount | 0;
            if (object.memberparameter) {
                if (!Array.isArray(object.memberparameter))
                    throw TypeError(".MemberPmd.MemberParameterResult_s2c.memberparameter: array expected");
                message.memberparameter = [];
                for (var i = 0; i < object.memberparameter.length; ++i) {
                    if (typeof object.memberparameter[i] !== "object")
                        throw TypeError(".MemberPmd.MemberParameterResult_s2c.memberparameter: object expected");
                    message.memberparameter[i] = $root.MemberPmd.tagMemberParameterNew.fromObject(object.memberparameter[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MemberParameterResult_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MemberPmd.MemberParameterResult_s2c
         * @static
         * @param {MemberPmd.MemberParameterResult_s2c} message MemberParameterResult_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MemberParameterResult_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.memberparameter = [];
            if (options.defaults) {
                object.respcmd = null;
                object.wmembercount = 0;
            }
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.wmembercount != null && message.hasOwnProperty("wmembercount"))
                object.wmembercount = message.wmembercount;
            if (message.memberparameter && message.memberparameter.length) {
                object.memberparameter = [];
                for (var j = 0; j < message.memberparameter.length; ++j)
                    object.memberparameter[j] = $root.MemberPmd.tagMemberParameterNew.toObject(message.memberparameter[j], options);
            }
            return object;
        };

        /**
         * Converts this MemberParameterResult_s2c to JSON.
         * @function toJSON
         * @memberof MemberPmd.MemberParameterResult_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MemberParameterResult_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MemberParameterResult_s2c;
    })();

    return MemberPmd;
})();

$root.propertyPmd = (function() {

    /**
     * Namespace propertyPmd.
     * @exports propertyPmd
     * @namespace
     */
    var propertyPmd = {};

    propertyPmd.tagPropertyTypeItem = (function() {

        /**
         * Properties of a tagPropertyTypeItem.
         * @memberof propertyPmd
         * @interface ItagPropertyTypeItem
         * @property {number|Long|null} [dwtypeid] tagPropertyTypeItem dwtypeid
         * @property {number|Long|null} [dwsortid] tagPropertyTypeItem dwsortid
         * @property {string|null} [sztypename] tagPropertyTypeItem sztypename
         */

        /**
         * Constructs a new tagPropertyTypeItem.
         * @memberof propertyPmd
         * @classdesc Represents a tagPropertyTypeItem.
         * @implements ItagPropertyTypeItem
         * @constructor
         * @param {propertyPmd.ItagPropertyTypeItem=} [properties] Properties to set
         */
        function tagPropertyTypeItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagPropertyTypeItem dwtypeid.
         * @member {number|Long} dwtypeid
         * @memberof propertyPmd.tagPropertyTypeItem
         * @instance
         */
        tagPropertyTypeItem.prototype.dwtypeid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertyTypeItem dwsortid.
         * @member {number|Long} dwsortid
         * @memberof propertyPmd.tagPropertyTypeItem
         * @instance
         */
        tagPropertyTypeItem.prototype.dwsortid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertyTypeItem sztypename.
         * @member {string} sztypename
         * @memberof propertyPmd.tagPropertyTypeItem
         * @instance
         */
        tagPropertyTypeItem.prototype.sztypename = "";

        /**
         * Creates a new tagPropertyTypeItem instance using the specified properties.
         * @function create
         * @memberof propertyPmd.tagPropertyTypeItem
         * @static
         * @param {propertyPmd.ItagPropertyTypeItem=} [properties] Properties to set
         * @returns {propertyPmd.tagPropertyTypeItem} tagPropertyTypeItem instance
         */
        tagPropertyTypeItem.create = function create(properties) {
            return new tagPropertyTypeItem(properties);
        };

        /**
         * Encodes the specified tagPropertyTypeItem message. Does not implicitly {@link propertyPmd.tagPropertyTypeItem.verify|verify} messages.
         * @function encode
         * @memberof propertyPmd.tagPropertyTypeItem
         * @static
         * @param {propertyPmd.ItagPropertyTypeItem} message tagPropertyTypeItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPropertyTypeItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dwtypeid != null && message.hasOwnProperty("dwtypeid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.dwtypeid);
            if (message.dwsortid != null && message.hasOwnProperty("dwsortid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.dwsortid);
            if (message.sztypename != null && message.hasOwnProperty("sztypename"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.sztypename);
            return writer;
        };

        /**
         * Encodes the specified tagPropertyTypeItem message, length delimited. Does not implicitly {@link propertyPmd.tagPropertyTypeItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof propertyPmd.tagPropertyTypeItem
         * @static
         * @param {propertyPmd.ItagPropertyTypeItem} message tagPropertyTypeItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPropertyTypeItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagPropertyTypeItem message from the specified reader or buffer.
         * @function decode
         * @memberof propertyPmd.tagPropertyTypeItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {propertyPmd.tagPropertyTypeItem} tagPropertyTypeItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPropertyTypeItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.propertyPmd.tagPropertyTypeItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dwtypeid = reader.uint64();
                    break;
                case 2:
                    message.dwsortid = reader.uint64();
                    break;
                case 3:
                    message.sztypename = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagPropertyTypeItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof propertyPmd.tagPropertyTypeItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {propertyPmd.tagPropertyTypeItem} tagPropertyTypeItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPropertyTypeItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagPropertyTypeItem message.
         * @function verify
         * @memberof propertyPmd.tagPropertyTypeItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagPropertyTypeItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dwtypeid != null && message.hasOwnProperty("dwtypeid"))
                if (!$util.isInteger(message.dwtypeid) && !(message.dwtypeid && $util.isInteger(message.dwtypeid.low) && $util.isInteger(message.dwtypeid.high)))
                    return "dwtypeid: integer|Long expected";
            if (message.dwsortid != null && message.hasOwnProperty("dwsortid"))
                if (!$util.isInteger(message.dwsortid) && !(message.dwsortid && $util.isInteger(message.dwsortid.low) && $util.isInteger(message.dwsortid.high)))
                    return "dwsortid: integer|Long expected";
            if (message.sztypename != null && message.hasOwnProperty("sztypename"))
                if (!$util.isString(message.sztypename))
                    return "sztypename: string expected";
            return null;
        };

        /**
         * Creates a tagPropertyTypeItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof propertyPmd.tagPropertyTypeItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {propertyPmd.tagPropertyTypeItem} tagPropertyTypeItem
         */
        tagPropertyTypeItem.fromObject = function fromObject(object) {
            if (object instanceof $root.propertyPmd.tagPropertyTypeItem)
                return object;
            var message = new $root.propertyPmd.tagPropertyTypeItem();
            if (object.dwtypeid != null)
                if ($util.Long)
                    (message.dwtypeid = $util.Long.fromValue(object.dwtypeid)).unsigned = true;
                else if (typeof object.dwtypeid === "string")
                    message.dwtypeid = parseInt(object.dwtypeid, 10);
                else if (typeof object.dwtypeid === "number")
                    message.dwtypeid = object.dwtypeid;
                else if (typeof object.dwtypeid === "object")
                    message.dwtypeid = new $util.LongBits(object.dwtypeid.low >>> 0, object.dwtypeid.high >>> 0).toNumber(true);
            if (object.dwsortid != null)
                if ($util.Long)
                    (message.dwsortid = $util.Long.fromValue(object.dwsortid)).unsigned = true;
                else if (typeof object.dwsortid === "string")
                    message.dwsortid = parseInt(object.dwsortid, 10);
                else if (typeof object.dwsortid === "number")
                    message.dwsortid = object.dwsortid;
                else if (typeof object.dwsortid === "object")
                    message.dwsortid = new $util.LongBits(object.dwsortid.low >>> 0, object.dwsortid.high >>> 0).toNumber(true);
            if (object.sztypename != null)
                message.sztypename = String(object.sztypename);
            return message;
        };

        /**
         * Creates a plain object from a tagPropertyTypeItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof propertyPmd.tagPropertyTypeItem
         * @static
         * @param {propertyPmd.tagPropertyTypeItem} message tagPropertyTypeItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagPropertyTypeItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwtypeid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwtypeid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwsortid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwsortid = options.longs === String ? "0" : 0;
                object.sztypename = "";
            }
            if (message.dwtypeid != null && message.hasOwnProperty("dwtypeid"))
                if (typeof message.dwtypeid === "number")
                    object.dwtypeid = options.longs === String ? String(message.dwtypeid) : message.dwtypeid;
                else
                    object.dwtypeid = options.longs === String ? $util.Long.prototype.toString.call(message.dwtypeid) : options.longs === Number ? new $util.LongBits(message.dwtypeid.low >>> 0, message.dwtypeid.high >>> 0).toNumber(true) : message.dwtypeid;
            if (message.dwsortid != null && message.hasOwnProperty("dwsortid"))
                if (typeof message.dwsortid === "number")
                    object.dwsortid = options.longs === String ? String(message.dwsortid) : message.dwsortid;
                else
                    object.dwsortid = options.longs === String ? $util.Long.prototype.toString.call(message.dwsortid) : options.longs === Number ? new $util.LongBits(message.dwsortid.low >>> 0, message.dwsortid.high >>> 0).toNumber(true) : message.dwsortid;
            if (message.sztypename != null && message.hasOwnProperty("sztypename"))
                object.sztypename = message.sztypename;
            return object;
        };

        /**
         * Converts this tagPropertyTypeItem to JSON.
         * @function toJSON
         * @memberof propertyPmd.tagPropertyTypeItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagPropertyTypeItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagPropertyTypeItem;
    })();

    propertyPmd.tagPropertyRelatItem = (function() {

        /**
         * Properties of a tagPropertyRelatItem.
         * @memberof propertyPmd
         * @interface ItagPropertyRelatItem
         * @property {NullPmd.Iresponse|null} [respcmd] tagPropertyRelatItem respcmd
         * @property {number|Long|null} [dwpropertyid] tagPropertyRelatItem dwpropertyid
         * @property {number|Long|null} [dwtypeid] tagPropertyRelatItem dwtypeid
         */

        /**
         * Constructs a new tagPropertyRelatItem.
         * @memberof propertyPmd
         * @classdesc Represents a tagPropertyRelatItem.
         * @implements ItagPropertyRelatItem
         * @constructor
         * @param {propertyPmd.ItagPropertyRelatItem=} [properties] Properties to set
         */
        function tagPropertyRelatItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagPropertyRelatItem respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof propertyPmd.tagPropertyRelatItem
         * @instance
         */
        tagPropertyRelatItem.prototype.respcmd = null;

        /**
         * tagPropertyRelatItem dwpropertyid.
         * @member {number|Long} dwpropertyid
         * @memberof propertyPmd.tagPropertyRelatItem
         * @instance
         */
        tagPropertyRelatItem.prototype.dwpropertyid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertyRelatItem dwtypeid.
         * @member {number|Long} dwtypeid
         * @memberof propertyPmd.tagPropertyRelatItem
         * @instance
         */
        tagPropertyRelatItem.prototype.dwtypeid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new tagPropertyRelatItem instance using the specified properties.
         * @function create
         * @memberof propertyPmd.tagPropertyRelatItem
         * @static
         * @param {propertyPmd.ItagPropertyRelatItem=} [properties] Properties to set
         * @returns {propertyPmd.tagPropertyRelatItem} tagPropertyRelatItem instance
         */
        tagPropertyRelatItem.create = function create(properties) {
            return new tagPropertyRelatItem(properties);
        };

        /**
         * Encodes the specified tagPropertyRelatItem message. Does not implicitly {@link propertyPmd.tagPropertyRelatItem.verify|verify} messages.
         * @function encode
         * @memberof propertyPmd.tagPropertyRelatItem
         * @static
         * @param {propertyPmd.ItagPropertyRelatItem} message tagPropertyRelatItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPropertyRelatItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.dwpropertyid != null && message.hasOwnProperty("dwpropertyid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.dwpropertyid);
            if (message.dwtypeid != null && message.hasOwnProperty("dwtypeid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.dwtypeid);
            return writer;
        };

        /**
         * Encodes the specified tagPropertyRelatItem message, length delimited. Does not implicitly {@link propertyPmd.tagPropertyRelatItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof propertyPmd.tagPropertyRelatItem
         * @static
         * @param {propertyPmd.ItagPropertyRelatItem} message tagPropertyRelatItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPropertyRelatItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagPropertyRelatItem message from the specified reader or buffer.
         * @function decode
         * @memberof propertyPmd.tagPropertyRelatItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {propertyPmd.tagPropertyRelatItem} tagPropertyRelatItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPropertyRelatItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.propertyPmd.tagPropertyRelatItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.dwpropertyid = reader.uint64();
                    break;
                case 3:
                    message.dwtypeid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagPropertyRelatItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof propertyPmd.tagPropertyRelatItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {propertyPmd.tagPropertyRelatItem} tagPropertyRelatItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPropertyRelatItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagPropertyRelatItem message.
         * @function verify
         * @memberof propertyPmd.tagPropertyRelatItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagPropertyRelatItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.dwpropertyid != null && message.hasOwnProperty("dwpropertyid"))
                if (!$util.isInteger(message.dwpropertyid) && !(message.dwpropertyid && $util.isInteger(message.dwpropertyid.low) && $util.isInteger(message.dwpropertyid.high)))
                    return "dwpropertyid: integer|Long expected";
            if (message.dwtypeid != null && message.hasOwnProperty("dwtypeid"))
                if (!$util.isInteger(message.dwtypeid) && !(message.dwtypeid && $util.isInteger(message.dwtypeid.low) && $util.isInteger(message.dwtypeid.high)))
                    return "dwtypeid: integer|Long expected";
            return null;
        };

        /**
         * Creates a tagPropertyRelatItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof propertyPmd.tagPropertyRelatItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {propertyPmd.tagPropertyRelatItem} tagPropertyRelatItem
         */
        tagPropertyRelatItem.fromObject = function fromObject(object) {
            if (object instanceof $root.propertyPmd.tagPropertyRelatItem)
                return object;
            var message = new $root.propertyPmd.tagPropertyRelatItem();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".propertyPmd.tagPropertyRelatItem.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.dwpropertyid != null)
                if ($util.Long)
                    (message.dwpropertyid = $util.Long.fromValue(object.dwpropertyid)).unsigned = true;
                else if (typeof object.dwpropertyid === "string")
                    message.dwpropertyid = parseInt(object.dwpropertyid, 10);
                else if (typeof object.dwpropertyid === "number")
                    message.dwpropertyid = object.dwpropertyid;
                else if (typeof object.dwpropertyid === "object")
                    message.dwpropertyid = new $util.LongBits(object.dwpropertyid.low >>> 0, object.dwpropertyid.high >>> 0).toNumber(true);
            if (object.dwtypeid != null)
                if ($util.Long)
                    (message.dwtypeid = $util.Long.fromValue(object.dwtypeid)).unsigned = true;
                else if (typeof object.dwtypeid === "string")
                    message.dwtypeid = parseInt(object.dwtypeid, 10);
                else if (typeof object.dwtypeid === "number")
                    message.dwtypeid = object.dwtypeid;
                else if (typeof object.dwtypeid === "object")
                    message.dwtypeid = new $util.LongBits(object.dwtypeid.low >>> 0, object.dwtypeid.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a tagPropertyRelatItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof propertyPmd.tagPropertyRelatItem
         * @static
         * @param {propertyPmd.tagPropertyRelatItem} message tagPropertyRelatItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagPropertyRelatItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.respcmd = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwpropertyid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwpropertyid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwtypeid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwtypeid = options.longs === String ? "0" : 0;
            }
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.dwpropertyid != null && message.hasOwnProperty("dwpropertyid"))
                if (typeof message.dwpropertyid === "number")
                    object.dwpropertyid = options.longs === String ? String(message.dwpropertyid) : message.dwpropertyid;
                else
                    object.dwpropertyid = options.longs === String ? $util.Long.prototype.toString.call(message.dwpropertyid) : options.longs === Number ? new $util.LongBits(message.dwpropertyid.low >>> 0, message.dwpropertyid.high >>> 0).toNumber(true) : message.dwpropertyid;
            if (message.dwtypeid != null && message.hasOwnProperty("dwtypeid"))
                if (typeof message.dwtypeid === "number")
                    object.dwtypeid = options.longs === String ? String(message.dwtypeid) : message.dwtypeid;
                else
                    object.dwtypeid = options.longs === String ? $util.Long.prototype.toString.call(message.dwtypeid) : options.longs === Number ? new $util.LongBits(message.dwtypeid.low >>> 0, message.dwtypeid.high >>> 0).toNumber(true) : message.dwtypeid;
            return object;
        };

        /**
         * Converts this tagPropertyRelatItem to JSON.
         * @function toJSON
         * @memberof propertyPmd.tagPropertyRelatItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagPropertyRelatItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagPropertyRelatItem;
    })();

    propertyPmd.tagPropertyItem = (function() {

        /**
         * Properties of a tagPropertyItem.
         * @memberof propertyPmd
         * @interface ItagPropertyItem
         * @property {number|Long|null} [dwpropertyid] tagPropertyItem dwpropertyid
         * @property {number|Long|null} [dwpropertykind] tagPropertyItem dwpropertykind
         * @property {number|null} [cbusearea] tagPropertyItem cbusearea
         * @property {number|null} [cbservicearea] tagPropertyItem cbservicearea
         * @property {number|null} [cbrecommend] tagPropertyItem cbrecommend
         * @property {number|Long|null} [dwexchangeratio] tagPropertyItem dwexchangeratio
         * @property {number|Long|null} [lpropertydiamond] tagPropertyItem lpropertydiamond
         * @property {number|Long|null} [lpropertygold] tagPropertyItem lpropertygold
         * @property {number|null} [dpropertycash] tagPropertyItem dpropertycash
         * @property {number|Long|null} [lpropertyusermedal] tagPropertyItem lpropertyusermedal
         * @property {number|Long|null} [lpropertyloveliness] tagPropertyItem lpropertyloveliness
         * @property {number|Long|null} [lsendloveliness] tagPropertyItem lsendloveliness
         * @property {number|Long|null} [lrecvloveliness] tagPropertyItem lrecvloveliness
         * @property {number|Long|null} [luseresultsgold] tagPropertyItem luseresultsgold
         * @property {number|Long|null} [dwuseresultsvalidtime] tagPropertyItem dwuseresultsvalidtime
         * @property {number|Long|null} [dwuseresultsvalidtimescoremultiple] tagPropertyItem dwuseresultsvalidtimescoremultiple
         * @property {number|Long|null} [dwuseresultsgiftpackage] tagPropertyItem dwuseresultsgiftpackage
         * @property {number|Long|null} [dwsortid] tagPropertyItem dwsortid
         * @property {string|null} [szname] tagPropertyItem szname
         * @property {string|null} [szregulationsinfo] tagPropertyItem szregulationsinfo
         */

        /**
         * Constructs a new tagPropertyItem.
         * @memberof propertyPmd
         * @classdesc Represents a tagPropertyItem.
         * @implements ItagPropertyItem
         * @constructor
         * @param {propertyPmd.ItagPropertyItem=} [properties] Properties to set
         */
        function tagPropertyItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagPropertyItem dwpropertyid.
         * @member {number|Long} dwpropertyid
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.dwpropertyid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertyItem dwpropertykind.
         * @member {number|Long} dwpropertykind
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.dwpropertykind = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertyItem cbusearea.
         * @member {number} cbusearea
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.cbusearea = 0;

        /**
         * tagPropertyItem cbservicearea.
         * @member {number} cbservicearea
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.cbservicearea = 0;

        /**
         * tagPropertyItem cbrecommend.
         * @member {number} cbrecommend
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.cbrecommend = 0;

        /**
         * tagPropertyItem dwexchangeratio.
         * @member {number|Long} dwexchangeratio
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.dwexchangeratio = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertyItem lpropertydiamond.
         * @member {number|Long} lpropertydiamond
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.lpropertydiamond = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertyItem lpropertygold.
         * @member {number|Long} lpropertygold
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.lpropertygold = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertyItem dpropertycash.
         * @member {number} dpropertycash
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.dpropertycash = 0;

        /**
         * tagPropertyItem lpropertyusermedal.
         * @member {number|Long} lpropertyusermedal
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.lpropertyusermedal = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertyItem lpropertyloveliness.
         * @member {number|Long} lpropertyloveliness
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.lpropertyloveliness = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertyItem lsendloveliness.
         * @member {number|Long} lsendloveliness
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.lsendloveliness = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertyItem lrecvloveliness.
         * @member {number|Long} lrecvloveliness
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.lrecvloveliness = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertyItem luseresultsgold.
         * @member {number|Long} luseresultsgold
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.luseresultsgold = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertyItem dwuseresultsvalidtime.
         * @member {number|Long} dwuseresultsvalidtime
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.dwuseresultsvalidtime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertyItem dwuseresultsvalidtimescoremultiple.
         * @member {number|Long} dwuseresultsvalidtimescoremultiple
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.dwuseresultsvalidtimescoremultiple = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertyItem dwuseresultsgiftpackage.
         * @member {number|Long} dwuseresultsgiftpackage
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.dwuseresultsgiftpackage = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertyItem dwsortid.
         * @member {number|Long} dwsortid
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.dwsortid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertyItem szname.
         * @member {string} szname
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.szname = "";

        /**
         * tagPropertyItem szregulationsinfo.
         * @member {string} szregulationsinfo
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         */
        tagPropertyItem.prototype.szregulationsinfo = "";

        /**
         * Creates a new tagPropertyItem instance using the specified properties.
         * @function create
         * @memberof propertyPmd.tagPropertyItem
         * @static
         * @param {propertyPmd.ItagPropertyItem=} [properties] Properties to set
         * @returns {propertyPmd.tagPropertyItem} tagPropertyItem instance
         */
        tagPropertyItem.create = function create(properties) {
            return new tagPropertyItem(properties);
        };

        /**
         * Encodes the specified tagPropertyItem message. Does not implicitly {@link propertyPmd.tagPropertyItem.verify|verify} messages.
         * @function encode
         * @memberof propertyPmd.tagPropertyItem
         * @static
         * @param {propertyPmd.ItagPropertyItem} message tagPropertyItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPropertyItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dwpropertyid != null && message.hasOwnProperty("dwpropertyid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.dwpropertyid);
            if (message.dwpropertykind != null && message.hasOwnProperty("dwpropertykind"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.dwpropertykind);
            if (message.cbusearea != null && message.hasOwnProperty("cbusearea"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cbusearea);
            if (message.cbservicearea != null && message.hasOwnProperty("cbservicearea"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.cbservicearea);
            if (message.cbrecommend != null && message.hasOwnProperty("cbrecommend"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cbrecommend);
            if (message.dwexchangeratio != null && message.hasOwnProperty("dwexchangeratio"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.dwexchangeratio);
            if (message.lpropertydiamond != null && message.hasOwnProperty("lpropertydiamond"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.lpropertydiamond);
            if (message.lpropertygold != null && message.hasOwnProperty("lpropertygold"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.lpropertygold);
            if (message.dpropertycash != null && message.hasOwnProperty("dpropertycash"))
                writer.uint32(/* id 9, wireType 1 =*/73).double(message.dpropertycash);
            if (message.lpropertyusermedal != null && message.hasOwnProperty("lpropertyusermedal"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.lpropertyusermedal);
            if (message.lpropertyloveliness != null && message.hasOwnProperty("lpropertyloveliness"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.lpropertyloveliness);
            if (message.lsendloveliness != null && message.hasOwnProperty("lsendloveliness"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.lsendloveliness);
            if (message.lrecvloveliness != null && message.hasOwnProperty("lrecvloveliness"))
                writer.uint32(/* id 13, wireType 0 =*/104).uint64(message.lrecvloveliness);
            if (message.luseresultsgold != null && message.hasOwnProperty("luseresultsgold"))
                writer.uint32(/* id 14, wireType 0 =*/112).uint64(message.luseresultsgold);
            if (message.dwuseresultsvalidtime != null && message.hasOwnProperty("dwuseresultsvalidtime"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint64(message.dwuseresultsvalidtime);
            if (message.dwuseresultsvalidtimescoremultiple != null && message.hasOwnProperty("dwuseresultsvalidtimescoremultiple"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint64(message.dwuseresultsvalidtimescoremultiple);
            if (message.dwuseresultsgiftpackage != null && message.hasOwnProperty("dwuseresultsgiftpackage"))
                writer.uint32(/* id 17, wireType 0 =*/136).uint64(message.dwuseresultsgiftpackage);
            if (message.dwsortid != null && message.hasOwnProperty("dwsortid"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint64(message.dwsortid);
            if (message.szname != null && message.hasOwnProperty("szname"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.szname);
            if (message.szregulationsinfo != null && message.hasOwnProperty("szregulationsinfo"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.szregulationsinfo);
            return writer;
        };

        /**
         * Encodes the specified tagPropertyItem message, length delimited. Does not implicitly {@link propertyPmd.tagPropertyItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof propertyPmd.tagPropertyItem
         * @static
         * @param {propertyPmd.ItagPropertyItem} message tagPropertyItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPropertyItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagPropertyItem message from the specified reader or buffer.
         * @function decode
         * @memberof propertyPmd.tagPropertyItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {propertyPmd.tagPropertyItem} tagPropertyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPropertyItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.propertyPmd.tagPropertyItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dwpropertyid = reader.uint64();
                    break;
                case 2:
                    message.dwpropertykind = reader.uint64();
                    break;
                case 3:
                    message.cbusearea = reader.int32();
                    break;
                case 4:
                    message.cbservicearea = reader.int32();
                    break;
                case 5:
                    message.cbrecommend = reader.int32();
                    break;
                case 6:
                    message.dwexchangeratio = reader.uint64();
                    break;
                case 7:
                    message.lpropertydiamond = reader.uint64();
                    break;
                case 8:
                    message.lpropertygold = reader.uint64();
                    break;
                case 9:
                    message.dpropertycash = reader.double();
                    break;
                case 10:
                    message.lpropertyusermedal = reader.uint64();
                    break;
                case 11:
                    message.lpropertyloveliness = reader.uint64();
                    break;
                case 12:
                    message.lsendloveliness = reader.uint64();
                    break;
                case 13:
                    message.lrecvloveliness = reader.uint64();
                    break;
                case 14:
                    message.luseresultsgold = reader.uint64();
                    break;
                case 15:
                    message.dwuseresultsvalidtime = reader.uint64();
                    break;
                case 16:
                    message.dwuseresultsvalidtimescoremultiple = reader.uint64();
                    break;
                case 17:
                    message.dwuseresultsgiftpackage = reader.uint64();
                    break;
                case 18:
                    message.dwsortid = reader.uint64();
                    break;
                case 19:
                    message.szname = reader.string();
                    break;
                case 20:
                    message.szregulationsinfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagPropertyItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof propertyPmd.tagPropertyItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {propertyPmd.tagPropertyItem} tagPropertyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPropertyItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagPropertyItem message.
         * @function verify
         * @memberof propertyPmd.tagPropertyItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagPropertyItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dwpropertyid != null && message.hasOwnProperty("dwpropertyid"))
                if (!$util.isInteger(message.dwpropertyid) && !(message.dwpropertyid && $util.isInteger(message.dwpropertyid.low) && $util.isInteger(message.dwpropertyid.high)))
                    return "dwpropertyid: integer|Long expected";
            if (message.dwpropertykind != null && message.hasOwnProperty("dwpropertykind"))
                if (!$util.isInteger(message.dwpropertykind) && !(message.dwpropertykind && $util.isInteger(message.dwpropertykind.low) && $util.isInteger(message.dwpropertykind.high)))
                    return "dwpropertykind: integer|Long expected";
            if (message.cbusearea != null && message.hasOwnProperty("cbusearea"))
                if (!$util.isInteger(message.cbusearea))
                    return "cbusearea: integer expected";
            if (message.cbservicearea != null && message.hasOwnProperty("cbservicearea"))
                if (!$util.isInteger(message.cbservicearea))
                    return "cbservicearea: integer expected";
            if (message.cbrecommend != null && message.hasOwnProperty("cbrecommend"))
                if (!$util.isInteger(message.cbrecommend))
                    return "cbrecommend: integer expected";
            if (message.dwexchangeratio != null && message.hasOwnProperty("dwexchangeratio"))
                if (!$util.isInteger(message.dwexchangeratio) && !(message.dwexchangeratio && $util.isInteger(message.dwexchangeratio.low) && $util.isInteger(message.dwexchangeratio.high)))
                    return "dwexchangeratio: integer|Long expected";
            if (message.lpropertydiamond != null && message.hasOwnProperty("lpropertydiamond"))
                if (!$util.isInteger(message.lpropertydiamond) && !(message.lpropertydiamond && $util.isInteger(message.lpropertydiamond.low) && $util.isInteger(message.lpropertydiamond.high)))
                    return "lpropertydiamond: integer|Long expected";
            if (message.lpropertygold != null && message.hasOwnProperty("lpropertygold"))
                if (!$util.isInteger(message.lpropertygold) && !(message.lpropertygold && $util.isInteger(message.lpropertygold.low) && $util.isInteger(message.lpropertygold.high)))
                    return "lpropertygold: integer|Long expected";
            if (message.dpropertycash != null && message.hasOwnProperty("dpropertycash"))
                if (typeof message.dpropertycash !== "number")
                    return "dpropertycash: number expected";
            if (message.lpropertyusermedal != null && message.hasOwnProperty("lpropertyusermedal"))
                if (!$util.isInteger(message.lpropertyusermedal) && !(message.lpropertyusermedal && $util.isInteger(message.lpropertyusermedal.low) && $util.isInteger(message.lpropertyusermedal.high)))
                    return "lpropertyusermedal: integer|Long expected";
            if (message.lpropertyloveliness != null && message.hasOwnProperty("lpropertyloveliness"))
                if (!$util.isInteger(message.lpropertyloveliness) && !(message.lpropertyloveliness && $util.isInteger(message.lpropertyloveliness.low) && $util.isInteger(message.lpropertyloveliness.high)))
                    return "lpropertyloveliness: integer|Long expected";
            if (message.lsendloveliness != null && message.hasOwnProperty("lsendloveliness"))
                if (!$util.isInteger(message.lsendloveliness) && !(message.lsendloveliness && $util.isInteger(message.lsendloveliness.low) && $util.isInteger(message.lsendloveliness.high)))
                    return "lsendloveliness: integer|Long expected";
            if (message.lrecvloveliness != null && message.hasOwnProperty("lrecvloveliness"))
                if (!$util.isInteger(message.lrecvloveliness) && !(message.lrecvloveliness && $util.isInteger(message.lrecvloveliness.low) && $util.isInteger(message.lrecvloveliness.high)))
                    return "lrecvloveliness: integer|Long expected";
            if (message.luseresultsgold != null && message.hasOwnProperty("luseresultsgold"))
                if (!$util.isInteger(message.luseresultsgold) && !(message.luseresultsgold && $util.isInteger(message.luseresultsgold.low) && $util.isInteger(message.luseresultsgold.high)))
                    return "luseresultsgold: integer|Long expected";
            if (message.dwuseresultsvalidtime != null && message.hasOwnProperty("dwuseresultsvalidtime"))
                if (!$util.isInteger(message.dwuseresultsvalidtime) && !(message.dwuseresultsvalidtime && $util.isInteger(message.dwuseresultsvalidtime.low) && $util.isInteger(message.dwuseresultsvalidtime.high)))
                    return "dwuseresultsvalidtime: integer|Long expected";
            if (message.dwuseresultsvalidtimescoremultiple != null && message.hasOwnProperty("dwuseresultsvalidtimescoremultiple"))
                if (!$util.isInteger(message.dwuseresultsvalidtimescoremultiple) && !(message.dwuseresultsvalidtimescoremultiple && $util.isInteger(message.dwuseresultsvalidtimescoremultiple.low) && $util.isInteger(message.dwuseresultsvalidtimescoremultiple.high)))
                    return "dwuseresultsvalidtimescoremultiple: integer|Long expected";
            if (message.dwuseresultsgiftpackage != null && message.hasOwnProperty("dwuseresultsgiftpackage"))
                if (!$util.isInteger(message.dwuseresultsgiftpackage) && !(message.dwuseresultsgiftpackage && $util.isInteger(message.dwuseresultsgiftpackage.low) && $util.isInteger(message.dwuseresultsgiftpackage.high)))
                    return "dwuseresultsgiftpackage: integer|Long expected";
            if (message.dwsortid != null && message.hasOwnProperty("dwsortid"))
                if (!$util.isInteger(message.dwsortid) && !(message.dwsortid && $util.isInteger(message.dwsortid.low) && $util.isInteger(message.dwsortid.high)))
                    return "dwsortid: integer|Long expected";
            if (message.szname != null && message.hasOwnProperty("szname"))
                if (!$util.isString(message.szname))
                    return "szname: string expected";
            if (message.szregulationsinfo != null && message.hasOwnProperty("szregulationsinfo"))
                if (!$util.isString(message.szregulationsinfo))
                    return "szregulationsinfo: string expected";
            return null;
        };

        /**
         * Creates a tagPropertyItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof propertyPmd.tagPropertyItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {propertyPmd.tagPropertyItem} tagPropertyItem
         */
        tagPropertyItem.fromObject = function fromObject(object) {
            if (object instanceof $root.propertyPmd.tagPropertyItem)
                return object;
            var message = new $root.propertyPmd.tagPropertyItem();
            if (object.dwpropertyid != null)
                if ($util.Long)
                    (message.dwpropertyid = $util.Long.fromValue(object.dwpropertyid)).unsigned = true;
                else if (typeof object.dwpropertyid === "string")
                    message.dwpropertyid = parseInt(object.dwpropertyid, 10);
                else if (typeof object.dwpropertyid === "number")
                    message.dwpropertyid = object.dwpropertyid;
                else if (typeof object.dwpropertyid === "object")
                    message.dwpropertyid = new $util.LongBits(object.dwpropertyid.low >>> 0, object.dwpropertyid.high >>> 0).toNumber(true);
            if (object.dwpropertykind != null)
                if ($util.Long)
                    (message.dwpropertykind = $util.Long.fromValue(object.dwpropertykind)).unsigned = true;
                else if (typeof object.dwpropertykind === "string")
                    message.dwpropertykind = parseInt(object.dwpropertykind, 10);
                else if (typeof object.dwpropertykind === "number")
                    message.dwpropertykind = object.dwpropertykind;
                else if (typeof object.dwpropertykind === "object")
                    message.dwpropertykind = new $util.LongBits(object.dwpropertykind.low >>> 0, object.dwpropertykind.high >>> 0).toNumber(true);
            if (object.cbusearea != null)
                message.cbusearea = object.cbusearea | 0;
            if (object.cbservicearea != null)
                message.cbservicearea = object.cbservicearea | 0;
            if (object.cbrecommend != null)
                message.cbrecommend = object.cbrecommend | 0;
            if (object.dwexchangeratio != null)
                if ($util.Long)
                    (message.dwexchangeratio = $util.Long.fromValue(object.dwexchangeratio)).unsigned = true;
                else if (typeof object.dwexchangeratio === "string")
                    message.dwexchangeratio = parseInt(object.dwexchangeratio, 10);
                else if (typeof object.dwexchangeratio === "number")
                    message.dwexchangeratio = object.dwexchangeratio;
                else if (typeof object.dwexchangeratio === "object")
                    message.dwexchangeratio = new $util.LongBits(object.dwexchangeratio.low >>> 0, object.dwexchangeratio.high >>> 0).toNumber(true);
            if (object.lpropertydiamond != null)
                if ($util.Long)
                    (message.lpropertydiamond = $util.Long.fromValue(object.lpropertydiamond)).unsigned = true;
                else if (typeof object.lpropertydiamond === "string")
                    message.lpropertydiamond = parseInt(object.lpropertydiamond, 10);
                else if (typeof object.lpropertydiamond === "number")
                    message.lpropertydiamond = object.lpropertydiamond;
                else if (typeof object.lpropertydiamond === "object")
                    message.lpropertydiamond = new $util.LongBits(object.lpropertydiamond.low >>> 0, object.lpropertydiamond.high >>> 0).toNumber(true);
            if (object.lpropertygold != null)
                if ($util.Long)
                    (message.lpropertygold = $util.Long.fromValue(object.lpropertygold)).unsigned = true;
                else if (typeof object.lpropertygold === "string")
                    message.lpropertygold = parseInt(object.lpropertygold, 10);
                else if (typeof object.lpropertygold === "number")
                    message.lpropertygold = object.lpropertygold;
                else if (typeof object.lpropertygold === "object")
                    message.lpropertygold = new $util.LongBits(object.lpropertygold.low >>> 0, object.lpropertygold.high >>> 0).toNumber(true);
            if (object.dpropertycash != null)
                message.dpropertycash = Number(object.dpropertycash);
            if (object.lpropertyusermedal != null)
                if ($util.Long)
                    (message.lpropertyusermedal = $util.Long.fromValue(object.lpropertyusermedal)).unsigned = true;
                else if (typeof object.lpropertyusermedal === "string")
                    message.lpropertyusermedal = parseInt(object.lpropertyusermedal, 10);
                else if (typeof object.lpropertyusermedal === "number")
                    message.lpropertyusermedal = object.lpropertyusermedal;
                else if (typeof object.lpropertyusermedal === "object")
                    message.lpropertyusermedal = new $util.LongBits(object.lpropertyusermedal.low >>> 0, object.lpropertyusermedal.high >>> 0).toNumber(true);
            if (object.lpropertyloveliness != null)
                if ($util.Long)
                    (message.lpropertyloveliness = $util.Long.fromValue(object.lpropertyloveliness)).unsigned = true;
                else if (typeof object.lpropertyloveliness === "string")
                    message.lpropertyloveliness = parseInt(object.lpropertyloveliness, 10);
                else if (typeof object.lpropertyloveliness === "number")
                    message.lpropertyloveliness = object.lpropertyloveliness;
                else if (typeof object.lpropertyloveliness === "object")
                    message.lpropertyloveliness = new $util.LongBits(object.lpropertyloveliness.low >>> 0, object.lpropertyloveliness.high >>> 0).toNumber(true);
            if (object.lsendloveliness != null)
                if ($util.Long)
                    (message.lsendloveliness = $util.Long.fromValue(object.lsendloveliness)).unsigned = true;
                else if (typeof object.lsendloveliness === "string")
                    message.lsendloveliness = parseInt(object.lsendloveliness, 10);
                else if (typeof object.lsendloveliness === "number")
                    message.lsendloveliness = object.lsendloveliness;
                else if (typeof object.lsendloveliness === "object")
                    message.lsendloveliness = new $util.LongBits(object.lsendloveliness.low >>> 0, object.lsendloveliness.high >>> 0).toNumber(true);
            if (object.lrecvloveliness != null)
                if ($util.Long)
                    (message.lrecvloveliness = $util.Long.fromValue(object.lrecvloveliness)).unsigned = true;
                else if (typeof object.lrecvloveliness === "string")
                    message.lrecvloveliness = parseInt(object.lrecvloveliness, 10);
                else if (typeof object.lrecvloveliness === "number")
                    message.lrecvloveliness = object.lrecvloveliness;
                else if (typeof object.lrecvloveliness === "object")
                    message.lrecvloveliness = new $util.LongBits(object.lrecvloveliness.low >>> 0, object.lrecvloveliness.high >>> 0).toNumber(true);
            if (object.luseresultsgold != null)
                if ($util.Long)
                    (message.luseresultsgold = $util.Long.fromValue(object.luseresultsgold)).unsigned = true;
                else if (typeof object.luseresultsgold === "string")
                    message.luseresultsgold = parseInt(object.luseresultsgold, 10);
                else if (typeof object.luseresultsgold === "number")
                    message.luseresultsgold = object.luseresultsgold;
                else if (typeof object.luseresultsgold === "object")
                    message.luseresultsgold = new $util.LongBits(object.luseresultsgold.low >>> 0, object.luseresultsgold.high >>> 0).toNumber(true);
            if (object.dwuseresultsvalidtime != null)
                if ($util.Long)
                    (message.dwuseresultsvalidtime = $util.Long.fromValue(object.dwuseresultsvalidtime)).unsigned = true;
                else if (typeof object.dwuseresultsvalidtime === "string")
                    message.dwuseresultsvalidtime = parseInt(object.dwuseresultsvalidtime, 10);
                else if (typeof object.dwuseresultsvalidtime === "number")
                    message.dwuseresultsvalidtime = object.dwuseresultsvalidtime;
                else if (typeof object.dwuseresultsvalidtime === "object")
                    message.dwuseresultsvalidtime = new $util.LongBits(object.dwuseresultsvalidtime.low >>> 0, object.dwuseresultsvalidtime.high >>> 0).toNumber(true);
            if (object.dwuseresultsvalidtimescoremultiple != null)
                if ($util.Long)
                    (message.dwuseresultsvalidtimescoremultiple = $util.Long.fromValue(object.dwuseresultsvalidtimescoremultiple)).unsigned = true;
                else if (typeof object.dwuseresultsvalidtimescoremultiple === "string")
                    message.dwuseresultsvalidtimescoremultiple = parseInt(object.dwuseresultsvalidtimescoremultiple, 10);
                else if (typeof object.dwuseresultsvalidtimescoremultiple === "number")
                    message.dwuseresultsvalidtimescoremultiple = object.dwuseresultsvalidtimescoremultiple;
                else if (typeof object.dwuseresultsvalidtimescoremultiple === "object")
                    message.dwuseresultsvalidtimescoremultiple = new $util.LongBits(object.dwuseresultsvalidtimescoremultiple.low >>> 0, object.dwuseresultsvalidtimescoremultiple.high >>> 0).toNumber(true);
            if (object.dwuseresultsgiftpackage != null)
                if ($util.Long)
                    (message.dwuseresultsgiftpackage = $util.Long.fromValue(object.dwuseresultsgiftpackage)).unsigned = true;
                else if (typeof object.dwuseresultsgiftpackage === "string")
                    message.dwuseresultsgiftpackage = parseInt(object.dwuseresultsgiftpackage, 10);
                else if (typeof object.dwuseresultsgiftpackage === "number")
                    message.dwuseresultsgiftpackage = object.dwuseresultsgiftpackage;
                else if (typeof object.dwuseresultsgiftpackage === "object")
                    message.dwuseresultsgiftpackage = new $util.LongBits(object.dwuseresultsgiftpackage.low >>> 0, object.dwuseresultsgiftpackage.high >>> 0).toNumber(true);
            if (object.dwsortid != null)
                if ($util.Long)
                    (message.dwsortid = $util.Long.fromValue(object.dwsortid)).unsigned = true;
                else if (typeof object.dwsortid === "string")
                    message.dwsortid = parseInt(object.dwsortid, 10);
                else if (typeof object.dwsortid === "number")
                    message.dwsortid = object.dwsortid;
                else if (typeof object.dwsortid === "object")
                    message.dwsortid = new $util.LongBits(object.dwsortid.low >>> 0, object.dwsortid.high >>> 0).toNumber(true);
            if (object.szname != null)
                message.szname = String(object.szname);
            if (object.szregulationsinfo != null)
                message.szregulationsinfo = String(object.szregulationsinfo);
            return message;
        };

        /**
         * Creates a plain object from a tagPropertyItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof propertyPmd.tagPropertyItem
         * @static
         * @param {propertyPmd.tagPropertyItem} message tagPropertyItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagPropertyItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwpropertyid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwpropertyid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwpropertykind = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwpropertykind = options.longs === String ? "0" : 0;
                object.cbusearea = 0;
                object.cbservicearea = 0;
                object.cbrecommend = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwexchangeratio = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwexchangeratio = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lpropertydiamond = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lpropertydiamond = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lpropertygold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lpropertygold = options.longs === String ? "0" : 0;
                object.dpropertycash = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lpropertyusermedal = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lpropertyusermedal = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lpropertyloveliness = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lpropertyloveliness = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lsendloveliness = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lsendloveliness = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.lrecvloveliness = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lrecvloveliness = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.luseresultsgold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.luseresultsgold = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwuseresultsvalidtime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwuseresultsvalidtime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwuseresultsvalidtimescoremultiple = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwuseresultsvalidtimescoremultiple = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwuseresultsgiftpackage = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwuseresultsgiftpackage = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwsortid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwsortid = options.longs === String ? "0" : 0;
                object.szname = "";
                object.szregulationsinfo = "";
            }
            if (message.dwpropertyid != null && message.hasOwnProperty("dwpropertyid"))
                if (typeof message.dwpropertyid === "number")
                    object.dwpropertyid = options.longs === String ? String(message.dwpropertyid) : message.dwpropertyid;
                else
                    object.dwpropertyid = options.longs === String ? $util.Long.prototype.toString.call(message.dwpropertyid) : options.longs === Number ? new $util.LongBits(message.dwpropertyid.low >>> 0, message.dwpropertyid.high >>> 0).toNumber(true) : message.dwpropertyid;
            if (message.dwpropertykind != null && message.hasOwnProperty("dwpropertykind"))
                if (typeof message.dwpropertykind === "number")
                    object.dwpropertykind = options.longs === String ? String(message.dwpropertykind) : message.dwpropertykind;
                else
                    object.dwpropertykind = options.longs === String ? $util.Long.prototype.toString.call(message.dwpropertykind) : options.longs === Number ? new $util.LongBits(message.dwpropertykind.low >>> 0, message.dwpropertykind.high >>> 0).toNumber(true) : message.dwpropertykind;
            if (message.cbusearea != null && message.hasOwnProperty("cbusearea"))
                object.cbusearea = message.cbusearea;
            if (message.cbservicearea != null && message.hasOwnProperty("cbservicearea"))
                object.cbservicearea = message.cbservicearea;
            if (message.cbrecommend != null && message.hasOwnProperty("cbrecommend"))
                object.cbrecommend = message.cbrecommend;
            if (message.dwexchangeratio != null && message.hasOwnProperty("dwexchangeratio"))
                if (typeof message.dwexchangeratio === "number")
                    object.dwexchangeratio = options.longs === String ? String(message.dwexchangeratio) : message.dwexchangeratio;
                else
                    object.dwexchangeratio = options.longs === String ? $util.Long.prototype.toString.call(message.dwexchangeratio) : options.longs === Number ? new $util.LongBits(message.dwexchangeratio.low >>> 0, message.dwexchangeratio.high >>> 0).toNumber(true) : message.dwexchangeratio;
            if (message.lpropertydiamond != null && message.hasOwnProperty("lpropertydiamond"))
                if (typeof message.lpropertydiamond === "number")
                    object.lpropertydiamond = options.longs === String ? String(message.lpropertydiamond) : message.lpropertydiamond;
                else
                    object.lpropertydiamond = options.longs === String ? $util.Long.prototype.toString.call(message.lpropertydiamond) : options.longs === Number ? new $util.LongBits(message.lpropertydiamond.low >>> 0, message.lpropertydiamond.high >>> 0).toNumber(true) : message.lpropertydiamond;
            if (message.lpropertygold != null && message.hasOwnProperty("lpropertygold"))
                if (typeof message.lpropertygold === "number")
                    object.lpropertygold = options.longs === String ? String(message.lpropertygold) : message.lpropertygold;
                else
                    object.lpropertygold = options.longs === String ? $util.Long.prototype.toString.call(message.lpropertygold) : options.longs === Number ? new $util.LongBits(message.lpropertygold.low >>> 0, message.lpropertygold.high >>> 0).toNumber(true) : message.lpropertygold;
            if (message.dpropertycash != null && message.hasOwnProperty("dpropertycash"))
                object.dpropertycash = options.json && !isFinite(message.dpropertycash) ? String(message.dpropertycash) : message.dpropertycash;
            if (message.lpropertyusermedal != null && message.hasOwnProperty("lpropertyusermedal"))
                if (typeof message.lpropertyusermedal === "number")
                    object.lpropertyusermedal = options.longs === String ? String(message.lpropertyusermedal) : message.lpropertyusermedal;
                else
                    object.lpropertyusermedal = options.longs === String ? $util.Long.prototype.toString.call(message.lpropertyusermedal) : options.longs === Number ? new $util.LongBits(message.lpropertyusermedal.low >>> 0, message.lpropertyusermedal.high >>> 0).toNumber(true) : message.lpropertyusermedal;
            if (message.lpropertyloveliness != null && message.hasOwnProperty("lpropertyloveliness"))
                if (typeof message.lpropertyloveliness === "number")
                    object.lpropertyloveliness = options.longs === String ? String(message.lpropertyloveliness) : message.lpropertyloveliness;
                else
                    object.lpropertyloveliness = options.longs === String ? $util.Long.prototype.toString.call(message.lpropertyloveliness) : options.longs === Number ? new $util.LongBits(message.lpropertyloveliness.low >>> 0, message.lpropertyloveliness.high >>> 0).toNumber(true) : message.lpropertyloveliness;
            if (message.lsendloveliness != null && message.hasOwnProperty("lsendloveliness"))
                if (typeof message.lsendloveliness === "number")
                    object.lsendloveliness = options.longs === String ? String(message.lsendloveliness) : message.lsendloveliness;
                else
                    object.lsendloveliness = options.longs === String ? $util.Long.prototype.toString.call(message.lsendloveliness) : options.longs === Number ? new $util.LongBits(message.lsendloveliness.low >>> 0, message.lsendloveliness.high >>> 0).toNumber(true) : message.lsendloveliness;
            if (message.lrecvloveliness != null && message.hasOwnProperty("lrecvloveliness"))
                if (typeof message.lrecvloveliness === "number")
                    object.lrecvloveliness = options.longs === String ? String(message.lrecvloveliness) : message.lrecvloveliness;
                else
                    object.lrecvloveliness = options.longs === String ? $util.Long.prototype.toString.call(message.lrecvloveliness) : options.longs === Number ? new $util.LongBits(message.lrecvloveliness.low >>> 0, message.lrecvloveliness.high >>> 0).toNumber(true) : message.lrecvloveliness;
            if (message.luseresultsgold != null && message.hasOwnProperty("luseresultsgold"))
                if (typeof message.luseresultsgold === "number")
                    object.luseresultsgold = options.longs === String ? String(message.luseresultsgold) : message.luseresultsgold;
                else
                    object.luseresultsgold = options.longs === String ? $util.Long.prototype.toString.call(message.luseresultsgold) : options.longs === Number ? new $util.LongBits(message.luseresultsgold.low >>> 0, message.luseresultsgold.high >>> 0).toNumber(true) : message.luseresultsgold;
            if (message.dwuseresultsvalidtime != null && message.hasOwnProperty("dwuseresultsvalidtime"))
                if (typeof message.dwuseresultsvalidtime === "number")
                    object.dwuseresultsvalidtime = options.longs === String ? String(message.dwuseresultsvalidtime) : message.dwuseresultsvalidtime;
                else
                    object.dwuseresultsvalidtime = options.longs === String ? $util.Long.prototype.toString.call(message.dwuseresultsvalidtime) : options.longs === Number ? new $util.LongBits(message.dwuseresultsvalidtime.low >>> 0, message.dwuseresultsvalidtime.high >>> 0).toNumber(true) : message.dwuseresultsvalidtime;
            if (message.dwuseresultsvalidtimescoremultiple != null && message.hasOwnProperty("dwuseresultsvalidtimescoremultiple"))
                if (typeof message.dwuseresultsvalidtimescoremultiple === "number")
                    object.dwuseresultsvalidtimescoremultiple = options.longs === String ? String(message.dwuseresultsvalidtimescoremultiple) : message.dwuseresultsvalidtimescoremultiple;
                else
                    object.dwuseresultsvalidtimescoremultiple = options.longs === String ? $util.Long.prototype.toString.call(message.dwuseresultsvalidtimescoremultiple) : options.longs === Number ? new $util.LongBits(message.dwuseresultsvalidtimescoremultiple.low >>> 0, message.dwuseresultsvalidtimescoremultiple.high >>> 0).toNumber(true) : message.dwuseresultsvalidtimescoremultiple;
            if (message.dwuseresultsgiftpackage != null && message.hasOwnProperty("dwuseresultsgiftpackage"))
                if (typeof message.dwuseresultsgiftpackage === "number")
                    object.dwuseresultsgiftpackage = options.longs === String ? String(message.dwuseresultsgiftpackage) : message.dwuseresultsgiftpackage;
                else
                    object.dwuseresultsgiftpackage = options.longs === String ? $util.Long.prototype.toString.call(message.dwuseresultsgiftpackage) : options.longs === Number ? new $util.LongBits(message.dwuseresultsgiftpackage.low >>> 0, message.dwuseresultsgiftpackage.high >>> 0).toNumber(true) : message.dwuseresultsgiftpackage;
            if (message.dwsortid != null && message.hasOwnProperty("dwsortid"))
                if (typeof message.dwsortid === "number")
                    object.dwsortid = options.longs === String ? String(message.dwsortid) : message.dwsortid;
                else
                    object.dwsortid = options.longs === String ? $util.Long.prototype.toString.call(message.dwsortid) : options.longs === Number ? new $util.LongBits(message.dwsortid.low >>> 0, message.dwsortid.high >>> 0).toNumber(true) : message.dwsortid;
            if (message.szname != null && message.hasOwnProperty("szname"))
                object.szname = message.szname;
            if (message.szregulationsinfo != null && message.hasOwnProperty("szregulationsinfo"))
                object.szregulationsinfo = message.szregulationsinfo;
            return object;
        };

        /**
         * Converts this tagPropertyItem to JSON.
         * @function toJSON
         * @memberof propertyPmd.tagPropertyItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagPropertyItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagPropertyItem;
    })();

    propertyPmd.tagPropertySubItem = (function() {

        /**
         * Properties of a tagPropertySubItem.
         * @memberof propertyPmd
         * @interface ItagPropertySubItem
         * @property {number|Long|null} [dwpropertyid] tagPropertySubItem dwpropertyid
         * @property {number|Long|null} [dwownerpropertyid] tagPropertySubItem dwownerpropertyid
         * @property {number|Long|null} [dwpropertycount] tagPropertySubItem dwpropertycount
         * @property {number|Long|null} [dwsortid] tagPropertySubItem dwsortid
         */

        /**
         * Constructs a new tagPropertySubItem.
         * @memberof propertyPmd
         * @classdesc Represents a tagPropertySubItem.
         * @implements ItagPropertySubItem
         * @constructor
         * @param {propertyPmd.ItagPropertySubItem=} [properties] Properties to set
         */
        function tagPropertySubItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagPropertySubItem dwpropertyid.
         * @member {number|Long} dwpropertyid
         * @memberof propertyPmd.tagPropertySubItem
         * @instance
         */
        tagPropertySubItem.prototype.dwpropertyid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertySubItem dwownerpropertyid.
         * @member {number|Long} dwownerpropertyid
         * @memberof propertyPmd.tagPropertySubItem
         * @instance
         */
        tagPropertySubItem.prototype.dwownerpropertyid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertySubItem dwpropertycount.
         * @member {number|Long} dwpropertycount
         * @memberof propertyPmd.tagPropertySubItem
         * @instance
         */
        tagPropertySubItem.prototype.dwpropertycount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * tagPropertySubItem dwsortid.
         * @member {number|Long} dwsortid
         * @memberof propertyPmd.tagPropertySubItem
         * @instance
         */
        tagPropertySubItem.prototype.dwsortid = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new tagPropertySubItem instance using the specified properties.
         * @function create
         * @memberof propertyPmd.tagPropertySubItem
         * @static
         * @param {propertyPmd.ItagPropertySubItem=} [properties] Properties to set
         * @returns {propertyPmd.tagPropertySubItem} tagPropertySubItem instance
         */
        tagPropertySubItem.create = function create(properties) {
            return new tagPropertySubItem(properties);
        };

        /**
         * Encodes the specified tagPropertySubItem message. Does not implicitly {@link propertyPmd.tagPropertySubItem.verify|verify} messages.
         * @function encode
         * @memberof propertyPmd.tagPropertySubItem
         * @static
         * @param {propertyPmd.ItagPropertySubItem} message tagPropertySubItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPropertySubItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dwpropertyid != null && message.hasOwnProperty("dwpropertyid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.dwpropertyid);
            if (message.dwownerpropertyid != null && message.hasOwnProperty("dwownerpropertyid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.dwownerpropertyid);
            if (message.dwpropertycount != null && message.hasOwnProperty("dwpropertycount"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.dwpropertycount);
            if (message.dwsortid != null && message.hasOwnProperty("dwsortid"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.dwsortid);
            return writer;
        };

        /**
         * Encodes the specified tagPropertySubItem message, length delimited. Does not implicitly {@link propertyPmd.tagPropertySubItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof propertyPmd.tagPropertySubItem
         * @static
         * @param {propertyPmd.ItagPropertySubItem} message tagPropertySubItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPropertySubItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagPropertySubItem message from the specified reader or buffer.
         * @function decode
         * @memberof propertyPmd.tagPropertySubItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {propertyPmd.tagPropertySubItem} tagPropertySubItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPropertySubItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.propertyPmd.tagPropertySubItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.dwpropertyid = reader.uint64();
                    break;
                case 2:
                    message.dwownerpropertyid = reader.uint64();
                    break;
                case 3:
                    message.dwpropertycount = reader.uint64();
                    break;
                case 4:
                    message.dwsortid = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagPropertySubItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof propertyPmd.tagPropertySubItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {propertyPmd.tagPropertySubItem} tagPropertySubItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPropertySubItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagPropertySubItem message.
         * @function verify
         * @memberof propertyPmd.tagPropertySubItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagPropertySubItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.dwpropertyid != null && message.hasOwnProperty("dwpropertyid"))
                if (!$util.isInteger(message.dwpropertyid) && !(message.dwpropertyid && $util.isInteger(message.dwpropertyid.low) && $util.isInteger(message.dwpropertyid.high)))
                    return "dwpropertyid: integer|Long expected";
            if (message.dwownerpropertyid != null && message.hasOwnProperty("dwownerpropertyid"))
                if (!$util.isInteger(message.dwownerpropertyid) && !(message.dwownerpropertyid && $util.isInteger(message.dwownerpropertyid.low) && $util.isInteger(message.dwownerpropertyid.high)))
                    return "dwownerpropertyid: integer|Long expected";
            if (message.dwpropertycount != null && message.hasOwnProperty("dwpropertycount"))
                if (!$util.isInteger(message.dwpropertycount) && !(message.dwpropertycount && $util.isInteger(message.dwpropertycount.low) && $util.isInteger(message.dwpropertycount.high)))
                    return "dwpropertycount: integer|Long expected";
            if (message.dwsortid != null && message.hasOwnProperty("dwsortid"))
                if (!$util.isInteger(message.dwsortid) && !(message.dwsortid && $util.isInteger(message.dwsortid.low) && $util.isInteger(message.dwsortid.high)))
                    return "dwsortid: integer|Long expected";
            return null;
        };

        /**
         * Creates a tagPropertySubItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof propertyPmd.tagPropertySubItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {propertyPmd.tagPropertySubItem} tagPropertySubItem
         */
        tagPropertySubItem.fromObject = function fromObject(object) {
            if (object instanceof $root.propertyPmd.tagPropertySubItem)
                return object;
            var message = new $root.propertyPmd.tagPropertySubItem();
            if (object.dwpropertyid != null)
                if ($util.Long)
                    (message.dwpropertyid = $util.Long.fromValue(object.dwpropertyid)).unsigned = true;
                else if (typeof object.dwpropertyid === "string")
                    message.dwpropertyid = parseInt(object.dwpropertyid, 10);
                else if (typeof object.dwpropertyid === "number")
                    message.dwpropertyid = object.dwpropertyid;
                else if (typeof object.dwpropertyid === "object")
                    message.dwpropertyid = new $util.LongBits(object.dwpropertyid.low >>> 0, object.dwpropertyid.high >>> 0).toNumber(true);
            if (object.dwownerpropertyid != null)
                if ($util.Long)
                    (message.dwownerpropertyid = $util.Long.fromValue(object.dwownerpropertyid)).unsigned = true;
                else if (typeof object.dwownerpropertyid === "string")
                    message.dwownerpropertyid = parseInt(object.dwownerpropertyid, 10);
                else if (typeof object.dwownerpropertyid === "number")
                    message.dwownerpropertyid = object.dwownerpropertyid;
                else if (typeof object.dwownerpropertyid === "object")
                    message.dwownerpropertyid = new $util.LongBits(object.dwownerpropertyid.low >>> 0, object.dwownerpropertyid.high >>> 0).toNumber(true);
            if (object.dwpropertycount != null)
                if ($util.Long)
                    (message.dwpropertycount = $util.Long.fromValue(object.dwpropertycount)).unsigned = true;
                else if (typeof object.dwpropertycount === "string")
                    message.dwpropertycount = parseInt(object.dwpropertycount, 10);
                else if (typeof object.dwpropertycount === "number")
                    message.dwpropertycount = object.dwpropertycount;
                else if (typeof object.dwpropertycount === "object")
                    message.dwpropertycount = new $util.LongBits(object.dwpropertycount.low >>> 0, object.dwpropertycount.high >>> 0).toNumber(true);
            if (object.dwsortid != null)
                if ($util.Long)
                    (message.dwsortid = $util.Long.fromValue(object.dwsortid)).unsigned = true;
                else if (typeof object.dwsortid === "string")
                    message.dwsortid = parseInt(object.dwsortid, 10);
                else if (typeof object.dwsortid === "number")
                    message.dwsortid = object.dwsortid;
                else if (typeof object.dwsortid === "object")
                    message.dwsortid = new $util.LongBits(object.dwsortid.low >>> 0, object.dwsortid.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a tagPropertySubItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof propertyPmd.tagPropertySubItem
         * @static
         * @param {propertyPmd.tagPropertySubItem} message tagPropertySubItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagPropertySubItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwpropertyid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwpropertyid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwownerpropertyid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwownerpropertyid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwpropertycount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwpropertycount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwsortid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwsortid = options.longs === String ? "0" : 0;
            }
            if (message.dwpropertyid != null && message.hasOwnProperty("dwpropertyid"))
                if (typeof message.dwpropertyid === "number")
                    object.dwpropertyid = options.longs === String ? String(message.dwpropertyid) : message.dwpropertyid;
                else
                    object.dwpropertyid = options.longs === String ? $util.Long.prototype.toString.call(message.dwpropertyid) : options.longs === Number ? new $util.LongBits(message.dwpropertyid.low >>> 0, message.dwpropertyid.high >>> 0).toNumber(true) : message.dwpropertyid;
            if (message.dwownerpropertyid != null && message.hasOwnProperty("dwownerpropertyid"))
                if (typeof message.dwownerpropertyid === "number")
                    object.dwownerpropertyid = options.longs === String ? String(message.dwownerpropertyid) : message.dwownerpropertyid;
                else
                    object.dwownerpropertyid = options.longs === String ? $util.Long.prototype.toString.call(message.dwownerpropertyid) : options.longs === Number ? new $util.LongBits(message.dwownerpropertyid.low >>> 0, message.dwownerpropertyid.high >>> 0).toNumber(true) : message.dwownerpropertyid;
            if (message.dwpropertycount != null && message.hasOwnProperty("dwpropertycount"))
                if (typeof message.dwpropertycount === "number")
                    object.dwpropertycount = options.longs === String ? String(message.dwpropertycount) : message.dwpropertycount;
                else
                    object.dwpropertycount = options.longs === String ? $util.Long.prototype.toString.call(message.dwpropertycount) : options.longs === Number ? new $util.LongBits(message.dwpropertycount.low >>> 0, message.dwpropertycount.high >>> 0).toNumber(true) : message.dwpropertycount;
            if (message.dwsortid != null && message.hasOwnProperty("dwsortid"))
                if (typeof message.dwsortid === "number")
                    object.dwsortid = options.longs === String ? String(message.dwsortid) : message.dwsortid;
                else
                    object.dwsortid = options.longs === String ? $util.Long.prototype.toString.call(message.dwsortid) : options.longs === Number ? new $util.LongBits(message.dwsortid.low >>> 0, message.dwsortid.high >>> 0).toNumber(true) : message.dwsortid;
            return object;
        };

        /**
         * Converts this tagPropertySubItem to JSON.
         * @function toJSON
         * @memberof propertyPmd.tagPropertySubItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagPropertySubItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagPropertySubItem;
    })();

    propertyPmd.tagPropertyTypeItem_s2c = (function() {

        /**
         * Properties of a tagPropertyTypeItem_s2c.
         * @memberof propertyPmd
         * @interface ItagPropertyTypeItem_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] tagPropertyTypeItem_s2c respcmd
         * @property {Array.<propertyPmd.ItagPropertyTypeItem>|null} [tagPropertyTypeItem] tagPropertyTypeItem_s2c tagPropertyTypeItem
         */

        /**
         * Constructs a new tagPropertyTypeItem_s2c.
         * @memberof propertyPmd
         * @classdesc Represents a tagPropertyTypeItem_s2c.
         * @implements ItagPropertyTypeItem_s2c
         * @constructor
         * @param {propertyPmd.ItagPropertyTypeItem_s2c=} [properties] Properties to set
         */
        function tagPropertyTypeItem_s2c(properties) {
            this.tagPropertyTypeItem = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagPropertyTypeItem_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof propertyPmd.tagPropertyTypeItem_s2c
         * @instance
         */
        tagPropertyTypeItem_s2c.prototype.respcmd = null;

        /**
         * tagPropertyTypeItem_s2c tagPropertyTypeItem.
         * @member {Array.<propertyPmd.ItagPropertyTypeItem>} tagPropertyTypeItem
         * @memberof propertyPmd.tagPropertyTypeItem_s2c
         * @instance
         */
        tagPropertyTypeItem_s2c.prototype.tagPropertyTypeItem = $util.emptyArray;

        /**
         * Creates a new tagPropertyTypeItem_s2c instance using the specified properties.
         * @function create
         * @memberof propertyPmd.tagPropertyTypeItem_s2c
         * @static
         * @param {propertyPmd.ItagPropertyTypeItem_s2c=} [properties] Properties to set
         * @returns {propertyPmd.tagPropertyTypeItem_s2c} tagPropertyTypeItem_s2c instance
         */
        tagPropertyTypeItem_s2c.create = function create(properties) {
            return new tagPropertyTypeItem_s2c(properties);
        };

        /**
         * Encodes the specified tagPropertyTypeItem_s2c message. Does not implicitly {@link propertyPmd.tagPropertyTypeItem_s2c.verify|verify} messages.
         * @function encode
         * @memberof propertyPmd.tagPropertyTypeItem_s2c
         * @static
         * @param {propertyPmd.ItagPropertyTypeItem_s2c} message tagPropertyTypeItem_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPropertyTypeItem_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.tagPropertyTypeItem != null && message.tagPropertyTypeItem.length)
                for (var i = 0; i < message.tagPropertyTypeItem.length; ++i)
                    $root.propertyPmd.tagPropertyTypeItem.encode(message.tagPropertyTypeItem[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified tagPropertyTypeItem_s2c message, length delimited. Does not implicitly {@link propertyPmd.tagPropertyTypeItem_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof propertyPmd.tagPropertyTypeItem_s2c
         * @static
         * @param {propertyPmd.ItagPropertyTypeItem_s2c} message tagPropertyTypeItem_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPropertyTypeItem_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagPropertyTypeItem_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof propertyPmd.tagPropertyTypeItem_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {propertyPmd.tagPropertyTypeItem_s2c} tagPropertyTypeItem_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPropertyTypeItem_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.propertyPmd.tagPropertyTypeItem_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.tagPropertyTypeItem && message.tagPropertyTypeItem.length))
                        message.tagPropertyTypeItem = [];
                    message.tagPropertyTypeItem.push($root.propertyPmd.tagPropertyTypeItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagPropertyTypeItem_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof propertyPmd.tagPropertyTypeItem_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {propertyPmd.tagPropertyTypeItem_s2c} tagPropertyTypeItem_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPropertyTypeItem_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagPropertyTypeItem_s2c message.
         * @function verify
         * @memberof propertyPmd.tagPropertyTypeItem_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagPropertyTypeItem_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.tagPropertyTypeItem != null && message.hasOwnProperty("tagPropertyTypeItem")) {
                if (!Array.isArray(message.tagPropertyTypeItem))
                    return "tagPropertyTypeItem: array expected";
                for (var i = 0; i < message.tagPropertyTypeItem.length; ++i) {
                    var error = $root.propertyPmd.tagPropertyTypeItem.verify(message.tagPropertyTypeItem[i]);
                    if (error)
                        return "tagPropertyTypeItem." + error;
                }
            }
            return null;
        };

        /**
         * Creates a tagPropertyTypeItem_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof propertyPmd.tagPropertyTypeItem_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {propertyPmd.tagPropertyTypeItem_s2c} tagPropertyTypeItem_s2c
         */
        tagPropertyTypeItem_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.propertyPmd.tagPropertyTypeItem_s2c)
                return object;
            var message = new $root.propertyPmd.tagPropertyTypeItem_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".propertyPmd.tagPropertyTypeItem_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.tagPropertyTypeItem) {
                if (!Array.isArray(object.tagPropertyTypeItem))
                    throw TypeError(".propertyPmd.tagPropertyTypeItem_s2c.tagPropertyTypeItem: array expected");
                message.tagPropertyTypeItem = [];
                for (var i = 0; i < object.tagPropertyTypeItem.length; ++i) {
                    if (typeof object.tagPropertyTypeItem[i] !== "object")
                        throw TypeError(".propertyPmd.tagPropertyTypeItem_s2c.tagPropertyTypeItem: object expected");
                    message.tagPropertyTypeItem[i] = $root.propertyPmd.tagPropertyTypeItem.fromObject(object.tagPropertyTypeItem[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a tagPropertyTypeItem_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof propertyPmd.tagPropertyTypeItem_s2c
         * @static
         * @param {propertyPmd.tagPropertyTypeItem_s2c} message tagPropertyTypeItem_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagPropertyTypeItem_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tagPropertyTypeItem = [];
            if (options.defaults)
                object.respcmd = null;
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.tagPropertyTypeItem && message.tagPropertyTypeItem.length) {
                object.tagPropertyTypeItem = [];
                for (var j = 0; j < message.tagPropertyTypeItem.length; ++j)
                    object.tagPropertyTypeItem[j] = $root.propertyPmd.tagPropertyTypeItem.toObject(message.tagPropertyTypeItem[j], options);
            }
            return object;
        };

        /**
         * Converts this tagPropertyTypeItem_s2c to JSON.
         * @function toJSON
         * @memberof propertyPmd.tagPropertyTypeItem_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagPropertyTypeItem_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagPropertyTypeItem_s2c;
    })();

    propertyPmd.tagPropertyRelatItem_s2c = (function() {

        /**
         * Properties of a tagPropertyRelatItem_s2c.
         * @memberof propertyPmd
         * @interface ItagPropertyRelatItem_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] tagPropertyRelatItem_s2c respcmd
         * @property {Array.<propertyPmd.ItagPropertyRelatItem>|null} [tagPropertyRelatItem] tagPropertyRelatItem_s2c tagPropertyRelatItem
         */

        /**
         * Constructs a new tagPropertyRelatItem_s2c.
         * @memberof propertyPmd
         * @classdesc Represents a tagPropertyRelatItem_s2c.
         * @implements ItagPropertyRelatItem_s2c
         * @constructor
         * @param {propertyPmd.ItagPropertyRelatItem_s2c=} [properties] Properties to set
         */
        function tagPropertyRelatItem_s2c(properties) {
            this.tagPropertyRelatItem = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagPropertyRelatItem_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof propertyPmd.tagPropertyRelatItem_s2c
         * @instance
         */
        tagPropertyRelatItem_s2c.prototype.respcmd = null;

        /**
         * tagPropertyRelatItem_s2c tagPropertyRelatItem.
         * @member {Array.<propertyPmd.ItagPropertyRelatItem>} tagPropertyRelatItem
         * @memberof propertyPmd.tagPropertyRelatItem_s2c
         * @instance
         */
        tagPropertyRelatItem_s2c.prototype.tagPropertyRelatItem = $util.emptyArray;

        /**
         * Creates a new tagPropertyRelatItem_s2c instance using the specified properties.
         * @function create
         * @memberof propertyPmd.tagPropertyRelatItem_s2c
         * @static
         * @param {propertyPmd.ItagPropertyRelatItem_s2c=} [properties] Properties to set
         * @returns {propertyPmd.tagPropertyRelatItem_s2c} tagPropertyRelatItem_s2c instance
         */
        tagPropertyRelatItem_s2c.create = function create(properties) {
            return new tagPropertyRelatItem_s2c(properties);
        };

        /**
         * Encodes the specified tagPropertyRelatItem_s2c message. Does not implicitly {@link propertyPmd.tagPropertyRelatItem_s2c.verify|verify} messages.
         * @function encode
         * @memberof propertyPmd.tagPropertyRelatItem_s2c
         * @static
         * @param {propertyPmd.ItagPropertyRelatItem_s2c} message tagPropertyRelatItem_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPropertyRelatItem_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.tagPropertyRelatItem != null && message.tagPropertyRelatItem.length)
                for (var i = 0; i < message.tagPropertyRelatItem.length; ++i)
                    $root.propertyPmd.tagPropertyRelatItem.encode(message.tagPropertyRelatItem[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified tagPropertyRelatItem_s2c message, length delimited. Does not implicitly {@link propertyPmd.tagPropertyRelatItem_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof propertyPmd.tagPropertyRelatItem_s2c
         * @static
         * @param {propertyPmd.ItagPropertyRelatItem_s2c} message tagPropertyRelatItem_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPropertyRelatItem_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagPropertyRelatItem_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof propertyPmd.tagPropertyRelatItem_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {propertyPmd.tagPropertyRelatItem_s2c} tagPropertyRelatItem_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPropertyRelatItem_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.propertyPmd.tagPropertyRelatItem_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.tagPropertyRelatItem && message.tagPropertyRelatItem.length))
                        message.tagPropertyRelatItem = [];
                    message.tagPropertyRelatItem.push($root.propertyPmd.tagPropertyRelatItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagPropertyRelatItem_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof propertyPmd.tagPropertyRelatItem_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {propertyPmd.tagPropertyRelatItem_s2c} tagPropertyRelatItem_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPropertyRelatItem_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagPropertyRelatItem_s2c message.
         * @function verify
         * @memberof propertyPmd.tagPropertyRelatItem_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagPropertyRelatItem_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.tagPropertyRelatItem != null && message.hasOwnProperty("tagPropertyRelatItem")) {
                if (!Array.isArray(message.tagPropertyRelatItem))
                    return "tagPropertyRelatItem: array expected";
                for (var i = 0; i < message.tagPropertyRelatItem.length; ++i) {
                    var error = $root.propertyPmd.tagPropertyRelatItem.verify(message.tagPropertyRelatItem[i]);
                    if (error)
                        return "tagPropertyRelatItem." + error;
                }
            }
            return null;
        };

        /**
         * Creates a tagPropertyRelatItem_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof propertyPmd.tagPropertyRelatItem_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {propertyPmd.tagPropertyRelatItem_s2c} tagPropertyRelatItem_s2c
         */
        tagPropertyRelatItem_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.propertyPmd.tagPropertyRelatItem_s2c)
                return object;
            var message = new $root.propertyPmd.tagPropertyRelatItem_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".propertyPmd.tagPropertyRelatItem_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.tagPropertyRelatItem) {
                if (!Array.isArray(object.tagPropertyRelatItem))
                    throw TypeError(".propertyPmd.tagPropertyRelatItem_s2c.tagPropertyRelatItem: array expected");
                message.tagPropertyRelatItem = [];
                for (var i = 0; i < object.tagPropertyRelatItem.length; ++i) {
                    if (typeof object.tagPropertyRelatItem[i] !== "object")
                        throw TypeError(".propertyPmd.tagPropertyRelatItem_s2c.tagPropertyRelatItem: object expected");
                    message.tagPropertyRelatItem[i] = $root.propertyPmd.tagPropertyRelatItem.fromObject(object.tagPropertyRelatItem[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a tagPropertyRelatItem_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof propertyPmd.tagPropertyRelatItem_s2c
         * @static
         * @param {propertyPmd.tagPropertyRelatItem_s2c} message tagPropertyRelatItem_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagPropertyRelatItem_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tagPropertyRelatItem = [];
            if (options.defaults)
                object.respcmd = null;
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.tagPropertyRelatItem && message.tagPropertyRelatItem.length) {
                object.tagPropertyRelatItem = [];
                for (var j = 0; j < message.tagPropertyRelatItem.length; ++j)
                    object.tagPropertyRelatItem[j] = $root.propertyPmd.tagPropertyRelatItem.toObject(message.tagPropertyRelatItem[j], options);
            }
            return object;
        };

        /**
         * Converts this tagPropertyRelatItem_s2c to JSON.
         * @function toJSON
         * @memberof propertyPmd.tagPropertyRelatItem_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagPropertyRelatItem_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagPropertyRelatItem_s2c;
    })();

    propertyPmd.tagPropertyItem_s2c = (function() {

        /**
         * Properties of a tagPropertyItem_s2c.
         * @memberof propertyPmd
         * @interface ItagPropertyItem_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] tagPropertyItem_s2c respcmd
         * @property {Array.<propertyPmd.ItagPropertyItem>|null} [tagPropertyItem] tagPropertyItem_s2c tagPropertyItem
         */

        /**
         * Constructs a new tagPropertyItem_s2c.
         * @memberof propertyPmd
         * @classdesc Represents a tagPropertyItem_s2c.
         * @implements ItagPropertyItem_s2c
         * @constructor
         * @param {propertyPmd.ItagPropertyItem_s2c=} [properties] Properties to set
         */
        function tagPropertyItem_s2c(properties) {
            this.tagPropertyItem = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagPropertyItem_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof propertyPmd.tagPropertyItem_s2c
         * @instance
         */
        tagPropertyItem_s2c.prototype.respcmd = null;

        /**
         * tagPropertyItem_s2c tagPropertyItem.
         * @member {Array.<propertyPmd.ItagPropertyItem>} tagPropertyItem
         * @memberof propertyPmd.tagPropertyItem_s2c
         * @instance
         */
        tagPropertyItem_s2c.prototype.tagPropertyItem = $util.emptyArray;

        /**
         * Creates a new tagPropertyItem_s2c instance using the specified properties.
         * @function create
         * @memberof propertyPmd.tagPropertyItem_s2c
         * @static
         * @param {propertyPmd.ItagPropertyItem_s2c=} [properties] Properties to set
         * @returns {propertyPmd.tagPropertyItem_s2c} tagPropertyItem_s2c instance
         */
        tagPropertyItem_s2c.create = function create(properties) {
            return new tagPropertyItem_s2c(properties);
        };

        /**
         * Encodes the specified tagPropertyItem_s2c message. Does not implicitly {@link propertyPmd.tagPropertyItem_s2c.verify|verify} messages.
         * @function encode
         * @memberof propertyPmd.tagPropertyItem_s2c
         * @static
         * @param {propertyPmd.ItagPropertyItem_s2c} message tagPropertyItem_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPropertyItem_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.tagPropertyItem != null && message.tagPropertyItem.length)
                for (var i = 0; i < message.tagPropertyItem.length; ++i)
                    $root.propertyPmd.tagPropertyItem.encode(message.tagPropertyItem[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified tagPropertyItem_s2c message, length delimited. Does not implicitly {@link propertyPmd.tagPropertyItem_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof propertyPmd.tagPropertyItem_s2c
         * @static
         * @param {propertyPmd.ItagPropertyItem_s2c} message tagPropertyItem_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPropertyItem_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagPropertyItem_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof propertyPmd.tagPropertyItem_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {propertyPmd.tagPropertyItem_s2c} tagPropertyItem_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPropertyItem_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.propertyPmd.tagPropertyItem_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.tagPropertyItem && message.tagPropertyItem.length))
                        message.tagPropertyItem = [];
                    message.tagPropertyItem.push($root.propertyPmd.tagPropertyItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagPropertyItem_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof propertyPmd.tagPropertyItem_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {propertyPmd.tagPropertyItem_s2c} tagPropertyItem_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPropertyItem_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagPropertyItem_s2c message.
         * @function verify
         * @memberof propertyPmd.tagPropertyItem_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagPropertyItem_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.tagPropertyItem != null && message.hasOwnProperty("tagPropertyItem")) {
                if (!Array.isArray(message.tagPropertyItem))
                    return "tagPropertyItem: array expected";
                for (var i = 0; i < message.tagPropertyItem.length; ++i) {
                    var error = $root.propertyPmd.tagPropertyItem.verify(message.tagPropertyItem[i]);
                    if (error)
                        return "tagPropertyItem." + error;
                }
            }
            return null;
        };

        /**
         * Creates a tagPropertyItem_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof propertyPmd.tagPropertyItem_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {propertyPmd.tagPropertyItem_s2c} tagPropertyItem_s2c
         */
        tagPropertyItem_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.propertyPmd.tagPropertyItem_s2c)
                return object;
            var message = new $root.propertyPmd.tagPropertyItem_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".propertyPmd.tagPropertyItem_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.tagPropertyItem) {
                if (!Array.isArray(object.tagPropertyItem))
                    throw TypeError(".propertyPmd.tagPropertyItem_s2c.tagPropertyItem: array expected");
                message.tagPropertyItem = [];
                for (var i = 0; i < object.tagPropertyItem.length; ++i) {
                    if (typeof object.tagPropertyItem[i] !== "object")
                        throw TypeError(".propertyPmd.tagPropertyItem_s2c.tagPropertyItem: object expected");
                    message.tagPropertyItem[i] = $root.propertyPmd.tagPropertyItem.fromObject(object.tagPropertyItem[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a tagPropertyItem_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof propertyPmd.tagPropertyItem_s2c
         * @static
         * @param {propertyPmd.tagPropertyItem_s2c} message tagPropertyItem_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagPropertyItem_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tagPropertyItem = [];
            if (options.defaults)
                object.respcmd = null;
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.tagPropertyItem && message.tagPropertyItem.length) {
                object.tagPropertyItem = [];
                for (var j = 0; j < message.tagPropertyItem.length; ++j)
                    object.tagPropertyItem[j] = $root.propertyPmd.tagPropertyItem.toObject(message.tagPropertyItem[j], options);
            }
            return object;
        };

        /**
         * Converts this tagPropertyItem_s2c to JSON.
         * @function toJSON
         * @memberof propertyPmd.tagPropertyItem_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagPropertyItem_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagPropertyItem_s2c;
    })();

    propertyPmd.tagPropertySubItem_s2c = (function() {

        /**
         * Properties of a tagPropertySubItem_s2c.
         * @memberof propertyPmd
         * @interface ItagPropertySubItem_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] tagPropertySubItem_s2c respcmd
         * @property {Array.<propertyPmd.ItagPropertySubItem>|null} [tagPropertySubItem] tagPropertySubItem_s2c tagPropertySubItem
         */

        /**
         * Constructs a new tagPropertySubItem_s2c.
         * @memberof propertyPmd
         * @classdesc Represents a tagPropertySubItem_s2c.
         * @implements ItagPropertySubItem_s2c
         * @constructor
         * @param {propertyPmd.ItagPropertySubItem_s2c=} [properties] Properties to set
         */
        function tagPropertySubItem_s2c(properties) {
            this.tagPropertySubItem = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagPropertySubItem_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof propertyPmd.tagPropertySubItem_s2c
         * @instance
         */
        tagPropertySubItem_s2c.prototype.respcmd = null;

        /**
         * tagPropertySubItem_s2c tagPropertySubItem.
         * @member {Array.<propertyPmd.ItagPropertySubItem>} tagPropertySubItem
         * @memberof propertyPmd.tagPropertySubItem_s2c
         * @instance
         */
        tagPropertySubItem_s2c.prototype.tagPropertySubItem = $util.emptyArray;

        /**
         * Creates a new tagPropertySubItem_s2c instance using the specified properties.
         * @function create
         * @memberof propertyPmd.tagPropertySubItem_s2c
         * @static
         * @param {propertyPmd.ItagPropertySubItem_s2c=} [properties] Properties to set
         * @returns {propertyPmd.tagPropertySubItem_s2c} tagPropertySubItem_s2c instance
         */
        tagPropertySubItem_s2c.create = function create(properties) {
            return new tagPropertySubItem_s2c(properties);
        };

        /**
         * Encodes the specified tagPropertySubItem_s2c message. Does not implicitly {@link propertyPmd.tagPropertySubItem_s2c.verify|verify} messages.
         * @function encode
         * @memberof propertyPmd.tagPropertySubItem_s2c
         * @static
         * @param {propertyPmd.ItagPropertySubItem_s2c} message tagPropertySubItem_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPropertySubItem_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.tagPropertySubItem != null && message.tagPropertySubItem.length)
                for (var i = 0; i < message.tagPropertySubItem.length; ++i)
                    $root.propertyPmd.tagPropertySubItem.encode(message.tagPropertySubItem[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified tagPropertySubItem_s2c message, length delimited. Does not implicitly {@link propertyPmd.tagPropertySubItem_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof propertyPmd.tagPropertySubItem_s2c
         * @static
         * @param {propertyPmd.ItagPropertySubItem_s2c} message tagPropertySubItem_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagPropertySubItem_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagPropertySubItem_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof propertyPmd.tagPropertySubItem_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {propertyPmd.tagPropertySubItem_s2c} tagPropertySubItem_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPropertySubItem_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.propertyPmd.tagPropertySubItem_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.tagPropertySubItem && message.tagPropertySubItem.length))
                        message.tagPropertySubItem = [];
                    message.tagPropertySubItem.push($root.propertyPmd.tagPropertySubItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagPropertySubItem_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof propertyPmd.tagPropertySubItem_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {propertyPmd.tagPropertySubItem_s2c} tagPropertySubItem_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagPropertySubItem_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagPropertySubItem_s2c message.
         * @function verify
         * @memberof propertyPmd.tagPropertySubItem_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagPropertySubItem_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.tagPropertySubItem != null && message.hasOwnProperty("tagPropertySubItem")) {
                if (!Array.isArray(message.tagPropertySubItem))
                    return "tagPropertySubItem: array expected";
                for (var i = 0; i < message.tagPropertySubItem.length; ++i) {
                    var error = $root.propertyPmd.tagPropertySubItem.verify(message.tagPropertySubItem[i]);
                    if (error)
                        return "tagPropertySubItem." + error;
                }
            }
            return null;
        };

        /**
         * Creates a tagPropertySubItem_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof propertyPmd.tagPropertySubItem_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {propertyPmd.tagPropertySubItem_s2c} tagPropertySubItem_s2c
         */
        tagPropertySubItem_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.propertyPmd.tagPropertySubItem_s2c)
                return object;
            var message = new $root.propertyPmd.tagPropertySubItem_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".propertyPmd.tagPropertySubItem_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.tagPropertySubItem) {
                if (!Array.isArray(object.tagPropertySubItem))
                    throw TypeError(".propertyPmd.tagPropertySubItem_s2c.tagPropertySubItem: array expected");
                message.tagPropertySubItem = [];
                for (var i = 0; i < object.tagPropertySubItem.length; ++i) {
                    if (typeof object.tagPropertySubItem[i] !== "object")
                        throw TypeError(".propertyPmd.tagPropertySubItem_s2c.tagPropertySubItem: object expected");
                    message.tagPropertySubItem[i] = $root.propertyPmd.tagPropertySubItem.fromObject(object.tagPropertySubItem[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a tagPropertySubItem_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof propertyPmd.tagPropertySubItem_s2c
         * @static
         * @param {propertyPmd.tagPropertySubItem_s2c} message tagPropertySubItem_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagPropertySubItem_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tagPropertySubItem = [];
            if (options.defaults)
                object.respcmd = null;
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.tagPropertySubItem && message.tagPropertySubItem.length) {
                object.tagPropertySubItem = [];
                for (var j = 0; j < message.tagPropertySubItem.length; ++j)
                    object.tagPropertySubItem[j] = $root.propertyPmd.tagPropertySubItem.toObject(message.tagPropertySubItem[j], options);
            }
            return object;
        };

        /**
         * Converts this tagPropertySubItem_s2c to JSON.
         * @function toJSON
         * @memberof propertyPmd.tagPropertySubItem_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagPropertySubItem_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagPropertySubItem_s2c;
    })();

    return propertyPmd;
})();

$root.RealAuthPmd = (function() {

    /**
     * Namespace RealAuthPmd.
     * @exports RealAuthPmd
     * @namespace
     */
    var RealAuthPmd = {};

    RealAuthPmd.RealAuthParameter_s2c = (function() {

        /**
         * Properties of a RealAuthParameter_s2c.
         * @memberof RealAuthPmd
         * @interface IRealAuthParameter_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] RealAuthParameter_s2c respcmd
         * @property {number|Long|null} [dwauthentdisable] RealAuthParameter_s2c dwauthentdisable
         * @property {number|Long|null} [dwauthrealaward] RealAuthParameter_s2c dwauthrealaward
         */

        /**
         * Constructs a new RealAuthParameter_s2c.
         * @memberof RealAuthPmd
         * @classdesc Represents a RealAuthParameter_s2c.
         * @implements IRealAuthParameter_s2c
         * @constructor
         * @param {RealAuthPmd.IRealAuthParameter_s2c=} [properties] Properties to set
         */
        function RealAuthParameter_s2c(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RealAuthParameter_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof RealAuthPmd.RealAuthParameter_s2c
         * @instance
         */
        RealAuthParameter_s2c.prototype.respcmd = null;

        /**
         * RealAuthParameter_s2c dwauthentdisable.
         * @member {number|Long} dwauthentdisable
         * @memberof RealAuthPmd.RealAuthParameter_s2c
         * @instance
         */
        RealAuthParameter_s2c.prototype.dwauthentdisable = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * RealAuthParameter_s2c dwauthrealaward.
         * @member {number|Long} dwauthrealaward
         * @memberof RealAuthPmd.RealAuthParameter_s2c
         * @instance
         */
        RealAuthParameter_s2c.prototype.dwauthrealaward = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new RealAuthParameter_s2c instance using the specified properties.
         * @function create
         * @memberof RealAuthPmd.RealAuthParameter_s2c
         * @static
         * @param {RealAuthPmd.IRealAuthParameter_s2c=} [properties] Properties to set
         * @returns {RealAuthPmd.RealAuthParameter_s2c} RealAuthParameter_s2c instance
         */
        RealAuthParameter_s2c.create = function create(properties) {
            return new RealAuthParameter_s2c(properties);
        };

        /**
         * Encodes the specified RealAuthParameter_s2c message. Does not implicitly {@link RealAuthPmd.RealAuthParameter_s2c.verify|verify} messages.
         * @function encode
         * @memberof RealAuthPmd.RealAuthParameter_s2c
         * @static
         * @param {RealAuthPmd.IRealAuthParameter_s2c} message RealAuthParameter_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RealAuthParameter_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.dwauthentdisable != null && message.hasOwnProperty("dwauthentdisable"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.dwauthentdisable);
            if (message.dwauthrealaward != null && message.hasOwnProperty("dwauthrealaward"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.dwauthrealaward);
            return writer;
        };

        /**
         * Encodes the specified RealAuthParameter_s2c message, length delimited. Does not implicitly {@link RealAuthPmd.RealAuthParameter_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RealAuthPmd.RealAuthParameter_s2c
         * @static
         * @param {RealAuthPmd.IRealAuthParameter_s2c} message RealAuthParameter_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RealAuthParameter_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RealAuthParameter_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof RealAuthPmd.RealAuthParameter_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RealAuthPmd.RealAuthParameter_s2c} RealAuthParameter_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RealAuthParameter_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RealAuthPmd.RealAuthParameter_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.dwauthentdisable = reader.uint64();
                    break;
                case 3:
                    message.dwauthrealaward = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RealAuthParameter_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RealAuthPmd.RealAuthParameter_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RealAuthPmd.RealAuthParameter_s2c} RealAuthParameter_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RealAuthParameter_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RealAuthParameter_s2c message.
         * @function verify
         * @memberof RealAuthPmd.RealAuthParameter_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RealAuthParameter_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.dwauthentdisable != null && message.hasOwnProperty("dwauthentdisable"))
                if (!$util.isInteger(message.dwauthentdisable) && !(message.dwauthentdisable && $util.isInteger(message.dwauthentdisable.low) && $util.isInteger(message.dwauthentdisable.high)))
                    return "dwauthentdisable: integer|Long expected";
            if (message.dwauthrealaward != null && message.hasOwnProperty("dwauthrealaward"))
                if (!$util.isInteger(message.dwauthrealaward) && !(message.dwauthrealaward && $util.isInteger(message.dwauthrealaward.low) && $util.isInteger(message.dwauthrealaward.high)))
                    return "dwauthrealaward: integer|Long expected";
            return null;
        };

        /**
         * Creates a RealAuthParameter_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof RealAuthPmd.RealAuthParameter_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {RealAuthPmd.RealAuthParameter_s2c} RealAuthParameter_s2c
         */
        RealAuthParameter_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.RealAuthPmd.RealAuthParameter_s2c)
                return object;
            var message = new $root.RealAuthPmd.RealAuthParameter_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".RealAuthPmd.RealAuthParameter_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.dwauthentdisable != null)
                if ($util.Long)
                    (message.dwauthentdisable = $util.Long.fromValue(object.dwauthentdisable)).unsigned = true;
                else if (typeof object.dwauthentdisable === "string")
                    message.dwauthentdisable = parseInt(object.dwauthentdisable, 10);
                else if (typeof object.dwauthentdisable === "number")
                    message.dwauthentdisable = object.dwauthentdisable;
                else if (typeof object.dwauthentdisable === "object")
                    message.dwauthentdisable = new $util.LongBits(object.dwauthentdisable.low >>> 0, object.dwauthentdisable.high >>> 0).toNumber(true);
            if (object.dwauthrealaward != null)
                if ($util.Long)
                    (message.dwauthrealaward = $util.Long.fromValue(object.dwauthrealaward)).unsigned = true;
                else if (typeof object.dwauthrealaward === "string")
                    message.dwauthrealaward = parseInt(object.dwauthrealaward, 10);
                else if (typeof object.dwauthrealaward === "number")
                    message.dwauthrealaward = object.dwauthrealaward;
                else if (typeof object.dwauthrealaward === "object")
                    message.dwauthrealaward = new $util.LongBits(object.dwauthrealaward.low >>> 0, object.dwauthrealaward.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a RealAuthParameter_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof RealAuthPmd.RealAuthParameter_s2c
         * @static
         * @param {RealAuthPmd.RealAuthParameter_s2c} message RealAuthParameter_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RealAuthParameter_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.respcmd = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwauthentdisable = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwauthentdisable = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwauthrealaward = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwauthrealaward = options.longs === String ? "0" : 0;
            }
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.dwauthentdisable != null && message.hasOwnProperty("dwauthentdisable"))
                if (typeof message.dwauthentdisable === "number")
                    object.dwauthentdisable = options.longs === String ? String(message.dwauthentdisable) : message.dwauthentdisable;
                else
                    object.dwauthentdisable = options.longs === String ? $util.Long.prototype.toString.call(message.dwauthentdisable) : options.longs === Number ? new $util.LongBits(message.dwauthentdisable.low >>> 0, message.dwauthentdisable.high >>> 0).toNumber(true) : message.dwauthentdisable;
            if (message.dwauthrealaward != null && message.hasOwnProperty("dwauthrealaward"))
                if (typeof message.dwauthrealaward === "number")
                    object.dwauthrealaward = options.longs === String ? String(message.dwauthrealaward) : message.dwauthrealaward;
                else
                    object.dwauthrealaward = options.longs === String ? $util.Long.prototype.toString.call(message.dwauthrealaward) : options.longs === Number ? new $util.LongBits(message.dwauthrealaward.low >>> 0, message.dwauthrealaward.high >>> 0).toNumber(true) : message.dwauthrealaward;
            return object;
        };

        /**
         * Converts this RealAuthParameter_s2c to JSON.
         * @function toJSON
         * @memberof RealAuthPmd.RealAuthParameter_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RealAuthParameter_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RealAuthParameter_s2c;
    })();

    return RealAuthPmd;
})();

$root.VideoPmd = (function() {

    /**
     * Namespace VideoPmd.
     * @exports VideoPmd
     * @namespace
     */
    var VideoPmd = {};

    VideoPmd.tagAVServerOption_s2c = (function() {

        /**
         * Properties of a tagAVServerOption_s2c.
         * @memberof VideoPmd
         * @interface ItagAVServerOption_s2c
         * @property {NullPmd.Iresponse|null} [respcmd] tagAVServerOption_s2c respcmd
         * @property {number|null} [wavserverport] tagAVServerOption_s2c wavserverport
         * @property {number|Long|null} [dwavserveraddr] tagAVServerOption_s2c dwavserveraddr
         */

        /**
         * Constructs a new tagAVServerOption_s2c.
         * @memberof VideoPmd
         * @classdesc Represents a tagAVServerOption_s2c.
         * @implements ItagAVServerOption_s2c
         * @constructor
         * @param {VideoPmd.ItagAVServerOption_s2c=} [properties] Properties to set
         */
        function tagAVServerOption_s2c(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tagAVServerOption_s2c respcmd.
         * @member {NullPmd.Iresponse|null|undefined} respcmd
         * @memberof VideoPmd.tagAVServerOption_s2c
         * @instance
         */
        tagAVServerOption_s2c.prototype.respcmd = null;

        /**
         * tagAVServerOption_s2c wavserverport.
         * @member {number} wavserverport
         * @memberof VideoPmd.tagAVServerOption_s2c
         * @instance
         */
        tagAVServerOption_s2c.prototype.wavserverport = 0;

        /**
         * tagAVServerOption_s2c dwavserveraddr.
         * @member {number|Long} dwavserveraddr
         * @memberof VideoPmd.tagAVServerOption_s2c
         * @instance
         */
        tagAVServerOption_s2c.prototype.dwavserveraddr = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new tagAVServerOption_s2c instance using the specified properties.
         * @function create
         * @memberof VideoPmd.tagAVServerOption_s2c
         * @static
         * @param {VideoPmd.ItagAVServerOption_s2c=} [properties] Properties to set
         * @returns {VideoPmd.tagAVServerOption_s2c} tagAVServerOption_s2c instance
         */
        tagAVServerOption_s2c.create = function create(properties) {
            return new tagAVServerOption_s2c(properties);
        };

        /**
         * Encodes the specified tagAVServerOption_s2c message. Does not implicitly {@link VideoPmd.tagAVServerOption_s2c.verify|verify} messages.
         * @function encode
         * @memberof VideoPmd.tagAVServerOption_s2c
         * @static
         * @param {VideoPmd.ItagAVServerOption_s2c} message tagAVServerOption_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagAVServerOption_s2c.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                $root.NullPmd.response.encode(message.respcmd, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.wavserverport != null && message.hasOwnProperty("wavserverport"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.wavserverport);
            if (message.dwavserveraddr != null && message.hasOwnProperty("dwavserveraddr"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.dwavserveraddr);
            return writer;
        };

        /**
         * Encodes the specified tagAVServerOption_s2c message, length delimited. Does not implicitly {@link VideoPmd.tagAVServerOption_s2c.verify|verify} messages.
         * @function encodeDelimited
         * @memberof VideoPmd.tagAVServerOption_s2c
         * @static
         * @param {VideoPmd.ItagAVServerOption_s2c} message tagAVServerOption_s2c message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tagAVServerOption_s2c.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tagAVServerOption_s2c message from the specified reader or buffer.
         * @function decode
         * @memberof VideoPmd.tagAVServerOption_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {VideoPmd.tagAVServerOption_s2c} tagAVServerOption_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagAVServerOption_s2c.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VideoPmd.tagAVServerOption_s2c();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.respcmd = $root.NullPmd.response.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.wavserverport = reader.int32();
                    break;
                case 3:
                    message.dwavserveraddr = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tagAVServerOption_s2c message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof VideoPmd.tagAVServerOption_s2c
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {VideoPmd.tagAVServerOption_s2c} tagAVServerOption_s2c
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tagAVServerOption_s2c.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tagAVServerOption_s2c message.
         * @function verify
         * @memberof VideoPmd.tagAVServerOption_s2c
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tagAVServerOption_s2c.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.respcmd != null && message.hasOwnProperty("respcmd")) {
                var error = $root.NullPmd.response.verify(message.respcmd);
                if (error)
                    return "respcmd." + error;
            }
            if (message.wavserverport != null && message.hasOwnProperty("wavserverport"))
                if (!$util.isInteger(message.wavserverport))
                    return "wavserverport: integer expected";
            if (message.dwavserveraddr != null && message.hasOwnProperty("dwavserveraddr"))
                if (!$util.isInteger(message.dwavserveraddr) && !(message.dwavserveraddr && $util.isInteger(message.dwavserveraddr.low) && $util.isInteger(message.dwavserveraddr.high)))
                    return "dwavserveraddr: integer|Long expected";
            return null;
        };

        /**
         * Creates a tagAVServerOption_s2c message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof VideoPmd.tagAVServerOption_s2c
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {VideoPmd.tagAVServerOption_s2c} tagAVServerOption_s2c
         */
        tagAVServerOption_s2c.fromObject = function fromObject(object) {
            if (object instanceof $root.VideoPmd.tagAVServerOption_s2c)
                return object;
            var message = new $root.VideoPmd.tagAVServerOption_s2c();
            if (object.respcmd != null) {
                if (typeof object.respcmd !== "object")
                    throw TypeError(".VideoPmd.tagAVServerOption_s2c.respcmd: object expected");
                message.respcmd = $root.NullPmd.response.fromObject(object.respcmd);
            }
            if (object.wavserverport != null)
                message.wavserverport = object.wavserverport | 0;
            if (object.dwavserveraddr != null)
                if ($util.Long)
                    (message.dwavserveraddr = $util.Long.fromValue(object.dwavserveraddr)).unsigned = true;
                else if (typeof object.dwavserveraddr === "string")
                    message.dwavserveraddr = parseInt(object.dwavserveraddr, 10);
                else if (typeof object.dwavserveraddr === "number")
                    message.dwavserveraddr = object.dwavserveraddr;
                else if (typeof object.dwavserveraddr === "object")
                    message.dwavserveraddr = new $util.LongBits(object.dwavserveraddr.low >>> 0, object.dwavserveraddr.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a tagAVServerOption_s2c message. Also converts values to other types if specified.
         * @function toObject
         * @memberof VideoPmd.tagAVServerOption_s2c
         * @static
         * @param {VideoPmd.tagAVServerOption_s2c} message tagAVServerOption_s2c
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tagAVServerOption_s2c.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.respcmd = null;
                object.wavserverport = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.dwavserveraddr = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dwavserveraddr = options.longs === String ? "0" : 0;
            }
            if (message.respcmd != null && message.hasOwnProperty("respcmd"))
                object.respcmd = $root.NullPmd.response.toObject(message.respcmd, options);
            if (message.wavserverport != null && message.hasOwnProperty("wavserverport"))
                object.wavserverport = message.wavserverport;
            if (message.dwavserveraddr != null && message.hasOwnProperty("dwavserveraddr"))
                if (typeof message.dwavserveraddr === "number")
                    object.dwavserveraddr = options.longs === String ? String(message.dwavserveraddr) : message.dwavserveraddr;
                else
                    object.dwavserveraddr = options.longs === String ? $util.Long.prototype.toString.call(message.dwavserveraddr) : options.longs === Number ? new $util.LongBits(message.dwavserveraddr.low >>> 0, message.dwavserveraddr.high >>> 0).toNumber(true) : message.dwavserveraddr;
            return object;
        };

        /**
         * Converts this tagAVServerOption_s2c to JSON.
         * @function toJSON
         * @memberof VideoPmd.tagAVServerOption_s2c
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tagAVServerOption_s2c.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tagAVServerOption_s2c;
    })();

    return VideoPmd;
})();

module.exports = $root;
