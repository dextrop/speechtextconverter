// The function uses SpeechSynthesis to say a statement.
// 'Google US English' is used as voice if 
// found else the first selected voice is supported.
function TextToSpeech(text) {
    // Check if speechSynthesis is supported
    if (!window.speechSynthesis) {
        console.error('SpeechSynthesis is not supported in this browser.');
        return;
    }

    let utterance = new SpeechSynthesisUtterance();
    utterance.text = text;

    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1.2;
    utterance.lang = 'en-US';

    let voices = window.speechSynthesis.getVoices();
    utterance.voice = voices[0];

    for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === 'Google US English') {
            utterance.voice = voices[i];
            break;
        }
    }

    window.speechSynthesis.speak(utterance);
}

// The function start audio stream, this steam is futher attached to window.SpeechRecognition
// once statement is finished callback is returned with final information.
function SpeechToText(callback, language) {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        console.error('getUserMedia not supported on your browser!');
        return;
    }

    // Get access to the microphone stream
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then((stream) => {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

        if (!recognition) {
            console.log('SpeechRecognition not supported on your browser!');
            return;
        }

        // Set the language to recognize (optional)
        recognition.lang = 'en-US' || language;

        // Start listening when the user speaks
        recognition.onstart = () => {
            console.log('Listening...');
        };

        // Process the recognized speech
        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            if(event.results[0].isFinal) {
                recognition.stop();
                stream.getTracks().forEach(track => track.stop());
                if (callback) {
                    callback(text)
                }
            }
        };

        // Handle errors
        recognition.onerror = (event) => {
            console.error(`Speech recognition error: ${event.error}`);
        };

        recognition.stream = stream;
        recognition.start();
    })
    .catch((error) => {
        console.error(`Error getting microphone stream: ${error}`);
    });
}

module.exports = { 
    TextToSpeech,
    SpeechToText
}
