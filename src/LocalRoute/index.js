import React from 'react';
import { connect } from 'react-redux';

import { Route, Redirect } from 'react-router-dom';

class LocalRoute extends React.Component {

    render() {
        return <Route path={this.props.path} render={props => <this.props.component {...this.props} />} />;
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    };
};
  
export default connect( mapStateToProps, null)(LocalRoute);