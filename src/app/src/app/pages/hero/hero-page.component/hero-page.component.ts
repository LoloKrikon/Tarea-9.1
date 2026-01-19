import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page.component',
  imports: [],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
})
export class HeroPageComponent {
  // señales para el nombre y la edad del héroe
  name = signal('Ironman');
  age = signal(45);

  get heroName(): string {
    return this.name();
  }

  get heroAge(): number {
    return this.age();
  }

  //devuelve la info del personaje
  getHeroDescription(): string {
    return `${this.name()} - ${this.age()}`;
  }

  // cambia a Spiderman
  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  // vuelve a ser IronMan
  resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }

  // cambia solo la edad a 60
  changeAge(): void {
    this.age.set(60);
  }

  // mostrar el nombre (name) capitalizado en mayúscula sin crear una nueva señal
  capitalizeName(): void {
    this.name.update(name => name.toUpperCase());
  }
}
