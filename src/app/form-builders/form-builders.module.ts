import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuildersRoutingModule } from './form-builders-routing.module';
import { HomeComponent } from './home/home.component';
import { FormBuilderEditorComponent } from './form-builder-editor/form-builder-editor.component';
import { MaterialModule } from './material/material.module';
import { NgxResizerDirective } from './material/resizeble';
import { ConfrigurationPanelComponent } from './confriguration-panel/confriguration-panel.component';
import { FormPreviewComponent } from './form-preview/form-preview.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    FormBuilderEditorComponent,
    NgxResizerDirective,
    ConfrigurationPanelComponent,
    FormPreviewComponent
  ],
  imports: [
    CommonModule,
    FormBuildersRoutingModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class FormBuildersModule { }
