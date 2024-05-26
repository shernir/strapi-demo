module.exports = {
    routes:[
        {
            method: 'PUT',
            path: '/courses/:id/like',
            handler: "api::course.course.likeCourse",
        }
    ]
}