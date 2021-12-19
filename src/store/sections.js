import axios from "axios";

const GET_SECTIONS = "GET_SECTIONS";

const _getSections = (sections) => {
  return {
    type: GET_SECTIONS,
    sections,
  };
};

export const getSections = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/api/sections");
    dispatch(_getSections(data));
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case GET_SECTIONS:
      return action.sections;
    default:
      return state;
  }
};
