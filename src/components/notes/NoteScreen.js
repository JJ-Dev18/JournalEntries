import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />
            <div className="notes__content ">
                  <input type="text"
                  placeholder="Some awesome title"
                  className="notes__title-input"/> 
                  <textarea 
                  placeholder="what happened today"
                  className="notes__textarea">

                  </textarea>
                  <div className="notes__image">
                      <img 
                      alt="imagen"
                      src="https://www.12minutos.com/thumb/4/6/9/3/0/6/6930670edbfc237b7c83f20ae6c87c7d.jpg"/>
                  </div>
            </div>
        </div>
    )
}
