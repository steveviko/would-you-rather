import React, { Component,Fragment } from "react"
import { BrowserRouter as Router, Route,Switch} from "react-router-dom"
import Login from "./components/Login"
import Leaderboard from "./components/Leaderboard"
import AddPoll from "./components/AddPoll"
import AnswerPoll from "./components/AnswerPoll"
import Questions from "./components/Questions"
import TopBar from "./components/TopBar"
import TopNav from "./components/TopNav"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { fetchUsers } from "./actions/users"
import LoadingBar from "react-redux-loading-bar"
import Message from "./components/Message"
import NotFound from "./components/NotFound"
import PrivateRoute from "./components/PrivateRoute"

class App extends Component {
  state = { }

  componentDidMount() {
    this.props.getAllUsers()
  }

  

  

  render() {
    return (
      <div>
       <Router>
        <Fragment>
        <LoadingBar />
          <TopNav />
          <TopBar />
          <Switch>
            <PrivateRoute path="/" exact component={Questions} />
            <PrivateRoute path="/leaderboard" component={Leaderboard} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/create" component={AddPoll} />
            <PrivateRoute path="/questions/:id" component={AnswerPoll} />
            <Route component={NotFound} />
          </Switch>
          <Message />
       
        </Fragment>
      </Router>
    </div>
    )
  }
}

App.propTypes = {
  getAllUsers: PropTypes.func.isRequired
}

export default connect(null, { getAllUsers: fetchUsers })(App)
