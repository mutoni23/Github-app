import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { ServicesComponent } from './services/services.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RepositoriesComponent,
    ServicesComponent,
    SearchFormComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
