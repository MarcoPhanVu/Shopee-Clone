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

const searchInput = document.getElementById('search');
const searchHistoryContainer = document.querySelector(".search-history");
const searchHistoryItems = document.querySelectorAll(".search-history-item");

searchInput.addEventListener("focus", () => {
    searchHistoryContainer.classList.add("active");
});

searchHistoryItems.forEach(item => {
    console.log(item);
    item.addEventListener("click", () => {
        searchInput.value = item.innerHTML;
    });
});

// If display = none => cant assign innerHTML
searchInput.addEventListener("focusout", () => {
    searchHistoryContainer.classList.remove("active");
});

// REGION SELECTOR
let regionsList = {
    Vietnam: "Trong nước",
    China: "Trung Quốc",
    Thailand: "Thái Lan",
    SEA: "Đông Nam Á",
    EU: "Châu Âu",
    US: "Mỹ"
};

const region = document.querySelectorAll('.region');
const choosenRegionContainer = document.getElementById('choosen-region');
const regionSelectContainer = document.getElementById('region-select-container');
const regionListDisplay = document.getElementById('region-list');

regionSelectContainer.addEventListener("click", () => {
    regionListDisplay.classList.toggle("active");
});

// regionSelectContainer.addEventListener("blur", () => {
//     regionListDisplay.classList.remove("active");
// });

region.forEach(re => {
    if (re.dataset.value == choosenRegionContainer.dataset.value) {
        re.classList.add("hidden");
    }

    re.addEventListener("click", () => {
        choosenRegionContainer.dataset.value = re.dataset.value;
        choosenRegionContainer.innerHTML = regionsList[choosenRegionContainer.dataset.value];

        region.forEach(re => re.classList.remove("hidden"));
        if (re.dataset.value == choosenRegionContainer.dataset.value) {
            re.classList.add("hidden");
        }
    });
});






const textArea = document.getElementById("elementGetter");

// Use Input because it updated the target.value immediately
// textArea.addEventListener("input", (event) => {
//     console.log(event.target.value);
// });

function shopeeImgUrlExtractor(ele) {
    let picURL = "https://cf.shopee.vn/file/vn-11134103-22090-qewqy9vqlohvad"; // Default Value
    if (ele.substring(1, 4) == "div") { // Shop's pics
        // picURL = ele.split(" ")[4].split("&quot")[1].split(";")[1];
        picURL = ele.split("&quot")[1].split(";")[1];
        // console.log(picURL);
        // console.log(picURL);
    }

    if (ele.substring(1, 4) == "img") { //User's pics
        picURL = ele.split("src=")[1].split("\"")[1];
    }

    const imgContainer = document.createElement("img");
    imgContainer.src = picURL;
    imgContainer.classList.add("typical-img");
    mainBody.appendChild(imgContainer);
}

    shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/5d8b0f409e7500204b57b6192eae78de&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);

    shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/sg-11134201-22100-9eng9hk7w9iv2d&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);

    shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/d197d74737fab44a1cbfcb05873c6e38&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);

    shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/41aa2d79a041167a02e36d141a61340e&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);

    shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/99bcb8e15e9b8e0aced795fb6db15e37&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);

    shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/1677e23461d056278049ca91b2e98543&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);

    shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/vn-11134201-23020-p57ebb7joonv0e&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);

    shopeeImgUrlExtractor(`<div class="fus9wz uno8xj" style="background-image: url(&quot;https://cf.shopee.vn/file/b91db3d7ba22ebf955acf4eee87396b5&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);