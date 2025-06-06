import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import {CdkDrag, CdkDropList, DragDropModule} from '@angular/cdk/drag-drop';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DragDropModule,
    CdkDrag,
    NgFor,
    CdkDropList,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  exports:[
    CommonModule,
    DragDropModule,
    CdkDrag,
    NgFor,
    CdkDropList,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule { }
