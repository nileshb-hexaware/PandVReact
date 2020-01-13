import React, { Component } from 'react';
import Slider from 'react-rangeslider'
import '../../range.css';
import { Link } from 'react-router-dom';

class Simulation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state = {
      value: 100
    }
    this.myRef = React.createRef();
  }

  handleOnChange = (value) => {
    this.setState({
      volume: value
    })
  }

  handleChangeStart = () => {
    console.log('Change event started')
  };

  handleChange = value => {
    this.setState({
      value: value
    })
  };

  handleChangeComplete = () => {
    console.log('Change event completed')
  };
  render() {
    const { value } = this.state
    return (
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-12">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    className="nav-item nav-link active tab-name"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Charl Robert &gt; 80% simulation
            </a>
                  <i
                    className="fa fa-plus-circle fa-2x m-l-10 m-t-5 text-red"
                    aria-hidden="true"
                  />
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="card">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card-body">
                          <h5 className="card-title text-red">
                            Information needed to get started
                    </h5>
                          <form>
                            <div className="row">
                              <div className="col-lg-9 p-r-0">
                                <div className="form-group">
                                  <label className="label-color" htmlFor="one">Yearly Net Salary</label>
                                  <input
                                    type="text"
                                    className="form-control "
                                    defaultValue="55,000"
                                    id="one"

                                  />
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="input-group-append">
                                  <span className="info-icon-simulation" data-toggle="tooltip" 
                                data-placement="top" title="Yearly Net Salary">ⓘ</span>
                                </div>
                              </div>
                             </div>
                            <div className="row">
                              <div className="col-lg-9 p-r-0">
                                <div className="form-group">
                                  <label className="label-color" htmlFor="one">Yearly Gross Salary</label>
                                  <input
                                    type="text"
                                    className="form-control "
                                    defaultValue="200,000"
                                    id="one"

                                  />
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="input-group-append">
                                  <span className="info-icon-simulation" data-toggle="tooltip" 
                                data-placement="top" title="Yearly Gross Salary">ⓘ</span>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-9 p-r-0">
                                <div className="form-group">
                                  <label className="label-color" htmlFor="one">Employment Date</label>
                                  <input
                                    type="date"
                                    className="form-control "
                                    defaultValue="23/05/2019"
                                    id="one"

                                  />
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="input-group-append">
                                  <span className="info-icon-simulation" data-toggle="tooltip" 
                                data-placement="top" title="Employment Date">ⓘ</span>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-9 p-r-0">
                                <div className="form-group">
                                  <label className="label-color" htmlFor="one">Estimated Legal Pension</label>
                                  <input
                                    type="text"
                                    className="form-control "
                                    defaultValue="42,400"
                                    id="one"

                                  />
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="input-group-append">
                                  <span className="info-icon-simulation" data-toggle="tooltip" 
                                data-placement="top" title="Estimated Legal Pension">ⓘ</span>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-9 p-r-0">
                                <div className="form-group">
                                  <label className="label-color" htmlFor="one">Pension age</label>
                                  <input
                                    type="number"
                                    className="form-control "
                                    defaultValue="67"
                                    id="one"

                                  />
                                </div>
                              </div>
                              <div className="col-lg-3">
                                <div className="input-group-append">
                                  <span className="info-icon-simulation" data-toggle="tooltip" 
                                data-placement="top" title="Pension age">ⓘ</span>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="col-lg-6 ">
                        <div className="card-body simulation-second-column" style={{ height: '100%' }}>
                          <h5 className="card-title text-red">Fiscal Optimizer</h5>
                          <div className="row">
                            <div className="col-lg-10 m-t-10">
                              <Slider
                                min={0}
                                max={100}
                                value={value}
                                onChangeStart={this.handleChangeStart}
                                onChange={this.handleChange}
                                onChangeComplete={this.handleChangeComplete}
                              />
                            </div>
                            <div className="col-lg-2 p-l-0">
                              <input type="number" className="form-control input-range-slider" onChange={()=>{}}
                                placeholder="0" id="input-demo" value={this.state.value} ></input>
                            </div>
                          </div>  
                            <div className="row">
                              <div className="col-lg-3 m-t-20 m-l-10">
                                <input
                                  type="number"
                                  value={parseFloat((24548.67*(this.state.value-14))/100).toFixed(2)}
                                  className="form-control"
                                  id="myRange"
                                  disabled
                                />
                              </div>
                              <div className="col-lg-9"></div>
                            </div>
                            
                          <br />
                          <div className="row">
                            <div className="col-lg-6 m-t-10 m-l-10">
                              <h5 className="card-title text-red">
                                Review VAPZ and IPT</h5>
                            </div>
                           </div> 
                            <div className="row m-t-20 m-l-10">
                              <div className="col-lg-4">
                                <span>VAPZ</span>
                                <br />
                                <strong className="fiscal-values">{(21291.80*(this.state.value-16)/100).toFixed(2) < 0 ? (3256.87 - this.state.value) :3256.87}</strong>&nbsp;
                                
                                <div className="input-group-append">
                                  <span className="info-icon-fiscal-first" data-toggle="tooltip" 
                                data-placement="top" title="VAPZ">ⓘ</span>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <span>IPT</span>
                                <br />
                                <strong className="fiscal-values">{ (21291.80*(this.state.value-16)/100).toFixed(2) < 0 ? '0':(21291.80*(this.state.value-16)/100).toFixed(2)}</strong>&nbsp;
                                <div className="input-group-append">
                                  <span className="info-icon-fiscal-second" data-toggle="tooltip" 
                                data-placement="top" title="IPT">ⓘ</span>
                                </div>
                              </div>
                            </div>
                          
                          <div className="row">
                            <div className="col-lg-6">
                              <br />
                              <button className="btn btn-red white full-width save-btn">
                                Save as Draft
                                </button>
                            </div>
                            <div className="col-lg-6">
                              <br />
                              <button className="btn btn-red white full-width" data-toggle="modal" data-target=".bd-example-modal-lg">
                                Done
                                </button>
                            </div>
                          </div>
                          <div className="slidecontainer hide">
                            <p>
                              Value: <span id="demo" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
          <div className="modal fade bd-example-modal-lg"  tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel"  aria-hidden="true" style={{ top: '12%' }}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <button className="hide" ref={this.myRef} data-dismiss="modal"></button>
                <div className="row" style={{ height: '500px'}}>
                  <div className="col-lg-6 bg-light">
                    <div style={{padding: '20px', paddingTop: '30px'}}>
                    <div>
                      <img
                        src="/images/user1.png"
                        height={60}
                        width={60}
                        className="profile-pic"
                        alt="Name"
                        style={{marginLeft: 0}}
                      />
                    </div>
                    <h5 className="text-red ">80% Simulation #173753 created!</h5>
                    <br></br>
                    <h4>Summary</h4>
                    <div className="row" stylw={{fontSize: '15px'}}>
                      <div className="col-lg-7">
                        <div>Estimated Legel Pension:</div>
                        <div>Fiscal Optimization:</div>
                        <div>VAPZ:</div>
                        <div>IPT: </div>
                      </div>
                      <div className="col-lg-5">
                        <div>€ 42,400</div>
                        <div>€ 24,548.56 (95%)</div>
                        <div>€ 200,000</div>
                        <div>€ 21,291.80</div>
                      </div>
                    </div>
                    <br></br>
                    <div className="row">
                      <div className="col-lg-6">
                        <i className="fa fa-print fa-2x"></i>
                        <h5>Print Simulation</h5>
                      </div>
                      <div className="col-lg-6">
                        <i className="fa fa-envelope-o fa-2x"></i>
                        <h5>Email Simulation</h5>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="m-t-50 m-l-50">
                    <h5 className="text-red">Would you like to?</h5>
                    <br></br>
                    <div style={{fontSize: '15px', marginBottom: '10px'}}>
                      <Link to="/profile/offera" style={{color: '#000'}} onClick={()=>{this.myRef.current.click()}}>Make this simulation an Offer</Link>
                    </div>
                    <div style={{fontSize: '15px', marginBottom: '10px'}}>
                      <Link to="/profile/offers" style={{color: '#000'}} onClick={()=>{this.myRef.current.click()}}>Make this simulation a Proposal</Link>
                    </div>
                    <div style={{fontSize: '15px', marginBottom: '10px'}} >
                      <Link to="/profile/need-analysis" style={{color: '#000'}} onClick={()=>{this.myRef.current.click()}}>Perform Need Analysis</Link>
                    </div>
                    <div style={{fontSize: '15px', marginBottom: '10px'}}>
                      <Link to="/profile/details/0" style={{color: '#000'}} onClick={()=>{this.myRef.current.click()}}>Go back to Charl’s Profile</Link>
                    </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      
    )
  }
}

export default Simulation;