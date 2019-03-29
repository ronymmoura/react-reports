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
var classnames_1 = __importDefault(require("classnames"));
require("./Report.css");
var ReportSize;
(function (ReportSize) {
    ReportSize["A3"] = "A3";
    ReportSize["A4"] = "A4";
    ReportSize["A5"] = "A5";
})(ReportSize = exports.ReportSize || (exports.ReportSize = {}));
var ReportOrientation;
(function (ReportOrientation) {
    ReportOrientation["Landscape"] = "landscape";
    ReportOrientation["Portrait"] = "portrait";
})(ReportOrientation = exports.ReportOrientation || (exports.ReportOrientation = {}));
var Report = /** @class */ (function (_super) {
    __extends(Report, _super);
    function Report() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Report.prototype.render = function () {
        var classes = classnames_1.default("report-page", this.props.size, this.props.orientation);
        return (react_1.default.createElement("div", { className: "report-page-body" },
            react_1.default.createElement("div", { className: classes }, this.props.children)));
    };
    Report.defaultProps = {
        size: ReportSize.A4,
        orientation: ReportOrientation.Portrait
    };
    return Report;
}(react_1.default.Component));
exports.Report = Report;
