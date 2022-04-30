var x = 5;

function myTest() {
  console.log("Testiram x = " + x);
  console.log("Testiram x = ${x}");

  console.log("Ucenik" + ucenik.ime + " " + ucenik.prezime);

  ucenik.printInfo();
}

function foo() {
  let x = 3;
}

var ucenik = {
    ime: "petar",
    prezime: "petrovic",
    printInfo: function() {
    document.write("ovo je metod ucenika");
  }
}