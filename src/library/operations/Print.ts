import { IOperation } from "./IOperation";
import { IOperationResult } from "./IOperationResult";
import { ImmutableArray } from "../utilities/ImmutableArray";
import { IHeadPosition } from "../machines/IHeadPosition";

export class Print implements IOperation {
    public readonly identifier: string;
    public readonly symbol: string;

    public constructor(symbol: string) {
        this.symbol = symbol;
        this.identifier = `P${symbol}`;
    }

    public operate(tape : ImmutableArray<string>, headPosition : IHeadPosition) : IOperationResult {
        return {
            headPosition: headPosition,
            tape: tape.replace(headPosition.position + headPosition.tapeIndexOffest, this.symbol)
        };
    }
}