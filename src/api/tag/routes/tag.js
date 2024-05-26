"use strict";

/**
 * tag router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::tag.tag", {
  prefix: "", // /tags --> /test/tags
  only: ["find", "findOne"],
  except: ["create"],
  config: {
    find: {
      policies: [],
      middlewares: [],
    },
    findOne: {},
    create: {},
    update: {},
    delete: {},
  },
});
