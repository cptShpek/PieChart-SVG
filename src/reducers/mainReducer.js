import {appActionsType} from '../constans'

const initState = {
  data: [],
  chartData: [],
};

const mainReducer = (state = initState, action) => {
  
  switch(action.type) {

    case appActionsType.SET_INPUTS_DATA: {
      const data = [...state.data];
      const currentIndex = data.findIndex(item => item.id === action.data.id);
      if (currentIndex === -1) {
        data.push(action.data);
      } else {
        data[currentIndex] = action.data;
      }
      return {
        ...state,
        data
      };
    }

    case appActionsType.DELETE_FORM: {
      const data = [...state.data];
      const currentIndex = data.findIndex(item => item.id === action.id);
      data.splice(currentIndex, 1);

      return {
        ...state,
        data
      };
    }

    case appActionsType.GET_CHARTS_DATA : {
      const {data} = state;
      const total = data.reduce((accum, item) => accum + Number(item.value), 0);
      const chartData = data.map(item => ({
        name: item.name, 
        percent: (item.value / total * 100).toFixed(0), 
        color: item.color,
        id: item.id
      }));

      return {
        ...state,
        chartData
      };
    }

    default: {
      return state;
    }
  };
}

export default mainReducer;