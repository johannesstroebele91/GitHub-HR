import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {UsersService} from '../services/users.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {HomeComponent} from './components/home/home.component';
import {NgOptimizedImage} from '@angular/common';
import {BaseChartDirective} from 'ng2-charts';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserModule,
    MatTabsModule,
    MatIconModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule, MatInputModule,
    CdkTextareaAutosize, MatProgressSpinner, NgOptimizedImage, BaseChartDirective
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
  exports: [RouterModule, HomeComponent]
})
export class AppModule {
}
