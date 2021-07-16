import React from "react"
import { AppBar, Toolbar, IconButton, Typography, Button} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { AccountCircle } from "@material-ui/icons"
import PropTypes from "prop-types"
import './TopNav.css'


const TopNav = ({ toggleDrawer }) => (
  <AppBar position="static">
    <Toolbar>
      <IconButton
        onClick={toggleDrawer(true)}
        className="iconButton"
        color="inherit"
        aria-label="Menu"
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="title" color="inherit" className ="rightBtn" >
        Would You Rather
      </Typography>
      <Button color="inherit">
        <AccountCircle />
        
        Logout
      </Button>
    </Toolbar>
  </AppBar>
)

TopNav.propTypes = {
  toggleDrawer: PropTypes.func.isRequired
}
export default TopNav