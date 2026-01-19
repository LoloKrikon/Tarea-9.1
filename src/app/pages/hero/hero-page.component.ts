import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hero-page',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './hero-page.component.html',
    styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {

    name = signal('Ironman');
    age = signal(45);

    getHeroDescription = computed(() => {
        return `${this.name()} - ${this.age()}`;
    });

    changeHero() {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    resetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }

    changeAge() {
        this.age.set(60);
    }

}
