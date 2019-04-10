import React, { ReactNodeArray, ReactNode } from "react";
import { ReportHeader, ReportFooter } from ".";

interface Props {
    children: ReactNode | ReactNodeArray;
    header?: ReportHeader;
    footer?: ReportFooter;
}

export class Page extends React.Component<Props> {
    render() {
        return (
            <div className="page">
                {this.props.header}
                {this.props.children}
                {this.props.footer}
            </div>
        );
    }
}