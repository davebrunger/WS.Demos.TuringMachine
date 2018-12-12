import { IMachineDescription } from "../machines/IMachineDescription";
import { IMConfiguration } from "../machines/IMConfiguration";
import { MoveRight } from "../operations/MoveRight";
import { Print } from "../operations/Print";

export class CompactOneThirdMachine implements IMachineDescription {
    public readonly name: string;
    public readonly startConfigurationName: string;
    public readonly mConfigurations: IMConfiguration[];

    public constructor() {
        this.name = "Compact One Third";
        this.startConfigurationName = "b";

        var moveRight = new MoveRight();
        var print0 = new Print("0");
        var print1 = new Print("1");

        this.mConfigurations = [
            {
                name: "b",
                behaviours: [{
                    symbol: "",
                    operations: [print0],
                    finalMConfigurationName: "b"
                }, {
                    symbol: "0",
                    operations: [moveRight, moveRight, print1],
                    finalMConfigurationName: "b"
                }, {
                    symbol: "1",
                    operations: [moveRight, moveRight, print0],
                    finalMConfigurationName: "b"
                }]
            }
        ]
    }
}