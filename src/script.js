const wrapperIconShare = document.querySelector('.wrapper-icon-share')
const wrapperShareOptions = document.querySelector('.wrapper-share-options')
const writtenBy = document.querySelector('.written-by')

wrapperIconShare.addEventListener('click', () => {
  wrapperShareOptions.classList.toggle('active')
  writtenBy.classList.toggle('active')
})