import React, { Component } from 'react'
import FlatBookingService from '../services/FlatBookingService';

class CreateFlatBookingComponent extends Component {
    constructor(props) {
        super(props)

       this.state = {
                bookingNo: this.props.match.params.bookingNo,
                flat: {
                    flatId: '',
                    cost: '',
                    flatAddress: {
                        addressId: '',
                        houseNo: '',
                        street: '',
                        city: '',
                        state: '',
                        pin: '',
                        "country": ''
                    },
                    "availability": "yes"
                },
                tenant: {
                    tenantId: '',
                    tenantName: '',
                    tenantAge: '',
                    flatAddress: {
                        addressId: '',
                        houseNo: '',
                        street: '',
                        city: '',
                        state: '',
                        pin: '',
                        country: ''
                    }
                },
                bookingFromDate: '',
                bookingToDate: ''
        
        }
        
        this.changeFlatHandler = this.changeFlatHandler.bind(this);
        this.changeCostHandler = this.changeCostHandler.bind(this);
        this.changeFlatAddressHandler = this.changeFlatAddressHandler.bind(this);
        this.changeAvailabilityHandler = this.changeAvailabilityHandler.bind(this);
        this.changeTenantHandler = this.changeTenantHandler.bind(this);
        this.changeTenantName = this.changeTenantName.bind(this);
        this.changeTenantAge = this.changeTenantAge.bind(this);
        this.changeFlatAddressHandler = this.changeFlatAddressHandler.bind(this);
        this.changeBookingFromDateHandler = this.changeBookingFromDateHandler.bind(this);
        this.changeBookingToDateHandler = this.changeBookingToDateHandler.bind(this);
        this.saveOrUpdateFlatBooking = this.saveOrUpdateFlatBooking.bind(this);
    }

    componentDidMount() {

        if(this.state.bookingNo === '_add') {
            return
        } else {
            FlatBookingService.viewFlatBooking(this.state.bookingNo).then( (res) =>{
                let flatBooking = res.data;
                this.setState({ flat : flatBooking.flat,
                    cost : flatBooking.flat.cost,
                    flatAddress : flatBooking.flat.flatAddress,
                    availability : flatBooking.flat.availability,
                    tenant : flatBooking.tenant,
                    tenantName : flatBooking.tenant.tenantName,
                    tenantAge : flatBooking.tenant.tenantAge,
                    flatAddress1 : flatBooking.tenant.flatAddress1,
                    bookingFromDate : flatBooking.bookingFromDate,
                    bookingToDate : flatBooking.bookingToDate


                });
            });
        }
    }
    saveOrUpdateFlatBooking = (e) => {
        e.preventDefault();
        let flatBooking = { flat:{cost: this.state.cost,flatAddress: { houseNo: this.state.flatAddress.houseNo ,
            street: this.state.flatAddress.street , city: this.state.flatAddress.city , state: this.state.flatAddress.state ,
            pin: this.state.flatAddress.pin , country: this.state.flatAddress.country}, availability: this.state.availability}, tenant:{tenantName: this.state.tenantName, tenantAge: this.state.tenantAge, flatAddress: { houseNo: this.state.flatAddress.houseNo ,
             street: this.state.flatAddress.street , city: this.state.flatAddress.city , state: this.state.flatAddress.state ,
             pin: this.state.flatAddress.pin , country: this.state.flatAddress.country} },bookingFromDate: this.state.bookingFromDate,bookingToDate: this.state.bookingToDate};
        console.log('flatBooking => ' + JSON.stringify(flatBooking));

        if(this.state.bookingNo === '_add'){
            FlatBookingService.addFlatBooking(flatBooking).then(res =>{
                this.props.history.push('/addFlatBooking');
            });
        } else {
            FlatBookingService.updateFlatBooking(flatBooking).then(res =>{
                this.props.history.push('/updateFlatBooking');
            }); 
        }
    }
    changeFlatHandler = (event) => {
        this.setState({flat: event.target.value})
    }
    changeCostHandler = (event) => {
        this.setState({cost: event.target.value});
    }
    
    changeFlatAddressHandler = (event) => {
        this.setState( { flatAddress : event.target.value}  );
    }
    changeAvailabilityHandler = (event) => {
        this.setState({availability: event.target.value});
    }
    
