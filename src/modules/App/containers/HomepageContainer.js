import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Homepage from '../components/Homepage';
import HomepageState from '../../../redux/modules/App/Homepage';

const mapActionsToProps = dispatch =>
  bindActionCreators({
    getEvents: HomepageState.actions.getData
  }, dispatch);

const mapStateToProps = state => ({
  homepageAPI: HomepageState.selectors.api(state)
});

export default connect(mapStateToProps, mapActionsToProps)(Homepage);
