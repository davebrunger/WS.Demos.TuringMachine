import * as React from "react";
import { ImmutableArray } from "../../library/utilities/ImmutableArray";
import { IHeadPosition } from "../../library/machines/IHeadPosition";

export interface ITapeProps {
    readonly tape : ImmutableArray<string>;
    readonly headPosition : IHeadPosition;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Tape extends React.Component<ITapeProps, {}> {
    render() {
        var tapeIndex = this.props.headPosition.position + this.props.headPosition.tapeIndexOffest;
        var tape = this.props.tape.map((c, i) => {
            var cssClass = i === tapeIndex ? "bg-danger text-white" : "bg-info text-white";
            var content = c ? <span>{c}</span> : <span>&nbsp;</span>;
            return (
                <div key={i} className={cssClass}>{content}</div>
            );
        }).toArray();

        return (
            <div>
                <div className="tape">{tape}</div>
            </div>
        );
    }
}