import {appActionsType} from '../constans'

export const setInputsData = (data) => {
  var total = 0;

  data.map(item => {
    total += item[2]
    return total
  })
  return {
    type: appActionsType.SET_INPUTS_DATA,
    data,
    total,
  }
}

export const addForm = () => {
  return {
    type: appActionsType.ADD_FORM
  }
}

export const deleteForm = (id) => {
  return {
    type: appActionsType.DELETE_FORM,
    id
  }
}

export const getChartsData = () => {
  return {
    type: appActionsType.GET_CHARTS_DATA
  }
}