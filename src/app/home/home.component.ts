import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DepartementService } from '../departement.service';
import { Employe } from '../employe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  employes:Observable<Employe[]>;
  nbdepartement: number;

  constructor(
    private router: Router,
    private departementService:DepartementService

  ) {

  }
  ngOnInit() {
    this.departementService.getAll().subscribe
    ((data) => {
      this.nbdepartement = data.length;
      return this.nbdepartement;
    }, (err) => {
        console.log("not allowed");
    });
  }
  departements(){
    this.router.navigate(['departement']);
  }
}
