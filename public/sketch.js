let canvas;
// api foto perros
let dogurl;
// api bicoins
let bitcoinurl;
let bitcoinC
let bitcoinRate
// api US Pop
let uspopurl
let usyear
let uspop
// api car facts
let caturl;
// api usuarios
let userurl
let userurlname;
let userurlemail;

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
}

function draw() {
    background(0, 50);
    newCursor();

    textSize(30)
    text('Hello, click if you whant some random info', 50, 50)
    text('Type any number beteewn 1 and 5 to see the info', 50, 90)
    
    if (dogurl !== undefined) {
        textSize(20)
        text('1) Random dog picture:', 100, 150)
        image(dogurl,130,170,200,200)
    }
    if (userurl !== undefined) {
        text('2) Random user info:', 100, 430)
        text(userurlname,130,460)
        text(userurlemail,130,500)
    }
    if (bitcoinurl !== undefined) {
        text('3) US Bitcon rate:', 100, 560)
        text(bitcoinRate,130,590)
    }
    if (uspopurl !== undefined) {
        text('4) US population in:', 100, 660)
        text(`${usyear} was`,130,690)
        text(uspop,220,690)
    }
    if (caturl !== undefined) {
        text('5) Random cat fact:', 100, 760)
        text(caturl,130,800)
    }
}

function keyTyped(){

    if (key === '1') {
        dogApi('https://dog.ceo/api/breeds/image/random')        
    } else if (key === '2') {
        
        userApi('https://randomuser.me/api/')
    }else if (key === '3') {
        
        bitApi('https://api.coindesk.com/v1/bpi/currentprice.json')
    } else if (key === '4') {
        
        uspopApi('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    } else if (key === '5') {
        catApi('https://catfact.ninja/fact')
        
    }
}

async function dogApi(URL) {
const response = await fetch(URL)
const data = await response.json()
dogurl = loadImage(data.message)
console.log(dogurl);
}
async function userApi(URL) {
const response = await fetch(URL)
const data = await response.json()
userurl = data.results[0]
userurlname = data.results[0].name.first
userurlemail = data.results[0].email
console.log(userurl);
}

async function bitApi(URL) {
    const response = await fetch(URL)
    const data = await response.json()
    bitcoinurl = data.bpi.USD
    bitcoinC = data.bpi.USD.code
    bitcoinRate = data.bpi.USD.rate
    console.log(bitcoinurl);
    }


async function uspopApi(URL) {
    const response = await fetch(URL)
    const data = await response.json()
    uspopurl = data.data[0]
    usyear = data.data[0].Year
    uspop = data.data[0].Population

    console.log(uspopurl);
    console.log(usyear);
    console.log(uspop);
    }


async function catApi(URL) {
const response = await fetch(URL)
const data = await response.json()
caturl = data.fact
console.log(caturl);
}



function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}