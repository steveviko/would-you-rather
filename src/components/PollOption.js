import React from "react"
import PropTypes from "prop-types"
import { LinearProgress, withStyles } from "@material-ui/core"
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import { RadioButtonChecked, RadioButtonUnchecked } from "@material-ui/icons"
import { Done } from "@material-ui/icons"

const styles = theme => ({
  progressBar: {
    height: 10
  },
  radioBtn: {
    color: theme.palette.secondary.light
  }
})

const PollOption = ({ classes, isChecked, text, votes, percent }) => (
  <ListItem>
     <ListItemIcon>
      {isChecked ? <Done className={classes.radioBtn} /> : <span />}
    </ListItemIcon>
    <ListItemText>
    {text}
    {`(${votes} votes | ${percent}%)`}
      <LinearProgress
        className={classes.progressBar}
        variant="determinate"
        value={percent}
      />
      
    </ListItemText>
  </ListItem>
)

PollOption.defaultProps = {
  isChecked: null
}

PollOption.propTypes = {
  classes: PropTypes.shape({
    progressBar: PropTypes.string.isRequired,
    radioBtn: PropTypes.string.isRequired
  }).isRequired,
  isChecked: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired
}

export default withStyles(styles)(PollOption)