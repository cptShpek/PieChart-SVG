import {appActionsType} from '../constans';

export const setInputsData = (data) => ({
  type: appActionsType.SET_INPUTS_DATA,
  data
});

export const deleteForm = (id) => {
  return {
    type: appActionsType.DELETE_FORM,
    id
  }
};

export const getChartsData = () => {
  return {
    type: appActionsType.GET_CHARTS_DATA
  }
};