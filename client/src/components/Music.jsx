import React from 'react';
import Spotify from 'react-spotify-embed';
import Nav from './Nav';

const Music = () => {

    let albumURL1 = 'https://open.spotify.com/album/21jcfj6EhX2Nl8BZpZysLi?si=vzodCChpQV6WabN5dIT4-g';
    let albumURL2 = 'https://open.spotify.com/album/151w1FgRZfnKZA9FEcg9Z3?si=3MHPuaIoQlqZaJzVV0ycxg';
    let albumURL3 = 'https://open.spotify.com/album/6tG8sCK4htJOLjlWwb7gZB?si=MUm_5QXoRuiBuOBYx7OrfA';
    let playlistURL1 = 'https://open.spotify.com/playlist/37i9dQZF1DWW2hj3ZtMbuO?si=7c0e9348dbe648a5';
    let playlistURL2 = 'https://open.spotify.com/playlist/37i9dQZF1DXaLaoaQqrfyO?si=8030f71b5c24428b';
    let playlistURL3 = 'https://open.spotify.com/playlist/37i9dQZF1DX9wa6XirBPv8?si=580768e1998e48a4';
    let playlistURL4 = 'https://open.spotify.com/playlist/37i9dQZF1DX1dd5WKvvHTC?si=574e8d21ae884c0b';
    let playlistURL5 = 'https://open.spotify.com/playlist/37i9dQZF1DX9wC1KY45plY?si=9775502c2f964005';
    let playlistURL6 = 'https://open.spotify.com/playlist/37i9dQZF1DX889U0CL85jj?si=e5995bbd3e334954';
    return (
        <>
        <Nav />
        
        <div className='music-recs'>
        
            <h1>Team Spinder recommends!</h1>
            <p>Struggling to find new music? Here are some of Team Spinder's top recommendations for you!</p>
            <div className='recs'>
        
            <Spotify link={playlistURL1} />
            <Spotify link={playlistURL2} />
            <Spotify link={playlistURL3} />
            <Spotify link={playlistURL4} />
            <Spotify link={playlistURL5} />
            <Spotify link={playlistURL6} />
            <Spotify link={albumURL1} />
            <Spotify link={albumURL2} />
            <Spotify link={albumURL3} />
            </div>
            
        </div>
        </>
    );
};

export default Music;
