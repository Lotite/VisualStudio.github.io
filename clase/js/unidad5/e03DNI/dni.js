document.getElementById("num").addEventListener("keydown", (input) => {
    if ((!/[0-9]/.test(input.key) || input.target.value.length > 7) && input.key != "Backspace") {
        input.preventDefault();

    } else if (input.target.value.length == 7) {
        document.getElementById("char").value = "TRWAGMYFPDXBNJZSQVHLCKE".charAt(parseInt(input.target.value + input.key) % 23)
    }
    if (input.key == "Backspace") {
        document.getElementById("char").value = ""
    }
})
