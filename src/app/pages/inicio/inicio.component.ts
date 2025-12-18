import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/layouts/header/header.component';
import { CardComponent } from "../../components/shared/card/card.component";

@Component({
  selector: 'app-inicio',
  imports: [CardComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
