import axios from 'axios';
import { baseApiUrl } from '../../apiConfig';

export function loadFinalTime() {
  return axios.get(`${baseApiUrl}/profiles/lotterytime`);
}
