
import React from 'react';
import londonmet from '../../assets/img/londonmet.png';
import thortful from '../../assets/img/thortful.png';
import lloyds from '../../assets/img/lloyds.png';
import imb from '../../assets/img/imb.png';
import zava from '../../assets/img/zava.png';
import undp from '../../assets/img/undp.png';
import './Companies.scss';

const Companies = () => {
  return (
    <div className="Companies">
      <div>
        <img src={ zava } alt="Zava"/>
      </div>
      <div>
        <img src={ thortful } alt="Thortful"/>
      </div>
      <div>
        <img src={ undp } alt="UNDP"/>
      </div>
      <div>
        <img src={ londonmet } alt="London Metropolitan University"/>
      </div>
      <div>
        <img src={ imb } alt="Instituti i Modelimeve ne Biznes"/>
      </div>
      <div>
        <img src={ lloyds } alt="Lloyds Bank"/>
      </div>
    </div>
  )
}

export default Companies;
