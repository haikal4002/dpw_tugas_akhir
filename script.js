const form = document.querySelector(".content-form form")

form.addEventListener("submit", function(abc){

// Validasi alphabet dan WAJIB diisi
	const alfa = document.querySelector(".alfabet")
	const tes = form.name.value
	const alphabet = /^[A-Za-z ]+$/

	if (tes === ""){
		abc.preventDefault()
		alfa.textContent = "Masukkan tidak boleh kosong"
		alfa.style.color = "red"
	}else if (!alphabet.test(tes)){
		abc.preventDefault()
		alfa.textContent = 'Masukkan format berupa alfabet'
		alfa.style.color = "red"	
	}else{
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

// Validasi numerik dan WAJIB diisi
	const nomerTelepon = document.querySelector(".nomertel")
	const nomer = form.nomor.value
	const cekNum =/^[\d]+$/
	console.log((!cekNum.test(nomer)))

	if (nomer === ""){
		abc.preventDefault()
		nomerTelepon.textContent = "Masukkan tidak boleh kosong"
		nomerTelepon.style.color = "red"
	}else if (!cekNum.test(nomer)){
		abc.preventDefault()
		nomerTelepon.textContent = 'Masukkan format berupa numerik'
		nomerTelepon.style.color = "red"
	}else if(nomer.length < 11){
		abc.preventDefault()
		nomerTelepon.textContent = 'Nomor telepon harus minimal 11 digit'
		nomerTelepon.style.color = "red"
	}else if(nomer.length > 13){
		abc.preventDefault()
		nomerTelepon.textContent = 'Nomor telepon harus maksimal 13 digit'
		nomerTelepon.style.color = "red"
	}else{
		nomerTelepon.textContent = ''
	}

// Validasi email dan WAJIB diisi
	// const cekEmail = /^[a-zA-Z0-9.! #$%&’+/=?^_` {|}~-]+@ [a-zA-Z0-9-]+ (. [a-zA-Z0-9-]+)$/
})
