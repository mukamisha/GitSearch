import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserserviceService } from 'src/app/userservice.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { UserComponent } from './user/user.component';
import { RepositoriesComponent } from './repositories/repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
