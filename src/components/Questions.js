import React from "react"
import { Grid } from "@material-ui/core"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Question from "./Question"
import './Questions.css'

  


const Questions = ({ classes, questionIds }) => (
  <div className="spacing">
    <Grid className="questions" container spacing={24}>
    {questionIds.map(id => <Question key={id} id={id} />)}
    
    </Grid>
  </div>
)

Questions.propTypes = {
  classes: PropTypes.shape({
    spacing: PropTypes.string.isRequired
  }).isRequired,
  questionIds: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

const mapStateToProps = ({ questions }) => ({
  questionIds: Object.keys(questions)
})

export default connect(mapStateToProps)(withStyles(styles)(Questions))