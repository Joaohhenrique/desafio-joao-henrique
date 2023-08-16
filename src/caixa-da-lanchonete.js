let menu = ["cafe", "chantily", "suco", "sanduiche", "queijo", "salgado", "combo1", "combo2"];
let valoresMenu = [3.0, 1.5, 6.2, 6.5, 2.0, 7.25, 9.5, 7.5];

var codigos = [];
var quantidades = [];

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
     
        var codigoItens = [];
        var quantidadeItens = [];

        itens.forEach(splitItens);
        
        function splitItens(item) {
            codigoItens.push(item.split(",")[0]);
            quantidadeItens.push(item.split(",")[1]);
        }

        if(itens.length==0) {
            alert("Não há itens no carrinho de compra!");
            codigos = [];
            quantidades = [];
            return "Não há itens no carrinho de compra!";
        }

        for(var i=0; i<codigoItens.length; i++) {
            if(!menu.includes(codigoItens[i])) {
                alert("Item inválido!");
                codigos = [];
                quantidades = [];
                return "Item inválido!";
            }
        }

        if(codigoItens.includes("chantily")) {
            if(!codigoItens.includes("cafe")) {
                alert("Item extra não pode ser pedido sem o principal!");
                codigos = [];
                quantidades = [];
                return "Item extra não pode ser pedido sem o principal";
            }
        }

        if(codigoItens.includes("queijo")) {
            if(!codigoItens.includes("sanduiche")) {
                alert("Item extra não pode ser pedido sem o principal!");
                codigos = [];
                quantidades = [];
                return "Item extra não pode ser pedido sem o principal";
            }
        }

        if(quantidadeItens.includes("0") || quantidadeItens.includes("")) {
            alert("Quantidade inválida!");
            codigos = [];
            quantidades = [];
            return "Quantidade inválida!";
        }

        switch(metodoDePagamento) {
            case "dinheiro":
                alert("R$ " + (this.somaPedido(codigoItens, quantidadeItens)*0.95).toFixed(2).toString().replace(".",","));
                codigos = [];
                quantidades = [];
                return "R$ " + (this.somaPedido(codigoItens, quantidadeItens)*0.95).toFixed(2).toString().replace(".",",");
            case "debito":
                alert("R$ " + (this.somaPedido(codigoItens, quantidadeItens)).toFixed(2).toString().replace(".",","));
                codigos = [];
                quantidades = [];
                return "R$ " + (this.somaPedido(codigoItens, quantidadeItens)).toFixed(2).toString().replace(".",",");
            case "credito":
                alert("R$ " + (this.somaPedido(codigoItens, quantidadeItens)*1.03).toFixed(2).toString().replace(".",","));
                codigos = [];
                quantidades = [];
                return "R$ " + (this.somaPedido(codigoItens, quantidadeItens)*1.03).toFixed(2).toString().replace(".",",");
            default:
                alert("Forma de pagamento inválida!");
                return "Forma de pagamento inválida!";
        }

        return "";
    }

    somaPedido(codigoItens, quantidadeItens) {
        var soma = 0;
        var indiceMenu;

        for(var i=0; i<codigoItens.length; i++) {
            indiceMenu = menu.indexOf(codigoItens[i]);
            soma += valoresMenu[indiceMenu]*quantidadeItens[i];
        }
        return soma;
    }
}
export { CaixaDaLanchonete };

(function () {
    function adicionarItens() {
        var codigo;
        var quantidade;
        
            codigo = prompt("Digite o codigo do item");

            quantidade = prompt("Digite a quantidade do item");
            
            codigos.push(codigo);
            quantidades.push(quantidade);

        console.log(codigos);
        console.log(quantidades);
    }
    document.addEventListener('DOMContentLoaded', function () {
        var button = document.getElementById('adicionarItens');
        button.addEventListener('click', adicionarItens, true);
    });
    }
  )();

(function () {
    function calcularValor() {
        var metodoDePagamento = prompt("Escolha uma forma de pagamento (dinheiro/debito/credito)");
        var itens = [];
        for(var i=0; i<codigos.length; i++) {
            itens.push(codigos[i] + "," + quantidades[i]);
        }
        new CaixaDaLanchonete().calcularValorDaCompra(metodoDePagamento, itens);
    }
  
    document.addEventListener('DOMContentLoaded', function () {
        var button = document.getElementById('calcularValor');
        button.addEventListener('click', calcularValor, true);
    });
    }
)();