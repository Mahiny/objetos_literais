
function contaBancaria(numeroConta, tipoDeConta, saldo, titular) {
    this.numero = numeroConta;
    this.conta = tipoDeConta;
    this.saldo = saldo;
    this.titular = titular;
}

const ricardo = new contaBancaria(35002, "corrente", 25000,   "Ricardo Tani");

const abigaelNatte  = new contaBancaria(5486273622,	"Conta Corrente",	27771, 'Abigael Natte');

const ramonConnell = new contaBancaria(1183971869,	'Conta Poupança',	8675 , 'Ramon Connell');

const jarretLafuente = new contaBancaria(9582019689,	'Conta Poupança',	27363, 'Jarret Lafuente');

const anselArdley = new contaBancaria(1761924656,	'Conta Poupança',	32415, 'Ansel Ardley');

const jackiShurmer = new contaBancaria(7401971607,	'Conta Poupança',	18789, 'Jacki Shurmer');

const jobiMawtus = new contaBancaria(630841470,	'Conta Corrente',	28776, 'Jobi Mawtus');

const alonsoWannan = new contaBancaria(4223508636,	'Conta Corrente',	2177 , 'Thomasin Latour');

const thomasinLatour = new contaBancaria(185979521,	'Conta Poupança',	25994, 'Lonnie Verheijden');

const lonnieVerheijden = new contaBancaria(3151956165,	'Conta Corrente',	7601 , 'Alonso Wannan');

const benditeHuggett  = new contaBancaria(2138105881,	'Conta Poupança',	33196, 'Bendite Huggett');

const titulares = [ricardo, abigaelNatte,ramonConnell, anselArdley, jackiShurmer, jobiMawtus, alonsoWannan, thomasinLatour, lonnieVerheijden, benditeHuggett];


let banco = {
  clientes: titulares, 
    consultarContas(titular) {
        for (let i = 0; i < this.clientes.length; i++) {
            if (this.clientes[i].titular == titular) {
               console.log(this.clientes[i]);
            }
        }
    }
}
banco.consultarContas("Alonso Wannan");