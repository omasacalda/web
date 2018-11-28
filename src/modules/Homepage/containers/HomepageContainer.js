import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Homepage from '../components/Homepage/index';
import HomepageState from '../../../redux/modules/Homepage';

const mapActionsToProps = dispatch =>
  bindActionCreators({
    getCities: HomepageState.actions.getCities,
    setCity: HomepageState.actions.setCity
  }, dispatch);

const mapStateToProps = state => ({
  homepageAPI: HomepageState.selectors.api(state),
  cities: HomepageState.selectors.cities(state),
  selectedCity: HomepageState.selectors.selectedCity(state)
});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Homepage));
