import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Member } from 'src/app/models/Member';
<<<<<<< HEAD
import { MembersService } from 'src/app/services/member.service';
=======
import { MemberService } from 'src/app/services/member.service';
>>>>>>> c69f7b656b78567f52dfb952d47101fb2b91fffb

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  member: Member;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
<<<<<<< HEAD
  constructor(
    private memberService: MembersService, 
    private route: ActivatedRoute,
    ) { }
=======
  constructor(private memberService: MemberService, private route: ActivatedRoute) { }
>>>>>>> c69f7b656b78567f52dfb952d47101fb2b91fffb

  ngOnInit(): void {
    this.loadMember();
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ]
  }
  getImages(): NgxGalleryImage[] {
    const imageUrls = [];
    for (const photo of this.member.photos) {
      imageUrls.push({
        small: photo?.url,
        medium: photo?.url,
        big: photo?.url
      })
    }
    return imageUrls;
<<<<<<< HEAD
  }
  loadMember() {
    this.memberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member => {
      this.member = member;
      this.galleryImages = this.getImages();
    })
  }


=======
  }
  loadMember() {
    this.memberService.getMember(this.route.snapshot.paramMap.get('username')).subscribe(member => {
      this.member = member;
      this.galleryImages = this.getImages();
    })
  }
>>>>>>> c69f7b656b78567f52dfb952d47101fb2b91fffb
}
