import axios from 'axios';
import querystring from 'query-string';
import { baseApiUrl } from '../../apiConfig';

export function loadProfile(profileId) {
  return axios.get(`${baseApiUrl}/profiles/${profileId}`);
}

export function updateProfile(profile) {
  return axios.put(
    `${baseApiUrl}/profiles/${profile.id}`,
    querystring.stringify(profile),
  );
}

export function addSuggestion(suggestion) {
  return axios.post(
    `${baseApiUrl}/suggestions`,
    querystring.stringify(suggestion),
  );
}
export function updateSuggestions(/* suggestions */) {}
