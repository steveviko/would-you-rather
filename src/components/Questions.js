import React, { Fragment } from "react"
import { Grid } from "@material-ui/core"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Question from "./Question"
import AddPollButton from "./AddPollButton"
import TopTab from "./TopTab"
import { ANSWERED } from "../actions/questionVisibilityFilter"
import './Questions.css'

  


const Questions = ({ classes, questionIds }) => (
  <Fragment>
  <TopTab />
  <div className={classes.spacing}>
    <Grid container spacing={16}>
      {questionIds.map(id => <Question key={id} id={id} />)}
    </Grid>
  </div>
  <AddPollButton />
</Fragment>
)

Questions.propTypes = {
  classes: PropTypes.shape({
    spacing: PropTypes.string.isRequired
  }).isRequired,
  questionIds: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

const mapStateToProps = ({
  questions,
  authedUser,
  questionVisibilityFilter
}) => {
  if (questionVisibilityFilter === ANSWERED) {
    return {
      questionIds: Object.keys(questions).filter(
        qid =>
          questions[qid].optionOne.votes.includes(authedUser) ||
          questions[qid].optionTwo.votes.includes(authedUser)
      )
    }
  }
  return {
    questionIds: Object.keys(questions).filter(
      qid =>
        !questions[qid].optionOne.votes.includes(authedUser) &&
        !questions[qid].optionTwo.votes.includes(authedUser)
    )
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Questions))