
module.exports = {
    kind: 'collectionType',
    collectionName: 'content-type',
    info: {
      singularName: 'plan', // kebab-case mandatory
      pluralName: 'plans', // kebab-case mandatory
      displayName: 'Plan',
      description: 'A plan for a project',
    },
    options: {
      draftAndPublish: false,
    },
    attributes: {
      id: {
        type: 'uid',
     
      },
      title: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
    }
  };