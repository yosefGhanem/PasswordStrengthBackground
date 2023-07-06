// As we start to type, the longer the password length is, the less blurry we want the image to be.

// Essentially subtract from 20px whatever the length is then multiply by 2

const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input',(e) => {
    // that's where we get the input
    const input = e.target.value
    console.log(input)

    // for length of input
    const length = input.length
    //console.log(20 - length * 2) //we get 18 , 16 , 14
    const blurValue = 20 - length * 2
    background.style.filter = `blur(${blurValue}px)`
})
