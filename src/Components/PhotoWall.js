import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function PhotoWall(props) {
    return <div>
        {/* <button className="add-icon" onClick={props.onNavigateScreen} >+</button> */}
        <Link className="add-icon" to="/AddPhoto"></Link>
        <div className="photo-grid">
            {props
                .posts
                .map((post, index) =>< Photo 
                key = {
                    index
                }
                post = {
                    post
                } {...props} index={index}/>)}
        </div>
    </div>
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired
}

export default PhotoWall;