import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RoutingModule } from './routing/routing.module';
import { AuthenticationService } from './authentication.service';
import { CustomHttpService } from './custom-http.service';
import { ApiService } from './api.service';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [AuthenticationService, CustomHttpService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
