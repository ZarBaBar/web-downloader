import { ytmp3 } from "./ytmp3.js";
import { ytmp4 } from "./ytmp4.js";
import { instagram } from "./instagram.js";

const jenisDownloader = document.querySelectorAll(".jenisDownloader button");
const judul = document.querySelector(".judul");
const result = document.querySelector(".result");
const buttonGas = document.getElementById("buttonGas");

let selectedJenis = ""; // Untuk menyimpan jenis downloader yang dipilih

// Tambahkan event listener ke semua tombol downloader
jenisDownloader.forEach((button) => {
  button.addEventListener("click", () => {
    selectedJenis = button.value || button.textContent.trim();
    let jenisText;

    switch (selectedJenis) {
      case "ytmp3":
        jenisText = "Youtube MP3";
        break;
      case "ytmp4":
        jenisText = "Youtube MP4";
        break;
      case "instagram":
        jenisText = "Instagram";
        break;
      default:
        jenisText = "Pilih terlebih dahulu";
        selectedJenis = ""; // Reset jika jenis tidak valid
        break;
    }

    judul.textContent = `Download jenis: ${jenisText}`;
  });
});

// Tambahkan event listener ke tombol Gas
buttonGas.addEventListener("click", () => {
  const url = document.getElementById("inputUrl").value;

  if (!url) {
    result.innerHTML = `<p>Masukkan URL terlebih dahulu!</p>`;
    return;
  }

  switch (selectedJenis) {
    case "ytmp3":
      ytmp3(url, result);
      break;
    case "ytmp4":
      ytmp4(url, result);
      break;
    case "instagram":
      instagram(url, result);
      break;
    default:
      result.innerHTML = `<p>Pilih jenis downloader terlebih dahulu!</p>`;
      break;
  }
});
