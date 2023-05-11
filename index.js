// The function start audio stream, this steam is futher attached to window.SpeechRecognition
// once statement is finished callback is returned with final information.
// The function is currently not supported for background listening, make sure the function
// is called whenever SpeechRecognition is required.

function startSpeechRecognition(callback) {
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
        recognition.lang = 'en-US';

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

module.exports = startSpeechRecognition;
