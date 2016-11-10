import React from 'react';
import {Link, browserHistory} from 'react-router';





class HomePage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.redirectToBeeHivePage = this.redirectToBeeHivePage.bind(this);
  }

  redirectToBeeHivePage()  {
    browserHistory.push('/beeHives');
  }


  render() {
    return(
      <div>
        <div className="bk-masthead">

              <h1 className="header1-text">App for the back yard beekeeper</h1>

            <p>Visualize your back yard bee hive and keep tabs on it's progress.</p>
            <input id="get-started" type="submit"
                   value="Get Started"
                   className="btn btn-primary center-block"
                   onClick={this.redirectToBeeHivePage}/>

        </div>

        <div className="container">
          <div className="row separator">
            <h1>CHOOSE A HIVE</h1>
          </div>
          <hr className="half-rule" />
          <div className="row">

            <div className="col-sm-4 center-content">
              <img className="img-responsive" height="180" src={require('./langstroth-hive.png')} />
                <h4>Langstroth Hive</h4>
                <p>A Langstroth hive is a hive made up of stacked boxes of various depths, a floor, inner cover and roof. Within each box are wooden frames in which the bees build their comb. It is the most common hive in North America and Australia.</p>

            </div>
            <div className="col-sm-4 center-content">
              <img className="img-responsive" height="180" src={require('./horizontal-top-bar-hive.png')} />
              <h4>Horizontal Top Bar </h4>
               <p>Top bar hives are one of the most basic methods of managing bees, as they are simple to build and simple to manage.</p>

            </div>
            <div className="col-sm-4 center-content">
              <img className="img-responsive" height="180" src={require('./warre-hive.png')} />
              <h4>Warre Hive</h4>
              <p>A Warre hive is a vertical top bar hive that uses bars instead of frames, usually with a wooden wedge or guide from which the bees build their own comb. </p>
            </div>
          </div>
          <hr className="half-rule" />

          <div className="row separator">
           {/*<h1>CONFIGURE YOUR HIVE</h1>
          </div>
          <div className="row">

            <div className="col-sm-4">
              <div className="demo-item">
                configure  image
              </div>
            </div>
            <div className="col-sm-8">
              <div className="demo-item">
                configure text
              </div>
            </div>
          </div>
          <div className="row separator">
            <h1>TRACK YOUR HIVE</h1>
          </div>
          <div className="row">

            <div className="col-sm-8">
              <div className="demo-item">
                track text
              </div>
            </div>
            <div className="col-sm-4">
              <div className="demo-item">
                track image
              </div>
            </div> */}
          </div>
        </div>
      </div>


    );
  }
}

export default HomePage;
