import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes, Router } from '@angular/router'

import { AppComponent } from './app.component'
import { IntroComponent } from './intro/intro.component'
import { WhatIsXdComponent } from './what-is-xd/what-is-xd.component'

const appRoutes: Routes = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'what-is-xd',
    component: WhatIsXdComponent
  }
]

@NgModule({
  declarations: [AppComponent, IntroComponent, WhatIsXdComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
