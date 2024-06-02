import { useState, useContext, createContext, useEffect } from "react";

const PlaylistContext = createContext()

const PlaylistProvider = ({children}) => {

    const [playlist, setPlaylist] = useState([])

    useEffect(()=>{
        let existingPlaylistItem = localStorage.getItem('playlist')
        if(existingPlaylistItem){
            setPlaylist(JSON.parse(existingPlaylistItem))
        }
    },[])

    return (
        <PlaylistContext.Provider value={[playlist, setPlaylist]}>
            {children}
        </PlaylistContext.Provider>
    )
}

const usePlaylist = () => useContext(PlaylistContext)

export {usePlaylist, PlaylistProvider}