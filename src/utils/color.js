export const addTransparency = (color, opacity) => {
  // Убедимся, что opacity находится в диапазоне от 0 до 100
  opacity = Math.min(100, Math.max(0, opacity));

  // Преобразуем opacity в десятичную дробь
  const alpha = opacity / 100;

  // Функция для преобразования HEX в RGB
  const hexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  // Создаем временный div для работы с именованными цветами
  const div = document.createElement("div");
  div.style.color = color;
  document.body.appendChild(div);
  const computedColor = window.getComputedStyle(div).color;
  document.body.removeChild(div);

  let r, g, b;

  if (color.startsWith("#")) {
    // Если это HEX цвет
    const rgb = hexToRgb(color);
    r = rgb.r;
    g = rgb.g;
    b = rgb.b;
  } else if (color.startsWith("rgb")) {
    // Если это уже RGB или RGBA цвет
    const match = color.match(/(\d+),\s*(\d+),\s*(\d+)/);
    r = match[1];
    g = match[2];
    b = match[3];
  } else {
    // Если это именованный цвет
    const match = computedColor.match(/(\d+),\s*(\d+),\s*(\d+)/);
    r = match[1];
    g = match[2];
    b = match[3];
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
