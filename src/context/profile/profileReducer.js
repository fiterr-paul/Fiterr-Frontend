import {
    SET_PROFILE,
    CLEAR_PROFILE
} from '../types'
export default (state, action) => {
    switch(action.type){
        case SET_PROFILE:
            return{
                profile: action.payload,
                profileComplete: true
            }
        case CLEAR_PROFILE:
            return{
                profile: null,
                profileComplete: null
            }
        default:
            return state
    }
}