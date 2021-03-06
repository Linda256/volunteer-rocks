import React from 'react';

const Main = (props) => (
  <header className="masthead text-white text-center">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 mx-auto">
            <h4 className="mb-5">Search for volunteer opportunities in your area now!</h4>
          </div>
          <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <form>
              <div className="form-row">
                <div className="col-12 col-md-9 mb-2 mb-md-0">
                  <input type="text" className="form-control form-control-sm" placeholder="Enter your zip code..." onChange={props.zipcode.bind(this)}/>
                </div>
                <div className="col-12 col-md-3">
                  <button type="submit" className="btn btn-block btn-sm btn-primary" onClick={(e)=>props.getOpp(e, props.zipcodeState)}>Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  </header>
);

export default Main;