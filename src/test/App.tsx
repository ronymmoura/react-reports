import React, { Component } from 'react';
import ReportTest from "./ReportTest";

export default class App extends Component {

    reportTest = React.createRef<ReportTest>();

    baixar = async () => {
        await this.reportTest.current.download();
    }

	render() {
		return (
            <div>
                <button onClick={this.baixar}>Baixar</button>
                <ReportTest ref={this.reportTest} preview={true} />
            </div>
		);
	}
}