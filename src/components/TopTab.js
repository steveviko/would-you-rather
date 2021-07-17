import React from "react"
import { Paper } from "@material-ui/core"
import  { Tabs,Tab } from "@material-ui/core"
import { toggleQuestionVisibilityFilter, UNANSWERED, ANSWERED} from "../actions/questionVisibilityFilter"

const TopTab = ({ questionVisibilityFilter, changeQuestionVisibilityFilter}) => (
  <Paper>
    <Tabs
      value={questionVisibilityFilter === UNANSWERED ? 0 : 1}
      onChange={(e, value) =>
        changeQuestionVisibilityFilter(value === 0 ? UNANSWERED : ANSWERED)
      }
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="Unanswered" />
      <Tab label="Answered" />
    </Tabs>
  </Paper>
)

TopTab.propTypes = {
  questionVisibilityFilter: PropTypes.string.isRequired,
  changeQuestionVisibilityFilter: PropTypes.func.isRequired
}

const mapStateToProps = ({ questionVisibilityFilter }) => ({
  questionVisibilityFilter
})

export default connect(mapStateToProps, {changeQuestionVisibilityFilter: toggleQuestionVisibilityFilter})(TopTab)