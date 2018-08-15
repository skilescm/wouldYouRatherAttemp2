import React, { Component } from 'react'
import { connect} from 'react-redux'
import UserSelect from './UserSelect'


class Home extends Component {
    render () {
        console.log(this.props)
        return (
            <div>
                <h3 className = 'center'> Select a User</h3>
                <UserSelect />
            </div>
        )
    }
}


/*function mapStateToProps ({ tweets }) {
    return {
        tweetIds: Object.keys(tweets)
            .sort((a,b) => tweets[b].timestampo - tweets[a].timestamp)
    }
}*/
export default connect()(Home)