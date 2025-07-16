# 🎮 Game API — Завершение Матча

Этот раздел описывает использование интерфейса `Game` из `pixel_combats/room`, который позволяет управлять завершением игры, перезапуском и обработкой событий окончания матча.

## Импорт

```ts
import { Game, Ui } from "pixel_combats/room";
```

> Этот импорт предоставляет доступ к управлению состоянием игры: завершению, перезапуску и обработке событий победы.

---

## Свойства

### `Game.IsGameOver`

- **Описание**: Возвращает `true`, если игра уже завершена.
- **Тип**: `boolean`
- **Пример**:
```ts
if (Game.IsGameOver) Ui.GetContext().Hint.Value = "Игра уже окончена";
```

---

## Методы

### `Game.RestartGame()`

- **Описание**: Перезапускает текущую игру в комнате.
- **Пример**:
```ts
Game.RestartGame();
```

---

### `Game.GameOver(winner)`

- **Описание**: Завершает игру. Может принимать команду или игрока в качестве победителя, либо передавать лидерборд.

#### Примеры:

#### Победа одной команды
```ts
Game.GameOver(Teams.Get("teamId"));
```

#### Победа одного игрока
```ts
Game.GameOver(Players.Get("playerId"));
```

#### Несколько победителей (ничья)
```ts
const winners = [Teams.Get("team1"), Teams.Get("team2")];
Game.GameOver(winners);
```

#### Лидерборд команд
```ts
const leaderBoard = [
  Teams.Get("team1"),
  Teams.Get("team2"),
  Teams.Get("team3")
];
Game.GameOver(leaderBoard);
```

#### Лидерборд игроков
```ts
const playerLeaderBoard = [
  Players.Get("player1"),
  Players.Get("player2"),
  Players.Get("player3")
];
Game.GameOver(playerLeaderBoard);
```

---

## События

### `Game.OnGameOver.Add(() => {})`

- **Описание**: Вызывается при завершении игры, до определения победителей.
- **Пример**:
```ts
Game.OnGameOver.Add(() => {
  Ui.GetContext().Hint.Value = "Игра окончена";
});
```

---

### `Game.OnTeamsWin.Add((teams) => {})`

- **Описание**: Вызывается, когда игра завершена и есть победители среди команд.
- **Параметр**: массив команд (`Team[]`)
- **Примечание**: Если в массиве несколько команд — это ничья.
- **Пример**:
```ts
Game.OnTeamsWin.Add((winners) => {
  winners.forEach(team => {
    Ui.GetContext(team).Hint.Value = `Команда ${team.Id} выиграла!`;
  });
});
```

---

### `Game.OnPlayersWin.Add((players) => {})`

- **Описание**: Вызывается, когда игра завершена и есть победители среди игроков.
- **Параметр**: массив игроков (`Player[]`)
- **Примечание**: Если в массиве несколько игроков — это ничья.
- **Пример**:
```ts
Game.OnPlayersWin.Add((winners) => {
  winners.forEach(player => {
    Ui.GetContext(player).Hint.Value = `Игрок ${player.Name} выиграл!`;
  });
});
```

