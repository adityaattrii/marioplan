export const signIn = (credentials, {firebase}) => {
    return (dispatch, getState) => {
        // const firebase = useFirebase;

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'} );
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err});
        })
    }
}

export const signOut = (props) => {
    return (dispatch, getState) => {
        props.firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'});
        })
    }
}

export const signUp = (newUser, {firebase}) => {
    return (dispatch, getState, {getFirestore} ) => {
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=> {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', err })
        })
    }
}