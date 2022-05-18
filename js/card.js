
import{readalunos,creataluno}from'./consumoapi.js';

class card extends HTMLElement {
    constructor(){
         super();

         this.build()
    }

    build(){
           const shadow = this.attachShadow({mode:'open' });
           shadow.appendChild(this.styles());
           shadow.appendChild(this.creatCard());   
    }

  styles(){
    const style = document.createElement('style');
    style.textContent = `
    
        .card{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        width: ${this.tamanhocard()};
        height: ${this.tamanhocard()};
        background-color: ${this.bgcolor()};
        border-radius: 2rem;
        margin-bottom: 5px;
        box-shadow: 1px 1px 20px #000;
        }
        
        .card-text{
        width: 50%;
        padding: 4px;
        text-align: center;
        color: #ffff;
        text-transform: uppercase;
        border-radius: 10px;
        box-shadow: 0 0 50px #000;
        
        }
        
        .card-img{
        width: 50%;
        height: 50%;
        background-color: #ffff;
        border-radius: 50%;
        box-shadow: 0 0 0px #000;
        background-size: cover;
        background-image: url(${this.bgimg()});
        }
        
    }
    
    `

    return style;
  }


  creatCard(){



       const div = document.createElement('div');
       div.classList.add('card');
    div.innerHTML = `

        <div class="card">
        <div class="card-text">${this.texttitle()}</div>
        <div class="card-img"></div>
        <div class="card-text">${this.textfooter()}</div>
        </div> 
    
    `   
       

       return div;
  }

bgcolor(){
    const color = this.getAttribute('data-color')??'#de1223';

    return color;
}

texttitle(){
     
    const text = this.getAttribute('data-texttitle')??'Ttile';

    return text;

}

textfooter(){

    const text = this.getAttribute('data-textfooter')??'DS2T';
    
    return text;

}

bgimg(){
    const img = this.getAttribute('data-img')??'./img/semimg.png';

    return img;
}

tamanhocard(){
    const tamanho = this.getAttribute('data-wh')??'250px';

    
    return tamanho;
}


}


// https://api-senai.herokuapp.com/alunos



customElements.define('card-aluno',card)


