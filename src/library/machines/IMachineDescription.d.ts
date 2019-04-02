import { IMConfiguration } from "./IMConfiguration";

export interface IMachineDescription {
    readonly name : string;
    readonly pageNumber : number;
    readonly startConfigurationName : string;
    readonly mConfigurations : IMConfiguration[];
}