const $input = document.querySelector("input")
const $button = document.querySelector("button")
const $output = document.querySelector("output")

$button.addEventListener("click", event => {
    const data = $input.value
    $output.textContent = data
})