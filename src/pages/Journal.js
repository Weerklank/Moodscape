import React, { useState } from 'react';
import '../utils/css/journal.css'
import { NewButton, Button, Img } from '../components/Buttons'
import { BtnColumn, BtnRow } from '../components/InputHolders';
import { Emote, Paper, Lines } from '../components/JournalPage';
import SubmitBtn from '../components/SubmitBtn'
import { Body } from '../components/Background';

function Journal() {
    const lineC = localStorage.getItem('line')
    const paperC = localStorage.getItem('paper')
    const emote = localStorage.getItem('emote')
    const [pageColor, setPageColor] = useState(paperC || "purple")
    const [lineColor, setLineColor] = useState(lineC || "gold")
    const [emotion, setEmotion] = useState(emote)
    const [hidden, setHidden] = useState('hidden')
    const [disabled, setDisabled] = useState(false)
    const [selected, setSelected] = useState('')
    const [journalPage, setJournalPage] = useState('')
  
    function changePage(color){
      switch (color) {
        case 'silver':
          setLineColor('silver')
          localStorage.setItem('line','silver')
          break;
  
        case 'gold':
          setLineColor('gold')
          localStorage.setItem('line','gold')
          break;
  
        case 'purple':
          setPageColor('purple')
          localStorage.setItem('paper','purple')
          break;
  
        case 'red':
          setPageColor('red')
          localStorage.setItem('paper','red')
          break;
  
        case 'blue':
          setPageColor('blue')
          localStorage.setItem('paper','blue')
          break;
      
        default:
          alert('something has gone horribly wrong')
          break;
      }
    }
  
    function setEmote(emote){
      setSelected(emote)
      setEmotion(emote)
      localStorage.setItem('emote',emote)
      setDisabled(true)
      setHidden('shown')
      setTimeout(() => {setHidden('hidden'); setDisabled(false)}, 2000);
    }

    function textInput(event) {
      const value  = event.target.value;
      console.log('Journal entry is: '+value)
      setJournalPage(value)
      console.log(journalPage)
    };
    
    function sendInfo(value) {
      console.log(value)
      // journalEntry.addEntry(value.content, value.mood, function(res) {
      //   console.log(res)
      // })
    }
  
    return (
      <Body>
        <SubmitBtn values={{
          content: journalPage,
          mood: emotion
        }} click={sendInfo}></SubmitBtn>
        <BtnColumn lColor={lineColor}>
          <Button values='silver' name='btn lineButton silver' click={changePage}></Button>
          <Button values='gold' name='btn lineButton gold' click={changePage}></Button>
          <p>Line Color</p>
          <Button values='purple' name='btn colButton purple' click={changePage}></Button>
          <Button values='red' name='btn colButton red' click={changePage}></Button>
          <Button values='blue' name='btn colButton blue' click={changePage}></Button>
         <p>Paper Color</p>
         </BtnColumn>
        <Paper lColor={lineColor} pColor={pageColor}>
          <Lines lColor={lineColor}>
            <textarea 
            className='journal'
            onChange={textInput}
            />
          </Lines>
        <BtnRow lColor={lineColor}>
              <NewButton values={'Amazed'} click={setEmote} dis={disabled} sel={selected}>
                  <Img src={require('../utils/img/Amazed.png')} sel={selected} val={'Amazed'}/>
              </NewButton>
              <NewButton values={'Happy'} click={setEmote} dis={disabled} sel={selected}>
                  <Img src={require('../utils/img/Happy.png')} sel={selected} val={'Happy'}/>
              </NewButton>
              <NewButton values={'Satisfied'} click={setEmote} dis={disabled} sel={selected}>
                  <Img src={require('../utils/img/Satisfied.png')} sel={selected} val={'Satisfied'}/>
              </NewButton>
              <NewButton values={'Tired'} click={setEmote} dis={disabled} sel={selected}>
                  <Img src={require('../utils/img/Tired.png')} sel={selected} val={'Tired'}/>
              </NewButton>
              <NewButton values={'Sad'} click={setEmote} dis={disabled} sel={selected}>
                  <Img src={require('../utils/img/Sad.png')} sel={selected} val={'Sad'}/>
              </NewButton>
              <NewButton values={'Hurt'} click={setEmote} dis={disabled} sel={selected}>
                  <Img src={require('../utils/img/Hurt.png')} sel={selected} val={'Hurt'}/>
              </NewButton>
              <NewButton values={'Disgusted'} click={setEmote} dis={disabled} sel={selected}>
                  <Img src={require('../utils/img/Disgusted.png')} sel={selected} val={'Disgusted'}/>
              </NewButton>
              <NewButton values={'Bored'} click={setEmote} dis={disabled} sel={selected}>
                  <Img src={require('../utils/img/Bored.png')} sel={selected} val={'Bored'}/>
              </NewButton>
              <NewButton values={'Angry'} click={setEmote} dis={disabled} sel={selected}>
                  <Img src={require('../utils/img/Angry.png')} sel={selected} val={'Angry'}/>
              </NewButton>
              <NewButton values={'Ashamed'} click={setEmote} dis={disabled} sel={selected}>
                  <Img src={require('../utils/img/Ashamed.png')} sel={selected} val={'Ashamed'}/>
              </NewButton>
              <NewButton values={'Worried'} click={setEmote} dis={disabled} sel={selected}>
                  <Img src={require('../utils/img/Worried.png')} sel={selected} val={'Worried'}/>
              </NewButton>
              <NewButton values={'Confused'} click={setEmote} dis={disabled} sel={selected}>
                  <Img src={require('../utils/img/Confused.png')} sel={selected} val={'Confused'}/>
              </NewButton>
              <NewButton values={'Surprised'} click={setEmote} dis={disabled} sel={selected}>
                  <Img src={require('../utils/img/Surprised.png')} sel={selected} val={'Surprised'}/>
              </NewButton>
              <NewButton values={'Afraid'} click={setEmote} dis={disabled} sel={selected}>
                  <Img src={require('../utils/img/Afraid.png')} sel={selected} val={'Afraid'}/>
              </NewButton>
      </BtnRow>
  </Paper>
    <Emote isHidden={hidden}><span>{emotion}</span></Emote>
  
  <script src='https://code.jquery.com/jquery-3.5.1.min.js'></script>
  <script type='text/javascript' src='./utils/js/journalScript.js'></script>
  </Body>
  )
}

export default Journal;