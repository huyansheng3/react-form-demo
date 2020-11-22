
import React, { Component } from 'react'
import Schema from "async-validator"

export default class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            values: props.initValues,
            errors: {},
            touched: {},
            isSubmittting: {}
        }

        this.validator = new Schema(props.validate)
    }

    handleChange=(filed)=>{

        return (e)=>{
            this.setState(preState=>{
                return {
                    ...preState,
                    values: {
                        ...preState.values,
                        [filed]: e.target.value
                    }
                }
            }, ()=>{
                if(this.props.validateTrigger.indexOf("onChange") !== -1) {
                    this.validate()
                }
            })
        }
    }

    handleBlur=(filed)=>{
        return (e)=>{

            this.setState(preState=>{
                return {
                    ...preState,
                    touched: {
                        ...preState.touched,
                        [filed]: true
                    }
                }
            }, ()=>{
                if(this.props.validateTrigger.indexOf("onBlur") !== -1) {
                    this.validate()
                }
            })


        }
    }

    validate = ()=>{
        const validator = this.validator
        validator.validate(this.state.values, (errors, fields) => {
            let results=  {

            }
            for(let i in fields) {
                results[i]= fields[i].map(item=>item.message).join(",")
            }

            this.setState({errors: results})
          })


    }

    onSubmit = ()=>{
        this.props.onSubmit(this.state)
    }

    render(){
        return this.props.children({...this.state, handleChange: this.handleChange , handleBlur: this.handleBlur, onSubmit: this.onSubmit})
    }
}