import { getAuth,  createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [adminUser, setAdminUser] = useState([])

    const auth = getAuth();

    const registerUser = (email, password, name,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password, name)
            .then((userCredential) => {
                setAuthError('');
                const newUser = {email, displayName:name};
                setUser(newUser);
                saveUser(email, name)
                updateProfile(auth.curentUser,{
                    displayName:name
                    
                }).then(()=>{

                }).catch((error) => {

                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
    }
    useEffect(() => {
        fetch(`https://eerie-ghost-66570.herokuapp.com/user?email=${user?.email}`)
        .then(res =>res.json())
        
        .then(data =>setAdminUser(data))
    },[user?.email])
    const loginUser = (email, password,location,history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    function refreshPage(){ 
        window.location.reload(); 
    }
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            
        }).catch((error) => {
            
        })
            .finally(() => setIsLoading(false));
            refreshPage();
    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        user.role='user'
        fetch('https://eerie-ghost-66570.herokuapp.com/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        saveUser,
        user,
        adminUser,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
    }
}


export default useFirebase;