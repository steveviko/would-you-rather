import { combineReducers } from "redux"
import questions from "./questions"
import authedUser from "./authedUser"
import users from "./users"
import drawer from "./drawer"
import questionVisibilityFilter from "./questionVisibilityFilter"

export default combineReducers({ users,authedUser, questions,questionVisibilityFilter, drawer })