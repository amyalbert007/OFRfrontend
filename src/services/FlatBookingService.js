import axios from 'axios';

const FLAT_API_BASED_URL = "http://localhost:8099/api/ofr";

class FlatBookingService {

    viewAllFlatBooking() {
        return axios.get(FLAT_API_BASED_URL + '/flatBooking');
    }

    viewFlatBooking(bookingNo) {
        return axios.get(FLAT_API_BASED_URL + '/' + bookingNo );
    }

    addFlatBooking(flatBooking) {
        return axios.post(FLAT_API_BASED_URL + '/' , flatBooking);
    }

    updateFlatBooking(flatBooking) {
        return axios.put(FLAT_API_BASED_URL +  '/' + flatBooking );
    }

    deleteFlatBookingbyId(bookingNo) {
        return axios.delete(FLAT_API_BASED_URL + '/' + bookingNo);
    }

    
}

export default new FlatBookingService()