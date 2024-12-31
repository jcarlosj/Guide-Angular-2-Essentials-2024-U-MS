import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './ui/card/card.component';



@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [ CardComponent ],   /** Exporta Caracteristicas de este modulo que deseamos implementar en otros modulos */
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
