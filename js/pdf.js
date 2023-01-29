!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("./pdf.js", [], t)
    : "object" == typeof exports
    ? (exports["./pdf.js"] = t())
    : (e["./pdf.js"] = e.pdfjsLib = t());
})(this, function() {
  return (function(e) {
    function t(n) {
      if (r[n]) return r[n].exports;
      var i = (r[n] = { i: n, l: !1, exports: {} });
      return e[n].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
    }
    var r = {};
    return (
      (t.m = e),
      (t.c = r),
      (t.d = function(e, r, n) {
        t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n });
      }),
      (t.r = function(e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (t.t = function(e, r) {
        if ((1 & r && (e = t(e)), 8 & r)) return e;
        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (t.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & r && "string" != typeof e)
        )
          for (var i in e)
            t.d(
              n,
              i,
              function(t) {
                return e[t];
              }.bind(null, i)
            );
        return n;
      }),
      (t.n = function(e) {
        var r =
          e && e.__esModule
            ? function() {
                return e["default"];
              }
            : function() {
                return e;
              };
        return t.d(r, "a", r), r;
      }),
      (t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = ""),
      t((t.s = 0))
    );
  })([
    function(e, t, r) {
      "use strict";
      var n = r(1),
        i = r(179),
        a = r(194),
        o = r(195),
        s = r(183),
        u = r(196),
        c = r(188),
        l = r(185),
        h = r(4);
      if (h()) {
        var f = r(197).PDFNodeStream;
        i.setPDFNetworkStreamFactory(function(e) {
          return new f(e);
        });
      } else {
        var d,
          p = r(200).PDFNetworkStream;
        s.isFetchSupported() && (d = r(201).PDFFetchStream),
          i.setPDFNetworkStreamFactory(function(e) {
            return d && s.isValidFetchUrl(e.url) ? new d(e) : new p(e);
          });
      }
      (t.build = i.build),
        (t.version = i.version),
        (t.getDocument = i.getDocument),
        (t.LoopbackPort = i.LoopbackPort),
        (t.PDFDataRangeTransport = i.PDFDataRangeTransport),
        (t.PDFWorker = i.PDFWorker),
        (t.renderTextLayer = a.renderTextLayer),
        (t.AnnotationLayer = o.AnnotationLayer),
        (t.createPromiseCapability = n.createPromiseCapability),
        (t.PasswordResponses = n.PasswordResponses),
        (t.InvalidPDFException = n.InvalidPDFException),
        (t.MissingPDFException = n.MissingPDFException),
        (t.SVGGraphics = u.SVGGraphics),
        (t.NativeImageDecoding = n.NativeImageDecoding),
        (t.CMapCompressionType = n.CMapCompressionType),
        (t.PermissionFlag = n.PermissionFlag),
        (t.UnexpectedResponseException = n.UnexpectedResponseException),
        (t.OPS = n.OPS),
        (t.VerbosityLevel = n.VerbosityLevel),
        (t.UNSUPPORTED_FEATURES = n.UNSUPPORTED_FEATURES),
        (t.createValidAbsoluteUrl = n.createValidAbsoluteUrl),
        (t.createObjectURL = n.createObjectURL),
        (t.removeNullCharacters = n.removeNullCharacters),
        (t.shadow = n.shadow),
        (t.Util = n.Util),
        (t.ReadableStream = n.ReadableStream),
        (t.RenderingCancelledException = s.RenderingCancelledException),
        (t.getFilenameFromUrl = s.getFilenameFromUrl),
        (t.LinkTarget = s.LinkTarget),
        (t.addLinkAttributes = s.addLinkAttributes),
        (t.loadScript = s.loadScript),
        (t.PDFDateString = s.PDFDateString),
        (t.GlobalWorkerOptions = c.GlobalWorkerOptions),
        (t.apiCompatibilityParams = l.apiCompatibilityParams);
    },
    function(e, t, r) {
      "use strict";
      function n(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function i(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e;
      }
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t) ? u(e) : t;
      }
      function u(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function l(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && h(e, t);
      }
      function h(e, t) {
        return (h =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        Number.isInteger(e) && (de = e);
      }
      function d() {
        return de;
      }
      function p(e) {
        de >= ue.INFOS && console.log("Info: ".concat(e));
      }
      function v(e) {
        de >= ue.WARNINGS;
      }
      function g(e) {
        throw new Error(e);
      }
      function m(e, t) {
        e || g(t);
      }
      function y(e, t) {
        var r;
        try {
          if (((r = new URL(e)), !r.origin || "null" === r.origin)) return !1;
        } catch (n) {
          return !1;
        }
        var i = new URL(t, r);
        return r.origin === i.origin;
      }
      function b(e) {
        if (!e) return !1;
        switch (e.protocol) {
          case "http:":
          case "https:":
          case "ftp:":
          case "mailto:":
          case "tel:":
            return !0;
          default:
            return !1;
        }
      }
      function _(e, t) {
        if (!e) return null;
        try {
          var r = t ? new URL(e, t) : new URL(e);
          if (b(r)) return r;
        } catch (n) {}
        return null;
      }
      function A(e, t, r) {
        return (
          Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !1,
          }),
          r
        );
      }
      function S(e) {
        return "string" != typeof e
          ? (v("The argument for removeNullCharacters must be a string."), e)
          : e.replace(Se, "");
      }
      function w(e) {
        m(
          null !== e && "object" === a(e) && void 0 !== e.length,
          "Invalid argument for bytesToString"
        );
        var t = e.length,
          r = 8192;
        if (t < r) return String.fromCharCode.apply(null, e);
        for (var n = [], i = 0; i < t; i += r) {
          var o = Math.min(i + r, t),
            s = e.subarray(i, o);
          n.push(String.fromCharCode.apply(null, s));
        }
        return n.join("");
      }
      function k(e) {
        m("string" == typeof e, "Invalid argument for stringToBytes");
        for (var t = e.length, r = new Uint8Array(t), n = 0; n < t; ++n)
          r[n] = 255 & e.charCodeAt(n);
        return r;
      }
      function x(e) {
        return void 0 !== e.length
          ? e.length
          : (m(void 0 !== e.byteLength), e.byteLength);
      }
      function C(e) {
        var t = e.length;
        if (1 === t && e[0] instanceof Uint8Array) return e[0];
        for (var r = 0, n = 0; n < t; n++) r += x(e[n]);
        for (var i = 0, a = new Uint8Array(r), o = 0; o < t; o++) {
          var s = e[o];
          s instanceof Uint8Array ||
            (s = "string" == typeof s ? k(s) : new Uint8Array(s));
          var u = s.byteLength;
          a.set(s, i), (i += u);
        }
        return a;
      }
      function P(e) {
        return String.fromCharCode(
          (e >> 24) & 255,
          (e >> 16) & 255,
          (e >> 8) & 255,
          255 & e
        );
      }
      function R(e) {
        return e <= 0 ? 0 : Math.ceil(Math.log2(e));
      }
      function T(e, t) {
        return (e[t] << 24) >> 24;
      }
      function E(e, t) {
        return (e[t] << 8) | e[t + 1];
      }
      function O(e, t) {
        return (
          ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0
        );
      }
      function L() {
        var e = new Uint8Array(4);
        e[0] = 1;
        var t = new Uint32Array(e.buffer, 0, 1);
        return 1 === t[0];
      }
      function F() {
        try {
          return new Function(""), !0;
        } catch (e) {
          return !1;
        }
      }
      function I(e) {
        var t = e.length,
          r = [];
        if ("þ" === e[0] && "ÿ" === e[1])
          for (var n = 2; n < t; n += 2)
            r.push(
              String.fromCharCode((e.charCodeAt(n) << 8) | e.charCodeAt(n + 1))
            );
        else
          for (var i = 0; i < t; ++i) {
            var a = xe[e.charCodeAt(i)];
            r.push(a ? String.fromCharCode(a) : e.charAt(i));
          }
        return r.join("");
      }
      function j(e) {
        return decodeURIComponent(escape(e));
      }
      function M(e) {
        return unescape(encodeURIComponent(e));
      }
      function N(e) {
        for (var t in e) return !1;
        return !0;
      }
      function D(e) {
        return "boolean" == typeof e;
      }
      function q(e) {
        return "number" == typeof e;
      }
      function U(e) {
        return "string" == typeof e;
      }
      function W(e) {
        return "object" === a(e) && null !== e && void 0 !== e.byteLength;
      }
      function B(e, t) {
        return (
          e.length === t.length &&
          e.every(function(e, r) {
            return e === t[r];
          })
        );
      }
      function G(e) {
        return 32 === e || 9 === e || 13 === e || 10 === e;
      }
      function z() {
        var e = Object.create(null),
          t = !1;
        return (
          Object.defineProperty(e, "settled", {
            get: function() {
              return t;
            },
          }),
          (e.promise = new Promise(function(r, n) {
            (e.resolve = function(e) {
              (t = !0), r(e);
            }),
              (e.reject = function(e) {
                (t = !0), n(e);
              });
          })),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.arrayByteLength = x),
        (t.arraysToBytes = C),
        (t.assert = m),
        (t.bytesToString = w),
        (t.createPromiseCapability = z),
        (t.getVerbosityLevel = d),
        (t.info = p),
        (t.isArrayBuffer = W),
        (t.isArrayEqual = B),
        (t.isBool = D),
        (t.isEmptyObj = N),
        (t.isNum = q),
        (t.isString = U),
        (t.isSpace = G),
        (t.isSameOrigin = y),
        (t.createValidAbsoluteUrl = _),
        (t.isLittleEndian = L),
        (t.isEvalSupported = F),
        (t.log2 = R),
        (t.readInt8 = T),
        (t.readUint16 = E),
        (t.readUint32 = O),
        (t.removeNullCharacters = S),
        (t.setVerbosityLevel = f),
        (t.shadow = A),
        (t.string32 = P),
        (t.stringToBytes = k),
        (t.stringToPDFString = I),
        (t.stringToUTF8String = j),
        (t.utf8StringToString = M),
        (t.warn = v),
        (t.unreachable = g),
        Object.defineProperty(t, "ReadableStream", {
          enumerable: !0,
          get: function() {
            return H.ReadableStream;
          },
        }),
        (t.createObjectURL = t.FormatError = t.Util = t.UnknownErrorException = t.UnexpectedResponseException = t.TextRenderingMode = t.StreamType = t.PermissionFlag = t.PasswordResponses = t.PasswordException = t.NativeImageDecoding = t.MissingPDFException = t.InvalidPDFException = t.AbortException = t.CMapCompressionType = t.ImageKind = t.FontType = t.AnnotationType = t.AnnotationStateModelType = t.AnnotationReviewState = t.AnnotationReplyType = t.AnnotationMarkedState = t.AnnotationFlag = t.AnnotationFieldFlag = t.AnnotationBorderStyleType = t.UNSUPPORTED_FEATURES = t.VerbosityLevel = t.OPS = t.IDENTITY_MATRIX = t.FONT_IDENTITY_MATRIX = t.BaseException = void 0),
        r(2);
      var H = r(177),
        X = [1, 0, 0, 1, 0, 0];
      t.IDENTITY_MATRIX = X;
      var Y = [0.001, 0, 0, 0.001, 0, 0];
      t.FONT_IDENTITY_MATRIX = Y;
      var V = { NONE: "none", DECODE: "decode", DISPLAY: "display" };
      t.NativeImageDecoding = V;
      var Q = {
        PRINT: 4,
        MODIFY_CONTENTS: 8,
        COPY: 16,
        MODIFY_ANNOTATIONS: 32,
        FILL_INTERACTIVE_FORMS: 256,
        COPY_FOR_ACCESSIBILITY: 512,
        ASSEMBLE: 1024,
        PRINT_HIGH_QUALITY: 2048,
      };
      t.PermissionFlag = Q;
      var K = {
        FILL: 0,
        STROKE: 1,
        FILL_STROKE: 2,
        INVISIBLE: 3,
        FILL_ADD_TO_PATH: 4,
        STROKE_ADD_TO_PATH: 5,
        FILL_STROKE_ADD_TO_PATH: 6,
        ADD_TO_PATH: 7,
        FILL_STROKE_MASK: 3,
        ADD_TO_PATH_FLAG: 4,
      };
      t.TextRenderingMode = K;
      var J = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 };
      t.ImageKind = J;
      var Z = {
        TEXT: 1,
        LINK: 2,
        FREETEXT: 3,
        LINE: 4,
        SQUARE: 5,
        CIRCLE: 6,
        POLYGON: 7,
        POLYLINE: 8,
        HIGHLIGHT: 9,
        UNDERLINE: 10,
        SQUIGGLY: 11,
        STRIKEOUT: 12,
        STAMP: 13,
        CARET: 14,
        INK: 15,
        POPUP: 16,
        FILEATTACHMENT: 17,
        SOUND: 18,
        MOVIE: 19,
        WIDGET: 20,
        SCREEN: 21,
        PRINTERMARK: 22,
        TRAPNET: 23,
        WATERMARK: 24,
        THREED: 25,
        REDACT: 26,
      };
      t.AnnotationType = Z;
      var $ = { MARKED: "Marked", REVIEW: "Review" };
      t.AnnotationStateModelType = $;
      var ee = { MARKED: "Marked", UNMARKED: "Unmarked" };
      t.AnnotationMarkedState = ee;
      var te = {
        ACCEPTED: "Accepted",
        REJECTED: "Rejected",
        CANCELLED: "Cancelled",
        COMPLETED: "Completed",
        NONE: "None",
      };
      t.AnnotationReviewState = te;
      var re = { GROUP: "Group", REPLY: "R" };
      t.AnnotationReplyType = re;
      var ne = {
        INVISIBLE: 1,
        HIDDEN: 2,
        PRINT: 4,
        NOZOOM: 8,
        NOROTATE: 16,
        NOVIEW: 32,
        READONLY: 64,
        LOCKED: 128,
        TOGGLENOVIEW: 256,
        LOCKEDCONTENTS: 512,
      };
      t.AnnotationFlag = ne;
      var ie = {
        READONLY: 1,
        REQUIRED: 2,
        NOEXPORT: 4,
        MULTILINE: 4096,
        PASSWORD: 8192,
        NOTOGGLETOOFF: 16384,
        RADIO: 32768,
        PUSHBUTTON: 65536,
        COMBO: 131072,
        EDIT: 262144,
        SORT: 524288,
        FILESELECT: 1048576,
        MULTISELECT: 2097152,
        DONOTSPELLCHECK: 4194304,
        DONOTSCROLL: 8388608,
        COMB: 16777216,
        RICHTEXT: 33554432,
        RADIOSINUNISON: 33554432,
        COMMITONSELCHANGE: 67108864,
      };
      t.AnnotationFieldFlag = ie;
      var ae = { SOLID: 1, DASHED: 2, BEVELED: 3, INSET: 4, UNDERLINE: 5 };
      t.AnnotationBorderStyleType = ae;
      var oe = {
        UNKNOWN: "UNKNOWN",
        FLATE: "FLATE",
        LZW: "LZW",
        DCT: "DCT",
        JPX: "JPX",
        JBIG: "JBIG",
        A85: "A85",
        AHX: "AHX",
        CCF: "CCF",
        RLX: "RLX",
      };
      t.StreamType = oe;
      var se = {
        UNKNOWN: "UNKNOWN",
        TYPE1: "TYPE1",
        TYPE1C: "TYPE1C",
        CIDFONTTYPE0: "CIDFONTTYPE0",
        CIDFONTTYPE0C: "CIDFONTTYPE0C",
        TRUETYPE: "TRUETYPE",
        CIDFONTTYPE2: "CIDFONTTYPE2",
        TYPE3: "TYPE3",
        OPENTYPE: "OPENTYPE",
        TYPE0: "TYPE0",
        MMTYPE1: "MMTYPE1",
      };
      t.FontType = se;
      var ue = { ERRORS: 0, WARNINGS: 1, INFOS: 5 };
      t.VerbosityLevel = ue;
      var ce = { NONE: 0, BINARY: 1, STREAM: 2 };
      t.CMapCompressionType = ce;
      var le = {
        dependency: 1,
        setLineWidth: 2,
        setLineCap: 3,
        setLineJoin: 4,
        setMiterLimit: 5,
        setDash: 6,
        setRenderingIntent: 7,
        setFlatness: 8,
        setGState: 9,
        save: 10,
        restore: 11,
        transform: 12,
        moveTo: 13,
        lineTo: 14,
        curveTo: 15,
        curveTo2: 16,
        curveTo3: 17,
        closePath: 18,
        rectangle: 19,
        stroke: 20,
        closeStroke: 21,
        fill: 22,
        eoFill: 23,
        fillStroke: 24,
        eoFillStroke: 25,
        closeFillStroke: 26,
        closeEOFillStroke: 27,
        endPath: 28,
        clip: 29,
        eoClip: 30,
        beginText: 31,
        endText: 32,
        setCharSpacing: 33,
        setWordSpacing: 34,
        setHScale: 35,
        setLeading: 36,
        setFont: 37,
        setTextRenderingMode: 38,
        setTextRise: 39,
        moveText: 40,
        setLeadingMoveText: 41,
        setTextMatrix: 42,
        nextLine: 43,
        showText: 44,
        showSpacedText: 45,
        nextLineShowText: 46,
        nextLineSetSpacingShowText: 47,
        setCharWidth: 48,
        setCharWidthAndBounds: 49,
        setStrokeColorSpace: 50,
        setFillColorSpace: 51,
        setStrokeColor: 52,
        setStrokeColorN: 53,
        setFillColor: 54,
        setFillColorN: 55,
        setStrokeGray: 56,
        setFillGray: 57,
        setStrokeRGBColor: 58,
        setFillRGBColor: 59,
        setStrokeCMYKColor: 60,
        setFillCMYKColor: 61,
        shadingFill: 62,
        beginInlineImage: 63,
        beginImageData: 64,
        endInlineImage: 65,
        paintXObject: 66,
        markPoint: 67,
        markPointProps: 68,
        beginMarkedContent: 69,
        beginMarkedContentProps: 70,
        endMarkedContent: 71,
        beginCompat: 72,
        endCompat: 73,
        paintFormXObjectBegin: 74,
        paintFormXObjectEnd: 75,
        beginGroup: 76,
        endGroup: 77,
        beginAnnotations: 78,
        endAnnotations: 79,
        beginAnnotation: 80,
        endAnnotation: 81,
        paintJpegXObject: 82,
        paintImageMaskXObject: 83,
        paintImageMaskXObjectGroup: 84,
        paintImageXObject: 85,
        paintInlineImageXObject: 86,
        paintInlineImageXObjectGroup: 87,
        paintImageXObjectRepeat: 88,
        paintImageMaskXObjectRepeat: 89,
        paintSolidColorImageMask: 90,
        constructPath: 91,
      };
      t.OPS = le;
      var he = {
        unknown: "unknown",
        forms: "forms",
        javaScript: "javaScript",
        smask: "smask",
        shadingPattern: "shadingPattern",
        font: "font",
      };
      t.UNSUPPORTED_FEATURES = he;
      var fe = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
      t.PasswordResponses = fe;
      var de = ue.WARNINGS,
        pe = (function() {
          function e(t) {
            this.constructor === e && g("Cannot initialize BaseException."),
              (this.message = t),
              (this.name = this.constructor.name);
          }
          return (e.prototype = new Error()), (e.constructor = e), e;
        })();
      t.BaseException = pe;
      var ve = (function(e) {
        function t(e, r) {
          var n;
          return o(this, t), (n = s(this, c(t).call(this, e))), (n.code = r), n;
        }
        return l(t, e), t;
      })(pe);
      t.PasswordException = ve;
      var ge = (function(e) {
        function t(e, r) {
          var n;
          return (
            o(this, t), (n = s(this, c(t).call(this, e))), (n.details = r), n
          );
        }
        return l(t, e), t;
      })(pe);
      t.UnknownErrorException = ge;
      var me = (function(e) {
        function t() {
          return o(this, t), s(this, c(t).apply(this, arguments));
        }
        return l(t, e), t;
      })(pe);
      t.InvalidPDFException = me;
      var ye = (function(e) {
        function t() {
          return o(this, t), s(this, c(t).apply(this, arguments));
        }
        return l(t, e), t;
      })(pe);
      t.MissingPDFException = ye;
      var be = (function(e) {
        function t(e, r) {
          var n;
          return (
            o(this, t), (n = s(this, c(t).call(this, e))), (n.status = r), n
          );
        }
        return l(t, e), t;
      })(pe);
      t.UnexpectedResponseException = be;
      var _e = (function(e) {
        function t() {
          return o(this, t), s(this, c(t).apply(this, arguments));
        }
        return l(t, e), t;
      })(pe);
      t.FormatError = _e;
      var Ae = (function(e) {
        function t() {
          return o(this, t), s(this, c(t).apply(this, arguments));
        }
        return l(t, e), t;
      })(pe);
      t.AbortException = Ae;
      var Se = /\x00/g,
        we = ["rgb(", 0, ",", 0, ",", 0, ")"],
        ke = (function() {
          function e() {
            o(this, e);
          }
          return (
            i(e, null, [
              {
                key: "makeCssRgb",
                value: function(e, t, r) {
                  return (we[1] = e), (we[3] = t), (we[5] = r), we.join("");
                },
              },
              {
                key: "transform",
                value: function(e, t) {
                  return [
                    e[0] * t[0] + e[2] * t[1],
                    e[1] * t[0] + e[3] * t[1],
                    e[0] * t[2] + e[2] * t[3],
                    e[1] * t[2] + e[3] * t[3],
                    e[0] * t[4] + e[2] * t[5] + e[4],
                    e[1] * t[4] + e[3] * t[5] + e[5],
                  ];
                },
              },
              {
                key: "applyTransform",
                value: function(e, t) {
                  var r = e[0] * t[0] + e[1] * t[2] + t[4],
                    n = e[0] * t[1] + e[1] * t[3] + t[5];
                  return [r, n];
                },
              },
              {
                key: "applyInverseTransform",
                value: function(e, t) {
                  var r = t[0] * t[3] - t[1] * t[2],
                    n =
                      (e[0] * t[3] - e[1] * t[2] + t[2] * t[5] - t[4] * t[3]) /
                      r,
                    i =
                      (-e[0] * t[1] + e[1] * t[0] + t[4] * t[1] - t[5] * t[0]) /
                      r;
                  return [n, i];
                },
              },
              {
                key: "getAxialAlignedBoundingBox",
                value: function(t, r) {
                  var n = e.applyTransform(t, r),
                    i = e.applyTransform(t.slice(2, 4), r),
                    a = e.applyTransform([t[0], t[3]], r),
                    o = e.applyTransform([t[2], t[1]], r);
                  return [
                    Math.min(n[0], i[0], a[0], o[0]),
                    Math.min(n[1], i[1], a[1], o[1]),
                    Math.max(n[0], i[0], a[0], o[0]),
                    Math.max(n[1], i[1], a[1], o[1]),
                  ];
                },
              },
              {
                key: "inverseTransform",
                value: function(e) {
                  var t = e[0] * e[3] - e[1] * e[2];
                  return [
                    e[3] / t,
                    -e[1] / t,
                    -e[2] / t,
                    e[0] / t,
                    (e[2] * e[5] - e[4] * e[3]) / t,
                    (e[4] * e[1] - e[5] * e[0]) / t,
                  ];
                },
              },
              {
                key: "apply3dTransform",
                value: function(e, t) {
                  return [
                    e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
                    e[3] * t[0] + e[4] * t[1] + e[5] * t[2],
                    e[6] * t[0] + e[7] * t[1] + e[8] * t[2],
                  ];
                },
              },
              {
                key: "singularValueDecompose2dScale",
                value: function(e) {
                  var t = [e[0], e[2], e[1], e[3]],
                    r = e[0] * t[0] + e[1] * t[2],
                    n = e[0] * t[1] + e[1] * t[3],
                    i = e[2] * t[0] + e[3] * t[2],
                    a = e[2] * t[1] + e[3] * t[3],
                    o = (r + a) / 2,
                    s = Math.sqrt((r + a) * (r + a) - 4 * (r * a - i * n)) / 2,
                    u = o + s || 1,
                    c = o - s || 1;
                  return [Math.sqrt(u), Math.sqrt(c)];
                },
              },
              {
                key: "normalizeRect",
                value: function(e) {
                  var t = e.slice(0);
                  return (
                    e[0] > e[2] && ((t[0] = e[2]), (t[2] = e[0])),
                    e[1] > e[3] && ((t[1] = e[3]), (t[3] = e[1])),
                    t
                  );
                },
              },
              {
                key: "intersect",
                value: function(t, r) {
                  function n(e, t) {
                    return e - t;
                  }
                  var i = [t[0], t[2], r[0], r[2]].sort(n),
                    a = [t[1], t[3], r[1], r[3]].sort(n),
                    o = [];
                  return (
                    (t = e.normalizeRect(t)),
                    (r = e.normalizeRect(r)),
                    (i[0] === t[0] && i[1] === r[0]) ||
                    (i[0] === r[0] && i[1] === t[0])
                      ? ((o[0] = i[1]),
                        (o[2] = i[2]),
                        (a[0] === t[1] && a[1] === r[1]) ||
                        (a[0] === r[1] && a[1] === t[1])
                          ? ((o[1] = a[1]), (o[3] = a[2]), o)
                          : null)
                      : null
                  );
                },
              },
            ]),
            e
          );
        })();
      t.Util = ke;
      var xe = [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          728,
          711,
          710,
          729,
          733,
          731,
          730,
          732,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          8226,
          8224,
          8225,
          8230,
          8212,
          8211,
          402,
          8260,
          8249,
          8250,
          8722,
          8240,
          8222,
          8220,
          8221,
          8216,
          8217,
          8218,
          8482,
          64257,
          64258,
          321,
          338,
          352,
          376,
          381,
          305,
          322,
          339,
          353,
          382,
          0,
          8364,
        ],
        Ce = (function() {
          var e =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          return function(t, r) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (!n && URL.createObjectURL) {
              var i = new Blob([t], { type: r });
              return URL.createObjectURL(i);
            }
            for (
              var a = "data:".concat(r, ";base64,"), o = 0, s = t.length;
              o < s;
              o += 3
            ) {
              var u = 255 & t[o],
                c = 255 & t[o + 1],
                l = 255 & t[o + 2],
                h = u >> 2,
                f = ((3 & u) << 4) | (c >> 4),
                d = o + 1 < s ? ((15 & c) << 2) | (l >> 6) : 64,
                p = o + 2 < s ? 63 & l : 64;
              a += e[h] + e[f] + e[d] + e[p];
            }
            return a;
          };
        })();
      t.createObjectURL = Ce;
    },
    function(e, t, r) {
      "use strict";
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var i = r(3);
      if (!i._pdfjsCompatibilityChecked) {
        i._pdfjsCompatibilityChecked = !0;
        var a = r(4),
          o =
            "object" ===
              ("undefined" == typeof window ? "undefined" : n(window)) &&
            "object" ===
              ("undefined" == typeof document ? "undefined" : n(document));
        !(function() {
          !i.btoa &&
            a() &&
            (i.btoa = function(e) {
              return Buffer.from(e, "binary").toString("base64");
            });
        })(),
          (function() {
            !i.atob &&
              a() &&
              (i.atob = function(e) {
                return Buffer.from(e, "base64").toString("binary");
              });
          })(),
          (function() {
            o &&
              "undefined" == typeof Element.prototype.remove &&
              (Element.prototype.remove = function() {
                this.parentNode && this.parentNode.removeChild(this);
              });
          })(),
          (function() {
            if (o && !a()) {
              var e = document.createElement("div");
              if (
                (e.classList.add("testOne", "testTwo"),
                e.classList.contains("testOne") !== !0 ||
                  e.classList.contains("testTwo") !== !0)
              ) {
                var t = DOMTokenList.prototype.add,
                  r = DOMTokenList.prototype.remove;
                (DOMTokenList.prototype.add = function() {
                  for (
                    var e = arguments.length, r = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    r[n] = arguments[n];
                  for (var i = 0, a = r; i < a.length; i++) {
                    var o = a[i];
                    t.call(this, o);
                  }
                }),
                  (DOMTokenList.prototype.remove = function() {
                    for (
                      var e = arguments.length, t = new Array(e), n = 0;
                      n < e;
                      n++
                    )
                      t[n] = arguments[n];
                    for (var i = 0, a = t; i < a.length; i++) {
                      var o = a[i];
                      r.call(this, o);
                    }
                  });
              }
            }
          })(),
          (function() {
            if (o && !a()) {
              var e = document.createElement("div");
              e.classList.toggle("test", 0) !== !1 &&
                (DOMTokenList.prototype.toggle = function(e) {
                  var t =
                    arguments.length > 1 ? !!arguments[1] : !this.contains(e);
                  return this[t ? "add" : "remove"](e), t;
                });
            }
          })(),
          (function() {
            String.prototype.startsWith || r(5);
          })(),
          (function() {
            String.prototype.endsWith || r(57);
          })(),
          (function() {
            String.prototype.includes || r(59);
          })(),
          (function() {
            Array.prototype.includes || r(61);
          })(),
          (function() {
            Array.from || r(68);
          })(),
          (function() {
            Object.assign || r(89);
          })(),
          (function() {
            Math.log2 || (Math.log2 = r(92));
          })(),
          (function() {
            Number.isNaN || (Number.isNaN = r(94));
          })(),
          (function() {
            Number.isInteger || (Number.isInteger = r(96));
          })(),
          (function() {
            (i.Promise &&
              i.Promise.prototype &&
              i.Promise.prototype["finally"]) ||
              (i.Promise = r(99));
          })(),
          (function() {
            i.URL = r(121);
          })(),
          (function() {
            i.WeakMap || (i.WeakMap = r(128));
          })(),
          (function() {
            i.WeakSet || (i.WeakSet = r(138));
          })(),
          (function() {
            String.prototype.codePointAt || r(140);
          })(),
          (function() {
            String.fromCodePoint || (String.fromCodePoint = r(142));
          })(),
          (function() {
            i.Symbol || r(144);
          })(),
          (function() {
            String.prototype.padStart || r(167);
          })(),
          (function() {
            String.prototype.padEnd || r(172);
          })(),
          (function() {
            Object.values || (Object.values = r(174));
          })();
      }
    },
    function(e, t, r) {
      "use strict";
      e.exports =
        "undefined" != typeof window && window.Math === Math
          ? window
          : "undefined" != typeof global && global.Math === Math
          ? global
          : "undefined" != typeof self && self.Math === Math
          ? self
          : {};
    },
    function(e, t, r) {
      "use strict";
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      e.exports = function() {
        return (
          "object" ===
            ("undefined" == typeof process ? "undefined" : n(process)) &&
          process + "" == "[object process]" &&
          !process.versions.nw &&
          !process.versions.electron
        );
      };
    },
    function(e, t, r) {
      r(6);
      var n = r(54);
      e.exports = n("String", "startsWith");
    },
    function(e, t, r) {
      "use strict";
      var n = r(7),
        i = r(43),
        a = r(49),
        o = r(17),
        s = r(53),
        u = "".startsWith,
        c = Math.min;
      n(
        { target: "String", proto: !0, forced: !s("startsWith") },
        {
          startsWith: function(e) {
            var t = String(o(this));
            a(e);
            var r = i(
                c(arguments.length > 1 ? arguments[1] : void 0, t.length)
              ),
              n = String(e);
            return u ? u.call(t, n, r) : t.slice(r, r + n.length) === n;
          },
        }
      );
    },
    function(e, t, r) {
      var n = r(8),
        i = r(9).f,
        a = r(23),
        o = r(26),
        s = r(28),
        u = r(36),
        c = r(48);
      e.exports = function(e, t) {
        var r,
          l,
          h,
          f,
          d,
          p,
          v = e.target,
          g = e.global,
          m = e.stat;
        if ((l = g ? n : m ? n[v] || s(v, {}) : (n[v] || {}).prototype))
          for (h in t) {
            if (
              ((d = t[h]),
              e.noTargetGet ? ((p = i(l, h)), (f = p && p.value)) : (f = l[h]),
              (r = c(g ? h : v + (m ? "." : "#") + h, e.forced)),
              !r && void 0 !== f)
            ) {
              if (typeof d == typeof f) continue;
              u(d, f);
            }
            (e.sham || (f && f.sham)) && a(d, "sham", !0), o(l, h, d, e);
          }
      };
    },
    function(e, t) {
      var r = "object",
        n = function(e) {
          return e && e.Math == Math && e;
        };
      e.exports =
        n(typeof globalThis == r && globalThis) ||
        n(typeof window == r && window) ||
        n(typeof self == r && self) ||
        n(typeof global == r && global) ||
        Function("return this")();
    },
    function(e, t, r) {
      var n = r(10),
        i = r(12),
        a = r(13),
        o = r(14),
        s = r(18),
        u = r(20),
        c = r(21),
        l = Object.getOwnPropertyDescriptor;
      t.f = n
        ? l
        : function(e, t) {
            if (((e = o(e)), (t = s(t, !0)), c))
              try {
                return l(e, t);
              } catch (r) {}
            if (u(e, t)) return a(!i.f.call(e, t), e[t]);
          };
    },
    function(e, t, r) {
      var n = r(11);
      e.exports = !n(function() {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function() {
              return 7;
            },
          }).a
        );
      });
    },
    function(e, t) {
      e.exports = function(e) {
        try {
          return !!e();
        } catch (t) {
          return !0;
        }
      };
    },
    function(e, t, r) {
      "use strict";
      var n = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        a = i && !n.call({ 1: 2 }, 1);
      t.f = a
        ? function(e) {
            var t = i(this, e);
            return !!t && t.enumerable;
          }
        : n;
    },
    function(e, t) {
      e.exports = function(e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t,
        };
      };
    },
    function(e, t, r) {
      var n = r(15),
        i = r(17);
      e.exports = function(e) {
        return n(i(e));
      };
    },
    function(e, t, r) {
      var n = r(11),
        i = r(16),
        a = "".split;
      e.exports = n(function() {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function(e) {
            return "String" == i(e) ? a.call(e, "") : Object(e);
          }
        : Object;
    },
    function(e, t) {
      var r = {}.toString;
      e.exports = function(e) {
        return r.call(e).slice(8, -1);
      };
    },
    function(e, t) {
      e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on " + e);
        return e;
      };
    },
    function(e, t, r) {
      var n = r(19);
      e.exports = function(e, t) {
        if (!n(e)) return e;
        var r, i;
        if (t && "function" == typeof (r = e.toString) && !n((i = r.call(e))))
          return i;
        if ("function" == typeof (r = e.valueOf) && !n((i = r.call(e))))
          return i;
        if (!t && "function" == typeof (r = e.toString) && !n((i = r.call(e))))
          return i;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function(e, t) {
      e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e;
      };
    },
    function(e, t) {
      var r = {}.hasOwnProperty;
      e.exports = function(e, t) {
        return r.call(e, t);
      };
    },
    function(e, t, r) {
      var n = r(10),
        i = r(11),
        a = r(22);
      e.exports =
        !n &&
        !i(function() {
          return (
            7 !=
            Object.defineProperty(a("div"), "a", {
              get: function() {
                return 7;
              },
            }).a
          );
        });
    },
    function(e, t, r) {
      var n = r(8),
        i = r(19),
        a = n.document,
        o = i(a) && i(a.createElement);
      e.exports = function(e) {
        return o ? a.createElement(e) : {};
      };
    },
    function(e, t, r) {
      var n = r(10),
        i = r(24),
        a = r(13);
      e.exports = n
        ? function(e, t, r) {
            return i.f(e, t, a(1, r));
          }
        : function(e, t, r) {
            return (e[t] = r), e;
          };
    },
    function(e, t, r) {
      var n = r(10),
        i = r(21),
        a = r(25),
        o = r(18),
        s = Object.defineProperty;
      t.f = n
        ? s
        : function(e, t, r) {
            if ((a(e), (t = o(t, !0)), a(r), i))
              try {
                return s(e, t, r);
              } catch (n) {}
            if ("get" in r || "set" in r)
              throw TypeError("Accessors not supported");
            return "value" in r && (e[t] = r.value), e;
          };
    },
    function(e, t, r) {
      var n = r(19);
      e.exports = function(e) {
        if (!n(e)) throw TypeError(String(e) + " is not an object");
        return e;
      };
    },
    function(e, t, r) {
      var n = r(8),
        i = r(27),
        a = r(23),
        o = r(20),
        s = r(28),
        u = r(30),
        c = r(31),
        l = c.get,
        h = c.enforce,
        f = String(u).split("toString");
      i("inspectSource", function(e) {
        return u.call(e);
      }),
        (e.exports = function(e, t, r, i) {
          var u = !!i && !!i.unsafe,
            c = !!i && !!i.enumerable,
            l = !!i && !!i.noTargetGet;
          return (
            "function" == typeof r &&
              ("string" != typeof t || o(r, "name") || a(r, "name", t),
              (h(r).source = f.join("string" == typeof t ? t : ""))),
            e === n
              ? void (c ? (e[t] = r) : s(t, r))
              : (u ? !l && e[t] && (c = !0) : delete e[t],
                void (c ? (e[t] = r) : a(e, t, r)))
          );
        })(Function.prototype, "toString", function() {
          return ("function" == typeof this && l(this).source) || u.call(this);
        });
    },
    function(e, t, r) {
      var n = r(8),
        i = r(28),
        a = r(29),
        o = "__core-js_shared__",
        s = n[o] || i(o, {});
      (e.exports = function(e, t) {
        return s[e] || (s[e] = void 0 !== t ? t : {});
      })("versions", []).push({
        version: "3.2.1",
        mode: a ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
      });
    },
    function(e, t, r) {
      var n = r(8),
        i = r(23);
      e.exports = function(e, t) {
        try {
          i(n, e, t);
        } catch (r) {
          n[e] = t;
        }
        return t;
      };
    },
    function(e, t) {
      e.exports = !1;
    },
    function(e, t, r) {
      var n = r(27);
      e.exports = n("native-function-to-string", Function.toString);
    },
    function(e, t, r) {
      var n,
        i,
        a,
        o = r(32),
        s = r(8),
        u = r(19),
        c = r(23),
        l = r(20),
        h = r(33),
        f = r(35),
        d = s.WeakMap,
        p = function(e) {
          return a(e) ? i(e) : n(e, {});
        },
        v = function(e) {
          return function(t) {
            var r;
            if (!u(t) || (r = i(t)).type !== e)
              throw TypeError("Incompatible receiver, " + e + " required");
            return r;
          };
        };
      if (o) {
        var g = new d(),
          m = g.get,
          y = g.has,
          b = g.set;
        (n = function(e, t) {
          return b.call(g, e, t), t;
        }),
          (i = function(e) {
            return m.call(g, e) || {};
          }),
          (a = function(e) {
            return y.call(g, e);
          });
      } else {
        var _ = h("state");
        (f[_] = !0),
          (n = function(e, t) {
            return c(e, _, t), t;
          }),
          (i = function(e) {
            return l(e, _) ? e[_] : {};
          }),
          (a = function(e) {
            return l(e, _);
          });
      }
      e.exports = { set: n, get: i, has: a, enforce: p, getterFor: v };
    },
    function(e, t, r) {
      var n = r(8),
        i = r(30),
        a = n.WeakMap;
      e.exports = "function" == typeof a && /native code/.test(i.call(a));
    },
    function(e, t, r) {
      var n = r(27),
        i = r(34),
        a = n("keys");
      e.exports = function(e) {
        return a[e] || (a[e] = i(e));
      };
    },
    function(e, t) {
      var r = 0,
        n = Math.random();
      e.exports = function(e) {
        return (
          "Symbol(" +
          String(void 0 === e ? "" : e) +
          ")_" +
          (++r + n).toString(36)
        );
      };
    },
    function(e, t) {
      e.exports = {};
    },
    function(e, t, r) {
      var n = r(20),
        i = r(37),
        a = r(9),
        o = r(24);
      e.exports = function(e, t) {
        for (var r = i(t), s = o.f, u = a.f, c = 0; c < r.length; c++) {
          var l = r[c];
          n(e, l) || s(e, l, u(t, l));
        }
      };
    },
    function(e, t, r) {
      var n = r(38),
        i = r(40),
        a = r(47),
        o = r(25);
      e.exports =
        n("Reflect", "ownKeys") ||
        function(e) {
          var t = i.f(o(e)),
            r = a.f;
          return r ? t.concat(r(e)) : t;
        };
    },
    function(e, t, r) {
      var n = r(39),
        i = r(8),
        a = function(e) {
          return "function" == typeof e ? e : void 0;
        };
      e.exports = function(e, t) {
        return arguments.length < 2
          ? a(n[e]) || a(i[e])
          : (n[e] && n[e][t]) || (i[e] && i[e][t]);
      };
    },
    function(e, t, r) {
      e.exports = r(8);
    },
    function(e, t, r) {
      var n = r(41),
        i = r(46),
        a = i.concat("length", "prototype");
      t.f =
        Object.getOwnPropertyNames ||
        function(e) {
          return n(e, a);
        };
    },
    function(e, t, r) {
      var n = r(20),
        i = r(14),
        a = r(42).indexOf,
        o = r(35);
      e.exports = function(e, t) {
        var r,
          s = i(e),
          u = 0,
          c = [];
        for (r in s) !n(o, r) && n(s, r) && c.push(r);
        for (; t.length > u; ) n(s, (r = t[u++])) && (~a(c, r) || c.push(r));
        return c;
      };
    },
    function(e, t, r) {
      var n = r(14),
        i = r(43),
        a = r(45),
        o = function(e) {
          return function(t, r, o) {
            var s,
              u = n(t),
              c = i(u.length),
              l = a(o, c);
            if (e && r != r) {
              for (; c > l; ) if (((s = u[l++]), s != s)) return !0;
            } else
              for (; c > l; l++)
                if ((e || l in u) && u[l] === r) return e || l || 0;
            return !e && -1;
          };
        };
      e.exports = { includes: o(!0), indexOf: o(!1) };
    },
    function(e, t, r) {
      var n = r(44),
        i = Math.min;
      e.exports = function(e) {
        return e > 0 ? i(n(e), 9007199254740991) : 0;
      };
    },
    function(e, t) {
      var r = Math.ceil,
        n = Math.floor;
      e.exports = function(e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? n : r)(e);
      };
    },
    function(e, t, r) {
      var n = r(44),
        i = Math.max,
        a = Math.min;
      e.exports = function(e, t) {
        var r = n(e);
        return r < 0 ? i(r + t, 0) : a(r, t);
      };
    },
    function(e, t) {
      e.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    function(e, t) {
      t.f = Object.getOwnPropertySymbols;
    },
    function(e, t, r) {
      var n = r(11),
        i = /#|\.prototype\./,
        a = function(e, t) {
          var r = s[o(e)];
          return r == c || (r != u && ("function" == typeof t ? n(t) : !!t));
        },
        o = (a.normalize = function(e) {
          return String(e)
            .replace(i, ".")
            .toLowerCase();
        }),
        s = (a.data = {}),
        u = (a.NATIVE = "N"),
        c = (a.POLYFILL = "P");
      e.exports = a;
    },
    function(e, t, r) {
      var n = r(50);
      e.exports = function(e) {
        if (n(e))
          throw TypeError("The method doesn't accept regular expressions");
        return e;
      };
    },
    function(e, t, r) {
      var n = r(19),
        i = r(16),
        a = r(51),
        o = a("match");
      e.exports = function(e) {
        var t;
        return n(e) && (void 0 !== (t = e[o]) ? !!t : "RegExp" == i(e));
      };
    },
    function(e, t, r) {
      var n = r(8),
        i = r(27),
        a = r(34),
        o = r(52),
        s = n.Symbol,
        u = i("wks");
      e.exports = function(e) {
        return u[e] || (u[e] = (o && s[e]) || (o ? s : a)("Symbol." + e));
      };
    },
    function(e, t, r) {
      var n = r(11);
      e.exports =
        !!Object.getOwnPropertySymbols &&
        !n(function() {
          return !String(Symbol());
        });
    },
    function(e, t, r) {
      var n = r(51),
        i = n("match");
      e.exports = function(e) {
        var t = /./;
        try {
          "/./"[e](t);
        } catch (r) {
          try {
            return (t[i] = !1), "/./"[e](t);
          } catch (n) {}
        }
        return !1;
      };
    },
    function(e, t, r) {
      var n = r(8),
        i = r(55),
        a = Function.call;
      e.exports = function(e, t, r) {
        return i(a, n[e].prototype[t], r);
      };
    },
    function(e, t, r) {
      var n = r(56);
      e.exports = function(e, t, r) {
        if ((n(e), void 0 === t)) return e;
        switch (r) {
          case 0:
            return function() {
              return e.call(t);
            };
          case 1:
            return function(r) {
              return e.call(t, r);
            };
          case 2:
            return function(r, n) {
              return e.call(t, r, n);
            };
          case 3:
            return function(r, n, i) {
              return e.call(t, r, n, i);
            };
        }
        return function() {
          return e.apply(t, arguments);
        };
      };
    },
    function(e, t) {
      e.exports = function(e) {
        if ("function" != typeof e)
          throw TypeError(String(e) + " is not a function");
        return e;
      };
    },
    function(e, t, r) {
      r(58);
      var n = r(54);
      e.exports = n("String", "endsWith");
    },
    function(e, t, r) {
      "use strict";
      var n = r(7),
        i = r(43),
        a = r(49),
        o = r(17),
        s = r(53),
        u = "".endsWith,
        c = Math.min;
      n(
        { target: "String", proto: !0, forced: !s("endsWith") },
        {
          endsWith: function(e) {
            var t = String(o(this));
            a(e);
            var r = arguments.length > 1 ? arguments[1] : void 0,
              n = i(t.length),
              s = void 0 === r ? n : c(i(r), n),
              l = String(e);
            return u ? u.call(t, l, s) : t.slice(s - l.length, s) === l;
          },
        }
      );
    },
    function(e, t, r) {
      r(60);
      var n = r(54);
      e.exports = n("String", "includes");
    },
    function(e, t, r) {
      "use strict";
      var n = r(7),
        i = r(49),
        a = r(17),
        o = r(53);
      n(
        { target: "String", proto: !0, forced: !o("includes") },
        {
          includes: function(e) {
            return !!~String(a(this)).indexOf(
              i(e),
              arguments.length > 1 ? arguments[1] : void 0
            );
          },
        }
      );
    },
    function(e, t, r) {
      r(62);
      var n = r(54);
      e.exports = n("Array", "includes");
    },
    function(e, t, r) {
      "use strict";
      var n = r(7),
        i = r(42).includes,
        a = r(63);
      n(
        { target: "Array", proto: !0 },
        {
          includes: function(e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      ),
        a("includes");
    },
    function(e, t, r) {
      var n = r(51),
        i = r(64),
        a = r(23),
        o = n("unscopables"),
        s = Array.prototype;
      void 0 == s[o] && a(s, o, i(null)),
        (e.exports = function(e) {
          s[o][e] = !0;
        });
    },
    function(e, t, r) {
      var n = r(25),
        i = r(65),
        a = r(46),
        o = r(35),
        s = r(67),
        u = r(22),
        c = r(33),
        l = c("IE_PROTO"),
        h = "prototype",
        f = function() {},
        d = function() {
          var e,
            t = u("iframe"),
            r = a.length,
            n = "<",
            i = "script",
            o = ">",
            c = "java" + i + ":";
          for (
            t.style.display = "none",
              s.appendChild(t),
              t.src = String(c),
              e = t.contentWindow.document,
              e.open(),
              e.write(n + i + o + "document.F=Object" + n + "/" + i + o),
              e.close(),
              d = e.F;
            r--;

          )
            delete d[h][a[r]];
          return d();
        };
      (e.exports =
        Object.create ||
        function(e, t) {
          var r;
          return (
            null !== e
              ? ((f[h] = n(e)), (r = new f()), (f[h] = null), (r[l] = e))
              : (r = d()),
            void 0 === t ? r : i(r, t)
          );
        }),
        (o[l] = !0);
    },
    function(e, t, r) {
      var n = r(10),
        i = r(24),
        a = r(25),
        o = r(66);
      e.exports = n
        ? Object.defineProperties
        : function(e, t) {
            a(e);
            for (var r, n = o(t), s = n.length, u = 0; s > u; )
              i.f(e, (r = n[u++]), t[r]);
            return e;
          };
    },
    function(e, t, r) {
      var n = r(41),
        i = r(46);
      e.exports =
        Object.keys ||
        function(e) {
          return n(e, i);
        };
    },
    function(e, t, r) {
      var n = r(38);
      e.exports = n("document", "documentElement");
    },
    function(e, t, r) {
      r(69), r(81);
      var n = r(39);
      e.exports = n.Array.from;
    },
    function(e, t, r) {
      "use strict";
      var n = r(70).charAt,
        i = r(31),
        a = r(71),
        o = "String Iterator",
        s = i.set,
        u = i.getterFor(o);
      a(
        String,
        "String",
        function(e) {
          s(this, { type: o, string: String(e), index: 0 });
        },
        function() {
          var e,
            t = u(this),
            r = t.string,
            i = t.index;
          return i >= r.length
            ? { value: void 0, done: !0 }
            : ((e = n(r, i)), (t.index += e.length), { value: e, done: !1 });
        }
      );
    },
    function(e, t, r) {
      var n = r(44),
        i = r(17),
        a = function(e) {
          return function(t, r) {
            var a,
              o,
              s = String(i(t)),
              u = n(r),
              c = s.length;
            return u < 0 || u >= c
              ? e
                ? ""
                : void 0
              : ((a = s.charCodeAt(u)),
                a < 55296 ||
                a > 56319 ||
                u + 1 === c ||
                (o = s.charCodeAt(u + 1)) < 56320 ||
                o > 57343
                  ? e
                    ? s.charAt(u)
                    : a
                  : e
                  ? s.slice(u, u + 2)
                  : ((a - 55296) << 10) + (o - 56320) + 65536);
          };
        };
      e.exports = { codeAt: a(!1), charAt: a(!0) };
    },
    function(e, t, r) {
      "use strict";
      var n = r(7),
        i = r(72),
        a = r(74),
        o = r(79),
        s = r(77),
        u = r(23),
        c = r(26),
        l = r(51),
        h = r(29),
        f = r(78),
        d = r(73),
        p = d.IteratorPrototype,
        v = d.BUGGY_SAFARI_ITERATORS,
        g = l("iterator"),
        m = "keys",
        y = "values",
        b = "entries",
        _ = function() {
          return this;
        };
      e.exports = function(e, t, r, l, d, A, S) {
        i(r, t, l);
        var w,
          k,
          x,
          C = function(e) {
            if (e === d && O) return O;
            if (!v && e in T) return T[e];
            switch (e) {
              case m:
                return function() {
                  return new r(this, e);
                };
              case y:
                return function() {
                  return new r(this, e);
                };
              case b:
                return function() {
                  return new r(this, e);
                };
            }
            return function() {
              return new r(this);
            };
          },
          P = t + " Iterator",
          R = !1,
          T = e.prototype,
          E = T[g] || T["@@iterator"] || (d && T[d]),
          O = (!v && E) || C(d),
          L = "Array" == t ? T.entries || E : E;
        if (
          (L &&
            ((w = a(L.call(new e()))),
            p !== Object.prototype &&
              w.next &&
              (h ||
                a(w) === p ||
                (o ? o(w, p) : "function" != typeof w[g] && u(w, g, _)),
              s(w, P, !0, !0),
              h && (f[P] = _))),
          d == y &&
            E &&
            E.name !== y &&
            ((R = !0),
            (O = function() {
              return E.call(this);
            })),
          (h && !S) || T[g] === O || u(T, g, O),
          (f[t] = O),
          d)
        )
          if (((k = { values: C(y), keys: A ? O : C(m), entries: C(b) }), S))
            for (x in k) (!v && !R && x in T) || c(T, x, k[x]);
          else n({ target: t, proto: !0, forced: v || R }, k);
        return k;
      };
    },
    function(e, t, r) {
      "use strict";
      var n = r(73).IteratorPrototype,
        i = r(64),
        a = r(13),
        o = r(77),
        s = r(78),
        u = function() {
          return this;
        };
      e.exports = function(e, t, r) {
        var c = t + " Iterator";
        return (
          (e.prototype = i(n, { next: a(1, r) })),
          o(e, c, !1, !0),
          (s[c] = u),
          e
        );
      };
    },
    function(e, t, r) {
      "use strict";
      var n,
        i,
        a,
        o = r(74),
        s = r(23),
        u = r(20),
        c = r(51),
        l = r(29),
        h = c("iterator"),
        f = !1,
        d = function() {
          return this;
        };
      [].keys &&
        ((a = [].keys()),
        "next" in a
          ? ((i = o(o(a))), i !== Object.prototype && (n = i))
          : (f = !0)),
        void 0 == n && (n = {}),
        l || u(n, h) || s(n, h, d),
        (e.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: f });
    },
    function(e, t, r) {
      var n = r(20),
        i = r(75),
        a = r(33),
        o = r(76),
        s = a("IE_PROTO"),
        u = Object.prototype;
      e.exports = o
        ? Object.getPrototypeOf
        : function(e) {
            return (
              (e = i(e)),
              n(e, s)
                ? e[s]
                : "function" == typeof e.constructor &&
                  e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? u
                : null
            );
          };
    },
    function(e, t, r) {
      var n = r(17);
      e.exports = function(e) {
        return Object(n(e));
      };
    },
    function(e, t, r) {
      var n = r(11);
      e.exports = !n(function() {
        function e() {}
        return (
          (e.prototype.constructor = null),
          Object.getPrototypeOf(new e()) !== e.prototype
        );
      });
    },
    function(e, t, r) {
      var n = r(24).f,
        i = r(20),
        a = r(51),
        o = a("toStringTag");
      e.exports = function(e, t, r) {
        e &&
          !i((e = r ? e : e.prototype), o) &&
          n(e, o, { configurable: !0, value: t });
      };
    },
    function(e, t) {
      e.exports = {};
    },
    function(e, t, r) {
      var n = r(25),
        i = r(80);
      e.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function() {
              var e,
                t = !1,
                r = {};
              try {
                (e = Object.getOwnPropertyDescriptor(
                  Object.prototype,
                  "__proto__"
                ).set),
                  e.call(r, []),
                  (t = r instanceof Array);
              } catch (a) {}
              return function(r, a) {
                return n(r), i(a), t ? e.call(r, a) : (r.__proto__ = a), r;
              };
            })()
          : void 0);
    },
    function(e, t, r) {
      var n = r(19);
      e.exports = function(e) {
        if (!n(e) && null !== e)
          throw TypeError("Can't set " + String(e) + " as a prototype");
        return e;
      };
    },
    function(e, t, r) {
      var n = r(7),
        i = r(82),
        a = r(88),
        o = !a(function(e) {
          Array.from(e);
        });
      n({ target: "Array", stat: !0, forced: o }, { from: i });
    },
    function(e, t, r) {
      "use strict";
      var n = r(55),
        i = r(75),
        a = r(83),
        o = r(84),
        s = r(43),
        u = r(85),
        c = r(86);
      e.exports = function(e) {
        var t,
          r,
          l,
          h,
          f = i(e),
          d = "function" == typeof this ? this : Array,
          p = arguments.length,
          v = p > 1 ? arguments[1] : void 0,
          g = void 0 !== v,
          m = 0,
          y = c(f);
        if (
          (g && (v = n(v, p > 2 ? arguments[2] : void 0, 2)),
          void 0 == y || (d == Array && o(y)))
        )
          for (t = s(f.length), r = new d(t); t > m; m++)
            u(r, m, g ? v(f[m], m) : f[m]);
        else
          for (h = y.call(f), r = new d(); !(l = h.next()).done; m++)
            u(r, m, g ? a(h, v, [l.value, m], !0) : l.value);
        return (r.length = m), r;
      };
    },
    function(e, t, r) {
      var n = r(25);
      e.exports = function(e, t, r, i) {
        try {
          return i ? t(n(r)[0], r[1]) : t(r);
        } catch (a) {
          var o = e["return"];
          throw (void 0 !== o && n(o.call(e)), a);
        }
      };
    },
    function(e, t, r) {
      var n = r(51),
        i = r(78),
        a = n("iterator"),
        o = Array.prototype;
      e.exports = function(e) {
        return void 0 !== e && (i.Array === e || o[a] === e);
      };
    },
    function(e, t, r) {
      "use strict";
      var n = r(18),
        i = r(24),
        a = r(13);
      e.exports = function(e, t, r) {
        var o = n(t);
        o in e ? i.f(e, o, a(0, r)) : (e[o] = r);
      };
    },
    function(e, t, r) {
      var n = r(87),
        i = r(78),
        a = r(51),
        o = a("iterator");
      e.exports = function(e) {
        if (void 0 != e) return e[o] || e["@@iterator"] || i[n(e)];
      };
    },
    function(e, t, r) {
      var n = r(16),
        i = r(51),
        a = i("toStringTag"),
        o =
          "Arguments" ==
          n(
            (function() {
              return arguments;
            })()
          ),
        s = function(e, t) {
          try {
            return e[t];
          } catch (r) {}
        };
      e.exports = function(e) {
        var t, r, i;
        return void 0 === e
          ? "Undefined"
          : null === e
          ? "Null"
          : "string" == typeof (r = s((t = Object(e)), a))
          ? r
          : o
          ? n(t)
          : "Object" == (i = n(t)) && "function" == typeof t.callee
          ? "Arguments"
          : i;
      };
    },
    function(e, t, r) {
      var n = r(51),
        i = n("iterator"),
        a = !1;
      try {
        var o = 0,
          s = {
            next: function() {
              return { done: !!o++ };
            },
            return: function() {
              a = !0;
            },
          };
        (s[i] = function() {
          return this;
        }),
          Array.from(s, function() {
            throw 2;
          });
      } catch (u) {}
      e.exports = function(e, t) {
        if (!t && !a) return !1;
        var r = !1;
        try {
          var n = {};
          (n[i] = function() {
            return {
              next: function() {
                return { done: (r = !0) };
              },
            };
          }),
            e(n);
        } catch (o) {}
        return r;
      };
    },
    function(e, t, r) {
      r(90);
      var n = r(39);
      e.exports = n.Object.assign;
    },
    function(e, t, r) {
      var n = r(7),
        i = r(91);
      n(
        { target: "Object", stat: !0, forced: Object.assign !== i },
        { assign: i }
      );
    },
    function(e, t, r) {
      "use strict";
      var n = r(10),
        i = r(11),
        a = r(66),
        o = r(47),
        s = r(12),
        u = r(75),
        c = r(15),
        l = Object.assign;
      e.exports =
        !l ||
        i(function() {
          var e = {},
            t = {},
            r = Symbol(),
            n = "abcdefghijklmnopqrst";
          return (
            (e[r] = 7),
            n.split("").forEach(function(e) {
              t[e] = e;
            }),
            7 != l({}, e)[r] || a(l({}, t)).join("") != n
          );
        })
          ? function(e, t) {
              for (
                var r = u(e), i = arguments.length, l = 1, h = o.f, f = s.f;
                i > l;

              )
                for (
                  var d,
                    p = c(arguments[l++]),
                    v = h ? a(p).concat(h(p)) : a(p),
                    g = v.length,
                    m = 0;
                  g > m;

                )
                  (d = v[m++]), (n && !f.call(p, d)) || (r[d] = p[d]);
              return r;
            }
          : l;
    },
    function(e, t, r) {
      r(93);
      var n = r(39);
      e.exports = n.Math.log2;
    },
    function(e, t, r) {
      var n = r(7),
        i = Math.log,
        a = Math.LN2;
      n(
        { target: "Math", stat: !0 },
        {
          log2: function(e) {
            return i(e) / a;
          },
        }
      );
    },
    function(e, t, r) {
      r(95);
      var n = r(39);
      e.exports = n.Number.isNaN;
    },
    function(e, t, r) {
      var n = r(7);
      n(
        { target: "Number", stat: !0 },
        {
          isNaN: function(e) {
            return e != e;
          },
        }
      );
    },
    function(e, t, r) {
      r(97);
      var n = r(39);
      e.exports = n.Number.isInteger;
    },
    function(e, t, r) {
      var n = r(7),
        i = r(98);
      n({ target: "Number", stat: !0 }, { isInteger: i });
    },
    function(e, t, r) {
      var n = r(19),
        i = Math.floor;
      e.exports = function(e) {
        return !n(e) && isFinite(e) && i(e) === e;
      };
    },
    function(e, t, r) {
      r(100), r(69), r(102), r(105), r(119), r(120);
      var n = r(39);
      e.exports = n.Promise;
    },
    function(e, t, r) {
      var n = r(26),
        i = r(101),
        a = Object.prototype;
      i !== a.toString && n(a, "toString", i, { unsafe: !0 });
    },
    function(e, t, r) {
      "use strict";
      var n = r(87),
        i = r(51),
        a = i("toStringTag"),
        o = {};
      (o[a] = "z"),
        (e.exports =
          "[object z]" !== String(o)
            ? function() {
                return "[object " + n(this) + "]";
              }
            : o.toString);
    },
    function(e, t, r) {
      var n = r(8),
        i = r(103),
        a = r(104),
        o = r(23),
        s = r(51),
        u = s("iterator"),
        c = s("toStringTag"),
        l = a.values;
      for (var h in i) {
        var f = n[h],
          d = f && f.prototype;
        if (d) {
          if (d[u] !== l)
            try {
              o(d, u, l);
            } catch (p) {
              d[u] = l;
            }
          if ((d[c] || o(d, c, h), i[h]))
            for (var v in a)
              if (d[v] !== a[v])
                try {
                  o(d, v, a[v]);
                } catch (p) {
                  d[v] = a[v];
                }
        }
      }
    },
    function(e, t) {
      e.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
      };
    },
    function(e, t, r) {
      "use strict";
      var n = r(14),
        i = r(63),
        a = r(78),
        o = r(31),
        s = r(71),
        u = "Array Iterator",
        c = o.set,
        l = o.getterFor(u);
      (e.exports = s(
        Array,
        "Array",
        function(e, t) {
          c(this, { type: u, target: n(e), index: 0, kind: t });
        },
        function() {
          var e = l(this),
            t = e.target,
            r = e.kind,
            n = e.index++;
          return !t || n >= t.length
            ? ((e.target = void 0), { value: void 0, done: !0 })
            : "keys" == r
            ? { value: n, done: !1 }
            : "values" == r
            ? { value: t[n], done: !1 }
            : { value: [n, t[n]], done: !1 };
        },
        "values"
      )),
        (a.Arguments = a.Array),
        i("keys"),
        i("values"),
        i("entries");
    },
    function(e, t, r) {
      "use strict";
      var n,
        i,
        a,
        o,
        s = r(7),
        u = r(29),
        c = r(8),
        l = r(39),
        h = r(106),
        f = r(26),
        d = r(107),
        p = r(77),
        v = r(108),
        g = r(19),
        m = r(56),
        y = r(109),
        b = r(16),
        _ = r(110),
        A = r(88),
        S = r(111),
        w = r(112).set,
        k = r(113),
        x = r(115),
        C = r(117),
        P = r(116),
        R = r(118),
        T = r(114),
        E = r(31),
        O = r(48),
        L = r(51),
        F = L("species"),
        I = "Promise",
        j = E.get,
        M = E.set,
        N = E.getterFor(I),
        D = h,
        q = c.TypeError,
        U = c.document,
        W = c.process,
        B = c.fetch,
        G = W && W.versions,
        z = (G && G.v8) || "",
        H = P.f,
        X = H,
        Y = "process" == b(W),
        V = !!(U && U.createEvent && c.dispatchEvent),
        Q = "unhandledrejection",
        K = "rejectionhandled",
        J = 0,
        Z = 1,
        $ = 2,
        ee = 1,
        te = 2,
        re = O(I, function() {
          var e = D.resolve(1),
            t = function() {},
            r = ((e.constructor = {})[F] = function(e) {
              e(t, t);
            });
          return !(
            (Y || "function" == typeof PromiseRejectionEvent) &&
            (!u || e["finally"]) &&
            e.then(t) instanceof r &&
            0 !== z.indexOf("6.6") &&
            T.indexOf("Chrome/66") === -1
          );
        }),
        ne =
          re ||
          !A(function(e) {
            D.all(e)["catch"](function() {});
          }),
        ie = function(e) {
          var t;
          return !(!g(e) || "function" != typeof (t = e.then)) && t;
        },
        ae = function(e, t, r) {
          if (!t.notified) {
            t.notified = !0;
            var n = t.reactions;
            k(function() {
              for (var i = t.value, a = t.state == Z, o = 0; n.length > o; ) {
                var s,
                  u,
                  c,
                  l = n[o++],
                  h = a ? l.ok : l.fail,
                  f = l.resolve,
                  d = l.reject,
                  p = l.domain;
                try {
                  h
                    ? (a ||
                        (t.rejection === te && ce(e, t), (t.rejection = ee)),
                      h === !0
                        ? (s = i)
                        : (p && p.enter(),
                          (s = h(i)),
                          p && (p.exit(), (c = !0))),
                      s === l.promise
                        ? d(q("Promise-chain cycle"))
                        : (u = ie(s))
                        ? u.call(s, f, d)
                        : f(s))
                    : d(i);
                } catch (v) {
                  p && !c && p.exit(), d(v);
                }
              }
              (t.reactions = []),
                (t.notified = !1),
                r && !t.rejection && se(e, t);
            });
          }
        },
        oe = function(e, t, r) {
          var n, i;
          V
            ? ((n = U.createEvent("Event")),
              (n.promise = t),
              (n.reason = r),
              n.initEvent(e, !1, !0),
              c.dispatchEvent(n))
            : (n = { promise: t, reason: r }),
            (i = c["on" + e])
              ? i(n)
              : e === Q && C("Unhandled promise rejection", r);
        },
        se = function(e, t) {
          w.call(c, function() {
            var r,
              n = t.value,
              i = ue(t);
            if (
              i &&
              ((r = R(function() {
                Y ? W.emit("unhandledRejection", n, e) : oe(Q, e, n);
              })),
              (t.rejection = Y || ue(t) ? te : ee),
              r.error)
            )
              throw r.value;
          });
        },
        ue = function(e) {
          return e.rejection !== ee && !e.parent;
        },
        ce = function(e, t) {
          w.call(c, function() {
            Y ? W.emit("rejectionHandled", e) : oe(K, e, t.value);
          });
        },
        le = function(e, t, r, n) {
          return function(i) {
            e(t, r, i, n);
          };
        },
        he = function(e, t, r, n) {
          t.done ||
            ((t.done = !0),
            n && (t = n),
            (t.value = r),
            (t.state = $),
            ae(e, t, !0));
        },
        fe = function(e, t, r, n) {
          if (!t.done) {
            (t.done = !0), n && (t = n);
            try {
              if (e === r) throw q("Promise can't be resolved itself");
              var i = ie(r);
              i
                ? k(function() {
                    var n = { done: !1 };
                    try {
                      i.call(r, le(fe, e, n, t), le(he, e, n, t));
                    } catch (a) {
                      he(e, n, a, t);
                    }
                  })
                : ((t.value = r), (t.state = Z), ae(e, t, !1));
            } catch (a) {
              he(e, { done: !1 }, a, t);
            }
          }
        };
      re &&
        ((D = function(e) {
          y(this, D, I), m(e), n.call(this);
          var t = j(this);
          try {
            e(le(fe, this, t), le(he, this, t));
          } catch (r) {
            he(this, t, r);
          }
        }),
        (n = function(e) {
          M(this, {
            type: I,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: J,
            value: void 0,
          });
        }),
        (n.prototype = d(D.prototype, {
          then: function(e, t) {
            var r = N(this),
              n = H(S(this, D));
            return (
              (n.ok = "function" != typeof e || e),
              (n.fail = "function" == typeof t && t),
              (n.domain = Y ? W.domain : void 0),
              (r.parent = !0),
              r.reactions.push(n),
              r.state != J && ae(this, r, !1),
              n.promise
            );
          },
          catch: function(e) {
            return this.then(void 0, e);
          },
        })),
        (i = function() {
          var e = new n(),
            t = j(e);
          (this.promise = e),
            (this.resolve = le(fe, e, t)),
            (this.reject = le(he, e, t));
        }),
        (P.f = H = function(e) {
          return e === D || e === a ? new i(e) : X(e);
        }),
        u ||
          "function" != typeof h ||
          ((o = h.prototype.then),
          f(h.prototype, "then", function(e, t) {
            var r = this;
            return new D(function(e, t) {
              o.call(r, e, t);
            }).then(e, t);
          }),
          "function" == typeof B &&
            s(
              { global: !0, enumerable: !0, forced: !0 },
              {
                fetch: function(e) {
                  return x(D, B.apply(c, arguments));
                },
              }
            ))),
        s({ global: !0, wrap: !0, forced: re }, { Promise: D }),
        p(D, I, !1, !0),
        v(I),
        (a = l[I]),
        s(
          { target: I, stat: !0, forced: re },
          {
            reject: function(e) {
              var t = H(this);
              return t.reject.call(void 0, e), t.promise;
            },
          }
        ),
        s(
          { target: I, stat: !0, forced: u || re },
          {
            resolve: function(e) {
              return x(u && this === a ? D : this, e);
            },
          }
        ),
        s(
          { target: I, stat: !0, forced: ne },
          {
            all: function(e) {
              var t = this,
                r = H(t),
                n = r.resolve,
                i = r.reject,
                a = R(function() {
                  var r = m(t.resolve),
                    a = [],
                    o = 0,
                    s = 1;
                  _(e, function(e) {
                    var u = o++,
                      c = !1;
                    a.push(void 0),
                      s++,
                      r.call(t, e).then(function(e) {
                        c || ((c = !0), (a[u] = e), --s || n(a));
                      }, i);
                  }),
                    --s || n(a);
                });
              return a.error && i(a.value), r.promise;
            },
            race: function(e) {
              var t = this,
                r = H(t),
                n = r.reject,
                i = R(function() {
                  var i = m(t.resolve);
                  _(e, function(e) {
                    i.call(t, e).then(r.resolve, n);
                  });
                });
              return i.error && n(i.value), r.promise;
            },
          }
        );
    },
    function(e, t, r) {
      var n = r(8);
      e.exports = n.Promise;
    },
    function(e, t, r) {
      var n = r(26);
      e.exports = function(e, t, r) {
        for (var i in t) n(e, i, t[i], r);
        return e;
      };
    },
    function(e, t, r) {
      "use strict";
      var n = r(38),
        i = r(24),
        a = r(51),
        o = r(10),
        s = a("species");
      e.exports = function(e) {
        var t = n(e),
          r = i.f;
        o &&
          t &&
          !t[s] &&
          r(t, s, {
            configurable: !0,
            get: function() {
              return this;
            },
          });
      };
    },
    function(e, t) {
      e.exports = function(e, t, r) {
        if (!(e instanceof t))
          throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
        return e;
      };
    },
    function(e, t, r) {
      var n = r(25),
        i = r(84),
        a = r(43),
        o = r(55),
        s = r(86),
        u = r(83),
        c = function(e, t) {
          (this.stopped = e), (this.result = t);
        },
        l = (e.exports = function(e, t, r, l, h) {
          var f,
            d,
            p,
            v,
            g,
            m,
            y = o(t, r, l ? 2 : 1);
          if (h) f = e;
          else {
            if (((d = s(e)), "function" != typeof d))
              throw TypeError("Target is not iterable");
            if (i(d)) {
              for (p = 0, v = a(e.length); v > p; p++)
                if (
                  ((g = l ? y(n((m = e[p]))[0], m[1]) : y(e[p])),
                  g && g instanceof c)
                )
                  return g;
              return new c(!1);
            }
            f = d.call(e);
          }
          for (; !(m = f.next()).done; )
            if (((g = u(f, y, m.value, l)), g && g instanceof c)) return g;
          return new c(!1);
        });
      l.stop = function(e) {
        return new c(!0, e);
      };
    },
    function(e, t, r) {
      var n = r(25),
        i = r(56),
        a = r(51),
        o = a("species");
      e.exports = function(e, t) {
        var r,
          a = n(e).constructor;
        return void 0 === a || void 0 == (r = n(a)[o]) ? t : i(r);
      };
    },
    function(e, t, r) {
      var n,
        i,
        a,
        o = r(8),
        s = r(11),
        u = r(16),
        c = r(55),
        l = r(67),
        h = r(22),
        f = o.location,
        d = o.setImmediate,
        p = o.clearImmediate,
        v = o.process,
        g = o.MessageChannel,
        m = o.Dispatch,
        y = 0,
        b = {},
        _ = "onreadystatechange",
        A = function(e) {
          if (b.hasOwnProperty(e)) {
            var t = b[e];
            delete b[e], t();
          }
        },
        S = function(e) {
          return function() {
            A(e);
          };
        },
        w = function(e) {
          A(e.data);
        },
        k = function(e) {
          o.postMessage(e + "", f.protocol + "//" + f.host);
        };
      (d && p) ||
        ((d = function(e) {
          for (var t = [], r = 1; arguments.length > r; )
            t.push(arguments[r++]);
          return (
            (b[++y] = function() {
              ("function" == typeof e ? e : Function(e)).apply(void 0, t);
            }),
            n(y),
            y
          );
        }),
        (p = function(e) {
          delete b[e];
        }),
        "process" == u(v)
          ? (n = function(e) {
              v.nextTick(S(e));
            })
          : m && m.now
          ? (n = function(e) {
              m.now(S(e));
            })
          : g
          ? ((i = new g()),
            (a = i.port2),
            (i.port1.onmessage = w),
            (n = c(a.postMessage, a, 1)))
          : !o.addEventListener ||
            "function" != typeof postMessage ||
            o.importScripts ||
            s(k)
          ? (n =
              _ in h("script")
                ? function(e) {
                    l.appendChild(h("script"))[_] = function() {
                      l.removeChild(this), A(e);
                    };
                  }
                : function(e) {
                    setTimeout(S(e), 0);
                  })
          : ((n = k), o.addEventListener("message", w, !1))),
        (e.exports = { set: d, clear: p });
    },
    function(e, t, r) {
      var n,
        i,
        a,
        o,
        s,
        u,
        c,
        l,
        h = r(8),
        f = r(9).f,
        d = r(16),
        p = r(112).set,
        v = r(114),
        g = h.MutationObserver || h.WebKitMutationObserver,
        m = h.process,
        y = h.Promise,
        b = "process" == d(m),
        _ = f(h, "queueMicrotask"),
        A = _ && _.value;
      A ||
        ((n = function() {
          var e, t;
          for (b && (e = m.domain) && e.exit(); i; ) {
            (t = i.fn), (i = i.next);
            try {
              t();
            } catch (r) {
              throw (i ? o() : (a = void 0), r);
            }
          }
          (a = void 0), e && e.enter();
        }),
        b
          ? (o = function() {
              m.nextTick(n);
            })
          : g && !/(iphone|ipod|ipad).*applewebkit/i.test(v)
          ? ((s = !0),
            (u = document.createTextNode("")),
            new g(n).observe(u, { characterData: !0 }),
            (o = function() {
              u.data = s = !s;
            }))
          : y && y.resolve
          ? ((c = y.resolve(void 0)),
            (l = c.then),
            (o = function() {
              l.call(c, n);
            }))
          : (o = function() {
              p.call(h, n);
            })),
        (e.exports =
          A ||
          function(e) {
            var t = { fn: e, next: void 0 };
            a && (a.next = t), i || ((i = t), o()), (a = t);
          });
    },
    function(e, t, r) {
      var n = r(38);
      e.exports = n("navigator", "userAgent") || "";
    },
    function(e, t, r) {
      var n = r(25),
        i = r(19),
        a = r(116);
      e.exports = function(e, t) {
        if ((n(e), i(t) && t.constructor === e)) return t;
        var r = a.f(e),
          o = r.resolve;
        return o(t), r.promise;
      };
    },
    function(e, t, r) {
      "use strict";
      var n = r(56),
        i = function(e) {
          var t, r;
          (this.promise = new e(function(e, n) {
            if (void 0 !== t || void 0 !== r)
              throw TypeError("Bad Promise constructor");
            (t = e), (r = n);
          })),
            (this.resolve = n(t)),
            (this.reject = n(r));
        };
      e.exports.f = function(e) {
        return new i(e);
      };
    },
    function(e, t, r) {
      var n = r(8);
      e.exports = function(e, t) {
        var r = n.console;
        r && r.error && (1 === arguments.length ? r.error(e) : r.error(e, t));
      };
    },
    function(e, t) {
      e.exports = function(e) {
        try {
          return { error: !1, value: e() };
        } catch (t) {
          return { error: !0, value: t };
        }
      };
    },
    function(e, t, r) {
      "use strict";
      var n = r(7),
        i = r(56),
        a = r(116),
        o = r(118),
        s = r(110);
      n(
        { target: "Promise", stat: !0 },
        {
          allSettled: function(e) {
            var t = this,
              r = a.f(t),
              n = r.resolve,
              u = r.reject,
              c = o(function() {
                var r = i(t.resolve),
                  a = [],
                  o = 0,
                  u = 1;
                s(e, function(e) {
                  var i = o++,
                    s = !1;
                  a.push(void 0),
                    u++,
                    r.call(t, e).then(
                      function(e) {
                        s ||
                          ((s = !0),
                          (a[i] = { status: "fulfilled", value: e }),
                          --u || n(a));
                      },
                      function(e) {
                        s ||
                          ((s = !0),
                          (a[i] = { status: "rejected", reason: e }),
                          --u || n(a));
                      }
                    );
                }),
                  --u || n(a);
              });
            return c.error && u(c.value), r.promise;
          },
        }
      );
    },
    function(e, t, r) {
      "use strict";
      var n = r(7),
        i = r(29),
        a = r(106),
        o = r(38),
        s = r(111),
        u = r(115),
        c = r(26);
      n(
        { target: "Promise", proto: !0, real: !0 },
        {
          finally: function(e) {
            var t = s(this, o("Promise")),
              r = "function" == typeof e;
            return this.then(
              r
                ? function(r) {
                    return u(t, e()).then(function() {
                      return r;
                    });
                  }
                : e,
              r
                ? function(r) {
                    return u(t, e()).then(function() {
                      throw r;
                    });
                  }
                : e
            );
          },
        }
      ),
        i ||
          "function" != typeof a ||
          a.prototype["finally"] ||
          c(a.prototype, "finally", o("Promise").prototype["finally"]);
    },
    function(e, t, r) {
      r(122), r(127), r(125);
      var n = r(39);
      e.exports = n.URL;
    },
    function(e, t, r) {
      "use strict";
      r(69);
      var n,
        i = r(7),
        a = r(10),
        o = r(123),
        s = r(8),
        u = r(65),
        c = r(26),
        l = r(109),
        h = r(20),
        f = r(91),
        d = r(82),
        p = r(70).codeAt,
        v = r(124),
        g = r(77),
        m = r(125),
        y = r(31),
        b = s.URL,
        _ = m.URLSearchParams,
        A = m.getState,
        S = y.set,
        w = y.getterFor("URL"),
        k = Math.floor,
        x = Math.pow,
        C = "Invalid authority",
        P = "Invalid scheme",
        R = "Invalid host",
        T = "Invalid port",
        E = /[A-Za-z]/,
        O = /[\d+\-.A-Za-z]/,
        L = /\d/,
        F = /^(0x|0X)/,
        I = /^[0-7]+$/,
        j = /^\d+$/,
        M = /^[\dA-Fa-f]+$/,
        N = /[\u0000\u0009\u000A\u000D #%\/:?@[\\]]/,
        D = /[\u0000\u0009\u000A\u000D #\/:?@[\\]]/,
        q = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
        U = /[\u0009\u000A\u000D]/g,
        W = function(e, t) {
          var r, n, i;
          if ("[" == t.charAt(0)) {
            if ("]" != t.charAt(t.length - 1)) return R;
            if (((r = G(t.slice(1, -1))), !r)) return R;
            e.host = r;
          } else if (Z(e)) {
            if (((t = v(t)), N.test(t))) return R;
            if (((r = B(t)), null === r)) return R;
            e.host = r;
          } else {
            if (D.test(t)) return R;
            for (r = "", n = d(t), i = 0; i < n.length; i++) r += K(n[i], X);
            e.host = r;
          }
        },
        B = function(e) {
          var t,
            r,
            n,
            i,
            a,
            o,
            s,
            u = e.split(".");
          if (
            (u.length && "" == u[u.length - 1] && u.pop(),
            (t = u.length),
            t > 4)
          )
            return e;
          for (r = [], n = 0; n < t; n++) {
            if (((i = u[n]), "" == i)) return e;
            if (
              ((a = 10),
              i.length > 1 &&
                "0" == i.charAt(0) &&
                ((a = F.test(i) ? 16 : 8), (i = i.slice(8 == a ? 1 : 2))),
              "" === i)
            )
              o = 0;
            else {
              if (!(10 == a ? j : 8 == a ? I : M).test(i)) return e;
              o = parseInt(i, a);
            }
            r.push(o);
          }
          for (n = 0; n < t; n++)
            if (((o = r[n]), n == t - 1)) {
              if (o >= x(256, 5 - t)) return null;
            } else if (o > 255) return null;
          for (s = r.pop(), n = 0; n < r.length; n++) s += r[n] * x(256, 3 - n);
          return s;
        },
        G = function(e) {
          var t,
            r,
            n,
            i,
            a,
            o,
            s,
            u = [0, 0, 0, 0, 0, 0, 0, 0],
            c = 0,
            l = null,
            h = 0,
            f = function() {
              return e.charAt(h);
            };
          if (":" == f()) {
            if (":" != e.charAt(1)) return;
            (h += 2), c++, (l = c);
          }
          for (; f(); ) {
            if (8 == c) return;
            if (":" != f()) {
              for (t = r = 0; r < 4 && M.test(f()); )
                (t = 16 * t + parseInt(f(), 16)), h++, r++;
              if ("." == f()) {
                if (0 == r) return;
                if (((h -= r), c > 6)) return;
                for (n = 0; f(); ) {
                  if (((i = null), n > 0)) {
                    if (!("." == f() && n < 4)) return;
                    h++;
                  }
                  if (!L.test(f())) return;
                  for (; L.test(f()); ) {
                    if (((a = parseInt(f(), 10)), null === i)) i = a;
                    else {
                      if (0 == i) return;
                      i = 10 * i + a;
                    }
                    if (i > 255) return;
                    h++;
                  }
                  (u[c] = 256 * u[c] + i), n++, (2 != n && 4 != n) || c++;
                }
                if (4 != n) return;
                break;
              }
              if (":" == f()) {
                if ((h++, !f())) return;
              } else if (f()) return;
              u[c++] = t;
            } else {
              if (null !== l) return;
              h++, c++, (l = c);
            }
          }
          if (null !== l)
            for (o = c - l, c = 7; 0 != c && o > 0; )
              (s = u[c]), (u[c--] = u[l + o - 1]), (u[l + --o] = s);
          else if (8 != c) return;
          return u;
        },
        z = function(e) {
          for (var t = null, r = 1, n = null, i = 0, a = 0; a < 8; a++)
            0 !== e[a]
              ? (i > r && ((t = n), (r = i)), (n = null), (i = 0))
              : (null === n && (n = a), ++i);
          return i > r && ((t = n), (r = i)), t;
        },
        H = function(e) {
          var t, r, n, i;
          if ("number" == typeof e) {
            for (t = [], r = 0; r < 4; r++)
              t.unshift(e % 256), (e = k(e / 256));
            return t.join(".");
          }
          if ("object" == typeof e) {
            for (t = "", n = z(e), r = 0; r < 8; r++)
              (i && 0 === e[r]) ||
                (i && (i = !1),
                n === r
                  ? ((t += r ? ":" : "::"), (i = !0))
                  : ((t += e[r].toString(16)), r < 7 && (t += ":")));
            return "[" + t + "]";
          }
          return e;
        },
        X = {},
        Y = f({}, X, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
        V = f({}, Y, { "#": 1, "?": 1, "{": 1, "}": 1 }),
        Q = f({}, V, {
          "/": 1,
          ":": 1,
          ";": 1,
          "=": 1,
          "@": 1,
          "[": 1,
          "\\": 1,
          "]": 1,
          "^": 1,
          "|": 1,
        }),
        K = function(e, t) {
          var r = p(e, 0);
          return r > 32 && r < 127 && !h(t, e) ? e : encodeURIComponent(e);
        },
        J = {
          ftp: 21,
          file: null,
          gopher: 70,
          http: 80,
          https: 443,
          ws: 80,
          wss: 443,
        },
        Z = function(e) {
          return h(J, e.scheme);
        },
        $ = function(e) {
          return "" != e.username || "" != e.password;
        },
        ee = function(e) {
          return !e.host || e.cannotBeABaseURL || "file" == e.scheme;
        },
        te = function(e, t) {
          var r;
          return (
            2 == e.length &&
            E.test(e.charAt(0)) &&
            (":" == (r = e.charAt(1)) || (!t && "|" == r))
          );
        },
        re = function(e) {
          var t;
          return (
            e.length > 1 &&
            te(e.slice(0, 2)) &&
            (2 == e.length ||
              "/" === (t = e.charAt(2)) ||
              "\\" === t ||
              "?" === t ||
              "#" === t)
          );
        },
        ne = function(e) {
          var t = e.path,
            r = t.length;
          !r || ("file" == e.scheme && 1 == r && te(t[0], !0)) || t.pop();
        },
        ie = function(e) {
          return "." === e || "%2e" === e.toLowerCase();
        },
        ae = function(e) {
          return (
            (e = e.toLowerCase()),
            ".." === e || "%2e." === e || ".%2e" === e || "%2e%2e" === e
          );
        },
        oe = {},
        se = {},
        ue = {},
        ce = {},
        le = {},
        he = {},
        fe = {},
        de = {},
        pe = {},
        ve = {},
        ge = {},
        me = {},
        ye = {},
        be = {},
        _e = {},
        Ae = {},
        Se = {},
        we = {},
        ke = {},
        xe = {},
        Ce = {},
        Pe = function(e, t, r, i) {
          var a,
            o,
            s,
            u,
            c = r || oe,
            l = 0,
            f = "",
            p = !1,
            v = !1,
            g = !1;
          for (
            r ||
              ((e.scheme = ""),
              (e.username = ""),
              (e.password = ""),
              (e.host = null),
              (e.port = null),
              (e.path = []),
              (e.query = null),
              (e.fragment = null),
              (e.cannotBeABaseURL = !1),
              (t = t.replace(q, ""))),
              t = t.replace(U, ""),
              a = d(t);
            l <= a.length;

          ) {
            switch (((o = a[l]), c)) {
              case oe:
                if (!o || !E.test(o)) {
                  if (r) return P;
                  c = ue;
                  continue;
                }
                (f += o.toLowerCase()), (c = se);
                break;
              case se:
                if (o && (O.test(o) || "+" == o || "-" == o || "." == o))
                  f += o.toLowerCase();
                else {
                  if (":" != o) {
                    if (r) return P;
                    (f = ""), (c = ue), (l = 0);
                    continue;
                  }
                  if (
                    r &&
                    (Z(e) != h(J, f) ||
                      ("file" == f && ($(e) || null !== e.port)) ||
                      ("file" == e.scheme && !e.host))
                  )
                    return;
                  if (((e.scheme = f), r))
                    return void (
                      Z(e) &&
                      J[e.scheme] == e.port &&
                      (e.port = null)
                    );
                  (f = ""),
                    "file" == e.scheme
                      ? (c = be)
                      : Z(e) && i && i.scheme == e.scheme
                      ? (c = ce)
                      : Z(e)
                      ? (c = de)
                      : "/" == a[l + 1]
                      ? ((c = le), l++)
                      : ((e.cannotBeABaseURL = !0), e.path.push(""), (c = ke));
                }
                break;
              case ue:
                if (!i || (i.cannotBeABaseURL && "#" != o)) return P;
                if (i.cannotBeABaseURL && "#" == o) {
                  (e.scheme = i.scheme),
                    (e.path = i.path.slice()),
                    (e.query = i.query),
                    (e.fragment = ""),
                    (e.cannotBeABaseURL = !0),
                    (c = Ce);
                  break;
                }
                c = "file" == i.scheme ? be : he;
                continue;
              case ce:
                if ("/" != o || "/" != a[l + 1]) {
                  c = he;
                  continue;
                }
                (c = pe), l++;
                break;
              case le:
                if ("/" == o) {
                  c = ve;
                  break;
                }
                c = we;
                continue;
              case he:
                if (((e.scheme = i.scheme), o == n))
                  (e.username = i.username),
                    (e.password = i.password),
                    (e.host = i.host),
                    (e.port = i.port),
                    (e.path = i.path.slice()),
                    (e.query = i.query);
                else if ("/" == o || ("\\" == o && Z(e))) c = fe;
                else if ("?" == o)
                  (e.username = i.username),
                    (e.password = i.password),
                    (e.host = i.host),
                    (e.port = i.port),
                    (e.path = i.path.slice()),
                    (e.query = ""),
                    (c = xe);
                else {
                  if ("#" != o) {
                    (e.username = i.username),
                      (e.password = i.password),
                      (e.host = i.host),
                      (e.port = i.port),
                      (e.path = i.path.slice()),
                      e.path.pop(),
                      (c = we);
                    continue;
                  }
                  (e.username = i.username),
                    (e.password = i.password),
                    (e.host = i.host),
                    (e.port = i.port),
                    (e.path = i.path.slice()),
                    (e.query = i.query),
                    (e.fragment = ""),
                    (c = Ce);
                }
                break;
              case fe:
                if (!Z(e) || ("/" != o && "\\" != o)) {
                  if ("/" != o) {
                    (e.username = i.username),
                      (e.password = i.password),
                      (e.host = i.host),
                      (e.port = i.port),
                      (c = we);
                    continue;
                  }
                  c = ve;
                } else c = pe;
                break;
              case de:
                if (((c = pe), "/" != o || "/" != f.charAt(l + 1))) continue;
                l++;
                break;
              case pe:
                if ("/" != o && "\\" != o) {
                  c = ve;
                  continue;
                }
                break;
              case ve:
                if ("@" == o) {
                  p && (f = "%40" + f), (p = !0), (s = d(f));
                  for (var m = 0; m < s.length; m++) {
                    var y = s[m];
                    if (":" != y || g) {
                      var b = K(y, Q);
                      g ? (e.password += b) : (e.username += b);
                    } else g = !0;
                  }
                  f = "";
                } else if (
                  o == n ||
                  "/" == o ||
                  "?" == o ||
                  "#" == o ||
                  ("\\" == o && Z(e))
                ) {
                  if (p && "" == f) return C;
                  (l -= d(f).length + 1), (f = ""), (c = ge);
                } else f += o;
                break;
              case ge:
              case me:
                if (r && "file" == e.scheme) {
                  c = Ae;
                  continue;
                }
                if (":" != o || v) {
                  if (
                    o == n ||
                    "/" == o ||
                    "?" == o ||
                    "#" == o ||
                    ("\\" == o && Z(e))
                  ) {
                    if (Z(e) && "" == f) return R;
                    if (r && "" == f && ($(e) || null !== e.port)) return;
                    if ((u = W(e, f))) return u;
                    if (((f = ""), (c = Se), r)) return;
                    continue;
                  }
                  "[" == o ? (v = !0) : "]" == o && (v = !1), (f += o);
                } else {
                  if ("" == f) return R;
                  if ((u = W(e, f))) return u;
                  if (((f = ""), (c = ye), r == me)) return;
                }
                break;
              case ye:
                if (!L.test(o)) {
                  if (
                    o == n ||
                    "/" == o ||
                    "?" == o ||
                    "#" == o ||
                    ("\\" == o && Z(e)) ||
                    r
                  ) {
                    if ("" != f) {
                      var _ = parseInt(f, 10);
                      if (_ > 65535) return T;
                      (e.port = Z(e) && _ === J[e.scheme] ? null : _), (f = "");
                    }
                    if (r) return;
                    c = Se;
                    continue;
                  }
                  return T;
                }
                f += o;
                break;
              case be:
                if (((e.scheme = "file"), "/" == o || "\\" == o)) c = _e;
                else {
                  if (!i || "file" != i.scheme) {
                    c = we;
                    continue;
                  }
                  if (o == n)
                    (e.host = i.host),
                      (e.path = i.path.slice()),
                      (e.query = i.query);
                  else if ("?" == o)
                    (e.host = i.host),
                      (e.path = i.path.slice()),
                      (e.query = ""),
                      (c = xe);
                  else {
                    if ("#" != o) {
                      re(a.slice(l).join("")) ||
                        ((e.host = i.host), (e.path = i.path.slice()), ne(e)),
                        (c = we);
                      continue;
                    }
                    (e.host = i.host),
                      (e.path = i.path.slice()),
                      (e.query = i.query),
                      (e.fragment = ""),
                      (c = Ce);
                  }
                }
                break;
              case _e:
                if ("/" == o || "\\" == o) {
                  c = Ae;
                  break;
                }
                i &&
                  "file" == i.scheme &&
                  !re(a.slice(l).join("")) &&
                  (te(i.path[0], !0)
                    ? e.path.push(i.path[0])
                    : (e.host = i.host)),
                  (c = we);
                continue;
              case Ae:
                if (o == n || "/" == o || "\\" == o || "?" == o || "#" == o) {
                  if (!r && te(f)) c = we;
                  else if ("" == f) {
                    if (((e.host = ""), r)) return;
                    c = Se;
                  } else {
                    if ((u = W(e, f))) return u;
                    if (("localhost" == e.host && (e.host = ""), r)) return;
                    (f = ""), (c = Se);
                  }
                  continue;
                }
                f += o;
                break;
              case Se:
                if (Z(e)) {
                  if (((c = we), "/" != o && "\\" != o)) continue;
                } else if (r || "?" != o)
                  if (r || "#" != o) {
                    if (o != n && ((c = we), "/" != o)) continue;
                  } else (e.fragment = ""), (c = Ce);
                else (e.query = ""), (c = xe);
                break;
              case we:
                if (
                  o == n ||
                  "/" == o ||
                  ("\\" == o && Z(e)) ||
                  (!r && ("?" == o || "#" == o))
                ) {
                  if (
                    (ae(f)
                      ? (ne(e),
                        "/" == o || ("\\" == o && Z(e)) || e.path.push(""))
                      : ie(f)
                      ? "/" == o || ("\\" == o && Z(e)) || e.path.push("")
                      : ("file" == e.scheme &&
                          !e.path.length &&
                          te(f) &&
                          (e.host && (e.host = ""), (f = f.charAt(0) + ":")),
                        e.path.push(f)),
                    (f = ""),
                    "file" == e.scheme && (o == n || "?" == o || "#" == o))
                  )
                    for (; e.path.length > 1 && "" === e.path[0]; )
                      e.path.shift();
                  "?" == o
                    ? ((e.query = ""), (c = xe))
                    : "#" == o && ((e.fragment = ""), (c = Ce));
                } else f += K(o, V);
                break;
              case ke:
                "?" == o
                  ? ((e.query = ""), (c = xe))
                  : "#" == o
                  ? ((e.fragment = ""), (c = Ce))
                  : o != n && (e.path[0] += K(o, X));
                break;
              case xe:
                r || "#" != o
                  ? o != n &&
                    ("'" == o && Z(e)
                      ? (e.query += "%27")
                      : "#" == o
                      ? (e.query += "%23")
                      : (e.query += K(o, X)))
                  : ((e.fragment = ""), (c = Ce));
                break;
              case Ce:
                o != n && (e.fragment += K(o, Y));
            }
            l++;
          }
        },
        Re = function(e) {
          var t,
            r,
            n = l(this, Re, "URL"),
            i = arguments.length > 1 ? arguments[1] : void 0,
            o = String(e),
            s = S(n, { type: "URL" });
          if (void 0 !== i)
            if (i instanceof Re) t = w(i);
            else if ((r = Pe((t = {}), String(i)))) throw TypeError(r);
          if ((r = Pe(s, o, null, t))) throw TypeError(r);
          var u = (s.searchParams = new _()),
            c = A(u);
          c.updateSearchParams(s.query),
            (c.updateURL = function() {
              s.query = String(u) || null;
            }),
            a ||
              ((n.href = Ee.call(n)),
              (n.origin = Oe.call(n)),
              (n.protocol = Le.call(n)),
              (n.username = Fe.call(n)),
              (n.password = Ie.call(n)),
              (n.host = je.call(n)),
              (n.hostname = Me.call(n)),
              (n.port = Ne.call(n)),
              (n.pathname = De.call(n)),
              (n.search = qe.call(n)),
              (n.searchParams = Ue.call(n)),
              (n.hash = We.call(n)));
        },
        Te = Re.prototype,
        Ee = function() {
          var e = w(this),
            t = e.scheme,
            r = e.username,
            n = e.password,
            i = e.host,
            a = e.port,
            o = e.path,
            s = e.query,
            u = e.fragment,
            c = t + ":";
          return (
            null !== i
              ? ((c += "//"),
                $(e) && (c += r + (n ? ":" + n : "") + "@"),
                (c += H(i)),
                null !== a && (c += ":" + a))
              : "file" == t && (c += "//"),
            (c += e.cannotBeABaseURL
              ? o[0]
              : o.length
              ? "/" + o.join("/")
              : ""),
            null !== s && (c += "?" + s),
            null !== u && (c += "#" + u),
            c
          );
        },
        Oe = function() {
          var e = w(this),
            t = e.scheme,
            r = e.port;
          if ("blob" == t)
            try {
              return new URL(t.path[0]).origin;
            } catch (n) {
              return "null";
            }
          return "file" != t && Z(e)
            ? t + "://" + H(e.host) + (null !== r ? ":" + r : "")
            : "null";
        },
        Le = function() {
          return w(this).scheme + ":";
        },
        Fe = function() {
          return w(this).username;
        },
        Ie = function() {
          return w(this).password;
        },
        je = function() {
          var e = w(this),
            t = e.host,
            r = e.port;
          return null === t ? "" : null === r ? H(t) : H(t) + ":" + r;
        },
        Me = function() {
          var e = w(this).host;
          return null === e ? "" : H(e);
        },
        Ne = function() {
          var e = w(this).port;
          return null === e ? "" : String(e);
        },
        De = function() {
          var e = w(this),
            t = e.path;
          return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : "";
        },
        qe = function() {
          var e = w(this).query;
          return e ? "?" + e : "";
        },
        Ue = function() {
          return w(this).searchParams;
        },
        We = function() {
          var e = w(this).fragment;
          return e ? "#" + e : "";
        },
        Be = function(e, t) {
          return { get: e, set: t, configurable: !0, enumerable: !0 };
        };
      if (
        (a &&
          u(Te, {
            href: Be(Ee, function(e) {
              var t = w(this),
                r = String(e),
                n = Pe(t, r);
              if (n) throw TypeError(n);
              A(t.searchParams).updateSearchParams(t.query);
            }),
            origin: Be(Oe),
            protocol: Be(Le, function(e) {
              var t = w(this);
              Pe(t, String(e) + ":", oe);
            }),
            username: Be(Fe, function(e) {
              var t = w(this),
                r = d(String(e));
              if (!ee(t)) {
                t.username = "";
                for (var n = 0; n < r.length; n++) t.username += K(r[n], Q);
              }
            }),
            password: Be(Ie, function(e) {
              var t = w(this),
                r = d(String(e));
              if (!ee(t)) {
                t.password = "";
                for (var n = 0; n < r.length; n++) t.password += K(r[n], Q);
              }
            }),
            host: Be(je, function(e) {
              var t = w(this);
              t.cannotBeABaseURL || Pe(t, String(e), ge);
            }),
            hostname: Be(Me, function(e) {
              var t = w(this);
              t.cannotBeABaseURL || Pe(t, String(e), me);
            }),
            port: Be(Ne, function(e) {
              var t = w(this);
              ee(t) ||
                ((e = String(e)), "" == e ? (t.port = null) : Pe(t, e, ye));
            }),
            pathname: Be(De, function(e) {
              var t = w(this);
              t.cannotBeABaseURL || ((t.path = []), Pe(t, e + "", Se));
            }),
            search: Be(qe, function(e) {
              var t = w(this);
              (e = String(e)),
                "" == e
                  ? (t.query = null)
                  : ("?" == e.charAt(0) && (e = e.slice(1)),
                    (t.query = ""),
                    Pe(t, e, xe)),
                A(t.searchParams).updateSearchParams(t.query);
            }),
            searchParams: Be(Ue),
            hash: Be(We, function(e) {
              var t = w(this);
              return (
                (e = String(e)),
                "" == e
                  ? void (t.fragment = null)
                  : ("#" == e.charAt(0) && (e = e.slice(1)),
                    (t.fragment = ""),
                    void Pe(t, e, Ce))
              );
            }),
          }),
        c(
          Te,
          "toJSON",
          function() {
            return Ee.call(this);
          },
          { enumerable: !0 }
        ),
        c(
          Te,
          "toString",
          function() {
            return Ee.call(this);
          },
          { enumerable: !0 }
        ),
        b)
      ) {
        var Ge = b.createObjectURL,
          ze = b.revokeObjectURL;
        Ge &&
          c(Re, "createObjectURL", function(e) {
            return Ge.apply(b, arguments);
          }),
          ze &&
            c(Re, "revokeObjectURL", function(e) {
              return ze.apply(b, arguments);
            });
      }
      g(Re, "URL"), i({ global: !0, forced: !o, sham: !a }, { URL: Re });
    },
    function(e, t, r) {
      var n = r(11),
        i = r(51),
        a = r(29),
        o = i("iterator");
      e.exports = !n(function() {
        var e = new URL("b?e=1", "http://a"),
          t = e.searchParams;
        return (
          (e.pathname = "c%20d"),
          (a && !e.toJSON) ||
            !t.sort ||
            "http://a/c%20d?e=1" !== e.href ||
            "1" !== t.get("e") ||
            "a=1" !== String(new URLSearchParams("?a=1")) ||
            !t[o] ||
            "a" !== new URL("https://a@b").username ||
            "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
            "xn--e1aybc" !== new URL("http://тест").host ||
            "#%D0%B1" !== new URL("http://a#б").hash
        );
      });
    },
    function(e, t, r) {
      "use strict";
      var n = 2147483647,
        i = 36,
        a = 1,
        o = 26,
        s = 38,
        u = 700,
        c = 72,
        l = 128,
        h = "-",
        f = /[^\0-\u007E]/,
        d = /[.\u3002\uFF0E\uFF61]/g,
        p = "Overflow: input needs wider integers to process",
        v = i - a,
        g = Math.floor,
        m = String.fromCharCode,
        y = function(e) {
          for (var t = [], r = 0, n = e.length; r < n; ) {
            var i = e.charCodeAt(r++);
            if (i >= 55296 && i <= 56319 && r < n) {
              var a = e.charCodeAt(r++);
              56320 == (64512 & a)
                ? t.push(((1023 & i) << 10) + (1023 & a) + 65536)
                : (t.push(i), r--);
            } else t.push(i);
          }
          return t;
        },
        b = function(e) {
          return e + 22 + 75 * (e < 26);
        },
        _ = function(e, t, r) {
          var n = 0;
          for (
            e = r ? g(e / u) : e >> 1, e += g(e / t);
            e > (v * o) >> 1;
            n += i
          )
            e = g(e / v);
          return g(n + ((v + 1) * e) / (e + s));
        },
        A = function(e) {
          var t = [];
          e = y(e);
          var r,
            s,
            u = e.length,
            f = l,
            d = 0,
            v = c;
          for (r = 0; r < e.length; r++) (s = e[r]), s < 128 && t.push(m(s));
          var A = t.length,
            S = A;
          for (A && t.push(h); S < u; ) {
            var w = n;
            for (r = 0; r < e.length; r++)
              (s = e[r]), s >= f && s < w && (w = s);
            var k = S + 1;
            if (w - f > g((n - d) / k)) throw RangeError(p);
            for (d += (w - f) * k, f = w, r = 0; r < e.length; r++) {
              if (((s = e[r]), s < f && ++d > n)) throw RangeError(p);
              if (s == f) {
                for (var x = d, C = i; ; C += i) {
                  var P = C <= v ? a : C >= v + o ? o : C - v;
                  if (x < P) break;
                  var R = x - P,
                    T = i - P;
                  t.push(m(b(P + (R % T)))), (x = g(R / T));
                }
                t.push(m(b(x))), (v = _(d, k, S == A)), (d = 0), ++S;
              }
            }
            ++d, ++f;
          }
          return t.join("");
        };
      e.exports = function(e) {
        var t,
          r,
          n = [],
          i = e
            .toLowerCase()
            .replace(d, ".")
            .split(".");
        for (t = 0; t < i.length; t++)
          (r = i[t]), n.push(f.test(r) ? "xn--" + A(r) : r);
        return n.join(".");
      };
    },
    function(e, t, r) {
      "use strict";
      r(104);
      var n = r(7),
        i = r(123),
        a = r(26),
        o = r(107),
        s = r(77),
        u = r(72),
        c = r(31),
        l = r(109),
        h = r(20),
        f = r(55),
        d = r(25),
        p = r(19),
        v = r(126),
        g = r(86),
        m = r(51),
        y = m("iterator"),
        b = "URLSearchParams",
        _ = b + "Iterator",
        A = c.set,
        S = c.getterFor(b),
        w = c.getterFor(_),
        k = /\+/g,
        x = Array(4),
        C = function(e) {
          return (
            x[e - 1] ||
            (x[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
          );
        },
        P = function(e) {
          try {
            return decodeURIComponent(e);
          } catch (t) {
            return e;
          }
        },
        R = function(e) {
          var t = e.replace(k, " "),
            r = 4;
          try {
            return decodeURIComponent(t);
          } catch (n) {
            for (; r; ) t = t.replace(C(r--), P);
            return t;
          }
        },
        T = /[!'()~]|%20/g,
        E = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
        },
        O = function(e) {
          return E[e];
        },
        L = function(e) {
          return encodeURIComponent(e).replace(T, O);
        },
        F = function(e, t) {
          if (t)
            for (var r, n, i = t.split("&"), a = 0; a < i.length; )
              (r = i[a++]),
                r.length &&
                  ((n = r.split("=")),
                  e.push({ key: R(n.shift()), value: R(n.join("=")) }));
        },
        I = function(e) {
          (this.entries.length = 0), F(this.entries, e);
        },
        j = function(e, t) {
          if (e < t) throw TypeError("Not enough arguments");
        },
        M = u(
          function(e, t) {
            A(this, { type: _, iterator: v(S(e).entries), kind: t });
          },
          "Iterator",
          function() {
            var e = w(this),
              t = e.kind,
              r = e.iterator.next(),
              n = r.value;
            return (
              r.done ||
                (r.value =
                  "keys" === t
                    ? n.key
                    : "values" === t
                    ? n.value
                    : [n.key, n.value]),
              r
            );
          }
        ),
        N = function() {
          l(this, N, b);
          var e,
            t,
            r,
            n,
            i,
            a,
            o,
            s = arguments.length > 0 ? arguments[0] : void 0,
            u = this,
            c = [];
          if (
            (A(u, {
              type: b,
              entries: c,
              updateURL: function() {},
              updateSearchParams: I,
            }),
            void 0 !== s)
          )
            if (p(s))
              if (((e = g(s)), "function" == typeof e))
                for (t = e.call(s); !(r = t.next()).done; ) {
                  if (
                    ((n = v(d(r.value))),
                    (i = n.next()).done ||
                      (a = n.next()).done ||
                      !n.next().done)
                  )
                    throw TypeError("Expected sequence with length 2");
                  c.push({ key: i.value + "", value: a.value + "" });
                }
              else for (o in s) h(s, o) && c.push({ key: o, value: s[o] + "" });
            else
              F(
                c,
                "string" == typeof s
                  ? "?" === s.charAt(0)
                    ? s.slice(1)
                    : s
                  : s + ""
              );
        },
        D = N.prototype;
      o(
        D,
        {
          append: function(e, t) {
            j(arguments.length, 2);
            var r = S(this);
            r.entries.push({ key: e + "", value: t + "" }), r.updateURL();
          },
          delete: function(e) {
            j(arguments.length, 1);
            for (
              var t = S(this), r = t.entries, n = e + "", i = 0;
              i < r.length;

            )
              r[i].key === n ? r.splice(i, 1) : i++;
            t.updateURL();
          },
          get: function(e) {
            j(arguments.length, 1);
            for (var t = S(this).entries, r = e + "", n = 0; n < t.length; n++)
              if (t[n].key === r) return t[n].value;
            return null;
          },
          getAll: function(e) {
            j(arguments.length, 1);
            for (
              var t = S(this).entries, r = e + "", n = [], i = 0;
              i < t.length;
              i++
            )
              t[i].key === r && n.push(t[i].value);
            return n;
          },
          has: function(e) {
            j(arguments.length, 1);
            for (var t = S(this).entries, r = e + "", n = 0; n < t.length; )
              if (t[n++].key === r) return !0;
            return !1;
          },
          set: function(e, t) {
            j(arguments.length, 1);
            for (
              var r,
                n = S(this),
                i = n.entries,
                a = !1,
                o = e + "",
                s = t + "",
                u = 0;
              u < i.length;
              u++
            )
              (r = i[u]),
                r.key === o &&
                  (a ? i.splice(u--, 1) : ((a = !0), (r.value = s)));
            a || i.push({ key: o, value: s }), n.updateURL();
          },
          sort: function() {
            var e,
              t,
              r,
              n = S(this),
              i = n.entries,
              a = i.slice();
            for (i.length = 0, r = 0; r < a.length; r++) {
              for (e = a[r], t = 0; t < r; t++)
                if (i[t].key > e.key) {
                  i.splice(t, 0, e);
                  break;
                }
              t === r && i.push(e);
            }
            n.updateURL();
          },
          forEach: function(e) {
            for (
              var t,
                r = S(this).entries,
                n = f(e, arguments.length > 1 ? arguments[1] : void 0, 3),
                i = 0;
              i < r.length;

            )
              (t = r[i++]), n(t.value, t.key, this);
          },
          keys: function() {
            return new M(this, "keys");
          },
          values: function() {
            return new M(this, "values");
          },
          entries: function() {
            return new M(this, "entries");
          },
        },
        { enumerable: !0 }
      ),
        a(D, y, D.entries),
        a(
          D,
          "toString",
          function() {
            for (var e, t = S(this).entries, r = [], n = 0; n < t.length; )
              (e = t[n++]), r.push(L(e.key) + "=" + L(e.value));
            return r.join("&");
          },
          { enumerable: !0 }
        ),
        s(N, b),
        n({ global: !0, forced: !i }, { URLSearchParams: N }),
        (e.exports = { URLSearchParams: N, getState: S });
    },
    function(e, t, r) {
      var n = r(25),
        i = r(86);
      e.exports = function(e) {
        var t = i(e);
        if ("function" != typeof t)
          throw TypeError(String(e) + " is not iterable");
        return n(t.call(e));
      };
    },
    function(e, t, r) {
      "use strict";
      var n = r(7);
      n(
        { target: "URL", proto: !0, enumerable: !0 },
        {
          toJSON: function() {
            return URL.prototype.toString.call(this);
          },
        }
      );
    },
    function(e, t, r) {
      r(100), r(129), r(102);
      var n = r(39);
      e.exports = n.WeakMap;
    },
    function(e, t, r) {
      "use strict";
      var n,
        i = r(8),
        a = r(107),
        o = r(130),
        s = r(132),
        u = r(134),
        c = r(19),
        l = r(31).enforce,
        h = r(32),
        f = !i.ActiveXObject && "ActiveXObject" in i,
        d = Object.isExtensible,
        p = function(e) {
          return function() {
            return e(this, arguments.length ? arguments[0] : void 0);
          };
        },
        v = (e.exports = s("WeakMap", p, u, !0, !0));
      if (h && f) {
        (n = u.getConstructor(p, "WeakMap", !0)), (o.REQUIRED = !0);
        var g = v.prototype,
          m = g["delete"],
          y = g.has,
          b = g.get,
          _ = g.set;
        a(g, {
          delete: function(e) {
            if (c(e) && !d(e)) {
              var t = l(this);
              return (
                t.frozen || (t.frozen = new n()),
                m.call(this, e) || t.frozen["delete"](e)
              );
            }
            return m.call(this, e);
          },
          has: function(e) {
            if (c(e) && !d(e)) {
              var t = l(this);
              return (
                t.frozen || (t.frozen = new n()),
                y.call(this, e) || t.frozen.has(e)
              );
            }
            return y.call(this, e);
          },
          get: function(e) {
            if (c(e) && !d(e)) {
              var t = l(this);
              return (
                t.frozen || (t.frozen = new n()),
                y.call(this, e) ? b.call(this, e) : t.frozen.get(e)
              );
            }
            return b.call(this, e);
          },
          set: function(e, t) {
            if (c(e) && !d(e)) {
              var r = l(this);
              r.frozen || (r.frozen = new n()),
                y.call(this, e) ? _.call(this, e, t) : r.frozen.set(e, t);
            } else _.call(this, e, t);
            return this;
          },
        });
      }
    },
    function(e, t, r) {
      var n = r(35),
        i = r(19),
        a = r(20),
        o = r(24).f,
        s = r(34),
        u = r(131),
        c = s("meta"),
        l = 0,
        h =
          Object.isExtensible ||
          function() {
            return !0;
          },
        f = function(e) {
          o(e, c, { value: { objectID: "O" + ++l, weakData: {} } });
        },
        d = function(e, t) {
          if (!i(e))
            return "symbol" == typeof e
              ? e
              : ("string" == typeof e ? "S" : "P") + e;
          if (!a(e, c)) {
            if (!h(e)) return "F";
            if (!t) return "E";
            f(e);
          }
          return e[c].objectID;
        },
        p = function(e, t) {
          if (!a(e, c)) {
            if (!h(e)) return !0;
            if (!t) return !1;
            f(e);
          }
          return e[c].weakData;
        },
        v = function(e) {
          return u && g.REQUIRED && h(e) && !a(e, c) && f(e), e;
        },
        g = (e.exports = {
          REQUIRED: !1,
          fastKey: d,
          getWeakData: p,
          onFreeze: v,
        });
      n[c] = !0;
    },
    function(e, t, r) {
      var n = r(11);
      e.exports = !n(function() {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    },
    function(e, t, r) {
      "use strict";
      var n = r(7),
        i = r(8),
        a = r(48),
        o = r(26),
        s = r(130),
        u = r(110),
        c = r(109),
        l = r(19),
        h = r(11),
        f = r(88),
        d = r(77),
        p = r(133);
      e.exports = function(e, t, r, v, g) {
        var m = i[e],
          y = m && m.prototype,
          b = m,
          _ = v ? "set" : "add",
          A = {},
          S = function(e) {
            var t = y[e];
            o(
              y,
              e,
              "add" == e
                ? function(e) {
                    return t.call(this, 0 === e ? 0 : e), this;
                  }
                : "delete" == e
                ? function(e) {
                    return !(g && !l(e)) && t.call(this, 0 === e ? 0 : e);
                  }
                : "get" == e
                ? function(e) {
                    return g && !l(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                  }
                : "has" == e
                ? function(e) {
                    return !(g && !l(e)) && t.call(this, 0 === e ? 0 : e);
                  }
                : function(e, r) {
                    return t.call(this, 0 === e ? 0 : e, r), this;
                  }
            );
          };
        if (
          a(
            e,
            "function" != typeof m ||
              !(
                g ||
                (y.forEach &&
                  !h(function() {
                    new m().entries().next();
                  }))
              )
          )
        )
          (b = r.getConstructor(t, e, v, _)), (s.REQUIRED = !0);
        else if (a(e, !0)) {
          var w = new b(),
            k = w[_](g ? {} : -0, 1) != w,
            x = h(function() {
              w.has(1);
            }),
            C = f(function(e) {
              new m(e);
            }),
            P =
              !g &&
              h(function() {
                for (var e = new m(), t = 5; t--; ) e[_](t, t);
                return !e.has(-0);
              });
          C ||
            ((b = t(function(t, r) {
              c(t, b, e);
              var n = p(new m(), t, b);
              return void 0 != r && u(r, n[_], n, v), n;
            })),
            (b.prototype = y),
            (y.constructor = b)),
            (x || P) && (S("delete"), S("has"), v && S("get")),
            (P || k) && S(_),
            g && y.clear && delete y.clear;
        }
        return (
          (A[e] = b),
          n({ global: !0, forced: b != m }, A),
          d(b, e),
          g || r.setStrong(b, e, v),
          b
        );
      };
    },
    function(e, t, r) {
      var n = r(19),
        i = r(79);
      e.exports = function(e, t, r) {
        var a, o;
        return (
          i &&
            "function" == typeof (a = t.constructor) &&
            a !== r &&
            n((o = a.prototype)) &&
            o !== r.prototype &&
            i(e, o),
          e
        );
      };
    },
    function(e, t, r) {
      "use strict";
      var n = r(107),
        i = r(130).getWeakData,
        a = r(25),
        o = r(19),
        s = r(109),
        u = r(110),
        c = r(135),
        l = r(20),
        h = r(31),
        f = h.set,
        d = h.getterFor,
        p = c.find,
        v = c.findIndex,
        g = 0,
        m = function(e) {
          return e.frozen || (e.frozen = new y());
        },
        y = function() {
          this.entries = [];
        },
        b = function(e, t) {
          return p(e.entries, function(e) {
            return e[0] === t;
          });
        };
      (y.prototype = {
        get: function(e) {
          var t = b(this, e);
          if (t) return t[1];
        },
        has: function(e) {
          return !!b(this, e);
        },
        set: function(e, t) {
          var r = b(this, e);
          r ? (r[1] = t) : this.entries.push([e, t]);
        },
        delete: function(e) {
          var t = v(this.entries, function(t) {
            return t[0] === e;
          });
          return ~t && this.entries.splice(t, 1), !!~t;
        },
      }),
        (e.exports = {
          getConstructor: function(e, t, r, c) {
            var h = e(function(e, n) {
                s(e, h, t),
                  f(e, { type: t, id: g++, frozen: void 0 }),
                  void 0 != n && u(n, e[c], e, r);
              }),
              p = d(t),
              v = function(e, t, r) {
                var n = p(e),
                  o = i(a(t), !0);
                return o === !0 ? m(n).set(t, r) : (o[n.id] = r), e;
              };
            return (
              n(h.prototype, {
                delete: function(e) {
                  var t = p(this);
                  if (!o(e)) return !1;
                  var r = i(e);
                  return r === !0
                    ? m(t)["delete"](e)
                    : r && l(r, t.id) && delete r[t.id];
                },
                has: function(e) {
                  var t = p(this);
                  if (!o(e)) return !1;
                  var r = i(e);
                  return r === !0 ? m(t).has(e) : r && l(r, t.id);
                },
              }),
              n(
                h.prototype,
                r
                  ? {
                      get: function(e) {
                        var t = p(this);
                        if (o(e)) {
                          var r = i(e);
                          return r === !0 ? m(t).get(e) : r ? r[t.id] : void 0;
                        }
                      },
                      set: function(e, t) {
                        return v(this, e, t);
                      },
                    }
                  : {
                      add: function(e) {
                        return v(this, e, !0);
                      },
                    }
              ),
              h
            );
          },
        });
    },
    function(e, t, r) {
      var n = r(55),
        i = r(15),
        a = r(75),
        o = r(43),
        s = r(136),
        u = [].push,
        c = function(e) {
          var t = 1 == e,
            r = 2 == e,
            c = 3 == e,
            l = 4 == e,
            h = 6 == e,
            f = 5 == e || h;
          return function(d, p, v, g) {
            for (
              var m,
                y,
                b = a(d),
                _ = i(b),
                A = n(p, v, 3),
                S = o(_.length),
                w = 0,
                k = g || s,
                x = t ? k(d, S) : r ? k(d, 0) : void 0;
              S > w;
              w++
            )
              if ((f || w in _) && ((m = _[w]), (y = A(m, w, b)), e))
                if (t) x[w] = y;
                else if (y)
                  switch (e) {
                    case 3:
                      return !0;
                    case 5:
                      return m;
                    case 6:
                      return w;
                    case 2:
                      u.call(x, m);
                  }
                else if (l) return !1;
            return h ? -1 : c || l ? l : x;
          };
        };
      e.exports = {
        forEach: c(0),
        map: c(1),
        filter: c(2),
        some: c(3),
        every: c(4),
        find: c(5),
        findIndex: c(6),
      };
    },
    function(e, t, r) {
      var n = r(19),
        i = r(137),
        a = r(51),
        o = a("species");
      e.exports = function(e, t) {
        var r;
        return (
          i(e) &&
            ((r = e.constructor),
            "function" != typeof r || (r !== Array && !i(r.prototype))
              ? n(r) && ((r = r[o]), null === r && (r = void 0))
              : (r = void 0)),
          new (void 0 === r ? Array : r)(0 === t ? 0 : t)
        );
      };
    },
    function(e, t, r) {
      var n = r(16);
      e.exports =
        Array.isArray ||
        function(e) {
          return "Array" == n(e);
        };
    },
    function(e, t, r) {
      r(100), r(139), r(102);
      var n = r(39);
      e.exports = n.WeakSet;
    },
    function(e, t, r) {
      "use strict";
      var n = r(132),
        i = r(134);
      n(
        "WeakSet",
        function(e) {
          return function() {
            return e(this, arguments.length ? arguments[0] : void 0);
          };
        },
        i,
        !1,
        !0
      );
    },
    function(e, t, r) {
      r(141);
      var n = r(54);
      e.exports = n("String", "codePointAt");
    },
    function(e, t, r) {
      "use strict";
      var n = r(7),
        i = r(70).codeAt;
      n(
        { target: "String", proto: !0 },
        {
          codePointAt: function(e) {
            return i(this, e);
          },
        }
      );
    },
    function(e, t, r) {
      r(143);
      var n = r(39);
      e.exports = n.String.fromCodePoint;
    },
    function(e, t, r) {
      var n = r(7),
        i = r(45),
        a = String.fromCharCode,
        o = String.fromCodePoint,
        s = !!o && 1 != o.length;
      n(
        { target: "String", stat: !0, forced: s },
        {
          fromCodePoint: function(e) {
            for (var t, r = [], n = arguments.length, o = 0; n > o; ) {
              if (((t = +arguments[o++]), i(t, 1114111) !== t))
                throw RangeError(t + " is not a valid code point");
              r.push(
                t < 65536
                  ? a(t)
                  : a(((t -= 65536) >> 10) + 55296, (t % 1024) + 56320)
              );
            }
            return r.join("");
          },
        }
      );
    },
    function(e, t, r) {
      r(145),
        r(100),
        r(147),
        r(151),
        r(152),
        r(153),
        r(154),
        r(155),
        r(156),
        r(157),
        r(158),
        r(159),
        r(160),
        r(161),
        r(162),
        r(163),
        r(164),
        r(165),
        r(166);
      var n = r(39);
      e.exports = n.Symbol;
    },
    function(e, t, r) {
      "use strict";
      var n = r(7),
        i = r(11),
        a = r(137),
        o = r(19),
        s = r(75),
        u = r(43),
        c = r(85),
        l = r(136),
        h = r(146),
        f = r(51),
        d = f("isConcatSpreadable"),
        p = 9007199254740991,
        v = "Maximum allowed index exceeded",
        g = !i(function() {
          var e = [];
          return (e[d] = !1), e.concat()[0] !== e;
        }),
        m = h("concat"),
        y = function(e) {
          if (!o(e)) return !1;
          var t = e[d];
          return void 0 !== t ? !!t : a(e);
        },
        b = !g || !m;
      n(
        { target: "Array", proto: !0, forced: b },
        {
          concat: function(e) {
            var t,
              r,
              n,
              i,
              a,
              o = s(this),
              h = l(o, 0),
              f = 0;
            for (t = -1, n = arguments.length; t < n; t++)
              if (((a = t === -1 ? o : arguments[t]), y(a))) {
                if (((i = u(a.length)), f + i > p)) throw TypeError(v);
                for (r = 0; r < i; r++, f++) r in a && c(h, f, a[r]);
              } else {
                if (f >= p) throw TypeError(v);
                c(h, f++, a);
              }
            return (h.length = f), h;
          },
        }
      );
    },
    function(e, t, r) {
      var n = r(11),
        i = r(51),
        a = i("species");
      e.exports = function(e) {
        return !n(function() {
          var t = [],
            r = (t.constructor = {});
          return (
            (r[a] = function() {
              return { foo: 1 };
            }),
            1 !== t[e](Boolean).foo
          );
        });
      };
    },
    function(e, t, r) {
      "use strict";
      var n = r(7),
        i = r(8),
        a = r(29),
        o = r(10),
        s = r(52),
        u = r(11),
        c = r(20),
        l = r(137),
        h = r(19),
        f = r(25),
        d = r(75),
        p = r(14),
        v = r(18),
        g = r(13),
        m = r(64),
        y = r(66),
        b = r(40),
        _ = r(148),
        A = r(47),
        S = r(9),
        w = r(24),
        k = r(12),
        x = r(23),
        C = r(26),
        P = r(27),
        R = r(33),
        T = r(35),
        E = r(34),
        O = r(51),
        L = r(149),
        F = r(150),
        I = r(77),
        j = r(31),
        M = r(135).forEach,
        N = R("hidden"),
        D = "Symbol",
        q = "prototype",
        U = O("toPrimitive"),
        W = j.set,
        B = j.getterFor(D),
        G = Object[q],
        z = i.Symbol,
        H = i.JSON,
        X = H && H.stringify,
        Y = S.f,
        V = w.f,
        Q = _.f,
        K = k.f,
        J = P("symbols"),
        Z = P("op-symbols"),
        $ = P("string-to-symbol-registry"),
        ee = P("symbol-to-string-registry"),
        te = P("wks"),
        re = i.QObject,
        ne = !re || !re[q] || !re[q].findChild,
        ie =
          o &&
          u(function() {
            return (
              7 !=
              m(
                V({}, "a", {
                  get: function() {
                    return V(this, "a", { value: 7 }).a;
                  },
                })
              ).a
            );
          })
            ? function(e, t, r) {
                var n = Y(G, t);
                n && delete G[t], V(e, t, r), n && e !== G && V(G, t, n);
              }
            : V,
        ae = function(e, t) {
          var r = (J[e] = m(z[q]));
          return (
            W(r, { type: D, tag: e, description: t }),
            o || (r.description = t),
            r
          );
        },
        oe =
          s && "symbol" == typeof z.iterator
            ? function(e) {
                return "symbol" == typeof e;
              }
            : function(e) {
                return Object(e) instanceof z;
              },
        se = function(e, t, r) {
          e === G && se(Z, t, r), f(e);
          var n = v(t, !0);
          return (
            f(r),
            c(J, n)
              ? (r.enumerable
                  ? (c(e, N) && e[N][n] && (e[N][n] = !1),
                    (r = m(r, { enumerable: g(0, !1) })))
                  : (c(e, N) || V(e, N, g(1, {})), (e[N][n] = !0)),
                ie(e, n, r))
              : V(e, n, r)
          );
        },
        ue = function(e, t) {
          f(e);
          var r = p(t),
            n = y(r).concat(de(r));
          return (
            M(n, function(t) {
              (o && !le.call(r, t)) || se(e, t, r[t]);
            }),
            e
          );
        },
        ce = function(e, t) {
          return void 0 === t ? m(e) : ue(m(e), t);
        },
        le = function(e) {
          var t = v(e, !0),
            r = K.call(this, t);
          return (
            !(this === G && c(J, t) && !c(Z, t)) &&
            (!(r || !c(this, t) || !c(J, t) || (c(this, N) && this[N][t])) || r)
          );
        },
        he = function(e, t) {
          var r = p(e),
            n = v(t, !0);
          if (r !== G || !c(J, n) || c(Z, n)) {
            var i = Y(r, n);
            return (
              !i || !c(J, n) || (c(r, N) && r[N][n]) || (i.enumerable = !0), i
            );
          }
        },
        fe = function(e) {
          var t = Q(p(e)),
            r = [];
          return (
            M(t, function(e) {
              c(J, e) || c(T, e) || r.push(e);
            }),
            r
          );
        },
        de = function(e) {
          var t = e === G,
            r = Q(t ? Z : p(e)),
            n = [];
          return (
            M(r, function(e) {
              !c(J, e) || (t && !c(G, e)) || n.push(J[e]);
            }),
            n
          );
        };
      s ||
        ((z = function() {
          if (this instanceof z) throw TypeError("Symbol is not a constructor");
          var e =
              arguments.length && void 0 !== arguments[0]
                ? String(arguments[0])
                : void 0,
            t = E(e),
            r = function(e) {
              this === G && r.call(Z, e),
                c(this, N) && c(this[N], t) && (this[N][t] = !1),
                ie(this, t, g(1, e));
            };
          return o && ne && ie(G, t, { configurable: !0, set: r }), ae(t, e);
        }),
        C(z[q], "toString", function() {
          return B(this).tag;
        }),
        (k.f = le),
        (w.f = se),
        (S.f = he),
        (b.f = _.f = fe),
        (A.f = de),
        o &&
          (V(z[q], "description", {
            configurable: !0,
            get: function() {
              return B(this).description;
            },
          }),
          a || C(G, "propertyIsEnumerable", le, { unsafe: !0 })),
        (L.f = function(e) {
          return ae(O(e), e);
        })),
        n({ global: !0, wrap: !0, forced: !s, sham: !s }, { Symbol: z }),
        M(y(te), function(e) {
          F(e);
        }),
        n(
          { target: D, stat: !0, forced: !s },
          {
            for: function(e) {
              var t = String(e);
              if (c($, t)) return $[t];
              var r = z(t);
              return ($[t] = r), (ee[r] = t), r;
            },
            keyFor: function(e) {
              if (!oe(e)) throw TypeError(e + " is not a symbol");
              if (c(ee, e)) return ee[e];
            },
            useSetter: function() {
              ne = !0;
            },
            useSimple: function() {
              ne = !1;
            },
          }
        ),
        n(
          { target: "Object", stat: !0, forced: !s, sham: !o },
          {
            create: ce,
            defineProperty: se,
            defineProperties: ue,
            getOwnPropertyDescriptor: he,
          }
        ),
        n(
          { target: "Object", stat: !0, forced: !s },
          { getOwnPropertyNames: fe, getOwnPropertySymbols: de }
        ),
        n(
          {
            target: "Object",
            stat: !0,
            forced: u(function() {
              A.f(1);
            }),
          },
          {
            getOwnPropertySymbols: function(e) {
              return A.f(d(e));
            },
          }
        ),
        H &&
          n(
            {
              target: "JSON",
              stat: !0,
              forced:
                !s ||
                u(function() {
                  var e = z();
                  return (
                    "[null]" != X([e]) ||
                    "{}" != X({ a: e }) ||
                    "{}" != X(Object(e))
                  );
                }),
            },
            {
              stringify: function(e) {
                for (var t, r, n = [e], i = 1; arguments.length > i; )
                  n.push(arguments[i++]);
                if (((r = t = n[1]), (h(t) || void 0 !== e) && !oe(e)))
                  return (
                    l(t) ||
                      (t = function(e, t) {
                        if (
                          ("function" == typeof r && (t = r.call(this, e, t)),
                          !oe(t))
                        )
                          return t;
                      }),
                    (n[1] = t),
                    X.apply(H, n)
                  );
              },
            }
          ),
        z[q][U] || x(z[q], U, z[q].valueOf),
        I(z, D),
        (T[N] = !0);
    },
    function(e, t, r) {
      var n = r(14),
        i = r(40).f,
        a = {}.toString,
        o =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [],
        s = function(e) {
          try {
            return i(e);
          } catch (t) {
            return o.slice();
          }
        };
      e.exports.f = function(e) {
        return o && "[object Window]" == a.call(e) ? s(e) : i(n(e));
      };
    },
    function(e, t, r) {
      t.f = r(51);
    },
    function(e, t, r) {
      var n = r(39),
        i = r(20),
        a = r(149),
        o = r(24).f;
      e.exports = function(e) {
        var t = n.Symbol || (n.Symbol = {});
        i(t, e) || o(t, e, { value: a.f(e) });
      };
    },
    function(e, t, r) {
      var n = r(150);
      n("asyncIterator");
    },
    function(e, t, r) {
      "use strict";
      var n = r(7),
        i = r(10),
        a = r(8),
        o = r(20),
        s = r(19),
        u = r(24).f,
        c = r(36),
        l = a.Symbol;
      if (
        i &&
        "function" == typeof l &&
        (!("description" in l.prototype) || void 0 !== l().description)
      ) {
        var h = {},
          f = function() {
            var e =
                arguments.length < 1 || void 0 === arguments[0]
                  ? void 0
                  : String(arguments[0]),
              t = this instanceof f ? new l(e) : void 0 === e ? l() : l(e);
            return "" === e && (h[t] = !0), t;
          };
        c(f, l);
        var d = (f.prototype = l.prototype);
        d.constructor = f;
        var p = d.toString,
          v = "Symbol(test)" == String(l("test")),
          g = /^Symbol\((.*)\)[^)]+$/;
        u(d, "description", {
          configurable: !0,
          get: function() {
            var e = s(this) ? this.valueOf() : this,
              t = p.call(e);
            if (o(h, e)) return "";
            var r = v ? t.slice(7, -1) : t.replace(g, "$1");
            return "" === r ? void 0 : r;
          },
        }),
          n({ global: !0, forced: !0 }, { Symbol: f });
      }
    },
    function(e, t, r) {
      var n = r(150);
      n("hasInstance");
    },
    function(e, t, r) {
      var n = r(150);
      n("isConcatSpreadable");
    },
    function(e, t, r) {
      var n = r(150);
      n("iterator");
    },
    function(e, t, r) {
      var n = r(150);
      n("match");
    },
    function(e, t, r) {
      var n = r(150);
      n("matchAll");
    },
    function(e, t, r) {
      var n = r(150);
      n("replace");
    },
    function(e, t, r) {
      var n = r(150);
      n("search");
    },
    function(e, t, r) {
      var n = r(150);
      n("species");
    },
    function(e, t, r) {
      var n = r(150);
      n("split");
    },
    function(e, t, r) {
      var n = r(150);
      n("toPrimitive");
    },
    function(e, t, r) {
      var n = r(150);
      n("toStringTag");
    },
    function(e, t, r) {
      var n = r(150);
      n("unscopables");
    },
    function(e, t, r) {
      var n = r(77);
      n(Math, "Math", !0);
    },
    function(e, t, r) {
      var n = r(8),
        i = r(77);
      i(n.JSON, "JSON", !0);
    },
    function(e, t, r) {
      r(168);
      var n = r(54);
      e.exports = n("String", "padStart");
    },
    function(e, t, r) {
      "use strict";
      var n = r(7),
        i = r(169).start,
        a = r(171);
      n(
        { target: "String", proto: !0, forced: a },
        {
          padStart: function(e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    function(e, t, r) {
      var n = r(43),
        i = r(170),
        a = r(17),
        o = Math.ceil,
        s = function(e) {
          return function(t, r, s) {
            var u,
              c,
              l = String(a(t)),
              h = l.length,
              f = void 0 === s ? " " : String(s),
              d = n(r);
            return d <= h || "" == f
              ? l
              : ((u = d - h),
                (c = i.call(f, o(u / f.length))),
                c.length > u && (c = c.slice(0, u)),
                e ? l + c : c + l);
          };
        };
      e.exports = { start: s(!1), end: s(!0) };
    },
    function(e, t, r) {
      "use strict";
      var n = r(44),
        i = r(17);
      e.exports =
        "".repeat ||
        function(e) {
          var t = String(i(this)),
            r = "",
            a = n(e);
          if (a < 0 || a == 1 / 0)
            throw RangeError("Wrong number of repetitions");
          for (; a > 0; (a >>>= 1) && (t += t)) 1 & a && (r += t);
          return r;
        };
    },
    function(e, t, r) {
      var n = r(114);
      e.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);
    },
    function(e, t, r) {
      r(173);
      var n = r(54);
      e.exports = n("String", "padEnd");
    },
    function(e, t, r) {
      "use strict";
      var n = r(7),
        i = r(169).end,
        a = r(171);
      n(
        { target: "String", proto: !0, forced: a },
        {
          padEnd: function(e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
          },
        }
      );
    },
    function(e, t, r) {
      r(175);
      var n = r(39);
      e.exports = n.Object.values;
    },
    function(e, t, r) {
      var n = r(7),
        i = r(176).values;
      n(
        { target: "Object", stat: !0 },
        {
          values: function(e) {
            return i(e);
          },
        }
      );
    },
    function(e, t, r) {
      var n = r(10),
        i = r(66),
        a = r(14),
        o = r(12).f,
        s = function(e) {
          return function(t) {
            for (
              var r, s = a(t), u = i(s), c = u.length, l = 0, h = [];
              c > l;

            )
              (r = u[l++]),
                (n && !o.call(s, r)) || h.push(e ? [r, s[r]] : s[r]);
            return h;
          };
        };
      e.exports = { entries: s(!0), values: s(!1) };
    },
    function(e, t, r) {
      "use strict";
      var n = !1;
      if ("undefined" != typeof ReadableStream)
        try {
          new ReadableStream({
            start: function(e) {
              e.close();
            },
          }),
            (n = !0);
        } catch (i) {}
      n
        ? (t.ReadableStream = ReadableStream)
        : (t.ReadableStream = r(178).ReadableStream);
    },
    function(e, t, r) {
      "use strict";
      function n() {}
      function i(e) {
        return ("object" == typeof e && null !== e) || "function" == typeof e;
      }
      function a(e) {
        return e.slice();
      }
      function o(e, t, r, n, i) {
        new Uint8Array(e).set(new Uint8Array(r, n, i), t);
      }
      function s(e) {
        return u(e) !== !1 && e !== 1 / 0;
      }
      function u(e) {
        return "number" == typeof e && !kr(e) && !(e < 0);
      }
      function c(e, t, r) {
        if ("function" != typeof e)
          throw new TypeError("Argument is not a function");
        return Function.prototype.apply.call(e, t, r);
      }
      function l(e, t, r, n) {
        var i = e[t];
        if (void 0 !== i) {
          if ("function" != typeof i)
            throw new TypeError(i + " is not a method");
          switch (r) {
            case 0:
              return function() {
                return f(i, e, n);
              };
            case 1:
              return function(t) {
                var r = [t].concat(n);
                return f(i, e, r);
              };
          }
        }
        return function() {
          return Promise.resolve();
        };
      }
      function h(e, t, r) {
        var n = e[t];
        if (void 0 !== n) return c(n, e, r);
      }
      function f(e, t, r) {
        try {
          return Promise.resolve(c(e, t, r));
        } catch (n) {
          return Promise.reject(n);
        }
      }
      function d(e) {
        return e;
      }
      function p(e) {
        return !1;
      }
      function v(e) {
        if (((e = Number(e)), kr(e) || e < 0))
          throw new RangeError(
            "highWaterMark property of a queuing strategy must be non-negative and non-NaN"
          );
        return e;
      }
      function g(e) {
        if (void 0 === e)
          return function() {
            return 1;
          };
        if ("function" != typeof e)
          throw new TypeError(
            "size property of a queuing strategy must be a function"
          );
        return function(t) {
          return e(t);
        };
      }
      function m(e, t, r) {
        var n = null;
        r === !0 && (n = Object.prototype);
        var i = Object.create(n);
        return (i.value = e), (i.done = t), i;
      }
      function y(e, t) {
        (e._forAuthorCode = !0),
          (e._ownerReadableStream = t),
          (t._reader = e),
          "readable" === t._state
            ? S(e)
            : "closed" === t._state
            ? k(e)
            : w(e, t._storedError);
      }
      function b(e, t) {
        var r = e._ownerReadableStream;
        return Jt(r, t);
      }
      function _(e) {
        "readable" === e._ownerReadableStream._state
          ? x(
              e,
              new TypeError(
                "Reader was released and can no longer be used to monitor the stream's closedness"
              )
            )
          : C(
              e,
              new TypeError(
                "Reader was released and can no longer be used to monitor the stream's closedness"
              )
            ),
          (e._ownerReadableStream._reader = void 0),
          (e._ownerReadableStream = void 0);
      }
      function A(e) {
        return new TypeError(
          "Cannot " + e + " a stream using a released reader"
        );
      }
      function S(e) {
        e._closedPromise = new Promise(function(t, r) {
          (e._closedPromise_resolve = t), (e._closedPromise_reject = r);
        });
      }
      function w(e, t) {
        S(e), x(e, t);
      }
      function k(e) {
        S(e), P(e);
      }
      function x(e, t) {
        e._closedPromise["catch"](n),
          e._closedPromise_reject(t),
          (e._closedPromise_resolve = void 0),
          (e._closedPromise_reject = void 0);
      }
      function C(e, t) {
        w(e, t);
      }
      function P(e) {
        e._closedPromise_resolve(void 0),
          (e._closedPromise_resolve = void 0),
          (e._closedPromise_reject = void 0);
      }
      function R(e, t) {
        void 0 === t && (t = !1);
        var r = new Tr(e);
        return (r._forAuthorCode = t), r;
      }
      function T(e) {
        var t = new Promise(function(t, r) {
          var n = { _resolve: t, _reject: r };
          e._reader._readRequests.push(n);
        });
        return t;
      }
      function E(e, t, r) {
        var n = e._reader,
          i = n._readRequests.shift();
        i._resolve(m(t, r, n._forAuthorCode));
      }
      function O(e) {
        return e._reader._readRequests.length;
      }
      function L(e) {
        var t = e._reader;
        return void 0 !== t && !!F(t);
      }
      function F(e) {
        return (
          !!i(e) && !!Object.prototype.hasOwnProperty.call(e, "_readRequests")
        );
      }
      function I(e) {
        var t = e._ownerReadableStream;
        return (
          (t._disturbed = !0),
          "closed" === t._state
            ? Promise.resolve(m(void 0, !0, e._forAuthorCode))
            : "errored" === t._state
            ? Promise.reject(t._storedError)
            : t._readableStreamController[Rr]()
        );
      }
      function j(e) {
        return new TypeError(
          "ReadableStreamDefaultReader.prototype." +
            e +
            " can only be used on a ReadableStreamDefaultReader"
        );
      }
      function M(e, t) {
        void 0 === t && (t = !1);
        var r = R(e),
          n = Object.create(Er);
        return (n._asyncIteratorReader = r), (n._preventCancel = Boolean(t)), n;
      }
      function N(e) {
        return (
          !!i(e) &&
          !!Object.prototype.hasOwnProperty.call(e, "_asyncIteratorReader")
        );
      }
      function D(e) {
        return new TypeError(
          "ReadableStreamAsyncIterator." +
            e +
            " can only be used on a ReadableSteamAsyncIterator"
        );
      }
      function q(e) {
        var t = e._queue.shift();
        return (
          (e._queueTotalSize -= t.size),
          e._queueTotalSize < 0 && (e._queueTotalSize = 0),
          t.value
        );
      }
      function U(e, t, r) {
        if (((r = Number(r)), !s(r)))
          throw new RangeError(
            "Size must be a finite, non-NaN, non-negative number."
          );
        e._queue.push({ value: t, size: r }), (e._queueTotalSize += r);
      }
      function W(e) {
        var t = e._queue.peek();
        return t.value;
      }
      function B(e) {
        (e._queue = new Cr()), (e._queueTotalSize = 0);
      }
      function G(e) {
        return new jr(e);
      }
      function z(e, t, r, n, i, a) {
        void 0 === i && (i = 1),
          void 0 === a &&
            (a = function() {
              return 1;
            });
        var o = Object.create(Ir.prototype);
        H(o);
        var s = Object.create(Mr.prototype);
        return be(o, s, e, t, r, n, i, a), o;
      }
      function H(e) {
        (e._state = "writable"),
          (e._storedError = void 0),
          (e._writer = void 0),
          (e._writableStreamController = void 0),
          (e._writeRequests = new Cr()),
          (e._inFlightWriteRequest = void 0),
          (e._closeRequest = void 0),
          (e._inFlightCloseRequest = void 0),
          (e._pendingAbortRequest = void 0),
          (e._backpressure = !1);
      }
      function X(e) {
        return (
          !!i(e) &&
          !!Object.prototype.hasOwnProperty.call(e, "_writableStreamController")
        );
      }
      function Y(e) {
        return void 0 !== e._writer;
      }
      function V(e, t) {
        var r = e._state;
        if ("closed" === r || "errored" === r) return Promise.resolve(void 0);
        if (void 0 !== e._pendingAbortRequest)
          return e._pendingAbortRequest._promise;
        var n = !1;
        "erroring" === r && ((n = !0), (t = void 0));
        var i = new Promise(function(r, i) {
          e._pendingAbortRequest = {
            _promise: void 0,
            _resolve: r,
            _reject: i,
            _reason: t,
            _wasAlreadyErroring: n,
          };
        });
        return (e._pendingAbortRequest._promise = i), n === !1 && J(e, t), i;
      }
      function Q(e) {
        var t = new Promise(function(t, r) {
          var n = { _resolve: t, _reject: r };
          e._writeRequests.push(n);
        });
        return t;
      }
      function K(e, t) {
        var r = e._state;
        return "writable" === r ? void J(e, t) : void Z(e);
      }
      function J(e, t) {
        var r = e._writableStreamController;
        (e._state = "erroring"), (e._storedError = t);
        var n = e._writer;
        void 0 !== n && pe(n, t), ie(e) === !1 && r._started === !0 && Z(e);
      }
      function Z(e) {
        (e._state = "errored"), e._writableStreamController[Fr]();
        var t = e._storedError;
        if (
          (e._writeRequests.forEach(function(e) {
            e._reject(t);
          }),
          (e._writeRequests = new Cr()),
          void 0 === e._pendingAbortRequest)
        )
          return void se(e);
        var r = e._pendingAbortRequest;
        if (((e._pendingAbortRequest = void 0), r._wasAlreadyErroring === !0))
          return r._reject(t), void se(e);
        var n = e._writableStreamController[Lr](r._reason);
        n.then(
          function() {
            r._resolve(), se(e);
          },
          function(t) {
            r._reject(t), se(e);
          }
        );
      }
      function $(e) {
        e._inFlightWriteRequest._resolve(void 0),
          (e._inFlightWriteRequest = void 0);
      }
      function ee(e, t) {
        e._inFlightWriteRequest._reject(t),
          (e._inFlightWriteRequest = void 0),
          K(e, t);
      }
      function te(e) {
        e._inFlightCloseRequest._resolve(void 0),
          (e._inFlightCloseRequest = void 0);
        var t = e._state;
        "erroring" === t &&
          ((e._storedError = void 0),
          void 0 !== e._pendingAbortRequest &&
            (e._pendingAbortRequest._resolve(),
            (e._pendingAbortRequest = void 0))),
          (e._state = "closed");
        var r = e._writer;
        void 0 !== r && Ue(r);
      }
      function re(e, t) {
        e._inFlightCloseRequest._reject(t),
          (e._inFlightCloseRequest = void 0),
          void 0 !== e._pendingAbortRequest &&
            (e._pendingAbortRequest._reject(t),
            (e._pendingAbortRequest = void 0)),
          K(e, t);
      }
      function ne(e) {
        return void 0 !== e._closeRequest || void 0 !== e._inFlightCloseRequest;
      }
      function ie(e) {
        return (
          void 0 !== e._inFlightWriteRequest ||
          void 0 !== e._inFlightCloseRequest
        );
      }
      function ae(e) {
        (e._inFlightCloseRequest = e._closeRequest), (e._closeRequest = void 0);
      }
      function oe(e) {
        e._inFlightWriteRequest = e._writeRequests.shift();
      }
      function se(e) {
        void 0 !== e._closeRequest &&
          (e._closeRequest._reject(e._storedError), (e._closeRequest = void 0));
        var t = e._writer;
        void 0 !== t && De(t, e._storedError);
      }
      function ue(e, t) {
        var r = e._writer;
        void 0 !== r && t !== e._backpressure && (t === !0 ? He(r) : Ye(r)),
          (e._backpressure = t);
      }
      function ce(e) {
        return (
          !!i(e) &&
          !!Object.prototype.hasOwnProperty.call(e, "_ownerWritableStream")
        );
      }
      function le(e, t) {
        var r = e._ownerWritableStream;
        return V(r, t);
      }
      function he(e) {
        var t = e._ownerWritableStream,
          r = t._state;
        if ("closed" === r || "errored" === r)
          return Promise.reject(
            new TypeError(
              "The stream (in " +
                r +
                " state) is not in the writable state and cannot be closed"
            )
          );
        var n = new Promise(function(e, r) {
          var n = { _resolve: e, _reject: r };
          t._closeRequest = n;
        });
        return (
          t._backpressure === !0 && "writable" === r && Ye(e),
          Se(t._writableStreamController),
          n
        );
      }
      function fe(e) {
        var t = e._ownerWritableStream,
          r = t._state;
        return ne(t) === !0 || "closed" === r
          ? Promise.resolve()
          : "errored" === r
          ? Promise.reject(t._storedError)
          : he(e);
      }
      function de(e, t) {
        "pending" === e._closedPromiseState ? De(e, t) : qe(e, t);
      }
      function pe(e, t) {
        "pending" === e._readyPromiseState ? ze(e, t) : Xe(e, t);
      }
      function ve(e) {
        var t = e._ownerWritableStream,
          r = t._state;
        return "errored" === r || "erroring" === r
          ? null
          : "closed" === r
          ? 0
          : ke(t._writableStreamController);
      }
      function ge(e) {
        var t = e._ownerWritableStream,
          r = new TypeError(
            "Writer was released and can no longer be used to monitor the stream's closedness"
          );
        pe(e, r),
          de(e, r),
          (t._writer = void 0),
          (e._ownerWritableStream = void 0);
      }
      function me(e, t) {
        var r = e._ownerWritableStream,
          n = r._writableStreamController,
          i = we(n, t);
        if (r !== e._ownerWritableStream) return Promise.reject(Ie("write to"));
        var a = r._state;
        if ("errored" === a) return Promise.reject(r._storedError);
        if (ne(r) === !0 || "closed" === a)
          return Promise.reject(
            new TypeError(
              "The stream is closing or closed and cannot be written to"
            )
          );
        if ("erroring" === a) return Promise.reject(r._storedError);
        var o = Q(r);
        return xe(n, t, i), o;
      }
      function ye(e) {
        return (
          !!i(e) &&
          !!Object.prototype.hasOwnProperty.call(e, "_controlledWritableStream")
        );
      }
      function be(e, t, r, n, i, a, o, s) {
        (t._controlledWritableStream = e),
          (e._writableStreamController = t),
          (t._queue = void 0),
          (t._queueTotalSize = void 0),
          B(t),
          (t._started = !1),
          (t._strategySizeAlgorithm = s),
          (t._strategyHWM = o),
          (t._writeAlgorithm = n),
          (t._closeAlgorithm = i),
          (t._abortAlgorithm = a);
        var u = Ee(t);
        ue(e, u);
        var c = r(),
          l = Promise.resolve(c);
        l.then(
          function() {
            (t._started = !0), Ce(t);
          },
          function(r) {
            (t._started = !0), K(e, r);
          }
        )["catch"](Or);
      }
      function _e(e, t, r, n) {
        function i() {
          return h(t, "start", [a]);
        }
        var a = Object.create(Mr.prototype),
          o = l(t, "write", 1, [a]),
          s = l(t, "close", 0, []),
          u = l(t, "abort", 1, []);
        be(e, a, i, o, s, u, r, n);
      }
      function Ae(e) {
        (e._writeAlgorithm = void 0),
          (e._closeAlgorithm = void 0),
          (e._abortAlgorithm = void 0),
          (e._strategySizeAlgorithm = void 0);
      }
      function Se(e) {
        U(e, "close", 0), Ce(e);
      }
      function we(e, t) {
        try {
          return e._strategySizeAlgorithm(t);
        } catch (r) {
          return Pe(e, r), 1;
        }
      }
      function ke(e) {
        return e._strategyHWM - e._queueTotalSize;
      }
      function xe(e, t, r) {
        var n = { chunk: t };
        try {
          U(e, n, r);
        } catch (i) {
          return void Pe(e, i);
        }
        var a = e._controlledWritableStream;
        if (ne(a) === !1 && "writable" === a._state) {
          var o = Ee(e);
          ue(a, o);
        }
        Ce(e);
      }
      function Ce(e) {
        var t = e._controlledWritableStream;
        if (e._started !== !1 && void 0 === t._inFlightWriteRequest) {
          var r = t._state;
          if ("erroring" === r) return void Z(t);
          if (0 !== e._queue.length) {
            var n = W(e);
            "close" === n ? Re(e) : Te(e, n.chunk);
          }
        }
      }
      function Pe(e, t) {
        "writable" === e._controlledWritableStream._state && Oe(e, t);
      }
      function Re(e) {
        var t = e._controlledWritableStream;
        ae(t), q(e);
        var r = e._closeAlgorithm();
        Ae(e),
          r
            .then(
              function() {
                te(t);
              },
              function(e) {
                re(t, e);
              }
            )
            ["catch"](Or);
      }
      function Te(e, t) {
        var r = e._controlledWritableStream;
        oe(r);
        var n = e._writeAlgorithm(t);
        n.then(
          function() {
            $(r);
            var t = r._state;
            if ((q(e), ne(r) === !1 && "writable" === t)) {
              var n = Ee(e);
              ue(r, n);
            }
            Ce(e);
          },
          function(t) {
            "writable" === r._state && Ae(e), ee(r, t);
          }
        )["catch"](Or);
      }
      function Ee(e) {
        var t = ke(e);
        return t <= 0;
      }
      function Oe(e, t) {
        var r = e._controlledWritableStream;
        Ae(e), J(r, t);
      }
      function Le(e) {
        return new TypeError(
          "WritableStream.prototype." +
            e +
            " can only be used on a WritableStream"
        );
      }
      function Fe(e) {
        return new TypeError(
          "WritableStreamDefaultWriter.prototype." +
            e +
            " can only be used on a WritableStreamDefaultWriter"
        );
      }
      function Ie(e) {
        return new TypeError(
          "Cannot " + e + " a stream using a released writer"
        );
      }
      function je(e) {
        e._closedPromise = new Promise(function(t, r) {
          (e._closedPromise_resolve = t),
            (e._closedPromise_reject = r),
            (e._closedPromiseState = "pending");
        });
      }
      function Me(e, t) {
        je(e), De(e, t);
      }
      function Ne(e) {
        je(e), Ue(e);
      }
      function De(e, t) {
        e._closedPromise["catch"](n),
          e._closedPromise_reject(t),
          (e._closedPromise_resolve = void 0),
          (e._closedPromise_reject = void 0),
          (e._closedPromiseState = "rejected");
      }
      function qe(e, t) {
        Me(e, t);
      }
      function Ue(e) {
        e._closedPromise_resolve(void 0),
          (e._closedPromise_resolve = void 0),
          (e._closedPromise_reject = void 0),
          (e._closedPromiseState = "resolved");
      }
      function We(e) {
        (e._readyPromise = new Promise(function(t, r) {
          (e._readyPromise_resolve = t), (e._readyPromise_reject = r);
        })),
          (e._readyPromiseState = "pending");
      }
      function Be(e, t) {
        We(e), ze(e, t);
      }
      function Ge(e) {
        We(e), Ye(e);
      }
      function ze(e, t) {
        e._readyPromise["catch"](n),
          e._readyPromise_reject(t),
          (e._readyPromise_resolve = void 0),
          (e._readyPromise_reject = void 0),
          (e._readyPromiseState = "rejected");
      }
      function He(e) {
        We(e);
      }
      function Xe(e, t) {
        Be(e, t);
      }
      function Ye(e) {
        e._readyPromise_resolve(void 0),
          (e._readyPromise_resolve = void 0),
          (e._readyPromise_reject = void 0),
          (e._readyPromiseState = "fulfilled");
      }
      function Ve(e, t, r, i, a, o) {
        var s = R(e),
          u = G(t),
          c = !1,
          l = Promise.resolve();
        return new Promise(function(h, f) {
          function d() {
            return new Promise(function(e, t) {
              function r(n) {
                n ? e() : p().then(r, t);
              }
              r(!1);
            });
          }
          function p() {
            return c === !0
              ? Promise.resolve(!0)
              : u._readyPromise.then(function() {
                  return I(s).then(function(e) {
                    var t = e.value,
                      r = e.done;
                    return r === !0 || ((l = me(u, t)["catch"](n)), !1);
                  });
                });
          }
          function v() {
            var e = l;
            return l.then(function() {
              return e !== l ? v() : void 0;
            });
          }
          function g(e, t, r) {
            "errored" === e._state
              ? r(e._storedError)
              : t["catch"](r)["catch"](Or);
          }
          function m(e, t, r) {
            "closed" === e._state ? r() : t.then(r)["catch"](Or);
          }
          function y(e, r, n) {
            function i() {
              e()
                .then(
                  function() {
                    return A(r, n);
                  },
                  function(e) {
                    return A(!0, e);
                  }
                )
                ["catch"](Or);
            }
            c !== !0 &&
              ((c = !0),
              "writable" === t._state && ne(t) === !1 ? v().then(i) : i());
          }
          function b(e, r) {
            c !== !0 &&
              ((c = !0),
              "writable" === t._state && ne(t) === !1
                ? v()
                    .then(function() {
                      return A(e, r);
                    })
                    ["catch"](Or)
                : A(e, r));
          }
          function A(e, t) {
            ge(u),
              _(s),
              void 0 !== o && o.removeEventListener("abort", S),
              e ? f(t) : h(void 0);
          }
          var S;
          if (void 0 !== o) {
            if (
              ((S = function() {
                var r = new DOMException("Aborted", "AbortError"),
                  n = [];
                i === !1 &&
                  n.push(function() {
                    return "writable" === t._state
                      ? V(t, r)
                      : Promise.resolve();
                  }),
                  a === !1 &&
                    n.push(function() {
                      return "readable" === e._state
                        ? Jt(e, r)
                        : Promise.resolve();
                    }),
                  y(
                    function() {
                      return Promise.all(
                        n.map(function(e) {
                          return e();
                        })
                      );
                    },
                    !0,
                    r
                  );
              }),
              o.aborted === !0)
            )
              return void S();
            o.addEventListener("abort", S);
          }
          if (
            (g(e, s._closedPromise, function(e) {
              i === !1
                ? y(
                    function() {
                      return V(t, e);
                    },
                    !0,
                    e
                  )
                : b(!0, e);
            }),
            g(t, u._closedPromise, function(t) {
              a === !1
                ? y(
                    function() {
                      return Jt(e, t);
                    },
                    !0,
                    t
                  )
                : b(!0, t);
            }),
            m(e, s._closedPromise, function() {
              r === !1
                ? y(function() {
                    return fe(u);
                  })
                : b();
            }),
            ne(t) === !0 || "closed" === t._state)
          ) {
            var w = new TypeError(
              "the destination writable stream closed before all data could be piped to it"
            );
            a === !1
              ? y(
                  function() {
                    return Jt(e, w);
                  },
                  !0,
                  w
                )
              : b(!0, w);
          }
          d()["catch"](Or);
        });
      }
      function Qe(e) {
        return (
          !!i(e) &&
          !!Object.prototype.hasOwnProperty.call(e, "_controlledReadableStream")
        );
      }
      function Ke(e) {
        var t = Je(e);
        if (t !== !1) {
          if (e._pulling === !0) return void (e._pullAgain = !0);
          e._pulling = !0;
          var r = e._pullAlgorithm();
          r.then(
            function() {
              (e._pulling = !1),
                e._pullAgain === !0 && ((e._pullAgain = !1), Ke(e));
            },
            function(t) {
              tt(e, t);
            }
          )["catch"](Or);
        }
      }
      function Je(e) {
        var t = e._controlledReadableStream;
        if (it(e) === !1) return !1;
        if (e._started === !1) return !1;
        if (Kt(t) === !0 && O(t) > 0) return !0;
        var r = rt(e);
        return r > 0;
      }
      function Ze(e) {
        (e._pullAlgorithm = void 0),
          (e._cancelAlgorithm = void 0),
          (e._strategySizeAlgorithm = void 0);
      }
      function $e(e) {
        var t = e._controlledReadableStream;
        (e._closeRequested = !0), 0 === e._queue.length && (Ze(e), Zt(t));
      }
      function et(e, t) {
        var r = e._controlledReadableStream;
        if (Kt(r) === !0 && O(r) > 0) E(r, t, !1);
        else {
          var n = void 0;
          try {
            n = e._strategySizeAlgorithm(t);
          } catch (i) {
            throw (tt(e, i), i);
          }
          try {
            U(e, t, n);
          } catch (a) {
            throw (tt(e, a), a);
          }
        }
        Ke(e);
      }
      function tt(e, t) {
        var r = e._controlledReadableStream;
        "readable" === r._state && (B(e), Ze(e), $t(r, t));
      }
      function rt(e) {
        var t = e._controlledReadableStream,
          r = t._state;
        return "errored" === r
          ? null
          : "closed" === r
          ? 0
          : e._strategyHWM - e._queueTotalSize;
      }
      function nt(e) {
        return Je(e) !== !0;
      }
      function it(e) {
        var t = e._controlledReadableStream._state;
        return e._closeRequested === !1 && "readable" === t;
      }
      function at(e, t, r, n, i, a, o) {
        (t._controlledReadableStream = e),
          (t._queue = void 0),
          (t._queueTotalSize = void 0),
          B(t),
          (t._started = !1),
          (t._closeRequested = !1),
          (t._pullAgain = !1),
          (t._pulling = !1),
          (t._strategySizeAlgorithm = o),
          (t._strategyHWM = a),
          (t._pullAlgorithm = n),
          (t._cancelAlgorithm = i),
          (e._readableStreamController = t);
        var s = r();
        Promise.resolve(s)
          .then(
            function() {
              (t._started = !0), Ke(t);
            },
            function(e) {
              tt(t, e);
            }
          )
          ["catch"](Or);
      }
      function ot(e, t, r, n) {
        function i() {
          return h(t, "start", [a]);
        }
        var a = Object.create(Nr.prototype),
          o = l(t, "pull", 0, [a]),
          s = l(t, "cancel", 1, []);
        at(e, a, i, o, s, r, n);
      }
      function st(e) {
        return new TypeError(
          "ReadableStreamDefaultController.prototype." +
            e +
            " can only be used on a ReadableStreamDefaultController"
        );
      }
      function ut(e, t) {
        function r() {
          if (d === !0) return Promise.resolve();
          d = !0;
          var e = I(f).then(function(e) {
            d = !1;
            var t = e.done;
            if (t === !0)
              return (
                p === !1 && $e(c._readableStreamController),
                void (v === !1 && $e(l._readableStreamController))
              );
            var r = e.value,
              n = r,
              i = r;
            p === !1 && et(c._readableStreamController, n),
              v === !1 && et(l._readableStreamController, i);
          });
          return e["catch"](Or), Promise.resolve();
        }
        function n(t) {
          if (((p = !0), (s = t), v === !0)) {
            var r = a([s, u]),
              n = Jt(e, r);
            h(n);
          }
          return g;
        }
        function i(t) {
          if (((v = !0), (u = t), p === !0)) {
            var r = a([s, u]),
              n = Jt(e, r);
            h(n);
          }
          return g;
        }
        function o() {}
        var s,
          u,
          c,
          l,
          h,
          f = R(e),
          d = !1,
          p = !1,
          v = !1,
          g = new Promise(function(e) {
            h = e;
          });
        return (
          (c = Yt(o, r, n)),
          (l = Yt(o, r, i)),
          f._closedPromise["catch"](function(e) {
            tt(c._readableStreamController, e),
              tt(l._readableStreamController, e);
          }),
          [c, l]
        );
      }
      function ct(e) {
        return (
          !!i(e) &&
          !!Object.prototype.hasOwnProperty.call(
            e,
            "_controlledReadableByteStream"
          )
        );
      }
      function lt(e) {
        return (
          !!i(e) &&
          !!Object.prototype.hasOwnProperty.call(
            e,
            "_associatedReadableByteStreamController"
          )
        );
      }
      function ht(e) {
        var t = Ct(e);
        if (t !== !1) {
          if (e._pulling === !0) return void (e._pullAgain = !0);
          e._pulling = !0;
          var r = e._pullAlgorithm();
          r.then(
            function() {
              (e._pulling = !1),
                e._pullAgain === !0 && ((e._pullAgain = !1), ht(e));
            },
            function(t) {
              Et(e, t);
            }
          )["catch"](Or);
        }
      }
      function ft(e) {
        bt(e), (e._pendingPullIntos = new Cr());
      }
      function dt(e, t) {
        var r = !1;
        "closed" === e._state && (r = !0);
        var n = pt(t);
        "default" === t.readerType ? E(e, n, r) : Wt(e, n, r);
      }
      function pt(e) {
        var t = e.bytesFilled,
          r = e.elementSize;
        return new e.ctor(e.buffer, e.byteOffset, t / r);
      }
      function vt(e, t, r, n) {
        e._queue.push({ buffer: t, byteOffset: r, byteLength: n }),
          (e._queueTotalSize += n);
      }
      function gt(e, t) {
        var r = t.elementSize,
          n = t.bytesFilled - (t.bytesFilled % r),
          i = Math.min(e._queueTotalSize, t.byteLength - t.bytesFilled),
          a = t.bytesFilled + i,
          s = a - (a % r),
          u = i,
          c = !1;
        s > n && ((u = s - t.bytesFilled), (c = !0));
        for (var l = e._queue; u > 0; ) {
          var h = l.peek(),
            f = Math.min(u, h.byteLength),
            d = t.byteOffset + t.bytesFilled;
          o(t.buffer, d, h.buffer, h.byteOffset, f),
            h.byteLength === f
              ? l.shift()
              : ((h.byteOffset += f), (h.byteLength -= f)),
            (e._queueTotalSize -= f),
            mt(e, f, t),
            (u -= f);
        }
        return c;
      }
      function mt(e, t, r) {
        bt(e), (r.bytesFilled += t);
      }
      function yt(e) {
        0 === e._queueTotalSize && e._closeRequested === !0
          ? (Pt(e), Zt(e._controlledReadableByteStream))
          : ht(e);
      }
      function bt(e) {
        void 0 !== e._byobRequest &&
          ((e._byobRequest._associatedReadableByteStreamController = void 0),
          (e._byobRequest._view = void 0),
          (e._byobRequest = void 0));
      }
      function _t(e) {
        for (; e._pendingPullIntos.length > 0; ) {
          if (0 === e._queueTotalSize) return;
          var t = e._pendingPullIntos.peek();
          gt(e, t) === !0 && (xt(e), dt(e._controlledReadableByteStream, t));
        }
      }
      function At(e, t) {
        var r = e._controlledReadableByteStream,
          n = 1;
        t.constructor !== DataView && (n = t.constructor.BYTES_PER_ELEMENT);
        var i = t.constructor,
          a = d(t.buffer),
          o = {
            buffer: a,
            byteOffset: t.byteOffset,
            byteLength: t.byteLength,
            bytesFilled: 0,
            elementSize: n,
            ctor: i,
            readerType: "byob",
          };
        if (e._pendingPullIntos.length > 0)
          return e._pendingPullIntos.push(o), Ut(r);
        if ("closed" === r._state) {
          var s = new i(o.buffer, o.byteOffset, 0);
          return Promise.resolve(m(s, !0, r._reader._forAuthorCode));
        }
        if (e._queueTotalSize > 0) {
          if (gt(e, o) === !0) {
            var u = pt(o);
            return yt(e), Promise.resolve(m(u, !1, r._reader._forAuthorCode));
          }
          if (e._closeRequested === !0) {
            var c = new TypeError(
              "Insufficient bytes to fill elements in the given buffer"
            );
            return Et(e, c), Promise.reject(c);
          }
        }
        e._pendingPullIntos.push(o);
        var l = Ut(r);
        return ht(e), l;
      }
      function St(e, t) {
        t.buffer = d(t.buffer);
        var r = e._controlledReadableByteStream;
        if (Gt(r) === !0)
          for (; Bt(r) > 0; ) {
            var n = xt(e);
            dt(r, n);
          }
      }
      function wt(e, t, r) {
        if (r.bytesFilled + t > r.byteLength)
          throw new RangeError("bytesWritten out of range");
        if ((mt(e, t, r), !(r.bytesFilled < r.elementSize))) {
          xt(e);
          var n = r.bytesFilled % r.elementSize;
          if (n > 0) {
            var i = r.byteOffset + r.bytesFilled,
              a = r.buffer.slice(i - n, i);
            vt(e, a, 0, a.byteLength);
          }
          (r.buffer = d(r.buffer)),
            (r.bytesFilled -= n),
            dt(e._controlledReadableByteStream, r),
            _t(e);
        }
      }
      function kt(e, t) {
        var r = e._pendingPullIntos.peek(),
          n = e._controlledReadableByteStream;
        if ("closed" === n._state) {
          if (0 !== t)
            throw new TypeError(
              "bytesWritten must be 0 when calling respond() on a closed stream"
            );
          St(e, r);
        } else wt(e, t, r);
        ht(e);
      }
      function xt(e) {
        var t = e._pendingPullIntos.shift();
        return bt(e), t;
      }
      function Ct(e) {
        var t = e._controlledReadableByteStream;
        if ("readable" !== t._state) return !1;
        if (e._closeRequested === !0) return !1;
        if (e._started === !1) return !1;
        if (L(t) === !0 && O(t) > 0) return !0;
        if (Gt(t) === !0 && Bt(t) > 0) return !0;
        var r = Ot(e);
        return r > 0;
      }
      function Pt(e) {
        (e._pullAlgorithm = void 0), (e._cancelAlgorithm = void 0);
      }
      function Rt(e) {
        var t = e._controlledReadableByteStream;
        if (e._queueTotalSize > 0) return void (e._closeRequested = !0);
        if (e._pendingPullIntos.length > 0) {
          var r = e._pendingPullIntos.peek();
          if (r.bytesFilled > 0) {
            var n = new TypeError(
              "Insufficient bytes to fill elements in the given buffer"
            );
            throw (Et(e, n), n);
          }
        }
        Pt(e), Zt(t);
      }
      function Tt(e, t) {
        var r = e._controlledReadableByteStream,
          n = t.buffer,
          i = t.byteOffset,
          a = t.byteLength,
          o = d(n);
        if (L(r) === !0)
          if (0 === O(r)) vt(e, o, i, a);
          else {
            var s = new Uint8Array(o, i, a);
            E(r, s, !1);
          }
        else Gt(r) === !0 ? (vt(e, o, i, a), _t(e)) : vt(e, o, i, a);
        ht(e);
      }
      function Et(e, t) {
        var r = e._controlledReadableByteStream;
        "readable" === r._state && (ft(e), B(e), Pt(e), $t(r, t));
      }
      function Ot(e) {
        var t = e._controlledReadableByteStream,
          r = t._state;
        return "errored" === r
          ? null
          : "closed" === r
          ? 0
          : e._strategyHWM - e._queueTotalSize;
      }
      function Lt(e, t) {
        if (((t = Number(t)), s(t) === !1))
          throw new RangeError("bytesWritten must be a finite");
        kt(e, t);
      }
      function Ft(e, t) {
        var r = e._pendingPullIntos.peek();
        if (r.byteOffset + r.bytesFilled !== t.byteOffset)
          throw new RangeError(
            "The region specified by view does not match byobRequest"
          );
        if (r.byteLength !== t.byteLength)
          throw new RangeError(
            "The buffer of view has different capacity than byobRequest"
          );
        (r.buffer = t.buffer), kt(e, t.byteLength);
      }
      function It(e, t, r, n, i, a, o) {
        (t._controlledReadableByteStream = e),
          (t._pullAgain = !1),
          (t._pulling = !1),
          (t._byobRequest = void 0),
          (t._queue = t._queueTotalSize = void 0),
          B(t),
          (t._closeRequested = !1),
          (t._started = !1),
          (t._strategyHWM = v(a)),
          (t._pullAlgorithm = n),
          (t._cancelAlgorithm = i),
          (t._autoAllocateChunkSize = o),
          (t._pendingPullIntos = new Cr()),
          (e._readableStreamController = t);
        var s = r();
        Promise.resolve(s)
          .then(
            function() {
              (t._started = !0), ht(t);
            },
            function(e) {
              Et(t, e);
            }
          )
          ["catch"](Or);
      }
      function jt(e, t, r) {
        function n() {
          return h(t, "start", [i]);
        }
        var i = Object.create(Ur.prototype),
          a = l(t, "pull", 0, [i]),
          o = l(t, "cancel", 1, []),
          s = t.autoAllocateChunkSize;
        if (void 0 !== s && ((s = Number(s)), Dr(s) === !1 || s <= 0))
          throw new RangeError(
            "autoAllocateChunkSize must be a positive integer"
          );
        It(e, i, n, a, o, r, s);
      }
      function Mt(e, t, r) {
        (e._associatedReadableByteStreamController = t), (e._view = r);
      }
      function Nt(e) {
        return new TypeError(
          "ReadableStreamBYOBRequest.prototype." +
            e +
            " can only be used on a ReadableStreamBYOBRequest"
        );
      }
      function Dt(e) {
        return new TypeError(
          "ReadableByteStreamController.prototype." +
            e +
            " can only be used on a ReadableByteStreamController"
        );
      }
      function qt(e, t) {
        void 0 === t && (t = !1);
        var r = new Wr(e);
        return (r._forAuthorCode = t), r;
      }
      function Ut(e) {
        var t = new Promise(function(t, r) {
          var n = { _resolve: t, _reject: r };
          e._reader._readIntoRequests.push(n);
        });
        return t;
      }
      function Wt(e, t, r) {
        var n = e._reader,
          i = n._readIntoRequests.shift();
        i._resolve(m(t, r, n._forAuthorCode));
      }
      function Bt(e) {
        return e._reader._readIntoRequests.length;
      }
      function Gt(e) {
        var t = e._reader;
        return void 0 !== t && !!zt(t);
      }
      function zt(e) {
        return (
          !!i(e) &&
          !!Object.prototype.hasOwnProperty.call(e, "_readIntoRequests")
        );
      }
      function Ht(e, t) {
        var r = e._ownerReadableStream;
        return (
          (r._disturbed = !0),
          "errored" === r._state
            ? Promise.reject(r._storedError)
            : At(r._readableStreamController, t)
        );
      }
      function Xt(e) {
        return new TypeError(
          "ReadableStreamBYOBReader.prototype." +
            e +
            " can only be used on a ReadableStreamBYOBReader"
        );
      }
      function Yt(e, t, r, n, i) {
        void 0 === n && (n = 1),
          void 0 === i &&
            (i = function() {
              return 1;
            });
        var a = Object.create(Br.prototype);
        Vt(a);
        var o = Object.create(Nr.prototype);
        return at(a, o, e, t, r, n, i), a;
      }
      function Vt(e) {
        (e._state = "readable"),
          (e._reader = void 0),
          (e._storedError = void 0),
          (e._disturbed = !1);
      }
      function Qt(e) {
        return (
          !!i(e) &&
          !!Object.prototype.hasOwnProperty.call(e, "_readableStreamController")
        );
      }
      function Kt(e) {
        return void 0 !== e._reader;
      }
      function Jt(e, t) {
        if (((e._disturbed = !0), "closed" === e._state))
          return Promise.resolve(void 0);
        if ("errored" === e._state) return Promise.reject(e._storedError);
        Zt(e);
        var r = e._readableStreamController[Pr](t);
        return r.then(function() {});
      }
      function Zt(e) {
        e._state = "closed";
        var t = e._reader;
        void 0 !== t &&
          (F(t) &&
            (t._readRequests.forEach(function(e) {
              e._resolve(m(void 0, !0, t._forAuthorCode));
            }),
            (t._readRequests = new Cr())),
          P(t));
      }
      function $t(e, t) {
        (e._state = "errored"), (e._storedError = t);
        var r = e._reader;
        void 0 !== r &&
          (F(r)
            ? (r._readRequests.forEach(function(e) {
                e._reject(t);
              }),
              (r._readRequests = new Cr()))
            : (r._readIntoRequests.forEach(function(e) {
                e._reject(t);
              }),
              (r._readIntoRequests = new Cr())),
          x(r, t));
      }
      function er(e) {
        if ("object" != typeof e || null === e) return !1;
        var t = Object.getOwnPropertyDescriptor(
          AbortSignal.prototype,
          "aborted"
        ).get;
        try {
          return t.call(e), !0;
        } catch (r) {
          return !1;
        }
      }
      function tr(e) {
        return new TypeError(
          "ReadableStream.prototype." +
            e +
            " can only be used on a ReadableStream"
        );
      }
      function rr(e, t, r, n, i, a) {
        function o() {
          return t;
        }
        function s(t) {
          return vr(e, t);
        }
        function u(t) {
          return gr(e, t);
        }
        function c() {
          return mr(e);
        }
        function l() {
          return yr(e);
        }
        function h(t) {
          return ar(e, t), Promise.resolve();
        }
        (e._writable = z(o, s, c, u, r, n)),
          (e._readable = Yt(o, l, h, i, a)),
          (e._backpressure = void 0),
          (e._backpressureChangePromise = void 0),
          (e._backpressureChangePromise_resolve = void 0),
          or(e, !0),
          (e._transformStreamController = void 0);
      }
      function nr(e) {
        return (
          !!i(e) &&
          !!Object.prototype.hasOwnProperty.call(
            e,
            "_transformStreamController"
          )
        );
      }
      function ir(e, t) {
        tt(e._readable._readableStreamController, t), ar(e, t);
      }
      function ar(e, t) {
        lr(e._transformStreamController),
          Pe(e._writable._writableStreamController, t),
          e._backpressure === !0 && or(e, !1);
      }
      function or(e, t) {
        void 0 !== e._backpressureChangePromise &&
          e._backpressureChangePromise_resolve(),
          (e._backpressureChangePromise = new Promise(function(t) {
            e._backpressureChangePromise_resolve = t;
          })),
          (e._backpressure = t);
      }
      function sr(e) {
        return (
          !!i(e) &&
          !!Object.prototype.hasOwnProperty.call(
            e,
            "_controlledTransformStream"
          )
        );
      }
      function ur(e, t, r, n) {
        (t._controlledTransformStream = e),
          (e._transformStreamController = t),
          (t._transformAlgorithm = r),
          (t._flushAlgorithm = n);
      }
      function cr(e, t) {
        var r = Object.create(Xr.prototype),
          n = function(e) {
            try {
              return hr(r, e), Promise.resolve();
            } catch (t) {
              return Promise.reject(t);
            }
          },
          i = t.transform;
        if (void 0 !== i) {
          if ("function" != typeof i)
            throw new TypeError("transform is not a method");
          n = function(e) {
            return f(i, t, [e, r]);
          };
        }
        var a = l(t, "flush", 0, [r]);
        ur(e, r, n, a);
      }
      function lr(e) {
        (e._transformAlgorithm = void 0), (e._flushAlgorithm = void 0);
      }
      function hr(e, t) {
        var r = e._controlledTransformStream,
          n = r._readable._readableStreamController;
        if (it(n) === !1)
          throw new TypeError(
            "Readable side is not in a state that permits enqueue"
          );
        try {
          et(n, t);
        } catch (i) {
          throw (ar(r, i), r._readable._storedError);
        }
        var a = nt(n);
        a !== r._backpressure && or(r, !0);
      }
      function fr(e, t) {
        ir(e._controlledTransformStream, t);
      }
      function dr(e, t) {
        var r = e._transformAlgorithm(t);
        return r["catch"](function(t) {
          throw (ir(e._controlledTransformStream, t), t);
        });
      }
      function pr(e) {
        var t = e._controlledTransformStream,
          r = t._readable._readableStreamController;
        it(r) === !0 && $e(r);
        var n = new TypeError("TransformStream terminated");
        ar(t, n);
      }
      function vr(e, t) {
        var r = e._transformStreamController;
        if (e._backpressure === !0) {
          var n = e._backpressureChangePromise;
          return n.then(function() {
            var n = e._writable,
              i = n._state;
            if ("erroring" === i) throw n._storedError;
            return dr(r, t);
          });
        }
        return dr(r, t);
      }
      function gr(e, t) {
        return ir(e, t), Promise.resolve();
      }
      function mr(e) {
        var t = e._readable,
          r = e._transformStreamController,
          n = r._flushAlgorithm();
        return (
          lr(r),
          n
            .then(function() {
              if ("errored" === t._state) throw t._storedError;
              var e = t._readableStreamController;
              it(e) === !0 && $e(e);
            })
            ["catch"](function(r) {
              throw (ir(e, r), t._storedError);
            })
        );
      }
      function yr(e) {
        return or(e, !1), e._backpressureChangePromise;
      }
      function br(e) {
        return new TypeError(
          "TransformStreamDefaultController.prototype." +
            e +
            " can only be used on a TransformStreamDefaultController"
        );
      }
      function _r(e) {
        return new TypeError(
          "TransformStream.prototype." +
            e +
            " can only be used on a TransformStream"
        );
      }
      r.r(t),
        r.d(t, "ByteLengthQueuingStrategy", function() {
          return Gr;
        }),
        r.d(t, "CountQueuingStrategy", function() {
          return zr;
        }),
        r.d(t, "ReadableStream", function() {
          return Br;
        }),
        r.d(t, "TransformStream", function() {
          return Hr;
        }),
        r.d(t, "WritableStream", function() {
          return Ir;
        });
      var Ar,
        Sr,
        wr =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? Symbol
            : function(e) {
                return "Symbol(" + e + ")";
              },
        kr =
          Number.isNaN ||
          function(e) {
            return e !== e;
          },
        xr = 16384,
        Cr = (function() {
          function e() {
            (this._cursor = 0),
              (this._size = 0),
              (this._front = { _elements: [], _next: void 0 }),
              (this._back = this._front),
              (this._cursor = 0),
              (this._size = 0);
          }
          return (
            Object.defineProperty(e.prototype, "length", {
              get: function() {
                return this._size;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.push = function(e) {
              var t = this._back,
                r = t;
              t._elements.length === xr - 1 &&
                (r = { _elements: [], _next: void 0 }),
                t._elements.push(e),
                r !== t && ((this._back = r), (t._next = r)),
                ++this._size;
            }),
            (e.prototype.shift = function() {
              var e = this._front,
                t = e,
                r = this._cursor,
                n = r + 1,
                i = e._elements,
                a = i[r];
              return (
                n === xr && ((t = e._next), (n = 0)),
                --this._size,
                (this._cursor = n),
                e !== t && (this._front = t),
                (i[r] = void 0),
                a
              );
            }),
            (e.prototype.forEach = function(e) {
              for (
                var t = this._cursor, r = this._front, n = r._elements;
                !(
                  (t === n.length && void 0 === r._next) ||
                  (t === n.length &&
                    ((r = r._next), (n = r._elements), (t = 0), 0 === n.length))
                );

              )
                e(n[t]), ++t;
            }),
            (e.prototype.peek = function() {
              var e = this._front,
                t = this._cursor;
              return e._elements[t];
            }),
            e
          );
        })(),
        Pr = wr("[[CancelSteps]]"),
        Rr = wr("[[PullSteps]]"),
        Tr = (function() {
          function e(e) {
            if (Qt(e) === !1)
              throw new TypeError(
                "ReadableStreamDefaultReader can only be constructed with a ReadableStream instance"
              );
            if (Kt(e) === !0)
              throw new TypeError(
                "This stream has already been locked for exclusive reading by another reader"
              );
            y(this, e), (this._readRequests = new Cr());
          }
          return (
            Object.defineProperty(e.prototype, "closed", {
              get: function() {
                return F(this)
                  ? this._closedPromise
                  : Promise.reject(j("closed"));
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.cancel = function(e) {
              return F(this)
                ? void 0 === this._ownerReadableStream
                  ? Promise.reject(A("cancel"))
                  : b(this, e)
                : Promise.reject(j("cancel"));
            }),
            (e.prototype.read = function() {
              return F(this)
                ? void 0 === this._ownerReadableStream
                  ? Promise.reject(A("read from"))
                  : I(this)
                : Promise.reject(j("read"));
            }),
            (e.prototype.releaseLock = function() {
              if (!F(this)) throw j("releaseLock");
              if (void 0 !== this._ownerReadableStream) {
                if (this._readRequests.length > 0)
                  throw new TypeError(
                    "Tried to release a reader lock when that reader has pending read() calls un-settled"
                  );
                _(this);
              }
            }),
            e
          );
        })();
      "symbol" == typeof wr.asyncIterator &&
        ((Ar = {}),
        (Ar[wr.asyncIterator] = function() {
          return this;
        }),
        (Sr = Ar),
        Object.defineProperty(Sr, wr.asyncIterator, { enumerable: !1 }));
      var Er = {
        next: function() {
          if (N(this) === !1) return Promise.reject(D("next"));
          var e = this._asyncIteratorReader;
          return void 0 === e._ownerReadableStream
            ? Promise.reject(A("iterate"))
            : I(e).then(function(t) {
                var r = t.done;
                r && _(e);
                var n = t.value;
                return m(n, r, !0);
              });
        },
        return: function(e) {
          if (N(this) === !1) return Promise.reject(D("next"));
          var t = this._asyncIteratorReader;
          if (void 0 === t._ownerReadableStream)
            return Promise.reject(A("finish iterating"));
          if (t._readRequests.length > 0)
            return Promise.reject(
              new TypeError(
                "Tried to release a reader lock when that reader has pending read() calls un-settled"
              )
            );
          if (this._preventCancel === !1) {
            var r = b(t, e);
            return (
              _(t),
              r.then(function() {
                return m(e, !0, !0);
              })
            );
          }
          return _(t), Promise.resolve(m(e, !0, !0));
        },
      };
      void 0 !== Sr && Object.setPrototypeOf(Er, Sr),
        Object.defineProperty(Er, "next", { enumerable: !1 }),
        Object.defineProperty(Er, "return", { enumerable: !1 });
      var Or = n,
        Lr = wr("[[AbortSteps]]"),
        Fr = wr("[[ErrorSteps]]"),
        Ir = (function() {
          function e(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = {}), H(this);
            var r = t.size,
              n = t.highWaterMark,
              i = e.type;
            if (void 0 !== i) throw new RangeError("Invalid type is specified");
            var a = g(r);
            void 0 === n && (n = 1), (n = v(n)), _e(this, e, n, a);
          }
          return (
            Object.defineProperty(e.prototype, "locked", {
              get: function() {
                if (X(this) === !1) throw Le("locked");
                return Y(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.abort = function(e) {
              return X(this) === !1
                ? Promise.reject(Le("abort"))
                : Y(this) === !0
                ? Promise.reject(
                    new TypeError(
                      "Cannot abort a stream that already has a writer"
                    )
                  )
                : V(this, e);
            }),
            (e.prototype.getWriter = function() {
              if (X(this) === !1) throw Le("getWriter");
              return G(this);
            }),
            e
          );
        })(),
        jr = (function() {
          function e(e) {
            if (X(e) === !1)
              throw new TypeError(
                "WritableStreamDefaultWriter can only be constructed with a WritableStream instance"
              );
            if (Y(e) === !0)
              throw new TypeError(
                "This stream has already been locked for exclusive writing by another writer"
              );
            (this._ownerWritableStream = e), (e._writer = this);
            var t = e._state;
            if ("writable" === t)
              ne(e) === !1 && e._backpressure === !0 ? We(this) : Ge(this),
                je(this);
            else if ("erroring" === t) Be(this, e._storedError), je(this);
            else if ("closed" === t) Ge(this), Ne(this);
            else {
              var r = e._storedError;
              Be(this, r), Me(this, r);
            }
          }
          return (
            Object.defineProperty(e.prototype, "closed", {
              get: function() {
                return ce(this) === !1
                  ? Promise.reject(Fe("closed"))
                  : this._closedPromise;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "desiredSize", {
              get: function() {
                if (ce(this) === !1) throw Fe("desiredSize");
                if (void 0 === this._ownerWritableStream)
                  throw Ie("desiredSize");
                return ve(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "ready", {
              get: function() {
                return ce(this) === !1
                  ? Promise.reject(Fe("ready"))
                  : this._readyPromise;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.abort = function(e) {
              return ce(this) === !1
                ? Promise.reject(Fe("abort"))
                : void 0 === this._ownerWritableStream
                ? Promise.reject(Ie("abort"))
                : le(this, e);
            }),
            (e.prototype.close = function() {
              if (ce(this) === !1) return Promise.reject(Fe("close"));
              var e = this._ownerWritableStream;
              return void 0 === e
                ? Promise.reject(Ie("close"))
                : ne(e) === !0
                ? Promise.reject(
                    new TypeError("cannot close an already-closing stream")
                  )
                : he(this);
            }),
            (e.prototype.releaseLock = function() {
              if (ce(this) === !1) throw Fe("releaseLock");
              var e = this._ownerWritableStream;
              void 0 !== e && ge(this);
            }),
            (e.prototype.write = function(e) {
              return ce(this) === !1
                ? Promise.reject(Fe("write"))
                : void 0 === this._ownerWritableStream
                ? Promise.reject(Ie("write to"))
                : me(this, e);
            }),
            e
          );
        })(),
        Mr = (function() {
          function e() {
            throw new TypeError(
              "WritableStreamDefaultController cannot be constructed explicitly"
            );
          }
          return (
            (e.prototype.error = function(e) {
              if (ye(this) === !1)
                throw new TypeError(
                  "WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController"
                );
              var t = this._controlledWritableStream._state;
              "writable" === t && Oe(this, e);
            }),
            (e.prototype[Lr] = function(e) {
              var t = this._abortAlgorithm(e);
              return Ae(this), t;
            }),
            (e.prototype[Fr] = function() {
              B(this);
            }),
            e
          );
        })(),
        Nr = (function() {
          function e() {
            throw new TypeError();
          }
          return (
            Object.defineProperty(e.prototype, "desiredSize", {
              get: function() {
                if (Qe(this) === !1) throw st("desiredSize");
                return rt(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.close = function() {
              if (Qe(this) === !1) throw st("close");
              if (it(this) === !1)
                throw new TypeError(
                  "The stream is not in a state that permits close"
                );
              $e(this);
            }),
            (e.prototype.enqueue = function(e) {
              if (Qe(this) === !1) throw st("enqueue");
              if (it(this) === !1)
                throw new TypeError(
                  "The stream is not in a state that permits enqueue"
                );
              return et(this, e);
            }),
            (e.prototype.error = function(e) {
              if (Qe(this) === !1) throw st("error");
              tt(this, e);
            }),
            (e.prototype[Pr] = function(e) {
              B(this);
              var t = this._cancelAlgorithm(e);
              return Ze(this), t;
            }),
            (e.prototype[Rr] = function() {
              var e = this._controlledReadableStream;
              if (this._queue.length > 0) {
                var t = q(this);
                return (
                  this._closeRequested === !0 && 0 === this._queue.length
                    ? (Ze(this), Zt(e))
                    : Ke(this),
                  Promise.resolve(m(t, !1, e._reader._forAuthorCode))
                );
              }
              var r = T(e);
              return Ke(this), r;
            }),
            e
          );
        })(),
        Dr =
          Number.isInteger ||
          function(e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
          },
        qr = (function() {
          function e() {
            throw new TypeError(
              "ReadableStreamBYOBRequest cannot be used directly"
            );
          }
          return (
            Object.defineProperty(e.prototype, "view", {
              get: function() {
                if (lt(this) === !1) throw Nt("view");
                return this._view;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.respond = function(e) {
              if (lt(this) === !1) throw Nt("respond");
              if (void 0 === this._associatedReadableByteStreamController)
                throw new TypeError("This BYOB request has been invalidated");
              p(this._view.buffer) === !0,
                Lt(this._associatedReadableByteStreamController, e);
            }),
            (e.prototype.respondWithNewView = function(e) {
              if (lt(this) === !1) throw Nt("respond");
              if (void 0 === this._associatedReadableByteStreamController)
                throw new TypeError("This BYOB request has been invalidated");
              if (!ArrayBuffer.isView(e))
                throw new TypeError(
                  "You can only respond with array buffer views"
                );
              p(e.buffer) === !0,
                Ft(this._associatedReadableByteStreamController, e);
            }),
            e
          );
        })(),
        Ur = (function() {
          function e() {
            throw new TypeError(
              "ReadableByteStreamController constructor cannot be used directly"
            );
          }
          return (
            Object.defineProperty(e.prototype, "byobRequest", {
              get: function() {
                if (ct(this) === !1) throw Dt("byobRequest");
                if (
                  void 0 === this._byobRequest &&
                  this._pendingPullIntos.length > 0
                ) {
                  var e = this._pendingPullIntos.peek(),
                    t = new Uint8Array(
                      e.buffer,
                      e.byteOffset + e.bytesFilled,
                      e.byteLength - e.bytesFilled
                    ),
                    r = Object.create(qr.prototype);
                  Mt(r, this, t), (this._byobRequest = r);
                }
                return this._byobRequest;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "desiredSize", {
              get: function() {
                if (ct(this) === !1) throw Dt("desiredSize");
                return Ot(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.close = function() {
              if (ct(this) === !1) throw Dt("close");
              if (this._closeRequested === !0)
                throw new TypeError(
                  "The stream has already been closed; do not close it again!"
                );
              var e = this._controlledReadableByteStream._state;
              if ("readable" !== e)
                throw new TypeError(
                  "The stream (in " +
                    e +
                    " state) is not in the readable state and cannot be closed"
                );
              Rt(this);
            }),
            (e.prototype.enqueue = function(e) {
              if (ct(this) === !1) throw Dt("enqueue");
              if (this._closeRequested === !0)
                throw new TypeError("stream is closed or draining");
              var t = this._controlledReadableByteStream._state;
              if ("readable" !== t)
                throw new TypeError(
                  "The stream (in " +
                    t +
                    " state) is not in the readable state and cannot be enqueued to"
                );
              if (!ArrayBuffer.isView(e))
                throw new TypeError(
                  "You can only enqueue array buffer views when using a ReadableByteStreamController"
                );
              p(e.buffer) === !0, Tt(this, e);
            }),
            (e.prototype.error = function(e) {
              if (ct(this) === !1) throw Dt("error");
              Et(this, e);
            }),
            (e.prototype[Pr] = function(e) {
              if (this._pendingPullIntos.length > 0) {
                var t = this._pendingPullIntos.peek();
                t.bytesFilled = 0;
              }
              B(this);
              var r = this._cancelAlgorithm(e);
              return Pt(this), r;
            }),
            (e.prototype[Rr] = function() {
              var e = this._controlledReadableByteStream;
              if (this._queueTotalSize > 0) {
                var t = this._queue.shift();
                (this._queueTotalSize -= t.byteLength), yt(this);
                var r = void 0;
                try {
                  r = new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
                } catch (n) {
                  return Promise.reject(n);
                }
                return Promise.resolve(m(r, !1, e._reader._forAuthorCode));
              }
              var i = this._autoAllocateChunkSize;
              if (void 0 !== i) {
                var a = void 0;
                try {
                  a = new ArrayBuffer(i);
                } catch (o) {
                  return Promise.reject(o);
                }
                var s = {
                  buffer: a,
                  byteOffset: 0,
                  byteLength: i,
                  bytesFilled: 0,
                  elementSize: 1,
                  ctor: Uint8Array,
                  readerType: "default",
                };
                this._pendingPullIntos.push(s);
              }
              var u = T(e);
              return ht(this), u;
            }),
            e
          );
        })(),
        Wr = (function() {
          function e(e) {
            if (!Qt(e))
              throw new TypeError(
                "ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a byte source"
              );
            if (ct(e._readableStreamController) === !1)
              throw new TypeError(
                "Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source"
              );
            if (Kt(e))
              throw new TypeError(
                "This stream has already been locked for exclusive reading by another reader"
              );
            y(this, e), (this._readIntoRequests = new Cr());
          }
          return (
            Object.defineProperty(e.prototype, "closed", {
              get: function() {
                return zt(this)
                  ? this._closedPromise
                  : Promise.reject(Xt("closed"));
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.cancel = function(e) {
              return zt(this)
                ? void 0 === this._ownerReadableStream
                  ? Promise.reject(A("cancel"))
                  : b(this, e)
                : Promise.reject(Xt("cancel"));
            }),
            (e.prototype.read = function(e) {
              return zt(this)
                ? void 0 === this._ownerReadableStream
                  ? Promise.reject(A("read from"))
                  : ArrayBuffer.isView(e)
                  ? (p(e.buffer) === !0,
                    0 === e.byteLength
                      ? Promise.reject(
                          new TypeError("view must have non-zero byteLength")
                        )
                      : Ht(this, e))
                  : Promise.reject(
                      new TypeError("view must be an array buffer view")
                    )
                : Promise.reject(Xt("read"));
            }),
            (e.prototype.releaseLock = function() {
              if (!zt(this)) throw Xt("releaseLock");
              if (void 0 !== this._ownerReadableStream) {
                if (this._readIntoRequests.length > 0)
                  throw new TypeError(
                    "Tried to release a reader lock when that reader has pending read() calls un-settled"
                  );
                _(this);
              }
            }),
            e
          );
        })(),
        Br = (function() {
          function e(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = {}), Vt(this);
            var r = t.size,
              n = t.highWaterMark,
              i = e.type,
              a = String(i);
            if ("bytes" === a) {
              if (void 0 !== r)
                throw new RangeError(
                  "The strategy for a byte stream cannot have a size function"
                );
              void 0 === n && (n = 0), (n = v(n)), jt(this, e, n);
            } else {
              if (void 0 !== i)
                throw new RangeError("Invalid type is specified");
              var o = g(r);
              void 0 === n && (n = 1), (n = v(n)), ot(this, e, n, o);
            }
          }
          return (
            Object.defineProperty(e.prototype, "locked", {
              get: function() {
                if (Qt(this) === !1) throw tr("locked");
                return Kt(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.cancel = function(e) {
              return Qt(this) === !1
                ? Promise.reject(tr("cancel"))
                : Kt(this) === !0
                ? Promise.reject(
                    new TypeError(
                      "Cannot cancel a stream that already has a reader"
                    )
                  )
                : Jt(this, e);
            }),
            (e.prototype.getReader = function(e) {
              var t = (void 0 === e ? {} : e).mode;
              if (Qt(this) === !1) throw tr("getReader");
              if (void 0 === t) return R(this, !0);
              if (((t = String(t)), "byob" === t)) return qt(this, !0);
              throw new RangeError("Invalid mode is specified");
            }),
            (e.prototype.pipeThrough = function(e, t) {
              var r = e.writable,
                i = e.readable,
                a = void 0 === t ? {} : t,
                o = a.preventClose,
                s = a.preventAbort,
                u = a.preventCancel,
                c = a.signal;
              if (Qt(this) === !1) throw tr("pipeThrough");
              if (X(r) === !1)
                throw new TypeError(
                  "writable argument to pipeThrough must be a WritableStream"
                );
              if (Qt(i) === !1)
                throw new TypeError(
                  "readable argument to pipeThrough must be a ReadableStream"
                );
              if (
                ((o = Boolean(o)),
                (s = Boolean(s)),
                (u = Boolean(u)),
                void 0 !== c && !er(c))
              )
                throw new TypeError(
                  "ReadableStream.prototype.pipeThrough's signal option must be an AbortSignal"
                );
              if (Kt(this) === !0)
                throw new TypeError(
                  "ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream"
                );
              if (Y(r) === !0)
                throw new TypeError(
                  "ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream"
                );
              var l = Ve(this, r, o, s, u, c);
              return l["catch"](n), i;
            }),
            (e.prototype.pipeTo = function(e, t) {
              var r = void 0 === t ? {} : t,
                n = r.preventClose,
                i = r.preventAbort,
                a = r.preventCancel,
                o = r.signal;
              return Qt(this) === !1
                ? Promise.reject(tr("pipeTo"))
                : X(e) === !1
                ? Promise.reject(
                    new TypeError(
                      "ReadableStream.prototype.pipeTo's first argument must be a WritableStream"
                    )
                  )
                : ((n = Boolean(n)),
                  (i = Boolean(i)),
                  (a = Boolean(a)),
                  void 0 === o || er(o)
                    ? Kt(this) === !0
                      ? Promise.reject(
                          new TypeError(
                            "ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"
                          )
                        )
                      : Y(e) === !0
                      ? Promise.reject(
                          new TypeError(
                            "ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"
                          )
                        )
                      : Ve(this, e, n, i, a, o)
                    : Promise.reject(
                        new TypeError(
                          "ReadableStream.prototype.pipeTo's signal option must be an AbortSignal"
                        )
                      ));
            }),
            (e.prototype.tee = function() {
              if (Qt(this) === !1) throw tr("tee");
              var e = ut(this);
              return a(e);
            }),
            (e.prototype.getIterator = function(e) {
              var t = (void 0 === e ? {} : e).preventCancel,
                r = void 0 !== t && t;
              if (Qt(this) === !1) throw tr("getIterator");
              return M(this, r);
            }),
            e
          );
        })();
      "symbol" == typeof wr.asyncIterator &&
        Object.defineProperty(Br.prototype, wr.asyncIterator, {
          value: Br.prototype.getIterator,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        });
      var Gr = (function() {
          function e(e) {
            var t = e.highWaterMark;
            this.highWaterMark = t;
          }
          return (
            (e.prototype.size = function(e) {
              return e.byteLength;
            }),
            e
          );
        })(),
        zr = (function() {
          function e(e) {
            var t = e.highWaterMark;
            this.highWaterMark = t;
          }
          return (
            (e.prototype.size = function() {
              return 1;
            }),
            e
          );
        })(),
        Hr = (function() {
          function e(e, t, r) {
            void 0 === e && (e = {}),
              void 0 === t && (t = {}),
              void 0 === r && (r = {});
            var n = t.size,
              i = t.highWaterMark,
              a = r.size,
              o = r.highWaterMark,
              s = e.writableType;
            if (void 0 !== s)
              throw new RangeError("Invalid writable type specified");
            var u = g(n);
            void 0 === i && (i = 1), (i = v(i));
            var c = e.readableType;
            if (void 0 !== c)
              throw new RangeError("Invalid readable type specified");
            var l = g(a);
            void 0 === o && (o = 0), (o = v(o));
            var f,
              d = new Promise(function(e) {
                f = e;
              });
            rr(this, d, i, u, o, l), cr(this, e);
            var p = h(e, "start", [this._transformStreamController]);
            f(p);
          }
          return (
            Object.defineProperty(e.prototype, "readable", {
              get: function() {
                if (nr(this) === !1) throw _r("readable");
                return this._readable;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "writable", {
              get: function() {
                if (nr(this) === !1) throw _r("writable");
                return this._writable;
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })(),
        Xr = (function() {
          function e() {
            throw new TypeError(
              "TransformStreamDefaultController instances cannot be created directly"
            );
          }
          return (
            Object.defineProperty(e.prototype, "desiredSize", {
              get: function() {
                if (sr(this) === !1) throw br("desiredSize");
                var e = this._controlledTransformStream._readable
                  ._readableStreamController;
                return rt(e);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.enqueue = function(e) {
              if (sr(this) === !1) throw br("enqueue");
              hr(this, e);
            }),
            (e.prototype.error = function(e) {
              if (sr(this) === !1) throw br("error");
              fr(this, e);
            }),
            (e.prototype.terminate = function() {
              if (sr(this) === !1) throw br("terminate");
              pr(this);
            }),
            e
          );
        })();
    },
    function(e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, r, n, i, a, o) {
        try {
          var s = e[a](o),
            u = s.value;
        } catch (c) {
          return void r(c);
        }
        s.done ? t(u) : Promise.resolve(u).then(n, i);
      }
      function a(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, a) {
            function o(e) {
              i(u, n, a, o, s, "next", e);
            }
            function s(e) {
              i(u, n, a, o, s, "throw", e);
            }
            var u = e.apply(t, r);
            o(void 0);
          });
        };
      }
      function o(e, t) {
        return c(e) || u(e, t) || s();
      }
      function s() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      }
      function u(e, t) {
        if (
          Symbol.iterator in Object(e) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        ) {
          var r = [],
            n = !0,
            i = !1,
            a = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(n = (o = s.next()).done) &&
              (r.push(o.value), !t || r.length !== t);
              n = !0
            );
          } catch (u) {
            (i = !0), (a = u);
          } finally {
            try {
              n || null == s["return"] || s["return"]();
            } finally {
              if (i) throw a;
            }
          }
          return r;
        }
      }
      function c(e) {
        if (Array.isArray(e)) return e;
      }
      function l(e) {
        return d(e) || f(e) || h();
      }
      function h() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function f(e) {
        if (
          Symbol.iterator in Object(e) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        )
          return Array.from(e);
      }
      function d(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = new Array(e.length); t < e.length; t++)
            r[t] = e[t];
          return r;
        }
      }
      function p(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function v(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function g(e, t, r) {
        return t && v(e.prototype, t), r && v(e, r), e;
      }
      function m(e) {
        return (m =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function y(e) {
        W = e;
      }
      function b(e) {
        var t,
          r = new B();
        if ("string" == typeof e) t = { url: e };
        else if ((0, w.isArrayBuffer)(e)) t = { data: e };
        else if (e instanceof G) t = { range: e };
        else {
          if ("object" !== m(e))
            throw new Error(
              "Invalid parameter in getDocument, need either Uint8Array, string or a parameter object"
            );
          if (!e.url && !e.data && !e.range)
            throw new Error(
              "Invalid parameter object: need either .data, .range or .url"
            );
          t = e;
        }
        var n = Object.create(null),
          i = null,
          a = null;
        for (var o in t)
          if ("url" !== o || "undefined" == typeof window)
            if ("range" !== o)
              if ("worker" !== o)
                if ("data" !== o || t[o] instanceof Uint8Array) n[o] = t[o];
                else {
                  var s = t[o];
                  if ("string" == typeof s) n[o] = (0, w.stringToBytes)(s);
                  else if ("object" !== m(s) || null === s || isNaN(s.length)) {
                    if (!(0, w.isArrayBuffer)(s))
                      throw new Error(
                        "Invalid PDF binary data: either typed array, string or array-like object is expected in the data property."
                      );
                    n[o] = new Uint8Array(s);
                  } else n[o] = new Uint8Array(s);
                }
              else a = t[o];
            else i = t[o];
          else n[o] = new URL(t[o], window.location).href;
        (n.rangeChunkSize = n.rangeChunkSize || I),
          (n.CMapReaderFactory = n.CMapReaderFactory || k.DOMCMapReaderFactory),
          (n.ignoreErrors = n.stopAtErrors !== !0),
          (n.pdfBug = n.pdfBug === !0);
        var u = Object.values(w.NativeImageDecoding);
        if (
          ((void 0 !== n.nativeImageDecoderSupport &&
            u.includes(n.nativeImageDecoderSupport)) ||
            (n.nativeImageDecoderSupport =
              C.apiCompatibilityParams.nativeImageDecoderSupport ||
              w.NativeImageDecoding.DECODE),
          Number.isInteger(n.maxImageSize) || (n.maxImageSize = -1),
          "boolean" != typeof n.isEvalSupported && (n.isEvalSupported = !0),
          "boolean" != typeof n.disableFontFace &&
            (n.disableFontFace =
              C.apiCompatibilityParams.disableFontFace || !1),
          "boolean" != typeof n.disableRange && (n.disableRange = !1),
          "boolean" != typeof n.disableStream && (n.disableStream = !1),
          "boolean" != typeof n.disableAutoFetch && (n.disableAutoFetch = !1),
          "boolean" != typeof n.disableCreateObjectURL &&
            (n.disableCreateObjectURL =
              C.apiCompatibilityParams.disableCreateObjectURL || !1),
          (0, w.setVerbosityLevel)(n.verbosity),
          !a)
        ) {
          var c = {
            verbosity: n.verbosity,
            port: T.GlobalWorkerOptions.workerPort,
          };
          (a = c.port ? Y.fromPort(c) : new Y(c)), (r._worker = a);
        }
        var l = r.docId;
        return (
          a.promise
            .then(function() {
              if (r.destroyed) throw new Error("Loading aborted");
              return _(a, n, i, l).then(function(e) {
                if (r.destroyed) throw new Error("Loading aborted");
                var t;
                i
                  ? (t = new L.PDFDataTransportStream(
                      {
                        length: n.length,
                        initialData: n.initialData,
                        progressiveDone: n.progressiveDone,
                        disableRange: n.disableRange,
                        disableStream: n.disableStream,
                      },
                      i
                    ))
                  : n.data ||
                    (t = W({
                      url: n.url,
                      length: n.length,
                      httpHeaders: n.httpHeaders,
                      withCredentials: n.withCredentials,
                      rangeChunkSize: n.rangeChunkSize,
                      disableRange: n.disableRange,
                      disableStream: n.disableStream,
                    }));
                var o = new E.MessageHandler(l, e, a.port);
                o.postMessageTransfers = a.postMessageTransfers;
                var s = new V(o, r, t, n);
                (r._transport = s), o.send("Ready", null);
              });
            })
            ["catch"](r._capability.reject),
          r
        );
      }
      function _(e, t, r, n) {
        return e.destroyed
          ? Promise.reject(new Error("Worker was destroyed"))
          : (r &&
              ((t.length = r.length),
              (t.initialData = r.initialData),
              (t.progressiveDone = r.progressiveDone)),
            e.messageHandler
              .sendWithPromise("GetDocRequest", {
                docId: n,
                apiVersion: "2.3.200",
                source: {
                  data: t.data,
                  url: t.url,
                  password: t.password,
                  disableAutoFetch: t.disableAutoFetch,
                  rangeChunkSize: t.rangeChunkSize,
                  length: t.length,
                },
                maxImageSize: t.maxImageSize,
                disableFontFace: t.disableFontFace,
                disableCreateObjectURL: t.disableCreateObjectURL,
                postMessageTransfers: e.postMessageTransfers,
                docBaseUrl: t.docBaseUrl,
                nativeImageDecoderSupport: t.nativeImageDecoderSupport,
                ignoreErrors: t.ignoreErrors,
                isEvalSupported: t.isEvalSupported,
              })
              .then(function(t) {
                if (e.destroyed) throw new Error("Worker was destroyed");
                return t;
              }));
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDocument = b),
        (t.setPDFNetworkStreamFactory = y),
        (t.build = t.version = t.PDFPageProxy = t.PDFDocumentProxy = t.PDFWorker = t.PDFDataRangeTransport = t.LoopbackPort = void 0);
      var A,
        S = n(r(180)),
        w = r(1),
        k = r(183),
        x = r(184),
        C = r(185),
        P = r(186),
        R = n(r(3)),
        T = r(188),
        E = r(189),
        O = r(190),
        L = r(192),
        F = r(193),
        I = 65536,
        j = 100,
        M = !1,
        N = null,
        D = !1;
      "undefined" == typeof window
        ? ((M = !0), (D = !0))
        : "undefined" != typeof require &&
          "function" == typeof require.ensure &&
          (D = !0),
        "undefined" != typeof requirejs &&
          requirejs.toUrl &&
          (A = requirejs.toUrl("pdfjs-dist/build/pdf.worker.js"));
      var q = "undefined" != typeof requirejs && requirejs.load;
      if (
        ((N = D
          ? function() {
              return new Promise(function(e, t) {
                require.ensure(
                  [],
                  function() {
                    try {
                      var r;
                      (r = require("./pdf.worker.js")),
                        e(r.WorkerMessageHandler);
                    } catch (n) {
                      t(n);
                    }
                  },
                  t,
                  "pdfjsWorker"
                );
              });
            }
          : q
          ? function() {
              return new Promise(function(e, t) {
                requirejs(
                  ["pdfjs-dist/build/pdf.worker"],
                  function(r) {
                    try {
                      e(r.WorkerMessageHandler);
                    } catch (n) {
                      t(n);
                    }
                  },
                  t
                );
              });
            }
          : null),
        !A &&
          "object" ===
            ("undefined" == typeof document ? "undefined" : m(document)) &&
          "currentScript" in document)
      ) {
        var U = document.currentScript && document.currentScript.src;
        U && (A = U.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2"));
      }
      var W,
        B = (function() {
          var e = 0,
            t = (function() {
              function t() {
                p(this, t),
                  (this._capability = (0, w.createPromiseCapability)()),
                  (this._transport = null),
                  (this._worker = null),
                  (this.docId = "d" + e++),
                  (this.destroyed = !1),
                  (this.onPassword = null),
                  (this.onProgress = null),
                  (this.onUnsupportedFeature = null);
              }
              return (
                g(t, [
                  {
                    key: "destroy",
                    value: function() {
                      var e = this;
                      this.destroyed = !0;
                      var t = this._transport
                        ? this._transport.destroy()
                        : Promise.resolve();
                      return t.then(function() {
                        (e._transport = null),
                          e._worker &&
                            (e._worker.destroy(), (e._worker = null));
                      });
                    },
                  },
                  {
                    key: "then",
                    value: function(e, t) {
                      return (
                        (0, k.deprecated)(
                          "PDFDocumentLoadingTask.then method, use the `promise` getter instead."
                        ),
                        this.promise.then.apply(this.promise, arguments)
                      );
                    },
                  },
                  {
                    key: "promise",
                    get: function() {
                      return this._capability.promise;
                    },
                  },
                ]),
                t
              );
            })();
          return t;
        })(),
        G = (function() {
          function e(t, r) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            p(this, e),
              (this.length = t),
              (this.initialData = r),
              (this.progressiveDone = n),
              (this._rangeListeners = []),
              (this._progressListeners = []),
              (this._progressiveReadListeners = []),
              (this._progressiveDoneListeners = []),
              (this._readyCapability = (0, w.createPromiseCapability)());
          }
          return (
            g(e, [
              {
                key: "addRangeListener",
                value: function(e) {
                  this._rangeListeners.push(e);
                },
              },
              {
                key: "addProgressListener",
                value: function(e) {
                  this._progressListeners.push(e);
                },
              },
              {
                key: "addProgressiveReadListener",
                value: function(e) {
                  this._progressiveReadListeners.push(e);
                },
              },
              {
                key: "addProgressiveDoneListener",
                value: function(e) {
                  this._progressiveDoneListeners.push(e);
                },
              },
              {
                key: "onDataRange",
                value: function(e, t) {
                  var r = !0,
                    n = !1,
                    i = void 0;
                  try {
                    for (
                      var a, o = this._rangeListeners[Symbol.iterator]();
                      !(r = (a = o.next()).done);
                      r = !0
                    ) {
                      var s = a.value;
                      s(e, t);
                    }
                  } catch (u) {
                    (n = !0), (i = u);
                  } finally {
                    try {
                      r || null == o["return"] || o["return"]();
                    } finally {
                      if (n) throw i;
                    }
                  }
                },
              },
              {
                key: "onDataProgress",
                value: function(e, t) {
                  var r = this;
                  this._readyCapability.promise.then(function() {
                    var n = !0,
                      i = !1,
                      a = void 0;
                    try {
                      for (
                        var o, s = r._progressListeners[Symbol.iterator]();
                        !(n = (o = s.next()).done);
                        n = !0
                      ) {
                        var u = o.value;
                        u(e, t);
                      }
                    } catch (c) {
                      (i = !0), (a = c);
                    } finally {
                      try {
                        n || null == s["return"] || s["return"]();
                      } finally {
                        if (i) throw a;
                      }
                    }
                  });
                },
              },
              {
                key: "onDataProgressiveRead",
                value: function(e) {
                  var t = this;
                  this._readyCapability.promise.then(function() {
                    var r = !0,
                      n = !1,
                      i = void 0;
                    try {
                      for (
                        var a,
                          o = t._progressiveReadListeners[Symbol.iterator]();
                        !(r = (a = o.next()).done);
                        r = !0
                      ) {
                        var s = a.value;
                        s(e);
                      }
                    } catch (u) {
                      (n = !0), (i = u);
                    } finally {
                      try {
                        r || null == o["return"] || o["return"]();
                      } finally {
                        if (n) throw i;
                      }
                    }
                  });
                },
              },
              {
                key: "onDataProgressiveDone",
                value: function() {
                  var e = this;
                  this._readyCapability.promise.then(function() {
                    var t = !0,
                      r = !1,
                      n = void 0;
                    try {
                      for (
                        var i,
                          a = e._progressiveDoneListeners[Symbol.iterator]();
                        !(t = (i = a.next()).done);
                        t = !0
                      ) {
                        var o = i.value;
                        o();
                      }
                    } catch (s) {
                      (r = !0), (n = s);
                    } finally {
                      try {
                        t || null == a["return"] || a["return"]();
                      } finally {
                        if (r) throw n;
                      }
                    }
                  });
                },
              },
              {
                key: "transportReady",
                value: function() {
                  this._readyCapability.resolve();
                },
              },
              {
                key: "requestDataRange",
                value: function(e, t) {
                  (0, w.unreachable)(
                    "Abstract method PDFDataRangeTransport.requestDataRange"
                  );
                },
              },
              { key: "abort", value: function() {} },
            ]),
            e
          );
        })();
      t.PDFDataRangeTransport = G;
      var z = (function() {
        function e(t, r) {
          p(this, e), (this._pdfInfo = t), (this._transport = r);
        }
        return (
          g(e, [
            {
              key: "getPage",
              value: function(e) {
                return this._transport.getPage(e);
              },
            },
            {
              key: "getPageIndex",
              value: function(e) {
                return this._transport.getPageIndex(e);
              },
            },
            {
              key: "getDestinations",
              value: function() {
                return this._transport.getDestinations();
              },
            },
            {
              key: "getDestination",
              value: function(e) {
                return this._transport.getDestination(e);
              },
            },
            {
              key: "getPageLabels",
              value: function() {
                return this._transport.getPageLabels();
              },
            },
            {
              key: "getPageLayout",
              value: function() {
                return this._transport.getPageLayout();
              },
            },
            {
              key: "getPageMode",
              value: function() {
                return this._transport.getPageMode();
              },
            },
            {
              key: "getViewerPreferences",
              value: function() {
                return this._transport.getViewerPreferences();
              },
            },
            {
              key: "getOpenActionDestination",
              value: function() {
                return this._transport.getOpenActionDestination();
              },
            },
            {
              key: "getAttachments",
              value: function() {
                return this._transport.getAttachments();
              },
            },
            {
              key: "getJavaScript",
              value: function() {
                return this._transport.getJavaScript();
              },
            },
            {
              key: "getOutline",
              value: function() {
                return this._transport.getOutline();
              },
            },
            {
              key: "getPermissions",
              value: function() {
                return this._transport.getPermissions();
              },
            },
            {
              key: "getMetadata",
              value: function() {
                return this._transport.getMetadata();
              },
            },
            {
              key: "getData",
              value: function() {
                return this._transport.getData();
              },
            },
            {
              key: "getDownloadInfo",
              value: function() {
                return this._transport.downloadInfoCapability.promise;
              },
            },
            {
              key: "getStats",
              value: function() {
                return this._transport.getStats();
              },
            },
            {
              key: "cleanup",
              value: function() {
                this._transport.startCleanup();
              },
            },
            {
              key: "destroy",
              value: function() {
                return this.loadingTask.destroy();
              },
            },
            {
              key: "numPages",
              get: function() {
                return this._pdfInfo.numPages;
              },
            },
            {
              key: "fingerprint",
              get: function() {
                return this._pdfInfo.fingerprint;
              },
            },
            {
              key: "loadingParams",
              get: function() {
                return this._transport.loadingParams;
              },
            },
            {
              key: "loadingTask",
              get: function() {
                return this._transport.loadingTask;
              },
            },
          ]),
          e
        );
      })();
      t.PDFDocumentProxy = z;
      var H = (function() {
        function e(t, r, n) {
          var i =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          p(this, e),
            (this.pageIndex = t),
            (this._pageInfo = r),
            (this._transport = n),
            (this._stats = i ? new k.StatTimer() : k.DummyStatTimer),
            (this._pdfBug = i),
            (this.commonObjs = n.commonObjs),
            (this.objs = new Q()),
            (this.cleanupAfterRender = !1),
            (this.pendingCleanup = !1),
            (this.intentStates = Object.create(null)),
            (this.destroyed = !1);
        }
        return (
          g(e, [
            {
              key: "getViewport",
              value: function() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.scale,
                  r = e.rotation,
                  n = void 0 === r ? this.rotate : r,
                  i = e.dontFlip,
                  a = void 0 !== i && i;
                return (
                  (arguments.length > 1 || "number" == typeof arguments[0]) &&
                    ((0, k.deprecated)(
                      "getViewport is called with obsolete arguments."
                    ),
                    (t = arguments[0]),
                    (n =
                      "number" == typeof arguments[1]
                        ? arguments[1]
                        : this.rotate),
                    (a = "boolean" == typeof arguments[2] && arguments[2])),
                  new k.PageViewport({
                    viewBox: this.view,
                    scale: t,
                    rotation: n,
                    dontFlip: a,
                  })
                );
              },
            },
            {
              key: "getAnnotations",
              value: function() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.intent,
                  r = void 0 === t ? null : t;
                return (
                  (this.annotationsPromise && this.annotationsIntent === r) ||
                    ((this.annotationsPromise = this._transport.getAnnotations(
                      this.pageIndex,
                      r
                    )),
                    (this.annotationsIntent = r)),
                  this.annotationsPromise
                );
              },
            },
            {
              key: "render",
              value: function(e) {
                var t = this,
                  r = e.canvasContext,
                  n = e.viewport,
                  i = e.intent,
                  a = void 0 === i ? "display" : i,
                  o = e.enableWebGL,
                  s = void 0 !== o && o,
                  u = e.renderInteractiveForms,
                  c = void 0 !== u && u,
                  l = e.transform,
                  h = void 0 === l ? null : l,
                  f = e.imageLayer,
                  d = void 0 === f ? null : f,
                  p = e.canvasFactory,
                  v = void 0 === p ? null : p,
                  g = e.background,
                  m = void 0 === g ? null : g,
                  y = this._stats;
                y.time("Overall");
                var b = "print" === a ? "print" : "display";
                (this.pendingCleanup = !1),
                  this.intentStates[b] ||
                    (this.intentStates[b] = Object.create(null));
                var _ = this.intentStates[b];
                _.streamReaderCancelTimeout &&
                  (clearTimeout(_.streamReaderCancelTimeout),
                  (_.streamReaderCancelTimeout = null));
                var A = v || new k.DOMCanvasFactory(),
                  S = new F.WebGLContext({ enable: s });
                _.displayReadyCapability ||
                  ((_.displayReadyCapability = (0,
                  w.createPromiseCapability)()),
                  (_.operatorList = {
                    fnArray: [],
                    argsArray: [],
                    lastChunk: !1,
                  }),
                  y.time("Page Request"),
                  this._pumpOperatorList({
                    pageIndex: this.pageNumber - 1,
                    intent: b,
                    renderInteractiveForms: c === !0,
                  }));
                var x = function(e) {
                    var r = _.renderTasks.indexOf(C);
                    r >= 0 && _.renderTasks.splice(r, 1),
                      (t.cleanupAfterRender || "print" === b) &&
                        (t.pendingCleanup = !0),
                      t._tryCleanup(),
                      e
                        ? (C.capability.reject(e),
                          t._abortOperatorList({ intentState: _, reason: e }))
                        : C.capability.resolve(),
                      y.timeEnd("Rendering"),
                      y.timeEnd("Overall");
                  },
                  C = new J({
                    callback: x,
                    params: {
                      canvasContext: r,
                      viewport: n,
                      transform: h,
                      imageLayer: d,
                      background: m,
                    },
                    objs: this.objs,
                    commonObjs: this.commonObjs,
                    operatorList: _.operatorList,
                    pageNumber: this.pageNumber,
                    canvasFactory: A,
                    webGLContext: S,
                    useRequestAnimationFrame: "print" !== b,
                    pdfBug: this._pdfBug,
                  });
                _.renderTasks || (_.renderTasks = []), _.renderTasks.push(C);
                var P = C.task;
                return (
                  _.displayReadyCapability.promise
                    .then(function(e) {
                      return t.pendingCleanup
                        ? void x()
                        : (y.time("Rendering"),
                          C.initializeGraphics(e),
                          void C.operatorListChanged());
                    })
                    ["catch"](x),
                  P
                );
              },
            },
            {
              key: "getOperatorList",
              value: function() {
                function e() {
                  if (n.operatorList.lastChunk) {
                    n.opListReadCapability.resolve(n.operatorList);
                    var e = n.renderTasks.indexOf(r);
                    e >= 0 && n.renderTasks.splice(e, 1);
                  }
                }
                var t = "oplist";
                this.intentStates[t] ||
                  (this.intentStates[t] = Object.create(null));
                var r,
                  n = this.intentStates[t];
                return (
                  n.opListReadCapability ||
                    ((r = {}),
                    (r.operatorListChanged = e),
                    (n.opListReadCapability = (0, w.createPromiseCapability)()),
                    (n.renderTasks = []),
                    n.renderTasks.push(r),
                    (n.operatorList = {
                      fnArray: [],
                      argsArray: [],
                      lastChunk: !1,
                    }),
                    this._stats.time("Page Request"),
                    this._pumpOperatorList({
                      pageIndex: this.pageIndex,
                      intent: t,
                    })),
                  n.opListReadCapability.promise
                );
              },
            },
            {
              key: "streamTextContent",
              value: function() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.normalizeWhitespace,
                  r = void 0 !== t && t,
                  n = e.disableCombineTextItems,
                  i = void 0 !== n && n,
                  a = 100;
                return this._transport.messageHandler.sendWithStream(
                  "GetTextContent",
                  {
                    pageIndex: this.pageNumber - 1,
                    normalizeWhitespace: r === !0,
                    combineTextItems: i !== !0,
                  },
                  {
                    highWaterMark: a,
                    size: function(e) {
                      return e.items.length;
                    },
                  }
                );
              },
            },
            {
              key: "getTextContent",
              value: function() {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = this.streamTextContent(e);
                return new Promise(function(e, r) {
                  function n() {
                    i.read().then(function(t) {
                      var r,
                        i = t.value,
                        o = t.done;
                      return o
                        ? void e(a)
                        : (Object.assign(a.styles, i.styles),
                          (r = a.items).push.apply(r, l(i.items)),
                          void n());
                    }, r);
                  }
                  var i = t.getReader(),
                    a = { items: [], styles: Object.create(null) };
                  n();
                });
              },
            },
            {
              key: "_destroy",
              value: function() {
                var e = this;
                (this.destroyed = !0),
                  (this._transport.pageCache[this.pageIndex] = null);
                var t = [];
                return (
                  Object.keys(this.intentStates).forEach(function(r) {
                    var n = e.intentStates[r];
                    e._abortOperatorList({
                      intentState: n,
                      reason: new Error("Page was destroyed."),
                      force: !0,
                    }),
                      "oplist" !== r &&
                        n.renderTasks.forEach(function(e) {
                          var r = e.capability.promise["catch"](function() {});
                          t.push(r), e.cancel();
                        });
                  }),
                  this.objs.clear(),
                  (this.annotationsPromise = null),
                  (this.pendingCleanup = !1),
                  Promise.all(t)
                );
              },
            },
            {
              key: "cleanup",
              value: function() {
                var e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
                (this.pendingCleanup = !0), this._tryCleanup(e);
              },
            },
            {
              key: "_tryCleanup",
              value: function() {
                var e = this,
                  t =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                this.pendingCleanup &&
                  !Object.keys(this.intentStates).some(function(t) {
                    var r = e.intentStates[t];
                    return (
                      0 !== r.renderTasks.length || !r.operatorList.lastChunk
                    );
                  }) &&
                  (Object.keys(this.intentStates).forEach(function(t) {
                    delete e.intentStates[t];
                  }),
                  this.objs.clear(),
                  (this.annotationsPromise = null),
                  t &&
                    this._stats instanceof k.StatTimer &&
                    (this._stats = new k.StatTimer()),
                  (this.pendingCleanup = !1));
              },
            },
            {
              key: "_startRenderPage",
              value: function(e, t) {
                var r = this.intentStates[t];
                r &&
                  (this._stats.timeEnd("Page Request"),
                  r.displayReadyCapability &&
                    r.displayReadyCapability.resolve(e));
              },
            },
            {
              key: "_renderPageChunk",
              value: function(e, t) {
                for (var r = 0, n = e.length; r < n; r++)
                  t.operatorList.fnArray.push(e.fnArray[r]),
                    t.operatorList.argsArray.push(e.argsArray[r]);
                t.operatorList.lastChunk = e.lastChunk;
                for (var i = 0; i < t.renderTasks.length; i++)
                  t.renderTasks[i].operatorListChanged();
                e.lastChunk && this._tryCleanup();
              },
            },
            {
              key: "_pumpOperatorList",
              value: function(e) {
                var t = this;
                (0, w.assert)(
                  e.intent,
                  'PDFPageProxy._pumpOperatorList: Expected "intent" argument.'
                );
                var r = this._transport.messageHandler.sendWithStream(
                    "GetOperatorList",
                    e
                  ),
                  n = r.getReader(),
                  i = this.intentStates[e.intent];
                i.streamReader = n;
                var a = function o() {
                  n.read().then(
                    function(e) {
                      var r = e.value,
                        n = e.done;
                      return n
                        ? void (i.streamReader = null)
                        : void (
                            t._transport.destroyed ||
                            (t._renderPageChunk(r, i), o())
                          );
                    },
                    function(e) {
                      if (((i.streamReader = null), !t._transport.destroyed)) {
                        if (i.operatorList) {
                          i.operatorList.lastChunk = !0;
                          for (var r = 0; r < i.renderTasks.length; r++)
                            i.renderTasks[r].operatorListChanged();
                          t._tryCleanup();
                        }
                        if (i.displayReadyCapability)
                          i.displayReadyCapability.reject(e);
                        else {
                          if (!i.opListReadCapability) throw e;
                          i.opListReadCapability.reject(e);
                        }
                      }
                    }
                  );
                };
                a();
              },
            },
            {
              key: "_abortOperatorList",
              value: function(e) {
                var t = this,
                  r = e.intentState,
                  n = e.reason,
                  i = e.force,
                  a = void 0 !== i && i;
                if (
                  ((0, w.assert)(
                    n instanceof Error,
                    'PDFPageProxy._abortOperatorList: Expected "reason" argument.'
                  ),
                  r.streamReader)
                ) {
                  if (!a) {
                    if (0 !== r.renderTasks.length) return;
                    if (n instanceof k.RenderingCancelledException)
                      return void (r.streamReaderCancelTimeout = setTimeout(
                        function() {
                          t._abortOperatorList({
                            intentState: r,
                            reason: n,
                            force: !0,
                          }),
                            (r.streamReaderCancelTimeout = null);
                        },
                        j
                      ));
                  }
                  r.streamReader.cancel(new w.AbortException(n && n.message)),
                    (r.streamReader = null),
                    this._transport.destroyed ||
                      (Object.keys(this.intentStates).some(function(e) {
                        return (
                          t.intentStates[e] === r &&
                          (delete t.intentStates[e], !0)
                        );
                      }),
                      this.cleanup());
                }
              },
            },
            {
              key: "pageNumber",
              get: function() {
                return this.pageIndex + 1;
              },
            },
            {
              key: "rotate",
              get: function() {
                return this._pageInfo.rotate;
              },
            },
            {
              key: "ref",
              get: function() {
                return this._pageInfo.ref;
              },
            },
            {
              key: "userUnit",
              get: function() {
                return this._pageInfo.userUnit;
              },
            },
            {
              key: "view",
              get: function() {
                return this._pageInfo.view;
              },
            },
            {
              key: "stats",
              get: function() {
                return this._stats instanceof k.StatTimer ? this._stats : null;
              },
            },
          ]),
          e
        );
      })();
      t.PDFPageProxy = H;
      var X = (function() {
        function e() {
          var t =
            !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          p(this, e),
            (this._listeners = []),
            (this._defer = t),
            (this._deferred = Promise.resolve(void 0));
        }
        return (
          g(e, [
            {
              key: "postMessage",
              value: function(e, t) {
                function r(e) {
                  if ("object" !== m(e) || null === e) return e;
                  if (i.has(e)) return i.get(e);
                  var n, a;
                  if ((n = e.buffer) && (0, w.isArrayBuffer)(n)) {
                    var o = t && t.includes(n);
                    return (
                      (a =
                        e === n
                          ? e
                          : o
                          ? new e.constructor(n, e.byteOffset, e.byteLength)
                          : new e.constructor(e)),
                      i.set(e, a),
                      a
                    );
                  }
                  (a = Array.isArray(e) ? [] : {}), i.set(e, a);
                  for (var s in e) {
                    for (
                      var u = void 0, c = e;
                      !(u = Object.getOwnPropertyDescriptor(c, s));

                    )
                      c = Object.getPrototypeOf(c);
                    if ("undefined" != typeof u.value)
                      if ("function" != typeof u.value) a[s] = r(u.value);
                      else if (e.hasOwnProperty && e.hasOwnProperty(s))
                        throw new Error(
                          "LoopbackPort.postMessage - cannot clone: ".concat(
                            e[s]
                          )
                        );
                  }
                  return a;
                }
                var n = this;
                if (!this._defer)
                  return void this._listeners.forEach(function(t) {
                    t.call(n, { data: e });
                  });
                var i = new WeakMap(),
                  a = { data: r(e) };
                this._deferred.then(function() {
                  n._listeners.forEach(function(e) {
                    e.call(n, a);
                  });
                });
              },
            },
            {
              key: "addEventListener",
              value: function(e, t) {
                this._listeners.push(t);
              },
            },
            {
              key: "removeEventListener",
              value: function(e, t) {
                var r = this._listeners.indexOf(t);
                this._listeners.splice(r, 1);
              },
            },
            {
              key: "terminate",
              value: function() {
                this._listeners.length = 0;
              },
            },
          ]),
          e
        );
      })();
      t.LoopbackPort = X;
      var Y = (function() {
        function e() {
          if (T.GlobalWorkerOptions.workerSrc)
            return T.GlobalWorkerOptions.workerSrc;
          if ("undefined" != typeof A) return A;
          throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
        }
        function t() {
          try {
            if ("undefined" != typeof window)
              return (
                window.pdfjsWorker && window.pdfjsWorker.WorkerMessageHandler
              );
          } catch (e) {}
          return null;
        }
        function r() {
          if (i) return i.promise;
          i = (0, w.createPromiseCapability)();
          var r = t();
          if (r) return i.resolve(r), i.promise;
          var n =
            N ||
            function() {
              return (0, k.loadScript)(e()).then(function() {
                return window.pdfjsWorker.WorkerMessageHandler;
              });
            };
          return n().then(i.resolve, i.reject), i.promise;
        }
        function n(e) {
          var t = "importScripts('" + e + "');";
          return URL.createObjectURL(new Blob([t]));
        }
        var i,
          a = new WeakMap(),
          o = 0,
          s = (function() {
            function i() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.name,
                r = void 0 === t ? null : t,
                n = e.port,
                o = void 0 === n ? null : n,
                s = e.verbosity,
                u = void 0 === s ? (0, w.getVerbosityLevel)() : s;
              if ((p(this, i), o && a.has(o)))
                throw new Error("Cannot use more than one PDFWorker per port");
              return (
                (this.name = r),
                (this.destroyed = !1),
                (this.postMessageTransfers = !0),
                (this.verbosity = u),
                (this._readyCapability = (0, w.createPromiseCapability)()),
                (this._port = null),
                (this._webWorker = null),
                (this._messageHandler = null),
                o
                  ? (a.set(o, this), void this._initializeFromPort(o))
                  : void this._initialize()
              );
            }
            return (
              g(
                i,
                [
                  {
                    key: "_initializeFromPort",
                    value: function(e) {
                      (this._port = e),
                        (this._messageHandler = new E.MessageHandler(
                          "main",
                          "worker",
                          e
                        )),
                        this._messageHandler.on("ready", function() {}),
                        this._readyCapability.resolve();
                    },
                  },
                  {
                    key: "_initialize",
                    value: function() {
                      var r = this;
                      if ("undefined" != typeof Worker && !M && !t()) {
                        var i = e();
                        try {
                          (0, w.isSameOrigin)(window.location.href, i) ||
                            (i = n(new URL(i, window.location).href));
                          var a = new Worker(i),
                            o = new E.MessageHandler("main", "worker", a),
                            s = function() {
                              a.removeEventListener("error", u),
                                o.destroy(),
                                a.terminate(),
                                r.destroyed
                                  ? r._readyCapability.reject(
                                      new Error("Worker was destroyed")
                                    )
                                  : r._setupFakeWorker();
                            },
                            u = function() {
                              r._webWorker || s();
                            };
                          a.addEventListener("error", u),
                            o.on("test", function(e) {
                              return (
                                a.removeEventListener("error", u),
                                r.destroyed
                                  ? void s()
                                  : void (e
                                      ? ((r._messageHandler = o),
                                        (r._port = a),
                                        (r._webWorker = a),
                                        e.supportTransfers ||
                                          (r.postMessageTransfers = !1),
                                        r._readyCapability.resolve(),
                                        o.send("configure", {
                                          verbosity: r.verbosity,
                                        }))
                                      : (r._setupFakeWorker(),
                                        o.destroy(),
                                        a.terminate()))
                              );
                            }),
                            o.on("ready", function(e) {
                              if (
                                (a.removeEventListener("error", u), r.destroyed)
                              )
                                return void s();
                              try {
                                c();
                              } catch (t) {
                                r._setupFakeWorker();
                              }
                            });
                          var c = function() {
                            var e = new Uint8Array([
                              r.postMessageTransfers ? 255 : 0,
                            ]);
                            try {
                              o.send("test", e, [e.buffer]);
                            } catch (t) {
                              (0, w.warn)("Cannot use postMessage transfers."),
                                (e[0] = 0),
                                o.send("test", e);
                            }
                          };
                          return void c();
                        } catch (l) {
                          (0, w.info)("The worker has been disabled.");
                        }
                      }
                      this._setupFakeWorker();
                    },
                  },
                  {
                    key: "_setupFakeWorker",
                    value: function() {
                      var e = this;
                      M || ((0, w.warn)("Setting up fake worker."), (M = !0)),
                        r()
                          .then(function(t) {
                            if (e.destroyed)
                              return void e._readyCapability.reject(
                                new Error("Worker was destroyed")
                              );
                            var r = new X();
                            e._port = r;
                            var n = "fake" + o++,
                              i = new E.MessageHandler(n + "_worker", n, r);
                            t.setup(i, r);
                            var a = new E.MessageHandler(n, n + "_worker", r);
                            (e._messageHandler = a),
                              e._readyCapability.resolve();
                          })
                          ["catch"](function(t) {
                            e._readyCapability.reject(
                              new Error(
                                'Setting up fake worker failed: "'.concat(
                                  t.message,
                                  '".'
                                )
                              )
                            );
                          });
                    },
                  },
                  {
                    key: "destroy",
                    value: function() {
                      (this.destroyed = !0),
                        this._webWorker &&
                          (this._webWorker.terminate(),
                          (this._webWorker = null)),
                        a["delete"](this._port),
                        (this._port = null),
                        this._messageHandler &&
                          (this._messageHandler.destroy(),
                          (this._messageHandler = null));
                    },
                  },
                  {
                    key: "promise",
                    get: function() {
                      return this._readyCapability.promise;
                    },
                  },
                  {
                    key: "port",
                    get: function() {
                      return this._port;
                    },
                  },
                  {
                    key: "messageHandler",
                    get: function() {
                      return this._messageHandler;
                    },
                  },
                ],
                [
                  {
                    key: "fromPort",
                    value: function(e) {
                      if (!e || !e.port)
                        throw new Error(
                          "PDFWorker.fromPort - invalid method signature."
                        );
                      return a.has(e.port) ? a.get(e.port) : new i(e);
                    },
                  },
                  {
                    key: "getWorkerSrc",
                    value: function() {
                      return e();
                    },
                  },
                ]
              ),
              i
            );
          })();
        return s;
      })();
      t.PDFWorker = Y;
      var V = (function() {
          function e(t, r, n, i) {
            p(this, e),
              (this.messageHandler = t),
              (this.loadingTask = r),
              (this.commonObjs = new Q()),
              (this.fontLoader = new x.FontLoader({
                docId: r.docId,
                onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
              })),
              (this._params = i),
              (this.CMapReaderFactory = new i.CMapReaderFactory({
                baseUrl: i.cMapUrl,
                isCompressed: i.cMapPacked,
              })),
              (this.destroyed = !1),
              (this.destroyCapability = null),
              (this._passwordCapability = null),
              (this._networkStream = n),
              (this._fullReader = null),
              (this._lastProgress = null),
              (this.pageCache = []),
              (this.pagePromises = []),
              (this.downloadInfoCapability = (0, w.createPromiseCapability)()),
              this.setupMessageHandler();
          }
          return (
            g(e, [
              {
                key: "destroy",
                value: function() {
                  var e = this;
                  if (this.destroyCapability)
                    return this.destroyCapability.promise;
                  (this.destroyed = !0),
                    (this.destroyCapability = (0, w.createPromiseCapability)()),
                    this._passwordCapability &&
                      this._passwordCapability.reject(
                        new Error(
                          "Worker was destroyed during onPassword callback"
                        )
                      );
                  var t = [];
                  this.pageCache.forEach(function(e) {
                    e && t.push(e._destroy());
                  }),
                    (this.pageCache.length = 0),
                    (this.pagePromises.length = 0);
                  var r = this.messageHandler.sendWithPromise(
                    "Terminate",
                    null
                  );
                  return (
                    t.push(r),
                    Promise.all(t).then(function() {
                      e.fontLoader.clear(),
                        e._networkStream &&
                          e._networkStream.cancelAllRequests(
                            new w.AbortException("Worker was terminated.")
                          ),
                        e.messageHandler &&
                          (e.messageHandler.destroy(),
                          (e.messageHandler = null)),
                        e.destroyCapability.resolve();
                    }, this.destroyCapability.reject),
                    this.destroyCapability.promise
                  );
                },
              },
              {
                key: "setupMessageHandler",
                value: function() {
                  var e = this,
                    t = this.messageHandler,
                    r = this.loadingTask;
                  t.on("GetReader", function(t, r) {
                    (0, w.assert)(e._networkStream),
                      (e._fullReader = e._networkStream.getFullReader()),
                      (e._fullReader.onProgress = function(t) {
                        e._lastProgress = { loaded: t.loaded, total: t.total };
                      }),
                      (r.onPull = function() {
                        e._fullReader
                          .read()
                          .then(function(e) {
                            var t = e.value,
                              n = e.done;
                            return n
                              ? void r.close()
                              : ((0, w.assert)((0, w.isArrayBuffer)(t)),
                                void r.enqueue(new Uint8Array(t), 1, [t]));
                          })
                          ["catch"](function(e) {
                            r.error(e);
                          });
                      }),
                      (r.onCancel = function(t) {
                        e._fullReader.cancel(t);
                      });
                  }),
                    t.on("ReaderHeadersReady", function(t) {
                      var n = (0, w.createPromiseCapability)(),
                        i = e._fullReader;
                      return (
                        i.headersReady.then(function() {
                          (i.isStreamingSupported && i.isRangeSupported) ||
                            (e._lastProgress &&
                              r.onProgress &&
                              r.onProgress(e._lastProgress),
                            (i.onProgress = function(e) {
                              r.onProgress &&
                                r.onProgress({
                                  loaded: e.loaded,
                                  total: e.total,
                                });
                            })),
                            n.resolve({
                              isStreamingSupported: i.isStreamingSupported,
                              isRangeSupported: i.isRangeSupported,
                              contentLength: i.contentLength,
                            });
                        }, n.reject),
                        n.promise
                      );
                    }),
                    t.on("GetRangeReader", function(t, r) {
                      (0, w.assert)(e._networkStream);
                      var n = e._networkStream.getRangeReader(t.begin, t.end);
                      return n
                        ? ((r.onPull = function() {
                            n.read()
                              .then(function(e) {
                                var t = e.value,
                                  n = e.done;
                                return n
                                  ? void r.close()
                                  : ((0, w.assert)((0, w.isArrayBuffer)(t)),
                                    void r.enqueue(new Uint8Array(t), 1, [t]));
                              })
                              ["catch"](function(e) {
                                r.error(e);
                              });
                          }),
                          void (r.onCancel = function(e) {
                            n.cancel(e);
                          }))
                        : void r.close();
                    }),
                    t.on("GetDoc", function(t) {
                      var n = t.pdfInfo;
                      (e._numPages = n.numPages),
                        r._capability.resolve(new z(n, e));
                    }),
                    t.on("PasswordRequest", function(t) {
                      if (
                        ((e._passwordCapability = (0,
                        w.createPromiseCapability)()),
                        r.onPassword)
                      ) {
                        var n = function(t) {
                          e._passwordCapability.resolve({ password: t });
                        };
                        try {
                          r.onPassword(n, t.code);
                        } catch (i) {
                          e._passwordCapability.reject(i);
                        }
                      } else e._passwordCapability.reject(new w.PasswordException(t.message, t.code));
                      return e._passwordCapability.promise;
                    }),
                    t.on("PasswordException", function(e) {
                      r._capability.reject(
                        new w.PasswordException(e.message, e.code)
                      );
                    }),
                    t.on("InvalidPDF", function(e) {
                      r._capability.reject(
                        new w.InvalidPDFException(e.message)
                      );
                    }),
                    t.on("MissingPDF", function(e) {
                      r._capability.reject(
                        new w.MissingPDFException(e.message)
                      );
                    }),
                    t.on("UnexpectedResponse", function(e) {
                      r._capability.reject(
                        new w.UnexpectedResponseException(e.message, e.status)
                      );
                    }),
                    t.on("UnknownError", function(e) {
                      r._capability.reject(
                        new w.UnknownErrorException(e.message, e.details)
                      );
                    }),
                    t.on("DataLoaded", function(t) {
                      r.onProgress &&
                        r.onProgress({ loaded: t.length, total: t.length }),
                        e.downloadInfoCapability.resolve(t);
                    }),
                    t.on("StartRenderPage", function(t) {
                      if (!e.destroyed) {
                        var r = e.pageCache[t.pageIndex];
                        r._startRenderPage(t.transparency, t.intent);
                      }
                    }),
                    t.on("commonobj", function(r) {
                      if (!e.destroyed) {
                        var n = o(r, 3),
                          i = n[0],
                          a = n[1],
                          s = n[2];
                        if (!e.commonObjs.has(i))
                          switch (a) {
                            case "Font":
                              var u = e._params;
                              if ("error" in s) {
                                var c = s.error;
                                (0, w.warn)(
                                  "Error during font loading: ".concat(c)
                                ),
                                  e.commonObjs.resolve(i, c);
                                break;
                              }
                              var l = null;
                              u.pdfBug &&
                                R["default"].FontInspector &&
                                R["default"].FontInspector.enabled &&
                                (l = {
                                  registerFont: function(e, t) {
                                    R["default"].FontInspector.fontAdded(e, t);
                                  },
                                });
                              var h = new x.FontFaceObject(s, {
                                isEvalSupported: u.isEvalSupported,
                                disableFontFace: u.disableFontFace,
                                ignoreErrors: u.ignoreErrors,
                                onUnsupportedFeature: e._onUnsupportedFeature.bind(
                                  e
                                ),
                                fontRegistry: l,
                              });
                              e.fontLoader.bind(h).then(
                                function() {
                                  e.commonObjs.resolve(i, h);
                                },
                                function(r) {
                                  t.sendWithPromise("FontFallback", { id: i })[
                                    "finally"
                                  ](function() {
                                    e.commonObjs.resolve(i, h);
                                  });
                                }
                              );
                              break;
                            case "FontPath":
                            case "FontType3Res":
                              e.commonObjs.resolve(i, s);
                              break;
                            default:
                              throw new Error(
                                "Got unknown common object type ".concat(a)
                              );
                          }
                      }
                    }),
                    t.on("obj", function(t) {
                      if (!e.destroyed) {
                        var r = o(t, 4),
                          n = r[0],
                          i = r[1],
                          a = r[2],
                          s = r[3],
                          u = e.pageCache[i];
                        if (!u.objs.has(n))
                          switch (a) {
                            case "JpegStream":
                              return new Promise(function(e, t) {
                                var r = new Image();
                                (r.onload = function() {
                                  e(r);
                                }),
                                  (r.onerror = function() {
                                    t(
                                      new Error(
                                        "Error during JPEG image loading"
                                      )
                                    ),
                                      (0, k.releaseImageResources)(r);
                                  }),
                                  (r.src = s);
                              }).then(function(e) {
                                u.objs.resolve(n, e);
                              });
                            case "Image":
                              u.objs.resolve(n, s);
                              var c = 8e6;
                              s &&
                                "data" in s &&
                                s.data.length > c &&
                                (u.cleanupAfterRender = !0);
                              break;
                            default:
                              throw new Error(
                                "Got unknown object type ".concat(a)
                              );
                          }
                      }
                    }),
                    t.on("DocProgress", function(t) {
                      e.destroyed ||
                        (r.onProgress &&
                          r.onProgress({ loaded: t.loaded, total: t.total }));
                    }),
                    t.on(
                      "UnsupportedFeature",
                      this._onUnsupportedFeature.bind(this)
                    ),
                    t.on("JpegDecode", function(t) {
                      if (e.destroyed)
                        return Promise.reject(
                          new Error("Worker was destroyed")
                        );
                      if ("undefined" == typeof document)
                        return Promise.reject(
                          new Error('"document" is not defined.')
                        );
                      var r = o(t, 2),
                        n = r[0],
                        i = r[1];
                      return 3 !== i && 1 !== i
                        ? Promise.reject(
                            new Error(
                              "Only 3 components or 1 component can be returned"
                            )
                          )
                        : new Promise(function(e, t) {
                            var r = new Image();
                            (r.onload = function() {
                              var t = r.width,
                                n = r.height,
                                a = t * n,
                                o = 4 * a,
                                s = new Uint8ClampedArray(a * i),
                                u = document.createElement("canvas");
                              (u.width = t), (u.height = n);
                              var c = u.getContext("2d");
                              c.drawImage(r, 0, 0);
                              var l = c.getImageData(0, 0, t, n).data;
                              if (3 === i)
                                for (var h = 0, f = 0; h < o; h += 4, f += 3)
                                  (s[f] = l[h]),
                                    (s[f + 1] = l[h + 1]),
                                    (s[f + 2] = l[h + 2]);
                              else if (1 === i)
                                for (var d = 0, p = 0; d < o; d += 4, p++)
                                  s[p] = l[d];
                              e({ data: s, width: t, height: n }),
                                (0, k.releaseImageResources)(r),
                                (u.width = 0),
                                (u.height = 0),
                                (u = null),
                                (c = null);
                            }),
                              (r.onerror = function() {
                                t(new Error("JpegDecode failed to load image")),
                                  (0, k.releaseImageResources)(r);
                              }),
                              (r.src = n);
                          });
                    }),
                    t.on("FetchBuiltInCMap", function(t, r) {
                      if (e.destroyed)
                        return void r.error(new Error("Worker was destroyed"));
                      var n = !1;
                      r.onPull = function() {
                        return n
                          ? void r.close()
                          : ((n = !0),
                            void e.CMapReaderFactory.fetch(t)
                              .then(function(e) {
                                r.enqueue(e, 1, [e.cMapData.buffer]);
                              })
                              ["catch"](function(e) {
                                r.error(e);
                              }));
                      };
                    });
                },
              },
              {
                key: "_onUnsupportedFeature",
                value: function(e) {
                  var t = e.featureId;
                  this.destroyed ||
                    (this.loadingTask.onUnsupportedFeature &&
                      this.loadingTask.onUnsupportedFeature(t));
                },
              },
              {
                key: "getData",
                value: function() {
                  return this.messageHandler.sendWithPromise("GetData", null);
                },
              },
              {
                key: "getPage",
                value: function(e) {
                  var t = this;
                  if (!Number.isInteger(e) || e <= 0 || e > this._numPages)
                    return Promise.reject(new Error("Invalid page request"));
                  var r = e - 1;
                  if (r in this.pagePromises) return this.pagePromises[r];
                  var n = this.messageHandler
                    .sendWithPromise("GetPage", { pageIndex: r })
                    .then(function(e) {
                      if (t.destroyed) throw new Error("Transport destroyed");
                      var n = new H(r, e, t, t._params.pdfBug);
                      return (t.pageCache[r] = n), n;
                    });
                  return (this.pagePromises[r] = n), n;
                },
              },
              {
                key: "getPageIndex",
                value: function(e) {
                  return this.messageHandler
                    .sendWithPromise("GetPageIndex", { ref: e })
                    ["catch"](function(e) {
                      return Promise.reject(new Error(e));
                    });
                },
              },
              {
                key: "getAnnotations",
                value: function(e, t) {
                  return this.messageHandler.sendWithPromise("GetAnnotations", {
                    pageIndex: e,
                    intent: t,
                  });
                },
              },
              {
                key: "getDestinations",
                value: function() {
                  return this.messageHandler.sendWithPromise(
                    "GetDestinations",
                    null
                  );
                },
              },
              {
                key: "getDestination",
                value: function(e) {
                  return "string" != typeof e
                    ? Promise.reject(new Error("Invalid destination request."))
                    : this.messageHandler.sendWithPromise("GetDestination", {
                        id: e,
                      });
                },
              },
              {
                key: "getPageLabels",
                value: function() {
                  return this.messageHandler.sendWithPromise(
                    "GetPageLabels",
                    null
                  );
                },
              },
              {
                key: "getPageLayout",
                value: function() {
                  return this.messageHandler.sendWithPromise(
                    "GetPageLayout",
                    null
                  );
                },
              },
              {
                key: "getPageMode",
                value: function() {
                  return this.messageHandler.sendWithPromise(
                    "GetPageMode",
                    null
                  );
                },
              },
              {
                key: "getViewerPreferences",
                value: function() {
                  return this.messageHandler.sendWithPromise(
                    "GetViewerPreferences",
                    null
                  );
                },
              },
              {
                key: "getOpenActionDestination",
                value: function() {
                  return this.messageHandler.sendWithPromise(
                    "GetOpenActionDestination",
                    null
                  );
                },
              },
              {
                key: "getAttachments",
                value: function() {
                  return this.messageHandler.sendWithPromise(
                    "GetAttachments",
                    null
                  );
                },
              },
              {
                key: "getJavaScript",
                value: function() {
                  return this.messageHandler.sendWithPromise(
                    "GetJavaScript",
                    null
                  );
                },
              },
              {
                key: "getOutline",
                value: function() {
                  return this.messageHandler.sendWithPromise(
                    "GetOutline",
                    null
                  );
                },
              },
              {
                key: "getPermissions",
                value: function() {
                  return this.messageHandler.sendWithPromise(
                    "GetPermissions",
                    null
                  );
                },
              },
              {
                key: "getMetadata",
                value: function() {
                  var e = this;
                  return this.messageHandler
                    .sendWithPromise("GetMetadata", null)
                    .then(function(t) {
                      return {
                        info: t[0],
                        metadata: t[1] ? new O.Metadata(t[1]) : null,
                        contentDispositionFilename: e._fullReader
                          ? e._fullReader.filename
                          : null,
                      };
                    });
                },
              },
              {
                key: "getStats",
                value: function() {
                  return this.messageHandler.sendWithPromise("GetStats", null);
                },
              },
              {
                key: "startCleanup",
                value: function() {
                  var e = this;
                  this.messageHandler
                    .sendWithPromise("Cleanup", null)
                    .then(function() {
                      for (var t = 0, r = e.pageCache.length; t < r; t++) {
                        var n = e.pageCache[t];
                        n && n.cleanup();
                      }
                      e.commonObjs.clear(), e.fontLoader.clear();
                    });
                },
              },
              {
                key: "loadingParams",
                get: function() {
                  var e = this._params;
                  return (0, w.shadow)(this, "loadingParams", {
                    disableAutoFetch: e.disableAutoFetch,
                    disableCreateObjectURL: e.disableCreateObjectURL,
                    disableFontFace: e.disableFontFace,
                    nativeImageDecoderSupport: e.nativeImageDecoderSupport,
                  });
                },
              },
            ]),
            e
          );
        })(),
        Q = (function() {
          function e() {
            p(this, e), (this._objs = Object.create(null));
          }
          return (
            g(e, [
              {
                key: "_ensureObj",
                value: function(e) {
                  return this._objs[e]
                    ? this._objs[e]
                    : (this._objs[e] = {
                        capability: (0, w.createPromiseCapability)(),
                        data: null,
                        resolved: !1,
                      });
                },
              },
              {
                key: "get",
                value: function(e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                  if (t)
                    return this._ensureObj(e).capability.promise.then(t), null;
                  var r = this._objs[e];
                  if (!r || !r.resolved)
                    throw new Error(
                      "Requesting object that isn't resolved yet ".concat(
                        e,
                        "."
                      )
                    );
                  return r.data;
                },
              },
              {
                key: "has",
                value: function(e) {
                  var t = this._objs[e];
                  return !!t && t.resolved;
                },
              },
              {
                key: "resolve",
                value: function(e, t) {
                  var r = this._ensureObj(e);
                  (r.resolved = !0), (r.data = t), r.capability.resolve(t);
                },
              },
              {
                key: "clear",
                value: function() {
                  for (var e in this._objs) {
                    var t = this._objs[e].data;
                    "undefined" != typeof Image &&
                      t instanceof Image &&
                      (0, k.releaseImageResources)(t);
                  }
                  this._objs = Object.create(null);
                },
              },
            ]),
            e
          );
        })(),
        K = (function() {
          function e(t) {
            p(this, e),
              (this._internalRenderTask = t),
              (this.onContinue = null);
          }
          return (
            g(e, [
              {
                key: "cancel",
                value: function() {
                  this._internalRenderTask.cancel();
                },
              },
              {
                key: "then",
                value: function(e, t) {
                  return (
                    (0, k.deprecated)(
                      "RenderTask.then method, use the `promise` getter instead."
                    ),
                    this.promise.then.apply(this.promise, arguments)
                  );
                },
              },
              {
                key: "promise",
                get: function() {
                  return this._internalRenderTask.capability.promise;
                },
              },
            ]),
            e
          );
        })(),
        J = (function() {
          var e = new WeakSet(),
            t = (function() {
              function t(e) {
                var r = e.callback,
                  n = e.params,
                  i = e.objs,
                  a = e.commonObjs,
                  o = e.operatorList,
                  s = e.pageNumber,
                  u = e.canvasFactory,
                  c = e.webGLContext,
                  l = e.useRequestAnimationFrame,
                  h = void 0 !== l && l,
                  f = e.pdfBug,
                  d = void 0 !== f && f;
                p(this, t),
                  (this.callback = r),
                  (this.params = n),
                  (this.objs = i),
                  (this.commonObjs = a),
                  (this.operatorListIdx = null),
                  (this.operatorList = o),
                  (this.pageNumber = s),
                  (this.canvasFactory = u),
                  (this.webGLContext = c),
                  (this._pdfBug = d),
                  (this.running = !1),
                  (this.graphicsReadyCallback = null),
                  (this.graphicsReady = !1),
                  (this._useRequestAnimationFrame =
                    h === !0 && "undefined" != typeof window),
                  (this.cancelled = !1),
                  (this.capability = (0, w.createPromiseCapability)()),
                  (this.task = new K(this)),
                  (this._continueBound = this._continue.bind(this)),
                  (this._scheduleNextBound = this._scheduleNext.bind(this)),
                  (this._nextBound = this._next.bind(this)),
                  (this._canvas = n.canvasContext.canvas);
              }
              return (
                g(t, [
                  {
                    key: "initializeGraphics",
                    value: function() {
                      var t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                      if (!this.cancelled) {
                        if (this._canvas) {
                          if (e.has(this._canvas))
                            throw new Error(
                              "Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed."
                            );
                          e.add(this._canvas);
                        }
                        this._pdfBug &&
                          R["default"].StepperManager &&
                          R["default"].StepperManager.enabled &&
                          ((this.stepper = R["default"].StepperManager.create(
                            this.pageNumber - 1
                          )),
                          this.stepper.init(this.operatorList),
                          (this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint()));
                        var r = this.params,
                          n = r.canvasContext,
                          i = r.viewport,
                          a = r.transform,
                          o = r.imageLayer,
                          s = r.background;
                        (this.gfx = new P.CanvasGraphics(
                          n,
                          this.commonObjs,
                          this.objs,
                          this.canvasFactory,
                          this.webGLContext,
                          o
                        )),
                          this.gfx.beginDrawing({
                            transform: a,
                            viewport: i,
                            transparency: t,
                            background: s,
                          }),
                          (this.operatorListIdx = 0),
                          (this.graphicsReady = !0),
                          this.graphicsReadyCallback &&
                            this.graphicsReadyCallback();
                      }
                    },
                  },
                  {
                    key: "cancel",
                    value: function() {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null;
                      (this.running = !1),
                        (this.cancelled = !0),
                        this.gfx && this.gfx.endDrawing(),
                        this._canvas && e["delete"](this._canvas),
                        this.callback(
                          t ||
                            new k.RenderingCancelledException(
                              "Rendering cancelled, page ".concat(
                                this.pageNumber
                              ),
                              "canvas"
                            )
                        );
                    },
                  },
                  {
                    key: "operatorListChanged",
                    value: function() {
                      return this.graphicsReady
                        ? (this.stepper &&
                            this.stepper.updateOperatorList(this.operatorList),
                          void (this.running || this._continue()))
                        : void (
                            this.graphicsReadyCallback ||
                            (this.graphicsReadyCallback = this._continueBound)
                          );
                    },
                  },
                  {
                    key: "_continue",
                    value: function() {
                      (this.running = !0),
                        this.cancelled ||
                          (this.task.onContinue
                            ? this.task.onContinue(this._scheduleNextBound)
                            : this._scheduleNext());
                    },
                  },
                  {
                    key: "_scheduleNext",
                    value: function() {
                      var e = this;
                      this._useRequestAnimationFrame
                        ? window.requestAnimationFrame(function() {
                            e._nextBound()["catch"](e.cancel.bind(e));
                          })
                        : Promise.resolve()
                            .then(this._nextBound)
                            ["catch"](this.cancel.bind(this));
                    },
                  },
                  {
                    key: "_next",
                    value: (function() {
                      function t() {
                        return r.apply(this, arguments);
                      }
                      var r = a(
                        S["default"].mark(function n() {
                          return S["default"].wrap(
                            function(t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (!this.cancelled) {
                                      t.next = 2;
                                      break;
                                    }
                                    return t.abrupt("return");
                                  case 2:
                                    (this.operatorListIdx = this.gfx.executeOperatorList(
                                      this.operatorList,
                                      this.operatorListIdx,
                                      this._continueBound,
                                      this.stepper
                                    )),
                                      this.operatorListIdx ===
                                        this.operatorList.argsArray.length &&
                                        ((this.running = !1),
                                        this.operatorList.lastChunk &&
                                          (this.gfx.endDrawing(),
                                          this._canvas &&
                                            e["delete"](this._canvas),
                                          this.callback()));
                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            },
                            n,
                            this
                          );
                        })
                      );
                      return t;
                    })(),
                  },
                ]),
                t
              );
            })();
          return t;
        })(),
        Z = "2.3.200";
      t.version = Z;
      var $ = "4ae3f9fc";
      t.build = $;
    },
    function(e, t, r) {
      "use strict";
      e.exports = r(181);
    },
    function(e, t, r) {
      "use strict";
      (function(e) {
        function t(e) {
          return (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        var r = (function(e) {
          function r(e, t, r, n) {
            var a = t && t.prototype instanceof i ? t : i,
              o = Object.create(a.prototype),
              s = new d(n || []);
            return (o._invoke = c(e, r, s)), o;
          }
          function n(e, t, r) {
            try {
              return { type: "normal", arg: e.call(t, r) };
            } catch (n) {
              return { type: "throw", arg: n };
            }
          }
          function i() {}
          function a() {}
          function o() {}
          function s(e) {
            ["next", "throw", "return"].forEach(function(t) {
              e[t] = function(e) {
                return this._invoke(t, e);
              };
            });
          }
          function u(e) {
            function r(i, a, o, s) {
              var u = n(e[i], e, a);
              if ("throw" !== u.type) {
                var c = u.arg,
                  l = c.value;
                return l && "object" === t(l) && y.call(l, "__await")
                  ? Promise.resolve(l.__await).then(
                      function(e) {
                        r("next", e, o, s);
                      },
                      function(e) {
                        r("throw", e, o, s);
                      }
                    )
                  : Promise.resolve(l).then(
                      function(e) {
                        (c.value = e), o(c);
                      },
                      function(e) {
                        return r("throw", e, o, s);
                      }
                    );
              }
              s(u.arg);
            }
            function i(e, t) {
              function n() {
                return new Promise(function(n, i) {
                  r(e, t, n, i);
                });
              }
              return (a = a ? a.then(n, n) : n());
            }
            var a;
            this._invoke = i;
          }
          function c(e, t, r) {
            var i = w;
            return function(a, o) {
              if (i === x) throw new Error("Generator is already running");
              if (i === C) {
                if ("throw" === a) throw o;
                return v();
              }
              for (r.method = a, r.arg = o; ; ) {
                var s = r.delegate;
                if (s) {
                  var u = l(s, r);
                  if (u) {
                    if (u === P) continue;
                    return u;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (i === w) throw ((i = C), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                i = x;
                var c = n(e, t, r);
                if ("normal" === c.type) {
                  if (((i = r.done ? C : k), c.arg === P)) continue;
                  return { value: c.arg, done: r.done };
                }
                "throw" === c.type &&
                  ((i = C), (r.method = "throw"), (r.arg = c.arg));
              }
            };
          }
          function l(e, t) {
            var r = e.iterator[t.method];
            if (r === g) {
              if (((t.delegate = null), "throw" === t.method)) {
                if (
                  e.iterator["return"] &&
                  ((t.method = "return"),
                  (t.arg = g),
                  l(e, t),
                  "throw" === t.method)
                )
                  return P;
                (t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return P;
            }
            var i = n(r, e.iterator, t.arg);
            if ("throw" === i.type)
              return (
                (t.method = "throw"), (t.arg = i.arg), (t.delegate = null), P
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((t[e.resultName] = a.value),
                  (t.next = e.nextLoc),
                  "return" !== t.method && ((t.method = "next"), (t.arg = g)),
                  (t.delegate = null),
                  P)
                : a
              : ((t.method = "throw"),
                (t.arg = new TypeError("iterator result is not an object")),
                (t.delegate = null),
                P);
          }
          function h(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function f(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function d(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(h, this),
              this.reset(!0);
          }
          function p(e) {
            if (e) {
              var t = e[_];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var r = -1,
                  n = function i() {
                    for (; ++r < e.length; )
                      if (y.call(e, r))
                        return (i.value = e[r]), (i.done = !1), i;
                    return (i.value = g), (i.done = !0), i;
                  };
                return (n.next = n);
              }
            }
            return { next: v };
          }
          function v() {
            return { value: g, done: !0 };
          }
          var g,
            m = Object.prototype,
            y = m.hasOwnProperty,
            b = "function" == typeof Symbol ? Symbol : {},
            _ = b.iterator || "@@iterator",
            A = b.asyncIterator || "@@asyncIterator",
            S = b.toStringTag || "@@toStringTag";
          e.wrap = r;
          var w = "suspendedStart",
            k = "suspendedYield",
            x = "executing",
            C = "completed",
            P = {},
            R = {};
          R[_] = function() {
            return this;
          };
          var T = Object.getPrototypeOf,
            E = T && T(T(p([])));
          E && E !== m && y.call(E, _) && (R = E);
          var O = (o.prototype = i.prototype = Object.create(R));
          return (
            (a.prototype = O.constructor = o),
            (o.constructor = a),
            (o[S] = a.displayName = "GeneratorFunction"),
            (e.isGeneratorFunction = function(e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === a || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function(e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, o)
                  : ((e.__proto__ = o), S in e || (e[S] = "GeneratorFunction")),
                (e.prototype = Object.create(O)),
                e
              );
            }),
            (e.awrap = function(e) {
              return { __await: e };
            }),
            s(u.prototype),
            (u.prototype[A] = function() {
              return this;
            }),
            (e.AsyncIterator = u),
            (e.async = function(t, n, i, a) {
              var o = new u(r(t, n, i, a));
              return e.isGeneratorFunction(n)
                ? o
                : o.next().then(function(e) {
                    return e.done ? e.value : o.next();
                  });
            }),
            s(O),
            (O[S] = "Generator"),
            (O[_] = function() {
              return this;
            }),
            (O.toString = function() {
              return "[object Generator]";
            }),
            (e.keys = function(e) {
              var t = [];
              for (var r in e) t.push(r);
              return (
                t.reverse(),
                function n() {
                  for (; t.length; ) {
                    var r = t.pop();
                    if (r in e) return (n.value = r), (n.done = !1), n;
                  }
                  return (n.done = !0), n;
                }
              );
            }),
            (e.values = p),
            (d.prototype = {
              constructor: d,
              reset: function(e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = g),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = g),
                  this.tryEntries.forEach(f),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) &&
                      y.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = g);
              },
              stop: function() {
                this.done = !0;
                var e = this.tryEntries[0],
                  t = e.completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function(e) {
                function t(t, n) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (r.next = t),
                    n && ((r.method = "next"), (r.arg = g)),
                    !!n
                  );
                }
                if (this.done) throw e;
                for (
                  var r = this, n = this.tryEntries.length - 1;
                  n >= 0;
                  --n
                ) {
                  var i = this.tryEntries[n],
                    a = i.completion;
                  if ("root" === i.tryLoc) return t("end");
                  if (i.tryLoc <= this.prev) {
                    var o = y.call(i, "catchLoc"),
                      s = y.call(i, "finallyLoc");
                    if (o && s) {
                      if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return t(i.finallyLoc);
                    } else if (o) {
                      if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return t(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function(e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var n = this.tryEntries[r];
                  if (
                    n.tryLoc <= this.prev &&
                    y.call(n, "finallyLoc") &&
                    this.prev < n.finallyLoc
                  ) {
                    var i = n;
                    break;
                  }
                }
                i &&
                  ("break" === e || "continue" === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var a = i ? i.completion : {};
                return (
                  (a.type = e),
                  (a.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), P)
                    : this.complete(a)
                );
              },
              complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  P
                );
              },
              finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.finallyLoc === e)
                    return this.complete(r.completion, r.afterLoc), f(r), P;
                }
              },
              catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.tryLoc === e) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var i = n.arg;
                      f(r);
                    }
                    return i;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function(e, t, r) {
                return (
                  (this.delegate = {
                    iterator: p(e),
                    resultName: t,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = g),
                  P
                );
              },
            }),
            e
          );
        })("object" === t(e) ? e.exports : {});
        try {
          regeneratorRuntime = r;
        } catch (n) {
          Function("r", "regeneratorRuntime = r")(r);
        }
      }.call(this, r(182)(e)));
    },
    function(e, t, r) {
      "use strict";
      e.exports = function(e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function() {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, "loaded", {
              enumerable: !0,
              get: function() {
                return e.l;
              },
            }),
            Object.defineProperty(e, "id", {
              enumerable: !0,
              get: function() {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function(e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function a(e, t) {
        return !t || ("object" !== i(t) && "function" != typeof t) ? o(e) : t;
      }
      function o(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function s(e) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && c(e, t);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function l(e, t, r, n, i, a, o) {
        try {
          var s = e[a](o),
            u = s.value;
        } catch (c) {
          return void r(c);
        }
        s.done ? t(u) : Promise.resolve(u).then(n, i);
      }
      function h(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, i) {
            function a(e) {
              l(s, n, i, a, o, "next", e);
            }
            function o(e) {
              l(s, n, i, a, o, "throw", e);
            }
            var s = e.apply(t, r);
            a(void 0);
          });
        };
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function p(e, t, r) {
        return t && d(e.prototype, t), r && d(e, r), e;
      }
      function v(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = t.url,
          n = t.target,
          i = t.rel,
          a = t.enabled,
          o = void 0 === a || a;
        (0, w.assert)(
          r && "string" == typeof r,
          'addLinkAttributes: A valid "url" parameter must provided.'
        );
        var s = (0, w.removeNullCharacters)(r);
        o
          ? (e.href = e.title = s)
          : ((e.href = ""),
            (e.title = "Disabled: ".concat(s)),
            (e.onclick = function() {
              return !1;
            }));
        var u = Object.values(O),
          c = u.includes(n) ? n : O.NONE;
        (e.target = L[c]), (e.rel = "string" == typeof i ? i : k);
      }
      function g(e) {
        var t = e.indexOf("#"),
          r = e.indexOf("?"),
          n = Math.min(t > 0 ? t : e.length, r > 0 ? r : e.length);
        return e.substring(e.lastIndexOf("/", n) + 1, n);
      }
      function m() {
        return (
          "undefined" != typeof fetch &&
          "undefined" != typeof Response &&
          "body" in Response.prototype &&
          "undefined" != typeof ReadableStream
        );
      }
      function y(e, t) {
        try {
          var r = t ? new URL(e, t) : new URL(e),
            n = r.protocol;
          return "http:" === n || "https:" === n;
        } catch (i) {
          return !1;
        }
      }
      function b(e) {
        return new Promise(function(t, r) {
          var n = document.createElement("script");
          (n.src = e),
            (n.onload = t),
            (n.onerror = function() {
              r(new Error("Cannot load script at: ".concat(n.src)));
            }),
            (document.head || document.documentElement).appendChild(n);
        });
      }
      function _(e) {}
      function A(e) {
        (0, w.assert)(e instanceof Image, "Invalid `img` parameter.");
        var t = e.src;
        "string" == typeof t &&
          t.startsWith("blob:") &&
          URL.revokeObjectURL &&
          URL.revokeObjectURL(t),
          e.removeAttribute("src");
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.addLinkAttributes = v),
        (t.getFilenameFromUrl = g),
        (t.isFetchSupported = m),
        (t.isValidFetchUrl = y),
        (t.loadScript = b),
        (t.deprecated = _),
        (t.releaseImageResources = A),
        (t.PDFDateString = t.DummyStatTimer = t.StatTimer = t.DOMSVGFactory = t.DOMCMapReaderFactory = t.DOMCanvasFactory = t.DEFAULT_LINK_REL = t.LinkTarget = t.RenderingCancelledException = t.PageViewport = void 0);
      var S = n(r(180)),
        w = r(1),
        k = "noopener noreferrer nofollow";
      t.DEFAULT_LINK_REL = k;
      var x = "http://www.w3.org/2000/svg",
        C = (function() {
          function e() {
            f(this, e);
          }
          return (
            p(e, [
              {
                key: "create",
                value: function(e, t) {
                  if (e <= 0 || t <= 0) throw new Error("Invalid canvas size");
                  var r = document.createElement("canvas"),
                    n = r.getContext("2d");
                  return (
                    (r.width = e), (r.height = t), { canvas: r, context: n }
                  );
                },
              },
              {
                key: "reset",
                value: function(e, t, r) {
                  if (!e.canvas) throw new Error("Canvas is not specified");
                  if (t <= 0 || r <= 0) throw new Error("Invalid canvas size");
                  (e.canvas.width = t), (e.canvas.height = r);
                },
              },
              {
                key: "destroy",
                value: function(e) {
                  if (!e.canvas) throw new Error("Canvas is not specified");
                  (e.canvas.width = 0),
                    (e.canvas.height = 0),
                    (e.canvas = null),
                    (e.context = null);
                },
              },
            ]),
            e
          );
        })();
      t.DOMCanvasFactory = C;
      var P = (function() {
        function e(t) {
          var r = t.baseUrl,
            n = void 0 === r ? null : r,
            i = t.isCompressed,
            a = void 0 !== i && i;
          f(this, e), (this.baseUrl = n), (this.isCompressed = a);
        }
        return (
          p(e, [
            {
              key: "fetch",
              value: (function(e) {
                function t(t) {
                  return e.apply(this, arguments);
                }
                return (
                  (t.toString = function() {
                    return e.toString();
                  }),
                  t
                );
              })(
                (function() {
                  var e = h(
                    S["default"].mark(function t(e) {
                      var r,
                        n,
                        i,
                        a = this;
                      return S["default"].wrap(
                        function(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                if (((r = e.name), this.baseUrl)) {
                                  t.next = 3;
                                  break;
                                }
                                throw new Error(
                                  'The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.'
                                );
                              case 3:
                                if (r) {
                                  t.next = 5;
                                  break;
                                }
                                throw new Error("CMap name must be specified.");
                              case 5:
                                if (
                                  ((n =
                                    this.baseUrl +
                                    r +
                                    (this.isCompressed ? ".bcmap" : "")),
                                  (i = this.isCompressed
                                    ? w.CMapCompressionType.BINARY
                                    : w.CMapCompressionType.NONE),
                                  !m() || !y(n, document.baseURI))
                                ) {
                                  t.next = 9;
                                  break;
                                }
                                return t.abrupt(
                                  "return",
                                  fetch(n)
                                    .then(
                                      (function() {
                                        var e = h(
                                          S["default"].mark(function t(e) {
                                            var r;
                                            return S["default"].wrap(function(
                                              t
                                            ) {
                                              for (;;)
                                                switch ((t.prev = t.next)) {
                                                  case 0:
                                                    if (e.ok) {
                                                      t.next = 2;
                                                      break;
                                                    }
                                                    throw new Error(
                                                      e.statusText
                                                    );
                                                  case 2:
                                                    if (!a.isCompressed) {
                                                      t.next = 10;
                                                      break;
                                                    }
                                                    return (
                                                      (t.t0 = Uint8Array),
                                                      (t.next = 6),
                                                      e.arrayBuffer()
                                                    );
                                                  case 6:
                                                    (t.t1 = t.sent),
                                                      (r = new t.t0(t.t1)),
                                                      (t.next = 15);
                                                    break;
                                                  case 10:
                                                    return (
                                                      (t.t2 = w.stringToBytes),
                                                      (t.next = 13),
                                                      e.text()
                                                    );
                                                  case 13:
                                                    (t.t3 = t.sent),
                                                      (r = (0, t.t2)(t.t3));
                                                  case 15:
                                                    return t.abrupt("return", {
                                                      cMapData: r,
                                                      compressionType: i,
                                                    });
                                                  case 16:
                                                  case "end":
                                                    return t.stop();
                                                }
                                            },
                                            t);
                                          })
                                        );
                                        return function(t) {
                                          return e.apply(this, arguments);
                                        };
                                      })()
                                    )
                                    ["catch"](function(e) {
                                      throw new Error(
                                        "Unable to load ".concat(
                                          a.isCompressed ? "binary " : ""
                                        ) + "CMap at: ".concat(n)
                                      );
                                    })
                                );
                              case 9:
                                return t.abrupt(
                                  "return",
                                  new Promise(function(e, t) {
                                    var r = new XMLHttpRequest();
                                    r.open("GET", n, !0),
                                      a.isCompressed &&
                                        (r.responseType = "arraybuffer"),
                                      (r.onreadystatechange = function() {
                                        if (
                                          r.readyState === XMLHttpRequest.DONE
                                        ) {
                                          if (
                                            200 === r.status ||
                                            0 === r.status
                                          ) {
                                            var n;
                                            if (
                                              (a.isCompressed && r.response
                                                ? (n = new Uint8Array(
                                                    r.response
                                                  ))
                                                : !a.isCompressed &&
                                                  r.responseText &&
                                                  (n = (0, w.stringToBytes)(
                                                    r.responseText
                                                  )),
                                              n)
                                            )
                                              return void e({
                                                cMapData: n,
                                                compressionType: i,
                                              });
                                          }
                                          t(new Error(r.statusText));
                                        }
                                      }),
                                      r.send(null);
                                  })["catch"](function(e) {
                                    throw new Error(
                                      "Unable to load ".concat(
                                        a.isCompressed ? "binary " : ""
                                      ) + "CMap at: ".concat(n)
                                    );
                                  })
                                );
                              case 10:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
            },
          ]),
          e
        );
      })();
      t.DOMCMapReaderFactory = P;
      var R = (function() {
        function e() {
          f(this, e);
        }
        return (
          p(e, [
            {
              key: "create",
              value: function(e, t) {
                (0, w.assert)(e > 0 && t > 0, "Invalid SVG dimensions");
                var r = document.createElementNS(x, "svg:svg");
                return (
                  r.setAttribute("version", "1.1"),
                  r.setAttribute("width", e + "px"),
                  r.setAttribute("height", t + "px"),
                  r.setAttribute("preserveAspectRatio", "none"),
                  r.setAttribute("viewBox", "0 0 " + e + " " + t),
                  r
                );
              },
            },
            {
              key: "createElement",
              value: function(e) {
                return (
                  (0, w.assert)(
                    "string" == typeof e,
                    "Invalid SVG element type"
                  ),
                  document.createElementNS(x, e)
                );
              },
            },
          ]),
          e
        );
      })();
      t.DOMSVGFactory = R;
      var T = (function() {
        function e(t) {
          var r = t.viewBox,
            n = t.scale,
            i = t.rotation,
            a = t.offsetX,
            o = void 0 === a ? 0 : a,
            s = t.offsetY,
            u = void 0 === s ? 0 : s,
            c = t.dontFlip,
            l = void 0 !== c && c;
          f(this, e),
            (this.viewBox = r),
            (this.scale = n),
            (this.rotation = i),
            (this.offsetX = o),
            (this.offsetY = u);
          var h,
            d,
            p,
            v,
            g = (r[2] + r[0]) / 2,
            m = (r[3] + r[1]) / 2;
          switch (((i %= 360), (i = i < 0 ? i + 360 : i))) {
            case 180:
              (h = -1), (d = 0), (p = 0), (v = 1);
              break;
            case 90:
              (h = 0), (d = 1), (p = 1), (v = 0);
              break;
            case 270:
              (h = 0), (d = -1), (p = -1), (v = 0);
              break;
            default:
              (h = 1), (d = 0), (p = 0), (v = -1);
          }
          l && ((p = -p), (v = -v));
          var y, b, _, A;
          0 === h
            ? ((y = Math.abs(m - r[1]) * n + o),
              (b = Math.abs(g - r[0]) * n + u),
              (_ = Math.abs(r[3] - r[1]) * n),
              (A = Math.abs(r[2] - r[0]) * n))
            : ((y = Math.abs(g - r[0]) * n + o),
              (b = Math.abs(m - r[1]) * n + u),
              (_ = Math.abs(r[2] - r[0]) * n),
              (A = Math.abs(r[3] - r[1]) * n)),
            (this.transform = [
              h * n,
              d * n,
              p * n,
              v * n,
              y - h * n * g - p * n * m,
              b - d * n * g - v * n * m,
            ]),
            (this.width = _),
            (this.height = A);
        }
        return (
          p(e, [
            {
              key: "clone",
              value: function() {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  r = t.scale,
                  n = void 0 === r ? this.scale : r,
                  i = t.rotation,
                  a = void 0 === i ? this.rotation : i,
                  o = t.dontFlip,
                  s = void 0 !== o && o;
                return new e({
                  viewBox: this.viewBox.slice(),
                  scale: n,
                  rotation: a,
                  offsetX: this.offsetX,
                  offsetY: this.offsetY,
                  dontFlip: s,
                });
              },
            },
            {
              key: "convertToViewportPoint",
              value: function(e, t) {
                return w.Util.applyTransform([e, t], this.transform);
              },
            },
            {
              key: "convertToViewportRectangle",
              value: function(e) {
                var t = w.Util.applyTransform([e[0], e[1]], this.transform),
                  r = w.Util.applyTransform([e[2], e[3]], this.transform);
                return [t[0], t[1], r[0], r[1]];
              },
            },
            {
              key: "convertToPdfPoint",
              value: function(e, t) {
                return w.Util.applyInverseTransform([e, t], this.transform);
              },
            },
          ]),
          e
        );
      })();
      t.PageViewport = T;
      var E = (function(e) {
        function t(e, r) {
          var n;
          return f(this, t), (n = a(this, s(t).call(this, e))), (n.type = r), n;
        }
        return u(t, e), t;
      })(w.BaseException);
      t.RenderingCancelledException = E;
      var O = { NONE: 0, SELF: 1, BLANK: 2, PARENT: 3, TOP: 4 };
      t.LinkTarget = O;
      var L = ["", "_self", "_blank", "_parent", "_top"],
        F = (function() {
          function e() {
            var t =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            f(this, e),
              (this.enabled = !!t),
              (this.started = Object.create(null)),
              (this.times = []);
          }
          return (
            p(e, [
              {
                key: "time",
                value: function(e) {
                  this.enabled &&
                    (e in this.started &&
                      (0, w.warn)("Timer is already running for " + e),
                    (this.started[e] = Date.now()));
                },
              },
              {
                key: "timeEnd",
                value: function(e) {
                  this.enabled &&
                    (e in this.started ||
                      (0, w.warn)("Timer has not been started for " + e),
                    this.times.push({
                      name: e,
                      start: this.started[e],
                      end: Date.now(),
                    }),
                    delete this.started[e]);
                },
              },
              {
                key: "toString",
                value: function() {
                  var e = "",
                    t = 0,
                    r = !0,
                    n = !1,
                    i = void 0;
                  try {
                    for (
                      var a, o = this.times[Symbol.iterator]();
                      !(r = (a = o.next()).done);
                      r = !0
                    ) {
                      var s = a.value,
                        u = s.name;
                      u.length > t && (t = u.length);
                    }
                  } catch (c) {
                    (n = !0), (i = c);
                  } finally {
                    try {
                      r || null == o["return"] || o["return"]();
                    } finally {
                      if (n) throw i;
                    }
                  }
                  var l = !0,
                    h = !1,
                    f = void 0;
                  try {
                    for (
                      var d, p = this.times[Symbol.iterator]();
                      !(l = (d = p.next()).done);
                      l = !0
                    ) {
                      var v = d.value,
                        g = v.end - v.start;
                      e += "".concat(v.name.padEnd(t), " ").concat(g, "ms\n");
                    }
                  } catch (c) {
                    (h = !0), (f = c);
                  } finally {
                    try {
                      l || null == p["return"] || p["return"]();
                    } finally {
                      if (h) throw f;
                    }
                  }
                  return e;
                },
              },
            ]),
            e
          );
        })();
      t.StatTimer = F;
      var I = (function() {
        function e() {
          f(this, e), (0, w.unreachable)("Cannot initialize DummyStatTimer.");
        }
        return (
          p(e, null, [
            { key: "time", value: function(e) {} },
            { key: "timeEnd", value: function(e) {} },
            {
              key: "toString",
              value: function() {
                return "";
              },
            },
          ]),
          e
        );
      })();
      t.DummyStatTimer = I;
      var j,
        M = (function() {
          function e() {
            f(this, e);
          }
          return (
            p(e, null, [
              {
                key: "toDateObject",
                value: function(e) {
                  if (!e || !(0, w.isString)(e)) return null;
                  j ||
                    (j = new RegExp(
                      "^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"
                    ));
                  var t = j.exec(e);
                  if (!t) return null;
                  var r = parseInt(t[1], 10),
                    n = parseInt(t[2], 10);
                  n = n >= 1 && n <= 12 ? n - 1 : 0;
                  var i = parseInt(t[3], 10);
                  i = i >= 1 && i <= 31 ? i : 1;
                  var a = parseInt(t[4], 10);
                  a = a >= 0 && a <= 23 ? a : 0;
                  var o = parseInt(t[5], 10);
                  o = o >= 0 && o <= 59 ? o : 0;
                  var s = parseInt(t[6], 10);
                  s = s >= 0 && s <= 59 ? s : 0;
                  var u = t[7] || "Z",
                    c = parseInt(t[8], 10);
                  c = c >= 0 && c <= 23 ? c : 0;
                  var l = parseInt(t[9], 10) || 0;
                  return (
                    (l = l >= 0 && l <= 59 ? l : 0),
                    "-" === u
                      ? ((a += c), (o += l))
                      : "+" === u && ((a -= c), (o -= l)),
                    new Date(Date.UTC(r, n, i, a, o, s))
                  );
                },
              },
            ]),
            e
          );
        })();
      t.PDFDateString = M;
    },
    function(e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function a(e, t) {
        return !t || ("object" !== i(t) && "function" != typeof t) ? o(e) : t;
      }
      function o(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function s(e) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && c(e, t);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function l(e, t, r, n, i, a, o) {
        try {
          var s = e[a](o),
            u = s.value;
        } catch (c) {
          return void r(c);
        }
        s.done ? t(u) : Promise.resolve(u).then(n, i);
      }
      function h(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, i) {
            function a(e) {
              l(s, n, i, a, o, "next", e);
            }
            function o(e) {
              l(s, n, i, a, o, "throw", e);
            }
            var s = e.apply(t, r);
            a(void 0);
          });
        };
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function p(e, t, r) {
        return t && d(e.prototype, t), r && d(e, r), e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.FontLoader = t.FontFaceObject = void 0);
      var v,
        g = n(r(180)),
        m = r(1),
        y = (function() {
          function e(t) {
            var r = t.docId,
              n = t.onUnsupportedFeature;
            f(this, e),
              this.constructor === e &&
                (0, m.unreachable)("Cannot initialize BaseFontLoader."),
              (this.docId = r),
              (this._onUnsupportedFeature = n),
              (this.nativeFontFaces = []),
              (this.styleElement = null);
          }
          return (
            p(e, [
              {
                key: "addNativeFontFace",
                value: function(e) {
                  this.nativeFontFaces.push(e), document.fonts.add(e);
                },
              },
              {
                key: "insertRule",
                value: function(e) {
                  var t = this.styleElement;
                  t ||
                    ((t = this.styleElement = document.createElement("style")),
                    (t.id = "PDFJS_FONT_STYLE_TAG_".concat(this.docId)),
                    document.documentElement
                      .getElementsByTagName("head")[0]
                      .appendChild(t));
                  var r = t.sheet;
                  r.insertRule(e, r.cssRules.length);
                },
              },
              {
                key: "clear",
                value: function() {
                  this.nativeFontFaces.forEach(function(e) {
                    document.fonts["delete"](e);
                  }),
                    (this.nativeFontFaces.length = 0),
                    this.styleElement &&
                      (this.styleElement.remove(), (this.styleElement = null));
                },
              },
              {
                key: "bind",
                value: (function() {
                  function e(e) {
                    return t.apply(this, arguments);
                  }
                  var t = h(
                    g["default"].mark(function r(e) {
                      var t,
                        n,
                        i = this;
                      return g["default"].wrap(
                        function(r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                if (!e.attached && !e.missingFile) {
                                  r.next = 2;
                                  break;
                                }
                                return r.abrupt("return", void 0);
                              case 2:
                                if (
                                  ((e.attached = !0),
                                  !this.isFontLoadingAPISupported)
                                ) {
                                  r.next = 19;
                                  break;
                                }
                                if (((t = e.createNativeFontFace()), !t)) {
                                  r.next = 18;
                                  break;
                                }
                                return (
                                  this.addNativeFontFace(t),
                                  (r.prev = 7),
                                  (r.next = 10),
                                  t.loaded
                                );
                              case 10:
                                r.next = 18;
                                break;
                              case 12:
                                throw ((r.prev = 12),
                                (r.t0 = r["catch"](7)),
                                this._onUnsupportedFeature({
                                  featureId: m.UNSUPPORTED_FEATURES.font,
                                }),
                                (0, m.warn)(
                                  "Failed to load font '"
                                    .concat(t.family, "': '")
                                    .concat(r.t0, "'.")
                                ),
                                (e.disableFontFace = !0),
                                r.t0);
                              case 18:
                                return r.abrupt("return", void 0);
                              case 19:
                                if (((n = e.createFontFaceRule()), !n)) {
                                  r.next = 25;
                                  break;
                                }
                                if (
                                  (this.insertRule(n),
                                  !this.isSyncFontLoadingSupported)
                                ) {
                                  r.next = 24;
                                  break;
                                }
                                return r.abrupt("return", void 0);
                              case 24:
                                return r.abrupt(
                                  "return",
                                  new Promise(function(t) {
                                    var r = i._queueLoadingCallback(t);
                                    i._prepareFontLoadEvent([n], [e], r);
                                  })
                                );
                              case 25:
                                return r.abrupt("return", void 0);
                              case 26:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        this,
                        [[7, 12]]
                      );
                    })
                  );
                  return e;
                })(),
              },
              {
                key: "_queueLoadingCallback",
                value: function(e) {
                  (0, m.unreachable)(
                    "Abstract method `_queueLoadingCallback`."
                  );
                },
              },
              {
                key: "_prepareFontLoadEvent",
                value: function(e, t, r) {
                  (0, m.unreachable)(
                    "Abstract method `_prepareFontLoadEvent`."
                  );
                },
              },
              {
                key: "isFontLoadingAPISupported",
                get: function() {
                  (0, m.unreachable)(
                    "Abstract method `isFontLoadingAPISupported`."
                  );
                },
              },
              {
                key: "isSyncFontLoadingSupported",
                get: function() {
                  (0, m.unreachable)(
                    "Abstract method `isSyncFontLoadingSupported`."
                  );
                },
              },
              {
                key: "_loadTestFont",
                get: function() {
                  (0, m.unreachable)("Abstract method `_loadTestFont`.");
                },
              },
            ]),
            e
          );
        })();
      (t.FontLoader = v),
        (t.FontLoader = v = (function(e) {
          function t(e) {
            var r;
            return (
              f(this, t),
              (r = a(this, s(t).call(this, e))),
              (r.loadingContext = { requests: [], nextRequestId: 0 }),
              (r.loadTestFontId = 0),
              r
            );
          }
          return (
            u(t, e),
            p(t, [
              {
                key: "_queueLoadingCallback",
                value: function(e) {
                  function t() {
                    for (
                      (0, m.assert)(
                        !n.done,
                        "completeRequest() cannot be called twice."
                      ),
                        n.done = !0;
                      r.requests.length > 0 && r.requests[0].done;

                    ) {
                      var e = r.requests.shift();
                      setTimeout(e.callback, 0);
                    }
                  }
                  var r = this.loadingContext,
                    n = {
                      id: "pdfjs-font-loading-".concat(r.nextRequestId++),
                      done: !1,
                      complete: t,
                      callback: e,
                    };
                  return r.requests.push(n), n;
                },
              },
              {
                key: "_prepareFontLoadEvent",
                value: function(e, t, r) {
                  function n(e, t) {
                    return (
                      (e.charCodeAt(t) << 24) |
                      (e.charCodeAt(t + 1) << 16) |
                      (e.charCodeAt(t + 2) << 8) |
                      (255 & e.charCodeAt(t + 3))
                    );
                  }
                  function i(e, t, r, n) {
                    var i = e.substring(0, t),
                      a = e.substring(t + r);
                    return i + n + a;
                  }
                  function a(e, t) {
                    if ((l++, l > 30))
                      return (
                        (0, m.warn)("Load test font never loaded."), void t()
                      );
                    (c.font = "30px " + e), c.fillText(".", 0, 20);
                    var r = c.getImageData(0, 0, 1, 1);
                    return r.data[3] > 0
                      ? void t()
                      : void setTimeout(a.bind(null, e, t));
                  }
                  var o,
                    s,
                    u = document.createElement("canvas");
                  (u.width = 1), (u.height = 1);
                  var c = u.getContext("2d"),
                    l = 0,
                    h = "lt".concat(Date.now()).concat(this.loadTestFontId++),
                    f = this._loadTestFont,
                    d = 976;
                  f = i(f, d, h.length, h);
                  var p = 16,
                    v = 1482184792,
                    g = n(f, p);
                  for (o = 0, s = h.length - 3; o < s; o += 4)
                    g = (g - v + n(h, o)) | 0;
                  o < h.length && (g = (g - v + n(h + "XXX", o)) | 0),
                    (f = i(f, p, 4, (0, m.string32)(g)));
                  var y = "url(data:font/opentype;base64,".concat(
                      btoa(f),
                      ");"
                    ),
                    b = '@font-face {font-family:"'
                      .concat(h, '";src:')
                      .concat(y, "}");
                  this.insertRule(b);
                  var _ = [];
                  for (o = 0, s = t.length; o < s; o++) _.push(t[o].loadedName);
                  _.push(h);
                  var A = document.createElement("div");
                  for (
                    A.setAttribute(
                      "style",
                      "visibility: hidden;width: 10px; height: 10px;position: absolute; top: 0px; left: 0px;"
                    ),
                      o = 0,
                      s = _.length;
                    o < s;
                    ++o
                  ) {
                    var S = document.createElement("span");
                    (S.textContent = "Hi"),
                      (S.style.fontFamily = _[o]),
                      A.appendChild(S);
                  }
                  document.body.appendChild(A),
                    a(h, function() {
                      document.body.removeChild(A), r.complete();
                    });
                },
              },
              {
                key: "isFontLoadingAPISupported",
                get: function() {
                  var e = "undefined" != typeof document && !!document.fonts;
                  if (e && "undefined" != typeof navigator) {
                    var t = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(
                      navigator.userAgent
                    );
                    t && t[1] < 63 && (e = !1);
                  }
                  return (0, m.shadow)(this, "isFontLoadingAPISupported", e);
                },
              },
              {
                key: "isSyncFontLoadingSupported",
                get: function() {
                  var e = !1;
                  if ("undefined" == typeof navigator) e = !0;
                  else {
                    var t = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(
                      navigator.userAgent
                    );
                    t && t[1] >= 14 && (e = !0);
                  }
                  return (0, m.shadow)(this, "isSyncFontLoadingSupported", e);
                },
              },
              {
                key: "_loadTestFont",
                get: function() {
                  var e = function() {
                    return atob(
                      "T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="
                    );
                  };
                  return (0, m.shadow)(this, "_loadTestFont", e());
                },
              },
            ]),
            t
          );
        })(y));
      var b = {
          get value() {
            return (0, m.shadow)(this, "value", (0, m.isEvalSupported)());
          },
        },
        _ = (function() {
          function e(t, r) {
            var n = r.isEvalSupported,
              i = void 0 === n || n,
              a = r.disableFontFace,
              o = void 0 !== a && a,
              s = r.ignoreErrors,
              u = void 0 !== s && s,
              c = r.onUnsupportedFeature,
              l = void 0 === c ? null : c,
              h = r.fontRegistry,
              d = void 0 === h ? null : h;
            f(this, e), (this.compiledGlyphs = Object.create(null));
            for (var p in t) this[p] = t[p];
            (this.isEvalSupported = i !== !1),
              (this.disableFontFace = o === !0),
              (this.ignoreErrors = u === !0),
              (this._onUnsupportedFeature = l),
              (this.fontRegistry = d);
          }
          return (
            p(e, [
              {
                key: "createNativeFontFace",
                value: function() {
                  if (!this.data || this.disableFontFace) return null;
                  var e = new FontFace(this.loadedName, this.data, {});
                  return (
                    this.fontRegistry && this.fontRegistry.registerFont(this), e
                  );
                },
              },
              {
                key: "createFontFaceRule",
                value: function() {
                  if (!this.data || this.disableFontFace) return null;
                  var e = (0, m.bytesToString)(new Uint8Array(this.data)),
                    t = "url(data:"
                      .concat(this.mimetype, ";base64,")
                      .concat(btoa(e), ");"),
                    r = '@font-face {font-family:"'
                      .concat(this.loadedName, '";src:')
                      .concat(t, "}");
                  return (
                    this.fontRegistry &&
                      this.fontRegistry.registerFont(this, t),
                    r
                  );
                },
              },
              {
                key: "getPathGenerator",
                value: function(e, t) {
                  if (void 0 !== this.compiledGlyphs[t])
                    return this.compiledGlyphs[t];
                  var r, n;
                  try {
                    r = e.get(this.loadedName + "_path_" + t);
                  } catch (i) {
                    if (!this.ignoreErrors) throw i;
                    return (
                      this._onUnsupportedFeature &&
                        this._onUnsupportedFeature({
                          featureId: m.UNSUPPORTED_FEATURES.font,
                        }),
                      (0, m.warn)(
                        'getPathGenerator - ignoring character: "'.concat(
                          i,
                          '".'
                        )
                      ),
                      (this.compiledGlyphs[t] = function(e, t) {})
                    );
                  }
                  if (this.isEvalSupported && b.value) {
                    for (var a, o = "", s = 0, u = r.length; s < u; s++)
                      (n = r[s]),
                        (a = void 0 !== n.args ? n.args.join(",") : ""),
                        (o += "c." + n.cmd + "(" + a + ");\n");
                    return (this.compiledGlyphs[t] = new Function(
                      "c",
                      "size",
                      o
                    ));
                  }
                  return (this.compiledGlyphs[t] = function(e, t) {
                    for (var i = 0, a = r.length; i < a; i++)
                      (n = r[i]),
                        "scale" === n.cmd && (n.args = [t, -t]),
                        e[n.cmd].apply(e, n.args);
                  });
                },
              },
            ]),
            e
          );
        })();
      t.FontFaceObject = _;
    },
    function(e, t, r) {
      "use strict";
      var n = Object.create(null),
        i = r(4),
        a = ("undefined" != typeof navigator && navigator.userAgent) || "",
        o = /Trident/.test(a),
        s = /CriOS/.test(a);
      !(function() {
        (o || s) && (n.disableCreateObjectURL = !0);
      })(),
        (function() {
          i() &&
            ((n.disableFontFace = !0), (n.nativeImageDecoderSupport = "none"));
        })(),
        (t.apiCompatibilityParams = Object.freeze(n));
    },
    function(e, t, r) {
      "use strict";
      function n(e) {
        e.mozCurrentTransform ||
          ((e._originalSave = e.save),
          (e._originalRestore = e.restore),
          (e._originalRotate = e.rotate),
          (e._originalScale = e.scale),
          (e._originalTranslate = e.translate),
          (e._originalTransform = e.transform),
          (e._originalSetTransform = e.setTransform),
          (e._transformMatrix = e._transformMatrix || [1, 0, 0, 1, 0, 0]),
          (e._transformStack = []),
          Object.defineProperty(e, "mozCurrentTransform", {
            get: function() {
              return this._transformMatrix;
            },
          }),
          Object.defineProperty(e, "mozCurrentTransformInverse", {
            get: function() {
              var e = this._transformMatrix,
                t = e[0],
                r = e[1],
                n = e[2],
                i = e[3],
                a = e[4],
                o = e[5],
                s = t * i - r * n,
                u = r * n - t * i;
              return [
                i / s,
                r / u,
                n / u,
                t / s,
                (i * a - n * o) / u,
                (r * a - t * o) / s,
              ];
            },
          }),
          (e.save = function() {
            var e = this._transformMatrix;
            this._transformStack.push(e),
              (this._transformMatrix = e.slice(0, 6)),
              this._originalSave();
          }),
          (e.restore = function() {
            var e = this._transformStack.pop();
            e && ((this._transformMatrix = e), this._originalRestore());
          }),
          (e.translate = function(e, t) {
            var r = this._transformMatrix;
            (r[4] = r[0] * e + r[2] * t + r[4]),
              (r[5] = r[1] * e + r[3] * t + r[5]),
              this._originalTranslate(e, t);
          }),
          (e.scale = function(e, t) {
            var r = this._transformMatrix;
            (r[0] = r[0] * e),
              (r[1] = r[1] * e),
              (r[2] = r[2] * t),
              (r[3] = r[3] * t),
              this._originalScale(e, t);
          }),
          (e.transform = function(t, r, n, i, a, o) {
            var s = this._transformMatrix;
            (this._transformMatrix = [
              s[0] * t + s[2] * r,
              s[1] * t + s[3] * r,
              s[0] * n + s[2] * i,
              s[1] * n + s[3] * i,
              s[0] * a + s[2] * o + s[4],
              s[1] * a + s[3] * o + s[5],
            ]),
              e._originalTransform(t, r, n, i, a, o);
          }),
          (e.setTransform = function(t, r, n, i, a, o) {
            (this._transformMatrix = [t, r, n, i, a, o]),
              e._originalSetTransform(t, r, n, i, a, o);
          }),
          (e.rotate = function(e) {
            var t = Math.cos(e),
              r = Math.sin(e),
              n = this._transformMatrix;
            (this._transformMatrix = [
              n[0] * t + n[2] * r,
              n[1] * t + n[3] * r,
              n[0] * -r + n[2] * t,
              n[1] * -r + n[3] * t,
              n[4],
              n[5],
            ]),
              this._originalRotate(e);
          }));
      }
      function i(e) {
        var t,
          r,
          n,
          i,
          a = 1e3,
          o = e.width,
          s = e.height,
          u = o + 1,
          c = new Uint8Array(u * (s + 1)),
          l = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]),
          h = (o + 7) & -8,
          f = e.data,
          d = new Uint8Array(h * s),
          p = 0;
        for (t = 0, i = f.length; t < i; t++)
          for (var v = 128, g = f[t]; v > 0; )
            (d[p++] = g & v ? 0 : 255), (v >>= 1);
        var m = 0;
        for (p = 0, 0 !== d[p] && ((c[0] = 1), ++m), r = 1; r < o; r++)
          d[p] !== d[p + 1] && ((c[r] = d[p] ? 2 : 1), ++m), p++;
        for (0 !== d[p] && ((c[r] = 2), ++m), t = 1; t < s; t++) {
          (p = t * h),
            (n = t * u),
            d[p - h] !== d[p] && ((c[n] = d[p] ? 1 : 8), ++m);
          var y = (d[p] ? 4 : 0) + (d[p - h] ? 8 : 0);
          for (r = 1; r < o; r++)
            (y = (y >> 2) + (d[p + 1] ? 4 : 0) + (d[p - h + 1] ? 8 : 0)),
              l[y] && ((c[n + r] = l[y]), ++m),
              p++;
          if ((d[p - h] !== d[p] && ((c[n + r] = d[p] ? 2 : 4), ++m), m > a))
            return null;
        }
        for (
          p = h * (s - 1), n = t * u, 0 !== d[p] && ((c[n] = 8), ++m), r = 1;
          r < o;
          r++
        )
          d[p] !== d[p + 1] && ((c[n + r] = d[p] ? 4 : 8), ++m), p++;
        if ((0 !== d[p] && ((c[n + r] = 4), ++m), m > a)) return null;
        var b = new Int32Array([0, u, -1, 0, -u, 0, 0, 0, 1]),
          _ = [];
        for (t = 0; m && t <= s; t++) {
          for (var A = t * u, S = A + o; A < S && !c[A]; ) A++;
          if (A !== S) {
            var w,
              k = [A % u, t],
              x = c[A],
              C = A;
            do {
              var P = b[x];
              do A += P;
              while (!c[A]);
              (w = c[A]),
                5 !== w && 10 !== w
                  ? ((x = w), (c[A] = 0))
                  : ((x = w & ((51 * x) >> 4)), (c[A] &= (x >> 2) | (x << 2))),
                k.push(A % u),
                k.push((A / u) | 0),
                c[A] || --m;
            } while (C !== A);
            _.push(k), --t;
          }
        }
        var R = function(e) {
          e.save(), e.scale(1 / o, -1 / s), e.translate(0, -s), e.beginPath();
          for (var t = 0, r = _.length; t < r; t++) {
            var n = _[t];
            e.moveTo(n[0], n[1]);
            for (var i = 2, a = n.length; i < a; i += 2)
              e.lineTo(n[i], n[i + 1]);
          }
          e.fill(), e.beginPath(), e.restore();
        };
        return R;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CanvasGraphics = void 0);
      var a = r(1),
        o = r(187),
        s = 16,
        u = 100,
        c = 4096,
        l = 0.65,
        h = !0,
        f = 1e3,
        d = 16,
        p = {
          get value() {
            return (0, a.shadow)(p, "value", (0, a.isLittleEndian)());
          },
        },
        v = (function() {
          function e(e) {
            (this.canvasFactory = e), (this.cache = Object.create(null));
          }
          return (
            (e.prototype = {
              getCanvas: function(e, t, r, i) {
                var a;
                return (
                  void 0 !== this.cache[e]
                    ? ((a = this.cache[e]),
                      this.canvasFactory.reset(a, t, r),
                      a.context.setTransform(1, 0, 0, 1, 0, 0))
                    : ((a = this.canvasFactory.create(t, r)),
                      (this.cache[e] = a)),
                  i && n(a.context),
                  a
                );
              },
              clear: function() {
                for (var e in this.cache) {
                  var t = this.cache[e];
                  this.canvasFactory.destroy(t), delete this.cache[e];
                }
              },
            }),
            e
          );
        })(),
        g = (function() {
          function e() {
            (this.alphaIsShape = !1),
              (this.fontSize = 0),
              (this.fontSizeScale = 1),
              (this.textMatrix = a.IDENTITY_MATRIX),
              (this.textMatrixScale = 1),
              (this.fontMatrix = a.FONT_IDENTITY_MATRIX),
              (this.leading = 0),
              (this.x = 0),
              (this.y = 0),
              (this.lineX = 0),
              (this.lineY = 0),
              (this.charSpacing = 0),
              (this.wordSpacing = 0),
              (this.textHScale = 1),
              (this.textRenderingMode = a.TextRenderingMode.FILL),
              (this.textRise = 0),
              (this.fillColor = "#000000"),
              (this.strokeColor = "#000000"),
              (this.patternFill = !1),
              (this.fillAlpha = 1),
              (this.strokeAlpha = 1),
              (this.lineWidth = 1),
              (this.activeSMask = null),
              (this.resumeSMaskCtx = null);
          }
          return (
            (e.prototype = {
              clone: function() {
                return Object.create(this);
              },
              setCurrentPoint: function(e, t) {
                (this.x = e), (this.y = t);
              },
            }),
            e
          );
        })(),
        m = (function() {
          function e(e, t, r, i, a, o) {
            (this.ctx = e),
              (this.current = new g()),
              (this.stateStack = []),
              (this.pendingClip = null),
              (this.pendingEOFill = !1),
              (this.res = null),
              (this.xobjs = null),
              (this.commonObjs = t),
              (this.objs = r),
              (this.canvasFactory = i),
              (this.webGLContext = a),
              (this.imageLayer = o),
              (this.groupStack = []),
              (this.processingType3 = null),
              (this.baseTransform = null),
              (this.baseTransformStack = []),
              (this.groupLevel = 0),
              (this.smaskStack = []),
              (this.smaskCounter = 0),
              (this.tempSMask = null),
              (this.cachedCanvases = new v(this.canvasFactory)),
              e && n(e),
              (this._cachedGetSinglePixelWidth = null);
          }
          function t(e, t) {
            if ("undefined" != typeof ImageData && t instanceof ImageData)
              return void e.putImageData(t, 0, 0);
            var r,
              n,
              i,
              o,
              s,
              u = t.height,
              c = t.width,
              l = u % d,
              h = (u - l) / d,
              f = 0 === l ? h : h + 1,
              v = e.createImageData(c, d),
              g = 0,
              m = t.data,
              y = v.data;
            if (t.kind === a.ImageKind.GRAYSCALE_1BPP) {
              var b = m.byteLength,
                _ = new Uint32Array(y.buffer, 0, y.byteLength >> 2),
                A = _.length,
                S = (c + 7) >> 3,
                w = 4294967295,
                k = p.value ? 4278190080 : 255;
              for (n = 0; n < f; n++) {
                for (o = n < h ? d : l, r = 0, i = 0; i < o; i++) {
                  for (
                    var x = b - g,
                      C = 0,
                      P = x > S ? c : 8 * x - 7,
                      R = P & -8,
                      T = 0,
                      E = 0;
                    C < R;
                    C += 8
                  )
                    (E = m[g++]),
                      (_[r++] = 128 & E ? w : k),
                      (_[r++] = 64 & E ? w : k),
                      (_[r++] = 32 & E ? w : k),
                      (_[r++] = 16 & E ? w : k),
                      (_[r++] = 8 & E ? w : k),
                      (_[r++] = 4 & E ? w : k),
                      (_[r++] = 2 & E ? w : k),
                      (_[r++] = 1 & E ? w : k);
                  for (; C < P; C++)
                    0 === T && ((E = m[g++]), (T = 128)),
                      (_[r++] = E & T ? w : k),
                      (T >>= 1);
                }
                for (; r < A; ) _[r++] = 0;
                e.putImageData(v, 0, n * d);
              }
            } else if (t.kind === a.ImageKind.RGBA_32BPP) {
              for (i = 0, s = c * d * 4, n = 0; n < h; n++)
                y.set(m.subarray(g, g + s)),
                  (g += s),
                  e.putImageData(v, 0, i),
                  (i += d);
              n < f &&
                ((s = c * l * 4),
                y.set(m.subarray(g, g + s)),
                e.putImageData(v, 0, i));
            } else {
              if (t.kind !== a.ImageKind.RGB_24BPP)
                throw new Error("bad image kind: ".concat(t.kind));
              for (o = d, s = c * o, n = 0; n < f; n++) {
                for (n >= h && ((o = l), (s = c * o)), r = 0, i = s; i--; )
                  (y[r++] = m[g++]),
                    (y[r++] = m[g++]),
                    (y[r++] = m[g++]),
                    (y[r++] = 255);
                e.putImageData(v, 0, n * d);
              }
            }
          }
          function r(e, t) {
            for (
              var r = t.height,
                n = t.width,
                i = r % d,
                a = (r - i) / d,
                o = 0 === i ? a : a + 1,
                s = e.createImageData(n, d),
                u = 0,
                c = t.data,
                l = s.data,
                h = 0;
              h < o;
              h++
            ) {
              for (var f = h < a ? d : i, p = 3, v = 0; v < f; v++)
                for (var g = 0, m = 0; m < n; m++) {
                  if (!g) {
                    var y = c[u++];
                    g = 128;
                  }
                  (l[p] = y & g ? 0 : 255), (p += 4), (g >>= 1);
                }
              e.putImageData(s, 0, h * d);
            }
          }
          function m(e, t) {
            for (
              var r = [
                  "strokeStyle",
                  "fillStyle",
                  "fillRule",
                  "globalAlpha",
                  "lineWidth",
                  "lineCap",
                  "lineJoin",
                  "miterLimit",
                  "globalCompositeOperation",
                  "font",
                ],
                n = 0,
                i = r.length;
              n < i;
              n++
            ) {
              var a = r[n];
              void 0 !== e[a] && (t[a] = e[a]);
            }
            void 0 !== e.setLineDash &&
              (t.setLineDash(e.getLineDash()),
              (t.lineDashOffset = e.lineDashOffset));
          }
          function y(e) {
            (e.strokeStyle = "#000000"),
              (e.fillStyle = "#000000"),
              (e.fillRule = "nonzero"),
              (e.globalAlpha = 1),
              (e.lineWidth = 1),
              (e.lineCap = "butt"),
              (e.lineJoin = "miter"),
              (e.miterLimit = 10),
              (e.globalCompositeOperation = "source-over"),
              (e.font = "10px sans-serif"),
              void 0 !== e.setLineDash &&
                (e.setLineDash([]), (e.lineDashOffset = 0));
          }
          function b(e, t, r, n) {
            for (var i = e.length, a = 3; a < i; a += 4) {
              var o = e[a];
              if (0 === o) (e[a - 3] = t), (e[a - 2] = r), (e[a - 1] = n);
              else if (o < 255) {
                var s = 255 - o;
                (e[a - 3] = (e[a - 3] * o + t * s) >> 8),
                  (e[a - 2] = (e[a - 2] * o + r * s) >> 8),
                  (e[a - 1] = (e[a - 1] * o + n * s) >> 8);
              }
            }
          }
          function _(e, t, r) {
            for (var n = e.length, i = 1 / 255, a = 3; a < n; a += 4) {
              var o = r ? r[e[a]] : e[a];
              t[a] = (t[a] * o * i) | 0;
            }
          }
          function A(e, t, r) {
            for (var n = e.length, i = 3; i < n; i += 4) {
              var a = 77 * e[i - 3] + 152 * e[i - 2] + 28 * e[i - 1];
              t[i] = r ? (t[i] * r[a >> 8]) >> 8 : (t[i] * a) >> 16;
            }
          }
          function S(e, t, r, n, i, a, o) {
            var s,
              u = !!a,
              c = u ? a[0] : 0,
              l = u ? a[1] : 0,
              h = u ? a[2] : 0;
            s = "Luminosity" === i ? A : _;
            for (
              var f = 1048576, d = Math.min(n, Math.ceil(f / r)), p = 0;
              p < n;
              p += d
            ) {
              var v = Math.min(d, n - p),
                g = e.getImageData(0, p, r, v),
                m = t.getImageData(0, p, r, v);
              u && b(g.data, c, l, h),
                s(g.data, m.data, o),
                e.putImageData(m, 0, p);
            }
          }
          function w(e, t, r, n) {
            var i = t.canvas,
              a = t.context;
            e.setTransform(t.scaleX, 0, 0, t.scaleY, t.offsetX, t.offsetY);
            var o = t.backdrop || null;
            if (!t.transferMap && n.isEnabled) {
              var s = n.composeSMask({
                layer: r.canvas,
                mask: i,
                properties: { subtype: t.subtype, backdrop: o },
              });
              return (
                e.setTransform(1, 0, 0, 1, 0, 0),
                void e.drawImage(s, t.offsetX, t.offsetY)
              );
            }
            S(a, r, i.width, i.height, t.subtype, o, t.transferMap),
              e.drawImage(i, 0, 0);
          }
          var k = 15,
            x = 10,
            C = ["butt", "round", "square"],
            P = ["miter", "round", "bevel"],
            R = {},
            T = {};
          e.prototype = {
            beginDrawing: function(e) {
              var t = e.transform,
                r = e.viewport,
                n = e.transparency,
                i = void 0 !== n && n,
                a = e.background,
                o = void 0 === a ? null : a,
                s = this.ctx.canvas.width,
                u = this.ctx.canvas.height;
              if (
                (this.ctx.save(),
                (this.ctx.fillStyle = o || "rgb(255, 255, 255)"),
                this.ctx.fillRect(0, 0, s, u),
                this.ctx.restore(),
                i)
              ) {
                var c = this.cachedCanvases.getCanvas("transparent", s, u, !0);
                (this.compositeCtx = this.ctx),
                  (this.transparentCanvas = c.canvas),
                  (this.ctx = c.context),
                  this.ctx.save(),
                  this.ctx.transform.apply(
                    this.ctx,
                    this.compositeCtx.mozCurrentTransform
                  );
              }
              this.ctx.save(),
                y(this.ctx),
                t && this.ctx.transform.apply(this.ctx, t),
                this.ctx.transform.apply(this.ctx, r.transform),
                (this.baseTransform = this.ctx.mozCurrentTransform.slice()),
                this.imageLayer && this.imageLayer.beginLayout();
            },
            executeOperatorList: function(e, t, r, n) {
              var i = e.argsArray,
                o = e.fnArray,
                s = t || 0,
                u = i.length;
              if (u === s) return s;
              for (
                var c,
                  l = u - s > x && "function" == typeof r,
                  h = l ? Date.now() + k : 0,
                  f = 0,
                  d = this.commonObjs,
                  p = this.objs;
                ;

              ) {
                if (void 0 !== n && s === n.nextBreakPoint)
                  return n.breakIt(s, r), s;
                if (((c = o[s]), c !== a.OPS.dependency))
                  this[c].apply(this, i[s]);
                else {
                  var v = !0,
                    g = !1,
                    m = void 0;
                  try {
                    for (
                      var y, b = i[s][Symbol.iterator]();
                      !(v = (y = b.next()).done);
                      v = !0
                    ) {
                      var _ = y.value,
                        A = _.startsWith("g_") ? d : p;
                      if (!A.has(_)) return A.get(_, r), s;
                    }
                  } catch (S) {
                    (g = !0), (m = S);
                  } finally {
                    try {
                      v || null == b["return"] || b["return"]();
                    } finally {
                      if (g) throw m;
                    }
                  }
                }
                if ((s++, s === u)) return s;
                if (l && ++f > x) {
                  if (Date.now() > h) return r(), s;
                  f = 0;
                }
              }
            },
            endDrawing: function() {
              null !== this.current.activeSMask && this.endSMaskGroup(),
                this.ctx.restore(),
                this.transparentCanvas &&
                  ((this.ctx = this.compositeCtx),
                  this.ctx.save(),
                  this.ctx.setTransform(1, 0, 0, 1, 0, 0),
                  this.ctx.drawImage(this.transparentCanvas, 0, 0),
                  this.ctx.restore(),
                  (this.transparentCanvas = null)),
                this.cachedCanvases.clear(),
                this.webGLContext.clear(),
                this.imageLayer && this.imageLayer.endLayout();
            },
            setLineWidth: function(e) {
              (this.current.lineWidth = e), (this.ctx.lineWidth = e);
            },
            setLineCap: function(e) {
              this.ctx.lineCap = C[e];
            },
            setLineJoin: function(e) {
              this.ctx.lineJoin = P[e];
            },
            setMiterLimit: function(e) {
              this.ctx.miterLimit = e;
            },
            setDash: function(e, t) {
              var r = this.ctx;
              void 0 !== r.setLineDash &&
                (r.setLineDash(e), (r.lineDashOffset = t));
            },
            setRenderingIntent: function(e) {},
            setFlatness: function(e) {},
            setGState: function(e) {
              for (var t = 0, r = e.length; t < r; t++) {
                var n = e[t],
                  i = n[0],
                  a = n[1];
                switch (i) {
                  case "LW":
                    this.setLineWidth(a);
                    break;
                  case "LC":
                    this.setLineCap(a);
                    break;
                  case "LJ":
                    this.setLineJoin(a);
                    break;
                  case "ML":
                    this.setMiterLimit(a);
                    break;
                  case "D":
                    this.setDash(a[0], a[1]);
                    break;
                  case "RI":
                    this.setRenderingIntent(a);
                    break;
                  case "FL":
                    this.setFlatness(a);
                    break;
                  case "Font":
                    this.setFont(a[0], a[1]);
                    break;
                  case "CA":
                    this.current.strokeAlpha = n[1];
                    break;
                  case "ca":
                    (this.current.fillAlpha = n[1]),
                      (this.ctx.globalAlpha = n[1]);
                    break;
                  case "BM":
                    this.ctx.globalCompositeOperation = a;
                    break;
                  case "SMask":
                    this.current.activeSMask &&
                      (this.stateStack.length > 0 &&
                      this.stateStack[this.stateStack.length - 1]
                        .activeSMask === this.current.activeSMask
                        ? this.suspendSMaskGroup()
                        : this.endSMaskGroup()),
                      (this.current.activeSMask = a ? this.tempSMask : null),
                      this.current.activeSMask && this.beginSMaskGroup(),
                      (this.tempSMask = null);
                }
              }
            },
            beginSMaskGroup: function() {
              var e = this.current.activeSMask,
                t = e.canvas.width,
                r = e.canvas.height,
                n = "smaskGroupAt" + this.groupLevel,
                i = this.cachedCanvases.getCanvas(n, t, r, !0),
                a = this.ctx,
                o = a.mozCurrentTransform;
              this.ctx.save();
              var s = i.context;
              s.scale(1 / e.scaleX, 1 / e.scaleY),
                s.translate(-e.offsetX, -e.offsetY),
                s.transform.apply(s, o),
                (e.startTransformInverse = s.mozCurrentTransformInverse),
                m(a, s),
                (this.ctx = s),
                this.setGState([
                  ["BM", "source-over"],
                  ["ca", 1],
                  ["CA", 1],
                ]),
                this.groupStack.push(a),
                this.groupLevel++;
            },
            suspendSMaskGroup: function() {
              var e = this.ctx;
              this.groupLevel--,
                (this.ctx = this.groupStack.pop()),
                w(this.ctx, this.current.activeSMask, e, this.webGLContext),
                this.ctx.restore(),
                this.ctx.save(),
                m(e, this.ctx),
                (this.current.resumeSMaskCtx = e);
              var t = a.Util.transform(
                this.current.activeSMask.startTransformInverse,
                e.mozCurrentTransform
              );
              this.ctx.transform.apply(this.ctx, t),
                e.save(),
                e.setTransform(1, 0, 0, 1, 0, 0),
                e.clearRect(0, 0, e.canvas.width, e.canvas.height),
                e.restore();
            },
            resumeSMaskGroup: function() {
              var e = this.current.resumeSMaskCtx,
                t = this.ctx;
              (this.ctx = e), this.groupStack.push(t), this.groupLevel++;
            },
            endSMaskGroup: function() {
              var e = this.ctx;
              this.groupLevel--,
                (this.ctx = this.groupStack.pop()),
                w(this.ctx, this.current.activeSMask, e, this.webGLContext),
                this.ctx.restore(),
                m(e, this.ctx);
              var t = a.Util.transform(
                this.current.activeSMask.startTransformInverse,
                e.mozCurrentTransform
              );
              this.ctx.transform.apply(this.ctx, t);
            },
            save: function() {
              this.ctx.save();
              var e = this.current;
              this.stateStack.push(e),
                (this.current = e.clone()),
                (this.current.resumeSMaskCtx = null);
            },
            restore: function() {
              this.current.resumeSMaskCtx && this.resumeSMaskGroup(),
                null === this.current.activeSMask ||
                  (0 !== this.stateStack.length &&
                    this.stateStack[this.stateStack.length - 1].activeSMask ===
                      this.current.activeSMask) ||
                  this.endSMaskGroup(),
                0 !== this.stateStack.length &&
                  ((this.current = this.stateStack.pop()),
                  this.ctx.restore(),
                  (this.pendingClip = null),
                  (this._cachedGetSinglePixelWidth = null));
            },
            transform: function(e, t, r, n, i, a) {
              this.ctx.transform(e, t, r, n, i, a),
                (this._cachedGetSinglePixelWidth = null);
            },
            constructPath: function(e, t) {
              for (
                var r = this.ctx,
                  n = this.current,
                  i = n.x,
                  o = n.y,
                  s = 0,
                  u = 0,
                  c = e.length;
                s < c;
                s++
              )
                switch (0 | e[s]) {
                  case a.OPS.rectangle:
                    (i = t[u++]), (o = t[u++]);
                    var l = t[u++],
                      h = t[u++];
                    0 === l && (l = this.getSinglePixelWidth()),
                      0 === h && (h = this.getSinglePixelWidth());
                    var f = i + l,
                      d = o + h;
                    this.ctx.moveTo(i, o),
                      this.ctx.lineTo(f, o),
                      this.ctx.lineTo(f, d),
                      this.ctx.lineTo(i, d),
                      this.ctx.lineTo(i, o),
                      this.ctx.closePath();
                    break;
                  case a.OPS.moveTo:
                    (i = t[u++]), (o = t[u++]), r.moveTo(i, o);
                    break;
                  case a.OPS.lineTo:
                    (i = t[u++]), (o = t[u++]), r.lineTo(i, o);
                    break;
                  case a.OPS.curveTo:
                    (i = t[u + 4]),
                      (o = t[u + 5]),
                      r.bezierCurveTo(t[u], t[u + 1], t[u + 2], t[u + 3], i, o),
                      (u += 6);
                    break;
                  case a.OPS.curveTo2:
                    r.bezierCurveTo(i, o, t[u], t[u + 1], t[u + 2], t[u + 3]),
                      (i = t[u + 2]),
                      (o = t[u + 3]),
                      (u += 4);
                    break;
                  case a.OPS.curveTo3:
                    (i = t[u + 2]),
                      (o = t[u + 3]),
                      r.bezierCurveTo(t[u], t[u + 1], i, o, i, o),
                      (u += 4);
                    break;
                  case a.OPS.closePath:
                    r.closePath();
                }
              n.setCurrentPoint(i, o);
            },
            closePath: function() {
              this.ctx.closePath();
            },
            stroke: function(e) {
              e = "undefined" == typeof e || e;
              var t = this.ctx,
                r = this.current.strokeColor;
              if (
                ((t.globalAlpha = this.current.strokeAlpha),
                r && r.hasOwnProperty("type") && "Pattern" === r.type)
              ) {
                t.save();
                var n = t.mozCurrentTransform,
                  i = a.Util.singularValueDecompose2dScale(n)[0];
                (t.strokeStyle = r.getPattern(t, this)),
                  (t.lineWidth = Math.max(
                    this.getSinglePixelWidth() * l,
                    this.current.lineWidth * i
                  )),
                  t.stroke(),
                  t.restore();
              } else
                (t.lineWidth = Math.max(
                  this.getSinglePixelWidth() * l,
                  this.current.lineWidth
                )),
                  t.stroke();
              e && this.consumePath(), (t.globalAlpha = this.current.fillAlpha);
            },
            closeStroke: function() {
              this.closePath(), this.stroke();
            },
            fill: function(e) {
              e = "undefined" == typeof e || e;
              var t = this.ctx,
                r = this.current.fillColor,
                n = this.current.patternFill,
                i = !1;
              n &&
                (t.save(),
                this.baseTransform &&
                  t.setTransform.apply(t, this.baseTransform),
                (t.fillStyle = r.getPattern(t, this)),
                (i = !0)),
                this.pendingEOFill
                  ? (t.fill("evenodd"), (this.pendingEOFill = !1))
                  : t.fill(),
                i && t.restore(),
                e && this.consumePath();
            },
            eoFill: function() {
              (this.pendingEOFill = !0), this.fill();
            },
            fillStroke: function() {
              this.fill(!1), this.stroke(!1), this.consumePath();
            },
            eoFillStroke: function() {
              (this.pendingEOFill = !0), this.fillStroke();
            },
            closeFillStroke: function() {
              this.closePath(), this.fillStroke();
            },
            closeEOFillStroke: function() {
              (this.pendingEOFill = !0), this.closePath(), this.fillStroke();
            },
            endPath: function() {
              this.consumePath();
            },
            clip: function() {
              this.pendingClip = R;
            },
            eoClip: function() {
              this.pendingClip = T;
            },
            beginText: function() {
              (this.current.textMatrix = a.IDENTITY_MATRIX),
                (this.current.textMatrixScale = 1),
                (this.current.x = this.current.lineX = 0),
                (this.current.y = this.current.lineY = 0);
            },
            endText: function() {
              var e = this.pendingTextPaths,
                t = this.ctx;
              if (void 0 === e) return void t.beginPath();
              t.save(), t.beginPath();
              for (var r = 0; r < e.length; r++) {
                var n = e[r];
                t.setTransform.apply(t, n.transform),
                  t.translate(n.x, n.y),
                  n.addToPath(t, n.fontSize);
              }
              t.restore(),
                t.clip(),
                t.beginPath(),
                delete this.pendingTextPaths;
            },
            setCharSpacing: function(e) {
              this.current.charSpacing = e;
            },
            setWordSpacing: function(e) {
              this.current.wordSpacing = e;
            },
            setHScale: function(e) {
              this.current.textHScale = e / 100;
            },
            setLeading: function(e) {
              this.current.leading = -e;
            },
            setFont: function(e, t) {
              var r = this.commonObjs.get(e),
                n = this.current;
              if (!r) throw new Error("Can't find font for ".concat(e));
              if (
                ((n.fontMatrix = r.fontMatrix
                  ? r.fontMatrix
                  : a.FONT_IDENTITY_MATRIX),
                (0 !== n.fontMatrix[0] && 0 !== n.fontMatrix[3]) ||
                  (0, a.warn)("Invalid font matrix for font " + e),
                t < 0
                  ? ((t = -t), (n.fontDirection = -1))
                  : (n.fontDirection = 1),
                (this.current.font = r),
                (this.current.fontSize = t),
                !r.isType3Font)
              ) {
                var i = r.loadedName || "sans-serif",
                  o = r.black ? "900" : r.bold ? "bold" : "normal",
                  c = r.italic ? "italic" : "normal",
                  l = '"'.concat(i, '", ').concat(r.fallbackName),
                  h = t < s ? s : t > u ? u : t;
                (this.current.fontSizeScale = t / h),
                  (this.ctx.font = ""
                    .concat(c, " ")
                    .concat(o, " ")
                    .concat(h, "px ")
                    .concat(l));
              }
            },
            setTextRenderingMode: function(e) {
              this.current.textRenderingMode = e;
            },
            setTextRise: function(e) {
              this.current.textRise = e;
            },
            moveText: function(e, t) {
              (this.current.x = this.current.lineX += e),
                (this.current.y = this.current.lineY += t);
            },
            setLeadingMoveText: function(e, t) {
              this.setLeading(-t), this.moveText(e, t);
            },
            setTextMatrix: function(e, t, r, n, i, a) {
              (this.current.textMatrix = [e, t, r, n, i, a]),
                (this.current.textMatrixScale = Math.sqrt(e * e + t * t)),
                (this.current.x = this.current.lineX = 0),
                (this.current.y = this.current.lineY = 0);
            },
            nextLine: function() {
              this.moveText(0, this.current.leading);
            },
            paintChar: function(e, t, r, n) {
              var i,
                o = this.ctx,
                s = this.current,
                u = s.font,
                c = s.textRenderingMode,
                l = s.fontSize / s.fontSizeScale,
                h = c & a.TextRenderingMode.FILL_STROKE_MASK,
                f = !!(c & a.TextRenderingMode.ADD_TO_PATH_FLAG),
                d = s.patternFill && u.data;
              if (
                ((u.disableFontFace || f || d) &&
                  (i = u.getPathGenerator(this.commonObjs, e)),
                u.disableFontFace || d
                  ? (o.save(),
                    o.translate(t, r),
                    o.beginPath(),
                    i(o, l),
                    n && o.setTransform.apply(o, n),
                    (h !== a.TextRenderingMode.FILL &&
                      h !== a.TextRenderingMode.FILL_STROKE) ||
                      o.fill(),
                    (h !== a.TextRenderingMode.STROKE &&
                      h !== a.TextRenderingMode.FILL_STROKE) ||
                      o.stroke(),
                    o.restore())
                  : ((h !== a.TextRenderingMode.FILL &&
                      h !== a.TextRenderingMode.FILL_STROKE) ||
                      o.fillText(e, t, r),
                    (h !== a.TextRenderingMode.STROKE &&
                      h !== a.TextRenderingMode.FILL_STROKE) ||
                      o.strokeText(e, t, r)),
                f)
              ) {
                var p = this.pendingTextPaths || (this.pendingTextPaths = []);
                p.push({
                  transform: o.mozCurrentTransform,
                  x: t,
                  y: r,
                  fontSize: l,
                  addToPath: i,
                });
              }
            },
            get isFontSubpixelAAEnabled() {
              var e = this.cachedCanvases.getCanvas(
                  "isFontSubpixelAAEnabled",
                  10,
                  10
                ),
                t = e.context;
              t.scale(1.5, 1), t.fillText("I", 0, 10);
              for (
                var r = t.getImageData(0, 0, 10, 10).data, n = !1, i = 3;
                i < r.length;
                i += 4
              )
                if (r[i] > 0 && r[i] < 255) {
                  n = !0;
                  break;
                }
              return (0, a.shadow)(this, "isFontSubpixelAAEnabled", n);
            },
            showText: function(e) {
              var t = this.current,
                r = t.font;
              if (r.isType3Font) return this.showType3Text(e);
              var n = t.fontSize;
              if (0 !== n) {
                var i = this.ctx,
                  o = t.fontSizeScale,
                  s = t.charSpacing,
                  u = t.wordSpacing,
                  c = t.fontDirection,
                  h = t.textHScale * c,
                  f = e.length,
                  d = r.vertical,
                  p = d ? 1 : -1,
                  v = r.defaultVMetrics,
                  g = n * t.fontMatrix[0],
                  m =
                    t.textRenderingMode === a.TextRenderingMode.FILL &&
                    !r.disableFontFace &&
                    !t.patternFill;
                i.save();
                var y;
                if (t.patternFill) {
                  i.save();
                  var b = t.fillColor.getPattern(i, this);
                  (y = i.mozCurrentTransform), i.restore(), (i.fillStyle = b);
                }
                i.transform.apply(i, t.textMatrix),
                  i.translate(t.x, t.y + t.textRise),
                  c > 0 ? i.scale(h, -1) : i.scale(h, 1);
                var _ = t.lineWidth,
                  A = t.textMatrixScale;
                if (0 === A || 0 === _) {
                  var S =
                    t.textRenderingMode & a.TextRenderingMode.FILL_STROKE_MASK;
                  (S !== a.TextRenderingMode.STROKE &&
                    S !== a.TextRenderingMode.FILL_STROKE) ||
                    ((this._cachedGetSinglePixelWidth = null),
                    (_ = this.getSinglePixelWidth() * l));
                } else _ /= A;
                1 !== o && (i.scale(o, o), (_ /= o)), (i.lineWidth = _);
                var w,
                  k = 0;
                for (w = 0; w < f; ++w) {
                  var x = e[w];
                  if ((0, a.isNum)(x)) k += (p * x * n) / 1e3;
                  else {
                    var C,
                      P,
                      R,
                      T,
                      E = !1,
                      O = (x.isSpace ? u : 0) + s,
                      L = x.fontChar,
                      F = x.accent,
                      I = x.width;
                    if (d) {
                      var j, M, N;
                      (j = x.vmetric || v),
                        (M = x.vmetric ? j[1] : 0.5 * I),
                        (M = -M * g),
                        (N = j[2] * g),
                        (I = j ? -j[0] : I),
                        (C = M / o),
                        (P = (k + N) / o);
                    } else (C = k / o), (P = 0);
                    if (r.remeasure && I > 0) {
                      var D = ((1e3 * i.measureText(L).width) / n) * o;
                      if (I < D && this.isFontSubpixelAAEnabled) {
                        var q = I / D;
                        (E = !0), i.save(), i.scale(q, 1), (C /= q);
                      } else I !== D && (C += (((I - D) / 2e3) * n) / o);
                    }
                    (x.isInFont || r.missingFile) &&
                      (m && !F
                        ? i.fillText(L, C, P)
                        : (this.paintChar(L, C, P, y),
                          F &&
                            ((R = C + F.offset.x / o),
                            (T = P - F.offset.y / o),
                            this.paintChar(F.fontChar, R, T, y))));
                    var U = I * g + O * c;
                    (k += U), E && i.restore();
                  }
                }
                d ? (t.y -= k * h) : (t.x += k * h), i.restore();
              }
            },
            showType3Text: function(e) {
              var t,
                r,
                n,
                i,
                o = this.ctx,
                s = this.current,
                u = s.font,
                c = s.fontSize,
                l = s.fontDirection,
                h = u.vertical ? 1 : -1,
                f = s.charSpacing,
                d = s.wordSpacing,
                p = s.textHScale * l,
                v = s.fontMatrix || a.FONT_IDENTITY_MATRIX,
                g = e.length,
                m = s.textRenderingMode === a.TextRenderingMode.INVISIBLE;
              if (!m && 0 !== c) {
                for (
                  this._cachedGetSinglePixelWidth = null,
                    o.save(),
                    o.transform.apply(o, s.textMatrix),
                    o.translate(s.x, s.y),
                    o.scale(p, l),
                    t = 0;
                  t < g;
                  ++t
                )
                  if (((r = e[t]), (0, a.isNum)(r)))
                    (i = (h * r * c) / 1e3),
                      this.ctx.translate(i, 0),
                      (s.x += i * p);
                  else {
                    var y = (r.isSpace ? d : 0) + f,
                      b = u.charProcOperatorList[r.operatorListId];
                    if (b) {
                      (this.processingType3 = r),
                        this.save(),
                        o.scale(c, c),
                        o.transform.apply(o, v),
                        this.executeOperatorList(b),
                        this.restore();
                      var _ = a.Util.applyTransform([r.width, 0], v);
                      (n = _[0] * c + y), o.translate(n, 0), (s.x += n * p);
                    } else
                      (0, a.warn)(
                        'Type3 character "'.concat(
                          r.operatorListId,
                          '" is not available.'
                        )
                      );
                  }
                o.restore(), (this.processingType3 = null);
              }
            },
            setCharWidth: function(e, t) {},
            setCharWidthAndBounds: function(e, t, r, n, i, a) {
              this.ctx.rect(r, n, i - r, a - n), this.clip(), this.endPath();
            },
            getColorN_Pattern: function(t) {
              var r,
                n = this;
              if ("TilingPattern" === t[0]) {
                var i = t[1],
                  a =
                    this.baseTransform || this.ctx.mozCurrentTransform.slice(),
                  s = {
                    createCanvasGraphics: function(t) {
                      return new e(
                        t,
                        n.commonObjs,
                        n.objs,
                        n.canvasFactory,
                        n.webGLContext
                      );
                    },
                  };
                r = new o.TilingPattern(t, i, this.ctx, s, a);
              } else r = (0, o.getShadingPatternFromIR)(t);
              return r;
            },
            setStrokeColorN: function() {
              this.current.strokeColor = this.getColorN_Pattern(arguments);
            },
            setFillColorN: function() {
              (this.current.fillColor = this.getColorN_Pattern(arguments)),
                (this.current.patternFill = !0);
            },
            setStrokeRGBColor: function(e, t, r) {
              var n = a.Util.makeCssRgb(e, t, r);
              (this.ctx.strokeStyle = n), (this.current.strokeColor = n);
            },
            setFillRGBColor: function(e, t, r) {
              var n = a.Util.makeCssRgb(e, t, r);
              (this.ctx.fillStyle = n),
                (this.current.fillColor = n),
                (this.current.patternFill = !1);
            },
            shadingFill: function(e) {
              var t = this.ctx;
              this.save();
              var r = (0, o.getShadingPatternFromIR)(e);
              t.fillStyle = r.getPattern(t, this, !0);
              var n = t.mozCurrentTransformInverse;
              if (n) {
                var i = t.canvas,
                  s = i.width,
                  u = i.height,
                  c = a.Util.applyTransform([0, 0], n),
                  l = a.Util.applyTransform([0, u], n),
                  h = a.Util.applyTransform([s, 0], n),
                  f = a.Util.applyTransform([s, u], n),
                  d = Math.min(c[0], l[0], h[0], f[0]),
                  p = Math.min(c[1], l[1], h[1], f[1]),
                  v = Math.max(c[0], l[0], h[0], f[0]),
                  g = Math.max(c[1], l[1], h[1], f[1]);
                this.ctx.fillRect(d, p, v - d, g - p);
              } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
              this.restore();
            },
            beginInlineImage: function() {
              (0, a.unreachable)("Should not call beginInlineImage");
            },
            beginImageData: function() {
              (0, a.unreachable)("Should not call beginImageData");
            },
            paintFormXObjectBegin: function(e, t) {
              if (
                (this.save(),
                this.baseTransformStack.push(this.baseTransform),
                Array.isArray(e) &&
                  6 === e.length &&
                  this.transform.apply(this, e),
                (this.baseTransform = this.ctx.mozCurrentTransform),
                t)
              ) {
                var r = t[2] - t[0],
                  n = t[3] - t[1];
                this.ctx.rect(t[0], t[1], r, n), this.clip(), this.endPath();
              }
            },
            paintFormXObjectEnd: function() {
              this.restore(),
                (this.baseTransform = this.baseTransformStack.pop());
            },
            beginGroup: function(e) {
              this.save();
              var t = this.ctx;
              e.isolated || (0, a.info)("TODO: Support non-isolated groups."),
                e.knockout && (0, a.warn)("Knockout groups not supported.");
              var r = t.mozCurrentTransform;
              if ((e.matrix && t.transform.apply(t, e.matrix), !e.bbox))
                throw new Error("Bounding box is required.");
              var n = a.Util.getAxialAlignedBoundingBox(
                  e.bbox,
                  t.mozCurrentTransform
                ),
                i = [0, 0, t.canvas.width, t.canvas.height];
              n = a.Util.intersect(n, i) || [0, 0, 0, 0];
              var o = Math.floor(n[0]),
                s = Math.floor(n[1]),
                u = Math.max(Math.ceil(n[2]) - o, 1),
                l = Math.max(Math.ceil(n[3]) - s, 1),
                h = 1,
                f = 1;
              u > c && ((h = u / c), (u = c)), l > c && ((f = l / c), (l = c));
              var d = "groupAt" + this.groupLevel;
              e.smask && (d += "_smask_" + (this.smaskCounter++ % 2));
              var p = this.cachedCanvases.getCanvas(d, u, l, !0),
                v = p.context;
              v.scale(1 / h, 1 / f),
                v.translate(-o, -s),
                v.transform.apply(v, r),
                e.smask
                  ? this.smaskStack.push({
                      canvas: p.canvas,
                      context: v,
                      offsetX: o,
                      offsetY: s,
                      scaleX: h,
                      scaleY: f,
                      subtype: e.smask.subtype,
                      backdrop: e.smask.backdrop,
                      transferMap: e.smask.transferMap || null,
                      startTransformInverse: null,
                    })
                  : (t.setTransform(1, 0, 0, 1, 0, 0),
                    t.translate(o, s),
                    t.scale(h, f)),
                m(t, v),
                (this.ctx = v),
                this.setGState([
                  ["BM", "source-over"],
                  ["ca", 1],
                  ["CA", 1],
                ]),
                this.groupStack.push(t),
                this.groupLevel++,
                (this.current.activeSMask = null);
            },
            endGroup: function(e) {
              this.groupLevel--;
              var t = this.ctx;
              (this.ctx = this.groupStack.pop()),
                void 0 !== this.ctx.imageSmoothingEnabled
                  ? (this.ctx.imageSmoothingEnabled = !1)
                  : (this.ctx.mozImageSmoothingEnabled = !1),
                e.smask
                  ? (this.tempSMask = this.smaskStack.pop())
                  : this.ctx.drawImage(t.canvas, 0, 0),
                this.restore();
            },
            beginAnnotations: function() {
              this.save(),
                this.baseTransform &&
                  this.ctx.setTransform.apply(this.ctx, this.baseTransform);
            },
            endAnnotations: function() {
              this.restore();
            },
            beginAnnotation: function(e, t, r) {
              if (
                (this.save(),
                y(this.ctx),
                (this.current = new g()),
                Array.isArray(e) && 4 === e.length)
              ) {
                var n = e[2] - e[0],
                  i = e[3] - e[1];
                this.ctx.rect(e[0], e[1], n, i), this.clip(), this.endPath();
              }
              this.transform.apply(this, t), this.transform.apply(this, r);
            },
            endAnnotation: function() {
              this.restore();
            },
            paintJpegXObject: function(e, t, r) {
              var n = this.processingType3
                ? this.commonObjs.get(e)
                : this.objs.get(e);
              if (!n)
                return void (0, a.warn)("Dependent image isn't ready yet");
              this.save();
              var i = this.ctx;
              if (
                (i.scale(1 / t, -1 / r),
                i.drawImage(n, 0, 0, n.width, n.height, 0, -r, t, r),
                this.imageLayer)
              ) {
                var o = i.mozCurrentTransformInverse,
                  s = this.getCanvasPosition(0, 0);
                this.imageLayer.appendImage({
                  objId: e,
                  left: s[0],
                  top: s[1],
                  width: t / o[0],
                  height: r / o[3],
                });
              }
              this.restore();
            },
            paintImageMaskXObject: function(e) {
              var t = this.ctx,
                n = e.width,
                a = e.height,
                o = this.current.fillColor,
                s = this.current.patternFill,
                u = this.processingType3;
              if (
                (h &&
                  u &&
                  void 0 === u.compiled &&
                  (n <= f && a <= f
                    ? (u.compiled = i({ data: e.data, width: n, height: a }))
                    : (u.compiled = null)),
                u && u.compiled)
              )
                return void u.compiled(t);
              var c = this.cachedCanvases.getCanvas("maskCanvas", n, a),
                l = c.context;
              l.save(),
                r(l, e),
                (l.globalCompositeOperation = "source-in"),
                (l.fillStyle = s ? o.getPattern(l, this) : o),
                l.fillRect(0, 0, n, a),
                l.restore(),
                this.paintInlineImageXObject(c.canvas);
            },
            paintImageMaskXObjectRepeat: function(e, t, n, i) {
              var a = e.width,
                o = e.height,
                s = this.current.fillColor,
                u = this.current.patternFill,
                c = this.cachedCanvases.getCanvas("maskCanvas", a, o),
                l = c.context;
              l.save(),
                r(l, e),
                (l.globalCompositeOperation = "source-in"),
                (l.fillStyle = u ? s.getPattern(l, this) : s),
                l.fillRect(0, 0, a, o),
                l.restore();
              for (var h = this.ctx, f = 0, d = i.length; f < d; f += 2)
                h.save(),
                  h.transform(t, 0, 0, n, i[f], i[f + 1]),
                  h.scale(1, -1),
                  h.drawImage(c.canvas, 0, 0, a, o, 0, -1, 1, 1),
                  h.restore();
            },
            paintImageMaskXObjectGroup: function(e) {
              for (
                var t = this.ctx,
                  n = this.current.fillColor,
                  i = this.current.patternFill,
                  a = 0,
                  o = e.length;
                a < o;
                a++
              ) {
                var s = e[a],
                  u = s.width,
                  c = s.height,
                  l = this.cachedCanvases.getCanvas("maskCanvas", u, c),
                  h = l.context;
                h.save(),
                  r(h, s),
                  (h.globalCompositeOperation = "source-in"),
                  (h.fillStyle = i ? n.getPattern(h, this) : n),
                  h.fillRect(0, 0, u, c),
                  h.restore(),
                  t.save(),
                  t.transform.apply(t, s.transform),
                  t.scale(1, -1),
                  t.drawImage(l.canvas, 0, 0, u, c, 0, -1, 1, 1),
                  t.restore();
              }
            },
            paintImageXObject: function(e) {
              var t = this.processingType3
                ? this.commonObjs.get(e)
                : this.objs.get(e);
              return t
                ? void this.paintInlineImageXObject(t)
                : void (0, a.warn)("Dependent image isn't ready yet");
            },
            paintImageXObjectRepeat: function(e, t, r, n) {
              var i = this.processingType3
                ? this.commonObjs.get(e)
                : this.objs.get(e);
              if (!i)
                return void (0, a.warn)("Dependent image isn't ready yet");
              for (
                var o = i.width, s = i.height, u = [], c = 0, l = n.length;
                c < l;
                c += 2
              )
                u.push({
                  transform: [t, 0, 0, r, n[c], n[c + 1]],
                  x: 0,
                  y: 0,
                  w: o,
                  h: s,
                });
              this.paintInlineImageXObjectGroup(i, u);
            },
            paintInlineImageXObject: function(e) {
              var r = e.width,
                n = e.height,
                i = this.ctx;
              this.save(), i.scale(1 / r, -1 / n);
              var a,
                o,
                s = i.mozCurrentTransformInverse,
                u = s[0],
                c = s[1],
                l = Math.max(Math.sqrt(u * u + c * c), 1),
                h = s[2],
                f = s[3],
                d = Math.max(Math.sqrt(h * h + f * f), 1);
              if (
                ("function" == typeof HTMLElement &&
                  e instanceof HTMLElement) ||
                !e.data
              )
                a = e;
              else {
                o = this.cachedCanvases.getCanvas("inlineImage", r, n);
                var p = o.context;
                t(p, e), (a = o.canvas);
              }
              for (
                var v = r, g = n, m = "prescale1";
                (l > 2 && v > 1) || (d > 2 && g > 1);

              ) {
                var y = v,
                  b = g;
                l > 2 && v > 1 && ((y = Math.ceil(v / 2)), (l /= v / y)),
                  d > 2 && g > 1 && ((b = Math.ceil(g / 2)), (d /= g / b)),
                  (o = this.cachedCanvases.getCanvas(m, y, b)),
                  (p = o.context),
                  p.clearRect(0, 0, y, b),
                  p.drawImage(a, 0, 0, v, g, 0, 0, y, b),
                  (a = o.canvas),
                  (v = y),
                  (g = b),
                  (m = "prescale1" === m ? "prescale2" : "prescale1");
              }
              if ((i.drawImage(a, 0, 0, v, g, 0, -n, r, n), this.imageLayer)) {
                var _ = this.getCanvasPosition(0, -n);
                this.imageLayer.appendImage({
                  imgData: e,
                  left: _[0],
                  top: _[1],
                  width: r / s[0],
                  height: n / s[3],
                });
              }
              this.restore();
            },
            paintInlineImageXObjectGroup: function(e, r) {
              var n = this.ctx,
                i = e.width,
                a = e.height,
                o = this.cachedCanvases.getCanvas("inlineImage", i, a),
                s = o.context;
              t(s, e);
              for (var u = 0, c = r.length; u < c; u++) {
                var l = r[u];
                if (
                  (n.save(),
                  n.transform.apply(n, l.transform),
                  n.scale(1, -1),
                  n.drawImage(o.canvas, l.x, l.y, l.w, l.h, 0, -1, 1, 1),
                  this.imageLayer)
                ) {
                  var h = this.getCanvasPosition(l.x, l.y);
                  this.imageLayer.appendImage({
                    imgData: e,
                    left: h[0],
                    top: h[1],
                    width: i,
                    height: a,
                  });
                }
                n.restore();
              }
            },
            paintSolidColorImageMask: function() {
              this.ctx.fillRect(0, 0, 1, 1);
            },
            paintXObject: function() {
              (0, a.warn)("Unsupported 'paintXObject' command.");
            },
            markPoint: function(e) {},
            markPointProps: function(e, t) {},
            beginMarkedContent: function(e) {},
            beginMarkedContentProps: function(e, t) {},
            endMarkedContent: function() {},
            beginCompat: function() {},
            endCompat: function() {},
            consumePath: function() {
              var e = this.ctx;
              this.pendingClip &&
                (this.pendingClip === T ? e.clip("evenodd") : e.clip(),
                (this.pendingClip = null)),
                e.beginPath();
            },
            getSinglePixelWidth: function(e) {
              if (null === this._cachedGetSinglePixelWidth) {
                var t = this.ctx.mozCurrentTransformInverse;
                this._cachedGetSinglePixelWidth = Math.sqrt(
                  Math.max(t[0] * t[0] + t[1] * t[1], t[2] * t[2] + t[3] * t[3])
                );
              }
              return this._cachedGetSinglePixelWidth;
            },
            getCanvasPosition: function(e, t) {
              var r = this.ctx.mozCurrentTransform;
              return [r[0] * e + r[2] * t + r[4], r[1] * e + r[3] * t + r[5]];
            },
          };
          for (var E in a.OPS) e.prototype[a.OPS[E]] = e.prototype[E];
          return e;
        })();
      t.CanvasGraphics = m;
    },
    function(e, t, r) {
      "use strict";
      function n(e, t) {
        if (t && "undefined" != typeof Path2D) {
          var r = t[2] - t[0],
            n = t[3] - t[1],
            i = new Path2D();
          i.rect(t[0], t[1], r, n), e.clip(i);
        }
      }
      function i(e) {
        var t = o[e[0]];
        if (!t) throw new Error("Unknown IR type: ".concat(e[0]));
        return t.fromIR(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getShadingPatternFromIR = i),
        (t.TilingPattern = void 0);
      var a = r(1),
        o = {};
      o.RadialAxial = {
        fromIR: function(e) {
          var t = e[1],
            r = e[2],
            i = e[3],
            a = e[4],
            o = e[5],
            s = e[6],
            u = e[7];
          return {
            type: "Pattern",
            getPattern: function(e) {
              n(e, r);
              var c;
              "axial" === t
                ? (c = e.createLinearGradient(a[0], a[1], o[0], o[1]))
                : "radial" === t &&
                  (c = e.createRadialGradient(a[0], a[1], s, o[0], o[1], u));
              for (var l = 0, h = i.length; l < h; ++l) {
                var f = i[l];
                c.addColorStop(f[0], f[1]);
              }
              return c;
            },
          };
        },
      };
      var s = (function() {
        function e(e, t, r, n, i, a, o, s) {
          var u,
            c = t.coords,
            l = t.colors,
            h = e.data,
            f = 4 * e.width;
          c[r + 1] > c[n + 1] &&
            ((u = r), (r = n), (n = u), (u = a), (a = o), (o = u)),
            c[n + 1] > c[i + 1] &&
              ((u = n), (n = i), (i = u), (u = o), (o = s), (s = u)),
            c[r + 1] > c[n + 1] &&
              ((u = r), (r = n), (n = u), (u = a), (a = o), (o = u));
          var d = (c[r] + t.offsetX) * t.scaleX,
            p = (c[r + 1] + t.offsetY) * t.scaleY,
            v = (c[n] + t.offsetX) * t.scaleX,
            g = (c[n + 1] + t.offsetY) * t.scaleY,
            m = (c[i] + t.offsetX) * t.scaleX,
            y = (c[i + 1] + t.offsetY) * t.scaleY;
          if (!(p >= y))
            for (
              var b,
                _,
                A,
                S,
                w,
                k,
                x,
                C,
                P,
                R = l[a],
                T = l[a + 1],
                E = l[a + 2],
                O = l[o],
                L = l[o + 1],
                F = l[o + 2],
                I = l[s],
                j = l[s + 1],
                M = l[s + 2],
                N = Math.round(p),
                D = Math.round(y),
                q = N;
              q <= D;
              q++
            ) {
              q < g
                ? ((P = q < p ? 0 : p === g ? 1 : (p - q) / (p - g)),
                  (b = d - (d - v) * P),
                  (_ = R - (R - O) * P),
                  (A = T - (T - L) * P),
                  (S = E - (E - F) * P))
                : ((P = q > y ? 1 : g === y ? 0 : (g - q) / (g - y)),
                  (b = v - (v - m) * P),
                  (_ = O - (O - I) * P),
                  (A = L - (L - j) * P),
                  (S = F - (F - M) * P)),
                (P = q < p ? 0 : q > y ? 1 : (p - q) / (p - y)),
                (w = d - (d - m) * P),
                (k = R - (R - I) * P),
                (x = T - (T - j) * P),
                (C = E - (E - M) * P);
              for (
                var U = Math.round(Math.min(b, w)),
                  W = Math.round(Math.max(b, w)),
                  B = f * q + 4 * U,
                  G = U;
                G <= W;
                G++
              )
                (P = (b - G) / (b - w)),
                  (P = P < 0 ? 0 : P > 1 ? 1 : P),
                  (h[B++] = (_ - (_ - k) * P) | 0),
                  (h[B++] = (A - (A - x) * P) | 0),
                  (h[B++] = (S - (S - C) * P) | 0),
                  (h[B++] = 255);
            }
        }
        function t(t, r, n) {
          var i,
            a,
            o = r.coords,
            s = r.colors;
          switch (r.type) {
            case "lattice":
              var u = r.verticesPerRow,
                c = Math.floor(o.length / u) - 1,
                l = u - 1;
              for (i = 0; i < c; i++)
                for (var h = i * u, f = 0; f < l; f++, h++)
                  e(t, n, o[h], o[h + 1], o[h + u], s[h], s[h + 1], s[h + u]),
                    e(
                      t,
                      n,
                      o[h + u + 1],
                      o[h + 1],
                      o[h + u],
                      s[h + u + 1],
                      s[h + 1],
                      s[h + u]
                    );
              break;
            case "triangles":
              for (i = 0, a = o.length; i < a; i += 3)
                e(t, n, o[i], o[i + 1], o[i + 2], s[i], s[i + 1], s[i + 2]);
              break;
            default:
              throw new Error("illegal figure");
          }
        }
        function r(e, r, n, i, a, o, s, u) {
          var c,
            l,
            h,
            f,
            d = 1.1,
            p = 3e3,
            v = 2,
            g = Math.floor(e[0]),
            m = Math.floor(e[1]),
            y = Math.ceil(e[2]) - g,
            b = Math.ceil(e[3]) - m,
            _ = Math.min(Math.ceil(Math.abs(y * r[0] * d)), p),
            A = Math.min(Math.ceil(Math.abs(b * r[1] * d)), p),
            S = y / _,
            w = b / A,
            k = {
              coords: n,
              colors: i,
              offsetX: -g,
              offsetY: -m,
              scaleX: 1 / S,
              scaleY: 1 / w,
            },
            x = _ + 2 * v,
            C = A + 2 * v;
          if (u.isEnabled)
            (c = u.drawFigures({
              width: _,
              height: A,
              backgroundColor: o,
              figures: a,
              context: k,
            })),
              (l = s.getCanvas("mesh", x, C, !1)),
              l.context.drawImage(c, v, v),
              (c = l.canvas);
          else {
            l = s.getCanvas("mesh", x, C, !1);
            var P = l.context,
              R = P.createImageData(_, A);
            if (o) {
              var T = R.data;
              for (h = 0, f = T.length; h < f; h += 4)
                (T[h] = o[0]),
                  (T[h + 1] = o[1]),
                  (T[h + 2] = o[2]),
                  (T[h + 3] = 255);
            }
            for (h = 0; h < a.length; h++) t(R, a[h], k);
            P.putImageData(R, v, v), (c = l.canvas);
          }
          return {
            canvas: c,
            offsetX: g - v * S,
            offsetY: m - v * w,
            scaleX: S,
            scaleY: w,
          };
        }
        return r;
      })();
      (o.Mesh = {
        fromIR: function(e) {
          var t = e[2],
            r = e[3],
            i = e[4],
            o = e[5],
            u = e[6],
            c = e[7],
            l = e[8];
          return {
            type: "Pattern",
            getPattern: function(e, h, f) {
              n(e, c);
              var d;
              if (f)
                d = a.Util.singularValueDecompose2dScale(e.mozCurrentTransform);
              else if (
                ((d = a.Util.singularValueDecompose2dScale(h.baseTransform)), u)
              ) {
                var p = a.Util.singularValueDecompose2dScale(u);
                d = [d[0] * p[0], d[1] * p[1]];
              }
              var v = s(
                o,
                d,
                t,
                r,
                i,
                f ? null : l,
                h.cachedCanvases,
                h.webGLContext
              );
              return (
                f ||
                  (e.setTransform.apply(e, h.baseTransform),
                  u && e.transform.apply(e, u)),
                e.translate(v.offsetX, v.offsetY),
                e.scale(v.scaleX, v.scaleY),
                e.createPattern(v.canvas, "no-repeat")
              );
            },
          };
        },
      }),
        (o.Dummy = {
          fromIR: function() {
            return {
              type: "Pattern",
              getPattern: function() {
                return "hotpink";
              },
            };
          },
        });
      var u = (function() {
        function e(e, t, r, n, i) {
          (this.operatorList = e[2]),
            (this.matrix = e[3] || [1, 0, 0, 1, 0, 0]),
            (this.bbox = e[4]),
            (this.xstep = e[5]),
            (this.ystep = e[6]),
            (this.paintType = e[7]),
            (this.tilingType = e[8]),
            (this.color = t),
            (this.canvasGraphicsFactory = n),
            (this.baseTransform = i),
            (this.type = "Pattern"),
            (this.ctx = r);
        }
        var t = { COLORED: 1, UNCOLORED: 2 },
          r = 3e3;
        return (
          (e.prototype = {
            createPatternCanvas: function(e) {
              var t = this.operatorList,
                r = this.bbox,
                n = this.xstep,
                i = this.ystep,
                o = this.paintType,
                s = this.tilingType,
                u = this.color,
                c = this.canvasGraphicsFactory;
              (0, a.info)("TilingType: " + s);
              var l = r[0],
                h = r[1],
                f = r[2],
                d = r[3],
                p = a.Util.singularValueDecompose2dScale(this.matrix),
                v = a.Util.singularValueDecompose2dScale(this.baseTransform),
                g = [p[0] * v[0], p[1] * v[1]],
                m = this.getSizeAndScale(n, this.ctx.canvas.width, g[0]),
                y = this.getSizeAndScale(i, this.ctx.canvas.height, g[1]),
                b = e.cachedCanvases.getCanvas("pattern", m.size, y.size, !0),
                _ = b.context,
                A = c.createCanvasGraphics(_);
              return (
                (A.groupLevel = e.groupLevel),
                this.setFillAndStrokeStyleToContext(A, o, u),
                A.transform(m.scale, 0, 0, y.scale, 0, 0),
                A.transform(1, 0, 0, 1, -l, -h),
                this.clipBbox(A, r, l, h, f, d),
                A.executeOperatorList(t),
                this.ctx.transform(1, 0, 0, 1, l, h),
                this.ctx.scale(1 / m.scale, 1 / y.scale),
                b.canvas
              );
            },
            getSizeAndScale: function(e, t, n) {
              e = Math.abs(e);
              var i = Math.max(r, t),
                a = Math.ceil(e * n);
              return a >= i ? (a = i) : (n = a / e), { scale: n, size: a };
            },
            clipBbox: function(e, t, r, n, i, a) {
              if (Array.isArray(t) && 4 === t.length) {
                var o = i - r,
                  s = a - n;
                e.ctx.rect(r, n, o, s), e.clip(), e.endPath();
              }
            },
            setFillAndStrokeStyleToContext: function(e, r, n) {
              var i = e.ctx,
                o = e.current;
              switch (r) {
                case t.COLORED:
                  var s = this.ctx;
                  (i.fillStyle = s.fillStyle),
                    (i.strokeStyle = s.strokeStyle),
                    (o.fillColor = s.fillStyle),
                    (o.strokeColor = s.strokeStyle);
                  break;
                case t.UNCOLORED:
                  var u = a.Util.makeCssRgb(n[0], n[1], n[2]);
                  (i.fillStyle = u),
                    (i.strokeStyle = u),
                    (o.fillColor = u),
                    (o.strokeColor = u);
                  break;
                default:
                  throw new a.FormatError("Unsupported paint type: ".concat(r));
              }
            },
            getPattern: function(e, t) {
              (e = this.ctx),
                e.setTransform.apply(e, this.baseTransform),
                e.transform.apply(e, this.matrix);
              var r = this.createPatternCanvas(t);
              return e.createPattern(r, "repeat");
            },
          }),
          e
        );
      })();
      t.TilingPattern = u;
    },
    function(e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GlobalWorkerOptions = void 0);
      var n = Object.create(null);
      (t.GlobalWorkerOptions = n),
        (n.workerPort = void 0 === n.workerPort ? null : n.workerPort),
        (n.workerSrc = void 0 === n.workerSrc ? "" : n.workerSrc);
    },
    function(e, t, r) {
      "use strict";
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function i(e) {
        if ("object" !== n(e)) return e;
        switch (e.name) {
          case "AbortException":
            return new o.AbortException(e.message);
          case "MissingPDFException":
            return new o.MissingPDFException(e.message);
          case "UnexpectedResponseException":
            return new o.UnexpectedResponseException(e.message, e.status);
          case "UnknownErrorException":
            return new o.UnknownErrorException(e.message, e.details);
          default:
            return new o.UnknownErrorException(e.message, e.toString());
        }
      }
      function a(e, t, r) {
        var n = this;
        (this.sourceName = e),
          (this.targetName = t),
          (this.comObj = r),
          (this.callbackId = 1),
          (this.streamId = 1),
          (this.postMessageTransfers = !0),
          (this.streamSinks = Object.create(null)),
          (this.streamControllers = Object.create(null));
        var a = (this.callbacksCapabilities = Object.create(null)),
          o = (this.actionHandler = Object.create(null));
        (this._onComObjOnMessage = function(e) {
          var t = e.data;
          if (t.targetName === n.sourceName)
            if (t.stream) n._processStreamMessage(t);
            else if (t.isReply) {
              var s = t.callbackId;
              if (!(t.callbackId in a))
                throw new Error("Cannot resolve callback ".concat(s));
              var u = a[s];
              delete a[s],
                "reason" in t ? u.reject(i(t.reason)) : u.resolve(t.data);
            } else {
              if (!(t.action in o))
                throw new Error(
                  "Unknown action from worker: ".concat(t.action)
                );
              var c = o[t.action];
              if (t.callbackId) {
                var l = n.sourceName,
                  h = t.sourceName;
                new Promise(function(e) {
                  e(c(t.data));
                }).then(
                  function(e) {
                    r.postMessage({
                      sourceName: l,
                      targetName: h,
                      isReply: !0,
                      callbackId: t.callbackId,
                      data: e,
                    });
                  },
                  function(e) {
                    r.postMessage({
                      sourceName: l,
                      targetName: h,
                      isReply: !0,
                      callbackId: t.callbackId,
                      reason: i(e),
                    });
                  }
                );
              } else t.streamId ? n._createStreamSink(t) : c(t.data);
            }
        }),
          r.addEventListener("message", this._onComObjOnMessage);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MessageHandler = a);
      var o = r(1),
        s = {
          UNKNOWN: 0,
          CANCEL: 1,
          CANCEL_COMPLETE: 2,
          CLOSE: 3,
          ENQUEUE: 4,
          ERROR: 5,
          PULL: 6,
          PULL_COMPLETE: 7,
          START_COMPLETE: 8,
        };
      a.prototype = {
        on: function(e, t) {
          var r = this.actionHandler;
          if (r[e])
            throw new Error(
              'There is already an actionName called "'.concat(e, '"')
            );
          r[e] = t;
        },
        send: function(e, t, r) {
          this.postMessage(
            {
              sourceName: this.sourceName,
              targetName: this.targetName,
              action: e,
              data: t,
            },
            r
          );
        },
        sendWithPromise: function(e, t, r) {
          var n = this.callbackId++,
            i = (0, o.createPromiseCapability)();
          this.callbacksCapabilities[n] = i;
          try {
            this.postMessage(
              {
                sourceName: this.sourceName,
                targetName: this.targetName,
                action: e,
                callbackId: n,
                data: t,
              },
              r
            );
          } catch (a) {
            i.reject(a);
          }
          return i.promise;
        },
        sendWithStream: function(e, t, r, n) {
          var a = this,
            u = this.streamId++,
            c = this.sourceName,
            l = this.targetName,
            h = this.comObj;
          return new o.ReadableStream(
            {
              start: function(r) {
                var i = (0, o.createPromiseCapability)();
                return (
                  (a.streamControllers[u] = {
                    controller: r,
                    startCall: i,
                    pullCall: null,
                    cancelCall: null,
                    isClosed: !1,
                  }),
                  a.postMessage(
                    {
                      sourceName: c,
                      targetName: l,
                      action: e,
                      streamId: u,
                      data: t,
                      desiredSize: r.desiredSize,
                    },
                    n
                  ),
                  i.promise
                );
              },
              pull: function(e) {
                var t = (0, o.createPromiseCapability)();
                return (
                  (a.streamControllers[u].pullCall = t),
                  h.postMessage({
                    sourceName: c,
                    targetName: l,
                    stream: s.PULL,
                    streamId: u,
                    desiredSize: e.desiredSize,
                  }),
                  t.promise
                );
              },
              cancel: function(e) {
                (0, o.assert)(
                  e instanceof Error,
                  "cancel must have a valid reason"
                );
                var t = (0, o.createPromiseCapability)();
                return (
                  (a.streamControllers[u].cancelCall = t),
                  (a.streamControllers[u].isClosed = !0),
                  h.postMessage({
                    sourceName: c,
                    targetName: l,
                    stream: s.CANCEL,
                    streamId: u,
                    reason: i(e),
                  }),
                  t.promise
                );
              },
            },
            r
          );
        },
        _createStreamSink: function(e) {
          var t = this,
            r = this.actionHandler[e.action],
            n = e.streamId,
            a = e.desiredSize,
            u = this.sourceName,
            c = e.sourceName,
            l = (0, o.createPromiseCapability)(),
            h = this.comObj,
            f = {
              enqueue: function(e) {
                var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1,
                  i = arguments.length > 2 ? arguments[2] : void 0;
                if (!this.isCancelled) {
                  var a = this.desiredSize;
                  (this.desiredSize -= r),
                    a > 0 &&
                      this.desiredSize <= 0 &&
                      ((this.sinkCapability = (0, o.createPromiseCapability)()),
                      (this.ready = this.sinkCapability.promise)),
                    t.postMessage(
                      {
                        sourceName: u,
                        targetName: c,
                        stream: s.ENQUEUE,
                        streamId: n,
                        chunk: e,
                      },
                      i
                    );
                }
              },
              close: function() {
                this.isCancelled ||
                  ((this.isCancelled = !0),
                  h.postMessage({
                    sourceName: u,
                    targetName: c,
                    stream: s.CLOSE,
                    streamId: n,
                  }),
                  delete t.streamSinks[n]);
              },
              error: function(e) {
                (0, o.assert)(
                  e instanceof Error,
                  "error must have a valid reason"
                ),
                  this.isCancelled ||
                    ((this.isCancelled = !0),
                    h.postMessage({
                      sourceName: u,
                      targetName: c,
                      stream: s.ERROR,
                      streamId: n,
                      reason: i(e),
                    }));
              },
              sinkCapability: l,
              onPull: null,
              onCancel: null,
              isCancelled: !1,
              desiredSize: a,
              ready: null,
            };
          f.sinkCapability.resolve(),
            (f.ready = f.sinkCapability.promise),
            (this.streamSinks[n] = f),
            new Promise(function(t) {
              t(r(e.data, f));
            }).then(
              function() {
                h.postMessage({
                  sourceName: u,
                  targetName: c,
                  stream: s.START_COMPLETE,
                  streamId: n,
                  success: !0,
                });
              },
              function(e) {
                h.postMessage({
                  sourceName: u,
                  targetName: c,
                  stream: s.START_COMPLETE,
                  streamId: n,
                  reason: i(e),
                });
              }
            );
        },
        _processStreamMessage: function(e) {
          var t = this,
            r = this.sourceName,
            n = e.sourceName,
            a = e.streamId,
            u = this.comObj,
            c = function() {
              Promise.all(
                [
                  t.streamControllers[a].startCall,
                  t.streamControllers[a].pullCall,
                  t.streamControllers[a].cancelCall,
                ].map(function(e) {
                  return e && e.promise["catch"](function() {});
                })
              ).then(function() {
                delete t.streamControllers[a];
              });
            };
          switch (e.stream) {
            case s.START_COMPLETE:
              e.success
                ? this.streamControllers[a].startCall.resolve()
                : this.streamControllers[a].startCall.reject(i(e.reason));
              break;
            case s.PULL_COMPLETE:
              e.success
                ? this.streamControllers[a].pullCall.resolve()
                : this.streamControllers[a].pullCall.reject(i(e.reason));
              break;
            case s.PULL:
              if (!this.streamSinks[a]) {
                u.postMessage({
                  sourceName: r,
                  targetName: n,
                  stream: s.PULL_COMPLETE,
                  streamId: a,
                  success: !0,
                });
                break;
              }
              this.streamSinks[a].desiredSize <= 0 &&
                e.desiredSize > 0 &&
                this.streamSinks[a].sinkCapability.resolve(),
                (this.streamSinks[a].desiredSize = e.desiredSize);
              var l = this.streamSinks[e.streamId].onPull;
              new Promise(function(e) {
                e(l && l());
              }).then(
                function() {
                  u.postMessage({
                    sourceName: r,
                    targetName: n,
                    stream: s.PULL_COMPLETE,
                    streamId: a,
                    success: !0,
                  });
                },
                function(e) {
                  u.postMessage({
                    sourceName: r,
                    targetName: n,
                    stream: s.PULL_COMPLETE,
                    streamId: a,
                    reason: i(e),
                  });
                }
              );
              break;
            case s.ENQUEUE:
              if (
                ((0, o.assert)(
                  this.streamControllers[a],
                  "enqueue should have stream controller"
                ),
                this.streamControllers[a].isClosed)
              )
                break;
              this.streamControllers[a].controller.enqueue(e.chunk);
              break;
            case s.CLOSE:
              if (
                ((0, o.assert)(
                  this.streamControllers[a],
                  "close should have stream controller"
                ),
                this.streamControllers[a].isClosed)
              )
                break;
              (this.streamControllers[a].isClosed = !0),
                this.streamControllers[a].controller.close(),
                c();
              break;
            case s.ERROR:
              (0, o.assert)(
                this.streamControllers[a],
                "error should have stream controller"
              ),
                this.streamControllers[a].controller.error(i(e.reason)),
                c();
              break;
            case s.CANCEL_COMPLETE:
              e.success
                ? this.streamControllers[a].cancelCall.resolve()
                : this.streamControllers[a].cancelCall.reject(i(e.reason)),
                c();
              break;
            case s.CANCEL:
              if (!this.streamSinks[a]) break;
              var h = this.streamSinks[e.streamId].onCancel;
              new Promise(function(t) {
                t(h && h(i(e.reason)));
              }).then(
                function() {
                  u.postMessage({
                    sourceName: r,
                    targetName: n,
                    stream: s.CANCEL_COMPLETE,
                    streamId: a,
                    success: !0,
                  });
                },
                function(e) {
                  u.postMessage({
                    sourceName: r,
                    targetName: n,
                    stream: s.CANCEL_COMPLETE,
                    streamId: a,
                    reason: i(e),
                  });
                }
              ),
                this.streamSinks[a].sinkCapability.reject(i(e.reason)),
                (this.streamSinks[a].isCancelled = !0),
                delete this.streamSinks[a];
              break;
            default:
              throw new Error("Unexpected stream case");
          }
        },
        postMessage: function(e, t) {
          t && this.postMessageTransfers
            ? this.comObj.postMessage(e, t)
            : this.comObj.postMessage(e);
        },
        destroy: function() {
          this.comObj.removeEventListener("message", this._onComObjOnMessage);
        },
      };
    },
    function(e, t, r) {
      "use strict";
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function a(e, t, r) {
        return t && i(e.prototype, t), r && i(e, r), e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Metadata = void 0);
      var o = r(1),
        s = r(191),
        u = (function() {
          function e(t) {
            n(this, e),
              (0, o.assert)(
                "string" == typeof t,
                "Metadata: input is not a string"
              ),
              (t = this._repair(t));
            var r = new s.SimpleXMLParser(),
              i = r.parseFromString(t);
            (this._metadata = Object.create(null)), i && this._parse(i);
          }
          return (
            a(e, [
              {
                key: "_repair",
                value: function(e) {
                  return e
                    .replace(/^([^<]+)/, "")
                    .replace(/>\\376\\377([^<]+)/g, function(e, t) {
                      for (
                        var r = t
                            .replace(/\\([0-3])([0-7])([0-7])/g, function(
                              e,
                              t,
                              r,
                              n
                            ) {
                              return String.fromCharCode(
                                64 * t + 8 * r + 1 * n
                              );
                            })
                            .replace(/&(amp|apos|gt|lt|quot);/g, function(
                              e,
                              t
                            ) {
                              switch (t) {
                                case "amp":
                                  return "&";
                                case "apos":
                                  return "'";
                                case "gt":
                                  return ">";
                                case "lt":
                                  return "<";
                                case "quot":
                                  return '"';
                              }
                              throw new Error(
                                "_repair: ".concat(t, " isn't defined.")
                              );
                            }),
                          n = "",
                          i = 0,
                          a = r.length;
                        i < a;
                        i += 2
                      ) {
                        var o = 256 * r.charCodeAt(i) + r.charCodeAt(i + 1);
                        n +=
                          o >= 32 && o < 127 && 60 !== o && 62 !== o && 38 !== o
                            ? String.fromCharCode(o)
                            : "&#x" +
                              (65536 + o).toString(16).substring(1) +
                              ";";
                      }
                      return ">" + n;
                    });
                },
              },
              {
                key: "_parse",
                value: function(e) {
                  var t = e.documentElement;
                  if ("rdf:rdf" !== t.nodeName.toLowerCase())
                    for (
                      t = t.firstChild;
                      t && "rdf:rdf" !== t.nodeName.toLowerCase();

                    )
                      t = t.nextSibling;
                  var r = t ? t.nodeName.toLowerCase() : null;
                  if (t && "rdf:rdf" === r && t.hasChildNodes())
                    for (
                      var n = t.childNodes, i = 0, a = n.length;
                      i < a;
                      i++
                    ) {
                      var o = n[i];
                      if ("rdf:description" === o.nodeName.toLowerCase())
                        for (var s = 0, u = o.childNodes.length; s < u; s++)
                          if (
                            "#text" !== o.childNodes[s].nodeName.toLowerCase()
                          ) {
                            var c = o.childNodes[s],
                              l = c.nodeName.toLowerCase();
                            this._metadata[l] = c.textContent.trim();
                          }
                    }
                },
              },
              {
                key: "get",
                value: function(e) {
                  var t = this._metadata[e];
                  return "undefined" != typeof t ? t : null;
                },
              },
              {
                key: "getAll",
                value: function() {
                  return this._metadata;
                },
              },
              {
                key: "has",
                value: function(e) {
                  return "undefined" != typeof this._metadata[e];
                },
              },
            ]),
            e
          );
        })();
      t.Metadata = u;
    },
    function(e, t, r) {
      "use strict";
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function i(e, t) {
        return s(e) || o(e, t) || a();
      }
      function a() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      }
      function o(e, t) {
        if (
          Symbol.iterator in Object(e) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        ) {
          var r = [],
            n = !0,
            i = !1,
            a = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(n = (o = s.next()).done) &&
              (r.push(o.value), !t || r.length !== t);
              n = !0
            );
          } catch (u) {
            (i = !0), (a = u);
          } finally {
            try {
              n || null == s["return"] || s["return"]();
            } finally {
              if (i) throw a;
            }
          }
          return r;
        }
      }
      function s(e) {
        if (Array.isArray(e)) return e;
      }
      function u(e, t) {
        return !t || ("object" !== n(t) && "function" != typeof t) ? c(e) : t;
      }
      function c(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function l(e, t, r) {
        return (l =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = h(e, t);
                if (n) {
                  var i = Object.getOwnPropertyDescriptor(n, t);
                  return i.get ? i.get.call(r) : i.value;
                }
              })(e, t, r || e);
      }
      function h(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) &&
          ((e = f(e)), null !== e);

        );
        return e;
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function d(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && p(e, t);
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function v(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function g(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function m(e, t, r) {
        return t && g(e.prototype, t), r && g(e, r), e;
      }
      function y(e, t) {
        var r = e[t];
        return " " === r || "\n" === r || "\r" === r || "\t" === r;
      }
      function b(e) {
        for (var t = 0, r = e.length; t < r; t++) if (!y(e, t)) return !1;
        return !0;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SimpleXMLParser = void 0);
      var _ = {
          NoError: 0,
          EndOfDocument: -1,
          UnterminatedCdat: -2,
          UnterminatedXmlDeclaration: -3,
          UnterminatedDoctypeDeclaration: -4,
          UnterminatedComment: -5,
          MalformedElement: -6,
          OutOfMemory: -7,
          UnterminatedAttributeValue: -8,
          UnterminatedElement: -9,
          ElementNeverBegun: -10,
        },
        A = (function() {
          function e() {
            v(this, e);
          }
          return (
            m(e, [
              {
                key: "_resolveEntities",
                value: function(e) {
                  var t = this;
                  return e.replace(/&([^;]+);/g, function(e, r) {
                    if ("#x" === r.substring(0, 2))
                      return String.fromCharCode(parseInt(r.substring(2), 16));
                    if ("#" === r.substring(0, 1))
                      return String.fromCharCode(parseInt(r.substring(1), 10));
                    switch (r) {
                      case "lt":
                        return "<";
                      case "gt":
                        return ">";
                      case "amp":
                        return "&";
                      case "quot":
                        return '"';
                    }
                    return t.onResolveEntity(r);
                  });
                },
              },
              {
                key: "_parseContent",
                value: function(e, t) {
                  function r() {
                    for (; i < e.length && y(e, i); ) ++i;
                  }
                  for (
                    var n, i = t, a = [];
                    i < e.length && !y(e, i) && ">" !== e[i] && "/" !== e[i];

                  )
                    ++i;
                  for (
                    n = e.substring(t, i), r();
                    i < e.length &&
                    ">" !== e[i] &&
                    "/" !== e[i] &&
                    "?" !== e[i];

                  ) {
                    r();
                    for (
                      var o = "", s = "";
                      i < e.length && !y(e, i) && "=" !== e[i];

                    )
                      (o += e[i]), ++i;
                    if ((r(), "=" !== e[i])) return null;
                    ++i, r();
                    var u = e[i];
                    if ('"' !== u && "'" !== u) return null;
                    var c = e.indexOf(u, ++i);
                    if (c < 0) return null;
                    (s = e.substring(i, c)),
                      a.push({ name: o, value: this._resolveEntities(s) }),
                      (i = c + 1),
                      r();
                  }
                  return { name: n, attributes: a, parsed: i - t };
                },
              },
              {
                key: "_parseProcessingInstruction",
                value: function(e, t) {
                  function r() {
                    for (; a < e.length && y(e, a); ) ++a;
                  }
                  for (
                    var n, i, a = t;
                    a < e.length && !y(e, a) && ">" !== e[a] && "/" !== e[a];

                  )
                    ++a;
                  (n = e.substring(t, a)), r();
                  for (
                    var o = a;
                    a < e.length && ("?" !== e[a] || ">" !== e[a + 1]);

                  )
                    ++a;
                  return (
                    (i = e.substring(o, a)),
                    { name: n, value: i, parsed: a - t }
                  );
                },
              },
              {
                key: "parseXml",
                value: function(e) {
                  for (var t = 0; t < e.length; ) {
                    var r = e[t],
                      n = t;
                    if ("<" === r) {
                      ++n;
                      var i = e[n],
                        a = void 0;
                      switch (i) {
                        case "/":
                          if ((++n, (a = e.indexOf(">", n)), a < 0))
                            return void this.onError(_.UnterminatedElement);
                          this.onEndElement(e.substring(n, a)), (n = a + 1);
                          break;
                        case "?":
                          ++n;
                          var o = this._parseProcessingInstruction(e, n);
                          if (
                            "?>" !== e.substring(n + o.parsed, n + o.parsed + 2)
                          )
                            return void this.onError(
                              _.UnterminatedXmlDeclaration
                            );
                          this.onPi(o.name, o.value), (n += o.parsed + 2);
                          break;
                        case "!":
                          if ("--" === e.substring(n + 1, n + 3)) {
                            if (((a = e.indexOf("-->", n + 3)), a < 0))
                              return void this.onError(_.UnterminatedComment);
                            this.onComment(e.substring(n + 3, a)), (n = a + 3);
                          } else if ("[CDATA[" === e.substring(n + 1, n + 8)) {
                            if (((a = e.indexOf("]]>", n + 8)), a < 0))
                              return void this.onError(_.UnterminatedCdat);
                            this.onCdata(e.substring(n + 8, a)), (n = a + 3);
                          } else {
                            if ("DOCTYPE" !== e.substring(n + 1, n + 8))
                              return void this.onError(_.MalformedElement);
                            var s = e.indexOf("[", n + 8),
                              u = !1;
                            if (((a = e.indexOf(">", n + 8)), a < 0))
                              return void this.onError(
                                _.UnterminatedDoctypeDeclaration
                              );
                            if (s > 0 && a > s) {
                              if (((a = e.indexOf("]>", n + 8)), a < 0))
                                return void this.onError(
                                  _.UnterminatedDoctypeDeclaration
                                );
                              u = !0;
                            }
                            var c = e.substring(n + 8, a + (u ? 1 : 0));
                            this.onDoctype(c), (n = a + (u ? 2 : 1));
                          }
                          break;
                        default:
                          var l = this._parseContent(e, n);
                          if (null === l)
                            return void this.onError(_.MalformedElement);
                          var h = !1;
                          if (
                            "/>" === e.substring(n + l.parsed, n + l.parsed + 2)
                          )
                            h = !0;
                          else if (
                            ">" !== e.substring(n + l.parsed, n + l.parsed + 1)
                          )
                            return void this.onError(_.UnterminatedElement);
                          this.onBeginElement(l.name, l.attributes, h),
                            (n += l.parsed + (h ? 2 : 1));
                      }
                    } else {
                      for (; n < e.length && "<" !== e[n]; ) n++;
                      var f = e.substring(t, n);
                      this.onText(this._resolveEntities(f));
                    }
                    t = n;
                  }
                },
              },
              {
                key: "onResolveEntity",
                value: function(e) {
                  return "&".concat(e, ";");
                },
              },
              { key: "onPi", value: function(e, t) {} },
              { key: "onComment", value: function(e) {} },
              { key: "onCdata", value: function(e) {} },
              { key: "onDoctype", value: function(e) {} },
              { key: "onText", value: function(e) {} },
              { key: "onBeginElement", value: function(e, t, r) {} },
              { key: "onEndElement", value: function(e) {} },
              { key: "onError", value: function(e) {} },
            ]),
            e
          );
        })(),
        S = (function() {
          function e(t, r) {
            v(this, e),
              (this.nodeName = t),
              (this.nodeValue = r),
              Object.defineProperty(this, "parentNode", {
                value: null,
                writable: !0,
              });
          }
          return (
            m(e, [
              {
                key: "hasChildNodes",
                value: function() {
                  return this.childNodes && this.childNodes.length > 0;
                },
              },
              {
                key: "firstChild",
                get: function() {
                  return this.childNodes && this.childNodes[0];
                },
              },
              {
                key: "nextSibling",
                get: function() {
                  var e = this.parentNode.childNodes;
                  if (e) {
                    var t = e.indexOf(this);
                    if (t !== -1) return e[t + 1];
                  }
                },
              },
              {
                key: "textContent",
                get: function() {
                  return this.childNodes
                    ? this.childNodes
                        .map(function(e) {
                          return e.textContent;
                        })
                        .join("")
                    : this.nodeValue || "";
                },
              },
            ]),
            e
          );
        })(),
        w = (function(e) {
          function t() {
            var e;
            return (
              v(this, t),
              (e = u(this, f(t).call(this))),
              (e._currentFragment = null),
              (e._stack = null),
              (e._errorCode = _.NoError),
              e
            );
          }
          return (
            d(t, e),
            m(t, [
              {
                key: "parseFromString",
                value: function(e) {
                  if (
                    ((this._currentFragment = []),
                    (this._stack = []),
                    (this._errorCode = _.NoError),
                    this.parseXml(e),
                    this._errorCode === _.NoError)
                  ) {
                    var t = i(this._currentFragment, 1),
                      r = t[0];
                    if (r) return { documentElement: r };
                  }
                },
              },
              {
                key: "onResolveEntity",
                value: function(e) {
                  switch (e) {
                    case "apos":
                      return "'";
                  }
                  return l(f(t.prototype), "onResolveEntity", this).call(
                    this,
                    e
                  );
                },
              },
              {
                key: "onText",
                value: function(e) {
                  if (!b(e)) {
                    var t = new S("#text", e);
                    this._currentFragment.push(t);
                  }
                },
              },
              {
                key: "onCdata",
                value: function(e) {
                  var t = new S("#text", e);
                  this._currentFragment.push(t);
                },
              },
              {
                key: "onBeginElement",
                value: function(e, t, r) {
                  var n = new S(e);
                  (n.childNodes = []),
                    this._currentFragment.push(n),
                    r ||
                      (this._stack.push(this._currentFragment),
                      (this._currentFragment = n.childNodes));
                },
              },
              {
                key: "onEndElement",
                value: function(e) {
                  this._currentFragment = this._stack.pop() || [];
                  var t = this._currentFragment[
                    this._currentFragment.length - 1
                  ];
                  if (t)
                    for (var r = 0, n = t.childNodes.length; r < n; r++)
                      t.childNodes[r].parentNode = t;
                },
              },
              {
                key: "onError",
                value: function(e) {
                  this._errorCode = e;
                },
              },
            ]),
            t
          );
        })(A);
      t.SimpleXMLParser = w;
    },
    function(e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, r, n, i, a, o) {
        try {
          var s = e[a](o),
            u = s.value;
        } catch (c) {
          return void r(c);
        }
        s.done ? t(u) : Promise.resolve(u).then(n, i);
      }
      function a(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, a) {
            function o(e) {
              i(u, n, a, o, s, "next", e);
            }
            function s(e) {
              i(u, n, a, o, s, "throw", e);
            }
            var u = e.apply(t, r);
            o(void 0);
          });
        };
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function u(e, t, r) {
        return t && s(e.prototype, t), r && s(e, r), e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PDFDataTransportStream = void 0);
      var c = n(r(180)),
        l = r(1),
        h = (function() {
          function e(t, r) {
            var n = this;
            o(this, e),
              (0, l.assert)(r),
              (this._queuedChunks = []),
              (this._progressiveDone = t.progressiveDone || !1);
            var i = t.initialData;
            if (i && i.length > 0) {
              var a = new Uint8Array(i).buffer;
              this._queuedChunks.push(a);
            }
            (this._pdfDataRangeTransport = r),
              (this._isStreamingSupported = !t.disableStream),
              (this._isRangeSupported = !t.disableRange),
              (this._contentLength = t.length),
              (this._fullRequestReader = null),
              (this._rangeReaders = []),
              this._pdfDataRangeTransport.addRangeListener(function(e, t) {
                n._onReceiveData({ begin: e, chunk: t });
              }),
              this._pdfDataRangeTransport.addProgressListener(function(e, t) {
                n._onProgress({ loaded: e, total: t });
              }),
              this._pdfDataRangeTransport.addProgressiveReadListener(function(
                e
              ) {
                n._onReceiveData({ chunk: e });
              }),
              this._pdfDataRangeTransport.addProgressiveDoneListener(
                function() {
                  n._onProgressiveDone();
                }
              ),
              this._pdfDataRangeTransport.transportReady();
          }
          return (
            u(e, [
              {
                key: "_onReceiveData",
                value: function(e) {
                  var t = new Uint8Array(e.chunk).buffer;
                  if (void 0 === e.begin)
                    this._fullRequestReader
                      ? this._fullRequestReader._enqueue(t)
                      : this._queuedChunks.push(t);
                  else {
                    var r = this._rangeReaders.some(function(r) {
                      return r._begin === e.begin && (r._enqueue(t), !0);
                    });
                    (0, l.assert)(r);
                  }
                },
              },
              {
                key: "_onProgress",
                value: function(e) {
                  if (void 0 === e.total) {
                    var t = this._rangeReaders[0];
                    t && t.onProgress && t.onProgress({ loaded: e.loaded });
                  } else {
                    var r = this._fullRequestReader;
                    r &&
                      r.onProgress &&
                      r.onProgress({ loaded: e.loaded, total: e.total });
                  }
                },
              },
              {
                key: "_onProgressiveDone",
                value: function() {
                  this._fullRequestReader &&
                    this._fullRequestReader.progressiveDone(),
                    (this._progressiveDone = !0);
                },
              },
              {
                key: "_removeRangeReader",
                value: function(e) {
                  var t = this._rangeReaders.indexOf(e);
                  t >= 0 && this._rangeReaders.splice(t, 1);
                },
              },
              {
                key: "getFullReader",
                value: function() {
                  (0, l.assert)(!this._fullRequestReader);
                  var e = this._queuedChunks;
                  return (
                    (this._queuedChunks = null),
                    new f(this, e, this._progressiveDone)
                  );
                },
              },
              {
                key: "getRangeReader",
                value: function(e, t) {
                  if (t <= this._progressiveDataLength) return null;
                  var r = new d(this, e, t);
                  return (
                    this._pdfDataRangeTransport.requestDataRange(e, t),
                    this._rangeReaders.push(r),
                    r
                  );
                },
              },
              {
                key: "cancelAllRequests",
                value: function(e) {
                  this._fullRequestReader && this._fullRequestReader.cancel(e);
                  var t = this._rangeReaders.slice(0);
                  t.forEach(function(t) {
                    t.cancel(e);
                  }),
                    this._pdfDataRangeTransport.abort();
                },
              },
              {
                key: "_progressiveDataLength",
                get: function() {
                  return this._fullRequestReader
                    ? this._fullRequestReader._loaded
                    : 0;
                },
              },
            ]),
            e
          );
        })();
      t.PDFDataTransportStream = h;
      var f = (function() {
          function e(t, r) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            o(this, e),
              (this._stream = t),
              (this._done = n || !1),
              (this._filename = null),
              (this._queuedChunks = r || []),
              (this._loaded = 0);
            var i = !0,
              a = !1,
              s = void 0;
            try {
              for (
                var u, c = this._queuedChunks[Symbol.iterator]();
                !(i = (u = c.next()).done);
                i = !0
              ) {
                var l = u.value;
                this._loaded += l.byteLength;
              }
            } catch (h) {
              (a = !0), (s = h);
            } finally {
              try {
                i || null == c["return"] || c["return"]();
              } finally {
                if (a) throw s;
              }
            }
            (this._requests = []),
              (this._headersReady = Promise.resolve()),
              (t._fullRequestReader = this),
              (this.onProgress = null);
          }
          return (
            u(e, [
              {
                key: "_enqueue",
                value: function(e) {
                  if (!this._done) {
                    if (this._requests.length > 0) {
                      var t = this._requests.shift();
                      t.resolve({ value: e, done: !1 });
                    } else this._queuedChunks.push(e);
                    this._loaded += e.byteLength;
                  }
                },
              },
              {
                key: "read",
                value: (function() {
                  function e() {
                    return t.apply(this, arguments);
                  }
                  var t = a(
                    c["default"].mark(function r() {
                      var e, t;
                      return c["default"].wrap(
                        function(r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                if (!(this._queuedChunks.length > 0)) {
                                  r.next = 3;
                                  break;
                                }
                                return (
                                  (e = this._queuedChunks.shift()),
                                  r.abrupt("return", { value: e, done: !1 })
                                );
                              case 3:
                                if (!this._done) {
                                  r.next = 5;
                                  break;
                                }
                                return r.abrupt("return", {
                                  value: void 0,
                                  done: !0,
                                });
                              case 5:
                                return (
                                  (t = (0, l.createPromiseCapability)()),
                                  this._requests.push(t),
                                  r.abrupt("return", t.promise)
                                );
                              case 8:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        this
                      );
                    })
                  );
                  return e;
                })(),
              },
              {
                key: "cancel",
                value: function(e) {
                  (this._done = !0),
                    this._requests.forEach(function(e) {
                      e.resolve({ value: void 0, done: !0 });
                    }),
                    (this._requests = []);
                },
              },
              {
                key: "progressiveDone",
                value: function() {
                  this._done || (this._done = !0);
                },
              },
              {
                key: "headersReady",
                get: function() {
                  return this._headersReady;
                },
              },
              {
                key: "filename",
                get: function() {
                  return this._filename;
                },
              },
              {
                key: "isRangeSupported",
                get: function() {
                  return this._stream._isRangeSupported;
                },
              },
              {
                key: "isStreamingSupported",
                get: function() {
                  return this._stream._isStreamingSupported;
                },
              },
              {
                key: "contentLength",
                get: function() {
                  return this._stream._contentLength;
                },
              },
            ]),
            e
          );
        })(),
        d = (function() {
          function e(t, r, n) {
            o(this, e),
              (this._stream = t),
              (this._begin = r),
              (this._end = n),
              (this._queuedChunk = null),
              (this._requests = []),
              (this._done = !1),
              (this.onProgress = null);
          }
          return (
            u(e, [
              {
                key: "_enqueue",
                value: function(e) {
                  if (!this._done) {
                    if (0 === this._requests.length) this._queuedChunk = e;
                    else {
                      var t = this._requests.shift();
                      t.resolve({ value: e, done: !1 }),
                        this._requests.forEach(function(e) {
                          e.resolve({ value: void 0, done: !0 });
                        }),
                        (this._requests = []);
                    }
                    (this._done = !0), this._stream._removeRangeReader(this);
                  }
                },
              },
              {
                key: "read",
                value: (function() {
                  function e() {
                    return t.apply(this, arguments);
                  }
                  var t = a(
                    c["default"].mark(function r() {
                      var e, t;
                      return c["default"].wrap(
                        function(r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                if (!this._queuedChunk) {
                                  r.next = 4;
                                  break;
                                }
                                return (
                                  (e = this._queuedChunk),
                                  (this._queuedChunk = null),
                                  r.abrupt("return", { value: e, done: !1 })
                                );
                              case 4:
                                if (!this._done) {
                                  r.next = 6;
                                  break;
                                }
                                return r.abrupt("return", {
                                  value: void 0,
                                  done: !0,
                                });
                              case 6:
                                return (
                                  (t = (0, l.createPromiseCapability)()),
                                  this._requests.push(t),
                                  r.abrupt("return", t.promise)
                                );
                              case 9:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        this
                      );
                    })
                  );
                  return e;
                })(),
              },
              {
                key: "cancel",
                value: function(e) {
                  (this._done = !0),
                    this._requests.forEach(function(e) {
                      e.resolve({ value: void 0, done: !0 });
                    }),
                    (this._requests = []),
                    this._stream._removeRangeReader(this);
                },
              },
              {
                key: "isStreamingSupported",
                get: function() {
                  return !1;
                },
              },
            ]),
            e
          );
        })();
    },
    function(e, t, r) {
      "use strict";
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function a(e, t, r) {
        return t && i(e.prototype, t), r && i(e, r), e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WebGLContext = void 0);
      var o = r(1),
        s = (function() {
          function e(t) {
            var r = t.enable,
              i = void 0 !== r && r;
            n(this, e), (this._enabled = i === !0);
          }
          return (
            a(e, [
              {
                key: "composeSMask",
                value: function(e) {
                  var t = e.layer,
                    r = e.mask,
                    n = e.properties;
                  return u.composeSMask(t, r, n);
                },
              },
              {
                key: "drawFigures",
                value: function(e) {
                  var t = e.width,
                    r = e.height,
                    n = e.backgroundColor,
                    i = e.figures,
                    a = e.context;
                  return u.drawFigures(t, r, n, i, a);
                },
              },
              {
                key: "clear",
                value: function() {
                  u.cleanup();
                },
              },
              {
                key: "isEnabled",
                get: function() {
                  var e = this._enabled;
                  return (
                    e && (e = u.tryInitGL()),
                    (0, o.shadow)(this, "isEnabled", e)
                  );
                },
              },
            ]),
            e
          );
        })();
      t.WebGLContext = s;
      var u = (function() {
        function e(e, t, r) {
          var n = e.createShader(r);
          e.shaderSource(n, t), e.compileShader(n);
          var i = e.getShaderParameter(n, e.COMPILE_STATUS);
          if (!i) {
            var a = e.getShaderInfoLog(n);
            throw new Error("Error during shader compilation: " + a);
          }
          return n;
        }
        function t(t, r) {
          return e(t, r, t.VERTEX_SHADER);
        }
        function r(t, r) {
          return e(t, r, t.FRAGMENT_SHADER);
        }
        function n(e, t) {
          for (var r = e.createProgram(), n = 0, i = t.length; n < i; ++n)
            e.attachShader(r, t[n]);
          e.linkProgram(r);
          var a = e.getProgramParameter(r, e.LINK_STATUS);
          if (!a) {
            var o = e.getProgramInfoLog(r);
            throw new Error("Error during program linking: " + o);
          }
          return r;
        }
        function i(e, t, r) {
          e.activeTexture(r);
          var n = e.createTexture();
          return (
            e.bindTexture(e.TEXTURE_2D, n),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST),
            e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t),
            n
          );
        }
        function a() {
          l ||
            ((h = document.createElement("canvas")),
            (l = h.getContext("webgl", { premultipliedalpha: !1 })));
        }
        function o() {
          var e, i;
          a(), (e = h), (h = null), (i = l), (l = null);
          var o = t(i, f),
            s = r(i, d),
            u = n(i, [o, s]);
          i.useProgram(u);
          var c = {};
          (c.gl = i),
            (c.canvas = e),
            (c.resolutionLocation = i.getUniformLocation(u, "u_resolution")),
            (c.positionLocation = i.getAttribLocation(u, "a_position")),
            (c.backdropLocation = i.getUniformLocation(u, "u_backdrop")),
            (c.subtypeLocation = i.getUniformLocation(u, "u_subtype"));
          var v = i.getAttribLocation(u, "a_texCoord"),
            g = i.getUniformLocation(u, "u_image"),
            m = i.getUniformLocation(u, "u_mask"),
            y = i.createBuffer();
          i.bindBuffer(i.ARRAY_BUFFER, y),
            i.bufferData(
              i.ARRAY_BUFFER,
              new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
              i.STATIC_DRAW
            ),
            i.enableVertexAttribArray(v),
            i.vertexAttribPointer(v, 2, i.FLOAT, !1, 0, 0),
            i.uniform1i(g, 0),
            i.uniform1i(m, 1),
            (p = c);
        }
        function s(e, t, r) {
          var n = e.width,
            a = e.height;
          p || o();
          var s = p,
            u = s.canvas,
            c = s.gl;
          (u.width = n),
            (u.height = a),
            c.viewport(0, 0, c.drawingBufferWidth, c.drawingBufferHeight),
            c.uniform2f(s.resolutionLocation, n, a),
            r.backdrop
              ? c.uniform4f(
                  s.resolutionLocation,
                  r.backdrop[0],
                  r.backdrop[1],
                  r.backdrop[2],
                  1
                )
              : c.uniform4f(s.resolutionLocation, 0, 0, 0, 0),
            c.uniform1i(s.subtypeLocation, "Luminosity" === r.subtype ? 1 : 0);
          var l = i(c, e, c.TEXTURE0),
            h = i(c, t, c.TEXTURE1),
            f = c.createBuffer();
          return (
            c.bindBuffer(c.ARRAY_BUFFER, f),
            c.bufferData(
              c.ARRAY_BUFFER,
              new Float32Array([0, 0, n, 0, 0, a, 0, a, n, 0, n, a]),
              c.STATIC_DRAW
            ),
            c.enableVertexAttribArray(s.positionLocation),
            c.vertexAttribPointer(s.positionLocation, 2, c.FLOAT, !1, 0, 0),
            c.clearColor(0, 0, 0, 0),
            c.enable(c.BLEND),
            c.blendFunc(c.ONE, c.ONE_MINUS_SRC_ALPHA),
            c.clear(c.COLOR_BUFFER_BIT),
            c.drawArrays(c.TRIANGLES, 0, 6),
            c.flush(),
            c.deleteTexture(l),
            c.deleteTexture(h),
            c.deleteBuffer(f),
            u
          );
        }
        function u() {
          var e, i;
          a(), (e = h), (h = null), (i = l), (l = null);
          var o = t(i, v),
            s = r(i, g),
            u = n(i, [o, s]);
          i.useProgram(u);
          var c = {};
          (c.gl = i),
            (c.canvas = e),
            (c.resolutionLocation = i.getUniformLocation(u, "u_resolution")),
            (c.scaleLocation = i.getUniformLocation(u, "u_scale")),
            (c.offsetLocation = i.getUniformLocation(u, "u_offset")),
            (c.positionLocation = i.getAttribLocation(u, "a_position")),
            (c.colorLocation = i.getAttribLocation(u, "a_color")),
            (m = c);
        }
        function c(e, t, r, n, i) {
          m || u();
          var a = m,
            o = a.canvas,
            s = a.gl;
          (o.width = e),
            (o.height = t),
            s.viewport(0, 0, s.drawingBufferWidth, s.drawingBufferHeight),
            s.uniform2f(a.resolutionLocation, e, t);
          var c,
            l,
            h,
            f = 0;
          for (c = 0, l = n.length; c < l; c++)
            switch (n[c].type) {
              case "lattice":
                (h = (n[c].coords.length / n[c].verticesPerRow) | 0),
                  (f += (h - 1) * (n[c].verticesPerRow - 1) * 6);
                break;
              case "triangles":
                f += n[c].coords.length;
            }
          var d = new Float32Array(2 * f),
            p = new Uint8Array(3 * f),
            v = i.coords,
            g = i.colors,
            y = 0,
            b = 0;
          for (c = 0, l = n.length; c < l; c++) {
            var _ = n[c],
              A = _.coords,
              S = _.colors;
            switch (_.type) {
              case "lattice":
                var w = _.verticesPerRow;
                h = (A.length / w) | 0;
                for (var k = 1; k < h; k++)
                  for (var x = k * w + 1, C = 1; C < w; C++, x++)
                    (d[y] = v[A[x - w - 1]]),
                      (d[y + 1] = v[A[x - w - 1] + 1]),
                      (d[y + 2] = v[A[x - w]]),
                      (d[y + 3] = v[A[x - w] + 1]),
                      (d[y + 4] = v[A[x - 1]]),
                      (d[y + 5] = v[A[x - 1] + 1]),
                      (p[b] = g[S[x - w - 1]]),
                      (p[b + 1] = g[S[x - w - 1] + 1]),
                      (p[b + 2] = g[S[x - w - 1] + 2]),
                      (p[b + 3] = g[S[x - w]]),
                      (p[b + 4] = g[S[x - w] + 1]),
                      (p[b + 5] = g[S[x - w] + 2]),
                      (p[b + 6] = g[S[x - 1]]),
                      (p[b + 7] = g[S[x - 1] + 1]),
                      (p[b + 8] = g[S[x - 1] + 2]),
                      (d[y + 6] = d[y + 2]),
                      (d[y + 7] = d[y + 3]),
                      (d[y + 8] = d[y + 4]),
                      (d[y + 9] = d[y + 5]),
                      (d[y + 10] = v[A[x]]),
                      (d[y + 11] = v[A[x] + 1]),
                      (p[b + 9] = p[b + 3]),
                      (p[b + 10] = p[b + 4]),
                      (p[b + 11] = p[b + 5]),
                      (p[b + 12] = p[b + 6]),
                      (p[b + 13] = p[b + 7]),
                      (p[b + 14] = p[b + 8]),
                      (p[b + 15] = g[S[x]]),
                      (p[b + 16] = g[S[x] + 1]),
                      (p[b + 17] = g[S[x] + 2]),
                      (y += 12),
                      (b += 18);
                break;
              case "triangles":
                for (var P = 0, R = A.length; P < R; P++)
                  (d[y] = v[A[P]]),
                    (d[y + 1] = v[A[P] + 1]),
                    (p[b] = g[S[P]]),
                    (p[b + 1] = g[S[P] + 1]),
                    (p[b + 2] = g[S[P] + 2]),
                    (y += 2),
                    (b += 3);
            }
          }
          r
            ? s.clearColor(r[0] / 255, r[1] / 255, r[2] / 255, 1)
            : s.clearColor(0, 0, 0, 0),
            s.clear(s.COLOR_BUFFER_BIT);
          var T = s.createBuffer();
          s.bindBuffer(s.ARRAY_BUFFER, T),
            s.bufferData(s.ARRAY_BUFFER, d, s.STATIC_DRAW),
            s.enableVertexAttribArray(a.positionLocation),
            s.vertexAttribPointer(a.positionLocation, 2, s.FLOAT, !1, 0, 0);
          var E = s.createBuffer();
          return (
            s.bindBuffer(s.ARRAY_BUFFER, E),
            s.bufferData(s.ARRAY_BUFFER, p, s.STATIC_DRAW),
            s.enableVertexAttribArray(a.colorLocation),
            s.vertexAttribPointer(
              a.colorLocation,
              3,
              s.UNSIGNED_BYTE,
              !1,
              0,
              0
            ),
            s.uniform2f(a.scaleLocation, i.scaleX, i.scaleY),
            s.uniform2f(a.offsetLocation, i.offsetX, i.offsetY),
            s.drawArrays(s.TRIANGLES, 0, f),
            s.flush(),
            s.deleteBuffer(T),
            s.deleteBuffer(E),
            o
          );
        }
        var l,
          h,
          f =
            "  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             ",
          d =
            "  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ",
          p = null,
          v =
            "  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             ",
          g =
            "  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ",
          m = null;
        return {
          tryInitGL: function() {
            try {
              return a(), !!l;
            } catch (e) {}
            return !1;
          },
          composeSMask: s,
          drawFigures: c,
          cleanup: function() {
            p && p.canvas && ((p.canvas.width = 0), (p.canvas.height = 0)),
              m && m.canvas && ((m.canvas.width = 0), (m.canvas.height = 0)),
              (p = null),
              (m = null);
          },
        };
      })();
    },
    function(e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.renderTextLayer = void 0);
      var i = r(1),
        a = n(r(3)),
        o = (function() {
          function e(e) {
            return !h.test(e);
          }
          function t(t, r, n) {
            var a = document.createElement("span"),
              o = {
                angle: 0,
                canvasWidth: 0,
                isWhitespace: !1,
                originalTransform: null,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                scale: 1,
              };
            if ((t._textDivs.push(a), e(r.str)))
              return (o.isWhitespace = !0), void t._textDivProperties.set(a, o);
            var s = i.Util.transform(t._viewport.transform, r.transform),
              u = Math.atan2(s[1], s[0]),
              c = n[r.fontName];
            c.vertical && (u += Math.PI / 2);
            var l = Math.sqrt(s[2] * s[2] + s[3] * s[3]),
              h = l;
            c.ascent
              ? (h = c.ascent * h)
              : c.descent && (h = (1 + c.descent) * h);
            var f, d;
            if (
              (0 === u
                ? ((f = s[4]), (d = s[5] - h))
                : ((f = s[4] + h * Math.sin(u)), (d = s[5] - h * Math.cos(u))),
              (a.style.left = "".concat(f, "px")),
              (a.style.top = "".concat(d, "px")),
              (a.style.fontSize = "".concat(l, "px")),
              (a.style.fontFamily = c.fontFamily),
              (a.textContent = r.str),
              t._fontInspectorEnabled && (a.dataset.fontName = r.fontName),
              0 !== u && (o.angle = u * (180 / Math.PI)),
              r.str.length > 1 &&
                (c.vertical
                  ? (o.canvasWidth = r.height * t._viewport.scale)
                  : (o.canvasWidth = r.width * t._viewport.scale)),
              t._textDivProperties.set(a, o),
              t._textContentStream && t._layoutText(a),
              t._enhanceTextSelection)
            ) {
              var p = 1,
                v = 0;
              0 !== u && ((p = Math.cos(u)), (v = Math.sin(u)));
              var g,
                m,
                y = (c.vertical ? r.height : r.width) * t._viewport.scale,
                b = l;
              0 !== u
                ? ((g = [p, v, -v, p, f, d]),
                  (m = i.Util.getAxialAlignedBoundingBox([0, 0, y, b], g)))
                : (m = [f, d, f + y, d + b]),
                t._bounds.push({
                  left: m[0],
                  top: m[1],
                  right: m[2],
                  bottom: m[3],
                  div: a,
                  size: [y, b],
                  m: g,
                });
            }
          }
          function r(e) {
            if (!e._canceled) {
              var t = e._textDivs,
                r = e._capability,
                n = t.length;
              if (n > l) return (e._renderingDone = !0), void r.resolve();
              if (!e._textContentStream)
                for (var i = 0; i < n; i++) e._layoutText(t[i]);
              (e._renderingDone = !0), r.resolve();
            }
          }
          function n(e) {
            for (
              var t = e._bounds,
                r = e._viewport,
                n = o(r.width, r.height, t),
                a = 0;
              a < n.length;
              a++
            ) {
              var s = t[a].div,
                u = e._textDivProperties.get(s);
              if (0 !== u.angle) {
                var c = n[a],
                  l = t[a],
                  h = l.m,
                  f = h[0],
                  d = h[1],
                  p = [[0, 0], [0, l.size[1]], [l.size[0], 0], l.size],
                  v = new Float64Array(64);
                p.forEach(function(e, t) {
                  var r = i.Util.applyTransform(e, h);
                  (v[t + 0] = f && (c.left - r[0]) / f),
                    (v[t + 4] = d && (c.top - r[1]) / d),
                    (v[t + 8] = f && (c.right - r[0]) / f),
                    (v[t + 12] = d && (c.bottom - r[1]) / d),
                    (v[t + 16] = d && (c.left - r[0]) / -d),
                    (v[t + 20] = f && (c.top - r[1]) / f),
                    (v[t + 24] = d && (c.right - r[0]) / -d),
                    (v[t + 28] = f && (c.bottom - r[1]) / f),
                    (v[t + 32] = f && (c.left - r[0]) / -f),
                    (v[t + 36] = d && (c.top - r[1]) / -d),
                    (v[t + 40] = f && (c.right - r[0]) / -f),
                    (v[t + 44] = d && (c.bottom - r[1]) / -d),
                    (v[t + 48] = d && (c.left - r[0]) / d),
                    (v[t + 52] = f && (c.top - r[1]) / -f),
                    (v[t + 56] = d && (c.right - r[0]) / d),
                    (v[t + 60] = f && (c.bottom - r[1]) / -f);
                });
                var g = function(e, t, r) {
                    for (var n = 0, i = 0; i < r; i++) {
                      var a = e[t++];
                      a > 0 && (n = n ? Math.min(a, n) : a);
                    }
                    return n;
                  },
                  m = 1 + Math.min(Math.abs(f), Math.abs(d));
                (u.paddingLeft = g(v, 32, 16) / m),
                  (u.paddingTop = g(v, 48, 16) / m),
                  (u.paddingRight = g(v, 0, 16) / m),
                  (u.paddingBottom = g(v, 16, 16) / m),
                  e._textDivProperties.set(s, u);
              } else
                (u.paddingLeft = t[a].left - n[a].left),
                  (u.paddingTop = t[a].top - n[a].top),
                  (u.paddingRight = n[a].right - t[a].right),
                  (u.paddingBottom = n[a].bottom - t[a].bottom),
                  e._textDivProperties.set(s, u);
            }
          }
          function o(e, t, r) {
            var n = r.map(function(e, t) {
              return {
                x1: e.left,
                y1: e.top,
                x2: e.right,
                y2: e.bottom,
                index: t,
                x1New: void 0,
                x2New: void 0,
              };
            });
            s(e, n);
            var i = new Array(r.length);
            return (
              n.forEach(function(e) {
                var t = e.index;
                i[t] = { left: e.x1New, top: 0, right: e.x2New, bottom: 0 };
              }),
              r.map(function(t, r) {
                var a = i[r],
                  o = n[r];
                (o.x1 = t.top),
                  (o.y1 = e - a.right),
                  (o.x2 = t.bottom),
                  (o.y2 = e - a.left),
                  (o.index = r),
                  (o.x1New = void 0),
                  (o.x2New = void 0);
              }),
              s(t, n),
              n.forEach(function(e) {
                var t = e.index;
                (i[t].top = e.x1New), (i[t].bottom = e.x2New);
              }),
              i
            );
          }
          function s(e, t) {
            t.sort(function(e, t) {
              return e.x1 - t.x1 || e.index - t.index;
            });
            var r = {
                x1: -(1 / 0),
                y1: -(1 / 0),
                x2: 0,
                y2: 1 / 0,
                index: -1,
                x1New: 0,
                x2New: 0,
              },
              n = [{ start: -(1 / 0), end: 1 / 0, boundary: r }];
            t.forEach(function(e) {
              for (var t = 0; t < n.length && n[t].end <= e.y1; ) t++;
              for (var r = n.length - 1; r >= 0 && n[r].start >= e.y2; ) r--;
              var i,
                a,
                o,
                s,
                u = -(1 / 0);
              for (o = t; o <= r; o++) {
                (i = n[o]), (a = i.boundary);
                var c;
                (c =
                  a.x2 > e.x1
                    ? a.index > e.index
                      ? a.x1New
                      : e.x1
                    : void 0 === a.x2New
                    ? (a.x2 + e.x1) / 2
                    : a.x2New),
                  c > u && (u = c);
              }
              for (e.x1New = u, o = t; o <= r; o++)
                (i = n[o]),
                  (a = i.boundary),
                  void 0 === a.x2New
                    ? a.x2 > e.x1
                      ? a.index > e.index && (a.x2New = a.x2)
                      : (a.x2New = u)
                    : a.x2New > u && (a.x2New = Math.max(u, a.x2));
              var l = [],
                h = null;
              for (o = t; o <= r; o++) {
                (i = n[o]), (a = i.boundary);
                var f = a.x2 > e.x2 ? a : e;
                h === f
                  ? (l[l.length - 1].end = i.end)
                  : (l.push({ start: i.start, end: i.end, boundary: f }),
                    (h = f));
              }
              for (
                n[t].start < e.y1 &&
                  ((l[0].start = e.y1),
                  l.unshift({
                    start: n[t].start,
                    end: e.y1,
                    boundary: n[t].boundary,
                  })),
                  e.y2 < n[r].end &&
                    ((l[l.length - 1].end = e.y2),
                    l.push({
                      start: e.y2,
                      end: n[r].end,
                      boundary: n[r].boundary,
                    })),
                  o = t;
                o <= r;
                o++
              )
                if (((i = n[o]), (a = i.boundary), void 0 === a.x2New)) {
                  var d = !1;
                  for (s = t - 1; !d && s >= 0 && n[s].start >= a.y1; s--)
                    d = n[s].boundary === a;
                  for (s = r + 1; !d && s < n.length && n[s].end <= a.y2; s++)
                    d = n[s].boundary === a;
                  for (s = 0; !d && s < l.length; s++) d = l[s].boundary === a;
                  d || (a.x2New = u);
                }
              Array.prototype.splice.apply(n, [t, r - t + 1].concat(l));
            }),
              n.forEach(function(t) {
                var r = t.boundary;
                void 0 === r.x2New && (r.x2New = Math.max(e, r.x2));
              });
          }
          function u(e) {
            var t = this,
              r = e.textContent,
              n = e.textContentStream,
              o = e.container,
              s = e.viewport,
              u = e.textDivs,
              c = e.textContentItemsStr,
              l = e.enhanceTextSelection;
            (this._textContent = r),
              (this._textContentStream = n),
              (this._container = o),
              (this._viewport = s),
              (this._textDivs = u || []),
              (this._textContentItemsStr = c || []),
              (this._enhanceTextSelection = !!l),
              (this._fontInspectorEnabled = !(
                !a["default"].FontInspector ||
                !a["default"].FontInspector.enabled
              )),
              (this._reader = null),
              (this._layoutTextLastFontSize = null),
              (this._layoutTextLastFontFamily = null),
              (this._layoutTextCtx = null),
              (this._textDivProperties = new WeakMap()),
              (this._renderingDone = !1),
              (this._canceled = !1),
              (this._capability = (0, i.createPromiseCapability)()),
              (this._renderTimer = null),
              (this._bounds = []),
              this._capability.promise["finally"](function() {
                t._layoutTextCtx &&
                  ((t._layoutTextCtx.canvas.width = 0),
                  (t._layoutTextCtx.canvas.height = 0),
                  (t._layoutTextCtx = null));
              })["catch"](function() {});
          }
          function c(e) {
            var t = new u({
              textContent: e.textContent,
              textContentStream: e.textContentStream,
              container: e.container,
              viewport: e.viewport,
              textDivs: e.textDivs,
              textContentItemsStr: e.textContentItemsStr,
              enhanceTextSelection: e.enhanceTextSelection,
            });
            return t._render(e.timeout), t;
          }
          var l = 1e5,
            h = /\S/;
          return (
            (u.prototype = {
              get promise() {
                return this._capability.promise;
              },
              cancel: function() {
                (this._canceled = !0),
                  this._reader &&
                    (this._reader.cancel(
                      new i.AbortException("TextLayer task cancelled.")
                    ),
                    (this._reader = null)),
                  null !== this._renderTimer &&
                    (clearTimeout(this._renderTimer),
                    (this._renderTimer = null)),
                  this._capability.reject(
                    new Error("TextLayer task cancelled.")
                  );
              },
              _processItems: function(e, r) {
                for (var n = 0, i = e.length; n < i; n++)
                  this._textContentItemsStr.push(e[n].str), t(this, e[n], r);
              },
              _layoutText: function(e) {
                var t = this._textDivProperties.get(e);
                if (!t.isWhitespace) {
                  var r = "";
                  if (0 !== t.canvasWidth) {
                    var n = e.style,
                      i = n.fontSize,
                      a = n.fontFamily;
                    (i === this._layoutTextLastFontSize &&
                      a === this._layoutTextLastFontFamily) ||
                      ((this._layoutTextCtx.font = "".concat(i, " ").concat(a)),
                      (this._layoutTextLastFontSize = i),
                      (this._layoutTextLastFontFamily = a));
                    var o = this._layoutTextCtx.measureText(e.textContent),
                      s = o.width;
                    s > 0 &&
                      ((t.scale = t.canvasWidth / s),
                      (r = "scaleX(".concat(t.scale, ")")));
                  }
                  0 !== t.angle &&
                    (r = "rotate(".concat(t.angle, "deg) ").concat(r)),
                    r.length > 0 &&
                      (this._enhanceTextSelection && (t.originalTransform = r),
                      (e.style.transform = r)),
                    this._textDivProperties.set(e, t),
                    this._container.appendChild(e);
                }
              },
              _render: function(e) {
                var t = this,
                  n = (0, i.createPromiseCapability)(),
                  a = Object.create(null),
                  o = document.createElement("canvas");
                if (
                  ((o.mozOpaque = !0),
                  (this._layoutTextCtx = o.getContext("2d", { alpha: !1 })),
                  this._textContent)
                ) {
                  var s = this._textContent.items,
                    u = this._textContent.styles;
                  this._processItems(s, u), n.resolve();
                } else {
                  if (!this._textContentStream)
                    throw new Error(
                      'Neither "textContent" nor "textContentStream" parameters specified.'
                    );
                  var c = function l() {
                    t._reader.read().then(function(e) {
                      var r = e.value,
                        i = e.done;
                      return i
                        ? void n.resolve()
                        : (Object.assign(a, r.styles),
                          t._processItems(r.items, a),
                          void l());
                    }, n.reject);
                  };
                  (this._reader = this._textContentStream.getReader()), c();
                }
                n.promise.then(function() {
                  (a = null),
                    e
                      ? (t._renderTimer = setTimeout(function() {
                          r(t), (t._renderTimer = null);
                        }, e))
                      : r(t);
                }, this._capability.reject);
              },
              expandTextDivs: function(e) {
                if (this._enhanceTextSelection && this._renderingDone) {
                  null !== this._bounds && (n(this), (this._bounds = null));
                  for (
                    var t = "0 0 0 0",
                      r = [],
                      i = [],
                      a = 0,
                      o = this._textDivs.length;
                    a < o;
                    a++
                  ) {
                    var s = this._textDivs[a],
                      u = this._textDivProperties.get(s);
                    if (!u.isWhitespace)
                      if (e) {
                        (r.length = 0),
                          (i.length = 0),
                          u.originalTransform && r.push(u.originalTransform),
                          u.paddingTop > 0
                            ? (i.push("".concat(u.paddingTop, "px")),
                              r.push(
                                "translateY(".concat(-u.paddingTop, "px)")
                              ))
                            : i.push(0),
                          u.paddingRight > 0
                            ? i.push("".concat(u.paddingRight / u.scale, "px"))
                            : i.push(0),
                          u.paddingBottom > 0
                            ? i.push("".concat(u.paddingBottom, "px"))
                            : i.push(0),
                          u.paddingLeft > 0
                            ? (i.push("".concat(u.paddingLeft / u.scale, "px")),
                              r.push(
                                "translateX(".concat(
                                  -u.paddingLeft / u.scale,
                                  "px)"
                                )
                              ))
                            : i.push(0);
                        var c = i.join(" ");
                        c !== t && (s.style.padding = c),
                          r.length && (s.style.transform = r.join(" "));
                      } else
                        (s.style.padding = null),
                          (s.style.transform = u.originalTransform);
                  }
                }
              },
            }),
            c
          );
        })();
      t.renderTextLayer = o;
    },
    function(e, t, r) {
      "use strict";
      function n(e, t, r) {
        return (n =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function(e, t, r) {
                var n = i(e, t);
                if (n) {
                  var a = Object.getOwnPropertyDescriptor(n, t);
                  return a.get ? a.get.call(r) : a.value;
                }
              })(e, t, r || e);
      }
      function i(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) &&
          ((e = u(e)), null !== e);

        );
        return e;
      }
      function a(e) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function o(e, t) {
        return !t || ("object" !== a(t) && "function" != typeof t) ? s(e) : t;
      }
      function s(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function u(e) {
        return (u = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && l(e, t);
      }
      function l(e, t) {
        return (l =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function h(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function f(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function d(e, t, r) {
        return t && f(e.prototype, t), r && f(e, r), e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.AnnotationLayer = void 0);
      var p = r(183),
        v = r(1),
        g = (function() {
          function e() {
            h(this, e);
          }
          return (
            d(e, null, [
              {
                key: "create",
                value: function(e) {
                  var t = e.data.annotationType;
                  switch (t) {
                    case v.AnnotationType.LINK:
                      return new y(e);
                    case v.AnnotationType.TEXT:
                      return new b(e);
                    case v.AnnotationType.WIDGET:
                      var r = e.data.fieldType;
                      switch (r) {
                        case "Tx":
                          return new A(e);
                        case "Btn":
                          return e.data.radioButton
                            ? new w(e)
                            : e.data.checkBox
                            ? new S(e)
                            : new k(e);
                        case "Ch":
                          return new x(e);
                      }
                      return new _(e);
                    case v.AnnotationType.POPUP:
                      return new C(e);
                    case v.AnnotationType.FREETEXT:
                      return new R(e);
                    case v.AnnotationType.LINE:
                      return new T(e);
                    case v.AnnotationType.SQUARE:
                      return new E(e);
                    case v.AnnotationType.CIRCLE:
                      return new O(e);
                    case v.AnnotationType.POLYLINE:
                      return new L(e);
                    case v.AnnotationType.CARET:
                      return new I(e);
                    case v.AnnotationType.INK:
                      return new j(e);
                    case v.AnnotationType.POLYGON:
                      return new F(e);
                    case v.AnnotationType.HIGHLIGHT:
                      return new M(e);
                    case v.AnnotationType.UNDERLINE:
                      return new N(e);
                    case v.AnnotationType.SQUIGGLY:
                      return new D(e);
                    case v.AnnotationType.STRIKEOUT:
                      return new q(e);
                    case v.AnnotationType.STAMP:
                      return new U(e);
                    case v.AnnotationType.FILEATTACHMENT:
                      return new W(e);
                    default:
                      return new m(e);
                  }
                },
              },
            ]),
            e
          );
        })(),
        m = (function() {
          function e(t) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            h(this, e),
              (this.isRenderable = r),
              (this.data = t.data),
              (this.layer = t.layer),
              (this.page = t.page),
              (this.viewport = t.viewport),
              (this.linkService = t.linkService),
              (this.downloadManager = t.downloadManager),
              (this.imageResourcesPath = t.imageResourcesPath),
              (this.renderInteractiveForms = t.renderInteractiveForms),
              (this.svgFactory = t.svgFactory),
              r && (this.container = this._createContainer(n));
          }
          return (
            d(e, [
              {
                key: "_createContainer",
                value: function() {
                  var e =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0],
                    t = this.data,
                    r = this.page,
                    n = this.viewport,
                    i = document.createElement("section"),
                    a = t.rect[2] - t.rect[0],
                    o = t.rect[3] - t.rect[1];
                  i.setAttribute("data-annotation-id", t.id);
                  var s = v.Util.normalizeRect([
                    t.rect[0],
                    r.view[3] - t.rect[1] + r.view[1],
                    t.rect[2],
                    r.view[3] - t.rect[3] + r.view[1],
                  ]);
                  if (
                    ((i.style.transform = "matrix(".concat(
                      n.transform.join(","),
                      ")"
                    )),
                    (i.style.transformOrigin = "-"
                      .concat(s[0], "px -")
                      .concat(s[1], "px")),
                    !e && t.borderStyle.width > 0)
                  ) {
                    (i.style.borderWidth = "".concat(
                      t.borderStyle.width,
                      "px"
                    )),
                      t.borderStyle.style !==
                        v.AnnotationBorderStyleType.UNDERLINE &&
                        ((a -= 2 * t.borderStyle.width),
                        (o -= 2 * t.borderStyle.width));
                    var u = t.borderStyle.horizontalCornerRadius,
                      c = t.borderStyle.verticalCornerRadius;
                    if (u > 0 || c > 0) {
                      var l = "".concat(u, "px / ").concat(c, "px");
                      i.style.borderRadius = l;
                    }
                    switch (t.borderStyle.style) {
                      case v.AnnotationBorderStyleType.SOLID:
                        i.style.borderStyle = "solid";
                        break;
                      case v.AnnotationBorderStyleType.DASHED:
                        i.style.borderStyle = "dashed";
                        break;
                      case v.AnnotationBorderStyleType.BEVELED:
                        (0, v.warn)("Unimplemented border style: beveled");
                        break;
                      case v.AnnotationBorderStyleType.INSET:
                        (0, v.warn)("Unimplemented border style: inset");
                        break;
                      case v.AnnotationBorderStyleType.UNDERLINE:
                        i.style.borderBottomStyle = "solid";
                    }
                    t.color
                      ? (i.style.borderColor = v.Util.makeCssRgb(
                          0 | t.color[0],
                          0 | t.color[1],
                          0 | t.color[2]
                        ))
                      : (i.style.borderWidth = 0);
                  }
                  return (
                    (i.style.left = "".concat(s[0], "px")),
                    (i.style.top = "".concat(s[1], "px")),
                    (i.style.width = "".concat(a, "px")),
                    (i.style.height = "".concat(o, "px")),
                    i
                  );
                },
              },
              {
                key: "_createPopup",
                value: function(e, t, r) {
                  t ||
                    ((t = document.createElement("div")),
                    (t.style.height = e.style.height),
                    (t.style.width = e.style.width),
                    e.appendChild(t));
                  var n = new P({
                      container: e,
                      trigger: t,
                      color: r.color,
                      title: r.title,
                      modificationDate: r.modificationDate,
                      contents: r.contents,
                      hideWrapper: !0,
                    }),
                    i = n.render();
                  (i.style.left = e.style.width), e.appendChild(i);
                },
              },
              {
                key: "render",
                value: function() {
                  (0, v.unreachable)(
                    "Abstract method `AnnotationElement.render` called"
                  );
                },
              },
            ]),
            e
          );
        })(),
        y = (function(e) {
          function t(e) {
            h(this, t);
            var r = !!(e.data.url || e.data.dest || e.data.action);
            return o(this, u(t).call(this, e, r));
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  this.container.className = "linkAnnotation";
                  var e = this.data,
                    t = this.linkService,
                    r = document.createElement("a");
                  return (
                    e.url
                      ? (0, p.addLinkAttributes)(r, {
                          url: e.url,
                          target: e.newWindow
                            ? p.LinkTarget.BLANK
                            : t.externalLinkTarget,
                          rel: t.externalLinkRel,
                          enabled: t.externalLinkEnabled,
                        })
                      : e.action
                      ? this._bindNamedAction(r, e.action)
                      : this._bindLink(r, e.dest),
                    this.container.appendChild(r),
                    this.container
                  );
                },
              },
              {
                key: "_bindLink",
                value: function(e, t) {
                  var r = this;
                  (e.href = this.linkService.getDestinationHash(t)),
                    (e.onclick = function() {
                      return t && r.linkService.navigateTo(t), !1;
                    }),
                    t && (e.className = "internalLink");
                },
              },
              {
                key: "_bindNamedAction",
                value: function(e, t) {
                  var r = this;
                  (e.href = this.linkService.getAnchorUrl("")),
                    (e.onclick = function() {
                      return r.linkService.executeNamedAction(t), !1;
                    }),
                    (e.className = "internalLink");
                },
              },
            ]),
            t
          );
        })(m),
        b = (function(e) {
          function t(e) {
            h(this, t);
            var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
            return o(this, u(t).call(this, e, r));
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  this.container.className = "textAnnotation";
                  var e = document.createElement("img");
                  return (
                    (e.style.height = this.container.style.height),
                    (e.style.width = this.container.style.width),
                    (e.src =
                      this.imageResourcesPath +
                      "annotation-" +
                      this.data.name.toLowerCase() +
                      ".svg"),
                    (e.alt = "[{{type}} Annotation]"),
                    (e.dataset.l10nId = "text_annotation_type"),
                    (e.dataset.l10nArgs = JSON.stringify({
                      type: this.data.name,
                    })),
                    this.data.hasPopup ||
                      this._createPopup(this.container, e, this.data),
                    this.container.appendChild(e),
                    this.container
                  );
                },
              },
            ]),
            t
          );
        })(m),
        _ = (function(e) {
          function t() {
            return h(this, t), o(this, u(t).apply(this, arguments));
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  return this.container;
                },
              },
            ]),
            t
          );
        })(m),
        A = (function(e) {
          function t(e) {
            h(this, t);
            var r =
              e.renderInteractiveForms ||
              (!e.data.hasAppearance && !!e.data.fieldValue);
            return o(this, u(t).call(this, e, r));
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  var e = ["left", "center", "right"];
                  this.container.className = "textWidgetAnnotation";
                  var t = null;
                  if (this.renderInteractiveForms) {
                    if (
                      (this.data.multiLine
                        ? ((t = document.createElement("textarea")),
                          (t.textContent = this.data.fieldValue))
                        : ((t = document.createElement("input")),
                          (t.type = "text"),
                          t.setAttribute("value", this.data.fieldValue)),
                      (t.disabled = this.data.readOnly),
                      null !== this.data.maxLen &&
                        (t.maxLength = this.data.maxLen),
                      this.data.comb)
                    ) {
                      var r = this.data.rect[2] - this.data.rect[0],
                        n = r / this.data.maxLen;
                      t.classList.add("comb"),
                        (t.style.letterSpacing = "calc(".concat(
                          n,
                          "px - 1ch)"
                        ));
                    }
                  } else {
                    (t = document.createElement("div")),
                      (t.textContent = this.data.fieldValue),
                      (t.style.verticalAlign = "middle"),
                      (t.style.display = "table-cell");
                    var i = null;
                    this.data.fontRefName &&
                      this.page.commonObjs.has(this.data.fontRefName) &&
                      (i = this.page.commonObjs.get(this.data.fontRefName)),
                      this._setTextStyle(t, i);
                  }
                  return (
                    null !== this.data.textAlignment &&
                      (t.style.textAlign = e[this.data.textAlignment]),
                    this.container.appendChild(t),
                    this.container
                  );
                },
              },
              {
                key: "_setTextStyle",
                value: function(e, t) {
                  var r = e.style;
                  if (
                    ((r.fontSize = "".concat(this.data.fontSize, "px")),
                    (r.direction = this.data.fontDirection < 0 ? "rtl" : "ltr"),
                    t)
                  ) {
                    (r.fontWeight = t.black
                      ? t.bold
                        ? "900"
                        : "bold"
                      : t.bold
                      ? "bold"
                      : "normal"),
                      (r.fontStyle = t.italic ? "italic" : "normal");
                    var n = t.loadedName ? '"'.concat(t.loadedName, '", ') : "",
                      i = t.fallbackName || "Helvetica, sans-serif";
                    r.fontFamily = n + i;
                  }
                },
              },
            ]),
            t
          );
        })(_),
        S = (function(e) {
          function t(e) {
            return (
              h(this, t), o(this, u(t).call(this, e, e.renderInteractiveForms))
            );
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  this.container.className = "buttonWidgetAnnotation checkBox";
                  var e = document.createElement("input");
                  return (
                    (e.disabled = this.data.readOnly),
                    (e.type = "checkbox"),
                    this.data.fieldValue &&
                      "Off" !== this.data.fieldValue &&
                      e.setAttribute("checked", !0),
                    this.container.appendChild(e),
                    this.container
                  );
                },
              },
            ]),
            t
          );
        })(_),
        w = (function(e) {
          function t(e) {
            return (
              h(this, t), o(this, u(t).call(this, e, e.renderInteractiveForms))
            );
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  this.container.className =
                    "buttonWidgetAnnotation radioButton";
                  var e = document.createElement("input");
                  return (
                    (e.disabled = this.data.readOnly),
                    (e.type = "radio"),
                    (e.name = this.data.fieldName),
                    this.data.fieldValue === this.data.buttonValue &&
                      e.setAttribute("checked", !0),
                    this.container.appendChild(e),
                    this.container
                  );
                },
              },
            ]),
            t
          );
        })(_),
        k = (function(e) {
          function t() {
            return h(this, t), o(this, u(t).apply(this, arguments));
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  var e = n(u(t.prototype), "render", this).call(this);
                  return (e.className = "buttonWidgetAnnotation pushButton"), e;
                },
              },
            ]),
            t
          );
        })(y),
        x = (function(e) {
          function t(e) {
            return (
              h(this, t), o(this, u(t).call(this, e, e.renderInteractiveForms))
            );
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  this.container.className = "choiceWidgetAnnotation";
                  var e = document.createElement("select");
                  (e.disabled = this.data.readOnly),
                    this.data.combo ||
                      ((e.size = this.data.options.length),
                      this.data.multiSelect && (e.multiple = !0));
                  var t = !0,
                    r = !1,
                    n = void 0;
                  try {
                    for (
                      var i, a = this.data.options[Symbol.iterator]();
                      !(t = (i = a.next()).done);
                      t = !0
                    ) {
                      var o = i.value,
                        s = document.createElement("option");
                      (s.textContent = o.displayValue),
                        (s.value = o.exportValue),
                        this.data.fieldValue.includes(o.displayValue) &&
                          s.setAttribute("selected", !0),
                        e.appendChild(s);
                    }
                  } catch (u) {
                    (r = !0), (n = u);
                  } finally {
                    try {
                      t || null == a["return"] || a["return"]();
                    } finally {
                      if (r) throw n;
                    }
                  }
                  return this.container.appendChild(e), this.container;
                },
              },
            ]),
            t
          );
        })(_),
        C = (function(e) {
          function t(e) {
            h(this, t);
            var r = !(!e.data.title && !e.data.contents);
            return o(this, u(t).call(this, e, r));
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  var e = [
                    "Line",
                    "Square",
                    "Circle",
                    "PolyLine",
                    "Polygon",
                    "Ink",
                  ];
                  if (
                    ((this.container.className = "popupAnnotation"),
                    e.includes(this.data.parentType))
                  )
                    return this.container;
                  var t = '[data-annotation-id="'.concat(
                      this.data.parentId,
                      '"]'
                    ),
                    r = this.layer.querySelector(t);
                  if (!r) return this.container;
                  var n = new P({
                      container: this.container,
                      trigger: r,
                      color: this.data.color,
                      title: this.data.title,
                      modificationDate: this.data.modificationDate,
                      contents: this.data.contents,
                    }),
                    i = parseFloat(r.style.left),
                    a = parseFloat(r.style.width);
                  return (
                    (this.container.style.transformOrigin = "-"
                      .concat(i + a, "px -")
                      .concat(r.style.top)),
                    (this.container.style.left = "".concat(i + a, "px")),
                    this.container.appendChild(n.render()),
                    this.container
                  );
                },
              },
            ]),
            t
          );
        })(m),
        P = (function() {
          function e(t) {
            h(this, e),
              (this.container = t.container),
              (this.trigger = t.trigger),
              (this.color = t.color),
              (this.title = t.title),
              (this.modificationDate = t.modificationDate),
              (this.contents = t.contents),
              (this.hideWrapper = t.hideWrapper || !1),
              (this.pinned = !1);
          }
          return (
            d(e, [
              {
                key: "render",
                value: function() {
                  var e = 0.7,
                    t = document.createElement("div");
                  (t.className = "popupWrapper"),
                    (this.hideElement = this.hideWrapper ? t : this.container),
                    this.hideElement.setAttribute("hidden", !0);
                  var r = document.createElement("div");
                  r.className = "popup";
                  var n = this.color;
                  if (n) {
                    var i = e * (255 - n[0]) + n[0],
                      a = e * (255 - n[1]) + n[1],
                      o = e * (255 - n[2]) + n[2];
                    r.style.backgroundColor = v.Util.makeCssRgb(
                      0 | i,
                      0 | a,
                      0 | o
                    );
                  }
                  var s = document.createElement("h1");
                  (s.textContent = this.title), r.appendChild(s);
                  var u = p.PDFDateString.toDateObject(this.modificationDate);
                  if (u) {
                    var c = document.createElement("span");
                    (c.textContent = "{{date}}, {{time}}"),
                      (c.dataset.l10nId = "annotation_date_string"),
                      (c.dataset.l10nArgs = JSON.stringify({
                        date: u.toLocaleDateString(),
                        time: u.toLocaleTimeString(),
                      })),
                      r.appendChild(c);
                  }
                  var l = this._formatContents(this.contents);
                  return (
                    r.appendChild(l),
                    this.trigger.addEventListener(
                      "click",
                      this._toggle.bind(this)
                    ),
                    this.trigger.addEventListener(
                      "mouseover",
                      this._show.bind(this, !1)
                    ),
                    this.trigger.addEventListener(
                      "mouseout",
                      this._hide.bind(this, !1)
                    ),
                    r.addEventListener("click", this._hide.bind(this, !0)),
                    t.appendChild(r),
                    t
                  );
                },
              },
              {
                key: "_formatContents",
                value: function(e) {
                  for (
                    var t = document.createElement("p"),
                      r = e.split(/(?:\r\n?|\n)/),
                      n = 0,
                      i = r.length;
                    n < i;
                    ++n
                  ) {
                    var a = r[n];
                    t.appendChild(document.createTextNode(a)),
                      n < i - 1 && t.appendChild(document.createElement("br"));
                  }
                  return t;
                },
              },
              {
                key: "_toggle",
                value: function() {
                  this.pinned ? this._hide(!0) : this._show(!0);
                },
              },
              {
                key: "_show",
                value: function() {
                  var e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  e && (this.pinned = !0),
                    this.hideElement.hasAttribute("hidden") &&
                      (this.hideElement.removeAttribute("hidden"),
                      (this.container.style.zIndex += 1));
                },
              },
              {
                key: "_hide",
                value: function() {
                  var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  e && (this.pinned = !1),
                    this.hideElement.hasAttribute("hidden") ||
                      this.pinned ||
                      (this.hideElement.setAttribute("hidden", !0),
                      (this.container.style.zIndex -= 1));
                },
              },
            ]),
            e
          );
        })(),
        R = (function(e) {
          function t(e) {
            h(this, t);
            var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
            return o(this, u(t).call(this, e, r, !0));
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  return (
                    (this.container.className = "freeTextAnnotation"),
                    this.data.hasPopup ||
                      this._createPopup(this.container, null, this.data),
                    this.container
                  );
                },
              },
            ]),
            t
          );
        })(m),
        T = (function(e) {
          function t(e) {
            h(this, t);
            var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
            return o(this, u(t).call(this, e, r, !0));
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  this.container.className = "lineAnnotation";
                  var e = this.data,
                    t = e.rect[2] - e.rect[0],
                    r = e.rect[3] - e.rect[1],
                    n = this.svgFactory.create(t, r),
                    i = this.svgFactory.createElement("svg:line");
                  return (
                    i.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]),
                    i.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]),
                    i.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]),
                    i.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]),
                    i.setAttribute("stroke-width", e.borderStyle.width),
                    i.setAttribute("stroke", "transparent"),
                    n.appendChild(i),
                    this.container.append(n),
                    this._createPopup(this.container, i, e),
                    this.container
                  );
                },
              },
            ]),
            t
          );
        })(m),
        E = (function(e) {
          function t(e) {
            h(this, t);
            var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
            return o(this, u(t).call(this, e, r, !0));
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  this.container.className = "squareAnnotation";
                  var e = this.data,
                    t = e.rect[2] - e.rect[0],
                    r = e.rect[3] - e.rect[1],
                    n = this.svgFactory.create(t, r),
                    i = e.borderStyle.width,
                    a = this.svgFactory.createElement("svg:rect");
                  return (
                    a.setAttribute("x", i / 2),
                    a.setAttribute("y", i / 2),
                    a.setAttribute("width", t - i),
                    a.setAttribute("height", r - i),
                    a.setAttribute("stroke-width", i),
                    a.setAttribute("stroke", "transparent"),
                    a.setAttribute("fill", "none"),
                    n.appendChild(a),
                    this.container.append(n),
                    this._createPopup(this.container, a, e),
                    this.container
                  );
                },
              },
            ]),
            t
          );
        })(m),
        O = (function(e) {
          function t(e) {
            h(this, t);
            var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
            return o(this, u(t).call(this, e, r, !0));
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  this.container.className = "circleAnnotation";
                  var e = this.data,
                    t = e.rect[2] - e.rect[0],
                    r = e.rect[3] - e.rect[1],
                    n = this.svgFactory.create(t, r),
                    i = e.borderStyle.width,
                    a = this.svgFactory.createElement("svg:ellipse");
                  return (
                    a.setAttribute("cx", t / 2),
                    a.setAttribute("cy", r / 2),
                    a.setAttribute("rx", t / 2 - i / 2),
                    a.setAttribute("ry", r / 2 - i / 2),
                    a.setAttribute("stroke-width", i),
                    a.setAttribute("stroke", "transparent"),
                    a.setAttribute("fill", "none"),
                    n.appendChild(a),
                    this.container.append(n),
                    this._createPopup(this.container, a, e),
                    this.container
                  );
                },
              },
            ]),
            t
          );
        })(m),
        L = (function(e) {
          function t(e) {
            var r;
            h(this, t);
            var n = !!(e.data.hasPopup || e.data.title || e.data.contents);
            return (
              (r = o(this, u(t).call(this, e, n, !0))),
              (r.containerClassName = "polylineAnnotation"),
              (r.svgElementName = "svg:polyline"),
              r
            );
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  this.container.className = this.containerClassName;
                  var e = this.data,
                    t = e.rect[2] - e.rect[0],
                    r = e.rect[3] - e.rect[1],
                    n = this.svgFactory.create(t, r),
                    i = [],
                    a = !0,
                    o = !1,
                    s = void 0;
                  try {
                    for (
                      var u, c = e.vertices[Symbol.iterator]();
                      !(a = (u = c.next()).done);
                      a = !0
                    ) {
                      var l = u.value,
                        h = l.x - e.rect[0],
                        f = e.rect[3] - l.y;
                      i.push(h + "," + f);
                    }
                  } catch (d) {
                    (o = !0), (s = d);
                  } finally {
                    try {
                      a || null == c["return"] || c["return"]();
                    } finally {
                      if (o) throw s;
                    }
                  }
                  i = i.join(" ");
                  var p = this.svgFactory.createElement(this.svgElementName);
                  return (
                    p.setAttribute("points", i),
                    p.setAttribute("stroke-width", e.borderStyle.width),
                    p.setAttribute("stroke", "transparent"),
                    p.setAttribute("fill", "none"),
                    n.appendChild(p),
                    this.container.append(n),
                    this._createPopup(this.container, p, e),
                    this.container
                  );
                },
              },
            ]),
            t
          );
        })(m),
        F = (function(e) {
          function t(e) {
            var r;
            return (
              h(this, t),
              (r = o(this, u(t).call(this, e))),
              (r.containerClassName = "polygonAnnotation"),
              (r.svgElementName = "svg:polygon"),
              r
            );
          }
          return c(t, e), t;
        })(L),
        I = (function(e) {
          function t(e) {
            h(this, t);
            var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
            return o(this, u(t).call(this, e, r, !0));
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  return (
                    (this.container.className = "caretAnnotation"),
                    this.data.hasPopup ||
                      this._createPopup(this.container, null, this.data),
                    this.container
                  );
                },
              },
            ]),
            t
          );
        })(m),
        j = (function(e) {
          function t(e) {
            var r;
            h(this, t);
            var n = !!(e.data.hasPopup || e.data.title || e.data.contents);
            return (
              (r = o(this, u(t).call(this, e, n, !0))),
              (r.containerClassName = "inkAnnotation"),
              (r.svgElementName = "svg:polyline"),
              r
            );
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  this.container.className = this.containerClassName;
                  var e = this.data,
                    t = e.rect[2] - e.rect[0],
                    r = e.rect[3] - e.rect[1],
                    n = this.svgFactory.create(t, r),
                    i = !0,
                    a = !1,
                    o = void 0;
                  try {
                    for (
                      var s, u = e.inkLists[Symbol.iterator]();
                      !(i = (s = u.next()).done);
                      i = !0
                    ) {
                      var c = s.value,
                        l = [],
                        h = !0,
                        f = !1,
                        d = void 0;
                      try {
                        for (
                          var p, v = c[Symbol.iterator]();
                          !(h = (p = v.next()).done);
                          h = !0
                        ) {
                          var g = p.value,
                            m = g.x - e.rect[0],
                            y = e.rect[3] - g.y;
                          l.push("".concat(m, ",").concat(y));
                        }
                      } catch (b) {
                        (f = !0), (d = b);
                      } finally {
                        try {
                          h || null == v["return"] || v["return"]();
                        } finally {
                          if (f) throw d;
                        }
                      }
                      l = l.join(" ");
                      var _ = this.svgFactory.createElement(
                        this.svgElementName
                      );
                      _.setAttribute("points", l),
                        _.setAttribute("stroke-width", e.borderStyle.width),
                        _.setAttribute("stroke", "transparent"),
                        _.setAttribute("fill", "none"),
                        this._createPopup(this.container, _, e),
                        n.appendChild(_);
                    }
                  } catch (b) {
                    (a = !0), (o = b);
                  } finally {
                    try {
                      i || null == u["return"] || u["return"]();
                    } finally {
                      if (a) throw o;
                    }
                  }
                  return this.container.append(n), this.container;
                },
              },
            ]),
            t
          );
        })(m),
        M = (function(e) {
          function t(e) {
            h(this, t);
            var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
            return o(this, u(t).call(this, e, r, !0));
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  return (
                    (this.container.className = "highlightAnnotation"),
                    this.data.hasPopup ||
                      this._createPopup(this.container, null, this.data),
                    this.container
                  );
                },
              },
            ]),
            t
          );
        })(m),
        N = (function(e) {
          function t(e) {
            h(this, t);
            var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
            return o(this, u(t).call(this, e, r, !0));
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  return (
                    (this.container.className = "underlineAnnotation"),
                    this.data.hasPopup ||
                      this._createPopup(this.container, null, this.data),
                    this.container
                  );
                },
              },
            ]),
            t
          );
        })(m),
        D = (function(e) {
          function t(e) {
            h(this, t);
            var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
            return o(this, u(t).call(this, e, r, !0));
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  return (
                    (this.container.className = "squigglyAnnotation"),
                    this.data.hasPopup ||
                      this._createPopup(this.container, null, this.data),
                    this.container
                  );
                },
              },
            ]),
            t
          );
        })(m),
        q = (function(e) {
          function t(e) {
            h(this, t);
            var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
            return o(this, u(t).call(this, e, r, !0));
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  return (
                    (this.container.className = "strikeoutAnnotation"),
                    this.data.hasPopup ||
                      this._createPopup(this.container, null, this.data),
                    this.container
                  );
                },
              },
            ]),
            t
          );
        })(m),
        U = (function(e) {
          function t(e) {
            h(this, t);
            var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
            return o(this, u(t).call(this, e, r, !0));
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  return (
                    (this.container.className = "stampAnnotation"),
                    this.data.hasPopup ||
                      this._createPopup(this.container, null, this.data),
                    this.container
                  );
                },
              },
            ]),
            t
          );
        })(m),
        W = (function(e) {
          function t(e) {
            var r;
            h(this, t), (r = o(this, u(t).call(this, e, !0)));
            var n = r.data.file,
              i = n.filename,
              a = n.content;
            return (
              (r.filename = (0, p.getFilenameFromUrl)(i)),
              (r.content = a),
              r.linkService.eventBus &&
                r.linkService.eventBus.dispatch("fileattachmentannotation", {
                  source: s(r),
                  id: (0, v.stringToPDFString)(i),
                  filename: i,
                  content: a,
                }),
              r
            );
          }
          return (
            c(t, e),
            d(t, [
              {
                key: "render",
                value: function() {
                  this.container.className = "fileAttachmentAnnotation";
                  var e = document.createElement("div");
                  return (
                    (e.style.height = this.container.style.height),
                    (e.style.width = this.container.style.width),
                    e.addEventListener("dblclick", this._download.bind(this)),
                    this.data.hasPopup ||
                      (!this.data.title && !this.data.contents) ||
                      this._createPopup(this.container, e, this.data),
                    this.container.appendChild(e),
                    this.container
                  );
                },
              },
              {
                key: "_download",
                value: function() {
                  return this.downloadManager
                    ? void this.downloadManager.downloadData(
                        this.content,
                        this.filename,
                        ""
                      )
                    : void (0, v.warn)(
                        "Download cannot be started due to unavailable download manager"
                      );
                },
              },
            ]),
            t
          );
        })(m),
        B = (function() {
          function e() {
            h(this, e);
          }
          return (
            d(e, null, [
              {
                key: "render",
                value: function(e) {
                  var t = !0,
                    r = !1,
                    n = void 0;
                  try {
                    for (
                      var i, a = e.annotations[Symbol.iterator]();
                      !(t = (i = a.next()).done);
                      t = !0
                    ) {
                      var o = i.value;
                      if (o) {
                        var s = g.create({
                          data: o,
                          layer: e.div,
                          page: e.page,
                          viewport: e.viewport,
                          linkService: e.linkService,
                          downloadManager: e.downloadManager,
                          imageResourcesPath: e.imageResourcesPath || "",
                          renderInteractiveForms:
                            e.renderInteractiveForms || !1,
                          svgFactory: new p.DOMSVGFactory(),
                        });
                        s.isRenderable && e.div.appendChild(s.render());
                      }
                    }
                  } catch (u) {
                    (r = !0), (n = u);
                  } finally {
                    try {
                      t || null == a["return"] || a["return"]();
                    } finally {
                      if (r) throw n;
                    }
                  }
                },
              },
              {
                key: "update",
                value: function(e) {
                  var t = !0,
                    r = !1,
                    n = void 0;
                  try {
                    for (
                      var i, a = e.annotations[Symbol.iterator]();
                      !(t = (i = a.next()).done);
                      t = !0
                    ) {
                      var o = i.value,
                        s = e.div.querySelector(
                          '[data-annotation-id="'.concat(o.id, '"]')
                        );
                      s &&
                        (s.style.transform = "matrix(".concat(
                          e.viewport.transform.join(","),
                          ")"
                        ));
                    }
                  } catch (u) {
                    (r = !0), (n = u);
                  } finally {
                    try {
                      t || null == a["return"] || a["return"]();
                    } finally {
                      if (r) throw n;
                    }
                  }
                  e.div.removeAttribute("hidden");
                },
              },
            ]),
            e
          );
        })();
      t.AnnotationLayer = B;
    },
    function(e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e) {
        return s(e) || o(e) || a();
      }
      function a() {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      }
      function o(e) {
        if (
          Symbol.iterator in Object(e) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        )
          return Array.from(e);
      }
      function s(e) {
        if (Array.isArray(e)) {
          for (var t = 0, r = new Array(e.length); t < e.length; t++)
            r[t] = e[t];
          return r;
        }
      }
      function u(e, t) {
        return h(e) || l(e, t) || c();
      }
      function c() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      }
      function l(e, t) {
        if (
          Symbol.iterator in Object(e) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        ) {
          var r = [],
            n = !0,
            i = !1,
            a = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(n = (o = s.next()).done) &&
              (r.push(o.value), !t || r.length !== t);
              n = !0
            );
          } catch (u) {
            (i = !0), (a = u);
          } finally {
            try {
              n || null == s["return"] || s["return"]();
            } finally {
              if (i) throw a;
            }
          }
          return r;
        }
      }
      function h(e) {
        if (Array.isArray(e)) return e;
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function p(e, t, r) {
        return t && d(e.prototype, t), r && d(e, r), e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SVGGraphics = void 0);
      var v = r(1),
        g = r(183),
        m = n(r(4)),
        y = function() {
          throw new Error("Not implemented: SVGGraphics");
        };
      t.SVGGraphics = y;
      var b = function(e) {
          var t = [],
            r = [],
            n = !0,
            i = !1,
            a = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(n = (o = s.next()).done);
              n = !0
            ) {
              var u = o.value;
              "save" !== u.fn
                ? "restore" === u.fn
                  ? (t = r.pop())
                  : t.push(u)
                : (t.push({ fnId: 92, fn: "group", items: [] }),
                  r.push(t),
                  (t = t[t.length - 1].items));
            }
          } catch (c) {
            (i = !0), (a = c);
          } finally {
            try {
              n || null == s["return"] || s["return"]();
            } finally {
              if (i) throw a;
            }
          }
          return t;
        },
        _ = function(e) {
          if (Number.isInteger(e)) return e.toString();
          var t = e.toFixed(10),
            r = t.length - 1;
          if ("0" !== t[r]) return t;
          do r--;
          while ("0" === t[r]);
          return t.substring(0, "." === t[r] ? r : r + 1);
        },
        A = function(e) {
          if (0 === e[4] && 0 === e[5]) {
            if (0 === e[1] && 0 === e[2])
              return 1 === e[0] && 1 === e[3]
                ? ""
                : "scale(".concat(_(e[0]), " ").concat(_(e[3]), ")");
            if (e[0] === e[3] && e[1] === -e[2]) {
              var t = (180 * Math.acos(e[0])) / Math.PI;
              return "rotate(".concat(_(t), ")");
            }
          } else if (1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3])
            return "translate(".concat(_(e[4]), " ").concat(_(e[5]), ")");
          return (
            "matrix("
              .concat(_(e[0]), " ")
              .concat(_(e[1]), " ")
              .concat(_(e[2]), " ")
              .concat(_(e[3]), " ")
              .concat(_(e[4]), " ") + "".concat(_(e[5]), ")")
          );
        },
        S = { fontStyle: "normal", fontWeight: "normal", fillColor: "#000000" },
        w = "http://www.w3.org/XML/1998/namespace",
        k = "http://www.w3.org/1999/xlink",
        x = ["butt", "round", "square"],
        C = ["miter", "round", "bevel"],
        P = (function() {
          function e(e, t, r) {
            for (var n = -1, i = t; i < r; i++) {
              var a = 255 & (n ^ e[i]),
                o = u[a];
              n = (n >>> 8) ^ o;
            }
            return n ^ -1;
          }
          function t(t, r, n, i) {
            var a = i,
              o = r.length;
            (n[a] = (o >> 24) & 255),
              (n[a + 1] = (o >> 16) & 255),
              (n[a + 2] = (o >> 8) & 255),
              (n[a + 3] = 255 & o),
              (a += 4),
              (n[a] = 255 & t.charCodeAt(0)),
              (n[a + 1] = 255 & t.charCodeAt(1)),
              (n[a + 2] = 255 & t.charCodeAt(2)),
              (n[a + 3] = 255 & t.charCodeAt(3)),
              (a += 4),
              n.set(r, a),
              (a += r.length);
            var s = e(n, i + 4, a);
            (n[a] = (s >> 24) & 255),
              (n[a + 1] = (s >> 16) & 255),
              (n[a + 2] = (s >> 8) & 255),
              (n[a + 3] = 255 & s);
          }
          function r(e, t, r) {
            for (var n = 1, i = 0, a = t; a < r; ++a)
              (n = (n + (255 & e[a])) % 65521), (i = (i + n) % 65521);
            return (i << 16) | n;
          }
          function n(e) {
            if (!(0, m["default"])()) return i(e);
            try {
              var t;
              t = parseInt(process.versions.node) >= 8 ? e : new Buffer(e);
              var r = require("zlib").deflateSync(t, { level: 9 });
              return r instanceof Uint8Array ? r : new Uint8Array(r);
            } catch (n) {
              (0, v.warn)(
                "Not compressing PNG because zlib.deflateSync is unavailable: " +
                  n
              );
            }
            return i(e);
          }
          function i(e) {
            var t = e.length,
              n = 65535,
              i = Math.ceil(t / n),
              a = new Uint8Array(2 + t + 5 * i + 4),
              o = 0;
            (a[o++] = 120), (a[o++] = 156);
            for (var s = 0; t > n; )
              (a[o++] = 0),
                (a[o++] = 255),
                (a[o++] = 255),
                (a[o++] = 0),
                (a[o++] = 0),
                a.set(e.subarray(s, s + n), o),
                (o += n),
                (s += n),
                (t -= n);
            (a[o++] = 1),
              (a[o++] = 255 & t),
              (a[o++] = (t >> 8) & 255),
              (a[o++] = 65535 & ~t & 255),
              (a[o++] = ((65535 & ~t) >> 8) & 255),
              a.set(e.subarray(s), o),
              (o += e.length - s);
            var u = r(e, 0, e.length);
            return (
              (a[o++] = (u >> 24) & 255),
              (a[o++] = (u >> 16) & 255),
              (a[o++] = (u >> 8) & 255),
              (a[o++] = 255 & u),
              a
            );
          }
          function a(e, r, i, a) {
            var u,
              c,
              l,
              h = e.width,
              f = e.height,
              d = e.data;
            switch (r) {
              case v.ImageKind.GRAYSCALE_1BPP:
                (c = 0), (u = 1), (l = (h + 7) >> 3);
                break;
              case v.ImageKind.RGB_24BPP:
                (c = 2), (u = 8), (l = 3 * h);
                break;
              case v.ImageKind.RGBA_32BPP:
                (c = 6), (u = 8), (l = 4 * h);
                break;
              default:
                throw new Error("invalid format");
            }
            for (
              var p = new Uint8Array((1 + l) * f), g = 0, m = 0, y = 0;
              y < f;
              ++y
            )
              (p[g++] = 0), p.set(d.subarray(m, m + l), g), (m += l), (g += l);
            if (r === v.ImageKind.GRAYSCALE_1BPP && a) {
              g = 0;
              for (var b = 0; b < f; b++) {
                g++;
                for (var _ = 0; _ < l; _++) p[g++] ^= 255;
              }
            }
            var A = new Uint8Array([
                (h >> 24) & 255,
                (h >> 16) & 255,
                (h >> 8) & 255,
                255 & h,
                (f >> 24) & 255,
                (f >> 16) & 255,
                (f >> 8) & 255,
                255 & f,
                u,
                c,
                0,
                0,
                0,
              ]),
              S = n(p),
              w = o.length + 3 * s + A.length + S.length,
              k = new Uint8Array(w),
              x = 0;
            return (
              k.set(o, x),
              (x += o.length),
              t("IHDR", A, k, x),
              (x += s + A.length),
              t("IDATA", S, k, x),
              (x += s + S.length),
              t("IEND", new Uint8Array(0), k, x),
              (0, v.createObjectURL)(k, "image/png", i)
            );
          }
          for (
            var o = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
              s = 12,
              u = new Int32Array(256),
              c = 0;
            c < 256;
            c++
          ) {
            for (var l = c, h = 0; h < 8; h++)
              l =
                1 & l
                  ? 3988292384 ^ ((l >> 1) & 2147483647)
                  : (l >> 1) & 2147483647;
            u[c] = l;
          }
          return function(e, t, r) {
            var n = void 0 === e.kind ? v.ImageKind.GRAYSCALE_1BPP : e.kind;
            return a(e, n, t, r);
          };
        })(),
        R = (function() {
          function e() {
            f(this, e),
              (this.fontSizeScale = 1),
              (this.fontWeight = S.fontWeight),
              (this.fontSize = 0),
              (this.textMatrix = v.IDENTITY_MATRIX),
              (this.fontMatrix = v.FONT_IDENTITY_MATRIX),
              (this.leading = 0),
              (this.textRenderingMode = v.TextRenderingMode.FILL),
              (this.textMatrixScale = 1),
              (this.x = 0),
              (this.y = 0),
              (this.lineX = 0),
              (this.lineY = 0),
              (this.charSpacing = 0),
              (this.wordSpacing = 0),
              (this.textHScale = 1),
              (this.textRise = 0),
              (this.fillColor = S.fillColor),
              (this.strokeColor = "#000000"),
              (this.fillAlpha = 1),
              (this.strokeAlpha = 1),
              (this.lineWidth = 1),
              (this.lineJoin = ""),
              (this.lineCap = ""),
              (this.miterLimit = 0),
              (this.dashArray = []),
              (this.dashPhase = 0),
              (this.dependencies = []),
              (this.activeClipUrl = null),
              (this.clipGroup = null),
              (this.maskId = "");
          }
          return (
            p(e, [
              {
                key: "clone",
                value: function() {
                  return Object.create(this);
                },
              },
              {
                key: "setCurrentPoint",
                value: function(e, t) {
                  (this.x = e), (this.y = t);
                },
              },
            ]),
            e
          );
        })(),
        T = 0,
        E = 0,
        O = 0;
      t.SVGGraphics = y = (function() {
        function e(t, r, n) {
          f(this, e),
            (this.svgFactory = new g.DOMSVGFactory()),
            (this.current = new R()),
            (this.transformMatrix = v.IDENTITY_MATRIX),
            (this.transformStack = []),
            (this.extraStack = []),
            (this.commonObjs = t),
            (this.objs = r),
            (this.pendingClip = null),
            (this.pendingEOFill = !1),
            (this.embedFonts = !1),
            (this.embeddedFonts = Object.create(null)),
            (this.cssStyle = null),
            (this.forceDataSchema = !!n),
            (this._operatorIdMapping = []);
          for (var i in v.OPS) this._operatorIdMapping[v.OPS[i]] = i;
        }
        return (
          p(e, [
            {
              key: "save",
              value: function() {
                this.transformStack.push(this.transformMatrix);
                var e = this.current;
                this.extraStack.push(e), (this.current = e.clone());
              },
            },
            {
              key: "restore",
              value: function() {
                (this.transformMatrix = this.transformStack.pop()),
                  (this.current = this.extraStack.pop()),
                  (this.pendingClip = null),
                  (this.tgrp = null);
              },
            },
            {
              key: "group",
              value: function(e) {
                this.save(), this.executeOpTree(e), this.restore();
              },
            },
            {
              key: "loadDependencies",
              value: function(e) {
                for (
                  var t = this,
                    r = e.fnArray,
                    n = e.argsArray,
                    i = 0,
                    a = r.length;
                  i < a;
                  i++
                )
                  if (r[i] === v.OPS.dependency) {
                    var o = !0,
                      s = !1,
                      u = void 0;
                    try {
                      for (
                        var c,
                          l = function() {
                            var e = c.value,
                              r = e.startsWith("g_") ? t.commonObjs : t.objs,
                              n = new Promise(function(t) {
                                r.get(e, t);
                              });
                            t.current.dependencies.push(n);
                          },
                          h = n[i][Symbol.iterator]();
                        !(o = (c = h.next()).done);
                        o = !0
                      )
                        l();
                    } catch (f) {
                      (s = !0), (u = f);
                    } finally {
                      try {
                        o || null == h["return"] || h["return"]();
                      } finally {
                        if (s) throw u;
                      }
                    }
                  }
                return Promise.all(this.current.dependencies);
              },
            },
            {
              key: "transform",
              value: function(e, t, r, n, i, a) {
                var o = [e, t, r, n, i, a];
                (this.transformMatrix = v.Util.transform(
                  this.transformMatrix,
                  o
                )),
                  (this.tgrp = null);
              },
            },
            {
              key: "getSVG",
              value: function(e, t) {
                var r = this;
                this.viewport = t;
                var n = this._initialize(t);
                return this.loadDependencies(e).then(function() {
                  return (
                    (r.transformMatrix = v.IDENTITY_MATRIX),
                    r.executeOpTree(r.convertOpList(e)),
                    n
                  );
                });
              },
            },
            {
              key: "convertOpList",
              value: function(e) {
                for (
                  var t = this._operatorIdMapping,
                    r = e.argsArray,
                    n = e.fnArray,
                    i = [],
                    a = 0,
                    o = n.length;
                  a < o;
                  a++
                ) {
                  var s = n[a];
                  i.push({ fnId: s, fn: t[s], args: r[a] });
                }
                return b(i);
              },
            },
            {
              key: "executeOpTree",
              value: function(e) {
                var t = !0,
                  r = !1,
                  n = void 0;
                try {
                  for (
                    var i, a = e[Symbol.iterator]();
                    !(t = (i = a.next()).done);
                    t = !0
                  ) {
                    var o = i.value,
                      s = o.fn,
                      u = o.fnId,
                      c = o.args;
                    switch (0 | u) {
                      case v.OPS.beginText:
                        this.beginText();
                        break;
                      case v.OPS.dependency:
                        break;
                      case v.OPS.setLeading:
                        this.setLeading(c);
                        break;
                      case v.OPS.setLeadingMoveText:
                        this.setLeadingMoveText(c[0], c[1]);
                        break;
                      case v.OPS.setFont:
                        this.setFont(c);
                        break;
                      case v.OPS.showText:
                        this.showText(c[0]);
                        break;
                      case v.OPS.showSpacedText:
                        this.showText(c[0]);
                        break;
                      case v.OPS.endText:
                        this.endText();
                        break;
                      case v.OPS.moveText:
                        this.moveText(c[0], c[1]);
                        break;
                      case v.OPS.setCharSpacing:
                        this.setCharSpacing(c[0]);
                        break;
                      case v.OPS.setWordSpacing:
                        this.setWordSpacing(c[0]);
                        break;
                      case v.OPS.setHScale:
                        this.setHScale(c[0]);
                        break;
                      case v.OPS.setTextMatrix:
                        this.setTextMatrix(c[0], c[1], c[2], c[3], c[4], c[5]);
                        break;
                      case v.OPS.setTextRise:
                        this.setTextRise(c[0]);
                        break;
                      case v.OPS.setTextRenderingMode:
                        this.setTextRenderingMode(c[0]);
                        break;
                      case v.OPS.setLineWidth:
                        this.setLineWidth(c[0]);
                        break;
                      case v.OPS.setLineJoin:
                        this.setLineJoin(c[0]);
                        break;
                      case v.OPS.setLineCap:
                        this.setLineCap(c[0]);
                        break;
                      case v.OPS.setMiterLimit:
                        this.setMiterLimit(c[0]);
                        break;
                      case v.OPS.setFillRGBColor:
                        this.setFillRGBColor(c[0], c[1], c[2]);
                        break;
                      case v.OPS.setStrokeRGBColor:
                        this.setStrokeRGBColor(c[0], c[1], c[2]);
                        break;
                      case v.OPS.setStrokeColorN:
                        this.setStrokeColorN(c);
                        break;
                      case v.OPS.setFillColorN:
                        this.setFillColorN(c);
                        break;
                      case v.OPS.shadingFill:
                        this.shadingFill(c[0]);
                        break;
                      case v.OPS.setDash:
                        this.setDash(c[0], c[1]);
                        break;
                      case v.OPS.setRenderingIntent:
                        this.setRenderingIntent(c[0]);
                        break;
                      case v.OPS.setFlatness:
                        this.setFlatness(c[0]);
                        break;
                      case v.OPS.setGState:
                        this.setGState(c[0]);
                        break;
                      case v.OPS.fill:
                        this.fill();
                        break;
                      case v.OPS.eoFill:
                        this.eoFill();
                        break;
                      case v.OPS.stroke:
                        this.stroke();
                        break;
                      case v.OPS.fillStroke:
                        this.fillStroke();
                        break;
                      case v.OPS.eoFillStroke:
                        this.eoFillStroke();
                        break;
                      case v.OPS.clip:
                        this.clip("nonzero");
                        break;
                      case v.OPS.eoClip:
                        this.clip("evenodd");
                        break;
                      case v.OPS.paintSolidColorImageMask:
                        this.paintSolidColorImageMask();
                        break;
                      case v.OPS.paintJpegXObject:
                        this.paintJpegXObject(c[0], c[1], c[2]);
                        break;
                      case v.OPS.paintImageXObject:
                        this.paintImageXObject(c[0]);
                        break;
                      case v.OPS.paintInlineImageXObject:
                        this.paintInlineImageXObject(c[0]);
                        break;
                      case v.OPS.paintImageMaskXObject:
                        this.paintImageMaskXObject(c[0]);
                        break;
                      case v.OPS.paintFormXObjectBegin:
                        this.paintFormXObjectBegin(c[0], c[1]);
                        break;
                      case v.OPS.paintFormXObjectEnd:
                        this.paintFormXObjectEnd();
                        break;
                      case v.OPS.closePath:
                        this.closePath();
                        break;
                      case v.OPS.closeStroke:
                        this.closeStroke();
                        break;
                      case v.OPS.closeFillStroke:
                        this.closeFillStroke();
                        break;
                      case v.OPS.closeEOFillStroke:
                        this.closeEOFillStroke();
                        break;
                      case v.OPS.nextLine:
                        this.nextLine();
                        break;
                      case v.OPS.transform:
                        this.transform(c[0], c[1], c[2], c[3], c[4], c[5]);
                        break;
                      case v.OPS.constructPath:
                        this.constructPath(c[0], c[1]);
                        break;
                      case v.OPS.endPath:
                        this.endPath();
                        break;
                      case 92:
                        this.group(o.items);
                        break;
                      default:
                        (0, v.warn)("Unimplemented operator ".concat(s));
                    }
                  }
                } catch (l) {
                  (r = !0), (n = l);
                } finally {
                  try {
                    t || null == a["return"] || a["return"]();
                  } finally {
                    if (r) throw n;
                  }
                }
              },
            },
            {
              key: "setWordSpacing",
              value: function(e) {
                this.current.wordSpacing = e;
              },
            },
            {
              key: "setCharSpacing",
              value: function(e) {
                this.current.charSpacing = e;
              },
            },
            {
              key: "nextLine",
              value: function() {
                this.moveText(0, this.current.leading);
              },
            },
            {
              key: "setTextMatrix",
              value: function(e, t, r, n, i, a) {
                var o = this.current;
                (o.textMatrix = o.lineMatrix = [e, t, r, n, i, a]),
                  (o.textMatrixScale = Math.sqrt(e * e + t * t)),
                  (o.x = o.lineX = 0),
                  (o.y = o.lineY = 0),
                  (o.xcoords = []),
                  (o.tspan = this.svgFactory.createElement("svg:tspan")),
                  o.tspan.setAttributeNS(null, "font-family", o.fontFamily),
                  o.tspan.setAttributeNS(
                    null,
                    "font-size",
                    "".concat(_(o.fontSize), "px")
                  ),
                  o.tspan.setAttributeNS(null, "y", _(-o.y)),
                  (o.txtElement = this.svgFactory.createElement("svg:text")),
                  o.txtElement.appendChild(o.tspan);
              },
            },
            {
              key: "beginText",
              value: function() {
                var e = this.current;
                (e.x = e.lineX = 0),
                  (e.y = e.lineY = 0),
                  (e.textMatrix = v.IDENTITY_MATRIX),
                  (e.lineMatrix = v.IDENTITY_MATRIX),
                  (e.textMatrixScale = 1),
                  (e.tspan = this.svgFactory.createElement("svg:tspan")),
                  (e.txtElement = this.svgFactory.createElement("svg:text")),
                  (e.txtgrp = this.svgFactory.createElement("svg:g")),
                  (e.xcoords = []);
              },
            },
            {
              key: "moveText",
              value: function(e, t) {
                var r = this.current;
                (r.x = r.lineX += e),
                  (r.y = r.lineY += t),
                  (r.xcoords = []),
                  (r.tspan = this.svgFactory.createElement("svg:tspan")),
                  r.tspan.setAttributeNS(null, "font-family", r.fontFamily),
                  r.tspan.setAttributeNS(
                    null,
                    "font-size",
                    "".concat(_(r.fontSize), "px")
                  ),
                  r.tspan.setAttributeNS(null, "y", _(-r.y));
              },
            },
            {
              key: "showText",
              value: function(e) {
                var t = this.current,
                  r = t.font,
                  n = t.fontSize;
                if (0 !== n) {
                  var i = t.charSpacing,
                    a = t.wordSpacing,
                    o = t.fontDirection,
                    s = t.textHScale * o,
                    u = r.vertical,
                    c = n * t.fontMatrix[0],
                    l = 0,
                    h = !0,
                    f = !1,
                    d = void 0;
                  try {
                    for (
                      var p, g = e[Symbol.iterator]();
                      !(h = (p = g.next()).done);
                      h = !0
                    ) {
                      var m = p.value;
                      if (null !== m)
                        if ((0, v.isNum)(m)) l += -m * n * 0.001;
                        else {
                          var y = m.width,
                            b = m.fontChar,
                            k = (m.isSpace ? a : 0) + i,
                            x = y * c + k * o;
                          m.isInFont || r.missingFile
                            ? (t.xcoords.push(t.x + l * s),
                              (t.tspan.textContent += b),
                              (l += x))
                            : (l += x);
                        }
                      else l += o * a;
                    }
                  } catch (C) {
                    (f = !0), (d = C);
                  } finally {
                    try {
                      h || null == g["return"] || g["return"]();
                    } finally {
                      if (f) throw d;
                    }
                  }
                  u ? (t.y -= l * s) : (t.x += l * s),
                    t.tspan.setAttributeNS(
                      null,
                      "x",
                      t.xcoords.map(_).join(" ")
                    ),
                    t.tspan.setAttributeNS(null, "y", _(-t.y)),
                    t.tspan.setAttributeNS(null, "font-family", t.fontFamily),
                    t.tspan.setAttributeNS(
                      null,
                      "font-size",
                      "".concat(_(t.fontSize), "px")
                    ),
                    t.fontStyle !== S.fontStyle &&
                      t.tspan.setAttributeNS(null, "font-style", t.fontStyle),
                    t.fontWeight !== S.fontWeight &&
                      t.tspan.setAttributeNS(null, "font-weight", t.fontWeight);
                  var P =
                    t.textRenderingMode & v.TextRenderingMode.FILL_STROKE_MASK;
                  if (
                    (P === v.TextRenderingMode.FILL ||
                    P === v.TextRenderingMode.FILL_STROKE
                      ? (t.fillColor !== S.fillColor &&
                          t.tspan.setAttributeNS(null, "fill", t.fillColor),
                        t.fillAlpha < 1 &&
                          t.tspan.setAttributeNS(
                            null,
                            "fill-opacity",
                            t.fillAlpha
                          ))
                      : t.textRenderingMode === v.TextRenderingMode.ADD_TO_PATH
                      ? t.tspan.setAttributeNS(null, "fill", "transparent")
                      : t.tspan.setAttributeNS(null, "fill", "none"),
                    P === v.TextRenderingMode.STROKE ||
                      P === v.TextRenderingMode.FILL_STROKE)
                  ) {
                    var R = 1 / (t.textMatrixScale || 1);
                    this._setStrokeAttributes(t.tspan, R);
                  }
                  var T = t.textMatrix;
                  0 !== t.textRise && ((T = T.slice()), (T[5] += t.textRise)),
                    t.txtElement.setAttributeNS(
                      null,
                      "transform",
                      "".concat(A(T), " scale(1, -1)")
                    ),
                    t.txtElement.setAttributeNS(w, "xml:space", "preserve"),
                    t.txtElement.appendChild(t.tspan),
                    t.txtgrp.appendChild(t.txtElement),
                    this._ensureTransformGroup().appendChild(t.txtElement);
                }
              },
            },
            {
              key: "setLeadingMoveText",
              value: function(e, t) {
                this.setLeading(-t), this.moveText(e, t);
              },
            },
            {
              key: "addFontStyle",
              value: function(e) {
                this.cssStyle ||
                  ((this.cssStyle = this.svgFactory.createElement("svg:style")),
                  this.cssStyle.setAttributeNS(null, "type", "text/css"),
                  this.defs.appendChild(this.cssStyle));
                var t = (0, v.createObjectURL)(
                  e.data,
                  e.mimetype,
                  this.forceDataSchema
                );
                this.cssStyle.textContent +=
                  '@font-face { font-family: "'.concat(e.loadedName, '";') +
                  " src: url(".concat(t, "); }\n");
              },
            },
            {
              key: "setFont",
              value: function(e) {
                var t = this.current,
                  r = this.commonObjs.get(e[0]),
                  n = e[1];
                (t.font = r),
                  this.embedFonts &&
                    r.data &&
                    !this.embeddedFonts[r.loadedName] &&
                    (this.addFontStyle(r),
                    (this.embeddedFonts[r.loadedName] = r)),
                  (t.fontMatrix = r.fontMatrix
                    ? r.fontMatrix
                    : v.FONT_IDENTITY_MATRIX);
                var i = r.black
                    ? r.bold
                      ? "bolder"
                      : "bold"
                    : r.bold
                    ? "bold"
                    : "normal",
                  a = r.italic ? "italic" : "normal";
                n < 0
                  ? ((n = -n), (t.fontDirection = -1))
                  : (t.fontDirection = 1),
                  (t.fontSize = n),
                  (t.fontFamily = r.loadedName),
                  (t.fontWeight = i),
                  (t.fontStyle = a),
                  (t.tspan = this.svgFactory.createElement("svg:tspan")),
                  t.tspan.setAttributeNS(null, "y", _(-t.y)),
                  (t.xcoords = []);
              },
            },
            {
              key: "endText",
              value: function() {
                var e = this.current;
                e.textRenderingMode & v.TextRenderingMode.ADD_TO_PATH_FLAG &&
                  e.txtElement &&
                  e.txtElement.hasChildNodes() &&
                  ((e.element = e.txtElement),
                  this.clip("nonzero"),
                  this.endPath());
              },
            },
            {
              key: "setLineWidth",
              value: function(e) {
                e > 0 && (this.current.lineWidth = e);
              },
            },
            {
              key: "setLineCap",
              value: function(e) {
                this.current.lineCap = x[e];
              },
            },
            {
              key: "setLineJoin",
              value: function(e) {
                this.current.lineJoin = C[e];
              },
            },
            {
              key: "setMiterLimit",
              value: function(e) {
                this.current.miterLimit = e;
              },
            },
            {
              key: "setStrokeAlpha",
              value: function(e) {
                this.current.strokeAlpha = e;
              },
            },
            {
              key: "setStrokeRGBColor",
              value: function(e, t, r) {
                this.current.strokeColor = v.Util.makeCssRgb(e, t, r);
              },
            },
            {
              key: "setFillAlpha",
              value: function(e) {
                this.current.fillAlpha = e;
              },
            },
            {
              key: "setFillRGBColor",
              value: function(e, t, r) {
                (this.current.fillColor = v.Util.makeCssRgb(e, t, r)),
                  (this.current.tspan = this.svgFactory.createElement(
                    "svg:tspan"
                  )),
                  (this.current.xcoords = []);
              },
            },
            {
              key: "setStrokeColorN",
              value: function(e) {
                this.current.strokeColor = this._makeColorN_Pattern(e);
              },
            },
            {
              key: "setFillColorN",
              value: function(e) {
                this.current.fillColor = this._makeColorN_Pattern(e);
              },
            },
            {
              key: "shadingFill",
              value: function(e) {
                var t = this.viewport.width,
                  r = this.viewport.height,
                  n = v.Util.inverseTransform(this.transformMatrix),
                  i = v.Util.applyTransform([0, 0], n),
                  a = v.Util.applyTransform([0, r], n),
                  o = v.Util.applyTransform([t, 0], n),
                  s = v.Util.applyTransform([t, r], n),
                  u = Math.min(i[0], a[0], o[0], s[0]),
                  c = Math.min(i[1], a[1], o[1], s[1]),
                  l = Math.max(i[0], a[0], o[0], s[0]),
                  h = Math.max(i[1], a[1], o[1], s[1]),
                  f = this.svgFactory.createElement("svg:rect");
                f.setAttributeNS(null, "x", u),
                  f.setAttributeNS(null, "y", c),
                  f.setAttributeNS(null, "width", l - u),
                  f.setAttributeNS(null, "height", h - c),
                  f.setAttributeNS(null, "fill", this._makeShadingPattern(e)),
                  this._ensureTransformGroup().appendChild(f);
              },
            },
            {
              key: "_makeColorN_Pattern",
              value: function(e) {
                return "TilingPattern" === e[0]
                  ? this._makeTilingPattern(e)
                  : this._makeShadingPattern(e);
              },
            },
            {
              key: "_makeTilingPattern",
              value: function(e) {
                var t = e[1],
                  r = e[2],
                  n = e[3] || v.IDENTITY_MATRIX,
                  a = u(e[4], 4),
                  o = a[0],
                  s = a[1],
                  c = a[2],
                  l = a[3],
                  h = e[5],
                  f = e[6],
                  d = e[7],
                  p = "shading".concat(O++),
                  g = v.Util.applyTransform([o, s], n),
                  m = u(g, 2),
                  y = m[0],
                  b = m[1],
                  _ = v.Util.applyTransform([c, l], n),
                  A = u(_, 2),
                  S = A[0],
                  w = A[1],
                  k = v.Util.singularValueDecompose2dScale(n),
                  x = u(k, 2),
                  C = x[0],
                  P = x[1],
                  R = h * C,
                  T = f * P,
                  E = this.svgFactory.createElement("svg:pattern");
                E.setAttributeNS(null, "id", p),
                  E.setAttributeNS(null, "patternUnits", "userSpaceOnUse"),
                  E.setAttributeNS(null, "width", R),
                  E.setAttributeNS(null, "height", T),
                  E.setAttributeNS(null, "x", "".concat(y)),
                  E.setAttributeNS(null, "y", "".concat(b));
                var L = this.svg,
                  F = this.transformMatrix,
                  I = this.current.fillColor,
                  j = this.current.strokeColor,
                  M = this.svgFactory.create(S - y, w - b);
                if (((this.svg = M), (this.transformMatrix = n), 2 === d)) {
                  var N = v.Util.makeCssRgb.apply(v.Util, i(t));
                  (this.current.fillColor = N), (this.current.strokeColor = N);
                }
                return (
                  this.executeOpTree(this.convertOpList(r)),
                  (this.svg = L),
                  (this.transformMatrix = F),
                  (this.current.fillColor = I),
                  (this.current.strokeColor = j),
                  E.appendChild(M.childNodes[0]),
                  this.defs.appendChild(E),
                  "url(#".concat(p, ")")
                );
              },
            },
            {
              key: "_makeShadingPattern",
              value: function(e) {
                switch (e[0]) {
                  case "RadialAxial":
                    var t,
                      r = "shading".concat(O++),
                      n = e[2];
                    switch (e[1]) {
                      case "axial":
                        var i = e[3],
                          a = e[4];
                        (t = this.svgFactory.createElement(
                          "svg:linearGradient"
                        )),
                          t.setAttributeNS(null, "id", r),
                          t.setAttributeNS(
                            null,
                            "gradientUnits",
                            "userSpaceOnUse"
                          ),
                          t.setAttributeNS(null, "x1", i[0]),
                          t.setAttributeNS(null, "y1", i[1]),
                          t.setAttributeNS(null, "x2", a[0]),
                          t.setAttributeNS(null, "y2", a[1]);
                        break;
                      case "radial":
                        var o = e[3],
                          s = e[4],
                          u = e[5],
                          c = e[6];
                        (t = this.svgFactory.createElement(
                          "svg:radialGradient"
                        )),
                          t.setAttributeNS(null, "id", r),
                          t.setAttributeNS(
                            null,
                            "gradientUnits",
                            "userSpaceOnUse"
                          ),
                          t.setAttributeNS(null, "cx", s[0]),
                          t.setAttributeNS(null, "cy", s[1]),
                          t.setAttributeNS(null, "r", c),
                          t.setAttributeNS(null, "fx", o[0]),
                          t.setAttributeNS(null, "fy", o[1]),
                          t.setAttributeNS(null, "fr", u);
                        break;
                      default:
                        throw new Error(
                          "Unknown RadialAxial type: ".concat(e[1])
                        );
                    }
                    var l = !0,
                      h = !1,
                      f = void 0;
                    try {
                      for (
                        var d, p = n[Symbol.iterator]();
                        !(l = (d = p.next()).done);
                        l = !0
                      ) {
                        var g = d.value,
                          m = this.svgFactory.createElement("svg:stop");
                        m.setAttributeNS(null, "offset", g[0]),
                          m.setAttributeNS(null, "stop-color", g[1]),
                          t.appendChild(m);
                      }
                    } catch (y) {
                      (h = !0), (f = y);
                    } finally {
                      try {
                        l || null == p["return"] || p["return"]();
                      } finally {
                        if (h) throw f;
                      }
                    }
                    return this.defs.appendChild(t), "url(#".concat(r, ")");
                  case "Mesh":
                    return (0, v.warn)("Unimplemented pattern Mesh"), null;
                  case "Dummy":
                    return "hotpink";
                  default:
                    throw new Error("Unknown IR type: ".concat(e[0]));
                }
              },
            },
            {
              key: "setDash",
              value: function(e, t) {
                (this.current.dashArray = e), (this.current.dashPhase = t);
              },
            },
            {
              key: "constructPath",
              value: function(e, t) {
                var r = this.current,
                  n = r.x,
                  i = r.y,
                  a = [],
                  o = 0,
                  s = !0,
                  u = !1,
                  c = void 0;
                try {
                  for (
                    var l, h = e[Symbol.iterator]();
                    !(s = (l = h.next()).done);
                    s = !0
                  ) {
                    var f = l.value;
                    switch (0 | f) {
                      case v.OPS.rectangle:
                        (n = t[o++]), (i = t[o++]);
                        var d = t[o++],
                          p = t[o++],
                          g = n + d,
                          m = i + p;
                        a.push(
                          "M",
                          _(n),
                          _(i),
                          "L",
                          _(g),
                          _(i),
                          "L",
                          _(g),
                          _(m),
                          "L",
                          _(n),
                          _(m),
                          "Z"
                        );
                        break;
                      case v.OPS.moveTo:
                        (n = t[o++]), (i = t[o++]), a.push("M", _(n), _(i));
                        break;
                      case v.OPS.lineTo:
                        (n = t[o++]), (i = t[o++]), a.push("L", _(n), _(i));
                        break;
                      case v.OPS.curveTo:
                        (n = t[o + 4]),
                          (i = t[o + 5]),
                          a.push(
                            "C",
                            _(t[o]),
                            _(t[o + 1]),
                            _(t[o + 2]),
                            _(t[o + 3]),
                            _(n),
                            _(i)
                          ),
                          (o += 6);
                        break;
                      case v.OPS.curveTo2:
                        (n = t[o + 2]),
                          (i = t[o + 3]),
                          a.push(
                            "C",
                            _(n),
                            _(i),
                            _(t[o]),
                            _(t[o + 1]),
                            _(t[o + 2]),
                            _(t[o + 3])
                          ),
                          (o += 4);
                        break;
                      case v.OPS.curveTo3:
                        (n = t[o + 2]),
                          (i = t[o + 3]),
                          a.push(
                            "C",
                            _(t[o]),
                            _(t[o + 1]),
                            _(n),
                            _(i),
                            _(n),
                            _(i)
                          ),
                          (o += 4);
                        break;
                      case v.OPS.closePath:
                        a.push("Z");
                    }
                  }
                } catch (y) {
                  (u = !0), (c = y);
                } finally {
                  try {
                    s || null == h["return"] || h["return"]();
                  } finally {
                    if (u) throw c;
                  }
                }
                (a = a.join(" ")),
                  r.path &&
                  e.length > 0 &&
                  e[0] !== v.OPS.rectangle &&
                  e[0] !== v.OPS.moveTo
                    ? (a = r.path.getAttributeNS(null, "d") + a)
                    : ((r.path = this.svgFactory.createElement("svg:path")),
                      this._ensureTransformGroup().appendChild(r.path)),
                  r.path.setAttributeNS(null, "d", a),
                  r.path.setAttributeNS(null, "fill", "none"),
                  (r.element = r.path),
                  r.setCurrentPoint(n, i);
              },
            },
            {
              key: "endPath",
              value: function() {
                var e = this.current;
                if (((e.path = null), this.pendingClip)) {
                  if (!e.element) return void (this.pendingClip = null);
                  var t = "clippath".concat(T++),
                    r = this.svgFactory.createElement("svg:clipPath");
                  r.setAttributeNS(null, "id", t),
                    r.setAttributeNS(
                      null,
                      "transform",
                      A(this.transformMatrix)
                    );
                  var n = e.element.cloneNode(!0);
                  "evenodd" === this.pendingClip
                    ? n.setAttributeNS(null, "clip-rule", "evenodd")
                    : n.setAttributeNS(null, "clip-rule", "nonzero"),
                    (this.pendingClip = null),
                    r.appendChild(n),
                    this.defs.appendChild(r),
                    e.activeClipUrl &&
                      ((e.clipGroup = null),
                      this.extraStack.forEach(function(e) {
                        e.clipGroup = null;
                      }),
                      r.setAttributeNS(null, "clip-path", e.activeClipUrl)),
                    (e.activeClipUrl = "url(#".concat(t, ")")),
                    (this.tgrp = null);
                }
              },
            },
            {
              key: "clip",
              value: function(e) {
                this.pendingClip = e;
              },
            },
            {
              key: "closePath",
              value: function() {
                var e = this.current;
                if (e.path) {
                  var t = "".concat(e.path.getAttributeNS(null, "d"), "Z");
                  e.path.setAttributeNS(null, "d", t);
                }
              },
            },
            {
              key: "setLeading",
              value: function(e) {
                this.current.leading = -e;
              },
            },
            {
              key: "setTextRise",
              value: function(e) {
                this.current.textRise = e;
              },
            },
            {
              key: "setTextRenderingMode",
              value: function(e) {
                this.current.textRenderingMode = e;
              },
            },
            {
              key: "setHScale",
              value: function(e) {
                this.current.textHScale = e / 100;
              },
            },
            { key: "setRenderingIntent", value: function(e) {} },
            { key: "setFlatness", value: function(e) {} },
            {
              key: "setGState",
              value: function(e) {
                var t = !0,
                  r = !1,
                  n = void 0;
                try {
                  for (
                    var i, a = e[Symbol.iterator]();
                    !(t = (i = a.next()).done);
                    t = !0
                  ) {
                    var o = u(i.value, 2),
                      s = o[0],
                      c = o[1];
                    switch (s) {
                      case "LW":
                        this.setLineWidth(c);
                        break;
                      case "LC":
                        this.setLineCap(c);
                        break;
                      case "LJ":
                        this.setLineJoin(c);
                        break;
                      case "ML":
                        this.setMiterLimit(c);
                        break;
                      case "D":
                        this.setDash(c[0], c[1]);
                        break;
                      case "RI":
                        this.setRenderingIntent(c);
                        break;
                      case "FL":
                        this.setFlatness(c);
                        break;
                      case "Font":
                        this.setFont(c);
                        break;
                      case "CA":
                        this.setStrokeAlpha(c);
                        break;
                      case "ca":
                        this.setFillAlpha(c);
                        break;
                      default:
                        (0, v.warn)(
                          "Unimplemented graphic state operator ".concat(s)
                        );
                    }
                  }
                } catch (l) {
                  (r = !0), (n = l);
                } finally {
                  try {
                    t || null == a["return"] || a["return"]();
                  } finally {
                    if (r) throw n;
                  }
                }
              },
            },
            {
              key: "fill",
              value: function() {
                var e = this.current;
                e.element &&
                  (e.element.setAttributeNS(null, "fill", e.fillColor),
                  e.element.setAttributeNS(null, "fill-opacity", e.fillAlpha),
                  this.endPath());
              },
            },
            {
              key: "stroke",
              value: function() {
                var e = this.current;
                e.element &&
                  (this._setStrokeAttributes(e.element),
                  e.element.setAttributeNS(null, "fill", "none"),
                  this.endPath());
              },
            },
            {
              key: "_setStrokeAttributes",
              value: function(e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1,
                  r = this.current,
                  n = r.dashArray;
                1 !== t &&
                  n.length > 0 &&
                  (n = n.map(function(e) {
                    return t * e;
                  })),
                  e.setAttributeNS(null, "stroke", r.strokeColor),
                  e.setAttributeNS(null, "stroke-opacity", r.strokeAlpha),
                  e.setAttributeNS(null, "stroke-miterlimit", _(r.miterLimit)),
                  e.setAttributeNS(null, "stroke-linecap", r.lineCap),
                  e.setAttributeNS(null, "stroke-linejoin", r.lineJoin),
                  e.setAttributeNS(
                    null,
                    "stroke-width",
                    _(t * r.lineWidth) + "px"
                  ),
                  e.setAttributeNS(
                    null,
                    "stroke-dasharray",
                    n.map(_).join(" ")
                  ),
                  e.setAttributeNS(
                    null,
                    "stroke-dashoffset",
                    _(t * r.dashPhase) + "px"
                  );
              },
            },
            {
              key: "eoFill",
              value: function() {
                this.current.element &&
                  this.current.element.setAttributeNS(
                    null,
                    "fill-rule",
                    "evenodd"
                  ),
                  this.fill();
              },
            },
            {
              key: "fillStroke",
              value: function() {
                this.stroke(), this.fill();
              },
            },
            {
              key: "eoFillStroke",
              value: function() {
                this.current.element &&
                  this.current.element.setAttributeNS(
                    null,
                    "fill-rule",
                    "evenodd"
                  ),
                  this.fillStroke();
              },
            },
            {
              key: "closeStroke",
              value: function() {
                this.closePath(), this.stroke();
              },
            },
            {
              key: "closeFillStroke",
              value: function() {
                this.closePath(), this.fillStroke();
              },
            },
            {
              key: "closeEOFillStroke",
              value: function() {
                this.closePath(), this.eoFillStroke();
              },
            },
            {
              key: "paintSolidColorImageMask",
              value: function() {
                var e = this.svgFactory.createElement("svg:rect");
                e.setAttributeNS(null, "x", "0"),
                  e.setAttributeNS(null, "y", "0"),
                  e.setAttributeNS(null, "width", "1px"),
                  e.setAttributeNS(null, "height", "1px"),
                  e.setAttributeNS(null, "fill", this.current.fillColor),
                  this._ensureTransformGroup().appendChild(e);
              },
            },
            {
              key: "paintJpegXObject",
              value: function(e, t, r) {
                var n = this.objs.get(e),
                  i = this.svgFactory.createElement("svg:image");
                i.setAttributeNS(k, "xlink:href", n.src),
                  i.setAttributeNS(null, "width", _(t)),
                  i.setAttributeNS(null, "height", _(r)),
                  i.setAttributeNS(null, "x", "0"),
                  i.setAttributeNS(null, "y", _(-r)),
                  i.setAttributeNS(
                    null,
                    "transform",
                    "scale(".concat(_(1 / t), " ").concat(_(-1 / r), ")")
                  ),
                  this._ensureTransformGroup().appendChild(i);
              },
            },
            {
              key: "paintImageXObject",
              value: function(e) {
                var t = this.objs.get(e);
                return t
                  ? void this.paintInlineImageXObject(t)
                  : void (0, v.warn)(
                      "Dependent image with object ID ".concat(
                        e,
                        " is not ready yet"
                      )
                    );
              },
            },
            {
              key: "paintInlineImageXObject",
              value: function(e, t) {
                var r = e.width,
                  n = e.height,
                  i = P(e, this.forceDataSchema, !!t),
                  a = this.svgFactory.createElement("svg:rect");
                a.setAttributeNS(null, "x", "0"),
                  a.setAttributeNS(null, "y", "0"),
                  a.setAttributeNS(null, "width", _(r)),
                  a.setAttributeNS(null, "height", _(n)),
                  (this.current.element = a),
                  this.clip("nonzero");
                var o = this.svgFactory.createElement("svg:image");
                o.setAttributeNS(k, "xlink:href", i),
                  o.setAttributeNS(null, "x", "0"),
                  o.setAttributeNS(null, "y", _(-n)),
                  o.setAttributeNS(null, "width", _(r) + "px"),
                  o.setAttributeNS(null, "height", _(n) + "px"),
                  o.setAttributeNS(
                    null,
                    "transform",
                    "scale(".concat(_(1 / r), " ").concat(_(-1 / n), ")")
                  ),
                  t
                    ? t.appendChild(o)
                    : this._ensureTransformGroup().appendChild(o);
              },
            },
            {
              key: "paintImageMaskXObject",
              value: function(e) {
                var t = this.current,
                  r = e.width,
                  n = e.height,
                  i = t.fillColor;
                t.maskId = "mask".concat(E++);
                var a = this.svgFactory.createElement("svg:mask");
                a.setAttributeNS(null, "id", t.maskId);
                var o = this.svgFactory.createElement("svg:rect");
                o.setAttributeNS(null, "x", "0"),
                  o.setAttributeNS(null, "y", "0"),
                  o.setAttributeNS(null, "width", _(r)),
                  o.setAttributeNS(null, "height", _(n)),
                  o.setAttributeNS(null, "fill", i),
                  o.setAttributeNS(null, "mask", "url(#".concat(t.maskId, ")")),
                  this.defs.appendChild(a),
                  this._ensureTransformGroup().appendChild(o),
                  this.paintInlineImageXObject(e, a);
              },
            },
            {
              key: "paintFormXObjectBegin",
              value: function(e, t) {
                if (
                  (Array.isArray(e) &&
                    6 === e.length &&
                    this.transform(e[0], e[1], e[2], e[3], e[4], e[5]),
                  t)
                ) {
                  var r = t[2] - t[0],
                    n = t[3] - t[1],
                    i = this.svgFactory.createElement("svg:rect");
                  i.setAttributeNS(null, "x", t[0]),
                    i.setAttributeNS(null, "y", t[1]),
                    i.setAttributeNS(null, "width", _(r)),
                    i.setAttributeNS(null, "height", _(n)),
                    (this.current.element = i),
                    this.clip("nonzero"),
                    this.endPath();
                }
              },
            },
            { key: "paintFormXObjectEnd", value: function() {} },
            {
              key: "_initialize",
              value: function(e) {
                var t = this.svgFactory.create(e.width, e.height),
                  r = this.svgFactory.createElement("svg:defs");
                t.appendChild(r), (this.defs = r);
                var n = this.svgFactory.createElement("svg:g");
                return (
                  n.setAttributeNS(null, "transform", A(e.transform)),
                  t.appendChild(n),
                  (this.svg = n),
                  t
                );
              },
            },
            {
              key: "_ensureClipGroup",
              value: function() {
                if (!this.current.clipGroup) {
                  var e = this.svgFactory.createElement("svg:g");
                  e.setAttributeNS(
                    null,
                    "clip-path",
                    this.current.activeClipUrl
                  ),
                    this.svg.appendChild(e),
                    (this.current.clipGroup = e);
                }
                return this.current.clipGroup;
              },
            },
            {
              key: "_ensureTransformGroup",
              value: function() {
                return (
                  this.tgrp ||
                    ((this.tgrp = this.svgFactory.createElement("svg:g")),
                    this.tgrp.setAttributeNS(
                      null,
                      "transform",
                      A(this.transformMatrix)
                    ),
                    this.current.activeClipUrl
                      ? this._ensureClipGroup().appendChild(this.tgrp)
                      : this.svg.appendChild(this.tgrp)),
                  this.tgrp
                );
              },
            },
          ]),
          e
        );
      })();
    },
    function(e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function a(e, t) {
        return !t || ("object" !== i(t) && "function" != typeof t) ? o(e) : t;
      }
      function o(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function s(e) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && c(e, t);
      }
      function c(e, t) {
        return (c =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function l(e, t, r, n, i, a, o) {
        try {
          var s = e[a](o),
            u = s.value;
        } catch (c) {
          return void r(c);
        }
        s.done ? t(u) : Promise.resolve(u).then(n, i);
      }
      function h(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, i) {
            function a(e) {
              l(s, n, i, a, o, "next", e);
            }
            function o(e) {
              l(s, n, i, a, o, "throw", e);
            }
            var s = e.apply(t, r);
            a(void 0);
          });
        };
      }
      function f(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function d(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function p(e, t, r) {
        return t && d(e.prototype, t), r && d(e, r), e;
      }
      function v(e) {
        var t = S.parse(e);
        return "file:" === t.protocol || t.host
          ? t
          : /^[a-z]:[\/\\]/i.test(e)
          ? S.parse("file:///".concat(e))
          : (t.host || (t.protocol = "file:"), t);
      }
      function g(e, t) {
        return {
          protocol: e.protocol,
          auth: e.auth,
          host: e.hostname,
          port: e.port,
          path: e.path,
          method: "GET",
          headers: t,
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PDFNodeStream = void 0);
      var m = n(r(180)),
        y = r(1),
        b = r(198),
        _ = require("http"),
        A = require("https"),
        S = require("url"),
        w = /^file:\/\/\/[a-zA-Z]:\//,
        k = (function() {
          function e(t) {
            f(this, e),
              (this.source = t),
              (this.url = v(t.url)),
              (this.isHttp =
                "http:" === this.url.protocol ||
                "https:" === this.url.protocol),
              (this.isFsUrl = "file:" === this.url.protocol),
              (this.httpHeaders = (this.isHttp && t.httpHeaders) || {}),
              (this._fullRequestReader = null),
              (this._rangeRequestReaders = []);
          }
          return (
            p(e, [
              {
                key: "getFullReader",
                value: function() {
                  return (
                    (0, y.assert)(!this._fullRequestReader),
                    (this._fullRequestReader = this.isFsUrl
                      ? new T(this)
                      : new P(this)),
                    this._fullRequestReader
                  );
                },
              },
              {
                key: "getRangeReader",
                value: function(e, t) {
                  if (t <= this._progressiveDataLength) return null;
                  var r = this.isFsUrl ? new E(this, e, t) : new R(this, e, t);
                  return this._rangeRequestReaders.push(r), r;
                },
              },
              {
                key: "cancelAllRequests",
                value: function(e) {
                  this._fullRequestReader && this._fullRequestReader.cancel(e);
                  var t = this._rangeRequestReaders.slice(0);
                  t.forEach(function(t) {
                    t.cancel(e);
                  });
                },
              },
              {
                key: "_progressiveDataLength",
                get: function() {
                  return this._fullRequestReader
                    ? this._fullRequestReader._loaded
                    : 0;
                },
              },
            ]),
            e
          );
        })();
      t.PDFNodeStream = k;
      var x = (function() {
          function e(t) {
            f(this, e),
              (this._url = t.url),
              (this._done = !1),
              (this._storedError = null),
              (this.onProgress = null);
            var r = t.source;
            (this._contentLength = r.length),
              (this._loaded = 0),
              (this._filename = null),
              (this._disableRange = r.disableRange || !1),
              (this._rangeChunkSize = r.rangeChunkSize),
              this._rangeChunkSize ||
                this._disableRange ||
                (this._disableRange = !0),
              (this._isStreamingSupported = !r.disableStream),
              (this._isRangeSupported = !r.disableRange),
              (this._readableStream = null),
              (this._readCapability = (0, y.createPromiseCapability)()),
              (this._headersCapability = (0, y.createPromiseCapability)());
          }
          return (
            p(e, [
              {
                key: "read",
                value: (function() {
                  function e() {
                    return t.apply(this, arguments);
                  }
                  var t = h(
                    m["default"].mark(function r() {
                      var e, t;
                      return m["default"].wrap(
                        function(r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return (
                                  (r.next = 2), this._readCapability.promise
                                );
                              case 2:
                                if (!this._done) {
                                  r.next = 4;
                                  break;
                                }
                                return r.abrupt("return", {
                                  value: void 0,
                                  done: !0,
                                });
                              case 4:
                                if (!this._storedError) {
                                  r.next = 6;
                                  break;
                                }
                                throw this._storedError;
                              case 6:
                                if (
                                  ((e = this._readableStream.read()),
                                  null !== e)
                                ) {
                                  r.next = 10;
                                  break;
                                }
                                return (
                                  (this._readCapability = (0,
                                  y.createPromiseCapability)()),
                                  r.abrupt("return", this.read())
                                );
                              case 10:
                                return (
                                  (this._loaded += e.length),
                                  this.onProgress &&
                                    this.onProgress({
                                      loaded: this._loaded,
                                      total: this._contentLength,
                                    }),
                                  (t = new Uint8Array(e).buffer),
                                  r.abrupt("return", { value: t, done: !1 })
                                );
                              case 14:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        this
                      );
                    })
                  );
                  return e;
                })(),
              },
              {
                key: "cancel",
                value: function(e) {
                  return this._readableStream
                    ? void this._readableStream.destroy(e)
                    : void this._error(e);
                },
              },
              {
                key: "_error",
                value: function(e) {
                  (this._storedError = e), this._readCapability.resolve();
                },
              },
              {
                key: "_setReadableStream",
                value: function(e) {
                  var t = this;
                  (this._readableStream = e),
                    e.on("readable", function() {
                      t._readCapability.resolve();
                    }),
                    e.on("end", function() {
                      e.destroy(), (t._done = !0), t._readCapability.resolve();
                    }),
                    e.on("error", function(e) {
                      t._error(e);
                    }),
                    !this._isStreamingSupported &&
                      this._isRangeSupported &&
                      this._error(
                        new y.AbortException("streaming is disabled")
                      ),
                    this._storedError &&
                      this._readableStream.destroy(this._storedError);
                },
              },
              {
                key: "headersReady",
                get: function() {
                  return this._headersCapability.promise;
                },
              },
              {
                key: "filename",
                get: function() {
                  return this._filename;
                },
              },
              {
                key: "contentLength",
                get: function() {
                  return this._contentLength;
                },
              },
              {
                key: "isRangeSupported",
                get: function() {
                  return this._isRangeSupported;
                },
              },
              {
                key: "isStreamingSupported",
                get: function() {
                  return this._isStreamingSupported;
                },
              },
            ]),
            e
          );
        })(),
        C = (function() {
          function e(t) {
            f(this, e),
              (this._url = t.url),
              (this._done = !1),
              (this._storedError = null),
              (this.onProgress = null),
              (this._loaded = 0),
              (this._readableStream = null),
              (this._readCapability = (0, y.createPromiseCapability)());
            var r = t.source;
            this._isStreamingSupported = !r.disableStream;
          }
          return (
            p(e, [
              {
                key: "read",
                value: (function() {
                  function e() {
                    return t.apply(this, arguments);
                  }
                  var t = h(
                    m["default"].mark(function r() {
                      var e, t;
                      return m["default"].wrap(
                        function(r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return (
                                  (r.next = 2), this._readCapability.promise
                                );
                              case 2:
                                if (!this._done) {
                                  r.next = 4;
                                  break;
                                }
                                return r.abrupt("return", {
                                  value: void 0,
                                  done: !0,
                                });
                              case 4:
                                if (!this._storedError) {
                                  r.next = 6;
                                  break;
                                }
                                throw this._storedError;
                              case 6:
                                if (
                                  ((e = this._readableStream.read()),
                                  null !== e)
                                ) {
                                  r.next = 10;
                                  break;
                                }
                                return (
                                  (this._readCapability = (0,
                                  y.createPromiseCapability)()),
                                  r.abrupt("return", this.read())
                                );
                              case 10:
                                return (
                                  (this._loaded += e.length),
                                  this.onProgress &&
                                    this.onProgress({ loaded: this._loaded }),
                                  (t = new Uint8Array(e).buffer),
                                  r.abrupt("return", { value: t, done: !1 })
                                );
                              case 14:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        this
                      );
                    })
                  );
                  return e;
                })(),
              },
              {
                key: "cancel",
                value: function(e) {
                  return this._readableStream
                    ? void this._readableStream.destroy(e)
                    : void this._error(e);
                },
              },
              {
                key: "_error",
                value: function(e) {
                  (this._storedError = e), this._readCapability.resolve();
                },
              },
              {
                key: "_setReadableStream",
                value: function(e) {
                  var t = this;
                  (this._readableStream = e),
                    e.on("readable", function() {
                      t._readCapability.resolve();
                    }),
                    e.on("end", function() {
                      e.destroy(), (t._done = !0), t._readCapability.resolve();
                    }),
                    e.on("error", function(e) {
                      t._error(e);
                    }),
                    this._storedError &&
                      this._readableStream.destroy(this._storedError);
                },
              },
              {
                key: "isStreamingSupported",
                get: function() {
                  return this._isStreamingSupported;
                },
              },
            ]),
            e
          );
        })(),
        P = (function(e) {
          function t(e) {
            var r;
            f(this, t), (r = a(this, s(t).call(this, e)));
            var n = function(t) {
              if (404 === t.statusCode) {
                var n = new y.MissingPDFException(
                  'Missing PDF "'.concat(r._url, '".')
                );
                return (
                  (r._storedError = n), void r._headersCapability.reject(n)
                );
              }
              r._headersCapability.resolve(), r._setReadableStream(t);
              var i = function(e) {
                  return r._readableStream.headers[e.toLowerCase()];
                },
                a = (0, b.validateRangeRequestCapabilities)({
                  getResponseHeader: i,
                  isHttp: e.isHttp,
                  rangeChunkSize: r._rangeChunkSize,
                  disableRange: r._disableRange,
                }),
                o = a.allowRangeRequests,
                s = a.suggestedLength;
              (r._isRangeSupported = o),
                (r._contentLength = s || r._contentLength),
                (r._filename = (0, b.extractFilenameFromHeader)(i));
            };
            return (
              (r._request = null),
              "http:" === r._url.protocol
                ? (r._request = _.request(g(r._url, e.httpHeaders), n))
                : (r._request = A.request(g(r._url, e.httpHeaders), n)),
              r._request.on("error", function(e) {
                (r._storedError = e), r._headersCapability.reject(e);
              }),
              r._request.end(),
              r
            );
          }
          return u(t, e), t;
        })(x),
        R = (function(e) {
          function t(e, r, n) {
            var i;
            f(this, t),
              (i = a(this, s(t).call(this, e))),
              (i._httpHeaders = {});
            for (var o in e.httpHeaders) {
              var u = e.httpHeaders[o];
              "undefined" != typeof u && (i._httpHeaders[o] = u);
            }
            i._httpHeaders.Range = "bytes=".concat(r, "-").concat(n - 1);
            var c = function(e) {
              if (404 === e.statusCode) {
                var t = new y.MissingPDFException(
                  'Missing PDF "'.concat(i._url, '".')
                );
                return void (i._storedError = t);
              }
              i._setReadableStream(e);
            };
            return (
              (i._request = null),
              "http:" === i._url.protocol
                ? (i._request = _.request(g(i._url, i._httpHeaders), c))
                : (i._request = A.request(g(i._url, i._httpHeaders), c)),
              i._request.on("error", function(e) {
                i._storedError = e;
              }),
              i._request.end(),
              i
            );
          }
          return u(t, e), t;
        })(C),
        T = (function(e) {
          function t(e) {
            var r;
            f(this, t), (r = a(this, s(t).call(this, e)));
            var n = decodeURIComponent(r._url.path);
            return w.test(r._url.href) && (n = n.replace(/^\//, "")), r;
          }
          return u(t, e), t;
        })(x),
        E = (function(e) {
          function t(e, r, n) {
            var i;
            f(this, t), (i = a(this, s(t).call(this, e)));
            var o = decodeURIComponent(i._url.path);
            return w.test(i._url.href) && (o = o.replace(/^\//, "")), i;
          }
          return u(t, e), t;
        })(C);
    },
    function(e, t, r) {
      "use strict";
      function n(e) {
        var t = e.getResponseHeader,
          r = e.isHttp,
          n = e.rangeChunkSize,
          i = e.disableRange;
        (0, s.assert)(n > 0, "Range chunk size must be larger than zero");
        var a = { allowRangeRequests: !1, suggestedLength: void 0 },
          o = parseInt(t("Content-Length"), 10);
        if (!Number.isInteger(o)) return a;
        if (((a.suggestedLength = o), o <= 2 * n)) return a;
        if (i || !r) return a;
        if ("bytes" !== t("Accept-Ranges")) return a;
        var u = t("Content-Encoding") || "identity";
        return "identity" !== u ? a : ((a.allowRangeRequests = !0), a);
      }
      function i(e) {
        var t = e("Content-Disposition");
        if (t) {
          var r = (0, u.getFilenameFromContentDispositionHeader)(t);
          if (r.includes("%"))
            try {
              r = decodeURIComponent(r);
            } catch (n) {}
          if (/\.pdf$/i.test(r)) return r;
        }
        return null;
      }
      function a(e, t) {
        return 404 === e || (0 === e && /^file:/.test(t))
          ? new s.MissingPDFException('Missing PDF "' + t + '".')
          : new s.UnexpectedResponseException(
              "Unexpected server response (" +
                e +
                ') while retrieving PDF "' +
                t +
                '".',
              e
            );
      }
      function o(e) {
        return 200 === e || 206 === e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.createResponseStatusError = a),
        (t.extractFilenameFromHeader = i),
        (t.validateRangeRequestCapabilities = n),
        (t.validateResponseStatus = o);
      var s = r(1),
        u = r(199);
    },
    function(e, t, r) {
      "use strict";
      function n(e, t) {
        return o(e) || a(e, t) || i();
      }
      function i() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      }
      function a(e, t) {
        if (
          Symbol.iterator in Object(e) ||
          "[object Arguments]" === Object.prototype.toString.call(e)
        ) {
          var r = [],
            n = !0,
            i = !1,
            a = void 0;
          try {
            for (
              var o, s = e[Symbol.iterator]();
              !(n = (o = s.next()).done) &&
              (r.push(o.value), !t || r.length !== t);
              n = !0
            );
          } catch (u) {
            (i = !0), (a = u);
          } finally {
            try {
              n || null == s["return"] || s["return"]();
            } finally {
              if (i) throw a;
            }
          }
          return r;
        }
      }
      function o(e) {
        if (Array.isArray(e)) return e;
      }
      function s(e) {
        function t(e, t) {
          return new RegExp(
            "(?:^|;)\\s*" +
              e +
              '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',
            t
          );
        }
        function r(e, t) {
          if (e) {
            if (!/^[\x00-\xFF]+$/.test(t)) return t;
            try {
              var r = new TextDecoder(e, { fatal: !0 }),
                n = Array.from(t, function(e) {
                  return 255 & e.charCodeAt(0);
                });
              (t = r.decode(new Uint8Array(n))), (c = !1);
            } catch (i) {
              if (/^utf-?8$/i.test(e))
                try {
                  (t = decodeURIComponent(escape(t))), (c = !1);
                } catch (a) {}
            }
          }
          return t;
        }
        function i(e) {
          return (
            c &&
              /[\x80-\xff]/.test(e) &&
              ((e = r("utf-8", e)), c && (e = r("iso-8859-1", e))),
            e
          );
        }
        function a(e) {
          for (
            var r, i = [], a = t("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
            null !== (r = a.exec(e));

          ) {
            var u = r,
              c = n(u, 4),
              l = c[1],
              h = c[2],
              f = c[3];
            if (((l = parseInt(l, 10)), l in i)) {
              if (0 === l) break;
            } else i[l] = [h, f];
          }
          for (var d = [], l = 0; l < i.length && l in i; ++l) {
            var p = n(i[l], 2),
              h = p[0],
              f = p[1];
            (f = o(f)),
              h && ((f = unescape(f)), 0 === l && (f = s(f))),
              d.push(f);
          }
          return d.join("");
        }
        function o(e) {
          if (e.startsWith('"')) {
            for (var t = e.slice(1).split('\\"'), r = 0; r < t.length; ++r) {
              var n = t[r].indexOf('"');
              n !== -1 && ((t[r] = t[r].slice(0, n)), (t.length = r + 1)),
                (t[r] = t[r].replace(/\\(.)/g, "$1"));
            }
            e = t.join('"');
          }
          return e;
        }
        function s(e) {
          var t = e.indexOf("'");
          if (t === -1) return e;
          var n = e.slice(0, t),
            i = e.slice(t + 1),
            a = i.replace(/^[^']*'/, "");
          return r(n, a);
        }
        function u(e) {
          return !e.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(e)
            ? e
            : e.replace(
                /=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,
                function(e, t, n, i) {
                  if ("q" === n || "Q" === n)
                    return (
                      (i = i.replace(/_/g, " ")),
                      (i = i.replace(/=([0-9a-fA-F]{2})/g, function(e, t) {
                        return String.fromCharCode(parseInt(t, 16));
                      })),
                      r(t, i)
                    );
                  try {
                    i = atob(i);
                  } catch (a) {}
                  return r(t, i);
                }
              );
        }
        var c = !0,
          l = t("filename\\*", "i").exec(e);
        if (l) {
          l = l[1];
          var h = o(l);
          return (h = unescape(h)), (h = s(h)), (h = u(h)), i(h);
        }
        if ((l = a(e))) {
          var f = u(l);
          return i(f);
        }
        if ((l = t("filename", "i").exec(e))) {
          l = l[1];
          var d = o(l);
          return (d = u(d)), i(d);
        }
        return "";
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getFilenameFromContentDispositionHeader = s);
    },
    function(e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, r, n, i, a, o) {
        try {
          var s = e[a](o),
            u = s.value;
        } catch (c) {
          return void r(c);
        }
        s.done ? t(u) : Promise.resolve(u).then(n, i);
      }
      function a(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, a) {
            function o(e) {
              i(u, n, a, o, s, "next", e);
            }
            function s(e) {
              i(u, n, a, o, s, "throw", e);
            }
            var u = e.apply(t, r);
            o(void 0);
          });
        };
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function u(e, t, r) {
        return t && s(e.prototype, t), r && s(e, r), e;
      }
      function c(e) {
        var t = e.response;
        if ("string" != typeof t) return t;
        var r = (0, h.stringToBytes)(t);
        return r.buffer;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PDFNetworkStream = void 0);
      var l = n(r(180)),
        h = r(1),
        f = r(198),
        d = 200,
        p = 206,
        v = (function() {
          function e(t, r) {
            o(this, e),
              (this.url = t),
              (r = r || {}),
              (this.isHttp = /^https?:/i.test(t)),
              (this.httpHeaders = (this.isHttp && r.httpHeaders) || {}),
              (this.withCredentials = r.withCredentials || !1),
              (this.getXhr =
                r.getXhr ||
                function() {
                  return new XMLHttpRequest();
                }),
              (this.currXhrId = 0),
              (this.pendingRequests = Object.create(null));
          }
          return (
            u(e, [
              {
                key: "requestRange",
                value: function(e, t, r) {
                  var n = { begin: e, end: t };
                  for (var i in r) n[i] = r[i];
                  return this.request(n);
                },
              },
              {
                key: "requestFull",
                value: function(e) {
                  return this.request(e);
                },
              },
              {
                key: "request",
                value: function(e) {
                  var t = this.getXhr(),
                    r = this.currXhrId++,
                    n = (this.pendingRequests[r] = { xhr: t });
                  t.open("GET", this.url),
                    (t.withCredentials = this.withCredentials);
                  for (var i in this.httpHeaders) {
                    var a = this.httpHeaders[i];
                    "undefined" != typeof a && t.setRequestHeader(i, a);
                  }
                  return (
                    this.isHttp && "begin" in e && "end" in e
                      ? (t.setRequestHeader(
                          "Range",
                          "bytes=".concat(e.begin, "-").concat(e.end - 1)
                        ),
                        (n.expectedStatus = p))
                      : (n.expectedStatus = d),
                    (t.responseType = "arraybuffer"),
                    e.onError &&
                      (t.onerror = function(r) {
                        e.onError(t.status);
                      }),
                    (t.onreadystatechange = this.onStateChange.bind(this, r)),
                    (t.onprogress = this.onProgress.bind(this, r)),
                    (n.onHeadersReceived = e.onHeadersReceived),
                    (n.onDone = e.onDone),
                    (n.onError = e.onError),
                    (n.onProgress = e.onProgress),
                    t.send(null),
                    r
                  );
                },
              },
              {
                key: "onProgress",
                value: function(e, t) {
                  var r = this.pendingRequests[e];
                  r && r.onProgress && r.onProgress(t);
                },
              },
              {
                key: "onStateChange",
                value: function(e, t) {
                  var r = this.pendingRequests[e];
                  if (r) {
                    var n = r.xhr;
                    if (
                      (n.readyState >= 2 &&
                        r.onHeadersReceived &&
                        (r.onHeadersReceived(), delete r.onHeadersReceived),
                      4 === n.readyState && e in this.pendingRequests)
                    ) {
                      if (
                        (delete this.pendingRequests[e],
                        0 === n.status && this.isHttp)
                      )
                        return void (r.onError && r.onError(n.status));
                      var i = n.status || d,
                        a = i === d && r.expectedStatus === p;
                      if (!a && i !== r.expectedStatus)
                        return void (r.onError && r.onError(n.status));
                      var o = c(n);
                      if (i === p) {
                        var s = n.getResponseHeader("Content-Range"),
                          u = /bytes (\d+)-(\d+)\/(\d+)/.exec(s);
                        r.onDone({ begin: parseInt(u[1], 10), chunk: o });
                      } else
                        o
                          ? r.onDone({ begin: 0, chunk: o })
                          : r.onError && r.onError(n.status);
                    }
                  }
                },
              },
              {
                key: "hasPendingRequests",
                value: function() {
                  for (var e in this.pendingRequests) return !0;
                  return !1;
                },
              },
              {
                key: "getRequestXhr",
                value: function(e) {
                  return this.pendingRequests[e].xhr;
                },
              },
              {
                key: "isPendingRequest",
                value: function(e) {
                  return e in this.pendingRequests;
                },
              },
              {
                key: "abortAllRequests",
                value: function() {
                  for (var e in this.pendingRequests) this.abortRequest(0 | e);
                },
              },
              {
                key: "abortRequest",
                value: function(e) {
                  var t = this.pendingRequests[e].xhr;
                  delete this.pendingRequests[e], t.abort();
                },
              },
            ]),
            e
          );
        })(),
        g = (function() {
          function e(t) {
            o(this, e),
              (this._source = t),
              (this._manager = new v(t.url, {
                httpHeaders: t.httpHeaders,
                withCredentials: t.withCredentials,
              })),
              (this._rangeChunkSize = t.rangeChunkSize),
              (this._fullRequestReader = null),
              (this._rangeRequestReaders = []);
          }
          return (
            u(e, [
              {
                key: "_onRangeRequestReaderClosed",
                value: function(e) {
                  var t = this._rangeRequestReaders.indexOf(e);
                  t >= 0 && this._rangeRequestReaders.splice(t, 1);
                },
              },
              {
                key: "getFullReader",
                value: function() {
                  return (
                    (0, h.assert)(!this._fullRequestReader),
                    (this._fullRequestReader = new m(
                      this._manager,
                      this._source
                    )),
                    this._fullRequestReader
                  );
                },
              },
              {
                key: "getRangeReader",
                value: function(e, t) {
                  var r = new y(this._manager, e, t);
                  return (
                    (r.onClosed = this._onRangeRequestReaderClosed.bind(this)),
                    this._rangeRequestReaders.push(r),
                    r
                  );
                },
              },
              {
                key: "cancelAllRequests",
                value: function(e) {
                  this._fullRequestReader && this._fullRequestReader.cancel(e);
                  var t = this._rangeRequestReaders.slice(0);
                  t.forEach(function(t) {
                    t.cancel(e);
                  });
                },
              },
            ]),
            e
          );
        })();
      t.PDFNetworkStream = g;
      var m = (function() {
          function e(t, r) {
            o(this, e), (this._manager = t);
            var n = {
              onHeadersReceived: this._onHeadersReceived.bind(this),
              onDone: this._onDone.bind(this),
              onError: this._onError.bind(this),
              onProgress: this._onProgress.bind(this),
            };
            (this._url = r.url),
              (this._fullRequestId = t.requestFull(n)),
              (this._headersReceivedCapability = (0,
              h.createPromiseCapability)()),
              (this._disableRange = r.disableRange || !1),
              (this._contentLength = r.length),
              (this._rangeChunkSize = r.rangeChunkSize),
              this._rangeChunkSize ||
                this._disableRange ||
                (this._disableRange = !0),
              (this._isStreamingSupported = !1),
              (this._isRangeSupported = !1),
              (this._cachedChunks = []),
              (this._requests = []),
              (this._done = !1),
              (this._storedError = void 0),
              (this._filename = null),
              (this.onProgress = null);
          }
          return (
            u(e, [
              {
                key: "_onHeadersReceived",
                value: function() {
                  var e = this._fullRequestId,
                    t = this._manager.getRequestXhr(e),
                    r = function(e) {
                      return t.getResponseHeader(e);
                    },
                    n = (0, f.validateRangeRequestCapabilities)({
                      getResponseHeader: r,
                      isHttp: this._manager.isHttp,
                      rangeChunkSize: this._rangeChunkSize,
                      disableRange: this._disableRange,
                    }),
                    i = n.allowRangeRequests,
                    a = n.suggestedLength;
                  i && (this._isRangeSupported = !0),
                    (this._contentLength = a || this._contentLength),
                    (this._filename = (0, f.extractFilenameFromHeader)(r)),
                    this._isRangeSupported && this._manager.abortRequest(e),
                    this._headersReceivedCapability.resolve();
                },
              },
              {
                key: "_onDone",
                value: function(e) {
                  if (e)
                    if (this._requests.length > 0) {
                      var t = this._requests.shift();
                      t.resolve({ value: e.chunk, done: !1 });
                    } else this._cachedChunks.push(e.chunk);
                  (this._done = !0),
                    this._cachedChunks.length > 0 ||
                      (this._requests.forEach(function(e) {
                        e.resolve({ value: void 0, done: !0 });
                      }),
                      (this._requests = []));
                },
              },
              {
                key: "_onError",
                value: function(e) {
                  var t = this._url,
                    r = (0, f.createResponseStatusError)(e, t);
                  (this._storedError = r),
                    this._headersReceivedCapability.reject(r),
                    this._requests.forEach(function(e) {
                      e.reject(r);
                    }),
                    (this._requests = []),
                    (this._cachedChunks = []);
                },
              },
              {
                key: "_onProgress",
                value: function(e) {
                  this.onProgress &&
                    this.onProgress({
                      loaded: e.loaded,
                      total: e.lengthComputable ? e.total : this._contentLength,
                    });
                },
              },
              {
                key: "read",
                value: (function() {
                  function e() {
                    return t.apply(this, arguments);
                  }
                  var t = a(
                    l["default"].mark(function r() {
                      var e, t;
                      return l["default"].wrap(
                        function(r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                if (!this._storedError) {
                                  r.next = 2;
                                  break;
                                }
                                throw this._storedError;
                              case 2:
                                if (!(this._cachedChunks.length > 0)) {
                                  r.next = 5;
                                  break;
                                }
                                return (
                                  (e = this._cachedChunks.shift()),
                                  r.abrupt("return", { value: e, done: !1 })
                                );
                              case 5:
                                if (!this._done) {
                                  r.next = 7;
                                  break;
                                }
                                return r.abrupt("return", {
                                  value: void 0,
                                  done: !0,
                                });
                              case 7:
                                return (
                                  (t = (0, h.createPromiseCapability)()),
                                  this._requests.push(t),
                                  r.abrupt("return", t.promise)
                                );
                              case 10:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        this
                      );
                    })
                  );
                  return e;
                })(),
              },
              {
                key: "cancel",
                value: function(e) {
                  (this._done = !0),
                    this._headersReceivedCapability.reject(e),
                    this._requests.forEach(function(e) {
                      e.resolve({ value: void 0, done: !0 });
                    }),
                    (this._requests = []),
                    this._manager.isPendingRequest(this._fullRequestId) &&
                      this._manager.abortRequest(this._fullRequestId),
                    (this._fullRequestReader = null);
                },
              },
              {
                key: "filename",
                get: function() {
                  return this._filename;
                },
              },
              {
                key: "isRangeSupported",
                get: function() {
                  return this._isRangeSupported;
                },
              },
              {
                key: "isStreamingSupported",
                get: function() {
                  return this._isStreamingSupported;
                },
              },
              {
                key: "contentLength",
                get: function() {
                  return this._contentLength;
                },
              },
              {
                key: "headersReady",
                get: function() {
                  return this._headersReceivedCapability.promise;
                },
              },
            ]),
            e
          );
        })(),
        y = (function() {
          function e(t, r, n) {
            o(this, e), (this._manager = t);
            var i = {
              onDone: this._onDone.bind(this),
              onProgress: this._onProgress.bind(this),
            };
            (this._requestId = t.requestRange(r, n, i)),
              (this._requests = []),
              (this._queuedChunk = null),
              (this._done = !1),
              (this.onProgress = null),
              (this.onClosed = null);
          }
          return (
            u(e, [
              {
                key: "_close",
                value: function() {
                  this.onClosed && this.onClosed(this);
                },
              },
              {
                key: "_onDone",
                value: function(e) {
                  var t = e.chunk;
                  if (this._requests.length > 0) {
                    var r = this._requests.shift();
                    r.resolve({ value: t, done: !1 });
                  } else this._queuedChunk = t;
                  (this._done = !0),
                    this._requests.forEach(function(e) {
                      e.resolve({ value: void 0, done: !0 });
                    }),
                    (this._requests = []),
                    this._close();
                },
              },
              {
                key: "_onProgress",
                value: function(e) {
                  !this.isStreamingSupported &&
                    this.onProgress &&
                    this.onProgress({ loaded: e.loaded });
                },
              },
              {
                key: "read",
                value: (function() {
                  function e() {
                    return t.apply(this, arguments);
                  }
                  var t = a(
                    l["default"].mark(function r() {
                      var e, t;
                      return l["default"].wrap(
                        function(r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                if (null === this._queuedChunk) {
                                  r.next = 4;
                                  break;
                                }
                                return (
                                  (e = this._queuedChunk),
                                  (this._queuedChunk = null),
                                  r.abrupt("return", { value: e, done: !1 })
                                );
                              case 4:
                                if (!this._done) {
                                  r.next = 6;
                                  break;
                                }
                                return r.abrupt("return", {
                                  value: void 0,
                                  done: !0,
                                });
                              case 6:
                                return (
                                  (t = (0, h.createPromiseCapability)()),
                                  this._requests.push(t),
                                  r.abrupt("return", t.promise)
                                );
                              case 9:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        this
                      );
                    })
                  );
                  return e;
                })(),
              },
              {
                key: "cancel",
                value: function(e) {
                  (this._done = !0),
                    this._requests.forEach(function(e) {
                      e.resolve({ value: void 0, done: !0 });
                    }),
                    (this._requests = []),
                    this._manager.isPendingRequest(this._requestId) &&
                      this._manager.abortRequest(this._requestId),
                    this._close();
                },
              },
              {
                key: "isStreamingSupported",
                get: function() {
                  return !1;
                },
              },
            ]),
            e
          );
        })();
    },
    function(e, t, r) {
      "use strict";
      function n(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function i(e, t, r, n, i, a, o) {
        try {
          var s = e[a](o),
            u = s.value;
        } catch (c) {
          return void r(c);
        }
        s.done ? t(u) : Promise.resolve(u).then(n, i);
      }
      function a(e) {
        return function() {
          var t = this,
            r = arguments;
          return new Promise(function(n, a) {
            function o(e) {
              i(u, n, a, o, s, "next", e);
            }
            function s(e) {
              i(u, n, a, o, s, "throw", e);
            }
            var u = e.apply(t, r);
            o(void 0);
          });
        };
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function u(e, t, r) {
        return t && s(e.prototype, t), r && s(e, r), e;
      }
      function c(e, t, r) {
        return {
          method: "GET",
          headers: e,
          signal: r && r.signal,
          mode: "cors",
          credentials: t ? "include" : "same-origin",
          redirect: "follow",
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PDFFetchStream = void 0);
      var l = n(r(180)),
        h = r(1),
        f = r(198),
        d = (function() {
          function e(t) {
            o(this, e),
              (this.source = t),
              (this.isHttp = /^https?:/i.test(t.url)),
              (this.httpHeaders = (this.isHttp && t.httpHeaders) || {}),
              (this._fullRequestReader = null),
              (this._rangeRequestReaders = []);
          }
          return (
            u(e, [
              {
                key: "getFullReader",
                value: function() {
                  return (
                    (0, h.assert)(!this._fullRequestReader),
                    (this._fullRequestReader = new p(this)),
                    this._fullRequestReader
                  );
                },
              },
              {
                key: "getRangeReader",
                value: function(e, t) {
                  if (t <= this._progressiveDataLength) return null;
                  var r = new v(this, e, t);
                  return this._rangeRequestReaders.push(r), r;
                },
              },
              {
                key: "cancelAllRequests",
                value: function(e) {
                  this._fullRequestReader && this._fullRequestReader.cancel(e);
                  var t = this._rangeRequestReaders.slice(0);
                  t.forEach(function(t) {
                    t.cancel(e);
                  });
                },
              },
              {
                key: "_progressiveDataLength",
                get: function() {
                  return this._fullRequestReader
                    ? this._fullRequestReader._loaded
                    : 0;
                },
              },
            ]),
            e
          );
        })();
      t.PDFFetchStream = d;
      var p = (function() {
          function e(t) {
            var r = this;
            o(this, e),
              (this._stream = t),
              (this._reader = null),
              (this._loaded = 0),
              (this._filename = null);
            var n = t.source;
            (this._withCredentials = n.withCredentials || !1),
              (this._contentLength = n.length),
              (this._headersCapability = (0, h.createPromiseCapability)()),
              (this._disableRange = n.disableRange || !1),
              (this._rangeChunkSize = n.rangeChunkSize),
              this._rangeChunkSize ||
                this._disableRange ||
                (this._disableRange = !0),
              "undefined" != typeof AbortController &&
                (this._abortController = new AbortController()),
              (this._isStreamingSupported = !n.disableStream),
              (this._isRangeSupported = !n.disableRange),
              (this._headers = new Headers());
            for (var i in this._stream.httpHeaders) {
              var a = this._stream.httpHeaders[i];
              "undefined" != typeof a && this._headers.append(i, a);
            }
            var s = n.url;
            fetch(
              s,
              c(this._headers, this._withCredentials, this._abortController)
            )
              .then(function(e) {
                if (!(0, f.validateResponseStatus)(e.status))
                  throw (0, f.createResponseStatusError)(e.status, s);
                (r._reader = e.body.getReader()),
                  r._headersCapability.resolve();
                var t = function(t) {
                    return e.headers.get(t);
                  },
                  n = (0, f.validateRangeRequestCapabilities)({
                    getResponseHeader: t,
                    isHttp: r._stream.isHttp,
                    rangeChunkSize: r._rangeChunkSize,
                    disableRange: r._disableRange,
                  }),
                  i = n.allowRangeRequests,
                  a = n.suggestedLength;
                (r._isRangeSupported = i),
                  (r._contentLength = a || r._contentLength),
                  (r._filename = (0, f.extractFilenameFromHeader)(t)),
                  !r._isStreamingSupported &&
                    r._isRangeSupported &&
                    r.cancel(new h.AbortException("Streaming is disabled."));
              })
              ["catch"](this._headersCapability.reject),
              (this.onProgress = null);
          }
          return (
            u(e, [
              {
                key: "read",
                value: (function() {
                  function e() {
                    return t.apply(this, arguments);
                  }
                  var t = a(
                    l["default"].mark(function r() {
                      var e, t, n, i;
                      return l["default"].wrap(
                        function(r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return (
                                  (r.next = 2), this._headersCapability.promise
                                );
                              case 2:
                                return (r.next = 4), this._reader.read();
                              case 4:
                                if (
                                  ((e = r.sent),
                                  (t = e.value),
                                  (n = e.done),
                                  !n)
                                ) {
                                  r.next = 9;
                                  break;
                                }
                                return r.abrupt("return", {
                                  value: t,
                                  done: n,
                                });
                              case 9:
                                return (
                                  (this._loaded += t.byteLength),
                                  this.onProgress &&
                                    this.onProgress({
                                      loaded: this._loaded,
                                      total: this._contentLength,
                                    }),
                                  (i = new Uint8Array(t).buffer),
                                  r.abrupt("return", { value: i, done: !1 })
                                );
                              case 13:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        this
                      );
                    })
                  );
                  return e;
                })(),
              },
              {
                key: "cancel",
                value: function(e) {
                  this._reader && this._reader.cancel(e),
                    this._abortController && this._abortController.abort();
                },
              },
              {
                key: "headersReady",
                get: function() {
                  return this._headersCapability.promise;
                },
              },
              {
                key: "filename",
                get: function() {
                  return this._filename;
                },
              },
              {
                key: "contentLength",
                get: function() {
                  return this._contentLength;
                },
              },
              {
                key: "isRangeSupported",
                get: function() {
                  return this._isRangeSupported;
                },
              },
              {
                key: "isStreamingSupported",
                get: function() {
                  return this._isStreamingSupported;
                },
              },
            ]),
            e
          );
        })(),
        v = (function() {
          function e(t, r, n) {
            var i = this;
            o(this, e),
              (this._stream = t),
              (this._reader = null),
              (this._loaded = 0);
            var a = t.source;
            (this._withCredentials = a.withCredentials || !1),
              (this._readCapability = (0, h.createPromiseCapability)()),
              (this._isStreamingSupported = !a.disableStream),
              "undefined" != typeof AbortController &&
                (this._abortController = new AbortController()),
              (this._headers = new Headers());
            for (var s in this._stream.httpHeaders) {
              var u = this._stream.httpHeaders[s];
              "undefined" != typeof u && this._headers.append(s, u);
            }
            this._headers.append(
              "Range",
              "bytes=".concat(r, "-").concat(n - 1)
            );
            var l = a.url;
            fetch(
              l,
              c(this._headers, this._withCredentials, this._abortController)
            ).then(function(e) {
              if (!(0, f.validateResponseStatus)(e.status))
                throw (0, f.createResponseStatusError)(e.status, l);
              i._readCapability.resolve(), (i._reader = e.body.getReader());
            }),
              (this.onProgress = null);
          }
          return (
            u(e, [
              {
                key: "read",
                value: (function() {
                  function e() {
                    return t.apply(this, arguments);
                  }
                  var t = a(
                    l["default"].mark(function r() {
                      var e, t, n, i;
                      return l["default"].wrap(
                        function(r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return (
                                  (r.next = 2), this._readCapability.promise
                                );
                              case 2:
                                return (r.next = 4), this._reader.read();
                              case 4:
                                if (
                                  ((e = r.sent),
                                  (t = e.value),
                                  (n = e.done),
                                  !n)
                                ) {
                                  r.next = 9;
                                  break;
                                }
                                return r.abrupt("return", {
                                  value: t,
                                  done: n,
                                });
                              case 9:
                                return (
                                  (this._loaded += t.byteLength),
                                  this.onProgress &&
                                    this.onProgress({ loaded: this._loaded }),
                                  (i = new Uint8Array(t).buffer),
                                  r.abrupt("return", { value: i, done: !1 })
                                );
                              case 13:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        this
                      );
                    })
                  );
                  return e;
                })(),
              },
              {
                key: "cancel",
                value: function(e) {
                  this._reader && this._reader.cancel(e),
                    this._abortController && this._abortController.abort();
                },
              },
              {
                key: "isStreamingSupported",
                get: function() {
                  return this._isStreamingSupported;
                },
              },
            ]),
            e
          );
        })();
    },
  ]);
});