//get channel information
//in this case mistarefusion
//https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=MistareFusion&key=[YOUR_API_KEY]

//MistareFusion's channel id
//UCD4tmBmqbUOGQNlsWpg3f7g

//A channel's (mistarefusion's channel id) playlists
//https://youtube.googleapis.com/youtube/v3/playlists?channelId=UCD4tmBmqbUOGQNlsWpg3f7g&key=[YOUR_API_KEY]

//A channel's (mistarefusion) videos 



// async function fetchvideo(){
    
//     url_channel = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=MistareFusion&key=AIzaSyBt_ggKUkLcq3sfpYxNpCpaOPunf_vJlNU";

//     //from this i should get the upload list ID
//     //from items.contentDetails.relatedPlaylists.uploads
//     const response = await fetch(url_channel);
//     responseJson= await response.json();
//     console.log(responseJson);

// }

// fetchvideo();


//Mistare's upload playslist id
//"UUD4tmBmqbUOGQNlsWpg3f7g"


// async function fetchUploadPlaylistId(){
    
//     url_channel = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=MistareFusion&key=AIzaSyBt_ggKUkLcq3sfpYxNpCpaOPunf_vJlNU";

//     //from this i should get the upload list ID
//     //from items.contentDetails.relatedPlaylists.uploads
//     const response = await fetch(url_channel);
//     responseJson= await response.json();
//     console.log(responseJson);

// }

// fetchUploadPlaylistId();



//Mistare's uploaded videos list
//https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=contentDetails&playlistId=UUD4tmBmqbUOGQNlsWpg3f7g&key=[YOUR_API_KEY]

async function fetchUploadPlaylistVideos(){
    
    url_channel = "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&part=contentDetails&playlistId=UUD4tmBmqbUOGQNlsWpg3f7g&key=AIzaSyBt_ggKUkLcq3sfpYxNpCpaOPunf_vJlNU";

    //from this i should get the upload list ID
    //from items.contentDetails.relatedPlaylists.uploads
    const response = await fetch(url_channel);
    responseJson= await response.json();
    console.log(responseJson);

}

fetchUploadPlaylistVideos();