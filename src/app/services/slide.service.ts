import { Injectable } from '@angular/core';

@Injectable()
export class SliderService {

    private slideImg:imgSlide[] = [
        {
          nombre: 'img1',
          url: 'assets/img/img1.jpg'
        },
        {
          nombre: 'img2',
          url: 'assets/img/img2.jpg'
        },
        {
          nombre: 'img3',
          url: 'assets/img/img3.jpg'
        }
      ];
    
    constructor() {
        console.log('Servicio listo');
    }

    public getImgs(){
        return this.slideImg;
    }

    public addImgs( img:imgSlide ){
      return this.slideImg.push(img);
    }
    
}

export interface imgSlide {
    nombre: string;
    url: string;
}