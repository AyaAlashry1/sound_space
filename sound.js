// JavaScript source code


function showPreview(event) {
    if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("file - ip - 1 - preview");
        preview.src = src;
        preview.style.display ="block";
    }
}

function showPreview(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        var img = document.getElementById("file-ip-1-previe");
        img.src = reader.result;
    };
    reader.readAsDataURL(input.files[0]);
}
const btn = document.querySelector(".btn");
const form = document.querySelector(".form-input");{
    btn.addEventListener("click", function() {
        form.classList.toggle("showform");
    })
}



