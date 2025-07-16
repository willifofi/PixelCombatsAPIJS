# 📊 Analytics API — Отправка Аналитики

Этот раздел описывает использование модулей `AnalyticsParameter` и `Analytics` из `pixel_combats/basic` и `pixel_combats/room`, позволяющих отправлять пользовательские события аналитики для игрового режима.

## Импорты

```ts
import { AnalyticsParameter } from "pixel_combats/basic";
import { Analytics } from "pixel_combats/room";
```

> Эти импорты предоставляют доступ к созданию параметров аналитики и отправке событий.

---

## Создание Параметра Аналитики

### `new AnalyticsParameter(name, value)`

- **Описание**: Создаёт новый параметр аналитики.
- **Параметры**:
  - `name`: имя параметра (ключ)
  - `value`: значение параметра (строка)
- **Пример**:

```ts
const ap1 = new AnalyticsParameter("event_type", "player_won");
const ap2 = new AnalyticsParameter("team_id", "red_team");
```

---

## Отправка События Аналитики

### `Analytics.LogEvent(eventName, parameters)`

- **Описание**: Отправляет пользовательское событие аналитики с набором параметров.
- **Параметры**:
  - `eventName`: имя события (например, `"match_ended"`)
  - `parameters`: массив объектов типа `AnalyticsParameter`
- **Пример**:

```ts
const eventType = new AnalyticsParameter("event_type", "match_end");
const winnerTeam = new AnalyticsParameter("winner_team", "blue_team");

Analytics.LogEvent("match_ended", [eventType, winnerTeam]);
```

---

## Применение

Отправка аналитики может быть полезна для:

- Анализа статистики игровых режимов.
- Отладки и улучшения игрового процесса на основе данных.

---

## Пример Полного Использования

```ts
import { AnalyticsParameter } from "pixel_combats/basic";
import { Analytics } from "pixel_combats/room";

const event = new AnalyticsParameter("event_name", "player_eliminated");
const player = new AnalyticsParameter("player_id", "12345");
const reason = new AnalyticsParameter("elimination_reason", "base_destroyed");

Analytics.LogEvent("player_eliminated", [event, player, reason]);
```
