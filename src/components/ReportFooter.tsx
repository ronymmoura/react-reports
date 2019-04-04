import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    height: number;
}

export class ReportFooter extends React.Component<Props> {
    render() {
        return (
            <footer style={{ height: this.props.height }} className={"preview"}>
                {this.props.children}
            </footer>
        );
    }
}