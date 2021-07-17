import { _getQuestions, _saveQuestion , _saveQuestionAnswer} from "../util/_DATA"

export const ADD_QUESTION = "ADD_QUESTION"
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER"

export const questionsFetched = questions => ({
  type: QUESTIONS_FETCHED,
  questions
})

export const saveQuestionAnswer = info => ({
  type: SAVE_QUESTION_ANSWER,
  info
})

export const addQuestion = question => ({
  type: ADD_QUESTION,
  question
})

export const handleAddQuestion = question => dispatch => _saveQuestion(question).then(res => dispatch(addQuestion(res)))

export const handleAnserQuestion = info => dispatch =>
  _saveQuestionAnswer(info).then(dispatch(saveQuestionAnswer(info)))