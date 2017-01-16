import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

class OctopusManagerForm extends React.Component {
  render(){
    return(
      <form>
        <TextFieldGroup
          field="title"
          label="Event Title"
          name="title"
          value="title name"
        />
        <div className="form-group">
          <button className="btn btn-primary btn-lg">Octopus Releases - Client 1.0</button>
        </div>
      </form>
    );
  }
}
export default OctopusManagerForm;
