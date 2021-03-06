import { IMachineDescription } from "../machines/IMachineDescription";
import { IMConfiguration } from "../machines/IMConfiguration";
import { MoveRight } from "../operations/MoveRight";
import { Print } from "../operations/Print";

export class OneQuarterMachine implements IMachineDescription {
    public readonly name: string;
    public readonly pageNumber: number;
    public readonly startConfigurationName: string;
    public readonly mConfigurations: IMConfiguration[];

    public constructor() {
        this.name = "One Quarter";
        this.pageNumber = 83;
        this.startConfigurationName = "b";

        var moveRight = new MoveRight();
        var print0 = new Print("0");
        var print1 = new Print("1");

        this.mConfigurations = [
            {
                name: "b",
                behaviours: [{
                    symbol: "",
                    operations: [print0, moveRight],
                    finalMConfigurationName: "c"
                }]
            },
            {
                name: "c",
                behaviours: [{
                    symbol: "",
                    operations: [moveRight],
                    finalMConfigurationName: "d"
                }]
            },
            {
                name: "d",
                behaviours: [{
                    symbol: "",
                    operations: [print1, moveRight],
                    finalMConfigurationName: "e"
                }]
            },
            {
                name: "e",
                behaviours: [{
                    symbol: "",
                    operations: [moveRight],
                    finalMConfigurationName: "f"
                }]
            },
            {
                name: "f",
                behaviours: [{
                    symbol: "",
                    operations: [print0, moveRight],
                    finalMConfigurationName: "e"
                }]
            }
        ]
    }
}