import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

function validateInput(data) {
  let errors  = {};

  if(Validator.isEmpty(data.identifier))
  {
    errors.identifier = 'This fild is required';
  }
  if(Validator.isEmpty(data.password))
  {
    errors.password = 'This fild is required';
  }

  return {
    errors,
    isValid:  isEmpty(errors)
  }
}

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid(){
      const { errors, isValid } = validateInput(this.state);
      if(!isValid){
        this.setState({ errors });
      }
      return isValid;
  }

  onSubmit(e){
    e.preventDefault();
    if(this.isValid()){
        this.setState({ errors: {}, isLoading: true });
        this.props.login(this.state).then(
          (res) => this.context.router.push('/'),
          //(err) => this.setState({ errors: err.data.errors, isLoading: false })
          (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
        );
    }
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  render(){
    const { errors, identifier, password, isLoading } = this.state;
    return(
      <form onSubmit={this.onSubmit}>
        <h1>Login</h1>

        {errors.form && <div className="alert alert-danger">{errors.form}</div>}

        <TextFieldGroup
            field="identifier"
            value={identifier}
            error={errors.identifier}
            label="Username / Email"
            onChange={this.onChange}
        />
        <TextFieldGroup
            error={errors.password}
            label="Password"
            onChange={this.onChange}
            value={password}
            field="password"
            type="password"
        />
        <div className="form-group">
          <button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}


export default connect(null, { login })(LoginForm);
