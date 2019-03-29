import React, { ReactNode } from "react";
import className from "classnames";

import "./Report.css";

export enum ReportSize {
    A3 = "A3",
    A4 = "A4",
    A5 = "A5"
}

export enum ReportOrientation {
    Landscape = "landscape",
    Portrait = "portrait"
}

interface Props {
    size: ReportSize;
    orientation: ReportOrientation;
    children: ReactNode;
}

export class Report extends React.Component<Props> {

    static defaultProps = {
        size: ReportSize.A4,
        orientation: ReportOrientation.Portrait
    }

    render() {
        var classes = className(
            "report-page",
            this.props.size,
            this.props.orientation
        );

        return (
            <div className={"report-page-body"}>
                <div className={classes}>

                    {this.props.children}

                </div>
            </div>
        );
    }
}