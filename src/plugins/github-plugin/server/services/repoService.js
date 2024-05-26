'use strict';
const axios = require('axios');

module.exports = ({ strapi }) => ({
  async getPublicRepo() {
    const url = 'https://www.ooredoo.qa/webgate-apigw/api';
    const requestBody = {
      language: "ENGLISH",
      operation: "ShahryPacks",
      parameters: []
    };
    
    try {
      const response = await axios.post(url, requestBody, {
        headers: {
          'Content-Type': 'application/json', // Indicate that the request body is in JSON format
        }
      });
      
      return response.data; // axios automatically parses JSON responses
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },
});
