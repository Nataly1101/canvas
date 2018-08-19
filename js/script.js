const canvas_one = document.querySelector('#one');
const canvas_two = document.querySelector('#two');

let obCanvas_one = canvas_one.getContext('2d');
let obCanvas_two = canvas_two.getContext('2d');

let coord = [[100, 100], [500, 100], [100, 500], [500, 500], [300,300]];
let color = ['red', 'blue', 'green', 'yellow', 'black'];

function addCircle(coord, color){
    obCanvas_one.beginPath();
    obCanvas_one.arc(coord[0], coord[1], 90, 0, 2 * Math.PI, true);
    obCanvas_one.fillStyle = color;
    obCanvas_one.fill();
}

addCircle(coord[0], color[0]);
addCircle(coord[1], color[1]);
addCircle(coord[2], color[2]);
addCircle(coord[3], color[3]);
addCircle(coord[4], color[4]);


canvas_one.onclick = function(e){
    let data = obCanvas_one.getImageData(e.layerX, e.layerY, 1, 1).data;
    let rgba = `rgba(${data[0]},  ${data[1]}, ${data[2]}, ${(data[3]/255)})`;
    obCanvas_two.clearRect(0, 0, 50,600);
    obCanvas_two.fillStyle = rgba;
    obCanvas_two.fill();
    obCanvas_two.fillRect(0, 0, canvas_two.width, canvas_two.height);
};

