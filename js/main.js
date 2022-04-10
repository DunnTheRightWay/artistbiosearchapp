document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const searchedName  = document.querySelector('input').value
    const url = 'https://theaudiodb.com/api/v1/json/2/search.php?s='+searchedName
    const artistImage = document.querySelector('img')
    const artistName = document.querySelector('.name')
    const artistBiography = document.querySelector('.biography')
    const artistGenre = document.querySelector('.genre')

    fetch(url)
        .then (res => res.json())
        .then (data => {
            console.log(data.artists[0]);
            artistImage.src = data.artists[0].strArtistThumb
            artistName.innerText=`${data.artists[0].strArtist}`;
            artistBiography.innerText=`${data.artists[0].strBiographyEN}`;
            artistGenre.innerText=`Genre: ${data.artists[0].strGenre}`;
        })
        .catch (err => {
            console.log(`error ${err}`)
        })
}

