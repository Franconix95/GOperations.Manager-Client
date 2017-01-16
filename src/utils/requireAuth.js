import React from 'react';
import { connect } from 'react-redux';
import { addFlashMessages } from '../actions/flashMessages';

export default function(ComposeComponent){
  class Authenticate extends React.Component {
    componentWillMount(){
      if(!this.props.isAuthenticated){
        this.props.addFlashMessages({
          type: 'error',
          text: 'You need to login to acess this page'
        });
        this.context.router.push('/login');
      }
    }

    componentWillUpdate(nextProps){
      if(!nextProps.isAuthenticated){
          this.context.router.push('/');
      }
    }

    render() {
      return(
        <ComposeComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired,
    addFlashMessages: React.PropTypes.func.isRequired
  }

  Authenticate.contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  function mapStateToProps(state){
      return{
            isAuthenticated: state.auth.isAuthenticated
      };
  }

  return connect(mapStateToProps, { addFlashMessages })(Authenticate);
}
