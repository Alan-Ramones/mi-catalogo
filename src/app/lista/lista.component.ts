import { Component, OnInit } from '@angular/core';
import { Automovil } from '../models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../autos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  page = 1;
  pageSize = 10;
  collectionSize: number;
  autos: Automovil[];
  autoSeleccionado: Automovil;
  
  closeResult = '';
  constructor(private modalService: NgbModal,
              private autoService: AutosService) { }

  ngOnInit(): void {
    this.autoService.getAutos().subscribe((response)=>{
      this.autos = response.data;
      this.collectionSize = this.autos.length;
    });
  }

  open(auto: Automovil, content){
    this.modalService.open(content, { centered: true });
    this.autoSeleccionado = auto;
  }
}