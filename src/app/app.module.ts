import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule, provideRouter } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { routes } from './forms/sports/sports.routes';
import { StudentComponent } from './components/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatButtonModule,
    HeaderComponent,
    RouterModule
  ],
  providers: [
    provideRouter(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}
