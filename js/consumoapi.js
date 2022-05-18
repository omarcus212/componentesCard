'use strich'

/// nao sei fazer consumo de api:

const url =  `https://api-senai.herokuapp.com/alunos`;

const readalunos  = async (id = '') =>{

    const reponse = await fetch (`${url}/${id}`);

     return reponse;
     
  
}





/// nao sei fazer consumo de api:

const creataluno = async (aluno) =>{
           const alunos ={
               method:'POST',
               body: JSON.stringify(aluno),
               headers:{
                       'content-type':'application/json'    
               }
           }
           const reponse = await fetch(url,alunos);
           console.log(reponse.ok);
}

/// nao sei fazer consumo de api:

export{
    readalunos,
    creataluno
};

/// nao sei fazer: