import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Calendar from '../components/Calendar';
import CalendarState from '../../../redux/modules/Calendar';

const mapActionsToProps = dispatch =>
  bindActionCreators({
    getBookings: CalendarState.actions.getBookings,
    setSelectedDate: CalendarState.actions.setSelectedDate,
    setField: CalendarState.actions.setField,
    addBooking: CalendarState.actions.addBooking,
    clearFields: CalendarState.actions.clearFields,
  }, dispatch);

const mapStateToProps = state => ({
  calendarAPI: CalendarState.selectors.api(state),
  bookings: CalendarState.selectors.bookings(state),
  selectedDate: CalendarState.selectors.selectedDate(state),
  fields: CalendarState.selectors.fields(state),
});

export default connect(mapStateToProps, mapActionsToProps)(Calendar);
