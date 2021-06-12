import React, { Component } from 'react'
import FlatBookingService from '../services/FlatBookingService'

class ListFlatBookingComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            flatBooking: []
        }
        this.addFlatBooking = this.addFlatBooking.bind(this);
        this.editFlatBooking = this.editFlatBooking.bind(this);
        this.deleteFlatBooking = this.deleteFlatBooking.bind(this);
    }

    deleteFlatBooking(bookingNo) {
        FlatBookingService.deleteFlatBookingbyId(bookingNo).then( res => {
            this.setState({flatBooking: this.state.flatBooking.filter(flatBooking => flatBooking.bookingNo !== bookingNo)});
        });
    }

    viewFlatBooking(bookingNo) {
        this.props.history.push(`/view-flatBooking/${bookingNo}`);
    }

    editFlatBooking(bookingNo) {
        this.props.history.push(`/update-flatBooking/${bookingNo}`);  
    }

    componentDidMount() {
        FlatBookingService.viewAllFlatBooking().then((res) => {
            this.setState({ flatBooking: res.data});
        });
    }

    addFlatBooking(){
        this.props.history.push('/add-flatBooking/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">FlatBooking List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addFlatBooking}> Add FlatBooking</button>
                </div>
                <br></br>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Booking No </th>
                                <th> flatId </th>
                                <th> cost No </th>
                                <th> addressId </th>
                                <th> houseNo </th>
                                <th> street </th>
                                <th> city </th>
                                <th> state </th>
                                <th> pin  </th>
                                <th> country </th>
                                <th> availability No </th>
                                <th>tenantId</th>
                                <th>tenantName </th>
                                <th>tenantAge </th>
                                <th>addressId </th>
                                <th>houseNo </th>
                                <th> Street </th>
                                <th> City </th>
                                <th> State </th>
                                <th> Pin </th>
                                <th> Country </th>
                                <th> bookingFromDate </th>
                                <th> bookingToDate </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.flatBooking.map(
                                    flatBooking=>
                                    <tr key = {flatBooking.bookingNo}>
                                        <td> { flatBooking.flat.flatId} </td>
                                        <td> { flatBooking.flat.cost} </td>
                                       {/* <td> { flatBooking.flat.flatAddress.id} </td>
                                        <td> { flatBooking.flat.flatAddress.houseNo} </td>*/}
                                        <td> { flatBooking.flat.flatAddress.street} </td>
                                        <td> { flatBooking.flat.flatAddress.city} </td>
                                        <td> { flatBooking.flat.flatAddress.state} </td>
                                        <td> { flatBooking.flat.flatAddress.pin} </td>
                                        <td> { flatBooking.flat.flatAddress.country} </td>
                                        <td> { flatBooking.flat.availability} </td>
                                        <td> { flatBooking.tenant.tenantId} </td>
                                        <td> { flatBooking.tenant.tenantName} </td>
                                        <td> { flatBooking.tenant.tenantAge} </td>
                                        {/*<td> { flatBooking.tenant.flatAddress.id} </td>
                                        <td> { flatBooking.tenant.flatAddress.houseNo} </td>*/}
                                        <td> { flatBooking.tenant.flatAddress.street} </td>
                                        <td> { flatBooking.tenant.flatAddress.city} </td>
                                        <td> { flatBooking.tenant.flatAddress.state} </td>
                                        <td> { flatBooking.tenant.flatAddress.pin} </td>
                                        <td> { flatBooking.tenant.flatAddress.country} </td>
                                        <td> { flatBooking.bookingFromDate} </td>
                                        <td> { flatBooking.bookingToDate} </td>
                                       
                                        <td>
                                            <button onClick={ () => this.editFlatBooking(flatBooking.bookingNo)} className="btn btn-info">Update </button>
                                            <button  style={{marginLeft: "10px"}} onClick={ () => this.deleteFlatBooking(flatBooking.bookingNo)} className="btn btn-danger">Delete  </button>
                                            <button  style={{marginLeft: "10px"}} onClick={ () => this.viewFlatBooking(flatBooking.bookingNo)} className="btn btn-info">View </button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListFlatBookingComponent

