import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, NavLink, Input, Form, FormGroup, Label, Col } from 'reactstrap';
import _ from 'underscore';


class Filter extends React.Component {
  constructor (props){
    super(props);
    this.updateInput = this.updateInput.bind(this);

  this.state = {
    currFilter: {
    mile: 60,
    cause:[],
    start_date:'',
    end_date:''
    }
  }
}
//after use entering the submit button of filter, it will change the opportunity view at OrsList.jsx

  searchOpps(opps) {
    // if mile > currFilter.mile
    //        result is the Get request from database baseon the new search.
    // else filter the props.opportunities based on new mile
    return (opps.filter((opp) => {
      opp.start_Date > currFilter.start_Date && opp.end_Date < currFilter.end_Date && opp.cause.indexOf(cause) != -1
      }))
    }



  updateInput(e) {
    console.log(e.target.value);
    const currFilter = this.state.currFilter; // Copy current state to object 'form'
    currFilter[e.target.name] = e.target.value; // Set  key:value to form
    this.setState({ currFilter: currFilter });
  }

  render () {

      var causes = [];
      this.props.opp.forEach(op => {
        causes.push(op.cause);
      });

      let causeOptions = _.uniq(causes).map((cause,index) => {
              return (
                  <Input type="radio" name='cause' value='cause' />
              )})

          return (
            <div>
             <label>Miles </label>
                 <Input
                        name="mile"
                        type="number"
                        value={this.state.mile}
                        onChange={this.updateInput} />
              <label> Choose Your Cause </label>
                    {causeOptions}
              <label> Choose Your Time </label>
                 <Input
                        name="start_date"
                        type="date"
                        value={this.state.start_date}
                        onChange={this.updateInput} />
                  <Input
                        name="end_date"
                        type="date"
                        value={this.state.end_date}
                        onChange={this.updateInput} />
                  <Button onClick={() => this.searchOpps(this.state.form)}>Submit</Button>
            </div>
          );
       }
};


export default Filter;