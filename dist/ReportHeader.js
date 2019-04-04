"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ReportHeader = /** @class */ (function (_super) {
    __extends(ReportHeader, _super);
    function ReportHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReportHeader.prototype.render = function () {
        return (react_1.default.createElement("header", { style: { height: this.props.height }, className: "preview" }, this.props.children));
    };
    return ReportHeader;
}(react_1.default.Component));
exports.ReportHeader = ReportHeader;
