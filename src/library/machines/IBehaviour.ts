import { IOperation } from "../operations/IOperation";

export interface IBehaviour {
    readonly symbol: string;
    readonly operations: IOperation[];
    readonly finalMConfigurationName: string;
}

export module Behaviour {
    export function isBehaviourMatch(behaviour: IBehaviour, symbol: string): boolean {
        return behaviour.symbol === symbol || (behaviour.symbol === null && symbol !== "");
    }
}