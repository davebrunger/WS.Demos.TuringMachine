import { IOperation } from "./IOperation";
import { IOperationResult } from "./IOperationResult";
import { ImmutableArray } from "../utilities/ImmutableArray";
import { IHeadPosition } from "../machines/IHeadPosition";

export class MoveRight implements IOperation {
    public readonly identifier: string;

    public constructor() {
        this.identifier = "R";
    }

    public operate(tape : ImmutableArray<string>, headPosition : IHeadPosition) : IOperationResult {
        var newHeadPosition = headPosition.position + 1;
        return {
            headPosition: {
                position : newHeadPosition,
                tapeIndexOffest : headPosition.tapeIndexOffest
            },
            tape: newHeadPosition + headPosition.tapeIndexOffest < tape.length ? tape : tape.push("")
        };
    }
}