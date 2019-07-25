import { SongInfo } from "./songInfo";

export class Songs{
    songs: SongInfo[] = [];

    constructor() {
        this.songs.push(new SongInfo('Numb', 'Linking Park', 'rock', 2003, '../assets/images/linkinPark.jpg'));
        this.songs.push(new SongInfo('One Step Closer', 'Linking Park', 'rock', 2003, '../assets/images/linkinPark.jpg'));
        this.songs.push(new SongInfo('In the End', 'Linking Park', 'rock', 2003, '../assets/images/linkinPark.jpg'));
        this.songs.push(new SongInfo('Papercut', 'Linking Park', 'rock', 2003, '../assets/images/linkinPark.jpg'));
    }
}