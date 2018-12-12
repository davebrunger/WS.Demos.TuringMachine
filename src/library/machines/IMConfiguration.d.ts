import { IBehaviour } from "./IBehaviour";

export interface IMConfiguration {
    readonly name: string;
    readonly behaviours: IBehaviour[]
}