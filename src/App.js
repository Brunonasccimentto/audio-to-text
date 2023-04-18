import './App.css';
import axios from "axios";
import Text from './components/text';
import Form from './components/form';
import { useState } from 'react';

function App() {

  const [text, setText] = useState()

  function convert(e) {

    e.preventDefault()
    const inputfile = document.getElementById("file")
    const file = inputfile.files[0]

    const data = new FormData();
    data.append("file", file, `${file.name}`);
    data.append("args", "{\"stt_engine\": \"whisper\"}");

    const options = {
        method: 'POST',
        url: 'https://ardic-speech-to-text-service.p.rapidapi.com/stt',
        headers: {
            'X-RapidAPI-Key': 'fd69c01475mshd7e920f5811189cp1cca0cjsn2932aed4c658',
            'X-RapidAPI-Host': 'ardic-speech-to-text-service.p.rapidapi.com'
        },
        data: data
    };

    axios.request(options).then(function (response) {
        setText(response.data)
    }).catch(function (error) {
        setText("O arquivo de audio deve ser menor que 1MB")
    });
  }


  return (
    <div className="App">
        <Text response={text}/>
        <Form convert={convert}/>    
    </div>

  );
}

export default App;
