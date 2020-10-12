import React, {Component} from 'react';
import PieChart from '../components/PieChart';
import BasePage from './BasePage';

class PieChartPage extends Component {
  
  render() {
    return (
      <BasePage>
        <PieChart />
      </BasePage>
    );
  }
}

export default PieChartPage;