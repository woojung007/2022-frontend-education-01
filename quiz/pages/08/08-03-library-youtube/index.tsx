import ReactPlayer from 'react-player'



export default function LibraryYoutubePage(){


    return <
    ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
    width="800px" height="600px"
    playing={true}    
    muted={true}
    />
}