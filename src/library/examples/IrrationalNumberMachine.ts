import { IMachineDescription } from "../machines/IMachineDescription";
import { IMConfiguration } from "../machines/IMConfiguration";
import { Print } from "../operations/Print";
import { MoveRight } from "../operations/MoveRight";
import { MoveLeft } from "../operations/MoveLeft";
import { NoOp } from "../operations/NoOp";
import { Erase } from "../operations/Erase";

export class IrrationalNumberMachine implements IMachineDescription {
    public readonly name: string;
    public readonly startConfigurationName: string;
    public readonly mConfigurations: IMConfiguration[];

    constructor() {
        this.name = "Irrational Number";
        this.startConfigurationName = "b";

        var printSchwa = new Print("ə");
        var print0 = new Print("0");
        var print1 = new Print("1");
        var printX = new Print("x");
        var moveRight = new MoveRight();
        var moveLeft = new MoveLeft();
        var noOp = new NoOp();
        var erase = new Erase();

        this.mConfigurations = [
            {
                name: "b",
                behaviours: [{
                    symbol: "",
                    operations: [printSchwa, moveRight, printSchwa, moveRight, print0, moveRight, moveRight, print0, moveLeft, moveLeft],
                    finalMConfigurationName: "o"
                }]
            },
            {
                name: "o",
                behaviours: [{
                    symbol: "1",
                    operations: [moveRight, printX, moveLeft, moveLeft, moveLeft],
                    finalMConfigurationName: "o"
                }, {
                    symbol: "0",
                    operations: [noOp],
                    finalMConfigurationName: "q"
                }]
            },
            {
                name: "q",
                behaviours: [{
                    symbol: null,
                    operations: [moveRight, moveRight],
                    finalMConfigurationName: "q"
                }, {
                    symbol: "",
                    operations: [print1, moveLeft],
                    finalMConfigurationName: "p"
                }]

            },
            {
                name: "p",
                behaviours: [{
                    symbol: "x",
                    operations: [erase, moveRight],
                    finalMConfigurationName: "q"
                }, {
                    symbol: "ə",
                    operations: [moveRight],
                    finalMConfigurationName: "f"
                }, {
                    symbol: "",
                    operations: [moveLeft, moveLeft],
                    finalMConfigurationName: "p"
                }]
            },
            {
                name: "f",
                behaviours: [{
                    symbol: null,
                    operations: [moveRight, moveRight],
                    finalMConfigurationName: "f"
                }, {
                    symbol: "",
                    operations: [print0, moveLeft, moveLeft],
                    finalMConfigurationName: "o"
                }]
            }
        ];
    }
}