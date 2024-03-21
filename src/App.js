import { useState } from 'react';
import './App.css';
import Box from './component/Box';

const choice = {
  rock: {
    name: 'rock',
    img: 'https://static.thenounproject.com/png/88661-200.png',
  },
  scissors: {
    name: 'scissors',
    img: 'https://static.thenounproject.com/png/88666-200.png',
  },
  paper: {
    name: 'paper',
    img: 'https://static.thenounproject.com/png/88662-200.png',
  },
};
const App = () => {
  const [userImg, setUserImg] = useState('');
  const [comImg, setComImg] = useState('');
  const [userResult, setUserResult] = useState('');
  const [comResult, setComResult] = useState('');

  const clickBtn = (userChoice) => {
    let comResult = random();
    setUserImg(choice[userChoice]);
    setComImg(comResult);
    setUserResult(gameOutcome(choice[userChoice].name, comResult.name));
    setComResult(gameOutcome(comResult.name, choice[userChoice].name));
  };

  const random = () => {
    let choiceKeys = Object.keys(choice);
    let randomNum = Math.floor(Math.random() * choiceKeys.length);
    let final = choiceKeys[randomNum];
    return choice[final];
  };

  const gameOutcome = (first, sec) => {
    if (first === sec) {
      return 'tie';
    }
    return (first === 'scissors' && sec === 'paper') ||
      (first === 'rock' && sec === 'scissors') ||
      (first === 'paper' && sec === 'rock')
      ? 'win'
      : 'lose';
  };

  return (
    <div>
      <div className="box-align">
        <Box title="나" img={userImg.img} result={userResult} />
        <Box title="컴퓨터" img={comImg.img} result={comResult} />
      </div>

      <div className="btn">
        <button onClick={() => clickBtn('scissors')}>가위</button>
        <button onClick={() => clickBtn('rock')}>바위</button>
        <button onClick={() => clickBtn('paper')}>보</button>
      </div>
    </div>
  );
};

export default App;
