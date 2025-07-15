// ветка room_api.LeaderBoard
import { LeaderBoard } from "pixel_combats/room";
// ветка basic_api.DisplayValueHeader
import { DisplayValueHeader } from "pixel_combats/basic";

// --- структура ---

// имя значения (propertiesId)
const VALUE = "propid";
// выводимый заголовок (если null тогда VALUE)
const DISPLAY_NAME = "ExampleDisplayName";
// сокращенное выводимое значение (если null тогда SHORT_DISPLAY_NAME)
const SHORT_DISPLAY_NAME = "ExampleShortDisplayName";
const displayValueHeader = new DisplayValueHeader(VALUE, DISPLAY_NAME, SHORT_DISPLAY_NAME);

// --- лидерборд ---
		
// имя значения, которые следует выводить в лидерборде для игрока
LeaderBoard.PlayerLeaderBoardValues = [
	displayValueHeader
];
// имя значение, которое необходимо выводить для лидерборда команд		
LeaderBoard.TeamLeaderBoardValue = displayValueHeader;

// функция сравнения команд (Принимает команду, возвращает значение веса команды в лидерборде (team.Properties.Get("propId").Value))
LeaderBoard.TeamWeightGetter.Set(team => team.Properties.Get(VALUE).Value);
// функция сравнения игроков (Принимает игрока, возвращает значение веса игрока в лидерборде (player.Properties.Get("propId").Value))
LeaderBoard.PlayersWeightGetter.Set(player => player.Properties.Get(VALUE).Value);
	
// возвращает лидерборд команд в комнате		
var g_t = LeaderBoard.GetTeams();	
// возвращает лидерборд игроков в комнате	
var g_p = LeaderBoard.GetPlayers();
// в отсортированном порядке (team - команда)	
var g_p_s = LeaderBoard.GetPlayers(ITeamApi team);

// тип значений в списке g_p
// const index = 0;
// const pl = g_t[index].Player // игрок
// const pl_w = g_t[index].Weight // какой вес у игрока в лидерборде (int)

// тип значений в списке g_t
// const index = 0;
// const t = g_t[index].Team // команда
// const t_w = g_t[index].Weight // какой вес у команды в лидерборде (int)
