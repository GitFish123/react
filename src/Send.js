import React, { Component } from 'react'
import './Send.css'

export default class Send extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    render() {
        return ( <
            div className = "send" >
            <
            div > < /div> <
            div className = "bottom" >
            <
            input className = "inp"
            onChange = { this.changeval.bind(this) }
            value = { this.state.text }
            /> <
            button onClick = { this.getval.bind(this) } > 发送 < /button> < /
            div > <
            /div>
        )
    }

    changeval(e) {
        this.setState({
            text: e.target.value
        })
    }

    getval() {
        console.log(this.state.text)
    }
}