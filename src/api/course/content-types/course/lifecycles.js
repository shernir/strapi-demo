module.exports = {
    beforeCreate(event) {
    
      const { data, where, select, populate } = event.params;
  
      event.params.data.title = event.params.data.title
    },
  
    afterCreate(event) {
      const { result, params } = event;
  
      // do something to the result;
    },
  };