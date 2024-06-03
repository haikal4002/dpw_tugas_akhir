const form = document.querySelector(".content-form form")

form.addEventListener("submit", function(abc){

// Validasi alphabet dan WAJIB diisi
	const alfa = document.querySelector(".alfabet")
	const tes = form.name.value
	const alphabet = /^[A-Za-z ]+$/

	if (tes === ""){
		abc.preventDefault()
		alfa.textContent = "Masukkan tidak boleh kosong"
	}else if (!alphabet.test(tes)){
		abc.preventDefault()
		alfa.textContent = 'Masukkan format berupa alfabet'	
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
	}

// Validasi numerik dan WAJIB diisi
	const nomerTelepon = document.querySelector(".nomertel")
	const nomer = form.nomor.value
	const cekNum =/^[\d]+$/
	console.log((!cekNum.test(nomer)))

	if (nomer === ""){
		abc.preventDefault()
		nomerTelepon.textContent = "Masukkan tidak boleh kosong"
	}else if (!cekNum.test(nomer)){
		abc.preventDefault()
		nomerTelepon.textContent = 'Masukkan format berupa numerik'	
	}else if(nomer.length < 11){
		abc.preventDefault()
		nomerTelepon.textContent = 'Nomor telepon harus minimal 11 digit'	
	}else if(nomer.length > 13){
		abc.preventDefault()
		nomerTelepon.textContent = 'Nomor telepon harus maksimal 13 digit'	
	}else{
		nomerTelepon.textContent = ''
	}
})
