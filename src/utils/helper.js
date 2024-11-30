export function serializeObjToUrl(object) {
  if (typeof object === "undefined") return "";
  const result = [];
  Object.keys(object).forEach((key) => {
    const keyValue = object[key];
    if (keyValue !== null) {
      if (Array.isArray(keyValue)) {
        keyValue.forEach((value) => {
          result.push(`${key}=${value}`);
        });
      } else {
        result.push(`${key}=${encodeURIComponent(keyValue)}`);
      }
    }
  });

  return result.length > 0 ? "?" + result.join("&") : "";
}
export const convertTemperature = (kelvin) => {
  if (typeof kelvin !== "number" || isNaN(kelvin)) {
    return {
      celsius: null,
      fahrenheit: null,
    };
  }
  const celsius = Math.round((kelvin - 273.15) * 10) / 10;
  const fahrenheit = Math.round((((kelvin - 273.15) * 9) / 5 + 32) * 10) / 10;
  return {
    celsius,
    fahrenheit,
  };
};
