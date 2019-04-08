
import React, { Component } from 'react';
import londonmet from '../../assets/img/londonmet.png';
import thortful from '../../assets/img/thortful.png';
import lloyds from '../../assets/img/lloyds.png';
import imb from '../../assets/img/imb.png';
import newmoment from '../../assets/img/newmoment.png';
import undp from '../../assets/img/undp.png';
import './Companies.scss';

class Companies extends Component {
  render() {
    return (
      <div className="Companies">
        <div>
          <img src={londonmet} alt="Development"/>
        </div>
        <div>
          <img src={thortful} alt="Development"/>
        </div>
        <div>
          <img src={lloyds} alt="Design"/>
        </div>
        <div>
          <img src={imb} alt="Project Managing"/>
        </div>
        <div>
          <img src={newmoment} alt="User Experience"/>
        </div>
        <div>
          <img src={undp} alt="User Experience"/>
        </div>
      </div>
    );
  }
}

export default Companies;
