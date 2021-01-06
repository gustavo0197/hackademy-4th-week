"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _contact = require("../controllers/contact");

var router = (0, _express.Router)();
router.post("/contact", _contact.contactInfo);
var _default = router;
exports["default"] = _default;