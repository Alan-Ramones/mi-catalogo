import { Component, OnInit } from '@angular/core';
import { AUTOMOVILES } from '../data';
import { Automovil } from '../models';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  autos: Automovil[];
  autoSeleccionado: Automovil;
  
  closeResult = '';
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.autos = AUTOMOVILES;
  }

  open(auto: Automovil, content){
    this.modalService.open(content, { centered: true });
    this.autoSeleccionado = auto;
  }
}