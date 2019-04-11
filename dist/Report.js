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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React from "react";
import className from "classnames";
//import ReactDOMServer from "react-dom/server";
import axios from "axios";
import "./Report.css";
import { ReportHeader, ReportFooter, Page } from ".";
export var ReportSize;
(function (ReportSize) {
    ReportSize["A3"] = "A3";
    ReportSize["A4"] = "A4";
    ReportSize["A5"] = "A5";
})(ReportSize || (ReportSize = {}));
export var ReportOrientation;
(function (ReportOrientation) {
    ReportOrientation["Landscape"] = "landscape";
    ReportOrientation["Portrait"] = "portrait";
})(ReportOrientation || (ReportOrientation = {}));
var Report = /** @class */ (function (_super) {
    __extends(Report, _super);
    function Report() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            downloading: false
        };
        _this.downloadPDF = function () { return __awaiter(_this, void 0, void 0, function () {
            var pages, styles, html, relatorio, url, link;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pages = document.querySelector(".report-content");
                        styles = document.querySelector("head > style");
                        html = "\n            <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" \n                  integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n            <style>" + styles.innerHTML + "</style>\n        ";
                        html = html + pages.innerHTML;
                        return [4 /*yield*/, axios({
                                method: "POST",
                                responseType: 'blob',
                                data: { html: html },
                                url: "http://localhost/CageprevAPI/api/relatorios"
                            })];
                    case 1:
                        relatorio = (_a.sent()).data;
                        url = window.URL.createObjectURL(new Blob([relatorio]));
                        link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', 'relatorio.pdf');
                        document.body.appendChild(link);
                        link.click();
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    Report.prototype.render = function () {
        var classes = className("report-page-body", this.props.size, this.props.orientation);
        var headerHeight = 0;
        var footerHeight = 0;
        var header = this.props.children.filter(function (child) { return child.type === ReportHeader; });
        var footer = this.props.children.filter(function (child) { return child.type === ReportFooter; });
        var newChildren = this.props.children
            .map(function (child, index) {
            if (child.type === Page)
                return React.cloneElement(child, __assign({ key: index, header: header, footer: footer }, child.props));
            else {
                if (child.type === ReportHeader)
                    headerHeight = child.props.height;
                else if (child.type === ReportFooter)
                    footerHeight = child.props.height;
                return child;
            }
        });
        return (React.createElement("div", { className: classes, style: { display: this.props.preview ? "block" : "none" } },
            React.createElement("table", null,
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement("div", { className: "page-header-space", style: { height: headerHeight } })))),
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", { className: "report-content preview" }, newChildren))),
                React.createElement("tfoot", null,
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement("div", { className: "page-footer-space", style: { height: footerHeight } })))))));
    };
    Report.defaultProps = {
        size: ReportSize.A4,
        orientation: ReportOrientation.Portrait
    };
    return Report;
}(React.Component));
export { Report };
