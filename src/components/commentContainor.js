import React from 'react';

const commentsData = [
    {
        name: "Madhur Mangal",
        comment: "This is my comment",
        replies: [
            {
                name: "Madhur Mangal",
                comment: "This is my comment",
                replies: [
                    {
                        name: "Madhur Mangal",
                        comment: "This is my comment",
                        replies: []
                    },
                    {
                        name: "Madhur Mangal",
                        comment: "This is my comment",
                        replies: []
                    },
                    {
                        name: "Madhur Mangal",
                        comment: "This is my comment",
                        replies: []
                    }
                ]
            },
            {
                name: "Madhur Mangal",
                comment: "This is my comment",
                replies: []
            },
            {
                name: "Madhur Mangal",
                comment: "This is my comment",
                replies: []
            }
        ]
    },
    {
        name: "Madhur Mangal",
        comment: "This is my comment",
        replies: [
            {
                name: "Madhur Mangal",
                comment: "This is my comment",
                replies: []
            },
            {
                name: "Madhur Mangal",
                comment: "This is my comment",
                replies: []
            },
            {
                name: "Madhur Mangal",
                comment: "This is my comment",
                replies: []
            }
        ]
    },
    {
        name: "Madhur Mangal",
        comment: "This is my comment",
        replies: []
    },
    {
        name: "Madhur Mangal",
        comment: "This is my comment",
        replies: []
    }
]

const Comment = ({data}) => {
    const { name, comment} = data;
    return (
        <div className='flex border'>
            <img 
            className='m-12 h-12'
            alt='user'
            src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
            />
            <div className='px-3 border py-9'>
                <p className='font-bold'>{name}</p>
                <p>{comment}</p>
            </div>  
        </div>
    )
}

const CommentList = ({comments}) => {
    return commentsData.map((comment, index) => (
        <div>
            <Comment key = {index} data = {comment}/>
            <div>
                <CommentList comments = {comment.replies}/>
            </div>
        </div>
    ))
}

const CommentsContainor = () => {
    return (
        <div className='m-2 p-2'>
            <CommentList comments = {commentsData}/>
        </div>
    );
}
 
export default CommentsContainor