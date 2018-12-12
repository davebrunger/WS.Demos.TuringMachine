import * as React from "react";
import { IOperation } from "../../library/operations/IOperation";

export interface IOperationProps
{
    operation : IOperation;
    isCurrentOperation : boolean;
}

export class Operation extends React.Component<IOperationProps, {}> {
    public render() {
        return this.props.isCurrentOperation
            ? <strong>{this.props.operation.identifier}</strong>
            : <span>{this.props.operation.identifier}</span>
    }
}