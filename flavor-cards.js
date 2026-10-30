// Kartu rasa: klik amplop untuk membuka/menutup "surat" di dalamnya
document.querySelectorAll(".kartu-rasa").forEach((kartu) => {
  kartu.addEventListener("click", () => {
    kartu.classList.toggle("terbuka");
  });
});
