import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-what-is-xd',
  templateUrl: './what-is-xd.component.html',
  styleUrls: ['./what-is-xd.component.css']
})
export class WhatIsXdComponent implements OnInit {
  title: String = 'What is Adobe XD?'
  features: Object[] = [
    'XD empowers designers with the speed, precision, and quality to seamlessly iterate and share interactive prototypes with team members and reviewers across devices and platforms, including Windows, Mac, iOS, and Android.',
    'Specially built for UI/UX design',
    'Lightweight and free',
    'Vector based',
    'Uses Artboard',
    'Easier prototyping'
  ]
  constructor(private router: Router) {}

  ngOnInit() {}

  nextSlide() {
    this.router.navigateByUrl('/things-to-remember')
  }
}
