import { ICompleteConfiguration } from "./ICompeteConfiguration";
import { IMConfiguration } from "./IMConfiguration";
import { ImmutableArray } from "../utilities/ImmutableArray";

export class CompleteConfiguration implements ICompleteConfiguration {
    readonly tape : ImmutableArray<string>;
    readonly mConfiguration: IMConfiguration;

    public constructor(tape : ImmutableArray<string>, mConfiguration: IMConfiguration) {
        this.tape = tape;
        this.mConfiguration = mConfiguration;
    }
}