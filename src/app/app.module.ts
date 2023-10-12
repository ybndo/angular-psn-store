import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { CardFooterComponent } from './components/card/card-footer/card-footer.component';
import { CardBundleComponent } from './components/card/card-bundle/card-bundle.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HomeComponent,
    CardComponent,
    CardFooterComponent,
    CardBundleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
