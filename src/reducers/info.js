import { ActionTypes } from "../actions/index"

const info = (state = "", action) => {
    switch (action.type) {
        case ActionTypes.SHOW_INFO:
            return "Project template"
        default:
            return state
    }
}
  
export default info
  