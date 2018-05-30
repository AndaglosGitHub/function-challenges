processSentence = (name, age, addres, hobby) => {
	return `Nama Saya ${name}, Umur Saya ${age} Tahun, Alamat Saya ${addres}, dan Saya Punya Hobi Yaitu ${hobby}!`
}

var name	= "Rama";
var age		= 21;
var address	= "Jl. Raya Kedaton Bandar Lampung";
var hobby	= "Membaca Manga";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 
// Nama Saya Rama, Umur Saya 21 Tahun, Alamat Saya Jl. Raya Kedaton Bandar Lampung, dan Saya Punya Hobi Yaitu Membaca Manga!