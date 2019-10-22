import React from 'react';

import './style.css';
import Newsletter from '../../components/Newsletter';
 
const ValueProp = (props) => (
  <section className="vp">
    <div className="vp-content">
      <div className="container">
        <h2>
        Stop waiting. Start now. <br />
        Stop waiting. Start now. <br />

        </h2>
        <Newsletter />
      </div>
    </div>
    {/* if needed, overlay div goes here */}
  </section>
///
)

export default ValueProp
