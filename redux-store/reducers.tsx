import { THEME_CHANGE } from "./constants";

const initialState = {
  theme: "light",
};

const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case THEME_CHANGE:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
