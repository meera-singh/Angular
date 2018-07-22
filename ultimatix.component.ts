import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { Employee } from './ultimatix';
import { UltimatixService } from '../ultimatix.service';

@Component({
  selector: 'app-ultimatix',
  templateUrl: './ultimatix.component.html',
  styleUrls: ['./ultimatix.component.css']
})
export class UltimatixComponent implements OnInit {

  constructor(private emplistdata: UltimatixService) { }
  @ Input () search1:any;
  @ Output () titleClicked:EventEmitter <string> = new EventEmitter <string> ();

  onClick(emp_name):void{
    this.titleClicked.emit(emp_name);
  }
  empList:Employee[]
  pageTitle = "Employee List Component"
  ngOnInit() {
    this.empList = this.emplistdata.getEmployees();
    console.log(this);

  }
  
}
