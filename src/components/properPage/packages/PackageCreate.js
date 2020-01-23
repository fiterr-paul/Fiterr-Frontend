import React, {useState, useEffect, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import PageContext from '../../../context/page/pageContext'
import AuthContext from '../../../context/auth/authContext'
import {useParams} from 'react-router'

const PackageCreate = () => {
    const pageContext = useContext(PageContext)
    const authContext = useContext(AuthContext)
    
    const {currentPage, createPackage, getPage, roleOnPage, findRole} = pageContext
    const {loadUser, isAuthenticated} = authContext
    const {handle} = useParams()
    const history = useHistory()

    useEffect(() => {
        if(!isAuthenticated){ loadUser() } 
        if(!currentPage){getPage(handle)}
        if(!roleOnPage){findRole(handle)}
        // if(currentPage.pageHandle !== handle){
        //     getPage(handle) 
        //     findRole(handle)
        // }
    // eslint-disable-next-line
    }, [isAuthenticated, currentPage])

    const [thisPackage, setPackage] = useState({
        pageID: '',
        title: '',
        description: '',
        numberOfSessions: '',
        price: ''
    })
    const {title, description, numberOfSessions, price} = thisPackage
    const onChange = (e) => {
        setPackage({...thisPackage, [e.target.name]: e.target.value})
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        let body = new FormData();
        body.append('pageID', currentPage._id)
        body.append('title', title)
        body.append('description', description)
        body.append('numberOfSessions', numberOfSessions)
        body.append('price', price)

        createPackage(body)
        history.push(`/page/${currentPage.pageHandle}`)
    }
    if(!currentPage){
        return(null)
    }
    const currentPackages = () => {
        const part = currentPage.packages.map((pack, index)=>{
            return(
                <div key={index} className="package">
                    <h3>{pack.title}</h3>
                    <p>About {pack.description}</p>
                    <p>Session Number{pack.numberOfSessions}</p>
                    <p>Price {pack.price}</p>

                </div>
            )
        })
        return part
    }
    return(
        <>
            <h1>Add More Packages</h1>
            <form action="">
                <label htmlFor="">Enter Package Title</label>
                <input type="text" name="title" id="title" value={title} onChange={onChange}/>
                <label htmlFor="">Enter Package Description</label>
                <input type="text" name="description" id="description" value={description} onChange={onChange}/>
                <label htmlFor=""> Enter the number of sessions
                    <select value={numberOfSessions}name="numberOfSessions" id="numberOfSessions" onChange={onChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </label>
                <label >Enter the Package Price</label>
                <input type="text" name="price" id="price" value={price} onChange={onChange}/>
                <div className="submit-button">
                    <button onClick={onSubmit} type="submit" value="submit"> Submit </button>
                </div>
            </form>
            <div className="packages">
                <h1>Your Current Packages</h1>
                {currentPackages()}
            </div>
        </>
    )

}
export default PackageCreate