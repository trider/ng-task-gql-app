import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }
  openDialog() {
    // this.dialog.open(DialogComponent);
  }

}
