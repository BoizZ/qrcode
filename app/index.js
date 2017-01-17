import qr from 'qr-image'
import 'native-reset.css/public/native/reset.css'
import '../sass/style.scss'

function createImage (text) {
    return qr.imageSync(text, { type: 'svg' })
}

function updateImage () {
    const link = document.getElementById('link').value || url
    const image = createImage(link)
    qrcode.innerHTML = image
}

chrome.tabs.query({
    'active': true,
    'lastFocusedWindow': true
}, function (tabs) {
    const url = tabs[0].url

    const image = createImage(url)
    const qrcode = document.getElementById('qrcode')
    const link = document.getElementById('link')
    const submit = document.getElementById('submit')

    link.setAttribute('value', url)
    qrcode.innerHTML = image
    submit.onclick = () => {updateImage()}
})