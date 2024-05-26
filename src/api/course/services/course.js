'use strict';

/**
 * course service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::course.course', ({ strapi }) =>  ({
    // Method 1: Creating an entirely custom service
    async findPublicCourses(...args) {
        const newQuery = {
            ...args,
            filters: {
                ...args.filters,
                premium: false
            }
        }
        const publicCourses = await strapi.entityService.findMany('api::course.course', this.getFetchParams(newQuery));
        return publicCourses;
    },
    async likeCourse(args) {
        const {id, user, query} = args;
        const courseToLike = await strapi.entityService.findOne('api::course.course', id, {
            populate: ['likeBies']
        });
        const updatedCourse = await strapi.entityService.update('api::course.course', id, {
            data: {
                likeBies: [...courseToLike.likeBies, user.id]
            },
            ...query
        });
        return updatedCourse;
    },
    async getLikedPosts(args) {
        const {user} = args;
        const likedCourses = await strapi.entityService.findMany('api::course.course', {
            filters: {
                likeBies: user.id
            }
        });
        return likedCourses;

    }

  }));