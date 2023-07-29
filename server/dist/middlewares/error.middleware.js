"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_error_exception_1 = __importDefault(require("../exceptions/api-error.exception"));
function ErrorMiddleware(error, req, res, next) {
    console.log(error);
    if (error instanceof api_error_exception_1.default) {
        return res.status(error.status).json({ message: error.message, errors: error.errors });
    }
    return res.status(500).json({ message: 'Unhandled error' });
}
exports.default = ErrorMiddleware;
