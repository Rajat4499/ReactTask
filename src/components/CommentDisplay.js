import React from 'react'

function CommentDisplay(props) {
    return (
        <div className="comment-display">
            <div className="post-comments">
                <div style={{float : 'right'}} className="comment-email">{props.comment.email}</div>
                <div style={{fontWeight: 'bold'}} className="comment-name">{props.comment.name}</div>
                <div className="comment-body">{props.comment.body}</div>
            </div>                
        </div>
    )
}

export default CommentDisplay
