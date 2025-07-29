const wrapper = document.querySelector(".wrapper"),
      qrInput = wrapper.querySelector(".form input"),
      generateBtn = wrapper.querySelector(".form button"),
      qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
    const qrValue = qrInput.value.trim();

    if (!qrValue) {
        alert("Please enter some text or URL");
        return;
    }

    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(qrValue)}`;

    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        wrapper.classList.remove("active");
    }
});

