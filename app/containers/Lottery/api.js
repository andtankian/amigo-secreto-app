import axios from 'axios';

export function loadFinalTime() {
  console.log(axios);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: { holder: { models: [{ finalTime: Date.now() + 10000 }] } },
      });
    }, 1000);
  });
}
