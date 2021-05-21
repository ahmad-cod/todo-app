const initState = {
 posts: [
     { id: '1', title: 'simple react', body: 'Let\'s react together' },
     {id: '2', title: 'see for the star', body: 'Do your best!'}

 ]   
}
const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST'){
        const newPosts = state.posts.filter(post => post.id !== action.id )
        return {
            posts: newPosts
        }
    }
    return state
}

export default rootReducer