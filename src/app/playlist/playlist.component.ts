import { Component, OnInit } from '@angular/core';
import { PlaylistApiService } from '../playlist-api.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { HttpClient } from '@angular/common/http';
import { error } from 'util';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  plylist:any;
  error:any;
  trailer:any;
  name:any;
  slideConfig = {
    "slidesToShow": 5, 
    "slidesToScroll": 1,
    "nextArrow":"<div class='nav-btn next-slide'></div>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    "dots":false,
    "infinite": false
  };
  constructor(private service :PlaylistApiService, private toastr:ToastrManager,public http: HttpClient) { }

  ngOnInit() {
    this.GetPlaylist();
  }
 GetPlaylist(){
  //this.service.PlayList()
  this.http.get('https://valuefy-assignment-x.herokuapp.com/api/getVideos').subscribe(data=>{
    this.trailer='https://www.youtube.com/embed/6ZfuNTqbHE8';
    this.name='Avengers: Infinity War';
    this.plylist=data;
    //console.log(data);
  },error=>{
    this.error=error;
    this.trailer='';
    this.name='';
    this.toastr.errorToastr("Cannot find url","Error", {
      toastTimeout: 2000
    })
  })
}
Content(trailer,title){
//console.log(trailer,title);
this.trailer=trailer;
this.name=title;
}
}
