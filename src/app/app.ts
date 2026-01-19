import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public title: string = 'App con angular';

  public count: number = 10;


  increment(): void {
    this.count += 1;
  }

  decrement(): void {
    this.count -= 1;
  }
}
