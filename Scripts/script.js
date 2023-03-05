const mainBody = document.getElementById('main-body');

function shopeeImgUrlExtractor(ele) {
    let picURL = ele.split(" ")[4].split("&quot")[1].split(";")[1];

    const imgContainer = document.createElement("img");
    imgContainer.src = picURL;
    imgContainer.classList.add("typical-img");
    mainBody.appendChild(imgContainer);
}

// shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/b6b7ba898525d637337a0f89a8730e19&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);

// shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/sg-11134201-22120-6de8lkw6mzkvb1&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);

// shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/5d8b0f409e7500204b57b6192eae78de&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);

// shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/sg-11134201-22100-9eng9hk7w9iv2d&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);

shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/d197d74737fab44a1cbfcb05873c6e38&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);

shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/41aa2d79a041167a02e36d141a61340e&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);

shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/99bcb8e15e9b8e0aced795fb6db15e37&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);

shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/1677e23461d056278049ca91b2e98543&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);

shopeeImgUrlExtractor(`<div class="fus9wz qO2bZw" style="background-image: url(&quot;https://cf.shopee.vn/file/vn-11134201-23020-p57ebb7joonv0e&quot;); background-size: contain; background-repeat: no-repeat;"></div>`);



const textArea = document.getElementById("elementGetter");

console.log(textArea);
console.log(textArea.innerHTML);

textArea.addEventListener("keypress", (event) => {
    console.log(textArea.innerHTML);
});