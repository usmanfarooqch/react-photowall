import React, {Component} from 'react';

class AddPhoto extends Component
{
    constructor()
    {
        super();
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }
    handleSubmit(event)
    {
        event.preventDefault();
        const link = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            id: Number(new Date()),
            imageLink: link,
            description: description
        }
        if(description && link)
        {
           
            this.props.startAddingPost(post);
            this.props.onHistory.push('/');
        }
    }
    render() {
        return <div>
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Link" name="link"/>
                    <input type="text" placeholder="Description" name="description"/>
                    <button>Posts</button>
                </form>
            </div>
        </div>
    }
}

export default AddPhoto;