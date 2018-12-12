import { IMachineDescription } from "../machines/IMachineDescription";
import { OneThirdMachine } from "./OneThirdMachine";
import { OneQuarterMachine } from "./OneQuarterMachine";
import { CompactOneThirdMachine } from "./CompactOneThirdMachine";
import { IrrationalNumberMachine } from "./IrrationalNumberMachine";

export module ExampleMachineFactory {
    export enum ExampleMachine {
        OneThird,
        OneQuarter,
        CompactOneThird,
        IrrationalNumber
    }

    export function buildExampleMachine(exampleMachine : ExampleMachine) : IMachineDescription
    {
        switch(exampleMachine)
        {
            case ExampleMachine.OneThird : return new OneThirdMachine();
            case ExampleMachine.OneQuarter : return new OneQuarterMachine();
            case ExampleMachine.CompactOneThird : return new CompactOneThirdMachine();
            case ExampleMachine.IrrationalNumber : return new IrrationalNumberMachine();
            default : return null;
        }
    }
}