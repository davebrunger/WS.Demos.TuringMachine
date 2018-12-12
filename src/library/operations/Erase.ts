import { IOperation } from "./IOperation";
import { IOperationResult } from "./IOperationResult";
import { ImmutableArray } from "../utilities/ImmutableArray";
import { IHeadPosition } from "../machines/IHeadPosition";

export class Erase implements IOperation {
    public readonly identifier: string;

    public constructor() {
        this.identifier = "E";
    }

    public operate(tape : ImmutableArray<string>, headPosition : IHeadPosition) : IOperationResult {
        return {
            headPosition: headPosition,
            tape: tape.replace(headPosition.position + headPosition.tapeIndexOffest, "")
        };
    }
}