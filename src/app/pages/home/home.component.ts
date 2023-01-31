import { Component, OnInit } from '@angular/core';

// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.type();
  }

  type() {
    const target = document.querySelector('.typing-text');

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: '#03c988',
    });

    writer
      .type('Web Development')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(15)

      .type('UI/UX Design')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(13)
      .type('Software Engineering')
      .rest(500)
      .clear()
      .start();
  }
}
