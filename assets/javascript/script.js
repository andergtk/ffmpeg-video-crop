const uploadContainer = document.querySelector('.upload-container')
const uploadLabel = document.querySelector('.upload-label')
const playerVideo = document.querySelector('.player video')
const playerSource = document.querySelector('.player source')
const fileInput = document.querySelector('#file')

fileInput.addEventListener('change', onFileChange)

function onFileChange(event) {
  const file = event.target.files[0]
  const reader = new FileReader()

  reader.onload = (e) => {
    playerSource.type = file.type
    playerSource.src = e.target.result
    playerVideo.innerHTML = playerVideo.innerHTML

    uploadContainer.classList.add('success')
    uploadLabel.textContent = file.name
  }

  reader.readAsDataURL(file)
}
