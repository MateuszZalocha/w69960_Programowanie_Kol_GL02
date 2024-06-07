function Książki(tytul, rok_wydania, imie_autora, nazwisko_autora) {
    this.tytul = tytul;
    this.rok_wydania = rok_wydania;
    this.imie_autora = imie_autora;
    this.nazwisko_autora = nazwisko_autora;
}

const Książka1 = new Książki('Potop', 1886, 'Henryk', 'Sienkiewicz');
const Książka2 = new Książki('Ten Obcy', 1961, 'Irena', 'Jurgielewiczowa');
const Książka3 = new Książki('Kamienie na szaniec', 1943, 'Aleksander', 'Kamiński');
const Książka4 = new Książki('Lokomotywa', 1936, 'Julian', 'Tuwim');

const Książka = [Książka1, Książka2, Książka3, Książka4]

function Książkainfo(Książki) {
    return Książki.imie_autora + Książki.nazwisko_autora
}


Książka.forEach(element => {
    if(element.rok_wydania === 1961) {
        console.log(`${element.tytul} + ${element.imie_autora} + ${element.nazwisko_autora}`);
    }
});

