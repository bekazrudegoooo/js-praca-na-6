const epList = ['odcinek1.mp4','odcinek2.mp4','odcinek3.mp4'];
const player = document.querySelector('video'); 
const option = document.querySelector('select');
const title = document.querySelector('h1');
let nowPlay = 1;

function ageControl() {
    const userAge = document.getElementById('user-age');
    const popWindow = document.getElementById('ageControl');

    if(userAge.value>=16) {
        popWindow.style.display='none';
        player.play();
    }
    else
    {
        popWindow.innerHTML='<span style=\"font-size: 8vw; text-align: center;\">Jesteś za młody aby oglądać Czesia<span><p style=\"font-size: 1vw; text-align: center; margin-top: 8vh;\">Strona zaraz się zamknie</p>';
        setTimeout(() => {
            window.close();
        }, 5000);
    }
}

option.addEventListener('change',() => {
    player.src = 'video/'+epList[option.value-1];
    title.innerHTML='Odcinek '+option.value;
    nowPlay=option.value;
    player.play();
})

function nextVid() {
    nowPlay++;
    if(nowPlay>3)
        nowPlay=1;
    player.src = 'video/'+epList[nowPlay-1];
    title.innerHTML='Odcinek '+nowPlay;
    player.play();
}