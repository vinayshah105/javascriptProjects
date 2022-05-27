
var color = ['#c8d1df', '#0f68eb', '#c90c1e', '#ffc107', '#0dcaf0', '#212529', '#0a10161c', '#33ad6f','#20c997']

function myFunction() {
    let body1 = document.getElementById('xzz');
    let Button1 = document.getElementById('button');
    let Code = document.getElementById('code');

    let random = Math.floor(Math.random() * color.length);
    console.log(random)
      body1.style.backgroundColor = color[random];
      Button1.style.backgroundColor = "black";
      Code.innerHTML = color[random];
      main.style.color = 'white';
}

