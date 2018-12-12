import { IMConfiguration } from "./IMConfiguration";

export interface IMachineDescription {
    readonly name : string;
    readonly startConfigurationName : string;
    readonly mConfigurations : IMConfiguration[];
}