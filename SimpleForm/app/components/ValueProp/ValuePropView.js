import React from 'react';

import './style.css';
import Newsletter from '../../components/Newsletter';
 
const ValueProp = (props) => (
  <section className="vp" style={{alignItems:"center", justifyContent:"center"}} >
        <h1>  I want it !</h1>
        <h2>Get access<br />to exclusive deals !!</h2> <br />
        <Newsletter />
        <small>By submitting, you agree to recieve<br/>email periodically and can opt-out at any time.</small><br />
    {/* if needed, overlay div goes here */}
  </section>
///
)

export default ValueProp
