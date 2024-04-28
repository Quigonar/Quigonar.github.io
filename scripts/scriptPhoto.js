document.addEventListener('DOMContentLoaded', function () {
    const photoStack = document.querySelector('.photo-stack');
    const images = [
        { src: '../assets/imagen-1.jpg', title: 'El amor de mi vida', angle: 0 },
        { src: '../assets/imagen-2.jpg', title: 'Mi princesa bella', angle: 20 },
        { src: '../assets/imagen-3.jpg', title: 'Pimienta chupando tetas', angle: -15 },
        { src: '../assets/imagen-4.jpg', title: 'Mi amorcito estudiando', angle: -30 },
        { src: '../assets/imagen-5.jpg', title: 'La diosa de mi corazon', angle: 25 },
        { src: '../assets/imagen-6.jpg', title: 'Hermosisisisisima', angle: 10 },
        { src: '../assets/imagen-7.jpg', title: 'Amorcito y zanahoria', angle: 0 },
        { src: '../assets/imagen-8.jpg', title: 'Date de made in abyss', angle: -15 },
        { src: '../assets/imagen-9.jpg', title: 'Mi bella facherita', angle: 0 },
        { src: '../assets/imagen-10.jpg', title: 'Tirandome indirectas', angle: -25 },
        { src: '../assets/imagen-11.jpg', title: 'Date de HER', angle: 15 },
        { src: '../assets/imagen-12.jpg', title: 'Date hablando', angle: 30 },
        { src: '../assets/imagen-13.jpg', title: 'Princesa estudiando', angle: 0 },
        { src: '../assets/imagen-14.jpg', title: 'Solcito hermoso', angle: 15 },
        { src: '../assets/imagen-15.jpg', title: 'Donde me caso??', angle: -20 },
        { src: '../assets/imagen-16.jpg', title: 'Casate conmigo pls', angle: 10 },
        { src: '../assets/imagen-17.jpg', title: '✌️', angle: -5 },
        { src: '../assets/imagen-18.jpg', title: 'Belleza', angle: 25 },
        { src: '../assets/imagen-19.jpg', title: 'GUAPAAAAAAAAAA', angle: -15 },
        { src: '../assets/imagen-20.jpg', title: 'Ojitos preciosos', angle: 20 },
        { src: '../assets/imagen-21.jpg', title: 'Dominame', angle: -30 }
    ];

    let index = 0;

    function addPhoto() {
        const { src, title, angle } = images[index];
        const photo = document.createElement('div');
        photo.classList.add('photo');
        photo.style.top = `${window.innerHeight / 2}px`; // Centro verticalmente
        photo.style.left = `${window.innerWidth / 2}px`; // Centro horizontalmente

        photo.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

        const img = new Image();
        img.src = src;

        const polaroidTitle = document.createElement('div');
        polaroidTitle.classList.add('polaroid-title');
        polaroidTitle.textContent = title;

        photo.appendChild(img);
        photo.appendChild(polaroidTitle);
        photoStack.appendChild(photo);

        setTimeout(() => {
            photo.style.display = 'block';
            photo.style.opacity = 1;
        }, 5000); // Agrega una nueva foto cada 3 segundos

        index = (index + 1) % images.length;
    }

    addPhoto();

    setInterval(addPhoto, 5000); // Agrega una nueva foto cada 3 segundos
});

