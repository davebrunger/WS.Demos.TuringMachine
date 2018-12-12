import * as React from "react";

export interface IBehaviourSymbolProps {
    symbol : string;
}

export class BehaviourSymbol extends React.Component<IBehaviourSymbolProps, {}> {
    public render() {
        if (this.props.symbol === null) {
            return <em>Any</em>;
        }
        if (this.props.symbol === "") {
            return <em>None</em>;
        }
        return <span>{this.props.symbol}</span>
    }
}