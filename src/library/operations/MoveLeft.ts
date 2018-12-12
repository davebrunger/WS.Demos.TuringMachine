import { IOperation } from "./IOperation";
import { IOperationResult } from "./IOperationResult";
import { ImmutableArray } from "../utilities/ImmutableArray";
import { IHeadPosition } from "../machines/IHeadPosition";

export class MoveLeft implements IOperation {
    public readonly identifier: string;

    public constructor() {
        this.identifier = "L";
    }

    public operate(tape : ImmutableArray<string>, headPosition : IHeadPosition) : IOperationResult {
        if (headPosition.position + headPosition.tapeIndexOffest === 0) {
            return {
                headPosition: {
                    position : headPosition.position - 1,
                    tapeIndexOffest : headPosition.tapeIndexOffest + 1
                },
                tape: tape.insert(0, "")
            };
        }
        return {
            headPosition: {
                position : headPosition.position - 1,
                tapeIndexOffest : headPosition.tapeIndexOffest
            },
            tape: tape
        };
    }
}