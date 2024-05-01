import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
  @Input() tableCols: any = null;
  @Input() tableData: any = null;
  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }
  openDialog(minWidth:number=500,maxHeight:number=750 ) {
    alert('open dialog')
     
    let dialogRef: any = this.dialog.open(DialogComponent, {
      minWidth: minWidth,
      maxHeight: maxHeight,
    
    });


    dialogRef.afterClosed().subscribe(result => {
 
     


    });
  }

}
