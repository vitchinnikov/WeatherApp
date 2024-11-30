import { CHANGE_TOGGLE, FETCH_WEATHER } from "module/weather/action";
import { getLocalStorage } from "utils/localStorage";
import { TOGGLE, DEGREES } from "utils/constants";

const toggleIdLocalStorage = getLocalStorage(TOGGLE);

const initialState = {
  data: {},
  isLoading: false,
  toggleID: toggleIdLocalStorage || DEGREES.CELSIUS.ID,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case CHANGE_TOGGLE:
      return { ...state, toggleID: payload };
    case FETCH_WEATHER.REQUEST:
      return { ...state, isLoading: true };
    case FETCH_WEATHER.SUCCESS:
      return { ...state, data: payload };
    case FETCH_WEATHER.FINALLY:
      return { ...state, isLoading: false };
    case FETCH_WEATHER.FAILURE:
      return { ...state, isLoading: false, error: true };
    default:
      return state;
  }
};
export default reducer;
