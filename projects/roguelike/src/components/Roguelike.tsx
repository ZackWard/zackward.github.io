import * as React from "react";
import * as Redux from "redux";

import {MessageBoxContainer} from "../containers/MessageBoxContainer";
import {DisplayContainer} from "../containers/DisplayContainer";
import {StatusDisplayContainer} from "../containers/StatusDisplayContainer";
import {DPadContainer} from "../containers/DPadContainer";

export interface RoguelikeProps {

}

export interface RoguelikeState {

}

export class Roguelike extends React.Component<RoguelikeProps, RoguelikeState> {

    images: string[];
    assets: any;

    constructor(props: RoguelikeProps) {
        super(props);

        // Pre-bind methods

    }

    render() {

        return (
            <div className="roguelike">
                <div className="container">

                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <DisplayContainer></DisplayContainer>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <DPadContainer></DPadContainer>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6">
                            <StatusDisplayContainer></StatusDisplayContainer>
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <MessageBoxContainer></MessageBoxContainer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}