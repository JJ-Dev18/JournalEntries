import React , {useEffect, useState}from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
    
  } from "react-router-dom";
  import {firebase} from '../firebase/firebaseConfig'
  import {useDispatch} from 'react-redux'
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../components/actions/auth';
import { PrivateRouter } from './PrivateRoute';
import { PublicRouter } from './PublicRoute';
import { loadNotes } from '../helpers/loadNotes';
import {startLoadingNotes} from '../components/actions/notes'
  

export const AppRouter = () => {
 
    const dispatch = useDispatch();

     const [checking, setChecking] = useState(true)
     const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {

            if(user?.uid){
                dispatch(login(user.uid,user.displayName))
                setIsLoggedIn(true)
                dispatch(startLoadingNotes(user.uid))
            }
            else{
                setIsLoggedIn(false)
            }

            setChecking(false)
            
        })
    }, [dispatch,setChecking,setIsLoggedIn])      

    if (checking){
       return <h1> Wait...</h1>
    }

    return (
    <Router>
        <div>

            <Switch>
                <PublicRouter isLoggedIn={isLoggedIn} path="/auth" component={ AuthRouter}/>
                <PrivateRouter isLoggedIn={isLoggedIn} exact path="/" component={ JournalScreen} />
                
                <Redirect to ="/auth/login" />
             </Switch>

        </div>
         
    </Router>
    )
}
