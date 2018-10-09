import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-things-to-remember',
  templateUrl: './things-to-remember.component.html',
  styleUrls: ['./things-to-remember.component.css']
})
export class ThingsToRememberComponent implements OnInit {
  title: String = 'Key points to remember as a developer'
  keypoints: Object[] = ['Asset exporting', 'Font settings', 'Measuring']

  constructor(private router: Router) {}

  ngOnInit() {}

  backToStart() {
    this.router.navigateByUrl('/')
  }
}
