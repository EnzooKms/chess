const cells = document.getElementById('game').querySelectorAll('.cells')
let i = 0

export default function board() {

    for (let y = 0; y < 8; y++) {

        for (let x = 0; x < 8; x++) {


            if ((x + y) % 2 === 0) cells[i].style.backgroundColor = 'rgba(255, 255, 255, 0.85)'
            else cells[i].style.backgroundColor = 'black'

            i++

        }

    }
}