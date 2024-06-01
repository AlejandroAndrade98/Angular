interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details; 
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed sheeran',
        year: 2015
    }
}

// console.log('song: ', audioPlayer.song );
// console.log('Duration: ', audioPlayer.songDuration );
// console.log('Author: ', audioPlayer.details.author );

// const { song:anotherSong, songDuration:duration, details } = audioPlayer;
// const { author } = details;


const dbz: string[] = ['Goku', 'Vegeta', 'Trunk'];

console.log('Personaje 3:', dbz[3] || 'No hay presonaje');











export {};