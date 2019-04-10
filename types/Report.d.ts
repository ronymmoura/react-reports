import React, { ReactNodeArray } from "react";
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
    children: ReactNodeArray;
}
interface State {
    downloading: boolean;
}
export declare class Report extends React.Component<Props, State> {
    static defaultProps: {
        size: ReportSize;
        orientation: ReportOrientation;
    };
    state: {
        downloading: boolean;
    };
    downloadPDF: () => Promise<void>;
    render(): JSX.Element;
}
export {};
