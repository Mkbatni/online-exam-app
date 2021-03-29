import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule} from '@angular/common/http';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { myAuthGaurd } from './myAuthgaurd';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,

    ExamPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [myAuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
