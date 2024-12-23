let button = document.querySelector('button');
let dataDiv = document.querySelector('.definition');

let div = document.createElement('div');
    div.style.border = '1px solid black';
    div.style.padding = '10px';
    div.style.margin = '10px';

button.addEventListener('click', () => {
    let wordData = document.querySelector('#enterText').value;
    
    if (!wordData) {
        div.innerText = 'Pleae enter a word to find the definition';
        dataDiv.appendChild(div);
    }
    else {
        fetchDefinition(wordData);
    }
});

async function fetchDefinition(wordData) {
    try {
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordData}`);
        console.log(response);
        let data = await response.json();
        console.log(data);

        let definition = data[0].meanings[0].definitions[0].definition;
        let partsOfSpeech = data[0].meanings[0].partOfSpeech;
        let exampleSentence = data[0].meanings[0].definitions[0].example  || 'No Examples found';
        let synonymOfWord = data[0].meanings[0].definitions[0].synonyms[0] || 'No Synonyms found';
        let antonymOfWord = data[0].meanings[0].definitions[0].antonyms[0] || 'No Antonyms found';
        div.innerHTML = `
        <b>Definition of '${wordData}' </b> : ${definition} <br>
        <b>Parts of Speech</b> : ${partsOfSpeech} <br>
        <b>Example sentence</b> : ${exampleSentence} <br>
        <b>Synonyms</b> : ${synonymOfWord} <br>
        <b>Antonyms</b> : ${antonymOfWord}
        `;

        dataDiv.appendChild(div);
    }
    catch (error) {
        console.error(`Error : ${error}`);
        div.innerHTML = 'Definition not found please try another word';
        dataDiv.appendChild(div);
    }
}
