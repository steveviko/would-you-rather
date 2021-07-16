import React from "react"
import { Grid } from "@material-ui/core"
import PropTypes from "prop-types"
import Question from "./Question"
import './Questions.css'

  


const Questions = () => (
  <div className="spacing">
    <Grid className="questions" container spacing={24}>
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
    
    </Grid>
  </div>
)

Questions.propTypes = {
  classes: PropTypes.shape({
    spacing: PropTypes.string.isRequired
  }).isRequired
}

export default Questions