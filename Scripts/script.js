const mainBody = document.getElementById('main-body');

function shopeeImgUrlExtractor(ele) {
    let picURL = "https://cf.shopee.vn/file/vn-11134103-22090-qewqy9vqlohvad"; // Default Value
    if (ele.substring(1, 4) == "div") { // Shop's pics
        picURL = ele.split(" ")[4].split("&quot")[1].split(";")[1];
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



const textArea = document.getElementById("elementGetter");

// Use Input because it updated the target.value immediately
textArea.addEventListener("input", (event) => {
    console.log(event.target.value);
});

const hasModals = document.querySelectorAll(".has-modal");
const modals = document.querySelectorAll(".modal");

console.log(hasModals.length);
console.log(modals.length);

hasModals.forEach( (modalCont, index) => {
    modalCont.addEventListener("mouseover", () => {
        // console.log(modalCont.children);
        console.log("pressed", index);
        modalCont.classList.toggle("active");
        modals[index].classList.toggle("active");
    });
})

/*
- Nâu tầm 1-3h sáng rất quậy, nhất là sau khi ngủ dậy, nên là tầm đó tuyệt đối không được tháo dây(đêm cuối ở nhà Tuán Anh bé lao ra cho 1 bãi trên giường).
- Mỗi lần Nâu lên giường(hay những chỗ không được tới) là phải đét đít, không tha, nếu không thì Nâu không tha mình đâu =))).
- Phải luôn ra lệnh "Nâu ngồi xuống" / "Ngồi Xuống Nâu" mỗi khi Nâu muốn uống nước hay ăn. => thành công khi vài lần bảo Nâu ngồi xuống và mẻ ngồi xuống thật.
    + VỪA ĐEÍ/Ẻ XONG NHẤT ĐỊNH KHÔNG CHO MẺ NGỒI XUỐNG
- (Chắc chị Quỳnh biết rồi) Nâu có lỡ cắn mình thì cứ giựt tay lại, kêu/xuýt xoa lớn lên cho Nâu biết, hiệu quả được vài giây =))).
- (Chắc chị Quỳnh biết rồi)Mỗi khi Nâu ngủ dậy, phải canh trong vòng 1-5', thường vừa dậy sẽ rất thích chơi, nhưng có dấu hiện bước ra khỏi chỗ chơi/ăn/nằm/ chỗ mình ngồi thì phải chụp và đem ra khay liền(để tạo thói quen cho bé).
    + Không nghe thì nắm lưng đè xuống, quậy quá thì giữ cổ đè xuống.
    + chảnh quá thì cứ để đói, lát sau kiểu gì cũng ăn hết.
    + Thường là chơi xong cho ăn là hết sạch, còn mới ngủ dậy/đi xe về thì hay lười ăng lắm.
- (Chắc chị Quỳnh biết rồi) Mỗi khi muốn đi nặng, Nâu sẽ kêu lên nếu đang bị xích, lúc đó mình phải giữ Nâu trên khay, hoặc đem khay theo Nâu để bắt kịp(bữa Tuấn Anh chờ gầb 3-4' Nâu không chịu ẻ nên vừa cởi dây ra, mẻ chạy ra góc nhà cho 1 bãi).
- (Chắc chị Quỳnh biết rồi) Muốn lau nhà mà không muốn Nâu quậy thì 1 là cột ra khỏi phòng, 2 là để lên tủ cao(trên 1.5m) là sẽ ngồi yên.
- Nâu thích nhất con cá + cái dĩa xanh, vừa rồi có thêm cái vớ của Tuấn Anh. Còn cái cục có dây kia kia mẻ không thích, khi chơi toàn cắn tay thôi.
*/