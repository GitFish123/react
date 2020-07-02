import React, { Component } from 'react'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            confirm:""
        }
    }
    render() {
        return (
            <div>
                <div>
                    用户名
                    <input id="content" onChange={this.changeval.bind(this)} value={this.state.username} />

                </div>

                <div>
                    密码
                    <input id="content" onChange={this.changePassVal.bind(this)} value={this.state.password} />
                </div>

                <button onClick={this.getVal.bind(this)}>登录</button>
            </div>
        )
    }
    changeval(e) {
        // 更改状态
        this.setState = {
            username: e.target.value
        }
    }
    changePassVal(e) {
        // 更改状态
        this.setState = {
            password: e.target.value
        }
    }

    // 登录的时候获取值
    getVal() {
        console.log(document.getElementById("content"))
    }
}
