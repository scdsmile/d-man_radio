// Получаем ссылки на элементы на странице: аудиоплеер, кнопки play/pause и next
const player = document.getElementById('player');
const playPauseButton = document.getElementById('playPauseButton');
const nextButton = document.getElementById('nextButton');

// Добавляем обработчики событий 'click' для кнопки next и 'ended' для аудиоплеера,
// чтобы когда трек закончится, сразу начинался следующий
nextButton.addEventListener('click', playNextTrack);
player.addEventListener('ended', playNextTrack);

// Добавляем обработчик события 'click' для кнопки play/pause, чтобы она переключала состояние аудиоплеера
playPauseButton.addEventListener('click', () => {
    let playIcon = document.getElementById('playIcon');
    let pauseIcon = document.getElementById('pauseIcon');
    // Если музыка на паузе, то включаем ее и меняем иконку на паузу
    if (player.paused) {
        player.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "inline-block";
    // Если музыка играет, то ставим на паузу и меняем иконку на воспроизведение
    } else {
        player.pause();
        playIcon.style.display = "inline-block";
        pauseIcon.style.display = "none";
    }
});

// Событие происходит при завершении загрузки страницы
window.onload = function () {
    // Отправляем запрос на сервер за случайным треком
    fetch('/get_random_track')
        .then(response => response.json())
        .then(track => {
        // Меняем источник аудиоплеера на полученный трек
        player.src = `/media/audio/${track}`;
    });
};

// Функция, которая отвечает за воспроизведение следующего трека
function playNextTrack() {
    // Отправляем запрос на сервер за случайным треком
    fetch('/get_random_track')
        .then(response => response.json())
        .then(track => {
        // Меняем источник аудиоплеера на полученный трек и включаем воспроизведение
        player.src = `/media/audio/${track}`;
        player.play();
    });
}

// Получаем ссылку на элемент ползунка управления громкостью
const volumeSlider = document.getElementById('volumeSlider');
// Добавляем обработчик события 'input', чтобы при изменении положения ползунка менялась громкость аудиоплеера
volumeSlider.addEventListener('input', () => {
    player.volume = volumeSlider.value;
});
