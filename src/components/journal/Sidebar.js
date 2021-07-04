import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { JournalEntries } from './JournalEntries'
import { startLogout } from '../actions/auth';
import { startNewNote } from '../actions/notes';

export const Sidebar = () => {


    const dispatch = useDispatch();
    const {name} = useSelector( state => state.auth );
    
    const handleLogout = (e) => {
       
        dispatch(startLogout())
    }

    const handleAddNew = () => {
        dispatch(startNewNote())
    }
    return (
      <aside className="journal__sidebar animate__animated animate__fadeIn">
        <div className="journal__sidebar-navbar">
          <h3 className="mt-5">
            <i className="far fa-moon" />
            <span className="ml-3">{name}</span>
          </h3>
          <button className="btn" onClick={handleLogout}>
            Log out
          </button>
        </div>

        <div className="journal__new-entry" onClick={handleAddNew}>
          <i className="far fa-calendar-plus fa-5x"></i>
          <p className="mt-5">New Entry</p>
        </div>

        <JournalEntries />
      </aside>
    );
}
