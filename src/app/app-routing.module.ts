import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistComponent } from './playlist/playlist.component';
import { VideoPlayerComponent } from './video-player/video-player.component';


const routes: Routes = [
  {path:'Playlist',component:PlaylistComponent},
  {path:'Videoplayer',component:VideoPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