document.addEventListener('DOMContentLoaded', function () {
    const lyricsContainer = document.getElementById("lyrics");

    function displayLyrics() {
        const timeElapsed = Math.floor((new Date() - new Date(document.firstLoadTime)) / 1000); // Calcula el tiempo transcurrido en segundos
        let lyricsToShow = ''

        if (5 <= timeElapsed && timeElapsed < 10) {
            lyricsToShow = "Oh, baby";
        } else if (10 <= timeElapsed && timeElapsed < 15) {
            lyricsToShow = "Oh, man";
        } else if (15 <= timeElapsed && timeElapsed < 20) {
            lyricsToShow = "You're makin' me crazy";
        } else if (20 <= timeElapsed && timeElapsed < 25) {
            lyricsToShow = "Really drivin' me mad";
        } else if (25 <= timeElapsed && timeElapsed < 30) {
            lyricsToShow = "That's alright with me";
        } else if (31 <= timeElapsed && timeElapsed < 35) {
            lyricsToShow = "It's really no fuss";
        } else if (35 <= timeElapsed && timeElapsed < 40) {
            lyricsToShow = "As long as you're next to me";
        } else if (40 <= timeElapsed && timeElapsed < 47) {
            lyricsToShow = "Just the two of us";
        } else if (47 <= timeElapsed && timeElapsed < 51) {
            lyricsToShow = "You're my, my, my";
        } else if (51 <= timeElapsed && timeElapsed < 57) {
            lyricsToShow = "My kind of woman";
        } else if (58 <= timeElapsed && timeElapsed < 61) {
            lyricsToShow = "My, oh my";
        } else if (63 <= timeElapsed && timeElapsed < 67) {
            lyricsToShow = "What a girl";
        } else if (68 <= timeElapsed && timeElapsed < 72) {
            lyricsToShow = "You're my, my, my";
        } else if (73 <= timeElapsed && timeElapsed < 78) {
            lyricsToShow = "My kind of woman";
        } else if (78 <= timeElapsed && timeElapsed < 81) {
            lyricsToShow = "And I'm down on my hands and knees";
        } else if (81 <= timeElapsed && timeElapsed < 83) {
            lyricsToShow = "Beggin' you please, baby";
        } else if (84 <= timeElapsed && timeElapsed < 87) {
            lyricsToShow = "Show me your world";
        } else if (93 <= timeElapsed && timeElapsed < 98) {
            lyricsToShow = "Oh, brother";
        } else if (98 <= timeElapsed && timeElapsed < 103) {
            lyricsToShow = "Sweetheart";
        } else if (104 <= timeElapsed && timeElapsed < 108) {
            lyricsToShow = "I'm feelin' so tired";
        } else if (108 <= timeElapsed && timeElapsed < 113) {
            lyricsToShow = "Really fallin' apart";
        } else if (113 <= timeElapsed && timeElapsed < 119) {
            lyricsToShow = "And it just don't make sense to me";
        } else if (119 <= timeElapsed && timeElapsed < 124) {
            lyricsToShow = "I really don't know";
        } else if (124 <= timeElapsed && timeElapsed < 129) {
            lyricsToShow = "Why you stick right next to me";
        } else if (129 <= timeElapsed && timeElapsed < 136) {
            lyricsToShow = "Wherever I go";
        } else if (136 <= timeElapsed && timeElapsed < 140) {
            lyricsToShow = "You're my, my, my";
        } else if (140 <= timeElapsed && timeElapsed < 146) {
            lyricsToShow = "My kind of woman";
        } else if (146 <= timeElapsed && timeElapsed < 151) {
            lyricsToShow = "My, oh my";
        } else if (151 <= timeElapsed && timeElapsed < 157) {
            lyricsToShow = "What a girl";
        } else if (157 <= timeElapsed && timeElapsed < 161) {
            lyricsToShow = "You're my, my, my";
        } else if (161 <= timeElapsed && timeElapsed < 167) {
            lyricsToShow = "My kind of woman";
        } else if (167 <= timeElapsed && timeElapsed < 170) {
            lyricsToShow = "And I'm down on my hands and knees";
        } else if (170 <= timeElapsed && timeElapsed < 173) {
            lyricsToShow = "Begging you please, baby";
        } else if (173 <= timeElapsed && timeElapsed < 176) {
            lyricsToShow = "Show me your world";
        }

        lyricsContainer.textContent = lyricsToShow;

    }
    setInterval(displayLyrics, 1000); // Actualiza las letras cada segundo

    displayLyrics();
});

document.firstLoadTime = new Date();