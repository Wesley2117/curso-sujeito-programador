// switch

function pedir () {
  //alert("seu pedido sai em 3 minutos ")
  var valor = prompt("Digite um valor de 1 a 4");

  //console.log(typeof Number (valor));
  switch(Number(valor)){
    case 1:
      alert("Seu pedido sai em 3 minutos");
      break;
    case 2:
      alert("Seu pedido sai em 2 minutos");
      break;
    case 3:
      alert("Seu pedido sai em 1 minuto");
      break;
    case 4:
      alert("Seu pedido sai agora");
      break;
    default:
      alert("Opção inválida");
      break;
  }

}