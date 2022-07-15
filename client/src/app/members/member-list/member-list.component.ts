import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/Member';
import { MembersService } from 'src/app/services/member.service';
=======
import { Member } from 'src/app/models/Member';
import { MemberService } from 'src/app/services/member.service';
>>>>>>> c69f7b656b78567f52dfb952d47101fb2b91fffb

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
<<<<<<< HEAD
  members$: Observable<Member[]>;

  constructor(private memberService: MembersService) { }


  ngOnInit(): void {
    this.members$ = this.memberService.getMembers();
=======
  members: Member[];

  constructor(private memberService: MemberService) { }


  ngOnInit(): void {
    this.loadMembers();
>>>>>>> c69f7b656b78567f52dfb952d47101fb2b91fffb
  }

  loadMembers() {
    this.memberService.getMembers().subscribe(members => {
      this.members = members;
      
    })
  }
}
