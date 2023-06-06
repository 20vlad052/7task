import React, { Component } from 'react';
 
 
class GameField extends Component {  
  constructor(props) {  
    super(props);  
    this.numberAttempts = 3;  
    this.state = {  
      notification: '',  
    };  
  }  
 
  handleClick = (coord) => {  
    if (this.numberAttempts > 0) {  
      let result;  
      const rand = Math.random();  
      if (rand < 0.3) {  
        result = 'Поражение';  
        this.numberAttempts--;  
      } else if (rand >= 0.3 && rand < 0.7) {  
        result = 'Победа!!!';  
        this.numberAttempts++;  
      } else {  
        result = 'Попробуй еще раз';  
      }  
 
      setTimeout(() => {  
        const newNotification = this.getResultNotification(coord, result);  
        this.setState({ notification: newNotification });  
      }, 5000);  
    } else {  
      const newNotification = 'Попыток больше нет';  
      this.setState({ notification: newNotification });  
    }  
  };  
 
  getResultNotification = (coord, result) => {  
    let notification = '';  
    switch (result) {  
      case 'Поражение':  
        notification = `Не удача в поле ${coord} `;  
        break;  
      case 'Победа!!!':  
        notification = ` Удача в  поле ${coord} `;   
        break;  
      case 'Попробуй ещё раз':  
        notification = 'Попробуй ещё раз!';  
        break;  
      default:  
        notification = `Не удача в поле ${coord} `;  
    }  
    return notification;  
  };  
 
  render() {  
    const letters = ['A', 'B', 'C', 'D', 'E'];  
    const numbers = [1, 2, 3, 4, 5];  
    const buttonList = letters.map((l) =>  
      numbers.map((n) => (  
        <button onClick={() => this.handleClick(`${l}${n}`)} key={`${l}${n}`} className="button">  
          {`${l}${n}`}  
        </button>  
      ))  
    );  
 
    return (  
      <div className="game-container">  
        <div className="button-grid">{buttonList}</div>  
        <p>У тебя осталось пару попыток ({this.numberAttempts})</p>  
        <p className="notification">{this.state.notification}</p>  
      </div>  
    );  
  }  
} 
 
export default GameField;