    changeTenantHandler = (event) => {
        this.setState({tenant: event.target.value})

    }
    changeTenantNameHandler = (event) => {
        this.setState({tenantName: event.target.value})
    }
    changeTenantAgeHandler = (event) => {
        this.setState({tenantAge: event.target.value})
    }
    changeBookingFromDateHandler = (event) => {
        this.setState({bookingFromDate: event.target.value})
    }
    changeFlatAddressHandler = (event) => {
        this.setState( { flatAddress : event.target.value}  );
    }
    changeBookingToDateHandler = (event) => {
        this.setState({bookingToDate: event.target.value})
    }
    changeAvailabilityHandler = (event) => {
        this.setState({availability: event.target.value});
    }
    handleFlatChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState.flat[inputPropName] = event.target.value;
        this.setState(newState);
        //this.updateValidators(inputPropName, event.target.value);
    }


    handleFlatAddressChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState.flatAddress[inputPropName] = event.target.value;
        this.setState(newState);
       
    }
    handleTenantChange(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState.tenant[inputPropName] = event.target.value;
        this.setState(newState);
        //this.updateValidators(inputPropName, event.target.value);
    }
    handleFlatAddressChange1(event, inputPropName) {
        const newState = Object.assign({}, this.state);
        newState.flatAddress1[inputPropName] = event.target.value;
        this.setState(newState);
       
    }


    cancel(){
        this.props.history.push('/flatBooking');
    }

    getTitle(){
        if(this.state.bookingNo === '_add'){
            return <h3 className="text-center">Add Flat</h3>
        } else {
            return <h3 className="text-center">Update Flat</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                       <div className = "row">
                           <div className = "card col-md-6 offset-md-3 offset-md-3">
                               {
                                    this.getTitle()
                               }
                               <div className = "card-body">
                                   <form>
                                   <div className = "form-group">
                                           <label> Cost: </label>
                                           <input placeholder="cost" className="form-control"
                                                value={this.state.flatBooking.flat.cost} onChange={this.changeCostHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Flat House No: </label>
                                           <input placeholder="houseNo" className="form-control"
                                                value={this.state.flatBooking.flat.flatAddress.houseNo} onChange={event => this.handleFlatAddressChange(event, 'houseNo')}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Flat Street: </label>
                                           <input placeholder="street" className="form-control"
                                                value={this.state.flatBooking.flat.flatAddress.street} onChange={this.changeFlatAddressHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Flat City: </label>
                                           <input placeholder="city" className="form-control"
                                                value={this.state.flatBooking.flat.flatAddress.city} onChange={this.changeFlatAddressHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Flat State: </label>
                                           <input placeholder="state" className="form-control"
                                                value={this.state.flatBooking.flat.flatAddress.state} onChange={this.changeFlatAddressHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Flat Address Pin: </label>
                                           <input placeholder="pin" className="form-control"
                                                value={this.state.flatBooking.flat.flatAddress.pin} onChange={this.changeFlatAddressHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Flat Country: </label>
                                           <input placeholder="country" className="form-control"
                                                value={this.state.flatBooking.flat.flatAddress.country} onChange={this.changeFlatAddressHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Availability: </label>
                                           <input placeholder="availability" className="form-control"
                                                value={this.state.flat.availability} onChange={this.changeAvailabilityHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label>
                                               BookingFromDate :
                                           </label>
                                           <input placeholder="bookingFromDate" className="form-control" 
                                           value={this.state.flatBooking.bookingFromDate} onChange={this.changeBookingFromDateHandler}/>

                                       </div>
                                       <div className = "form-group">
                                           <label>
                                               BookingToDate :
                                           </label>
                                           <input placeholder="bookingToDate" className="form-control" 
                                           value={this.state.flatBooking.bookingToDate} onChange={this.changeBookingToDateHandler}/>

                                       </div>
                                       <button className="btn btn-success" onClick={this.saveOrUpdateFlatBooking}>Save</button>
                                       <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={ { marginLeft: "10px"}}>Cancel</button>
                                   </form>
                               </div>
                            </div>
                       </div>
                   </div>
            </div>
        )
    }
}

export default CreateFlatBookingComponent