import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";
import { NavbarComponent } from './navbar/navbar';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, NavbarComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class LayoutComponent {

}
