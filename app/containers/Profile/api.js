import axios from 'axios';
import { baseApiUrl } from '../../apiConfig';

export function loadProfile(profileId) {
  // return axios.get(`${baseApiUrl}/profile/${profileId}`)
  console.log(axios, baseApiUrl, profileId);
  return {
    data: {
      holder: {
        models: [
          {
            id: 1,
            fullName: 'Andrew Ribeiro',
            username: 'andrew.ribeiro',
            suggestions: [
              {
                id: 1,
                description: 'Camiseta, num sei o que...',
              },
            ],
          },
        ],
      },
    },
  };
}

export function updateProfile(/* profile */) {}

export function updateSuggestions(/* suggestions */) {}
export function addSuggestions(/* suggestions */) {}
