// pilihan komputer
function getpilihanKomputer() {
    const comp = Math.random();

    if(comp < 0.34) return 'gajah';
    if(comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

// rules
function getHasil(comp, player) {
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

// set time out putar gambar
function putar() {
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0; // make let karena isinya akan berubah 2
    const waktuMulai = new Date().getTime()
    setInterval(function() {
        if(new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return
        }
      imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
      if(i == gambar.length) i = 0;
    }, 100);
}

//event
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function() {
        const pilihanKomputer = getpilihanKomputer();
         const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanKomputer, pilihanPlayer);

        putar();

        setTimeout(function() {
           const imgComputer = document.querySelector('.img-komputer');
           imgComputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');
   
           const info = document.querySelector('.info');
           info.innerHTML = hasil;
        }, 1000);

    });
});

// event
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     const pilihanKomputer = getpilihanKomputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer)

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });
// ini cara yang kurang efektif karena hanya mengulang apa yang kita lakukan






























