
module.exports = [
  {
    method: 'GET',
    path: '/repo',
    handler: 'getRepoController.index',
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
    },
  },
  {
    method: 'POST',
    path: '/create',
    handler: 'planController.create',
    config: {
      policies: ["admin::isAuthenticatedAdmin"],
    },
  },
];
