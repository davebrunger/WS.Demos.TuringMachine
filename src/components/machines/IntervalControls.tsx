import * as React from "react";
import { Form, Button, FormGroup, ControlLabel } from "react-bootstrap";
import { Interval } from "../../library/utilities/Interval";

export interface IIntervalControlsProps {
    callback: () => void;
    reset: () => void;
    running: boolean;
    runningChanged: (newValue: boolean) => void;
}

export interface IIntervalControlsState {
    running?: boolean;
    intervalDurationMilliseconds?: number;
}

export class IntervalControls extends React.Component<IIntervalControlsProps, IIntervalControlsState>
{
    public constructor(props: any) {
        super(props);

        this.startButtonClick = this.startButtonClick.bind(this);
        this.pauseButtonClick = this.pauseButtonClick.bind(this);
        this.resetButtonClick = this.resetButtonClick.bind(this);

        this.state = {
            running: false,
            intervalDurationMilliseconds: 500
        }
    }

    public componentDidMount() {
        this.setState({
            running: this.props.running
        });
    }

    private updateRunning(newValue: boolean, suppressChangeEvent?: boolean, callback?: () => void) {
        if (newValue !== this.state.running) {
            this.setState({
                running: newValue
            }, () => {
                if (!suppressChangeEvent) {
                    this.props.runningChanged(newValue)
                }
                if (callback) {
                    callback();
                }
            });
        } else if (callback) {
            callback();
        }
    }

    public componentDidUpdate() {
        this.updateRunning(this.props.running, true);
    }

    private startButtonClick() {
        this.updateRunning(true);
    }

    private pauseButtonClick() {
        this.updateRunning(true);
    }

    private resetButtonClick() {
        this.updateRunning(false, false, this.props.reset);
    }

    private intervalDurationChanged(event: React.ChangeEvent<HTMLSelectElement>) {
        var newIntervalDurationMilliseconds = parseInt(event.currentTarget.value, 10);
        this.setState({
            intervalDurationMilliseconds: newIntervalDurationMilliseconds
        })
    }

    public render() {
        return (
            <Form inline>
                <Interval running={this.state.running} intervalDurationMilliseconds={this.state.intervalDurationMilliseconds} callback={this.props.callback} />
                <Button bsStyle="success" disabled={this.state.running} onClick={this.startButtonClick}>Start</Button>{" "}
                <Button bsStyle="primary" disabled={this.state.running} onClick={this.props.callback}>Advance</Button>{" "}
                <Button bsStyle="primary" disabled={!this.state.running} onClick={this.pauseButtonClick}>Pause</Button>{" "}
                <Button bsStyle="warning" onClick={this.resetButtonClick}>Reset</Button>{" "}
                <FormGroup controlId="intervalDuration">
                    <ControlLabel>Interval Duration</ControlLabel>
                    <select id="intervalDuration" className="form-control" value={this.state.intervalDurationMilliseconds} onChange={this.intervalDurationChanged}>
                        <option value={250}>0.25 Seconds</option>
                        <option value={500}>0.5 Seconds</option>
                        <option value={1000}>1 Second</option>
                    </select>
                </FormGroup>
            </Form>
        );
    }
}