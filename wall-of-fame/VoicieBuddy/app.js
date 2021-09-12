const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices(){
    voices = this.getVoices();
    
    const voiceOptions = voices.map((voice)=>{
        return `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`;
    }).join("");
    voicesDropdown.innerHTML=voiceOptions;
    
}
function setVoice(){
    msg.voice = voices.find(voice=> {
        return voice.name===this.value;
    });
    // console.log(msg.voice);
    toggle();
}
 function toggle(){
     speechSynthesis.cancel();
     speechSynthesis.speak(msg);
 }
 function setOption(){
     
    //  var ok = this.name;
     msg[this.name] = this.value;
     toggle();
 }

speechSynthesis.addEventListener('voiceschanged',populateVoices);
voicesDropdown.addEventListener('change',setVoice);

options.forEach(option=>option.addEventListener('change',setOption));
speakButton.addEventListener("click",toggle);
stopButton.addEventListener("click",()=>speechSynthesis.cancel());