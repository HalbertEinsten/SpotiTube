
document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        { name: 'Henrique & Juliano', image: './imgs/artista-henrique-juliano.jpg' },
        { name: 'Jorge & Mateus', image: './imgs/artista-jorge-mateus.jpg' },
        { name: 'Zé Neto & Cristiano', image: './imgs/artista-ze-neto.jpg' },
        { name: 'Gusttavo Lima', image: './imgs/artista-gustavo-lima.jpg' },
        { name: 'Luan Santana', image: './imgs/artista-luan-santana.jpg' },
        { name: 'Matheus & Kauan', image: './imgs/artista-mateus-kauan.jpg' }
    ];

    const albumsData = [
        { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './imgs/album-white-noise.jpg' },
        { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './imgs/album-ceu-explica.jpg' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './imgs/album-vida-loka.jpg' },
        { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './imgs/album-hit-me.jpg' },
        { name: 'CAJU', artist: 'Liniker', image: './imgs/album-caju.jpg' },
        { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './imgs/album-escandalo.jpg' }
    ];


    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach(artist => {

        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <div class='image-wrap'>
            <img src=${artist.image} alt=imagem do${artist.name}>
            <button class="play-btn">
                <img src="https://img.icons8.com/flat-round/play--v1.png" alt="Play" class="box-image"/>
            </button>
            <div>
            
            <h3>${artist.name}</h3>
            
            <p>artista</p>
             </div>
             </div>
             

        `

        artistGrid.appendChild(artistCard)

    })

    albumsData.forEach(album => {

        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
            <div class='image-wrap'>
            <img src=${album.image} alt=imagem do${album.name}>
             <button class="play-btn">
                <img src="https://img.icons8.com/flat-round/play--v1.png" alt="Play" class="box-image"/>
            </button>
            <div>
            <h3>${album.name}</h3>
            <p>${album.artist}</p>
            </div>
            </div>

        `

        albumsGrid.appendChild(albumCard)

    })


})

