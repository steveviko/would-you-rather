import React from "react"
import { Grid } from "@material-ui/core"
import Question from "./Question"
import './Questions.css'

  


const Questions = () => (
  <Grid className="questions" container spacing={24}>
    <Question />
    <Question />
    <Question />
    <Question />
    <Question />
    <Question />
   
  </Grid>
)

export default Questions