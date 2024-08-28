let upload_btn = document.querySelector(".profile_photo button")
let upload_img = document.querySelector(".profile_photo input")
let image_section = document.querySelector(".profile_photo img")

upload_btn.addEventListener("click",() => upload_img.click());
upload_img.addEventListener("change",()=> {
    // console.log(upload_img.files);
    let file = upload_img.files[0];
    let Url = URL.createObjectURL(file);
    image_section.src= Url;
    // image_section.src = URL.createObjectURL(file);
});