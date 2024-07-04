const fileInput = document.querySelector('#file')
const mediaUploadLabel = document.querySelector('#media-upload-label')
const mediaVideo = document.querySelector('#media-video')
const mediaSource = document.querySelector('#media-source')

fileInput.addEventListener('change', onFileChange)

function onFileChange(event) {
  const file = event.target.files[0]
  const reader = new FileReader()

  reader.onload = (e) => {
    mediaSource.type = file.type
    mediaSource.src = e.target.result
    mediaVideo.innerHTML = mediaVideo.innerHTML
    mediaUploadLabel.textContent = file.name
    mediaUploadLabel.classList.add('success')
  }

  reader.readAsDataURL(file)
}
