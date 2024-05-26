'use strict';

/**
 * course router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::course.course', {
        config: {
            find:{
                policies: [{name:'is-admin', config:{userRole:'authenticated'}}],
            }
        }
});
