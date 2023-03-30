import React from 'react';

const CalcForm = ({
  numberNow,
  setNubmerNow,
  fullNumber,
  setFullNumber,

  calcEquals,
}) => {
  const calcNull = () => {
    setFullNumber('');
    setNubmerNow('');
  };

  const calcMinus = (operand) => {
    if (numberNow.includes('Ответ')) {
      console.log('INCLUDES__calcMinus_Ответ');
      calcNull();
    } else {
      console.log(fullNumber + numberNow);
      setFullNumber(fullNumber + numberNow);
      setNubmerNow(operand);
    }
  };

  const num1 = (num) => {
    if (numberNow.includes('Ответ')) {
      console.log('INCLUDES__num1_Ответ');
      calcNull();
    } else {
      setNubmerNow(numberNow + num);
      // console.log(numberNow);
    }
  };

  const btnDel = () => {
    let newNum = numberNow.substr(0, numberNow.length - 1);
    console.log(newNum, 'Substr');
    setNubmerNow(newNum);
  };

  return (
    <div className="calcFormAll">
      <div className="row_input">
        <input
          className="inp"
          placeholder="input value1"
          type="text"
          name="name"
          value={numberNow}
          onChange={() => {}}
        />
      </div>
      <div className="row_input_2">
        <input
          className="inp2"
          placeholder="count place"
          type="text"
          name="name"
          value={fullNumber}
          onChange={() => {}}
        />
      </div>

      <div className="wrapper_btns">
        <div className="row_btns">
          <button
            className="btn2"
            onClick={() => {
              calcNull();
            }}>
            AC
          </button>
          <button
            className="btn1"
            onClick={() => {
              btnDel();
            }}>
            DEL
          </button>
          <button
            className="btn1"
            onClick={() => {
              calcMinus('/');
            }}>
            /
          </button>
        </div>

        <div className="row_btns">
          <button
            className="btn1"
            onClick={() => {
              num1(1);
            }}>
            1
          </button>
          <button
            className="btn1"
            onClick={() => {
              num1(2);
            }}>
            2
          </button>
          <button
            className="btn1"
            onClick={() => {
              num1(3);
            }}>
            3
          </button>
          <button
            className="btn1"
            onClick={() => {
              calcMinus('*');
            }}>
            *
          </button>
        </div>
        <div className="row_btns">
          <button
            className="btn1"
            onClick={() => {
              num1(4);
            }}>
            4
          </button>
          <button
            className="btn1"
            onClick={() => {
              num1(5);
            }}>
            5
          </button>
          <button
            className="btn1"
            onClick={() => {
              num1(6);
            }}>
            6
          </button>
          <button
            className="btn1"
            onClick={() => {
              calcMinus('+');
            }}>
            +
          </button>
        </div>
        <div className="row_btns">
          <button
            className="btn1"
            onClick={() => {
              num1(7);
            }}>
            7
          </button>
          <button
            className="btn1"
            onClick={() => {
              num1(8);
            }}>
            8
          </button>
          <button
            className="btn1"
            onClick={() => {
              num1(9);
            }}>
            9
          </button>
          <button
            className="btn1"
            onClick={() => {
              calcMinus('-');
            }}>
            -
          </button>
        </div>

        <div className="row_btns">
          <button
            className="btn1"
            onClick={() => {
              num1('.');
            }}>
            .
          </button>
          <button
            className="btn1"
            onClick={() => {
              num1(0);
            }}>
            0
          </button>
          <button
            className="btn2"
            onClick={() => {
              calcEquals();
            }}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};
export default CalcForm;
