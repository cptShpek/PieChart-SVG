import React, {Component} from 'react';
import {connect} from 'react-redux';

class PieChart extends Component {

  getCharts = () => {
    const {chartData} = this.props;
    const charts = [];
    const percentList = chartData.map(item => item.percent);
    const circleLength = 471;
    let angle = 90;

    for (let i = 0; i < chartData.length; i++) {
      let rotate = `rotate(${angle})`;
      if (i === 0) {
        charts.push(
          <svg 
            key={chartData[i].id} 
            width="300" 
            height="300" 
            id="placeholder" 
            className="svg_pies"
            style={{backgroundColor: chartData[i].color}}>
          </svg>
        );
      } else {
        charts.push(
          <svg 
            key={chartData[i].id} 
            width="300" 
            height="300" 
            className="svg_pies" 
            transform={rotate}>
            <circle 
              fill="transparent" 
              strokeWidth="150" 
              r="75" cx="150" 
              cy="150" 
              className="circle_pies" 
              stroke={chartData[i].color}
              strokeDasharray={((percentList[i]*circleLength)/100) +' '+ circleLength}
            />
          </svg>
        );
      } 
      angle = (angle + percentList[i] / 100 * 360) % 360; 
    };

    return charts;
  }
  
  render() {
    const {chartData} = this.props;

    return (
      <div className="container">
        <h1 className="display-3">PieChart</h1>
        <div className="mt-5">
          <div className="row">
            <div className="col">
              {chartData.length !== 0 ? this.getCharts() : <p className="text-danger">You have no data yet!</p>}
            </div>
            <div className="col">
              {chartData.map(item => {
                  return (
                    <div className="d-flex align-items-center mt-3" key={item.id}>
                    <div className="p-2">
                      <div style={{
                        backgroundColor: item.color,
                        width: '25px',
                        height: '25px'
                      }}></div>
                    </div>
                    <div className="p-2">{item.name || `Item id: ${item.id}`} - {item.percent}%</div>
                  </div>
                  )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({chartData: state.chartData});

export default connect(mapStateToProps)(PieChart);