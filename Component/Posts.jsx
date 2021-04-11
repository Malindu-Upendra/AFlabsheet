import React from 'react';
import PostListItem from './PostListItem'

export default class Posts extends React.Component {
    constructor(props) {
        super(props);
    }
};

render() {
    const {posts} = this.props;
    return <div>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
            </tr>
            </thead>
            <tbody>{posts.map(post => {
                return <PostListItem key={post.id.toString()} post={post}/>}
                )
            }
            </tbody>
        </table>
    </div>
}
