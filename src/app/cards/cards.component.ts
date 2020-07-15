import { Component, OnInit } from '@angular/core';
import { CovidService } from '../services/covid.service';
import { Observable } from 'rxjs';
import { Covid } from '../model/covid';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  info$: Observable<any>

  covids = {} as Covid;
  covid: Covid[];

  constructor(private service: CovidService) { }

  ngOnInit(): void {
    this.getInfoPais();
  }

  getInfoPais(){
    this.info$ = this.service.getInfo();
    // this.service.getInfo().subscribe(
    //   (covid: Covid[])=>{
    //    this.covid = covid;
    //    console.log(covid)
    //   });
  }

}
