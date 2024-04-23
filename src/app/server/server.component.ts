import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent implements OnInit {
  
  serverID = 10;
  status = "pffline";
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  UpdateServerName="TestServer ";
  serverCreated = false;
  server =['Testsever','Testsever2']

    constructor(){
      setTimeout(()=>{
        this.allowNewServer= true;
      },2000),
      this.status = Math.random()> 0.5 ? "Online": "Offline";

    }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }  
  // getStyle() {
  //   return this.serverID ? { 'color': 'blue' } : {};
  // }
  serveStatusColor(){
    // if(this.status === "Online"){
    //   return 'green';
    // }else{
    //   return 'red';
    // };
    return this.status === "Online"? "green":"red"
  }
  onCreateServer(){

    this.serverCreated = true;
    this.server.push(this.UpdateServerName)
     return this.serverCreationStatus = "Server is Created! Named as : \n"+ this.UpdateServerName;
  }
  onUpdateServerName(event:Event){
    this.UpdateServerName = (<HTMLInputElement>event.target).value;
  }

}
