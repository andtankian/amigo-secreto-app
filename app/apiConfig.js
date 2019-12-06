export const baseApiUrl =
  process.env.REACT_APP_MODE === 'staging'
    ? 'https://api.afrc.test.redwall.solutions/newmaq-financeiro-api'
    : 'http://0.0.0.0:2007/kriss-kringer';
