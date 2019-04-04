import React, { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export class Page extends React.Component<Props> {
    render() {
        return (
            <div className="page">
                {this.props.children}
            </div>
        );
    }
}