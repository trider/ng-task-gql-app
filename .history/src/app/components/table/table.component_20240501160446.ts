import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormGroup, UntypedFormControl } from '@angular/forms';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { AppRun } from 'src/app/services/appService/schema/schema';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input()
  @Input() tableCols: any = null;
  @Input() tableData: any = null;
  user:any = JSON.parse(sessionStorage.getItem('user') || '{}');

  taskForm = new UntypedFormGroup({
    user: new UntypedFormControl(this.user.userName),
    name: new UntypedFormControl(''),
    description: new UntypedFormControl(''),
    status: new UntypedFormControl('do'),
  });

  title:string = "Add Task";
  item:any = null;
  constructor(
    private modalService: NgbModal,
    private apollo: Apollo,
  ) { }

  ngOnInit(): void {
  }
  openModal(content, title:string, item:any = null) {
    this.title = title;
    if(item !== null)this.item = item;
    this.modalService.open(content, { size: 'sm', scrollable: true })
  }

  onSubmit(){
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.taskForm.value, null, 4));
    this.modalService.dismissAll();
  }

  performAction(){
    this.apollo.mutate({
      mutation: AppRun,
      variables: {
        api:"users",
        command:"login",
        payload: {
          email: payloadData.email,
          password: payloadData.password
        }
  
      }
    }).subscribe((resp) => {

      sessionStorage.setItem('user', JSON.stringify(resp.data['appRun']));
      this.router.navigate(['/main/home']);
      
     


    }, (error) => {
      console.log(error);
    });

  }


  deleteItem(item:any){
    this.tableData = this.tableData.filter((i:any) => i !== item);
  }
}
