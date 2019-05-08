import "@babel/polyfill"
import './styles/main.scss'
import './router'

class Dialog {
  static close () {
    document.getElementById('dialog').style.display = 'none'
  }

  static open () {
    const dialog = document.getElementById('dialog')
    dialog.style.display = 'block'

    // auto focus first input
    const input = dialog.getElementsByTagName('input')
    if (input.length > 0) {
      const [firstInput] = input
      firstInput.focus()
    }
  }
}

window.Dialog = Dialog
