document.addEventListener('DOMContentLoaded', () => {
    const qaItems = document.querySelectorAll('.qa-item');

    qaItems.forEach(item => {
        const submitButton = item.querySelector('.qa-submit');
        const feedback = item.querySelector('.qa-feedback');

        submitButton.addEventListener('click', () => {
            const selectedOption = item.querySelector('input[type="radio"]:checked');
            const correctAnswer = submitButton.getAttribute('data-correct');
            
            if (selectedOption) {
                const answer = selectedOption.value;
                if (answer === correctAnswer) {
                    feedback.textContent = 'Correct!';
                    feedback.style.color = 'green';
                } else {
                    feedback.textContent = 'Wrong answer. Try again!';
                    feedback.style.color = 'red';
                }
            } else {
                feedback.textContent = 'Please select an answer!';
                feedback.style.color = 'red';
            }
        });
    });

    // Gallery image click event
    const images = document.querySelectorAll('.gallery-grid img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            alert('You clicked on an image of Justin Bieber!');
        });
    });

    // Simulate fan comments
    const comments = [
        { name: 'Sarah', text: 'I absolutely love Justin Bieber! His music is amazing.', timestamp: '2024-08-22 10:15 AM' },
        { name: 'John', text: 'Just saw Justin in concert and it was the best experience ever!', timestamp: '2024-08-22 10:47 AM' },
        { name: 'Emily', text: 'His latest album is on repeat for me. So good!', timestamp: '2024-08-22 11:05 AM' },
        { name: 'Mike', text: 'Can’t wait for his next tour. I’m definitely getting tickets!', timestamp: '2024-08-22 11:30 AM' },
        { name: 'Anna', text: 'Justin Bieber has such a unique voice. Love all his songs!', timestamp: '2024-08-22 12:00 PM' },
        { name: 'Jessica', text: 'His music has been a huge part of my life. Thank you, Justin!', timestamp: '2024-08-22 12:15 PM' },
        { name: 'Liam', text: 'I’m always impressed by his live performances. Incredible talent!', timestamp: '2024-08-22 12:45 PM' },
        { name: 'Olivia', text: 'Justin’s latest single is a banger! Can’t stop listening.', timestamp: '2024-08-22 1:00 PM' },
        { name: 'Daniel', text: 'Every album gets better and better. What a legend!', timestamp: '2024-08-22 1:30 PM' },
        { name: 'Sophia', text: 'So happy I got to meet Justin at a meet-and-greet event!', timestamp: '2024-08-22 2:00 PM' },
        { name: 'Chris', text: 'His music always lifts my spirits. Thank you for the positivity!', timestamp: '2024-08-22 2:15 PM' },
        { name: 'Mia', text: 'Justin’s songs are always on my playlist. He never disappoints.', timestamp: '2024-08-22 2:45 PM' },
        { name: 'Ryan', text: 'I love how personal and heartfelt his lyrics are. Truly amazing.', timestamp: '2024-08-22 3:00 PM' },
        { name: 'Ava', text: 'Saw him live last night, and it was an unforgettable experience!', timestamp: '2024-08-22 3:30 PM' },
        { name: 'Ethan', text: 'Justin’s music helps me through tough times. He’s the best.', timestamp: '2024-08-22 4:00 PM' },
        { name: 'Charlotte', text: 'Can’t wait for the next album release. I know it’ll be fantastic!', timestamp: '2024-08-22 4:15 PM' },
        { name: 'Noah', text: 'His voice is just incredible. So glad to be a fan.', timestamp: '2024-08-22 4:45 PM' },
        { name: 'Amelia', text: 'Every song is a masterpiece. Love you, Justin!', timestamp: '2024-08-22 5:00 PM' },
        { name: 'James', text: 'His music brings so much joy to my life. Thanks for everything!', timestamp: '2024-08-22 5:30 PM' },
        { name: 'Isabella', text: 'Justin’s concerts are always the highlight of my year!', timestamp: '2024-08-22 6:00 PM' },
        { name: 'Oliver', text: 'I’ve been a fan since day one, and I’m still loving every minute.', timestamp: '2024-08-22 6:15 PM' },
        { name: 'Mia', text: 'His latest music video is absolutely stunning. Keep it up, Justin!', timestamp: '2024-08-22 6:45 PM' }
    ];

    const commentSection = document.getElementById('comment-section');

    function addComment(comment) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `
            <p class="name">${comment.name}</p>
            <p class="timestamp">${comment.timestamp}</p>
            <p>${comment.text}</p>
        `;
        commentSection.appendChild(commentDiv);
    }

    function generateComments() {
        // Shuffle the comments array and take the first 5 comments
        const shuffledComments = comments.sort(() => 0.5 - Math.random());
        const initialComments = shuffledComments.slice(0, 5);
    
        initialComments.forEach(comment => addComment(comment));
    }

    generateComments();

    // Add new comments periodically
    setInterval(() => {
        const randomComment = comments[Math.floor(Math.random() * comments.length)];
        addComment({
            name: randomComment.name,
            text: randomComment.text,
            timestamp: new Date().toLocaleString()
        });
    }, 2000); // Add a new comment every 10 seconds
});
