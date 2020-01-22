import {
    SET_PAGE, SET_CURRENT_PAGE_ROLE, SET_MY_PAGE, SET_MY_PAGE_FAIL, SET_CURRENT_PACKAGE, SERVICE_BOUGHT, SET_TRAINERS
} from '../types'

export default (state, action) => {
    switch(action.type){
        case SET_PAGE:
            return{
                ...state,
                currentPage: action.payload
            }
        case SET_CURRENT_PAGE_ROLE:
            return{
                ...state,
                roleOnPage: action.payload
            }
        case SET_MY_PAGE:
            return{
                ...state,
                myPage: action.payload
            }
        case SET_MY_PAGE_FAIL:
        case SET_CURRENT_PACKAGE:
            return{
                ...state,
                currentPackage: action.payload
            }
        case SERVICE_BOUGHT:
            return{
                ...state,
                lastCharge: action.payload
            }
        case SET_TRAINERS:
            return{
                ...state,
                trainers: action.payload
            }
        default:
            return state
    }
}