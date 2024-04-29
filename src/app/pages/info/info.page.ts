import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSegmentChange(event: CustomEvent) {
    const valorDoSegmento = event.detail.value;
  
    // Obter referências aos elementos dos blocos
    const bloco1 = document.getElementById("bloco1");
    const bloco2 = document.getElementById("bloco2");
    const bloco3 = document.getElementById("bloco3");
  
    // Verificar se os elementos foram encontrados antes de acessá-los
    if (bloco1 && bloco2 && bloco3) {
      // Ocultar todos os blocos
      bloco1.style.display = 'none';
      bloco2.style.display = 'none';
      bloco3.style.display = 'none';
  
      // Mostrar o bloco correspondente ao ícone selecionado
      switch (valorDoSegmento) {
        case 'heart1':
          bloco2.style.display = 'block';
          bloco1.style.display = 'none';
          bloco3.style.display = 'none';
          break;
        case 'heart2':
          bloco1.style.display = 'block';
          bloco2.style.display = 'none';
          bloco3.style.display = 'none';
          break;
        case 'heart3':
          bloco3.style.display = 'block';
          bloco2.style.display = 'none';
          bloco1.style.display = 'none';
          break;
        default:
          break;
      }
    }
  }
  
  // onClickBotao(event: any) {
  //   const idDoBotaoClicado = event.target.id;
  //   console.log('ID do botão clicado:', idDoBotaoClicado);
  // }

}
