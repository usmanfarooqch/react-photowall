import {database} from '../database/config';
export function startAddingPost(post)
{
    return(dispatch) =>{

        //after dispatch this is a firebase promiss
        return database.ref('posts').update({[post.id]: post}).then(()=>{
            dispatch(addPost(post))
        }).catch((error)=>{
            console.log(error);
        })
    }
}

export function startLoadingPost()
{
    return (dispatch) =>{
        return database.ref('posts').once('value').then(snapshot=>{
            let posts = []
            snapshot.forEach(childSnapshot=>{
                posts.push(childSnapshot.val())
            })
            dispatch(loadPost(posts))
        })
    }
}

export function loadPost(posts)
{
    return {
        type: 'LOAD_POSTS',
    posts
    }
}




//action creator
// this function will return a javascript object that describes 
//the event that should update the applications state
export function removePost(index)
{
    // every returning object should contain type property because when this object 
    // will go to reducer and it will tell reducer what type of event is occuring
return {
    type: 'REMOVE_POST',
    index
}
}

export function addPost(post)
{
    // every returning object should contain type property because when this object 
    // will go to reducer and it will tell reducer what type of event is occuring
return {
    type: 'ADD_POST',
    post
}
}

export function addComment(comment, postId){

    return {
        type:'ADD_COMMENT',
        comment,
        postId
    }
}

