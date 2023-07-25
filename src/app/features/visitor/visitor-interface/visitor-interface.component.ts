import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from '../components/topbar/topbar.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-visitor-interface',
  standalone: true,
  imports: [CommonModule,RouterModule,TopbarComponent,NavbarComponent,FooterComponent],
  templateUrl: './visitor-interface.component.html',
  styleUrls: ['./visitor-interface.component.scss']
})
export class VisitorInterfaceComponent {

}
