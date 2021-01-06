"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupMongo = setupMongo;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function setupMongo() {
  return _setupMongo.apply(this, arguments);
}

function _setupMongo() {
  _setupMongo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _mongoose["default"].connect(process.env.MONGO_URI, {
              useNewUrlParser: true,
              useUnifiedTopology: true
            });

          case 2:
            console.log("Mongo is ready");

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _setupMongo.apply(this, arguments);
}