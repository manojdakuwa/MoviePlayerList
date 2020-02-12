import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PlaylistApiService } from './playlist-api.service';
import { AppInterceptorService } from './app-interceptor.service';
import { SafePipe } from './safe.pipe';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {ToastrModule} from 'ng6-toastr-notifications';
import { TitlecasePipe } from './titlecase.pipe';
@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    VideoPlayerComponent,
    SafePipe,
    TitlecasePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    ToastrModule.forRoot()
  ],
  providers: [PlaylistApiService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AppInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
