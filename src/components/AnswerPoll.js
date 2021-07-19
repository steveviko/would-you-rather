import React,{ Fragment } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {Avatar,Typography,Card,Button,Grid,IconButton,withStyles} from "@material-ui/core"
import { CardContent, CardActions, CardHeader } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import { Radio,RadioGroup } from "@material-ui/core"
import AddPollButton from "./AddPollBtn"
import {  formatDate } from "../util/helpers"
import { FormControl, FormControlLabel } from "@material-ui/core"
import { handleAnserQuestion } from "../actions/questions"

const styles = {
  margin: {
    marginTop: 100
  }
}

class AnswerPoll extends React.Component {
  state = {
    value: ""
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = () => {
    const { question, authedUser } = this.props
    this.props.saveAnswer({
      qid: question.id,
      authedUser,
      answer: this.state.value
    })
    this.props.history.push("/")
  }

  render() {

    const { classes, question, author } = this.props
    if (!question) {
      return <div>question not present</div>
    }

    const { optionOne, optionTwo } = question
    return (
      <Fragment>
      <Grid container className={classes.margin}>
        <Grid item xs={1} sm={3} lg={4} xl={5} />
        <Grid item xs={10} sm={6} lg={4} xl={2}>
          <Card>
            <CardHeader
              avatar={<Avatar aria-label="Recipe" src={author.avatarURL} />}
              title={author.name}
              subheader={formatDate(question.timestamp)}
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                Would You Rather
              </Typography>

              <FormControl component="fieldset" required>
                  <RadioGroup
                    value={this.state.value}
                    onChange={this.handleChange}
                  >
                    <FormControlLabel
                      value="optionOne"
                      control={<Radio />}
                      label={optionOne.text}
                    />
                    <FormControlLabel
                      value="optionTwo"
                      control={<Radio />}
                      label={optionTwo.text}
                    />
                  </RadioGroup>
                </FormControl>
              </CardContent>
              <CardActions>
                <Button
                  color="primary"
                  variant="raised"
                  onClick={this.handleSubmit}
                >
                   Answer
                </Button>
                <IconButton aria-label="Delete" style={{ marginLeft: "auto" }}>
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        
      </Grid>
      <AddPollButton />
      </Fragment>
    )
  }
}

AnswerPoll.propTypes = {
  classes: PropTypes.shape({
    margin: PropTypes.string.isRequired
  }).isRequired,
  question: PropTypes.shape({
    id: PropTypes.string.isRequired,
    optionOne: PropTypes.shape({
      text: PropTypes.string.isRequired
    }),
    optionTwo: PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  }),
  author: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired
  }).isRequired,
  authedUser: PropTypes.string.isRequired,
  saveAnswer: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }),
}

AnswerPoll.defaultProps = {
  question: null,
  author: null
}

const mapStateToProps = ({ questions, users, authedUser }, props) => {
  const { id } = props.match.params
  const question = questions[id]
  return {
    question,
    author: question ? users[question.author] : null,
    authedUser
  }
}

export default connect(mapStateToProps, { saveAnswer: handleAnserQuestion })(withStyles(styles)(AnswerPoll))