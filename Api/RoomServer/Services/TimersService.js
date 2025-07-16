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

// --- апи таймера ---
const timer_id = timer.Id;
// если истина, то таймер активен и обрабатывается
const timer_IsStart = timer.IsStarted;
// интервал срабатывания таймера
const timer_interval = timer.Interval;
// если истина, то таймер по завершении перезапускается
const timer_isLoop = timer.IsLoop;
// сколько времени осталось до срабатывания
const timer_lapsedTime = timer.LapsedTime;

// перезапуск таймера.
// если таймер уже был активен то он начнет работу заного с новыми настройками
timer.Restart(5);
// делает его циклически срабатываемым
timer.RestartLoop(0);
// останавливает таймер, делает его неактивным в комнате (см. timer.IsStarted)
timer.Stop();

// --- интерфейс событий таймера ---
	
// если у таймера сменилось состояние <see cref="ITimerApi.IsStarted"/>
timer.OnIsStarted.Add(function(){});
// при срабатывании таймера
// (таймер уже не активен)
timer.OnTimer.Add(function(){});
// если какой-либо таймер начал свою работу
timer.OnRestart.Add(function(){});
