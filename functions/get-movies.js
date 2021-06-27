// proxy server using Netlify serverless functions
const axios = require("axios");

// env vars
const base_url = process.env.MOVIE_DB_BASE_URL
const api_key = process.env.MOVIE_DB_API_KEY

exports.handler = async event => {
  const PARAMS = {
    query: '',
  }

  if(event.queryStringParameters.query) {
    PARAMS.query = event.queryStringParameters.query
  }

  const {data, errors} = await axios.get(`${base_url}api_key=${api_key}`, {
    params: {
      ...PARAMS
    }
  })
  
  if(errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ movies: data })
  };
}