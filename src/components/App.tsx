import * as React from "react";
import { ExampleMachineFactory } from "../library/examples/ExampleMachineFactory";
import { MachineDescription } from "./machines/MachineDescription";
import { Machine } from "../library/machines/Machine";
import { ExampleMachineSelector } from "./machines/ExampleMachineSelector";
import { Tape } from "./machines/Tape";
import { Form, FormGroup, Label } from "reactstrap";
import { IntervalControls } from "./machines/IntervalControls";

export interface IAppState {
    machine?: Machine;
    exampleMachine?: ExampleMachineFactory.ExampleMachine;
    machineRunning?: boolean;
}

export class App extends React.Component<{}, IAppState> {

    constructor(props: any) {
        super(props);

        this.performOperation = this.performOperation.bind(this);
        this.resetMachine = this.resetMachine.bind(this);
        this.machineRunningChanged = this.machineRunningChanged.bind(this);
        this.exampleMachineChanged = this.exampleMachineChanged.bind(this);

        var exampleMachine = ExampleMachineFactory.ExampleMachine.OneThird;
        this.state = {
            machine: new Machine(ExampleMachineFactory.buildExampleMachine(exampleMachine)),
            exampleMachine: exampleMachine,
            machineRunning: false
        };
    }

    private resetMachine() {
        this.setState({
            machine: new Machine(ExampleMachineFactory.buildExampleMachine(this.state.exampleMachine)),
        });
    }

    private performOperation() {
        var machine = this.state.machine.performOperation();
        this.setState({
            machine: machine
        })
    }

    private exampleMachineChanged(exampleMachine: ExampleMachineFactory.ExampleMachine) {
        this.setState({
            exampleMachine: exampleMachine,
            machineRunning: false
        }, this.resetMachine);
    }

    private machineRunningChanged(newValue: boolean) {
        if (this.state.machineRunning !== newValue) {
            this.setState({
                machineRunning: newValue
            });
        }
    }

    render() {
        var machine = this.state.machine;
        var currentSymbol = machine.configuration.scannedSymbol;
        var mConfigurationName = machine.configuration.mConfiguration.name;
        return (
            <div className="container">
                <h3>Turing Machine Demos</h3>
                <p>
                    This page demonstrates the operation of a selection of Turing machines that are described and explained in the book
                    <a href="http://www.charlespetzold.com/books/"><em>The Annotated Turing</em> by Charles Petzold</a>.
                </p>
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label className="mr-sm-2" for="exampleMachine">Machine Name</Label>{" "}
                        <ExampleMachineSelector id="exampleMachine" exampleMachine={this.state.exampleMachine} exampleMachineChanged={this.exampleMachineChanged} />
                    </FormGroup>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label className="mr-sm-2">Page {machine.machineDescription.pageNumber} in <em>The Annotated Turing</em></Label>
                    </FormGroup>
                </Form>
                <h4>{machine.machineDescription.name} <small></small></h4>
                <MachineDescription machineDescription={machine.machineDescription} currentMConfigurationName={mConfigurationName} currentSymbol={currentSymbol} operationIndex={machine.operationIndex} />
                <IntervalControls callback={this.performOperation} reset={this.resetMachine} running={this.state.machineRunning} runningChanged={this.machineRunningChanged} />
                <p>Head Position: {machine.headPosition.position}</p>
                <Tape tape={machine.tape} headPosition={machine.headPosition} />
            </div>
        );
    }
}