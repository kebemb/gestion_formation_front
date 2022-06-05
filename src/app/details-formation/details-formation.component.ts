import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';
import { Formation } from '../formation';
import { FormationService } from '../formation.service';

@Component({
  selector: 'app-details-formation',
  templateUrl: './details-formation.component.html',
  styleUrls: ['./details-formation.component.scss'],
})
export class DetailsFormationComponent implements OnInit {
  formation: Formation;
  id: string;
  employes: Observable<Employe[]>;

  constructor(
    public route: ActivatedRoute,
    public formationService: FormationService,
    private employeService: EmployeService,
  ) { }

  ngOnInit() {
    this.formation = new Formation();
    this.id = this.route.snapshot.params['id'];
    this.formationService.getOne(this.id)
    .subscribe(data => {this.formation = data});
    this.getAllEmployes();
  }

  getAllEmployes(){
    this.employes=this.employeService.getAll();
  }
}
