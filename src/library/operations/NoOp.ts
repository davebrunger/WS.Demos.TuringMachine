import { IOperation } from "./IOperation";
import { ImmutableArray } from "../utilities/ImmutableArray";
import { IHeadPosition } from "../machines/IHeadPosition";
import { IOperationResult } from "./IOperationResult";

export class NoOp implements IOperation {
    public readonly identifier: string;

    public constructor() {
        this.identifier = "";
    }

    public operate(tape : ImmutableArray<string>, headPosition : IHeadPosition) : IOperationResult {
        return {
            headPosition: headPosition,
            tape: tape
        };
    }
}