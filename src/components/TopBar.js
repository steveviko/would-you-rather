import React from "react"
import PropTypes from "prop-types"
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { Add, BarChartRounded, Home} from "@material-ui/icons"
import { Link } from "react-router-dom"
import { Drawer, Divider, List } from "@material-ui/core"
import './TopBar.css'

const TopBar = ({ isOpen, toggleDrawer,classes }) => (
  <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
    <div
      tabIndex={0}
      role="button"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
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
        
        {/* <Avatar aria-label="Recipe" className="profilePic">
          S
        </Avatar> */}
      </div>
    </div>
  </Drawer>
)

TopBar.propTypes = {
  classes: PropTypes.shape({
    navLink: PropTypes.string.isRequired
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
}


export default TopBar