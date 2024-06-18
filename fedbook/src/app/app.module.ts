import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { HotTopicComponent } from './hot-topic/hot-topic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './news-feed/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsFeedComponent,
    HotTopicComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
