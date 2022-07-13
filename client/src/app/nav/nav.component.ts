import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  constructor(
    public accountService: AccountService, 
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountService.login(this.model).subscribe({
        next:(respond) =>{
          console.log(respond);
          this.router.navigate(['/members']);
        },
        error:(e) =>{
          console.log(e);
          
        }
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['/']);
  }

}
