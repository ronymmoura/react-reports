import { Report } from "./Report";
import { Page } from "./Page";
import { ReportHeader } from "./ReportHeader";
import { ReportFooter } from "./ReportFooter";
import { PageBreak } from "./PageBreak";

export {
    Report,
    Page,
    ReportHeader,
    ReportFooter,
    PageBreak
}

try {
    var React = require("react");
    var ReactDOM = require("react-dom");
    var App = require("./test/App");
    var ReportTest = require("./test/ReportTest");

    if(App || ReportTest) {
        App = App.default;
        ReportTest = ReportTest.default;
        ReactDOM.render(<App />, document.getElementById('root'));
    }
} catch(e) {}