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
  title:string = "Add Task";
  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }
  openModal(content, title:string, item:any = null) {
    this.title = title;
    this.modalService.open(content, { size: 'lg', scrollable: true })
  }
}
