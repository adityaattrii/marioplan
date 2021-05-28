import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from '../../config/fbConfig'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return(
        <ul className="right">
            <li><NavLink to="/create">New Project</NavLink></li>
            <li><a href= "/signin" onClick= {props.signOut}>Log Out</a></li>
            <li><NavLink to="/" className="btn btn-floating cyan lighten-1">AA</NavLink></li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut({firebase}))
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);