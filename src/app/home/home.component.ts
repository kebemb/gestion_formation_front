import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartementService } from '../departement.service';
import { EmployeService } from '../employe.service';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  
  nbdepartement: number;
  nbemployes: number;
  nbformations: number;

  constructor(
    private router: Router,
    private departementService:DepartementService,
    private employeService: EmployeService,
    private formationService: FormationService,

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

    this.employeService.getAll().subscribe
    ((data) => {
      this.nbemployes = data.length;
      return this.nbemployes;
    }, (err) => {
        console.log("not allowed");
    });

    this.formationService.getAll().subscribe
    ((data) => {
      this.nbformations = data.length;
      return this.nbformations;
    }, (err) => {
        console.log("not allowed");
    });
  }
  departements(){
    this.router.navigate(['departement']);
  }

  formations(){
    this.router.navigate(['formation']);
  }

  employes(){
    this.router.navigate(['employe']);
  }
}
