import { Players, Teams, Timers } from "pixel_combats/room";

// --- контекст таймеров в комнате ---
const timer_player_context = Timers.GetContext(Plsyers.Get("playerId"));
const timer_team_context = Timers.GetContext(Teams.Get("TeamId"));
const timer_room_context = Timers.GetContext();

// контекст таймера, какойто из трёх 
const context = timer_room_context;

// возвращает массив всех таймеров
// <Не рекомендуется использовать каждый раз в цикле. Выностие за цикл
const timer_all = context.All;
// возвращает API для работы с таймером.
// если таймер еще небыл добавлен, то всеравно вернет таймер, но он будет не активным (см. <see cref="ITimerApi.IsStarted"/>)</para>
const timer = context.Get("TimerId");

Timers.OnTeamTimer.Add(function(timer){});
Timers.OnPlayerTimer.Add(function(timer){});

// --- впи таймера ---
