import { Component, OnInit } from '@angular/core';
import {ProfileServiceService} from '../../services/profile-service.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'll-dashboard-index',
  templateUrl: './user-dashboard-index.component.html',
  styleUrls: ['./user-dashboard-index.component.scss']
})
export class UserDashboardIndexComponent implements OnInit {
  prescriptions = [];
  // prescriptions: any[];
  // tslint:disable-next-line:no-shadowed-variable
  constructor(public ProfileServiceService: ProfileServiceService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.prescriptions = [
      {
        id: '01',
        orderBy: 'Dr Samantha Fernando',
        productId: 'cdfsfe5d',
        created: '25.05.2023, 10:00',
        status: 'complated',
        price: 2145.0
      },
      {
        id: '02',
        orderBy: 'Dr Kasun Sadeera',
        productId: 'cdfsfe5d',
        created: '25.05.2023, 10:00',
        status: 'pending',
        price: 2145.0
      },
      {
        id: '03',
        orderBy: 'Dr Priyankara perera',
        productId: 'cdfsfe5d',
        created: '25.05.2023, 10:00',
        status: 'rejected',
        price: 2145.0
      },
      {
        id: '04',
        orderBy: 'Dr anjana wijesekara',
        productId: 'cdfsfe5d',
        created: '25.05.2023, 10:00',
        status: 'initialized',
        price: 2145.0
      },
      {
        id: '05',
        orderBy: 'Dr Loshitha hasaral',
        productId: 'cdfsfe5d',
        created: '25.05.2023, 10:00',
        status: 'complated',
        price: 2145.0
      }
    ];
  }

  // loadPrescriptions(): void {
  //   this.ProfileServiceService.getPrescriptions()
  //     .subscribe(
  //       prescriptions => this.prescriptions = prescriptions,
  //       error => console.log(error)
  //     );
  // }

  // loadPrescriptions() {
  //   this.profileServiceService.loadPrescriptions().subscribe((res: any) => {
  //
  //     res.body.forEach(e => {
  //         this.prescriptions.push(e);
  //     });
  //     this.setImageUrl();
  //   }, error => {
  //   });
  // }
  //
  // setImageUrl() {
  //   this.prescriptions.forEach((value, index) => {
  //     let objectURL = 'data:image/png;base64,' + value.postContent;
  //     this.prescriptions[index].logoUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
  //   });
  // }

}
