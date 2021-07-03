import { types } from "../../types/types"
import { db } from "../../firebase/firebaseConfig";



export const startNewNote = () => {

    return async(dispatch,getState) => {

        const {uid} = getState().auth;
        console.log(uid)
        const newNote = {
            tite:'',
            body:'',
            date: new Date().getTime()
        }

        const doc =  await db.collection(`${ uid }/journal/notes`).add( newNote )
        console.log(doc)
        dispatch(activeNote(doc.id,newNote))
    }
}

export const activeNote = (id,note) => ({

    type : types.notesActive,
    payload : {
        id,
        ...note, 
    }
})