"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
exports.router = (0, express_1.Router)();
exports.router.post('/register', (0, express_validator_1.body)('name').isString(), (0, express_validator_1.body)('email').isEmail(), (0, express_validator_1.body)('password').isLength({ min: 6, max: 32 }), user_controller_1.default.register);
exports.router.post('/login', user_controller_1.default.login);
exports.router.post('/logout', user_controller_1.default.logout); //refreshToken will be deleted from DB
exports.router.get('/activate/:link', user_controller_1.default.activateAccount);
//will be re-writing accessToken if he's dead. By sending refreshToken from cookies in headers.
exports.router.get('/refresh', user_controller_1.default.refreshToken);
exports.router.get('/users', user_controller_1.default.getUsers);
