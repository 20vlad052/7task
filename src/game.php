<?php

class GameField {
  private $numberAttempts = 3;
  private $notification = '';

  public function handleClick($coord) {
    if ($this->numberAttempts > 0) {
      $result;
      $rand = rand(0, 100) / 100;
      if ($rand < 0.3) {
        $result = 'Поражение';
        $this->numberAttempts--;
      } else if ($rand >= 0.3 && $rand < 0.7) {
        $result = 'Победа!!!';
        $this->numberAttempts++;
      } else {
        $result = 'Попробуй еще раз';
      }

      sleep(5);

      $newNotification = $this->getResultNotification($coord, $result);
      $this->notification = $newNotification;
    } else {
      $newNotification = 'Попыток больше нет';
      $this->notification = $newNotification;
    }
  }

  private function getResultNotification($coord, $result) {
    $notification = '';
    switch ($result) {
      case 'Поражение':
        $notification = 'Не удача в поле ' . $coord;
        break;
      case 'Победа!!!':
        $notification = 'Удача в  поле ' . $coord;
        break;
      case 'Попробуй ещё раз':
        $notification = 'Попробуй ещё раз!';
        break;
      default:
        $notification = 'Не удача в поле ' . $coord;
    }
    return $notification;
  }

  public function render() {
    $letters = ['A', 'B', 'C', 'D', 'E'];
    $numbers = [1, 2, 3, 4, 5];
    $buttonList = '';
    foreach ($letters as $l) {
      foreach ($numbers as $n) {
        $buttonList .= '<button onClick="handleClick(\'' . $l . $n . '\')" key="' . $l . $n . '" class="button">' . $l . $n . '</button>';
      }
    }

    return '
      <div class="game-container">
        <div class="button-grid">' . $buttonList . '</div>
        <p>У тебя осталось пару попыток (' . $this->numberAttempts . ')</p>
        <p class="notification">' . $this->notification . '</p>
      </div>
    ';
  }
}

$gameField = new GameField();

echo $gameField->render();

?>