'use strict';

/**
 *  course controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::course.course',
({ strapi }) => ({
    async exampleAction(ctx) {
        try {
            ctx.body = 'Hello World 1111';
        } catch (error) {
            ctx.body = error 
        }
    },
    // async find(ctx) {
        
    //     if(ctx.state.user) return await super.find(ctx, {filters: {premium: false}});
    //     console.log("not authenticated");
    //     return await super.find(ctx, {filters: {premium: false}});
       
    // },
    async find(ctx) { 
        const isRequestNonPremium = ctx.query.filter && ctx.query.filter.premium == false;
        if(ctx.state.user || isRequestNonPremium) return await super.find(ctx);

        const publicCourses = await strapi.query('api::course.course').findPublicCourses(ctx.query);
        const sanitizedEntities = await this.sanitizeOutput(publicCourses,ctx);
        return this.transformResponse(sanitizedEntities);
    },
    async findOne(ctx) {
        const {id} = ctx.params;
        const {query} = ctx;
        console.log(id);
        const entity = await strapi.service("api::course.course").findOne(id, query);
        const sanitizedEntity = await this.sanitizeOutput(entity,ctx);

        return this.transformResponse(sanitizedEntity);
     },
     async likeCourse(ctx) { 
        if(!ctx.state.user) return ctx.unauthorized("You are not authenticated");
        const {id} = ctx.params;
        const {user} = ctx.state;
        const {query} = ctx;
        const entity = await strapi.service("api::course.course").likeCourse({id, user, query});

    
        const sanitizedEntity = await this.sanitizeOutput(entity,ctx);
        return this.transformResponse(sanitizedEntity);
     },
     async getLikedPosts(ctx) { 
        if(!ctx.state.user) return ctx.unauthorized("You are not authenticated");
        const {id} = ctx.params;
        const {user} = ctx.state;
        const {query} = ctx;
        const entity = await strapi.service("api::course.course").getLikedPosts({id, user, query});
        
    
        const sanitizedEntity = await this.sanitizeOutput(entity,ctx);
        return this.transformResponse(sanitizedEntity);
     }
})
);
