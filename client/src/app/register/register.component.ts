import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Output() cancelRegister = new EventEmitter();
  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe({
      next: (respond) => {
        console.log(respond);
        this.cancel();
      },
      error: (err) => {
        console.log(err);
        this.toastr.error(err.error);
      }

    })
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
