// ветка room_api.Ui - сервис пользовательского интерфейса
import { Ui } from "pixel_combats/room";
import { Teams, Players } from "pixel_combats/room";

// контекст пользовательского интерфейса на уровне комнаты
const ui = Ui.GetContext();
// контекст пользовательского интерфейса на уровне команды
const ui = Ui.GetContext(Teams.Get("teamId"));
// контекст пользовательского интерфейса на уровне игрока
const ui = Ui.GetContext(Players.Get("player_Id"));

// ID основного таймера с контекста комнаты (свойство посередине вверху)
ui.MainTimerId.Value
// подсказка
ui.Hint.Value = "ЗАСТРОЙ БАЗУ!";
// нужно ли выводить количество квадов
// <para>по умолчанию false</para>
ui.QuadsCount.Value = false;

// свойство левое вверху		
ui.TeamProp1.Value = { Team: "TeamId", Prop: "PropId" };
// свойство правое вверху
ui.TeamProp2.Value = { Team: "TeamId", Prop: "PropId" };
