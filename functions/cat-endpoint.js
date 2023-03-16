/* eslint-disable */
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';

dotenv.config();

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow_Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
};

exports.handler = async (event, context) => {
  try {
    const res = await fetch('https://cat-fact.herokuapp.com/facts');
    const data = await res.json();
    const json = JSON.stringify(data);

    return {
      statusCode: 200,
      headers,
      body: json
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
