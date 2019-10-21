import React, { Component } from 'react'; 
import ReactDOM from 'react-dom'; 

import Header  from '../../components/Header';
import Footer  from '../../components/Footer';
import ValueProp from '../../components/ValueProp';

import * as serviceWorker from '../../web/serviceWorker';

/* 
  Typical landing page would include these components 

      <div>
        <NavBar navBarShrink = {nbs} />
        <Hero />
        <AppDownload />
        <Features />
        <CallToAction />
        <Social />
        <Footer />
      </div>
 */

class AppView extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <ValueProp /> {/* <Newsletter /> will go inside ValueProp */}
        <Footer />
      </div>
    );
  }
}

export default AppView

ReactDOM.render(<AppView />, document.getElementById('root'));

//// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
