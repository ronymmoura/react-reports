import React, { ReactNodeArray, ReactNode } from "react";
import className from "classnames";
//import ReactDOMServer from "react-dom/server";
import axios from "axios";

import "./Report.css";
import { ReportHeader, ReportFooter, Page } from ".";

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

interface State {
    downloading: boolean;
}

export class Report extends React.Component<Props, State> {

    static defaultProps = {
        size: ReportSize.A4,
        orientation: ReportOrientation.Portrait
    }

    state = {
        downloading: false
    }

    downloadPDF = async () => {
        var pages = document.querySelector(".report-content");
        var styles = document.querySelector("head > style");
        
        var html = `
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
                  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <style>${styles!.innerHTML}</style>
        `;

        html = html + pages!.innerHTML;

        var { data: relatorio } = await axios({
            method: "POST",
            responseType: 'blob',
            data: { html },
            url: "http://localhost/CageprevAPI/api/relatorios"
        });

        const url = window.URL.createObjectURL(new Blob([relatorio]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'relatorio.pdf');
        document.body.appendChild(link);
        link.click();
    }

    render() {
        var classes = className(
            "report-page-body",
            this.props.size,
            this.props.orientation
        );

        var headerHeight = 0;
        var footerHeight = 0;

        var header: ReactNode = this.props.children.filter((child: any) => child.type === ReportHeader);
        var footer: ReactNode = this.props.children!.filter((child: any) => child.type === ReportFooter);

        var newChildren = this.props.children
            .map((child: any, index: number) => {
                if(child.type === Page)
                    return React.cloneElement(child, { key: index, header, footer, ...child.props });
                else {
                    if(child.type === ReportHeader)
                        headerHeight = child.props.height;
                    else if(child.type === ReportFooter)
                        footerHeight = child.props.height;

                    return child;
                }
            });

        return (
            <div className={classes}>
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
                            <td className={"report-commands"}>
                                <button className={"btn btn-primary"}>Imprimir</button>
                                <button className={"btn btn-primary"} onClick={this.downloadPDF}>Baixar PDF</button>
                                <button className={"btn btn-primary"}>Baixar XLSX</button>
                            </td>
                        </tr>
						<tr>
							<td className={"report-content preview"}>
                                {newChildren}
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

            </div>
        );
    }
}