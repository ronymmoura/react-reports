import React, { Component } from 'react';

import { Report, ReportHeader, Page, ReportFooter } from "..";
import { REFUSED } from 'dns';

const styles = {
    logo: {
        height: 100
    }
}

const Celula = (props) => {
    var width = props.width ? props.width : "auto";
    var colSpan = props.colSpan ? props.colSpan : null;

    return (
        <td style={{ width: width }} colSpan={colSpan}>
            <div className={"font-weight-bold"}>{props.titulo}</div>
            <div>{props.valor}</div>
        </td>
    );
}

interface Props {
    preview: boolean;
}

export default class ReportTest extends Component<Props> {

    report = React.createRef<Report>();

    download = async () => {
        await this.report.current.downloadPDF();
    }

	render() {
		return (
			<Report ref={this.report} preview={this.props.preview}>

                <ReportHeader height={100}>
                    <table>
                        <tbody>
                            <tr>
                                <td className={"text-center"} style={{ width: 170 }}>
                                    <img src="http://www.cageprev.com/wp-content/uploads/2016/07/Logo-Cageprev.png" alt="Logo Cageprev" style={styles.logo} />
                                </td>
                                <td style={{ verticalAlign: "top" }}>
                                    <div className={"font-weight-bold"}>CAGEPREV – Fundação CAGECE de Previdência Complementar</div>
                                    <div className={"font-weight-bold"}>06.025.140/0001-09</div>
                                    <div className={"font-weight-bold"}>Teste</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </ReportHeader>
                
                <Page>
                    <h4 className={"mb-3 text-center"}>CONTRACHEQUE</h4>

                    <table className={"table table-bordered table-sm"}>
                        <tbody>
                            <tr>
                                <Celula titulo={"Nome"} valor={"VALERIANO RIBEIRO DOS SANTOS"} colSpan={3} />
                                <Celula titulo={"Data de Início"} valor={"05/03/2013"} width={120} />
                                <Celula titulo={"Mês/Ano"} valor={"01/2019"} width={70} />
                            </tr>
                            <tr>
                                <Celula titulo={"Plano"} valor={"FACEB I"} />
                                <Celula titulo={"Espécie de Benefício"} valor={"APOSENT. POR TEMPO DE CONTRIBUIÇÃO"} colSpan={2} />
                                <Celula titulo={"CPF"} valor={"153.862.011-15"} />
                                <Celula titulo={"Matrícula"} valor={"0000003099"} />
                            </tr>
                            <tr>
                                <Celula titulo={"Data de Crédito"} valor={"24/01/2019"} />
                                <Celula titulo={"Banco"} valor={"070"} />
                                <Celula titulo={"Agência"} valor={"207"} />
                                <Celula titulo={"Número da Conta"} valor={"128140-8"} colSpan={2} />
                            </tr>
                        </tbody>
                    </table>

                    <table className={"table table-bordered table-sm"}>
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Descrição</th>
                                <th>Data</th>
                                <th>Parcela</th>
                                <th>Prazo</th>
                                <th>Base</th>
                                <th>Proventos</th>
                                <th>Descontos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1420</td>
                                <td>SUPL. APOS.T.CONTRIBUIÇÃO</td>
                                <td>01/2019</td>
                                <td>30/30</td>
                                <td></td>
                                <td>8.721,52</td>
                                <td>8.721,52</td>
                                <td className={"text-danger"}></td>
                            </tr>
                            <tr>
                                <td>8365</td>
                                <td>EMPRESTIMO FACEB 2</td>
                                <td>01/2019</td>
                                <td>1/96</td>
                                <td></td>
                                <td>0,00</td>
                                <td></td>
                                <td className={"text-danger"}>-1.327,66</td>
                            </tr>
                            <tr>
                                <td>8365</td>
                                <td>EMPRESTIMO FACEB 2</td>
                                <td>01/2019</td>
                                <td>1/96</td>
                                <td></td>
                                <td>0,00</td>
                                <td></td>
                                <td className={"text-danger"}>-1.327,66</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={"table table-bordered table-sm"}>
                        <tfoot>
                            <tr>
                                <th>
                                    <span className="float-left">Total de Proventos:</span>
                                    <span className="float-right">8.721,52</span>
                                </th>
                                <th>
                                    <span className="float-left">Total de Descontos:</span>
                                    <span className="float-right">1.327,66</span>
                                </th>
                                <th>
                                    <span className="float-left">Valor Líquido:</span>
                                    <span className="float-right">7.393,86</span>
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                </Page>
			</Report>
		);
	}
}