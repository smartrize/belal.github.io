document.addEventListener('DOMContentLoaded', function() {
    fetch('https://fc89b397-143d-47b2-95f9-f8aae41626d8-00-pz5phw7sygz3.riker.replit.dev/api/users')
        .then(response => response.json())
        .then(data => {
            let usersList = document.getElementById('users-list');
            usersList.innerHTML = ''; // تفريغ المحتوى السابق

            data.forEach(user => {
                let userItem = document.createElement('div');
                userItem.className = 'user-item';
                userItem.innerHTML = `<h3>${user.name}</h3><p>${user.email}</p>`;
                usersList.appendChild(userItem);
            });
        })
        .catch(error => console.error('خطأ في الاتصال بالـ API:', error));
});

function showPasswordForm(videoId) {
    document.getElementById(videoId).style.display = 'block';
}

function checkPassword(videoId, passwordId) {
    const correctPassword = 'belal'; // Replace with your password
    const passwordInput = document.getElementById(passwordId).value;
    if (passwordInput === correctPassword) {
        document.getElementById(`video-frame1`).style.display = 'block';
        return false; // Prevent form submission
    } else {
        alert('Incorrect password');
        return false; // Prevent form submission
    }
}
