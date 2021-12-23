import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public usersList: any[]=[];
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getUserList().subscribe((res: any) => {
      this.usersList.push(...res);
    })
  }

}
