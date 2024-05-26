'use strict';

/**
 * `is-admin` policy
 */

module.exports = (policyContext, config, { strapi }) => {
    // Add your own logic here.

    const isEligible = policyContext.state.user &&  policyContext.state.user.role.type === config.userRole;
  

    if (isEligible) {
      return true;
    }

    return false;
};
