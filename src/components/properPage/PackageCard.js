import React from 'react'
import profileImgPaul from '../../components/assets/media/paul-900x900.jpg';
import nyePaul from '../../components/assets/media/nye.jpg';
import coverImage from '../../components/assets/media/sports-bike.jpg';
import profileImgFatBastard from '../../components/assets/media/fatbastard-185x185.jpg';
import pageImg1 from '../../components/assets/media/logo-paul_meier_fitness-1080x1080.png';
import pageImg2 from '../../components/assets/media/logo-livefit_livelean-640x640.png';
import pageImg3 from '../../components/assets/media/logo-28_day_kickstart-1080x1080.png';

const PackageCard = () => {
    return (
      <div className="card">
        <div className="purchase">
        <button type="button" value=""> purchase </button>
        </div>
        <div className="row">
          <div className="col-left">
            <p>package title:</p>
          </div>
          <div className="col-right">
          <p>10 personal training sessions</p>
          </div>
        </div>
        <div className="row">
          <div className="col-left">
            <p>description:</p>
          </div>
          <div className="col-right">
          <p>10 one-on-one appointments / personal training sessions</p>
          </div>
        </div>
        <div className="row">
          <div className="col-left">
            <p># of sessions:</p>
          </div>
          <div className="col-right">
          <p>10</p>
          </div>
        </div>
        <div className="row">
          <div className="col-left">
            <p>price:</p>
          </div>
          <div className="col-right">
          <p>$ 900.00</p>
          </div>
        </div>
      </div>
    )
};
export default PackageCard