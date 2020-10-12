import React, {Component} from 'react';
import {connect} from 'react-redux';

import {setInputsData, deleteForm, getChartsData} from '../actions/actions';

class ItemsConfigurations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data || [],
      forms: [],
    }
  }

  onInputChange = (e) => {
    const id = e.target.closest('form').id;
    const {name, value} = e.target;
    const {data, setInputsData, getChartsData} = this.props;
    const currentInputData = {...data.find((item) => id === item.id)};
    currentInputData[name] = value;

    setInputsData(currentInputData);
    getChartsData();
  };
  
  deleteForm = (e) => {
    e.preventDefault();
    var id = e.target.closest('form').id;
    this.props.deleteForm(id);
  };

  setNewForm = () => {
    this.props.setInputsData({
      id: `f${(~~(Math.random()*1e8)).toString(16)};`, 
      name: '', 
      value: '', 
      color: this.getRandomColor()
    });
  };

  getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  render() {
    const {data} = this.props;

    return (
      <div className="container">
        <h1 className="display-3">Set Your Items</h1>
        <div className=" mt-5">
        {data.length ? data.map(({id, name, value}) => {
          return (
            <form  className="form-group border border-primary rounded p-2" id={id} key={id}>
              <span>Add New Element</span>
              <input className="form-control" 
                onChange={this.onInputChange} 
                name="name" 
                value={name} 
                type="text"
                placeholder="Element Name"/>
              <input 
                className="form-control mt-2" 
                onChange={this.onInputChange} 
                name="value" 
                value={value} 
                type="number" 
                placeholder="Item Value"/>
              <button className="btn btn-danger mt-2" onClick={this.deleteForm}>Delete</button>
            </form>
          )
        }) : <p className="text-danger">You have no data yet!</p>}
        </div>
        <button className="btn btn-primary" onClick={this.setNewForm}>Add Elements</button>
        <p className="mt-3 text-secondary">When you finish entering data - click on the <b>"Pie Chart"</b> button in the upper right corner of the screen</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data
})

const mapDispatchToProps = (dispatch) => ({
  setInputsData: (data) => dispatch(setInputsData(data)),
  deleteForm: (id) => dispatch(deleteForm(id)),
  getChartsData: () => dispatch(getChartsData())
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemsConfigurations);