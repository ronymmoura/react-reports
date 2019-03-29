import React, { ReactNode } from "react";
import "./Report.css";
export declare enum ReportSize {
    A3 = "A3",
    A4 = "A4",
    A5 = "A5"
}
export declare enum ReportOrientation {
    Landscape = "landscape",
    Portrait = "portrait"
}
interface Props {
    size: ReportSize;
    orientation: ReportOrientation;
    children: ReactNode;
}
export declare class Report extends React.Component<Props> {
    static defaultProps: {
        size: ReportSize;
        orientation: ReportOrientation;
    };
    render(): JSX.Element;
}
export {};
