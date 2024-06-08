const form = document.querySelector(".content-form form")

form.addEventListener("submit", function(abc){

// Validasi alphabet dan WAJIB diisi
	const alfa = document.querySelector(".alfabet")
	const tes = form.name.value
	const alphabet = /^([a-zA-Z]+|[a-zA-Z]+[ ][a-zA-Z]+)$/

	if (tes === ""){
		abc.preventDefault()
		form.name.style.border = "2px solid red"
		form.name.style.outline = "none"
		alfa.textContent = "Masukkan tidak boleh kosong"
		alfa.style.color = "red"
	}else if(tes.length < 2){
		abc.preventDefault()
		form.name.style.border = "2px solid red"
		form.name.style.outline = "none"
		alfa.textContent = 'Nama terlalu pendek'
		alfa.style.color = "red"
	}else if (!alphabet.test(tes)){
		abc.preventDefault()
		form.name.style.border = "2px solid red"
		form.name.style.outline = "none"
		alfa.textContent = 'Masukkan format berupa alfabet'
		alfa.style.color = "red"	
	}else{
		form.name.style.border = "2px solid #00DE46"
		form.name.style.outline = "none"
		alfa.textContent = ""	
	}

// Validasi radio button dan WAJIB diisi
	const radioo = document.querySelector(".radios")
	const radio = form.via

	let valid = false
	for (let i = 0; i < radio.length; i++){
		if(radio[i].checked){
			valid = true
			break
		}
	}

	if (valid){
		radioo.textContent = ""
	} else {
		abc.preventDefault()
		radioo.textContent = "Harus memilih salah satu"
		radioo.style.color = "red"
	}

// Validasi dropdown yang WAJIB diisi
	const dropdown_alert = document.querySelector(".dropdowns")
	const dropdown_value = form.kategori.value

	if (dropdown_value === ""){
		abc.preventDefault()
		form.kategori.style.border = "2px solid red"
		form.kategori.style.outline = "none"
		dropdown_alert.textContent = "Masukkan tidak boleh kosong"
		dropdown_alert.style.color = "red"
	}else{
		form.kategori.style.border = "2px solid #00DE46"
		form.kategori.style.outline = "none"
		dropdown_alert.textContent = ''
	}


// Validasi email dan WAJIB diisi
	const email_alert = document.querySelector(".Email")
	const email_value= form.email.value
	const cekEmail =  /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\.[a-zA-Z0-9]+)(@[a-zA-Z0-9]+|@[a-zA-Z0-9]+\-[a-zA-Z0-9]+)[.][a-zA-Z]{2,}$/
	// const cekEmail = /^[a-z\d]+(\.[a-z\d]+)@[a-z\d\-]+(\.[a-z\d]+)\.[a-z]{2,}$/i
	if (email_value === ""){  
		abc.preventDefault()
		form.email.style.border = "2px solid red"
		form.email.style.outline = "none"
		email_alert.textContent = "Masukkan tidak boleh kosong"
		email_alert.style.color = "red"
	}else if (!cekEmail.test(email_value)){
		abc.preventDefault()
		form.email.style.border = "2px solid red"
		form.email.style.outline = "none"
		email_alert.textContent = 'Masukan email dengan benar'
		email_alert.style.color = "red"
	}else{
		form.email.style.border = "2px solid #00DE46"
		form.email.style.outline = "none"
		email_alert.textContent = ""
	}

// Validasi numerik dan WAJIB diisi
	const nomor_alert = document.querySelector(".nomertel")
	const nomer_value = form.nomor.value
	const cekNum =/^[\d]+$/

	if (nomer_value === ""){
		abc.preventDefault()
		form.nomor.style.border = "2px solid red"
		form.nomor.style.outline = "none"
		nomor_alert.textContent = "Masukkan tidak boleh kosong"
		nomor_alert.style.color = "red"
	}else if (!cekNum.test(nomer_value)){
		abc.preventDefault()
		form.nomor.style.border = "2px solid red"
		form.nomor.style.outline = "none"
		nomor_alert.textContent = 'Masukkan format berupa numerik'
		nomor_alert.style.color = "red"
	}else if(nomer_value.length < 11){
		abc.preventDefault()
		form.nomor.style.border = "2px solid red"
		form.nomor.style.outline = "none"
		nomor_alert.textContent = 'Nomor telepon harus minimal 11 digit'
		nomor_alert.style.color = "red"
	}else if(nomer_value.length > 13){
		abc.preventDefault()
		form.nomor.style.border = "2px solid red"
		form.nomor.style.outline = "none"
		nomor_alert.textContent = 'Nomor telepon harus maksimal 13 digit'
		nomor_alert.style.color = "red"
	}else{
		form.nomor.style.border = "2px solid #00DE46"
		form.nomor.style.outline = "none"
		nomor_alert.textContent = ''
	}



// Validasi alamat dan WAJIB diisi
	const alamat_alert = document.querySelector(".address")
	const alamat_value = form.alamat.value
	const cekALamat = /^[a-zA-Z0-9\.\,\/ ]+$/
	if (alamat_value === ""){
		abc.preventDefault()
		form.alamat.style.border = "2px solid red"
		form.alamat.style.outline = "none"
		alamat_alert.textContent = "Masukkan tidak boleh kosong"
		alamat_alert.style.color = "red"
	} else if (!cekALamat.test(alamat_value)){
		abc.preventDefault()
		form.alamat.style.border = "2px solid red"
		form.alamat.style.outline = "none"
		alamat_alert.textContent = 'Masukan tidak boleh mengandung simbol selain "." "," "/"'
		alamat_alert.style.color = "red"
	}
	else if (alamat_value.length < 10){
		abc.preventDefault()
		form.alamat.style.border = "2px solid red"
		form.alamat.style.outline = "none"
		alamat_alert.textContent = "Inputan Alamat harus minimal 10 karakter"
		alamat_alert.style.color = "red"
	}else{
		form.alamat.style.border = "2px solid #00DE46"
		form.alamat.style.outline = "none"
		alamat_alert.textContent = ""
	}


// Validasi checkbox yang WAJIB diisi
	const checkbox_alert = document.querySelector(".centang")
	const checkbox_value = form.checkbox

	if (checkbox_value.checked){
		checkbox_alert.textContent = ''
	}else{
		abc.preventDefault()
		checkbox_alert.textContent = "Anda harus menyetujui dengan syarat dan ketentuan"
		checkbox_alert.style.color = "red"
	}


})
