import React, { Component } from 'react'
import FlatBookingService from '../services/FlatBookingService';

class UpdateFlatBookingComponent extends Component {
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
    this.changeFlatAddressHandler = this.changeFlatAddressHandler.bind(this);
    this.changeAvailabilityHandler = this.changeAvailabilityHandler.bind(this);
    this.changeTenantHandler = this.changeTenantHandler.bind(this);
    this.changeFlatAddressHandler = this.changeFlatAddressHandler.bind(this);
    this.changeBookingFromDateHandler = this.changeBookingFromDateHandler.bind(this);
    this.changeBookingToDateHandler = this.changeBookingToDateHandler.bind(this);
    this.saveOrUpdateFlatBooking = this.saveOrUpdateFlatBooking.bind(this);
}

componentDidMount() {

    if(this.state.bookingNo === '_add') {
        return
    } else {
        FlatService.viewFlatBooking(this.state.bookingNo).then( (res) =>{
            let flatBooking = res.data;
            this.setState({ flat : flatBooking.flat,
                flatAddress : flatBooking.flat.flatAddress,
                availability : flatBooking.availability,
                tenant : flatBooking.tenant,
                //flatAddress : flatBooking.flat.flatAddress,
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
        pin: this.state.flatAddress.pin , country: this.state.flatAddress.country}}, availability: this.state.availability, tenant:{tenantName: this.state.tenantName, tenantAge: this.state.tenantAge, flatAddress: { houseNo: this.state.flatAddress.houseNo ,
         street: this.state.flatAddress.street , city: this.state.flatAddress.city , state: this.state.flatAddress.state ,
         pin: this.state.flatAddress.pin , country: this.state.flatAddress.country} },bookingFromDate: this.state.bookingFromDate,bookingToDate: this.state.bookingToDate};
    console.log('flatBooking => ' + JSON.stringify(flatBooking));

    if(this.state.bookingNo === '_add'){
        FlatBookingService.addFlatBooking(flatBooking).then(res =>{
            this.props.history.push('/addFlat1');
        });
    } else {
        FlatBookingService.updateFlatBooking(flatBooking).then(res =>{
            this.props.history.push('/updateFlat');
        }); 
    }
}

    changeCostHandler = (event) => {
        this.setState({cost: event.target.value});
    }

    changeAvailabilityHandler = (event) => {
        this.setState({availability: event.target.value});
    }

    changeFlatAddressHandler = (event ) => {
        this.setState( { flatAddress : event.target.value} );
    }

    cancel(){
        this.props.history.push('/flat');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                       <div className = "row">
                           <div className = "card col-md-6 offset-md-3 offset-md-3">
                              <h3 className="text-center">Update Employee</h3>
                               <div className = "card-body">
                                   <form>
                                       <div className = "form-group">
                                           <label> Cost: </label>
                                           <input placeholder="cost" name="cost" className="form-control"
                                                value={this.state.flat.cost} onChange={this.changeCostHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Availability: </label>
                                           <input placeholder="availability" name="availability" className="form-control"
                                                value={this.state.flat.availability} onChange={this.changeAvailabilityHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Flat House No: </label>
                                           <input placeholder="houseNo" name="houseNo" className="form-control"
                                                value={this.state.flat.flatAddress.houseNo} onChange={this.changeFlatAddressHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Flat Street: </label>
                                           <input placeholder="street" name="street" className="form-control"
                                                value={this.state.flat.flatAddress.street} onChange={this.changeFlatAddressHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Flat City: </label>
                                           <input placeholder="city" name="city" className="form-control"
                                                value={this.state.flat.flatAddress.city} onChange={this.changeFlatAddressHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Flat State: </label>
                                           <input placeholder="state" name="state" className="form-control"
                                                value={this.state.flat.flatAddress.state} onChange={this.changeFlatAddressHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Flat Address Pin: </label>
                                           <input placeholder="pin" name="pin" className="form-control"
                                                value={this.state.flat.flatAddress.pin} onChange={this.changeFlatAddressHandler}/>
                                       </div>
                                       <div className = "form-group">
                                           <label> Flat Country: </label>
                                           <input placeholder="country" name="country" className="form-control"
                                                value={this.state.flat.flatAddress.country} onChange={this.changeFlatAddressHandler}/>
                                       </div>
                                       <button className="btn btn-success" onClick={this.updateFlatBooking}>Save</button>
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
export default UpdateFlatBookingComponent