import React from "react"
import PropTypes from "prop-types"
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { Add, BarChartRounded, Home} from "@material-ui/icons"
import { Link } from "react-router-dom"
import { Drawer, Divider, List } from "@material-ui/core"
import { connect } from "react-redux"
import { DrawerState, toggleDrawer } from "../actions/drawer"
import './TopBar.css'

const styles = {
  navLink: {
    textDecoration: "none"
  }
}

const TopBar = ({ isOpen, toggleDrawerState }) => (
  <Drawer anchor="left" open={isOpen} onClose={() => toggleDrawerState()}>
    <div
      tabIndex={0}
      role="button"
      onClick={() => toggleDrawerState()}
      onKeyDown={() => toggleDrawerState()}
    >
      <div className="drawer-list-item">
        <List>
        
          <Link to={"/"} className="navLink">
            <ListItem button className="badge">
              <ListItemIcon>
                <Home className="navIcon" />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Divider />
          <Link to={"/create"} className="navLink">
          <ListItem button className="badge">
            <ListItemIcon>
              <Add className="navIcon" />
            </ListItemIcon>
            <ListItemText primary="Create Poll" />
          </ListItem>
          </Link>
          <Divider />
          <Link to={"/leaderboard"} className="navLink">
          <ListItem button className="badge ">
            <ListItemIcon>
              <BarChartRounded className="navIcon" />
            </ListItemIcon>
            <ListItemText primary="Leaderboard " />
          </ListItem>
          </Link>
          <Divider />
        </List>
        
        
      </div>
    </div>
  </Drawer>
)

TopBar.propTypes = {
  classes: PropTypes.shape({
    navLink: PropTypes.string.isRequired
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleDrawerState: PropTypes.func.isRequired
}




const mapStateToProps = ({ drawer }) => ({
  isOpen: drawer === DrawerState.OPEN
})

export default connect(mapStateToProps, { toggleDrawerState: toggleDrawer })(
  withStyles(styles)(TopBar)
)