import React, {Component} from 'react';


class Comments extends Component
{
    constructor()
{
    super();
    this.handleComment = this.handleComment.bind(this);
}
    handleComment(event)
    {
        event.preventDefault();
        this.props.addComment(event.target.elements.comment.value, this.props.id);
    }
    render()
    {
     
    return  <div>
        {
            this.props.comments.map((comment, index)=>{
                return (<p key={index}>{comment}</p>)
            })
        }
        <form className="comment-form"  onSubmit={this.handleComment}>
        <input type="text" placeholder="comment" name='comment'/>
        <input type="submit" value="test"/>
        </form>
        
        </div>
   
}
}

export default Comments;