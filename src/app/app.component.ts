import { Component } from '@angular/core';

// other components
import { CounterComponent } from './components/counter.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [CounterComponent]
})
export class AppComponent {
  title = 'app works!';
}