import { ImmutableArray } from "../utilities/ImmutableArray";
import { IHeadPosition } from "../machines/IHeadPosition";

export interface IOperationResult {
    readonly tape: ImmutableArray<string>;
    readonly headPosition: IHeadPosition;
}