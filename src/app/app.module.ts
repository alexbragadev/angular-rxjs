import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { QuickStartComponent } from './shared/components/quick-start/quick-start.component';
import { WarmUpObservableComponent } from './shared/components/warm-up-observable/warm-up-observable.component';
import { EmptyObervableComponent } from './shared/components/subscription-lifecycle/empty-obervable.component';
import { ColdAndHotObervablesComponent } from './shared/components/cold-and-hot-obervables/cold-and-hot-obervables.component';
import { FunctionsComponent } from './shared/components/functions/functions.component';
import { PipeableOperatorsComponent } from './shared/components/pipeable-operators/pipeable-operators.component';
import { FlatteningOperatorsComponent } from './shared/components/flattening-operators/flattening-operators.component';
import { SubjectComponent } from './shared/components/subject/subject.component';

@NgModule({
  declarations: [
    AppComponent,
    QuickStartComponent,
    WarmUpObservableComponent,
    EmptyObervableComponent,
    ColdAndHotObervablesComponent,
    FunctionsComponent,
    PipeableOperatorsComponent,
    FlatteningOperatorsComponent,
    SubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
