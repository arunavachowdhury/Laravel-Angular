import { SnotifyService } from 'ng-snotify';
import { JarwisService } from './../../Services/jarwis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email: null
  };

  constructor(private Jarwis: JarwisService,
              private notify: SnotifyService
    ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.Jarwis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
      
    );
  }

  handleResponse(res:any){
    console.log(res);
    
    this.form.email = null;
  }
}
