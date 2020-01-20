import React, {useState, useEffect, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import PageContext from '../../../context/page/pageContext'
import AuthContext from '../../../context/auth/authContext'
import {useParams} from 'react-router'
import $ from 'jquery'

const PackageShow = () => {
    const pageContext = useContext(PageContext)
    const authContext = useContext(AuthContext)
    
    const {currentPage, createPackage, getPage, roleOnPage, findRole, getPackage, currentPackage, packagePriceChange, buyPackage} = pageContext
    const {loadUser, isAuthenticated} = authContext
    const {handle, id} = useParams()
    const history = useHistory()
    const role = roleOnPage
    // getPackage(handle, id)
    const [pack, setPack] = useState({
        price: ''
    })
    const {price} = pack

    useEffect(() => {
        if(!isAuthenticated){ loadUser() } 
        if(!currentPage){getPage(handle)}
        if(!roleOnPage){findRole(handle)}
        if(!currentPackage){getPackage(handle, id)}
    }, [isAuthenticated, currentPage ])
    if(!currentPage || !currentPackage){
        return null
    }
    const onChange = (e) => {
        setPack({...pack, [e.target.name]: e.target.value})
    }
    const onPriceUpdateClick = (e) => {
        $("#formButton").click(function() {
            $("#editPrice").toggle();
        });
    }
    const updateIfPermission = () => {
        if(role =='Owner' || role == 'Trainer'){
            return(
                <>
                    <button type="button" id="formButton" onClick={onPriceUpdateClick}>Edit Price</button>
                    <form id="editPrice">
                        <label className="packShow">EDIT PRICE</label>
                        <input type="text" id="price" name="price" onChange={onChange} value={price}></input>
                        <button onClick={onEditPriceSubmit}>Apply Change</button>
                    </form>
                </>
            )
            
        }
        else{
            return(null)
        }
    }
    
    const onEditPriceSubmit = async(e) => {
        e.preventDefault()
        let body = new FormData
        body.append('price', price)
        body.append('id', id)
        packagePriceChange(body)
    }
    const submitPayment = async(e) =>{
        e.preventDefault()
        buyPackage(handle, id)
        history.push(`/page/${handle}`)
    }
    const purchasePackageButton = () =>{
        if(role=='Owner' || role=='Visitor'){
            return(
            <button onClick={submitPayment}>BUY NOW for ${currentPackage.price}</button>
            )
        }
        else{return(null)}
    }

    
    return(
        <>
            <h1>Title: {currentPackage.title}</h1>
            <h2>Description: {currentPackage.description}</h2>
            <p>Number Of Sessions: {currentPackage.numberOfSessions}</p>
            <p>Price: ${currentPackage.price}</p>
            <div>
                {purchasePackageButton()}
            </div>
           <div>
               {updateIfPermission()}
           </div>
           
        </>
    )
}
export default PackageShow