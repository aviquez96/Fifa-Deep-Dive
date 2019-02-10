import React, { Component, Fragment } from 'react'
import "./Stats.css"

class Stats extends Component {
    render() {
        return (
            <div className="Container">
                <div>{/* <p>{this.props.playerOneStat}</p> */} P One Stat</div>
                <div className="MiddleStat">{/* <p>{this.props.playerOneStat}</p> */} {this.props.fact}</div>
                <div>{/* <p>{this.props.playerTwoStat}</p> */} P Two Stat</div>
            </div>
        )
    }
}



export default Stats