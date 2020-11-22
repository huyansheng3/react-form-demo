import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class demo1 extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        password: "",
        confirm: ""
    }

    onChange = (filed, value)=>{
        this.setState({[filed]: value})
    }

    handleSubmit = (e)=>{
        console.log(e)
    }

    render() {
        const {name, email, phone, password, confirm} = this.state
        return (
            <div>
                <h1>demo1</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-item">
                        <label htmlFor="">姓名</label>
                        <input type="text" value={name} onChange={e=> this.onChange("name", e.target.value)} />
                    </div>
                    <div className="form-item">
                        <label htmlFor="">邮箱</label>
                        <input type="text" value={email} onChange={e=> this.onChange("email", e.target.value)} />
                    </div>

                    <div className="form-item">
                        <label htmlFor="">手机号</label>
                        <input type="text" value={phone} onChange={e=> this.onChange("phone", e.target.value)} />
                    </div>
                    <div className="form-item">
                        <label htmlFor="">密码</label>
                        <input type="password" value={password} onChange={e=> this.onChange("password", e.target.value)}  />
                    </div>

                    <div className="form-item">
                        <label htmlFor="">密码确认</label>
                        <input type="password" value={confirm} onChange={e=> this.onChange("confirm", e.target.value)}  />
                    </div>

                    <button type="submit">提交</button>
                </form>
            </div>
        )
    }
}
