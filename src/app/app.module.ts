import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { FormsModule } from '@angular/forms';
import { ServicesService} from './services.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UpperCasePipe } from './upper-case.pipe';
import { StrikethroughDirective } from './strikethrough.directive';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RepositoriesComponent,
    SearchFormComponent,
    UserComponent,
    UpperCasePipe,
    StrikethroughDirective
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    FormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    HttpClientModule,
  

  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
