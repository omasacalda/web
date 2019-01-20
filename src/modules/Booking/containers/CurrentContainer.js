import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CurrentBooking from '../components/Current';
import BookingState from '../../../redux/modules/Booking';
import AdminState from '../../../redux/modules/Admin';

const mapActionsToProps = dispatch =>
  bindActionCreators({
    get: BookingState.actions.get,
    getByID: BookingState.actions.getByID,
    cancelBooking: BookingState.actions.cancel,
    cancelBookingAdmin: BookingState.actions.cancelAsAdmin
  }, dispatch);

const mapStateToProps = state => ({
  booking: BookingState.selectors.current(state),
  bookingAPI: BookingState.selectors.api(state),

  currentUser: AdminState.selectors.currentUser(state),
});

export default connect(mapStateToProps, mapActionsToProps)(CurrentBooking);
