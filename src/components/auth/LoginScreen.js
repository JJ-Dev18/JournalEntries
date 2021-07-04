import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { startLoginEmailPassword, startGoogleLogin } from '../actions/auth'

export const LoginScreen = () => {

    //hook de react redux
    const dispatch = useDispatch()
    const {loading} = useSelector( state => state.ui );
    

    const [formValues, handleInputChange] = useForm({
    })
    const {email,password} = formValues;

    const handleLogin = (e) => {
         e.preventDefault();
        
         dispatch(startLoginEmailPassword(email,password))
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin())
    }
    return (
      <div>
        <h3 className="auth__title">Login </h3>
        <form onSubmit={handleLogin} 
        className="animate__animated animate__fadeIn">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            className="auth__input"
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            className="auth__input"
            onChange={handleInputChange}
          />

          <button
            className="btn btn-primary btn-block"
            type="submit"
            disabled={loading}
          >
            Login
          </button>

          <hr />
          <div className="auth__social-networks">
            <p>Login With Social network </p>
            <div className="google-btn" onClick={handleGoogleLogin}>
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google button"
                />
              </div>
              <p className="btn-text">
                <b>Sign in with google</b>
              </p>
            </div>
          </div>

          <Link to="/auth/register" className="link">
            Create New Acountt
          </Link>
        </form>
      </div>
    );
}