import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserSelect from './UserSelect'


class Home extends Component {
    render () {
        return (
            <div>
                <h3 className = 'salutation'> Select a User</h3>
                <UserSelect />
            </div>
        )
    }
}

export default connect()(Home)