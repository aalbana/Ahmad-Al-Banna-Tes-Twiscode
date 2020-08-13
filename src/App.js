import React, { Component } from 'react';
import './css/bootstrap.css';
import './App.css';
import logo from './logo.png';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      items: [],
      isLoading : true
    }
  }
  
  componentDidMount(){
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(data => this.setState({items : data}))
  }
  render(){

    const {items} = this.state

    return (
      <div>
        <div class="container-fluid">
          <img src={logo} class="img-fluid mx-auto d-block" width="300px" alt="logo"/>
          <div class="under-logo">
          <nav class="navbar navbar-light mx-auto">
             <b class="mx-auto">You dont have an account yet, please create a new account</b>
          </nav>
          </div>
        </div>
        <div class="container">
          <form>          
            <h3>Create New Account</h3>
              <div class="row">
              <div class="form-group col-md-12">
                <label>Title</label>
                <br/>
                <div class="row">
                  <div class="col-md-1">
                    <input class="mr-1" type="radio" name="rdTitle" id="rdMrs" value="Mrs"/><label>Mrs</label>
                  </div>
                  <div class="col-md-1">
                    <input class="mr-1" type="radio" name="rdTitle" id="rdMs" value="Ms"/><label>Ms</label>
                  </div>
                  <div class="col-md-1">
                    <input class="mr-1" type="radio" name="rdTitle" id="rdMdm" value="Mdm"/><label>Mdm</label>
                  </div>
                  <div class="col-md-1">
                    <input class="mr-1" type="radio" name="rdTitle" id="rdMr" value="Mr"/><label>Mr</label>
                  </div>
                  <div class="col-md-1">
                    <input class="mr-1" type="radio" name="rdTitle" id="rdDr" value="Dr"/><label>Dr</label>
                  </div>
                </div>               
              </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="fname">First Name *</label>
                  <input type="text" class="form-control" id="fname"/>
                </div>
                <div class="form-group col-md-6">
                  <label for="lname">Last Name *</label>
                  <input type="text" class="form-control" id="fname"/>
                </div>  
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label for="inputState">Mobile Phone Number</label>
                  <div class="row">
                    <div class="form-group col-md-3">
                      <select id="inputState" class="form-control">
                        { items.map( (item) =>
                          <option key={item.id} value="item.cioc">{item.cioc} </option>
                        )}
                      </select>              
                    </div>
                    <div class="form-group col-md-9">
                      <div class="input-group">       
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1"><b>+62</b></span>
                        </div>
                          <input type="text" class="form-control" placeholder="Number" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div> 
                  </div>
                </div>                        
              </div>
            <h3>Address</h3>
            <div class="row">
              <div class="form-group col-md-12">
                <label for="fname">Address</label>
                <input type="text" class="form-control" id="address"/>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="fname">Country/Location *</label>
                <select id="country" class="form-control">
                  { items.map( (item) =>
                    <option key={item.id} value="item.name">{item.name} </option>
                  )}
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="lname">Province/District</label>
                <input type="text" class="form-control" id="province"/>
              </div>  
            </div>
            <h3>Contacts</h3>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="fname">Email Address *</label>
                <input type="text" class="form-control" id="email"/>
              </div>
              <div class="form-group col-md-2">
                <label for="lname">Date of Birth</label>
                <input type="text" class="form-control" id="date"/>
              </div>
              <div class="form-group col-md-2">
                <label for="lname">Month</label>
                <input type="text" class="form-control" id="month"/>
              </div>
              <div class="form-group col-md-2">
                <label for="lname">Year</label>
                <input type="text" class="form-control" id="year"/>
              </div>  
            </div>
            <h3>Standard Privacy Note</h3>
            <p><i>I warrant that the above information is true and correct. I understand that failure to answer all questions listed in this application
              form may prevent L'OCCITANE from processing my application; and L'OCCITANE may refuse to accept this application in the right of may
              individual circumstances.</i></p>
            <p><i>I understand that the information collected willbe used and retained by L'OCCITANE for the purpose of (i) my application of membership
              account at L'OCCITANE.</i></p>
            <p><i>I understand that it is necesarry for me to provide L'OCCITANE with data in connection with the previlege. Failure to provide such data
              may result in L'OCCITANE stores or official website.</i></p>
            <p><i>L'OCCITANE reserve the right to change any of the terms and conditions without prior notice. Change will be posted on signage placed at
              L'OCCITANE stores or official website.</i></p>
            <p><i>I understand that L'OCCITANE my use my personal information for the purpose of providing or promoting services/products made available by
              L'OCCITANE. To choose whether to reicive any promotional information sent by L'OCCITANE, please tick th box below.</i></p>
            <p><i>I want to receive information or communication from L'OCCITANE.</i></p>
            <div class = "row">
              <div class="form-group col-md-4">
                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="smsMC"/>
                  <label class="custom-control-label" for="smsMC">SMS & Mobile call</label>
                </div>
              </div>
              <div class="form-group col-md-4">
                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="emailing"/>
                  <label class="custom-control-label" for="emailing">Emailing</label>
                </div>
              </div>
              <div class="form-group col-md-4">
                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="mailing"/>
                  <label class="custom-control-label" for="mailing">Mailing</label>
                </div>
              </div>
            </div>
            <input class="mr-1" type="checkbox" name="cbAgree" id="cbAgree"/><label><p><i>I want to receive information or communication from L'OCCITANE.</i></p></label>
              <div class="form-goup">
                <button type="submit" class="btn btn-orange">Create Customer</button>                
              </div>                
          </form>
        </div>
      </div>      
    );
  }  
}

export default App;
