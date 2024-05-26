'use strict';

/**
 *  tag controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tag.tag',
({ strapi }) => ({
    async find(ctx) { 
        const isRequestNonPremium = ctx.query.filter && ctx.query.filter.premium == false;
        if(ctx.state.user || isRequestNonPremium) return await super.find(ctx);

        const publicCourses = await strapi.service('api::tag.tag').findPublicCourses(ctx.query);
        const sanitizedEntities = await this.sanitizeOutput(publicCourses,ctx);
        return this.transformResponse(sanitizedEntities);
    },

})
);