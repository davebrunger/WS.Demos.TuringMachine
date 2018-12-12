import * as React from "react";
import { ExampleMachineFactory } from "../../library/examples/ExampleMachineFactory";
import { EnumUtils } from "../../library/utilities/EnumUtils";

export interface IExampleMachineSelectorProps {
    exampleMachine: ExampleMachineFactory.ExampleMachine;
    exampleMachineChanged: (exampleMachine: ExampleMachineFactory.ExampleMachine) => void;
}

export class ExampleMachineSelector extends React.Component<IExampleMachineSelectorProps, {}> {
    public constructor(props: any) {
        super(props);
        this.selectChanged = this.selectChanged.bind(this);
    }

    private selectChanged(event: React.ChangeEvent<HTMLSelectElement>) {
        var newExampleMachine = parseInt(event.currentTarget.value, 10) as ExampleMachineFactory.ExampleMachine;
        if (newExampleMachine !== this.props.exampleMachine) {
            this.props.exampleMachineChanged(newExampleMachine);
        }
    }

    public render() {
        var exampleMachines = EnumUtils.GetValues<ExampleMachineFactory.ExampleMachine>(ExampleMachineFactory.ExampleMachine);
        var options = exampleMachines.map(e => <option key={e} value={e}>{ExampleMachineFactory.buildExampleMachine(e).name}</option>);
        return (
            <select className="form-control" value={this.props.exampleMachine} onChange={this.selectChanged}>
                {options}
            </select>
        );
    }
}