import React, { Component,Fragment } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Login from "./components/Login"
import Leaderboard from "./components/Leaderboard"
import AddPoll from "./components/AddPoll"
import AnswerPoll from "./components/AnswerPoll"
import Questions from "./components/Questions"
import LeftDrawer from "./components/TopBar"
import TopNav from "./components/TopNav"
import AddPollButton from "./components/AddPollBtn"
import TopTab from "./components/TopTab"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { fetchUsers } from "./actions/users"
import PrivateRoute from "./components/PrivateRoute"

class App extends Component {
  state = {
    isOpen: false
  }

  componentDidMount() {
    this.props.getAllUsers()
  }

  toggleDrawer = open => () => {
    this.setState({
      isOpen: open
    })
  }

  

  render() {
    return (
      <div>
       <Router>
        <Fragment>
          {/* Add the loading bar here */}
          <TopNav toggleDrawer={this.toggleDrawer} />
          <LeftDrawer
            toggleDrawer={this.toggleDrawer}
            isOpen={this.state.isOpen}
          />
          <PrivateRoute
            path="/"
            exact
            component={() => (
              <Fragment>
                <TopTab />
                <Questions toggleDrawer={this.toggleDrawer} />
              </Fragment>
            )}
          />
         <PrivateRoute path="/leaderboard" component={Leaderboard} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/question" component={AnswerPoll} />
          <PrivateRoute path="/add" component={AddPoll} />
          <AddPollButton />
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
