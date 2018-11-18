import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Calendar from '../components/Calendar';
import CalendarState from '../../../redux/modules/Calendar';
import SocketState from '../../../redux/modules/Socket';

const mapActionsToProps = dispatch =>
  bindActionCreators({
    getBookings: CalendarState.actions.getBookings,
    setSelectedDate: CalendarState.actions.setSelectedDate,
    connectSocket: SocketState.actions.connect,
    setBookingDateSocket: SocketState.actions.setBookingDate,
    removeBookingDateSocket: SocketState.actions.removeBookingDate,
    setField: CalendarState.actions.setField,
    addBooking: CalendarState.actions.addBooking,
    clearFields: CalendarState.actions.clearFields,
  }, dispatch);

const mapStateToProps = state => ({
  calendarAPI: CalendarState.selectors.api(state),
  bookings: CalendarState.selectors.bookings(state),
  pendingBookings: state.Calendar.pendingBookings,
  selectedDate: CalendarState.selectors.selectedDate(state),
  fields: CalendarState.selectors.fields(state),
});

export default connect(mapStateToProps, mapActionsToProps)(Calendar);
