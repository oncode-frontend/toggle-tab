const $ = document
const getButtonElems = $.querySelectorAll(".tab-button")
const getContentElems = $.querySelectorAll(".content")
const getButtonWrapperElems = $.querySelector(".button-wrapper")



getButtonWrapperElems.addEventListener("click", (event) => {
    const currentContentId = event.target.dataset.id
    const currentContent = $.querySelector(`#${currentContentId}`)
    getButtonElems.forEach(btn => {
        btn.classList.remove('active')
    })
    event.target.classList.add('active')
    
    getContentElems.forEach(content => {
        content.classList.remove('active')
    })

    currentContent.classList.add('active')
})