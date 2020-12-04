function darkTheme() {
    var body = document.body;
    body.classList.toggle("dark-theme");

    var button = document.getElementById("darkButton");
    if (button.innerHTML == "Dark Theme") {
        button.innerHTML = "Light Theme";
    } else {
        button.innerHTML = "Dark Theme";
    }

}


function off() {
    $('#save').css('opacity', '0');
    $('#cancle').css('opacity', '0');
    $('#textArea').css('opacity', '0');
}

function on() {
    $('#save').css('opacity', '1');
    $('#cancle').css('opacity', '1');
    $('#textArea').css('opacity', '1');
}

var notesArray = [];

for (var i = 0; i < notesArray.length; i++) {
    var item = notesArray[i];
    console.log(item);
}

notesArray = []
object(title = "note one", body = "some text 2")
object(title = "note two", body = "some text 2")