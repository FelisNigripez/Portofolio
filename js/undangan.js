// Ambil elemen tombol dan undangan
const showBtn = document.getElementById('show-invitation-btn');
const invitation = document.getElementById('invitation');

// Tambahkan event listener ke tombol
showBtn.addEventListener('click', function() {
    // Tampilkan undangan
    invitation.classList.toggle('hidden');
});