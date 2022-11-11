import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar is-black"  role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          ALL ABOUT CINEMA
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a routerLink="/movies/testId" class="navbar-item">
            Test Link
          </a>

          <a routerLink="/search" class="navbar-item">
            Search Movies
          </a>

          <a routerLink="/advanced" class="navbar-item">
            Advanced Queries Demo
          </a>
        </div>
      </div>
    </nav>



  <div class="container">
    <router-outlet></router-outlet>  
  </div>

  `,
  styles: []
})
export class AppComponent {
  title = '411proj';
}
