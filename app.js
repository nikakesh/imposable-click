const bt = document.querySelector('button')
let x = 100, y = 200;
const Width = document.body.clientWidth
const Height = document.body.clientHeight
let t = 0, time;
bt.textContent = 'click me'

const Change = () => {
    const newX = x - 60
    const newY = y - 60
    bt.style.marginLeft = `${newX >= 0 && newX < Width ? newX 
                                                      : Choose() 
                            }px`;
    bt.style.marginTop = `${newY >= 0 && newY < Height ? newY
                                                      : Choose()
                           }px`;
}

const rand = (c) => {
    return c == 'x' ? Math.floor( Math.random() * Width )
                    : Math.floor( Math.random() * Height )
}

const Choose = () => {
    x = rand('x')
    y = rand('y')
    Change()
}

setInterval(() => {
    t++;
    time = (t/60).toFixed(1) + ' minutes'
}, 1000)

bt.addEventListener('mouseover', (e) => {
    if(bt.textContent == 'click me') bt.textContent = 'if u can'
    Choose()
})

bt.addEventListener('click', () => {
    bt.textContent = `wow u just wasted ${time} trying to click the button`
    x = 60;
    y = 60;
    Change()
    bt.style.width = Width + 'px'
    bt.style.height = Height + 'px'
})