import {appActionsType} from '../constans';

export const setInputsData = (data) => ({
  type: appActionsType.SET_INPUTS_DATA,
  data
});

export const deleteForm = (id) => ({
  type: appActionsType.DELETE_FORM,
  id
});

export const getChartsData = () => ({
  type: appActionsType.GET_CHARTS_DATA
});