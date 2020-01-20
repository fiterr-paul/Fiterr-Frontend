import React  from 'react'
import PageOwnerController from './Controller/PageOwnerController'

const PageController = (props) => {
    let role = props.pageRole
    if(role == 'Owner'){
        return <PageOwnerController />
    }
    if(role == 'Trainer'){
        return <PageTrainerController />
    }
    if(role == 'Content-Creator'){
        return <PageContentCreatorController />
    }
    else{
        return null
    }
}

export default PageController