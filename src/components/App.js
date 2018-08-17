import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Home from './Home'
import Leaderboard from './Leaderboard'
import NewQuestion from './NewQuestion'
import Dashboard from './Dashboard'
import  Nav  from './Nav'
import NoMatch from './NoMatch'
import ViewQuestion from './ViewQuestion'


class App extends Component {


  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  

  render() {    
    return (
      <Router>
        <Fragment>        
          <LoadingBar />
          <div className="App">
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/dashboard' component={Dashboard} />
                  <Route path='/questions/:question_id' render={() => <ViewQuestion questions={this.props.questions} />} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route component={NoMatch} />
                </Switch>
            </div>}  
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser, questions }) {
  return {
    loading: authedUser === null,
    questions,
  }
}

export default connect(mapStateToProps)(App)
