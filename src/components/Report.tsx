import React, { ReactNodeArray, ReactNode } from "react";
import className from "classnames";

import "./Report.css";
import { ReportHeader } from "./";

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
    children: ReactNodeArray;
}

export class Report extends React.Component<Props> {

    static defaultProps = {
        size: ReportSize.A4,
        orientation: ReportOrientation.Portrait
    }

    render() {
        var classes = className(
            "report-page-body",
            this.props.size,
            this.props.orientation
        );

        const headerHeight = 50;
        const footerHeight = 50;

        //console.log(this.props.children);

        var Header: ReactNode;

        this.props.children.map((child: any) => {
            if(child.type === ReportHeader)
                Header = React.cloneElement(child);
        });

        // React.Children.map((child: ReactNode) => {
        //     console.log(child);
        // });

        //const ReportHeader = 

        return (
            <div className={classes}>
                {Header}

                <table>
					<thead>
						<tr>
							<td>
								<div className="page-header-space" style={{ height: headerHeight }}></div>
							</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
                                {this.props.children}
                            </td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>
								<div className="page-footer-space" style={{ height: footerHeight }}></div>
							</td>
						</tr>
					</tfoot>
				</table>

                <footer style={{ height: footerHeight }}>
					
                </footer>

            </div>
        );
    }
}