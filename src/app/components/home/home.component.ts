import { Component, OnInit } from '@angular/core';

import { SliderService, imgSlide } from '../../services/slide.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  private imgs:imgSlide[] = [];
  private title:string = 'Insercion de archivos desde la carpeta /recursos';
  private type:number = 1;

  private urlAux:string = '';

  constructor(private _servicioSlider:SliderService ) {
    this.getImagenes();
    
  }

  ngOnInit() { 
    this.previsualizar();
  }

  getImagenes(){
    return this.imgs = this._servicioSlider.getImgs();
  }

  newImagen(){
    let url_img = null;
    if( this.type === 1){
      url_img =  this.urlAux;
    }else{
      url_img =  document.forms["addForm"].elements[1].value;
    }
    console.log(url_img);
    let objImg:imgSlide = {
      nombre: `img${this.imgs.length+1}`,
      url: url_img
    }
    this.eliminarPrev();
    this._servicioSlider.addImgs(objImg);
    this.getImagenes();
    Swal.fire(
      'Saved successfully!',
      'The img was saved correctly!',
      'success'
    )
  }

  previsualizar(){
    try {
      document.getElementById("input-file").onchange = (e:any) => {
        // Creamos el objeto de la clase FileReader
        let reader = new FileReader();
        // Leemos el archivo subido y se lo pasamos a nuestro fileReader
        if(e.target.files[0] != null ){
          reader.readAsDataURL(e.target.files[0]);
          console.log(e.target.files[0]);
          this.urlAux = `assets/img/${e.target.files[0].name}`
          // Le decimos que cuando este listo ejecute el código interno
          reader.onload = () => {
            let preview = document.getElementById('preview');
            /* this.eliminarPrev(); */
            let image:any = document.createElement('img');
            image.classList.remove("img-prev");
            image.className += "img-prev";
            image.src = reader.result;
            preview.innerHTML = '';
            preview.append(image);
          }
        }
        
      }
    } catch (error) { 
    }
  }
  eliminarPrev(){
    let preview:any = document.getElementById('preview');
    preview.value = '';
    while (preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }
  }
  cambiaInputs(value:number){
    this.type = value;
    if(value == 1){
      this.title = 'Insercion de archivos desde la carpeta /recursos de este proyecto';
      let btn1:any = document.getElementById('btn-1');
      let btn2:any = document.getElementById('btn-2');
      let input1:any = document.getElementById('input-file');
      input1.disabled  = false;
      btn1.classList.add('active');
      btn1.disabled  = false;
      btn2.classList.remove('active');
      this.eliminarPrev();
    }else{
      this.title = 'Insercion por URL //images.ctfassets.net/quwowz3.jpg';
      let btn1:any = document.getElementById('btn-1');
      let btn2:any = document.getElementById('btn-2');
      let input1:any = document.getElementById('input-file');
      input1.disabled  = true;
      btn2.classList.add('active');
      btn1.classList.remove('active');
      this.eliminarPrev();
    }
  }
  previsualizarURL(){
    try {
      let input2:any = document.getElementById('input-file2');
      let preview = document.getElementById('preview');
      /* this.eliminarPrev(); */
      let image:any = document.createElement('img');
      image.classList.remove("img-prev");
      image.className += "img-prev";
      image.src = input2.value;
      preview.innerHTML = '';
      preview.append(image);
    } catch (error) {
        
    }
  }

}
