'use strict';

module.exports = ({ strapi }) => ({
 async create(ctx) {
    // const { plan } = ctx.request;
    const plan = ctx.request.body.data;
    try {
        ctx.body = await strapi
    .plugin('github-plugin')
    .service('planService')
    .create(plan);
    } catch (error) {
        console.log(error); 
    }
    
  },
});
