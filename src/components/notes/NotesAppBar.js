import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { startSaveNote, uploadFile } from '../actions/notes';
import moment from "moment";

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const {active} = useSelector( state => state.notes );
    
    const day = moment(new Date().getTime());
    const handleSave = () => {
        dispatch(startSaveNote(active))
    }
    const handleClickPicture = () => {
        document.querySelector('#fileSelector').click()
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        dispatch(uploadFile(file))
    }
    return (
      <div className="notes__appbar">
        <span>{day.format("ll")}</span>
        <input
          id="fileSelector"
          style={{ display: "none" }}
          type="file"
          name="file"
          onChange={handleFileChange}
        />

        <div>
          <button className="btn" onClick={handleClickPicture}>
            Picture
          </button>
          <button className="btn" onClick={handleSave}>
            SAVE
          </button>
        </div>
      </div>
    );
}
