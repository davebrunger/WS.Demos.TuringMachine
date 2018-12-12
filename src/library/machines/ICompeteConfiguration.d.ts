import { IConfiguration } from "./IConfiguration";
import { IMConfiguration } from "./IMConfiguration";
import { ImmutableArray } from "../utilities/ImmutableArray";

export interface ICompleteConfiguration {
    readonly tape : ImmutableArray<string>;
    readonly mConfiguration: IMConfiguration;
}