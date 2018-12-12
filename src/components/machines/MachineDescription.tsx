import * as React from "react";
import { IMachineDescription } from "../../library/machines/IMachineDescription";
import { OperationsCell } from "./OperationsCell";
import { ArrayUtils } from "../../library/utilities/ArrayUtils";
import { IBehaviour, Behaviour } from "../../library/machines/IBehaviour";
import { BehaviourSymbol } from "./BehaviourSymbol";

export interface IMachineDescriptionProps {
    machineDescription: IMachineDescription;
    currentMConfigurationName: string;
    currentSymbol: string;
    operationIndex: number;
}

export class MachineDescription extends React.Component<IMachineDescriptionProps, {}> {

    private isBehaviourMatch(mConfigurationName: string, behaviour: IBehaviour): boolean {
        return mConfigurationName === this.props.currentMConfigurationName &&
            Behaviour.isBehaviourMatch(behaviour, this.props.currentSymbol);
    }

    public render() {

        var rows = ArrayUtils.flapMap(this.props.machineDescription.mConfigurations, (c, i) => {
            return c.behaviours.map((behaviour) => {
                var isCurrentBehaviour = this.isBehaviourMatch(c.name, behaviour);
                var rowClass = isCurrentBehaviour ? "danger" : "";
                return (
                    <tr key={`${i}-${behaviour.symbol}`} className={rowClass}>
                        <td className="configuration-name">{c.name}</td>
                        <td><BehaviourSymbol symbol={behaviour.symbol} /></td>
                        <OperationsCell operations={behaviour.operations} operationIndex={this.props.operationIndex} isCurrentBehaviour={isCurrentBehaviour} />
                        <td className="configuration-name">{behaviour.finalMConfigurationName}</td>
                    </tr>
                );
            })
        });

        return (
            <table className="table table-condensed">
                <thead>
                    <tr>
                        <th>M-Configuration</th>
                        <th>Symbol</th>
                        <th>Operations</th>
                        <th>Final M-Configuration</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }
}
