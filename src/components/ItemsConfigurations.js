import React, {Component} from 'react';
import {connect} from 'react-redux';

//Actions
import {setInputsData, addForm, deleteForm, getChartsData} from '../actions/actions';

class ItemsConfigurations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data || [],
      forms: [],
    }
  }

  componentDidMount() {
    if (this.props.data) {
      this.getMyForms()
    }
  }

  onInputChange = (e) => {
    var id = e.target.closest('form').id;
    var type = e.target.name;
    var value = e.target.value;
    var data = this.state.data;
    var currentInputData = data[id];

    switch (type) {
      case 'item' : 
        currentInputData[1] = value;
        data[id] = currentInputData
        this.setState({
          data
        })
        this.props.setInputsData(this.state.data)
        this.props.getChartsData()
        return
      case 'value' :
        var name = e.target.previousElementSibling.value;
        if (name === '') {
          name = `Noname element №${id}`
        }
        currentInputData[1] = name;
        currentInputData[2] = +value;
        this.setState({
          data
        })
        this.props.setInputsData(this.state.data)
        this.props.getChartsData()
        return
      default :
        return
    }
  }
  
  deleteForm = (e) => {
    e.preventDefault()
    var id = Number(e.target.closest('form').id);
    this.props.deleteForm(id)
    this.getMyForms()
  }

  setNewForm = () => {
    var name, value;
    var formData = [this.props.id, name, value]
    var newForm = 
      <form  className="form-group border border-primary rounded p-2" id={formData[0]} key={formData[0]}>
        <span>Add New Element</span>
        <input className="form-control" 
        onChange={(e) => this.onInputChange(e)} 
        name="item" value={formData[1]} 
        type="text"
        placeholder="Element Name"/>
        <input 
        className="form-control mt-2" 
        onChange={(e) => this.onInputChange(e)} 
        name="value" 
        value={formData[2]} 
        type="number" 
        placeholder="Item Value"/>
        <button className="btn btn-danger mt-2" onClick={(e) => this.deleteForm(e)}>Delete</button>
      </form>;
    formData.push(this.getRandomColor())
    var data = this.state.data;
    var forms = this.state.forms;
    data.push(formData);
    forms.push(newForm);
    this.setState({
      forms
    })
    this.props.setInputsData(data)
    this.props.addForm()
  }

  getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getMyForms = () => {
    var data = this.props.data;
    var forms = [];

    for (let i = 0; i < data.length; i++) {
      let formData = data[i]
      forms.push(
        <form className="form-group border border-primary rounded p-2" id={formData[0]} key={formData[0]}>
          <span>Add New Element</span>
          <input className="form-control"
          onChange={(e) => this.onInputChange(e)} 
          name="item" 
          defaultValue={formData[1]} 
          type="text"
          placeholder="Element Name"/>
          <input className="form-control mt-2"
          onChange={(e) => this.onInputChange(e)} 
          name="value" 
          defaultValue={formData[2]} 
          type="number" 
          placeholder="Item Value"/>
          <button className="btn btn-danger mt-2" onClick={(e) => this.deleteForm(e)}>Delete</button>
        </form>
      )
    }

    this.setState({
      forms
    })
  }
  
  render() {
    const {forms} = this.state;

    return (
      <div className="container">
        <h1 className="display-3">Set Your Items</h1>
        <div className=" mt-5">
          {forms[0] ? forms.map(item => item) : <p className="text-danger">You have no data yet!</p>}
        </div>
        <button className="btn btn-primary" onClick={() => this.setNewForm()}>Add Elements</button>
        <p className="mt-3 text-secondary">When you finish entering data - click on the <b>"Pie Chart"</b> button in the upper right corner of the screen</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.id,
    data: state.data,
    pieCharts: state.pieCharts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setInputsData: (data) => dispatch(setInputsData(data)),
    addForm: () => dispatch(addForm()),
    deleteForm: (id) => dispatch(deleteForm(id)),
    getChartsData: () => dispatch(getChartsData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsConfigurations);