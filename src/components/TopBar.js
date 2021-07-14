import React from "react"
import { Drawer, Divider, List } from "@material-ui/core"
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { Add, BarChartRounded, Home} from "@material-ui/icons"
import './TopBar.css'

const TopBar = ({ isOpen, toggleDrawer }) => (
  <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
    <div
      tabIndex={0}
      role="button"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className="drawer-list-item">
        <List>
        <ListItem button className="badge">
            <ListItemIcon>
              <Home className="navIcon"/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem button className="badge">
            <ListItemIcon>
              <Add className="navIcon" />
            </ListItemIcon>
            <ListItemText primary="Create Poll" />
          </ListItem>
          <Divider />
          <ListItem button className="badge ">
            <ListItemIcon>
              <BarChartRounded className="navIcon" />
            </ListItemIcon>
            <ListItemText primary="Leaderboard " />
          </ListItem>
          <Divider />
        </List>
        
        {/* <Avatar aria-label="Recipe" className="profilePic">
          S
        </Avatar> */}
      </div>
    </div>
  </Drawer>
)

export default TopBar