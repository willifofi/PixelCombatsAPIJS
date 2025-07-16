# 🧱 Teams API — Работа с Командами

Этот раздел документирует использование модулей `Teams`, `Team` и связанных сервисов из `pixel_combats/room`, позволяющих управлять командами игроков в комнате.

## Импорты

```ts
import { Teams } from "pixel_combats/room";
import { Properties, Spawns, Timers, Build, Damage, Ui, ContextedProperties } from "pixel_combats/room";
import { Color } from "pixel_combats/basic";
```

> Эти импорты предоставляют доступ к управлению командами, их свойствам, спавнам, таймерам и интерфейсу.

---

## 📚 Сервис `Teams` (Управление всеми командами)

### `Teams.TeamsCount`

- **Описание**: Возвращает количество существующих команд.
- **Тип**: `number`
- **Пример**:
```ts
const count = Teams.TeamsCount;
Ui.GetContext().Hint.Value = `Количество команд: ${count}`;
```

---

### `Teams.All`

- **Описание**: Возвращает массив всех команд.
- **Тип**: `Team[]`
- **Предупреждение**: Не рекомендуется использовать в циклах — создаёт новый массив каждый раз.
- **Пример**:
```ts
const allTeams = Teams.All;
allTeams.forEach(team => Ui.GetContext(team).Hint.Value = "Привет!");
```

---

### `Teams.Add(id, name, color)`

- **Описание**: Добавляет новую команду.
- **Параметры**:
  - `id`: уникальный ID команды.
  - `name`: имя, отображаемое игрокам.
  - `color`: цвет команды (`Color`).
- **Примечание**: Если команда уже существует — ничего не делает.
- **Пример**:
```ts
Teams.Add("red", "Red Team", new Color(255, 0, 0, 1));
```

---

### `Teams.Contains(teamId)`

- **Описание**: Проверяет, существует ли команда с указанным ID.
- **Тип**: `boolean`
- **Пример**:
```ts
if (Teams.Contains("blue")) Ui.GetContext().Hint.Value = "Команда 'blue' существует.";
```

---

### `Teams.Get(teamId)`

- **Описание**: Возвращает команду по её ID.
- **Примечание**: Если команда не найдена — возвращается **неактивная** команда.
- **Пример**:
```ts
const team = Teams.Get("blue");
Ui.GetContext().Hint.Value = team.Name;
```

---

### `Teams.TryGetTeam(teamId, out team)`

- **Описание**: Пытается получить команду по ID.
- **Возвращает**: `true`, если команда найдена.
- **Пример**:
```ts
let outTeam = null;
if (Teams.TryGetTeam("green", outTeam)) {
  Ui.GetContext().Hint.Value = "Команда найдена!";
}
```

---

## 📣 События сервиса `Teams`

### `Teams.OnPlayerChangeTeam.Add((player) => {})`

- Вызывается при смене игроком команды.
- **Пример**:
```ts
Teams.OnPlayerChangeTeam.Add((player) => {
  Ui.GetContext().Hint.Value = `${player.Name} сменил команду`;
});
```

---

### `Teams.OnRequestJoinTeam.Add((player, team) => {})`

- Вызывается, когда игрок запрашивает присоединение к команде.
- **Пример**:
```ts
Teams.OnRequestJoinTeam.Add((player, team) => {
  Ui.GetContext().Hint.Value = `${player.Name} хочет присоединиться к ${team.Name}`;
});
```

---

### `Teams.OnAddTeam.Add((team) => {})`

- Вызывается при добавлении новой команды.
- **Пример**:
```ts
Teams.OnAddTeam.Add((team) => {
  Ui.GetContext().Hint.Value = `Добавлена команда: ${team.Name}`;
});
```

---

## 🧱 Объект `Team` (Работа с конкретной командой)

### Свойства:

| Свойство             | Тип       | Описание                         |
|----------------------|-----------|----------------------------------|
| `Id`                 | `string`  | Уникальный ID команды            |
| `Name`               | `string`  | Имя команды                      |
| `Color`              | `Color`   | Цвет команды                     |
| `IsActive`           | `boolean` | Является ли команда активной     |
| `Count`              | `number`  | Количество игроков в команде     |

---

### Методы:

#### `GetAlivePlayersCount()`

- **Описание**: Возвращает количество живых игроков в команде.
- **Пример**:
```ts
const alive = team.GetAlivePlayersCount();
Ui.GetContext(team).Hint.Value = `Живых игроков: ${alive}`;
```

---

### Ссылки на сервисы через контекст:

| Сервис                | Получение через                  | Описание                           |
|-----------------------|----------------------------------|------------------------------------|
| `Properties`          | `Properties.GetContext(team)`    | Работа с переменными команды        |
| `Spawns`              | `Spawns.GetContext(team)`        | Спавны команды                      |
| `Timers`              | `Timers.GetContext(team)`        | Таймеры команды                     |
| `Build`               | `Build.GetContext(team)`         | Параметры строительства             |
| `Damage`              | `Damage.GetContext(team)`        | Регистрация урона                   |
| `Ui`                  | `Ui.GetContext(team)`            | UI команды                          |
| `ContextedProperties` | `ContextedProperties.GetContext(team)` | Контекстные свойства        |

---

### Игроки в команде:

#### `team.Players`

- **Описание**: Возвращает список всех игроков команды.
- **Предупреждение**: Не рекомендуется использовать в циклах — создаёт новый массив каждый раз.

#### `team.Contains(player)`

- **Описание**: Проверяет, состоит ли игрок в команде.
- **Тип**: `boolean`

#### `team.Add(player)`

- **Описание**: Добавляет игрока в команду (если его там нет).

#### `team.Remove(player)`

- **Описание**: Убирает игрока из команды (если он есть).

#### `team.Clear()`

- **Описание**: Убирает всех игроков из команды.

---

### События уровня `Team`

#### `team.OnAddPlayer.Add((player) => {})`

- Вызывается при добавлении игрока в команду.

#### `team.OnRemove.Add((player) => {})`

- Вызывается при удалении игрока из команды.

---

## ✅ Пример Полного Использования

```ts
import { Teams, Ui, Properties, Color } from "pixel_combats/room";

// Создаём команду
Teams.Add("red_team", "Красная Команда", new Color(1, 0, 0, 0));

// Получаем команду
const redTeam = Teams.Get("red_team");

// Настройка UI команды
const teamUI = Ui.GetContext(redTeam);
teamUI.TeamProp1.Value = { Team: redTeam.Id, Prop: "score" };

// Добавляем событие добавления игрока
redTeam.OnAddPlayer.Add((player) => {
  Ui.GetContext().Hint.Value = `Игрок ${player.Name} добавлен в команду ${redTeam.Name}`;
});

// Логируем изменение команды у игрока
Teams.OnPlayerChangeTeam.Add((player) => {
  Ui.GetContext().Hint.Value = `${player.Name} изменил команду`;
});
```
