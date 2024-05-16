document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');

    for (let i = 0; i < 100; i++) {
        const post = document.createElement('div');
        post.classList.add('post');

        const image = document.createElement('img');
        image.src = `https://source.unsplash.com/random/300x200?${i}`; 
        image.alt = 'Random Image';

        const likeButton = document.createElement('button');
        likeButton.classList.add('like-btn');
        likeButton.textContent = 'Лайк';

        const likesCount = document.createElement('span');
        likesCount.classList.add('likes');
        likesCount.textContent = '0';

        const commentsSection = document.createElement('div');
        commentsSection.classList.add('comments');

        const commentInput = document.createElement('input');
        commentInput.type = 'text';
        commentInput.classList.add('comment-input');
        commentInput.placeholder = 'Оставьте комментарий';

        const commentButton = document.createElement('button');
        commentButton.classList.add('comment-btn');
        commentButton.textContent = 'Отправить';

        const commentList = document.createElement('ul');
        commentList.classList.add('comment-list');

        commentsSection.appendChild(commentInput);
        commentsSection.appendChild(commentButton);
        commentsSection.appendChild(commentList);

        post.appendChild(image);
        post.appendChild(likeButton);
        post.appendChild(likesCount);
        post.appendChild(commentsSection);

        container.appendChild(post);
    }

    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const likesElement = button.nextElementSibling;
            let likes = parseInt(likesElement.textContent);
            likes++;
            likesElement.textContent = likes;
        });
    });

    const commentButtons = document.querySelectorAll('.comment-btn');
    commentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = button.previousElementSibling;
            const commentText = input.value.trim();
            if (commentText !== '') {
                const listItem = document.createElement('li');
                listItem.textContent = 'Asset: ' + commentText;
                
                const commentList = button.parentNode.querySelector('.comment-list');
                commentList.appendChild(listItem);

                const confirmationText = document.createElement('span');
                confirmationText.textContent = 'Комментарий добавлен!';
                button.parentNode.appendChild(confirmationText);

                input.value = '';
            }
        });
    });
});
