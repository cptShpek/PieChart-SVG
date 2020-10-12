import {appActionsType} from '../constans'

const initState = {
  id: 0,
}

const mainReducer = (state = initState, action) => {
  
  switch(action.type) {

    case appActionsType.SET_INPUTS_DATA: {
      return {
        ...state,
        data: action.data,
        total: action.total
      }
    }

    case appActionsType.ADD_FORM: {
      return {
        ...state,
        id: ++state.id,
      }
    }

    case appActionsType.DELETE_FORM: {
      var data = state.data;
      data.splice(action.id, 1);
      for (let i = 0; i < data.length; i++) {
        data[i][0] = i
      }
      return {
        ...state,
        data,
        id: --state.id
      }
    }

    case appActionsType.GET_CHARTS_DATA : {
      var total = 0;
      for (let i = 0; i < state.data.length; i++) {
        total+= state.data[i][2]
      }
      var elements = [];
      for (let i = 0; i < state.data.length; i++) {
        elements.push({name: state.data[i][1], percent: (state.data[i][2] / total * 100).toFixed(0), color: state.data[i][3]})
      }
      var pieCharts = {
        total,
        elements
      }
      return {
        ...state,
        pieCharts
      }
    }

    default: {
      return state
    }
  }

}

export default mainReducer;