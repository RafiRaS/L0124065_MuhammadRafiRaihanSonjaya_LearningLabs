//membuat animasi transisi sederhana
window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 

        document.body.classList.remove('fade-in');
        document.body.classList.add('fade-out');

        setTimeout(() => {
            window.location.href = link.href; 
        }, 500); 
    });
});

//membuat notifikasi saat submit comments

const feedbackForm = document.querySelector("form");

    feedbackForm.addEventListener("submit", function(event) {
        alert("Terima kasih atas masukannya!");
    });

