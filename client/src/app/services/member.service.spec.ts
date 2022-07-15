import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { MembersService } from './member.service';

describe('MemberService', () => {
  let service: MembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembersService);
=======
import { MemberService } from './member.service';

describe('MemberService', () => {
  let service: MemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberService);
>>>>>>> c69f7b656b78567f52dfb952d47101fb2b91fffb
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
