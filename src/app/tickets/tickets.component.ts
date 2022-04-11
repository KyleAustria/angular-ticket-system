import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  userService: any;
  http: any;
  id: any;
  route: any;


  constructor(private _ticketService:TicketService, private spinner: NgxSpinnerService) { }

  tickets : any = "";




  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
    this._ticketService.getAll().subscribe(

      (tickets : any) => {
        console.log(tickets);
        this.tickets = tickets;
        this.spinner.hide();
      }, 1600);
      }
    )






  }

  delTicket(id : any){

    this._ticketService.deleteTicket(id).subscribe((data : any)=>{
         console.log("success");
    });
}

}
