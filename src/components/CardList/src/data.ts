import { ref } from 'vue';
// number of lines
export const grid = ref(12);
// slider property
export const useSlider = (min = 6, max = 12) => {
  // Display count slider per line
  const getMarks = () => {
    const l = {};
    for (let i = min; i < max + 1; i++) {
      l[i] = {
        style: {
          color: '#fff',
        },
        label: i,
      };
    }
    return l;
  };
  return {
    min,
    max,
    marks: getMarks(),
    step: 1,
  };
};
