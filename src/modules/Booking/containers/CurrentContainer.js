import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CurrentBooking from '../components/Current';
import BookingState from '../../../redux/modules/Booking';

const mapActionsToProps = dispatch =>
  bindActionCreators({
    get: BookingState.actions.get,
    remove: BookingState.actions.remove
  }, dispatch);

const mapStateToProps = state => ({
  booking: BookingState.selectors.current(state),
  bookingAPI: BookingState.selectors.api(state)
});

export default connect(mapStateToProps, mapActionsToProps)(CurrentBooking);
