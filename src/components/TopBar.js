import React from "react"
import { Drawer, Divider, List } from "@material-ui/core"
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { Add, BarChartRounded } from "@material-ui/icons"

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
          <ListItem button className="badge badge-secondary">
            <ListItemIcon>
              <Add  />
            </ListItemIcon>
            <ListItemText primary="Create Poll" />
          </ListItem>
          <Divider />
          <ListItem button className="badge badge-secondary">
            <ListItemIcon>
              <BarChartRounded />
            </ListItemIcon>
            <ListItemText primary="Leaderboard " />
          </ListItem>
          <Divider />
        </List>
      </div>
    </div>
  </Drawer>
)

export default TopBar