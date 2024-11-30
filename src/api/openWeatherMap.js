import { createApiActions } from "utils/actions";
import { axiosRequest } from "utils/axios";
import { serializeObjToUrl } from "utils/helper";

const actions = createApiActions("GET_WEATHER_INFO");

export default function getWeatherInfo(queryParams) {
  const params = {
    actions,
    method: "get",
    url: `https://api.openweathermap.org/data/2.5/weather${serializeObjToUrl(
      queryParams
    )}`,
    headers: {},
  };
  return axiosRequest(params);
}
