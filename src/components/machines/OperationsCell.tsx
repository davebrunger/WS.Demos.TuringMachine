import * as React from "react";
import { IOperation } from "../../library/operations/IOperation";
import { Operation } from "./Operation";
import { ArrayUtils } from "../../library/utilities/ArrayUtils";

export interface IOperationsCellProps {
    operations: IOperation[];
    operationIndex: number;
    isCurrentBehaviour: boolean;
}

export class OperationsCell extends React.Component<IOperationsCellProps, {}> {
    public render() {
        var operations = ArrayUtils.flapMap(this.props.operations, (o, i) => {
            var isCurrentOperation = this.props.isCurrentBehaviour && i === this.props.operationIndex;
            if (i === 0) {
                return [<Operation key={i} operation={o} isCurrentOperation={isCurrentOperation} />]
            }
            return [<span key={`${i}-comma`}>, </span>, <Operation key={i} operation={o} isCurrentOperation={isCurrentOperation} />]
        });
        return (
            <td>
                {operations}
            </td>
        )
    }
}