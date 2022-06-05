import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Departement } from '../departement';
import { DepartementService } from '../departement.service';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-details-employe',
  templateUrl: './details-employe.component.html',
  styleUrls: ['./details-employe.component.scss'],
})
export class DetailsEmployeComponent implements OnInit {
  employe: Employe;
  id: string;
  departements: Observable<Departement[]>;

  constructor(
    public route: ActivatedRoute,
    public employeService: EmployeService,
    private departementService:DepartementService,
  ) { }

  ngOnInit() {
    this.employe = new Employe();
    this.id = this.route.snapshot.params['id'];
    this.employeService.getOne(this.id)
    .subscribe(data => {this.employe = data});
    this.getAllDepartement();
  }

  getAllDepartement(){
    this.departements=this.departementService.getAll();
  }
}
