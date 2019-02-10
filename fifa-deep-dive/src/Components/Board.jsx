import React, { Component, Fragment } from 'react'
import "./Board.css"
import Stats from "./Stats"

class Board extends Component {
    render() {
        return (
            <div className="Board">
                <div> <Stats fact={'Shots'}></Stats> </div>
                <div className="Even"> <Stats fact={'Shots on Target'}></Stats> </div>
                <div> <Stats fact={'Possession %'}></Stats> </div>
                <div className="Even"> <Stats fact={'Tackles'}></Stats> </div>
                <div> <Stats fact={'Fouls'}></Stats> </div>
                <div className="Even"> <Stats fact={'Corners'}></Stats> </div>
                <div> <Stats fact={'Shot Accuracy %'}></Stats> </div>
                <div className="Even"> <Stats fact={'Pass Accuracy %'}></Stats> </div>
            </div>
        )
    }
}

export default Board