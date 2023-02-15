export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    darkGrey: '#7c7c7c',
    lightGrey: '#dddddd',
    black: '##000000',
  },
  spacing: (...values) => {
    let value = '';
    for (let i = 0; i < values.length; i += 1) {
      value += `${4 * values[i]}px `;
    }
    return value;
  },
});
