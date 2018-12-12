import { IConfiguration } from "./IConfiguration";
import { IMachineDescription } from "./IMachineDescription";
import { ImmutableArray } from "../utilities/ImmutableArray";
import { IHeadPosition } from "./IHeadPosition";
import { Behaviour } from "./IBehaviour";

export class Machine {
    public readonly machineDescription: IMachineDescription;
    public readonly configuration: IConfiguration;
    public readonly operationIndex: number;
    public readonly tape: ImmutableArray<string>;
    public readonly headPosition: IHeadPosition;

    public constructor(machineDescription: IMachineDescription)
    public constructor(machineDescription: IMachineDescription, configuration: IConfiguration, operationIndex: number, tape: ImmutableArray<string>, headPosition: IHeadPosition)
    public constructor(machineDescription: IMachineDescription, configuration?: IConfiguration, operationIndex?: number, tape?: ImmutableArray<string>, headPosition?: IHeadPosition) {
        this.machineDescription = machineDescription;
        this.configuration = configuration || {
            mConfiguration: machineDescription.mConfigurations.filter(c => c.name == machineDescription.startConfigurationName)[0],
            scannedSymbol: ""
        };
        this.operationIndex = operationIndex || 0;
        this.tape = tape || ImmutableArray.newImmutableArray<string>().push("");
        this.headPosition = headPosition || {
            position: 0,
            tapeIndexOffest: 0
        };
    }

    public performOperation(): Machine {
        var behaviour = this.configuration.mConfiguration.behaviours.filter(b => Behaviour.isBehaviourMatch(b, this.configuration.scannedSymbol))[0];
        var operation = behaviour.operations[this.operationIndex];
        var operationResult = operation.operate(this.tape, this.headPosition);

        var operationIndex = this.operationIndex + 1;
        if (operationIndex < behaviour.operations.length) {
            return new Machine(this.machineDescription, this.configuration, operationIndex, operationResult.tape, operationResult.headPosition);
        }

        var mConfiguration = this.machineDescription.mConfigurations.filter(c => c.name == behaviour.finalMConfigurationName)[0];
        var configuration = {
            mConfiguration: mConfiguration,
            scannedSymbol: operationResult.tape.getValue(operationResult.headPosition.position + operationResult.headPosition.tapeIndexOffest)
        };
        return new Machine(this.machineDescription, configuration, 0, operationResult.tape, operationResult.headPosition);
    }
}