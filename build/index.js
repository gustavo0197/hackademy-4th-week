"use strict";

require("regenerator-runtime/runtime");

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

var _mongo = require("./mongo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var server = (0, _express["default"])();

_dotenv["default"].config(); // Load environment variables (.env file)


server.use((0, _cors["default"])());
server.use(_bodyParser["default"].urlencoded({
  extended: false
}));
server.use(_bodyParser["default"].json());
server.use(_routes["default"]);
server.use("", _express["default"]["static"](process.cwd() + "/src/public/build"));

function setupApp() {
  return _setupApp.apply(this, arguments);
} //console.log("\x1Bc"); // Clear console


function _setupApp() {
  _setupApp = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return Promise.all([server.listen(process.env.PORT), (0, _mongo.setupMongo)()]);

          case 3:
            console.log("Listening on http://localhost:".concat(process.env.PORT));
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));
  return _setupApp.apply(this, arguments);
}

setupApp();