import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Calendar from '../components/Calendar';
import CalendarState from '../../../redux/modules/Calendar';

const mapActionsToProps = dispatch =>
  bindActionCreators({
    // getCities: HomepageState.actions.getCities,
  }, dispatch);

const mapStateToProps = state => ({
  calendarAPI: CalendarState.selectors.api(state)
});

export default connect(mapStateToProps, mapActionsToProps)(Calendar);
