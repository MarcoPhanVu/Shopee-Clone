const mainBody = document.getElementById('main-body');

function shopeeImgUrlExtractor(ele) {
    let picURL = ele.split(" ")[4].split("&quot")[1].split(";")[1];

    const imgContainer = document.createElement("img");
    imgContainer.src = picURL;
    imgContainer.classList.add("typical-img");
    mainBody.appendChild(imgContainer);
}

shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/sg-11134201-22120-trz7vkw6mzkvbf&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);

shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/sg-11134201-22120-6de8lkw6mzkvb1&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);

shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/5d8b0f409e7500204b57b6192eae78de&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);

shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/sg-11134201-22100-9eng9hk7w9iv2d&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);