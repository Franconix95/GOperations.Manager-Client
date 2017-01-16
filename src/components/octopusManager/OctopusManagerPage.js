import React from 'react';
import OctopusManagerForm from './OctopusManagerForm';
import TextFieldGroup from '../common/TextFieldGroup';

class OctopusManagerPage extends React.Component {
  render(){
    return(
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <TextFieldGroup
              field="searchs"
              label="Searchs"
              name="searchs"
              value="Search For You"
            />
          </div>
          <div className="col-md-4 col-md-offset-4">
            <OctopusManagerForm />
          </div>
        </div>
    );
  }
}

export default OctopusManagerPage;
