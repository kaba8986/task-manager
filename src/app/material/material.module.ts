import { NgModule } from '@angular/core';
import { MatButtonModule}  from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const materialComponents = [MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSidenavModule, MatToolbarModule];


@NgModule({
  declarations: [],
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
