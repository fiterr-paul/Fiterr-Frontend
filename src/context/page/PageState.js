import React, {useReducer, useContext} from 'react';
import PageContext from './pageContext';
import pageReducer from './pageReducer';
import { SET_PAGE, SET_CURRENT_PAGE_ROLE, SET_MY_PAGE, SET_MY_PAGE_FAIL, SET_CURRENT_PACKAGE, SERVICE_BOUGHT, SET_TRAINERS } from '../types'
import request from '../../utils/axios-config'
import AuthContext from '../auth/authContext';
import AlertContext from '../alert/alertContext'

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const PageState = props => {
    const alertContext = useContext(AlertContext);
    const { setAlert } = alertContext;

    const initialState = {
        currentPage: null,
        roleOnPage: null,
        myPage: null,
        currentPackage: null,
        lastCharge: null,
        trainers: null
    }

    const [state, dispatch] = useReducer(pageReducer, initialState)

    const authContext = useContext(AuthContext)
    const {user} = authContext

    const createPage = async(body) => {
        try {
            const response = await request.post('/api/pages/create', body, config);

            dispatch({
                type: SET_MY_PAGE,
                payload: response.data
            })


        } catch (err) {
            console.error(err);
            setAlert(err.response.data.msg, err.response.data.type);

            dispatch({
                type: SET_MY_PAGE_FAIL,
                payload: err.response.data.msg
            })
        }
    }

    const getPage = async(handle) => {
        const response = await request.get(`/api/pages/get-page/${handle}`)
        console.log(response.data)
        dispatch({
            type: SET_PAGE,
            payload: response.data
        })
    }

    const findRole = async(handle) => {
        const response = await request.get(`/api/pages/find-role/${handle}`)
        dispatch({
            type: SET_CURRENT_PAGE_ROLE,
            payload: response.data
        })
    }
    const updateAbout = async(body)=> {
        const response = await request.put('/api/pages/about', body, config)
        dispatch({
            type: SET_PAGE,
            payload: response.data
        })
    }
    const createPackage = async(body) => {
        const response = await request.post('/api/packages/package-register', body, config)
        dispatch({
            type: SET_PAGE,
            payload: response.data
        })
    }

    const getPackage = async(pageHandle, packageID) => {
        const response = await request.get(`/api/packages/${pageHandle}/${packageID}`, config)
        dispatch({
            type: SET_CURRENT_PACKAGE,
            payload: response.data
        })
    }
    const packagePriceChange = async(body) => {
        const response = await request.put('/api/packages/update-package-price', body, config)
        dispatch({
            type: SET_CURRENT_PACKAGE,
            payload: response.data
        })
    }
    const buyPackage = async(handle, id, body) => {
        const response = await request.post(`/api/packages/${handle}/${id}`, body, config)
        dispatch({
            type: SERVICE_BOUGHT,
            payload: response.data
        })
    }
    const getTrainers = async(id) => {
        const response = await request.get(`/api/pages/trainers/${id}`)
        dispatch({
            type: SET_TRAINERS,
            payload: response.data
        })
    }
    return(
        <PageContext.Provider
            value={{
                currentPage: state.currentPage,
                roleOnPage: state.roleOnPage,
                currentPackage: state.currentPackage,
                getPage,
                findRole,
                createPage,
                updateAbout,
                createPackage,
                getPackage,
                packagePriceChange,
                buyPackage,
                lastCharge: state.lastCharge,
                trainers: state.trainers,
                getTrainers
            }}>
                {props.children}
        </PageContext.Provider>
    )
}

export default PageState