const mainBody = document.getElementById('main-body');
const notiList = document.querySelectorAll('.noti-ele');

// READ NOTI
notiList.forEach((noti) => {
	noti.addEventListener("click", (e) => {
		noti.classList.add("seen");
	})
});


// MODAL LOGIC
const modalOverlay = document.querySelector('.modal');
const mainModal = document.querySelector('.modal-content');

modalOverlay.addEventListener("click", (event) => {
	if (event.target == modalOverlay && event.target.contains(mainModal)) { // to make sure that we are clicking on the overlay instead of the modal
		closeModal();
	}
});

const regForm = document.querySelector(".register-form");
const logForm = document.querySelector('.login-form');

// console.log("regForm childNode: ", regForm.childNodes);
// console.log("regForm children: ", regForm.children[0]);

function openForm(form) {
	mainModal.classList.remove('hidden');
	modalOverlay.classList.remove('hidden');
	form.classList.remove('hidden');

	if (form == regForm) {
		logForm.classList.add('hidden');
	}
	else if (form == logForm) {
		regForm.classList.add('hidden');
	}
}

function closeModal() {
	logForm.classList.add('hidden');
	regForm.classList.add('hidden');
	modalOverlay.classList.add('hidden');
}



// REGION SELECTOR
let regionsList = {
	Vietnam: "Trong nước",
	China: "Trung Quốc",
	Thailand: "Thái Lan",
	SEA: "Đông Nam Á",
	EU: "Châu Âu",
	US: "Mỹ"
}
const region = document.querySelectorAll('.region');
const choosenRegionContainer = document.getElementById('choosen-region');
const regionSelectContainer = document.getElementById('region-select-container');
const regionListDisplay = document.getElementById('region-list');

regionSelectContainer.addEventListener("click", () => {
	regionListDisplay.classList.toggle("active");
})

regionSelectContainer.addEventListener("blur", () => {
	regionListDisplay.classList.remove("active");
})

region.forEach(re => {
	// console.log(re.dataset.value);
	// if (re.dataset.value == choosenRegionContainer.dataset.value) {
	//     re.classList.add("hidden");
	// }

	re.addEventListener("click", () => {
		choosenRegionContainer.dataset.value = re.dataset.value;
		choosenRegionContainer.innerHTML = regionsList[choosenRegionContainer.dataset.value];
		console.log(regionsList[choosenRegionContainer.dataset.value]);
		// console.log("Khi là mèo");

		region.forEach(re => re.classList.remove("hidden"));
		if (re.dataset.value == choosenRegionContainer.dataset.value) {
			re.classList.add("hidden");
		}
	});
});

function shopeeImgUrlExtractor(ele) {
	let picURL = "https://cf.shopee.vn/file/vn-11134103-22090-qewqy9vqlohvad"; // Default Value
	if (ele.substring(1, 4) == "div") { // Shop's pics
		// picURL = ele.split(" ")[4].split("&quot")[1].split(";")[1];
		picURL = ele.split("&quot")[1].split(";")[1];

	}

	if (ele.substring(1, 4) == "img") { //User's pics
		picURL = ele.split("src=")[1].split("\"")[1];
	}

	const imgContainer = document.createElement("img");
	imgContainer.src = picURL;
	imgContainer.classList.add("typical-img");
	mainBody.appendChild(imgContainer);
}