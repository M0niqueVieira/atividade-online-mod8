//Atividade de cadastro de eventos
// Verificar a data do evento, a idade dos participantes, o tipo de participante e a quantidades de participantes
//Atividade feita com If/Else
let data_atual = '13/01/22';
let data_evento = '23/01/22';

if(data_evento > data_atual){
    console.log("Data do evento permitida!");
} else {
    console.log("Data inválida, cadastro não permitido!");
}

let idade = 27;

if(idade >= 18){
    console.log("Idade maior de 18 anos. Cadastro permitido!");
} else {
    console.log ("Menor de 18 anos, cadastro não permitido!");
}

let lista_tipo_usuarios = ["participante", "palestrante"];
let qtd_usuarios = lista_tipo_usuarios.length;
qtd_usuarios = 98;

if (qtd_usuarios < 100){
    lista_tipo_usuarios.push("participante");
    console.log(lista_tipo_usuarios)
}else{
    console.log("Limite de participantes excedido. Não é possível cadastrar!");
}
if(data_evento > data_atual && idade >=18 || participante <100){
      console.log("Obrigado! Seu Cadastro foi concluído com sucesso!");
}else{
      console.log("Seu cadastro não foi concluído. Verifique suas informações!");
}
