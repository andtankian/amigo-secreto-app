import axios from 'axios';
import { baseApiUrl } from '../../apiConfig';

export function loadFeed() {
  return axios.get(`${baseApiUrl}/profiles?limit=99`);
}
