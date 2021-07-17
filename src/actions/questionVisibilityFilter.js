export const ANSWERED = "ANSWERED"
export const UNANSWERED = "UNANSWERED"
export const TOGGLE_ANSWER_VISIBILITY_FILTER = "TOGGLE_ANSWER_VISIBILITY_FILTER"

export const toggleQuestionVisibilityFilter = visibilityFilter => ({
  type: TOGGLE_ANSWER_VISIBILITY_FILTER,
  visibilityFilter
})