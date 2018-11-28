import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Admin from '../components/Admin';
import AdminState from '../../../redux/modules/Admin';

const mapActionsToProps = dispatch =>
  bindActionCreators({
    login: AdminState.actions.login,
    setField: AdminState.actions.setField,
    autoLogin: AdminState.actions.autoLogin,
  }, dispatch);

const mapStateToProps = state => ({
  adminAPI: AdminState.selectors.api(state),
  currentUser: AdminState.selectors.currentUser(state),
  fields: AdminState.selectors.fields(state)
});

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Admin));
