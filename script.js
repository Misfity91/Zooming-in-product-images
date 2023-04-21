const image = document.querySelector('img')

const zoomImg = e => {
    const x = e.clientX
    const y = e.clientY
    // wskazuje pozycję kursora w przeglądarce
    // console.log(x,y);

    const imgX = image.offsetLeft
    const imgY = image.offsetTop
    // pozycja obrazka od krawedzi ekranu
    // console.log(imgX, imgY);

    const newX = x - imgX
    const newY = y - imgY
    // pozycja kursora wewnątrz obrazka
    // console.log(newX, newY);

    image.style.transformOrigin = `${newX}px ${newY}px`
    image.classList.add('zoom-in')
}

const resetZoom = () => {
    image.classList.remove('zoom-in')
}

image.addEventListener('mousemove', zoomImg)
image.addEventListener('mouseout', resetZoom)