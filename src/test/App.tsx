import React, { Component } from 'react';
import ReportTest from "./ReportTest";
import ReactDOM from 'react-dom';

export default class App extends Component {

    baixar = async () => {
        var reportTest = ReactDOM.render(<ReportTest/>, document.getElementById('a')) as any;
        console.log(reportTest);
        await reportTest.report.current.downloadPDF();
    }

	render() {
		return (
            <div>
                <button onClick={this.baixar}>Baixar</button>
                <div id="a" style={{ display: "none" }}></div>
            </div>
		);
	}
}