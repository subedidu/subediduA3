import { Component, OnInit } from '@angular/core';
import { Songs } from '../mySongs';
import { SongInfo } from '../songInfo';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  songs: Songs = new Songs;

  currentSong: SongInfo;

  constructor() { }

  ngOnInit() {
  }
  show(i: number) {
    this.currentSong = this.songs.songs[i];
  }

}
