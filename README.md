# SpeechTextConverter

SpeechTextConverter is a real-time speech recognition library for web applications. Utilizing the Web Speech API's SpeechRecognition interface, this library provides a streamlined method to convert spoken language into written text, enhancing the user experience and accessibility of your application.

## Features

- Easy access to microphone stream and initiation of speech recognition
- Real-time transcription of spoken words into text
- Simplified error handling and browser compatibility checks
- Graceful start and stop of speech recognition
- Ablity to speak a statement.

## Check out demo app

[Demo App Link](https://dextrop.github.io/speechtextconverter/)

## Installation

You can install SpeechTextConverter using npm:

```bash
npm install speechtextconverter
```

## How to use

First, import the `{ TextToSpeech, SpeechToText }` function from the library:

```javascript
import { TextToSpeech, SpeechToText }  from 'speechtextconverter';

// Speech to text 
// SpeechToText ( callback )
SpeechToText((text, language) => {
    console.log(`You said: ${text}`);
    // .. add futher processing.
    // Required to detect changed if any
});

// Text to speech
// SpeechToText ( "Text to speak...." )
TextToSpeech("Hey harry how are you?")
```

## Language Supported for Speech to Text

Here is a table listing some of the language codes supported by the library `speechtextconverter` API, along with their respective language names and countries:

| Language Code | Language Name | Language Country |
|---------------|---------------|------------------|
| hi-IN         | Hindi         | India            |
| en-US         | English       | United States    |
| en-GB         | English       | United Kingdom   |
| fr-FR         | French        | France           |
| es-ES         | Spanish       | Spain            |
| de-DE         | German        | Germany          |
| it-IT         | Italian       | Italy            |
| pt-BR         | Portuguese    | Brazil           |
| ja-JP         | Japanese      | Japan            |
| ko-KR         | Korean        | South Korea      |
| zh-CN         | Chinese       | China            |
| ru-RU         | Russian       | Russia           |
| ar-SA         | Arabic        | Saudi Arabia     |
| tr-TR         | Turkish       | Turkey           |
| pl-PL         | Polish        | Poland           |

Please note that this list is not exhaustive, and there are additional language codes supported by the `window.SpeechRecognition` API.

## Compatibility

The software is compatible with NodeJS, ReactJS and Angular.
SpeechToText uses the Web Speech API, which is supported by most modern browsers. However, it may not work on some older browsers or certain mobile browsers.

## Contributing

We welcome contributions! Please feel free to submit a pull request or open an issue on our [GitHub repository](https://github.com/dextrop/speechtextconverter).

## License

SpeechTextConverter is [MIT licensed](./LICENSE).
