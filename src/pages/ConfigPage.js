import React, {Component} from 'react';
import ItemsConfigurations from '../components/ItemsConfigurations';
import BasePage from './BasePage';

class ConfigPage extends Component {
  
  render() {
    return (
      <BasePage>
        <ItemsConfigurations />
      </BasePage>
    );
  }
}

export default ConfigPage;