const weatherMainSelector = (state) => state.weather?.data?.main;
export const toggleSelector = (state) => state.weather?.toggleID;
export const tempSelector = (state) => weatherMainSelector(state)?.temp;
export const humiditySelector = (state) => weatherMainSelector(state)?.humidity;
export const rainSelector = (state) => state.weather?.data?.rain?.["1h"];
export const snowSelector = (state) => state.weather?.data?.snow?.["1h"];
export const windSpeedSelector = (state) => state.weather?.data?.wind?.speed;
export const isLoadingWeatherSelector = (state) => state.weather?.isLoading;
export const isErrorWeatherSelector = (state) => state.weather?.error;
