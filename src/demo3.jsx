import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Form from "./Form.jsx"
import * as Schema from "async-validator"

const formProps = {
    initValues: {
        name: "",
        email: "",
        phone: "",
        password: "",
        confirm: ""
    },
    validate: {
        name: { required: true, message: "必填" },
        email: [
            { required: true, message: "必填" },
            {pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: "必须是邮箱格式"}
        ],
        phone: [
            { required: true , message: "必填"},
            {regexp: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/, message: "必须是手机号"}
        ],
        password: [
            { required: true, message: "必填" },
            {
                asyncValidator: (rule, value) => {
                    return new Promise((resolve, reject) => {
                      if (value.length < 6) {
                        reject('来自服务器的校验，密码长度过短');
                      } else {
                        resolve();
                      }
                    });
                  },
            }
        ],
        confirm: [
            { required: true, message: "必填" },
            {
                validator: (rule, value, callback, source, options) => {
                    if(value !== source.password) {
                        callback("两次密码不一致")
                    } else {
                        callback()
                    }
                },
            }
        ],
    },
    // 触发的时机
    validateTrigger: "onBlur",
    onSubmit: ({ values }) => {
        alert(JSON.stringify(values))
    }
}

export default class demo2 extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>demo3</h1>
                <Form {...formProps}>
                    {
                        ({ values, errors, touched, isSubmittting, handleChange, getField, handleBlur, onSubmit }) => {
                            return (
                                <div>
                                    <div className="form-item">
                                        <label htmlFor="">姓名</label>
                                        <input type="text" {...getField("name")} />
                                        <span className="error-info">{touched.name && errors.name}</span>
                                    </div>
                                    <div className="form-item">
                                        <label htmlFor="">邮箱</label>
                                        <input type="text" {...getField("email")} />
                                        <span className="error-info">{touched.email && errors.email}</span>
                                    </div>

                                    <div className="form-item">
                                        <label htmlFor="">手机号</label>
                                        <input type="text" {...getField("phone")} />
                                        <span className="error-info">{touched.phone && errors.phone}</span>
                                    </div>
                                    <div className="form-item">
                                        <label htmlFor="">密码</label>
                                        <input type="password" {...getField("password")} />
                                        <span className="error-info">{touched.password && errors.password}</span>
                                    </div>

                                    <div className="form-item">
                                        <label htmlFor="">密码确认</label>
                                        <input type="password" {...getField("confirm")} />
                                        <span className="error-info">{touched.confirm && errors.confirm}</span>
                                    </div>

                                    <button type="submit" onClick={onSubmit}>提交</button>


                                    <pre>
                                    values: {JSON.stringify(values, null,2)}
                                    </pre>

                                    <pre>
                                    errors: {JSON.stringify(errors, null,2)}
                                    </pre>

                                    <pre>
                                    touched: {JSON.stringify(touched, null,2)}
                                    </pre>

                                </div>

                            )
                        }
                    }
                </Form>
            </React.Fragment>

        )
    }
}
