// ветка room_api.Teams -  Сервис работы с командами
import { Teams } from "pixel_combats/room";
// ветка basic_api.Color - Сервис работы с цветом
import { Color } from "pixel_combats/basic";

// --- апи команд ---
// сколько всего имеется команд
const teams_count = Teams.TeamsCount;
// возвращает все команды
// не рекомендуется использование в цикле - порождает массив
const teams_all = Teams.All;
// добавляет команду.
// Eсли такая команда уже существует то ничего не происходит
// id - ID команды, по которому к ней можно обращаться
// name - имя команды, которое видят игроки
// Color - цвет команды
void Add("id", "name", new Color(4 / 255, 5 / 255, 2 / 255, 0));

// проверяет наличие указанной команды
// teamId - ID команды
// вернет истинy, если команда существует
const teams_cont = Teams.Contains("teamId");
// возвращает команду по ее ID.
// если команды нет, то выдаст неактивную команду, причем события о том, что создана неактивная команда не будет
// teamId - ID команды
const get_team = Teams.Get("teamId");
// попытка получить команду
// teamId - ID команды
// out_team - команда которая была получена
// teams_tryGet вернет истину, если команда была получена
var out_team = null;
const teams_tryGet = Teams.TryGetTeam("teamId", out_team);

// когда какой-либо игрок сменил команду
Teams.OnPlayerChangeTeam.Add(function(player){});
// если игрок запросил переход в указанную команду
Teams.OnRequestJoinTeam.Add(function(player, team){}); 

// если команда добавлена
Teams.OnAddTeam.Add(function(team){});

// --- апи команды ---
