import React, { Component } from 'react'
import FlatBookingService from '../services/FlatBookingService'

class ViewFlatBookingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookingNo: this.props.match.params.bookingNo,
            flatBooking: { flat: { flatAddress:{}}, tenant:{flatAddress:{}} }
            
        }
    }

    componentDidMount() {
        FlatBookingService.viewFlatBooking(this.state.bookingNo).then( res=> {
            this.setState({flatBooking: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Flat Details</h3>
                    <div className = "card-body">
                    <div className="row">
                            <label> Flat Id: </label>
                            <div> { this.state.flatBooking.bookingNo }</div>
                        </div>
                        <div className="row">
                            <label> Flat Cost: </label>
                            <div> { this.state.flatBooking.flat.cost }</div>
                        </div>
                        
                        <div className="row">
                            <label> Flat Address Id: </label>
                            <div> { this.state.flatBooking.flat.flatAddress.addressId }</div>
                        </div> 
                        <div className="row">
                            <label> Flat House No: </label>
                            <div> { this.state.flatBooking.flat.flatAddress.houseNo }</div>
                        </div>
                         <div className="row">
                            <label> Flat Street: </label>
                            <div> { this.state.flatBooking.flat.flatAddress.street }</div>
                        </div>
                        <div className="row">
                            <label> Flat City: </label>
                            <div> { this.state.flatBooking.flat.flatAddress.city }</div>
                        </div>
                        <div className="row">
                            <label> Flat State: </label>
                            <div> { this.state.flatBooking.flat.flatAddress.state }</div>
                        </div>
                        <div className="row">
                            <label> Flat Address Pin: </label>
                            <div> { this.state.flatBooking.flat.flatAddress.pin }</div>
                        </div>
                        <div className="row">
                            <label> Flat Country: </label>
                            <div> { this.state.flatBooking.flat.flatAddress.country }</div>
                        </div>
                        <div className="row">
                            <label> Flat Availability: </label>
                            <div> { this.state.flatBooking.flat.availability }</div>
                        </div>
                        <div className="row">
                            <label> Tenant Name: </label>
                            <div> { this.state.flatBooking.tenant.tenantName }</div>
                        </div>
                        <div className="row">
                            <label> Tenant Age: </label>
                            <div> { this.state.flatBooking.tenant.tenantage }</div>
                        </div>
                        <div className="row">
                            <label> Flat Address Id: </label>
                            <div> { this.state.flatBooking.tenant.flatAddress.addressId }</div>
                        </div> 
                        <div className="row">
                            <label> Flat House No: </label>
                            <div> { this.state.flatBooking.tenant.flatAddress.houseNo }</div>
                        </div>
                         <div className="row">
                            <label> Flat Street: </label>
                            <div> { this.state.flatBooking.tenant.flatAddress.street }</div>
                        </div>
                        <div className="row">
                            <label> Flat City: </label>
                            <div> { this.state.flatBooking.tenant.flatAddress.city }</div>
                        </div>
                        <div className="row">
                            <label> Flat State: </label>
                            <div> { this.state.flatBooking.tenant.flatAddress.state }</div>
                        </div>
                        <div className="row">
                            <label> Flat Address Pin: </label>
                            <div> { this.state.flatBooking.tenant.flatAddress.pin }</div>
                        </div>
                        <div className="row">
                            <label> Flat Country: </label>
                            <div> { this.state.flatBooking.tenant.flatAddress.country }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewFlatBookingComponent