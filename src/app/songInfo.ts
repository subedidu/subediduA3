export class SongInfo{
    public name: string;
    public artist: string;
    public genre: string;
    public year: number;
    public picture: any;

    constructor(name: string, artist: string, genre: string, year: number, picture: any){
        this.name = name;
        this.artist = artist;
        this.genre = genre;
        this.year = year;
        this.picture = picture;
    }
}