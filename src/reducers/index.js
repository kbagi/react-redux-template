import { combineReducers } from 'redux'
import info from "./info"

// export default combineReducers({
//     info: base
// })

export default function reducer(state = {}, action) {
    return {
      info: info(state.info, action),         
    }
  }