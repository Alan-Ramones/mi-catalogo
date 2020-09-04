import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { AutosService } from '../autos.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  page = 1;
  pageSize = 10;
  collectionSize: number;
  autos: Automovil[];

  constructor(private autoService: AutosService) {}

  ngOnInit(): void {
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
      this.collectionSize = this.autos.length;
    });
  }
}
