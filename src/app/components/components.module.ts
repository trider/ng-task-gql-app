import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { FooterComponent } from './footer/footer.component';
import { DatePipe } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbNavModule,
    MatDialogModule,
    NgbModule,
    NgxDocViewerModule,
    DatePipe
  ],
  declarations: [
    NavbarComponent,
    TableComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    TableComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
