import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Header from '../components/Header';
import AdminState from '../redux/modules/Admin';

const mapActionsToProps = dispatch =>
  bindActionCreators({
    autoLogin: AdminState.actions.autoLogin,
  }, dispatch);

const mapStateToProps = state => ({
  currentUser: AdminState.selectors.currentUser(state),
});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Header));
