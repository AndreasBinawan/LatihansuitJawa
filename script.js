var tanya = true;
while (tanya) {

    // Menangkap pilihan user
    var p = prompt('Silahkan pilih: gajah, semut, orang');


    // Menangkap Pilihan Computer
    // Membangkitkan bilangan random
    var comp = Math.random();


    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    // Menentukan rules
    var hasil = '';

    if (p == comp) {
        hasil = 'SERI';
    } else if (p == 'gajah') {
        //if (comp == 'orang') {
        //   hasil = 'MENANG';
        //   } else {
        //hasil = 'KALAH';
        // }
        hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';
    } else if (p == 'orang') {
        hasil(comp == 'gajah') ? 'KALAH' : 'MENANG';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'Memasukan pilihan yang salah!';
    }

    // Menampilkan hasil
    alert('Kamu memilih : ' + p + ' dan komputer memilih: ' + comp + '\nMaka hasilnya : Kamu  ' + hasil);

    tanya = confirm('Main lagi?');
}

alert('Terima kasih sudah bermain');
