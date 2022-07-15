import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
=======
>>>>>>> c69f7b656b78567f52dfb952d47101fb2b91fffb
import { environment } from 'src/environments/environment';
import { Member } from '../models/Member';



@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class MembersService {
  members: Member[] = [];
=======
export class MemberService {
>>>>>>> c69f7b656b78567f52dfb952d47101fb2b91fffb
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getMembers() {
<<<<<<< HEAD
    if (this.members.length > 0) return of(this.members);
    return this.http.get<Member[]>(this.baseUrl + 'users').pipe(
      map(members => {
        this.members = members;
        return members;
      })
    )
  }

  getMember(username: string) {
    const member = this.members.find(x => x.username === username);
    if (member !== undefined) return of(member);
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }

  updateMember(member: Member) {
    return this.http.put(this.baseUrl + 'users', member).pipe(
      map(() => {
        const index = this.members.indexOf(member);
        this.members[index] = member;
      })
    )
  }
=======
    return this.http.get<Member[]>(this.baseUrl + 'users');
  }

  getMember(username: string) {
    return this.http.get<Member>(this.baseUrl + 'users/' + username);
  }
>>>>>>> c69f7b656b78567f52dfb952d47101fb2b91fffb
}
