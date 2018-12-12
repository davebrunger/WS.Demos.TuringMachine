import * as React from "react";

export interface IIntervalProps {
    intervalDurationMilliseconds: number;
    callback: () => void;
    running: boolean;
}

export class Interval extends React.Component<IIntervalProps, {}> {
    private intervalId: number;
    private intervalDurationMilliseconds: number;

    private setInterval() {
        this.intervalDurationMilliseconds = this.props.intervalDurationMilliseconds;
        this.intervalId = setInterval(() => { 
            this.props.callback()
            if (this.props.intervalDurationMilliseconds !== this.intervalDurationMilliseconds)
            {
                this.clearInterval();
                this.setInterval();
            } 
        }, this.intervalDurationMilliseconds) as any;
    }

    private clearInterval() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }

    public componentDidMount() {
        if (this.props.running) {
            this.setInterval();
        }
    }

    public componentWillUnmount() {
        this.clearInterval();
    }

    public componentDidUpdate(prevProps: IIntervalProps) {
        // Interval was running
        if (prevProps.running) {
            // It has been stopped
            if (!this.props.running) {
                this.clearInterval();
            }
        }
        // Interval was not running but now is
        else if (this.props.running) {
            this.setInterval();
        }
    }

    public render(): React.ReactNode {
        return null;
    }
}