import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
    height: number;
}

export class ReportHeader extends React.Component<Props> {
    render() {
        return (
            <header style={{ height: this.props.height }} className={"preview"}>
                {this.props.children}
            </header>
        );
    }
}