const SET_CURRENT_SECTION = "SET_CURRENT_SECTION";

export const setCurrSection = (section) => {
  !section ? (section = "") : "";
  return {
    type: SET_CURRENT_SECTION,
    section,
  };
};

export default (state = "business", action) => {
  switch (action.type) {
    case SET_CURRENT_SECTION:
      return action.section;
    default:
      return state;
  }
};
