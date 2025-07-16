# 🏆 LeaderBoard API — Система Лидербордов

Этот раздел документирует использование модуля `LeaderBoard` из `pixel_combats/room`, который позволяет настраивать и отображать **рейтинги игроков и команд** на основе их свойств.

## Импорты

```js
import { LeaderBoard } from "pixel_combats/room";
import { DisplayValueHeader } from "pixel_combats/basic";
```

> Эти импорты предоставляют доступ к настройке и отображению лидербордов в комнате.

---

## 🧱 Определение отображаемых значений

### `new DisplayValueHeader(valueId, displayName, shortDisplayName)`

- **Описание**: Создаёт заголовок для отображения значения в лидерборде.
- **Параметры**:
  - `valueId` — ID свойства (например, `"kills"`).
  - `displayName` — отображаемое имя (например, `"Убийства"`).
  - `shortDisplayName` — краткое имя (например, `"Уб"`).

- **Пример**:
```js
const VALUE = "kills";
const DISPLAY_NAME = "Убийства";
const SHORT_DISPLAY_NAME = "Уб";

const displayValueHeader = new DisplayValueHeader(VALUE, DISPLAY_NAME, SHORT_DISPLAY_NAME);
```

---

## 📊 Настройка лидербордов

### `LeaderBoard.PlayerLeaderBoardValues`

- **Описание**: Массив значений, которые будут отображаться в лидерборде игроков.
- **Пример**:
```js
LeaderBoard.PlayerLeaderBoardValues = [displayValueHeader];
```

---

### `LeaderBoard.TeamLeaderBoardValue`

- **Описание**: Значение, которое будет отображаться в лидерборде команд.
- **Пример**:
```js
LeaderBoard.TeamLeaderBoardValue = displayValueHeader;
```

---

### `LeaderBoard.TeamWeightGetter.Set(func)`

- **Описание**: Устанавливает функцию, возвращающую вес команды для сортировки.
- **Пример**:
```js
LeaderBoard.TeamWeightGetter.Set(team => team.Properties.Get(VALUE).Value);
```

---

### `LeaderBoard.PlayersWeightGetter.Set(func)`

- **Описание**: Устанавливает функцию, возвращающую вес игрока для сортировки.
- **Пример**:
```js
LeaderBoard.PlayersWeightGetter.Set(player => player.Properties.Get(VALUE).Value);
```

---

## 📤 Получение лидербордов

### `LeaderBoard.GetTeams()`

- **Описание**: Возвращает отсортированный список команд с их весами.
- **Тип возвращаемого значения**: `Array<{ Team: Team, Weight: number }>`
- **Пример**:
```js
const teamLeaderBoard = LeaderBoard.GetTeams();
teamLeaderBoard.forEach(item => {
  console.log(`Команда: ${item.Team.Name}, Вес: ${item.Weight}`);
});
```

---

### `LeaderBoard.GetPlayers()`

- **Описание**: Возвращает отсортированный список игроков с их весами.
- **Тип возвращаемого значения**: `Array<{ Player: Player, Weight: number }>`
- **Пример**:
```js
const playerLeaderBoard = LeaderBoard.GetPlayers();
playerLeaderBoard.forEach(item => {
  console.log(`Игрок: ${item.Player.Name}, Вес: ${item.Weight}`);
});
```

---

### `LeaderBoard.GetPlayers(team)`

- **Описание**: Возвращает отсортированный список игроков указанной команды.
- **Пример**:
```js
const blueTeam = Teams.Get("blue");
const playersInTeam = LeaderBoard.GetPlayers(blueTeam);
```

---

## 📄 Структура элемента лидерборда

### Для команд:
```js
{
  Team: Team,   // ссылка на команду
  Weight: number // значение для сортировки
}
```

### Для игроков:
```js
{
  Player: Player, // ссылка на игрока
  Weight: number  // значение для сортировки
}
```

---

## ✅ Применение

Модуль `LeaderBoard` может быть полезен для:

- Отображения статистики игроков (убийства, смерти, заработанные очки).
- Сравнения команд по суммарным показателям.

---

## 🧪 Пример: вывод лидерборда команд в чат (через PopUp)

```js
const teamLeaderBoard = LeaderBoard.GetTeams();

teamLeaderBoard.forEach((item, index) => {
  const team = item.Team;
  const weight = item.Weight;

  team.PopUp(`#${index + 1} — ${team.Name}: ${weight} очков`);
});
```
