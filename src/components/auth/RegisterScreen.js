import React from 'react'
import { Link  } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import {useDispatch, useSelector} from 'react-redux'
import validator from 'validator'
import { setError, removeError } from '../actions/ui'
import { startRegisterWithEmailPasswordName } from '../actions/auth'

export const RegisterScreen = () => {

    const [formValues, handleInputChange] = useForm()
    const dispatch = useDispatch();
    const {msgError} = useSelector( state => state.ui );
    console.log(msgError)
    
    const{name,email,password,password2} = formValues;

    const handleRegister = (e) => {
         e.preventDefault()

         if(isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(name,email,password))
         }
    }

    const isFormValid = () => {
        
           if(name.trim().length === 0){
               const error = "name is required"
               dispatch(setError(error))
               return false;
           }
           else if (!validator.isEmail(email)){
               console.log('email no es valido')
               dispatch(setError('email no es valido'))
               return false;
           }
           else if ( password !== password2 || password.length < 5){
               console.log('Minimo 6 caracteres para la contraseña o no concuerdan las passwords')
               dispatch(setError('minimo 6 caracteres'))
               return false;
           }
        
        dispatch( removeError() )
        return true;
    }
    return (
      <div>
        <h3 className="auth__title">Register </h3>
        <form
          onSubmit={handleRegister}
          className="animate__animated animate__fadeIn"
        >
          {msgError !== null && (
            <div className="auth__alert-error">{msgError}</div>
          )}

          <input
            type="text"
            placeholder="Name"
            name="name"
            className="auth__input"
            autoComplete="off"
            onChange={handleInputChange}
            value={name}
          />

          <input
            type="text"
            placeholder="Email"
            name="email"
            className="auth__input"
            onChange={handleInputChange}
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="auth__input"
            onChange={handleInputChange}
            value={password}
          />
          <input
            type="password"
            placeholder="Confirm Password "
            name="password2"
            className="auth__input"
            onChange={handleInputChange}
            value={password2}
          />

          <button className="btn btn-primary btn-block" type="submit">
            Register
          </button>

          <hr />

          <Link to="/auth/login" className="link mt-1">
            Already Registered ?
          </Link>
        </form>
      </div>
    );
}
