import React from 'react';
import './App.css';
import CalcForm from './components/CalcForm';
import { useState } from 'react';

function App() {
  const [numberNow, setNubmerNow] = React.useState('');
  const [fullNumber, setFullNumber] = React.useState('');

  const calcEquals = () => {
    if (numberNow.includes('Ответ')) {
      setFullNumber('');
      setNubmerNow('');
    } else {
      let strNum = fullNumber + numberNow;
      //====
      setFullNumber(fullNumber + numberNow);

      let operantArr = [''];
      let numArr = [''];
      for (let i = 0, t = 0; i < strNum.length; i++) {
        if (strNum[i] === '-' || strNum[i] === '+' || strNum[i] === '*' || strNum[i] === '/') {
          operantArr[t] = strNum[i];
          t++;
          numArr[t] = '';
        } else {
          numArr[t] = numArr[t] + strNum[i];
        }
      }
      //MULT DEVID
      for (let i = 0; i < numArr.length; i++) {
        if (operantArr[i] === '*') {
          numArr[i + 1] = numArr[i] * numArr[i + 1];
          numArr.splice(i, 1); // начиная со второго элемента удаляем один элемент
          operantArr.splice(i, 1);
          i--;
        } else if (operantArr[i] === '/') {
          numArr[i + 1] = numArr[i] / numArr[i + 1];
          numArr.splice(i, 1); //
          operantArr.splice(i, 1);
          i--;
        }
      }
      //SUM _ MINUS
      for (let i = 0; i < numArr.length; i++) {
        if (operantArr[i] === '+') {
          numArr[i + 1] = Number(numArr[i]) + Number(numArr[i + 1]);
          numArr.splice(i, 1); //
          operantArr.splice(i, 1);
          i--;
        } else if (operantArr[i] === '-') {
          numArr[i + 1] = Number(numArr[i]) - Number(numArr[i + 1]);
          numArr.splice(i, 1); //
          operantArr.splice(i, 1);

          i--;
        }
      }

      console.log(numArr[0]);
      if (numArr[0]) {
        setNubmerNow(`Ответ:  ${numArr[0]} `);
      }
    }
  };

  return (
    <>
      <div className="container">
        <CalcForm
          numberNow={numberNow}
          setNubmerNow={setNubmerNow}
          fullNumber={fullNumber}
          setFullNumber={setFullNumber}
          /////

          calcEquals={calcEquals}
        />
      </div>
    </>
  );
}

export default App;

// for (let i = 0; i < numArr.length; i++) {
//   if (operantArr[i] === '*') {
//   //  console.log(numArr[i] * numArr[i + 1], 'xxxxx тут умножение ');
//     numArr[i + 1] = numArr[i] * numArr[i + 1];

//     numArr.splice(i, 1); // начиная со второго элемента удаляем один элемент
//  //   console.log('new___', numArr[i + 1], 'ALLarr__ ', numArr);
//     operantArr.splice(i, 1);
//   //  console.log(operantArr, ' тут новые операторы');
//     i--;
//   } else if (operantArr[i] === '/') {
//   //  console.log(numArr[i] / numArr[i + 1], '//////// тут деление ');
//     numArr[i + 1] = numArr[i] / numArr[i + 1];

//     numArr.splice(i, 1); // начиная со второго элемента удаляем один элемент
//   //  console.log('new___', numArr[i + 1], 'ALLarr__ ', numArr);
//     operantArr.splice(i, 1);
//   //  console.log(operantArr, ' тут новые операторы');
//     i--;
//   }
// }

// for (let i = 0; i < numArr.length; i++) {
//   if (operantArr[i] === '+') {
//   //  console.log(Number(numArr[i]) + Number(numArr[i + 1]), '++++++ тут сложение ');
//     numArr[i + 1] = Number(numArr[i]) + Number(numArr[i + 1]);

//     numArr.splice(i, 1); // начиная со второго элемента удаляем один элемент
//   //  console.log('new___', numArr[i + 1], 'ALLarr__ ', numArr);
//     operantArr.splice(i, 1);
//    // console.log(operantArr, ' тут новые операторы');
//     i--;
//   } else if (operantArr[i] === '-') {
//   //  console.log(Number(numArr[i]) - Number(numArr[i + 1]), '---------- тут вычитание ');
//     numArr[i + 1] = Number(numArr[i]) - Number(numArr[i + 1]);

//     numArr.splice(i, 1); // начиная со второго элемента удаляем один элемент
//     //console.log('new___', numArr[i + 1], 'ALLarr__ ', numArr);
//     operantArr.splice(i, 1);
//   //  console.log(operantArr, ' тут новые операторы');
//     i--;
//   }
// }
