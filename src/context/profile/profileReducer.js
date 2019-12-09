import {
    SET_PROFILE,
    REMOVE_PROFILE
} from '../types'
export default (state, action) => {
    switch(action.type){
        case SET_PROFILE:
            return{
                profile: action.payload,
                profileComplete: true
            }
        case REMOVE_PROFILE:
            return{
                profile: null,
                profileComplete: null
            }
        default:
            return state
    }
}