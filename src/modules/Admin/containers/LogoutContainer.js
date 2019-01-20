import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Logout from '../components/Logout';
import AdminState from '../../../redux/modules/Admin';

const mapActionsToProps = dispatch =>
  bindActionCreators({
    logout: AdminState.actions.logout,
  }, dispatch);

const mapStateToProps = state => ({

});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Logout));
