import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import { AppQuery, AppRun } from 'src/app/services/appService/schema/schema';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input()
  showNav: boolean = false;
  tableCols: any = [
    'name',
    'description',
    'added',
    'updated',
    'status',
  ];
  
  qry: QueryRef<any>;
  private querySubscription: Subscription;
  tasks: any = null



  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apollo: Apollo,
  ) {}
  ngOnInit(): void {

    this.qry = this.apollo.watchQuery<any>({
      query: AppQuery,
      pollInterval: 60000,
      variables: {
        api:"tasks",
        command:"getTasks",
        payload:{ 
            user:"jonnygold"
        }
      }
    });



    this.querySubscription = this.qry.valueChanges.subscribe(({ data, loading }) => {
      this.tasks = data.appQuery;
      console.log(this.tasks);
    }, (error) => {
  

    });


  }
}
