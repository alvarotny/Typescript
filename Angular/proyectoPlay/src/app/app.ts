import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//@Component Le indica a angular q la clase sera un componente  y debe manejar html,css
//@Injectable >= Permite q los servicios sean inyectados automaticamente en otras aplicaciones sin la nesecidad de volverlos a crear
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyectoPlay');
}
