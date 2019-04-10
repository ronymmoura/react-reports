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
import React from "react";
var ReportFooter = /** @class */ (function (_super) {
    __extends(ReportFooter, _super);
    function ReportFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReportFooter.prototype.render = function () {
        return (React.createElement("footer", { style: { height: this.props.height } }, this.props.children));
    };
    return ReportFooter;
}(React.Component));
export { ReportFooter };
