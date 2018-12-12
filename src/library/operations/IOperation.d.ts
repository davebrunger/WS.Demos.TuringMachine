import { IOperationResult } from "./IOperationResult";
import { ImmutableArray } from "../utilities/ImmutableArray";
import { IHeadPosition } from "../machines/IHeadPosition";

export interface IOperation
{
    readonly identifier : string;
    operate(tape : ImmutableArray<string>, headPosition : IHeadPosition) : IOperationResult;
}