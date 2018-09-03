import { ActionTypes } from "../actions"

const info = (state = "", action) => {
    switch (action.type) {
        case ActionTypes.SHOW_INFO:
            return "Project template"
        default:
            return state
    }
}
  
export default info
  