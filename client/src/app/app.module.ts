import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReviewsComponent } from './reviews/reviews.component';
import { AddreviewComponent } from './addreview/addreview.component';
import { SearchtoolComponent } from './searchtool/searchtool.component';
import { MovieinfoComponent } from './movieinfo/movieinfo.component';
import { MovieinfoReviewsPageComponent } from './movieinfo-reviews-page/movieinfo-reviews-page.component';
import { HomepagePageComponent } from './homepage-page/homepage-page.component';
import { SearchpagePageComponent } from './searchpage-page/searchpage-page.component';
import { RouterModule } from '@angular/router';
import { ViewmovieslistPageComponent } from './viewmovieslist-page/viewmovieslist-page.component';
import { AdvancedqueriesPageComponent } from './advancedqueries-page/advancedqueries-page.component';
import { EditreviewPageComponent } from './editreview-page/editreview-page.component';
import { ViewmoviesbytitlePageComponent } from './viewmoviesbytitle-page/viewmoviesbytitle-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewsComponent,
    AddreviewComponent,
    SearchtoolComponent,
    MovieinfoComponent,
    MovieinfoReviewsPageComponent,
    HomepagePageComponent,
    SearchpagePageComponent,
    ViewmovieslistPageComponent,
    AdvancedqueriesPageComponent,
    EditreviewPageComponent,
    ViewmoviesbytitlePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,

    MatSliderModule,
    MatButtonModule,

    // Card
    MatCardModule,

    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
