'use strict';
const axios = require('axios');

module.exports = ({ strapi }) => ({
  async create(plan) {
    console.log(plan);
    const {productID, title} = plan;
    const newCreatedPlan = await strapi.entityService.create('plugin::github-plugin.plan', {
      data:{
        id: productID,
        title: title,
        description: "This is a plan",
      }
    });
    return newCreatedPlan;
  },
});
