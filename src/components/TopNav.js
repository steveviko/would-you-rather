import React from "react"
import { AppBar, Toolbar, IconButton, Typography, Button} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { AccountCircle } from "@material-ui/icons"
import { connect } from "react-redux"
import { logout } from "../actions/authedUser"
import { toggleDrawer } from "../actions/drawer"
import PropTypes from "prop-types"
import './TopNav.css'


const TopNav = ({ toggleDrawerState, user, doLogout }) => (
  <AppBar position="static">
    <Toolbar>
    {user && (
        <IconButton
          onClick={() => toggleDrawerState()}
          style={styles.iconButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
      )}
      <Typography variant="title" color="inherit" className ="rightBtn" >
        Would You Rather
      </Typography>
      {user && (
        <Button color="inherit" onClick={() => doLogout()}>
          <Avatar
            aria-label="Recipe"
            style={styles.profilePic}
            src={user.avatarURL}
          />
          Logout
        </Button>
      )}
    </Toolbar>
  </AppBar>
)

TopNav.propTypes = {
  toggleDrawerState: PropTypes.func.isRequired,
  doLogout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    avatarURL: PropTypes.string.isRequired
  })
}

TopNav.defaultProps = {
  user: null
}

const mapStateToProps = ({ authedUser, users }) => ({
  user: users[authedUser]
})
export default connect(mapStateToProps, { doLogout: logout, toggleDrawerState: toggleDrawer })(TopNav)