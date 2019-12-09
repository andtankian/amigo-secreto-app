// import axios from 'axios';
// import { baseApiUrl } from '../../apiConfig';
export function loadFeed() {
  return new Promise(resolve => {
    resolve({
      data: {
        holder: {
          models: [
            {
              id: 1,
              fullName: 'Somebody',
              suggestions: [
                { id: 1, description: 'Maquiagem X Y Z' },
                { id: 2, description: 'Another Thing HEHE Lorem' },
                { id: 3, description: 'The quick brown fox jump in...' },
              ],
            },
            {
              id: 2,
              fullName: 'Another Person',
              suggestions: [
                { id: 1, description: 'Camiseta X YZ' },
                { id: 2, description: 'Another Thing HEHE Lorem' },
                { id: 3, description: 'The quick brown fox jump in...' },
              ],
            },
            {
              id: 3,
              fullName: 'Third Person',
              suggestions: [
                { id: 1, description: 'Livro X X Z' },
                { id: 2, description: 'Qualquer Outra Coisa' },
                { id: 3, description: 'Pochete' },
              ],
            },
          ],
        },
      },
    });
  });
}
