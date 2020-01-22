import React from 'react'
import {Link} from 'react-router-dom'
import profileImgPaul from '../../components/assets/media/paul-900x900.jpg';
import nyePaul from '../../components/assets/media/nye.jpg';
import coverImage from '../../components/assets/media/sports-bike.jpg';
import profileImgFatBastard from '../../components/assets/media/fatbastard-185x185.jpg';
import pageImg1 from '../../components/assets/media/logo-paul_meier_fitness-1080x1080.png';
import pageImg2 from '../../components/assets/media/logo-livefit_livelean-640x640.png';
import pageImg3 from '../../components/assets/media/logo-28_day_kickstart-1080x1080.png';

const PackageCard = (props) => {
  const {pack, handle, role} = props

  const buyButton = (pack) => {
    // getPackage(handle, packID)
    return(
        <Link to={{ 
            pathname:'/checkout',
            state: {pack: pack, handle: handle}
        }}> <button>Buy Now</button> </Link>
    )
}

    return (
      <div className="card">
        <div className="purchase">
          {role=='Owner' || role=='Visitor' ? buyButton(pack) : null}
        </div>
        <div className="row">
          <div className="col-left">
            <p>package title: </p>
          </div>
          <div className="col-right">
            <p>{pack.title}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-left">
            <p>description: </p>
          </div>
          <div className="col-right">
            <p>{pack.description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-left">
            <p># of sessions:</p>
          </div>
          <div className="col-right">
            <p>{pack.numberOfSessions}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-left">
            <p>price:</p>
          </div>
          <div className="col-right">
            <p>{pack.price}</p>
          </div>
        </div>
      </div>
    )
};
export default PackageCard