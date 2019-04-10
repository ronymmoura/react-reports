import React, { ReactNodeArray, ReactNode } from "react";
import { ReportHeader, ReportFooter } from ".";
interface Props {
    children: ReactNode | ReactNodeArray;
    header?: ReportHeader;
    footer?: ReportFooter;
}
export declare class Page extends React.Component<Props> {
    render(): JSX.Element;
}
export {};
