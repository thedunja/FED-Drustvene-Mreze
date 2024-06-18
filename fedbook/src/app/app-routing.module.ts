import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotTopicComponent } from './hot-topic/hot-topic.component'; 
import { NewsFeedComponent } from './news-feed/news-feed.component';

const routes: Routes = [
  { path: 'newsfeed', component: NewsFeedComponent },
  { path: 'hot-topic', component: HotTopicComponent },
  { path: '',   redirectTo: '/newsfeed', pathMatch: 'full' }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }