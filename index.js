var stext = document.querySelector('#ratton ');
var btn = document.querySelector('#btn');
var result = document.querySelector('#result');

btn.addEventListener('click', function() {
    let com = stext.value.toLowerCase();
    let replay = "";

    if (com.match("hello")) {
        replay = `Search result: Hello World`;
    } else if (com.match("learn web development")) {
        replay = "Search result:  Getting staarted with web development by this course";
    } else if (com.match("how to learn javascript")) {
        replay = "Search result: Before starting any programing language you need to learn the basics of that language.";
    } else if (com.match("what is web design")) {
        replay = "Search result: Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; user interface design; authoring, including standardised code and proprietary software; user experience design; and search engine";
    } else if ("what is web development") {
        replay = "Search result: Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses";
    } else {
        replay = "please put a valid keyword!";
    }
    result.innerHTML = replay;
    var msg = new SpeechSynthesisUtterance(replay);
    window.speechSynthesis.speak(msg);
    var voices = window.speechSynthesis.getVoices();
    msg.voice = voices[10]; // Note: some voices don't support altering params
    msg.voiceURI = 'native';
});