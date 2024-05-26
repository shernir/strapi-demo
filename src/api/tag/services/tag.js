'use strict';

/**
 * tag service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tag.tag', ({ strapi }) =>  ({
    // Method 1: Creating an entirely custom service
    async findPublicCourses(...args) {
        console.log(args);
        const newQuery = {
            ...args,
            filters: {
                ...args.filters,
                premium: false
            }
        }
        const publicCourses = await strapi.entityService.findMany('api::tag.tag', this.getFetchParams(newQuery));
        return publicCourses;
    }

  }));