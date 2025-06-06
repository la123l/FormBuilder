import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPreviewComponent } from './form-preview/form-preview.component';

import { HomeComponent } from './home/home.component';
import { FormBuilderEditorComponent } from './form-builder-editor/form-builder-editor.component';

const routes: Routes = [
  { path: '', redirectTo: 'editor', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'editor', component: FormBuilderEditorComponent },
  { path: 'preview/:id', component: FormPreviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBuildersRoutingModule { }
