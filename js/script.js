const wrapper = document.querySelector(".wrapper");
const qrInput = wrapper.querySelector(".form input");
const generateBtn = wrapper.querySelector(".form button");
const qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", generateQRCode);
qrInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        generateQRCode();
    }
});

function generateQRCode() {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    qrImg.addEventListener("load", function() {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
}
