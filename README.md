# SpeechTextConverter

SpeechTextConverter is a real-time speech recognition library for web applications. Utilizing the Web Speech API's SpeechRecognition interface, this library provides a streamlined method to convert spoken language into written text, enhancing the user experience and accessibility of your application.

## Features

- Easy access to microphone stream and initiation of speech recognition
- Real-time transcription of spoken words into text
- Simplified error handling and browser compatibility checks
- Graceful start and stop of speech recognition

## Check out demo app

[Demo App Link](https://dextrop.github.io/speechtextconverter/)

## Installation

You can install SpeechTextConverter using npm:

```bash
npm install speechtextconverter
```

## How to use in ReactJS

First, import the `startSpeechRecognition` function from the library:

```javascript
import React, { useState } from 'react';
import startSpeechRecognition from 'speechtextconverter';

function App() {
  const [text, setText] = useState('');

  const handleClick = () => {
    startSpeechRecognition(setText);
  };

  return (
    <div>
      <button onClick={handleClick}>Start Speech Recognition</button>
      <pre>{text}</pre>
    </div>
  );
}

export default App;
```

## How to use in Angular

Here's a simple example of using SpeechTextConverter in a Angular application:

```javascript
const startSpeechRecognition = require('speechtextconverter');
import { ChangeDetectorRef } from '@angular/core';

constructor(private cd: ChangeDetectorRef) { }

startProcess() {
    startSpeechRecognition((text) => {
        console.log(`You said: ${text}`);
        // .. add futher processing.
        // Required to detect changed if any
        this.cd.detectChanges();
    });
}
```

## How to use in NodeJS

Here's a simple example of using SpeechTextConverter in a NodeJS application:

```javascript
const startSpeechRecognition = require('speechtextconverter');

startSpeechRecognition(text => {
    console.log('Recognized text:', text);
});
```

In this example, the transcribed text will be logged to the console once the user's speech input is finalized.

## Compatibility

SpeechTextConverter uses the Web Speech API, which is supported by most modern browsers. However, it may not work on some older browsers or certain mobile browsers.

## Contributing

We welcome contributions! Please feel free to submit a pull request or open an issue on our [GitHub repository](https://github.com/dextrop/speechtextconverter).

## License

SpeechTextConverter is [MIT licensed](./LICENSE).
