import {
    SET_PAGE, SET_CURRENT_PAGE_ROLE, SET_MY_PAGE, SET_MY_PAGE_FAIL
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
    }
}