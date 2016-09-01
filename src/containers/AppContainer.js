import React,{Component,PropTypes} from 'react'
import {Router} from 'react-router'
import {Provider} from 'react-redux'

export default class AppContainer extends Component {
    render(){
        const {history,routes,store}=this.props

        return (
            <div>
                Hello!
            </div>
        )
    }
}