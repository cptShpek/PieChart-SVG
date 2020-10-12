import React, {Component} from 'react';
import {connect} from 'react-redux';

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state={
      charts: [],
      elementsTable: [],
    }
  }

  componentDidMount() {
    this.getCharts()
  }

  getDataTable = () => {
    var elements = this.props.elements;
    var elementsTable = [];
    for (let i = 0; i < elements.length; i++) {
      let elem = <div className="d-flex align-items-center mt-3" key={i}>
        <div className="p-2">
          <div style={{
            backgroundColor:elements[i].color,
            width: '25px',
            height: '25px'
          }}></div>
        </div>
        <div className="p-2">{elements[i].name} - {elements[i].percent}%</div>
      </div>
      elementsTable.push(elem)
    }

    this.setState({
      elementsTable
    })
  }

  getCharts = () => {
    const {elements} = this.props
 
    if (!elements) {
      return
    }

    var charts = []

    var percentList = []
    for (let i = 0; i < elements.length; i++) {
      percentList.push(elements[i].percent)
    }

    var total = 471;

    var angle = 90;

    for (let i = 0; i < elements.length; i++) {
      var rotate = `rotate(${angle})`;
      if (i === 0) {
        charts.push(
          <svg key={i} width="300" height="300" id="placeholder" className="svg_pies"
          style={{backgroundColor: elements[i].color}}>
          </svg>
        )
      } else {
        charts.push(
          <svg key={i} width="300" height="300" className="svg_pies" transform={rotate}>
            <circle fill="transparent" strokeWidth="150" r="75" cx="150" cy="150" className="circle_pies" stroke={this.props.elements[i].color}
              strokeDasharray={((percentList[i]*total)/100) +' '+ total}
            />
          </svg>
        )
      } 
      angle = (angle + percentList[i] / 100 * 360) % 360; 
    }

    this.setState({
      charts,
    })

    this.getDataTable()
  }
  
  render() {
    const {charts, elementsTable} = this.state;

    return (
      <div className="container">
        <h1 className="display-3">PieChart</h1>
        <div className="mt-5">
          <div className="row">
            <div className="col">
              {charts[0] ? charts.map(item => item) : <p className="text-danger">You have no data yet!</p>}
            </div>
            <div className="col">
              {elementsTable.map(item => item)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.pieCharts) {
    return {
      elements: state.pieCharts.elements
    }
  } else return {}
}

export default connect(mapStateToProps)(PieChart);