# SpeechTextConverter

SpeechTextConverter is a real-time speech recognition library for web applications. Utilizing the Web Speech API's SpeechRecognition interface, this library provides a streamlined method to convert spoken language into written text, enhancing the user experience and accessibility of your application.

## Features

- Easy access to microphone stream and initiation of speech recognition
- Real-time transcription of spoken words into text
- Simplified error handling and browser compatibility checks
- Graceful start and stop of speech recognition

## Installation

You can install SpeechTextConverter using npm:

```bash
npm install speechtextconverter
```

## Usage

First, import the `startListening` function from the library:

```javascript
const startListening = require('speechtextconverter');
```

Then, call `startListening()` with a callback function that will receive the transcribed text:

```javascript
startListening((text) => {
    console.log(text);
});
```

## Example

Here's a simple example of using SpeechTextConverter in a Node.js application:

```javascript
const startListening = require('speechtextconverter');

startListening((text) => {
    console.log(`You said: ${text}`);
});
```

In this example, the transcribed text will be logged to the console once the user's speech input is finalized.

## Compatibility

SpeechTextConverter uses the Web Speech API, which is supported by most modern browsers. However, it may not work on some older browsers or certain mobile browsers.

## Contributing

We welcome contributions! Please feel free to submit a pull request or open an issue on our [GitHub repository](https://github.com/dextrop/speechtextconverter).

## License

SpeechTextConverter is [MIT licensed](./LICENSE).
