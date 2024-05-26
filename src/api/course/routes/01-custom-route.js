module.exports = {
    routes:[
        {
            method: 'GET',
            path: '/courses/example',
            handler: "api::course.course.exampleAction",
            
        },
        {
            method: 'GET',
            path: '/courses/getLikedPosts',
            handler: "api::course.course.getLikedPosts",
            
        }
        
    ]
}