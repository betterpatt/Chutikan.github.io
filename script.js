// ระบบเปิด-ปิดรูปภาพขยายใหญ่ (Modal) สำหรับเกียรติบัตร
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgFull");
    const captionText = document.getElementById("caption");
    const closeModal = document.querySelector(".close-modal");

    // ดึงกล่องรูปเกียรติบัตรทั้งหมด
    const certBoxes = document.querySelectorAll(".cert-img-box");

    certBoxes.forEach(box => {
        box.addEventListener("click", function() {
            const img = this.querySelector("img");
            const card = this.closest(".cert-card");
            const title = card.querySelector("h3").innerText;

            modal.style.display = "flex";
            modalImg.src = img.src;
            captionText.innerText = title;
        });
    });

    // ปุ่มปิด Modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // ปิดเมื่อกดพื้นที่ว่างนอกรูป
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
