// memanggil elemen form menggunakan query selector dan ditampung di dalam variable form
const form = document.getElementById('masukan')

// function untuk mengecek value apakah bernilai kosong atau tidak
function input_kosong(e){
	// jika parameter e bernilai string kosong maka function ini akan di retrun true
	if (e == ""){
		return true
	// jika parameter e tidak bernilai string kosong maka function ini akan di retrun false
	} else {
		return false
	}
}

// ketika form di submit, eventListener ini akan menjalankan suatu function anonymous(tanpa nama) dengan parameter abc
form.addEventListener("submit", function(abc){
	// Mencegah form dikirim dan harus melalui pengecekan terlebih dahulu
	abc.preventDefault()

	// VALIDASI INPUTAN NAMA LENGKAP
	//  memanggil elemen html yang mempunyai class alfabet pada html dan di tampung ke dalam variable alfabet_alert 
	const alfabet_alert = document.querySelector(".alfabet")
	// memanggil value dari inputan yang mempunyai name = nama yang berada didalam form
	const username_value = form.name.value
	// regex untuk mengecek inputan berupa alfabet atau tidak, dan apakah ada spasi yang diapit oleh alfabet
	const alphabet = /^([a-zA-Z]+|[a-zA-Z]+[ ][a-zA-Z]+)+$/
	// Jika value dari inputan nama bernilai kosong maka code di bawah ini akan di eksekusi
	if (input_kosong(username_value)){
		// mengubah border inputan menjadi tabalnya 2px jenis garis solid dan berwarna merah
		form.name.style.border = "2px solid red"
		// Mengganti text pada elemen html yang telah di panggil dan ditampung pada variable alfabet_alert
		alfabet_alert.textContent = "Inputan tidak boleh kosong!!"
	// Jika hasil test value dari inputan bernilai false maka akan di not yang dilambangkan dengan tanda ! dan code dibawah akan dijalankan
	}else if (!alphabet.test(username_value)){
		// mengubah border inputan menjadi tabalnya 2px jenis garis solid dan berwarna merah
		form.name.style.border = "2px solid red"
		// Mengganti text pada elemen html yang telah di panggil dan ditampung pada variable alfabet_alert
		alfabet_alert.textContent = 'Format inputan hanya boleh berupa alfabet tanpa diakhiri atau diawali dengan spasi!!'
	// Jika panjang inputan kurang dari 3 maka code di bawah akan di jalankan
	}else if(username_value.length < 3){
		// mengubah border inputan menjadi tabalnya 2px jenis garis solid dan berwarna merah
		form.name.style.border = "2px solid red"
		// Mengganti text pada elemen html yang telah di panggil dan ditampung pada variable alfabet_alert
		alfabet_alert.textContent = 'Inputan minimal harus berjumlah 3 karakter!!'
	// Jika selain dari 3 kondisi tadi tidak terpenuhi maka perkondisian else akan dijalankan
	}else{
		// mengubah border inputan menjadi tabalnya 2px jenis garis solid dan berwarna berupa format heksadesimal dari warna hijau
		form.name.style.border = "2px solid #00DE46"
		// Mengubah text pada elemen html yang telah di panggil dan ditampung pada variable alfabet_alert menjadi string kosong
		alfabet_alert.textContent = ""	
	}

// VALIDASI INPUTAN PILIHAN GENDER
	//  memanggil elemen html yang mempunyai class radios pada html dan di tampung ke dalam variable radio_alert
	const radio_alert = document.querySelector(".radios")
	// memanggil value dari inputan yang mempunyai name = via yang berada didalam form
	const radio = form.via.value
	// Jika value dari inputan bernama via bernilai kosong maka code di bawah ini akan di eksekusi
	if (input_kosong(radio)){
		// Mengganti text pada elemen html yang telah di panggil dan ditampung pada variable radio_alert
		radio_alert.textContent = "Wajib memilih salah satu!!"
	// Jika selain dari kondisi diatas tidak terpenuhi maka perkondisian else akan dijalankan
	} else {
		// Mengubah text pada elemen html yang telah di panggil dan ditampung pada variable radio_alert menjadi string kosong
		radio_alert.textContent = ""
	}

// VALIDASI DROPDOWN TINGKAT KESULITAN
	//  memanggil elemen html yang mempunyai class dropdowns pada html dan di tampung ke dalam variable dropdown_alert
	const dropdown_alert = document.querySelector(".dropdowns")
	// memanggil value dari inputan yang mempunyai name = kategori yang berada didalam form
	const dropdown_value = form.kategori.value
	// Jika value dari inputan bernama kategori bernilai kosong maka code di bawah ini akan di eksekusi
	if (input_kosong(dropdown_value)){
		// mengubah border inputan menjadi tabalnya 2px jenis garis solid dan berwarna merah
		form.kategori.style.border = "2px solid red"
		// Mengganti text pada elemen html yang telah di panggil dan ditampung pada variable dropdown_alert
		dropdown_alert.textContent = "Wajib memilih salah satu!!"
	// Jika selain dari kondisi diatas tidak terpenuhi maka perkondisian else akan dijalankan
	}else{
		// mengubah border inputan menjadi tabalnya 2px jenis garis solid dan berwarna berupa format heksadesimal dari warna hijau
		form.kategori.style.border = "2px solid #00DE46"
		// Mengubah text pada elemen html yang telah di panggil dan ditampung pada variable dropdown_alert menjadi string kosong
		dropdown_alert.textContent = ''
	}

// VALIDASI INPUTAN EMAIL
	//  memanggil elemen html yang mempunyai class Email pada html dan di tampung ke dalam variable email_alert
	const email_alert = document.querySelector(".Email")
	// memanggil value dari inputan yang mempunyai name = email yang berada didalam form
	const email_value = form.email.value
	// regex untuk mengecek inputan telah sesuai dengan format email apa tidak
	const cekEmail = /^[a-z\d]+(\.[a-z\d]+)*@[a-z\d\-]+(\.[a-z\d]+)*\.[a-z]{2,}$/i
	// Jika value dari inputan bernama kategori bernilai kosong maka code di bawah ini akan di eksekusi
	if (input_kosong(email_value)){  
		// mengubah border inputan menjadi tabalnya 2px jenis garis solid dan berwarna merah
		form.email.style.border = "2px solid red"
		// Mengganti text pada elemen html yang telah di panggil dan ditampung pada variable email_alert
		email_alert.textContent = "Inputan tidak boleh kosong!!"
	// Jika hasil test value dari inputan bernilai false maka akan di not yang dilambangkan dengan tanda ! dan code dibawah akan dijalankan
	}else if (!cekEmail.test(email_value)){
		// mengubah border inputan menjadi tabalnya 2px jenis garis solid dan berwarna merah
		form.email.style.border = "2px solid red"
		// Mengganti text pada elemen html yang telah di panggil dan ditampung pada variable email_alert
		email_alert.textContent = 'Email tidak valid, periksa kembali simbol atau penamaan pada email anda!!'
	// Jika selain dari 2 kondisi diatas tidak terpenuhi maka perkondisian else akan dijalankan
	}else{
		// mengubah border inputan menjadi tabalnya 2px jenis garis solid dan berwarna berupa format heksadesimal dari warna hijau
		form.email.style.border = "2px solid #00DE46"
		// Mengubah text pada elemen html yang telah di panggil dan ditampung pada variable email_alert menjadi string kosong
		email_alert.textContent = ""
	}

// VALIDASI INPUTAN NOMOR TELPON
	// memanggil elemen html yang mempunyai class nomertel pada html dan di tampung ke dalam variable nomor_alert
	const nomor_alert = document.querySelector(".nomertel")
	// memanggil value dari inputan yang mempunyai name = nomor yang berada didalam form
	const nomer_value = form.nomor.value
	// regex untuk mengecek inputan berupa numerik atau tidak
	const cekNum =/^[\d]+$/
	// Jika value dari inputan bernama kategori bernilai kosong maka code di bawah ini akan di eksekusi
	if (input_kosong(nomer_value)){
		// mengubah border inputan menjadi tabalnya 2px jenis garis solid dan berwarna merah
		form.nomor.style.border = "2px solid red"
		// Mengganti text pada elemen html yang telah di panggil dan ditampung pada variable nomor_alert
		nomor_alert.textContent = "Inputan tidak boleh kosong!!"
	// Jika hasil test value dari inputan bernilai false maka akan di not yang dilambangkan dengan tanda ! dan code dibawah akan dijalankan
	}else if (!cekNum.test(nomer_value)){
		// mengubah border inputan menjadi tabalnya 2px jenis garis solid dan berwarna merah
		form.nomor.style.border = "2px solid red"
		// Mengganti text pada elemen html yang telah di panggil dan ditampung pada variable nomor_alert
		nomor_alert.textContent = 'Format inputan harus berupa numerik!!'// Jika panjang inputan kurang dari 3 maka code di bawah akan di jalankan
	// Jika panjang inputan kurang dari 11 atau lebih dari 13 maka code di bawah akan di jalankan
	}else if(nomer_value.length < 11 | nomer_value.length > 13){
		// mengubah border inputan menjadi tabalnya 2px jenis garis solid dan berwarna merah
		form.nomor.style.border = "2px solid red"
		// Mengganti text pada elemen html yang telah di panggil dan ditampung pada variable nomor_alert
		nomor_alert.textContent = 'Nomor telepon harus minimal 11 digit dan maksimal 13 digit!!'
	// Jika selain dari 3 kondisi diatas tidak terpenuhi maka perkondisian else akan dijalankan
	}else{
		// mengubah border inputan menjadi tabalnya 2px jenis garis solid dan berwarna berupa format heksadesimal dari warna hijau
		form.nomor.style.border = "2px solid #00DE46"
		// Mengubah text pada elemen html yang telah di panggil dan ditampung pada variable nomor_alert menjadi string kosong
		nomor_alert.textContent = ""
	}

// VALIDASI INPUTAN ALAMAT
	//  memanggil elemen html yang mempunyai class address pada html dan di tampung ke dalam variable alamat_alert
	const alamat_alert = document.querySelector(".address")
	// memanggil value dari inputan yang mempunyai name = alamat yang berada didalam form
	const alamat_value = form.alamat.value
	// regex untuk mengecek inputan berupa alfanumerik yang mengandung tanda baca . , / atau tidak
	const cekALamat = /^[a-zA-Z0-9\.\,\/ ]+$/

	// Jika value dari inputan bernama kategori bernilai kosong maka code di bawah ini akan di eksekusi
	if (input_kosong(alamat_value)){
		// mengubah border inputan menjadi tabalnya 2px jenis garis solid dan berwarna merah
		form.alamat.style.border = "2px solid red"
		// Mengganti text pada elemen html yang telah di panggil dan ditampung pada variable alamat_alert
		alamat_alert.textContent = "Inputan tidak boleh kosong!!"
	// Jika hasil test value dari inputan bernilai false maka akan di not yang dilambangkan dengan tanda ! dan code dibawah akan dijalankan
	} else if (!cekALamat.test(alamat_value)){
		// mengubah border inputan menjadi tabalnya 2px jenis garis solid dan berwarna merah
		form.alamat.style.border = "2px solid red"
		// Mengganti text pada elemen html yang telah di panggil dan ditampung pada variable alamat_alert
		alamat_alert.textContent = 'Inputan tidak boleh mengandung simbol selain "." "," "\\"!!'
	// Jika panjang inputan kurang dari 10 maka code di bawah akan di jalankan
	}else if (alamat_value.length < 10){
		// mengubah border inputan menjadi tabalnya 2px jenis garis solid dan berwarna merah
		form.alamat.style.border = "2px solid red"
		// Mengganti text pada elemen html yang telah di panggil dan ditampung pada variable alamat_alert
		alamat_alert.textContent = "Inputan Alamat harus minimal 10 karakter!!"
	// Jika selain dari 3 kondisi diatas tidak terpenuhi maka perkondisian else akan dijalankan
	}else{
		// mengubah border inputan menjadi tabalnya 2px jenis garis solid dan berwarna berupa format heksadesimal dari warna hijau
		form.alamat.style.border = "2px solid #00DE46"
		// Mengubah text pada elemen html yang telah di panggil dan ditampung pada variable alamat_alert menjadi string kosong
		alamat_alert.textContent = ""
	}

	// VALIDASI INPUTAN CHECKBOX PERSETUJUAN

	// memanggil elemen html yang mempunyai class centang pada html dan di tampung ke dalam variable checkbox_alert
	const checkbox_alert = document.querySelector(".centang")
	// memanggil elemen checkbox pada html dan di tampung ke dalam variable checkbox_value
	const checkbox_value = document.getElementById('checkbox')
	// Jika variable list_checkbox chacked/tercentang maka code di bawah ini akan di eksekusi
	if (checkbox_value.checked){
		// Mengubah text pada elemen html yang telah di panggil dan ditampung pada variable checkbox_alert menjadi string kosong
		checkbox_alert.textContent = ''
	// Jika selain dari kondisi diatas tidak terpenuhi maka perkondisian else akan dijalankan
	} else {
		// Mengubah text pada elemen html yang telah di panggil dan ditampung pada variable checkbox_alert menjadi string kosong
		checkbox_alert.textContent = "Anda harus bersedia membagikan informasi dan menyetujui peraturan sebelum melanjutkan!!"
	}

	// Perkondisian dimana jika kotak peringatan dari masing-masing inputan berupa string kosong maka data inputan akan dikirimkan 
	if (alfabet_alert.textContent == "" && radio_alert.textContent == "" && dropdown_alert.textContent == "" 
		&& email_alert.textContent == "" && nomor_alert.textContent == "" && alamat_alert.textContent == ""
		&& checkbox_alert.textContent == ""){
		// ini menandakan seluruh inputan telah di lakukan pengecekan dan kemudian form akan dikirim menggunakan method submit()
		form.submit()
	}
})
