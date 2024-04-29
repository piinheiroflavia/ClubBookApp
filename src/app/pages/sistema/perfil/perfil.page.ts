import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slideOpt ={
    direction: 'vertical',
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
    }
  }
}
