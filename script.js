// === FITUR BUKU TAMU ===
function sambutPengunjung(event) {
    
    event.preventDefault();

    // Mengambil nilai nama
    var namaUser = document.forms["myForm"]["nama"].value;

    // Menampilkan alert sapaan
    alert("Halo " + namaUser + "! Terima kasih sudah mengunjungi website  Wisata Wonogiri. Selamat merencanakan liburanmu!");

    // Mengosongkan form
    document.forms["myForm"].reset();
}

function filterWisata() {
    // 1. Ambil nilai input pencarian dan dropdown
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    let filterFasilitas = document.getElementById("filterFasilitas").value.toLowerCase();
    
    // 2. Ambil semua elemen kartu wisata
    let cards = document.getElementsByClassName("wisata-card");

    // 3. Loop untuk mengecek setiap kartu
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        
        // Ambil teks dari judul, deskripsi, dan lokasi
        let title = card.querySelector(".card-title").innerText.toLowerCase();
        let desc = card.querySelector(".card-desc").innerText.toLowerCase();
        let lokasi = card.querySelector(".lokasi-text").innerText.toLowerCase();
        
        // Ambil data fasilitas tersembunyi
        let fasilitas = card.getAttribute("data-fasilitas").toLowerCase();

        // 4. Logika Pencocokan
        let matchSearch = title.includes(searchInput) || desc.includes(searchInput) || lokasi.includes(searchInput);
        let matchFilter = (filterFasilitas === "semua") || fasilitas.includes(filterFasilitas);

        // 5. Tampilkan / Sembunyikan kartu berdasarkan hasil filter
        if (matchSearch && matchFilter) {
            card.style.display = "flex"; 
        } else {
            card.style.display = "none"; 
        }
    }
}