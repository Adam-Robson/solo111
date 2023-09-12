const fetch = require('node-fetch');

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
};

// eslint-disable-next-line no-undef
module.exports = async function riddleEndpoint({ event, context }) {
  try {
    console.info({ event }, { context });
    const res = await fetch('https://riddles-api.vercel.app/random');
    const data = await res.json();
    const json = JSON.stringify(data);
    return {
      statusCode: 200,
      headers,
      body: json,
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'data fetch failed' }),
    };
  }
};
