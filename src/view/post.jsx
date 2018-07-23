import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { openPostActon } from '../redux/actions';
import { NavLink } from 'react-router-dom';

class Post extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const postId = this.props.id;
        return (
            <NavLink to={`/${ this.props.id }`}
            className='flex-item'
            onClick={(event) => this.props.openPostActon(postId)}>
                <div>
                    <span className='post-text'>User id: {postId}</span>
                    <span className='post-text title'>Title: {this.props.title}</span>
                </div>
            </NavLink>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ openPostActon }, dispatch);

export default connect(null, mapDispatchToProps)(Post);