import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {


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

}
