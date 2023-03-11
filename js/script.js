let imgInput = document.querySelector("#imgInput");
let previewImg = document.querySelector("#previewImg");

//รับevent มา และreturn
imgInput.onchange = evt => {
    const [file] = imgInput.files; //เข้าถึงfileที่เลือก และเอามาเก็บไว้ในตัวแปร
    if(file) {
        previewImg.src = URL.createObjectURL(file); //การส่งรูปภาพที่เรามีการเก็บมา ไปใส่ที่preveiwImg
    }
}