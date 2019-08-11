class Bird {
    constructor(image, size) {
        this.bird = this.create(image, size)
    }

    create(image, size) {
        var img = document.createElement("img")
        img.src = image
        img.width = size
        img.style.position = 'absolute'
        img.style.top = `${this.random(0, window.innerHeight)}px`
        img.style.left = `${this.random(0, window.innerWidth)}px`
        img.style.transition = '2s all'
        console.log(this.random(0, window.innerHeight))
        return img
    }
    appendToBody() {
        document.body.appendChild(this.bird)
    }
    random(min, max) {
        return Math.floor((Math.random() * (max - min)) + min)
    }
    flex() {
        var bird = this.bird
        var random = this.random

        function flexingBird() {
            bird.style.top = `${random(0, window.innerHeight)}px`
            bird.style.left = `${random(0, window.innerWidth)}px`
            setTimeout(flexingBird, random(500, 3000))
        }

        flexingBird()
    }
}

var bird1 = new Bird("bird1.gif", "150")
bird1.appendToBody()
bird1.flex()

var bird2 = new Bird("bird1.gif", "100")
bird2.appendToBody()
bird2.flex()

var bird3 = new Bird("bird1.gif", "200")
bird3.appendToBody()
bird3.flex()
/*
var bird1 = document.createElement("img")
bird1.src = "bird1.gif"
bird1.style.position = "absolute"
bird1.style.top = "0px"
bird1.style.left = "0px"
bird1.style.width = "140px"
bird1.style.transition = "3s"
document.body.appendChild(bird1)

)
function fly() {
    bird1.style.top = parseInt(Math.random() * window.innerHeight) + "px"
    bird1.style.left = parseInt(Math.random() * window.innerWidth) + "px"
}


document.onmouseenter = function toFly() {
    setInterval(function () {
        var i = 0
        while (i < 100) {
            fly()
            i++
        }
    }, 3000)
}

/*
bird1.onclick = function () {
    var start = Date.now();

    var timer = setInterval(function () {
        var timePassed = Date.now() - start;

        if (timePassed < 5000) {
            bird1.style.left = timePassed / 5 + 'px';
        }
        if (timePassed >= 5000 && timePassed < 10000) {
            bird1.style.top = timePassed / 25 + 'px';
        }
        if (timePassed >= 10000 && timePassed < 15000) {
            bird1.style.left = 1000 -  timePassed / 5 + 'px';
        }
        if (timePassed >= 15000 && timePassed < 20000) {
            bird1.style.top = 700 - timePassed / 25 + 'px';
        }

        if (timePassed >= 20000) clearInterval(timer);

    }, 50);
}

*/