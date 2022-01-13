//Atividade de cadastro de eventos
// Verificar a data do evento, a idade dos participantes, o tipo de participante e a quantidades de participantes
//Atividade feita com while
let data_atual = '12/01/22';
let data_evento = '22/01/22';

if(data_evento > data_atual){
    console.log("Data do evento permitida!");
} else {
    console.log("Data inválida, cadastro não permitido!");
}

let idade = 23;

if(idade >= 18){
    console.log("Idade maior de 18 anos. Cadastro permitido!");
} else {
    console.log ("Menor de 18 anos, cadastro não permitido!");
}

let lista_tipo_usuarios = ["participante", "palestrante"];
let qtd_usuarios = lista_tipo_usuarios.length;
qtd_usuarios = 89;

while (qtd_usuarios < 100){
  console.log("Cadastro permitido. Usuário de número:",qtd_usuarios);
  qtd_usuarios+=100;
}

if(data_evento > data_atual && idade >=18 || qtd_usuarios <100){
      console.log("Obrigado! Seu Cadastro foi concluído com sucesso!");
}else{
      console.log("Seu cadastro não foi concluído. Verifique suas informações!");
}
