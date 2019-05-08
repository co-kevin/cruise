import './styles/main.scss'
import './router'

import Popper from './components/popper/popper.html'

console.log(Popper)

function bindEventListener () {
  const btnPlus = document.querySelectorAll('.btn.plus')
  btnPlus.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log('on click', this)
    })
  })
}

bindEventListener()

window.removeResource = function (event) {
  console.log(event)
}
