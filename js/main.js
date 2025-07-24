// --- Kode untuk Expandable Card ---
const expandableCards = document.querySelectorAll('.expandable-card');

expandableCards.forEach(card => {
    card.addEventListener('click', () => {
        // Hapus kelas 'active' dari semua card
        removeActiveClasses();
        // Tambahkan kelas 'active' ke card yang di-klik
        card.classList.add('active');
    });
});

function removeActiveClasses() {
    expandableCards.forEach(card => {
        card.classList.remove('active');
    });
}

// Hamburger Menu
// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('hamburger-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('overlay');
    const body = document.body;

    const toggleMenu = () => {
        // Toggle kelas 'active' pada nav dan overlay
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        // Toggle kelas 'menu-open' pada body untuk mengubah ikon dan mencegah scroll
        body.classList.toggle('menu-open');
    };

    // Event listener untuk tombol utama
    toggleBtn.addEventListener('click', toggleMenu);

    // Event listener untuk overlay (agar bisa ditutup dengan klik di luar menu)
    overlay.addEventListener('click', () => {
        if (body.classList.contains('menu-open')) {
            toggleMenu();
        }
    });
});