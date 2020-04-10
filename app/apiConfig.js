export const baseApiUrl =
  process.env.REACT_APP_MODE === 'staging'
    ? 'https://api.amigosecreto.test.redwall.solutions/newmaq-financeiro-api'
    : 'http://0.0.0.0:2007/secret-santa';
