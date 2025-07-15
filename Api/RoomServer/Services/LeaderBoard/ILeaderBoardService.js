// ветка room_api.LeaderBoard
import { LeaderBoard } from "pixel_combats/room";
// ветка basic_api.DisplayValueHeader
import { DisplayValueHeader } from "pixel_combats/basic";
	
// имя значения (propertiesId)
const VALUE = "ExampleName";
// выводимый заголовок (если null тогда VALUE)
const DISPLAY_NAME = "ExampleDisplayName";
const SHORT_DISPLAY_NAME = "ExampleShortDisplayName";
// сокращенное выводимое значение (если null тогда SHORT_DISPLAY_NAME)
const displayValueHeader = new DisplayValueHeader(VALUE, DISPLAY_NAME, SHORT_DISPLAY_NAME);

// --- лидерборд ---
		
// имя значения, которые следует выводить в лидерборде для игрока
LeaderBoard.PlayerLeaderBoardValues = [
	new DisplayValueHeader(VALUE, DISPLAY_NAME, SHORT_DISPLAY_NAME);
];
// имя значение, которое необходимо выводить для лидерборда команд		
LeaderBoard.TeamLeaderBoardValue = new DisplayValueHeader(VALUE, DISPLAY_NAME, SHORT_DISPLAY_NAME);

// функция сравнения команд (Принимает команду, возвращает значение веса команды в лидерборде)
LeaderBoard.TeamWeightGetter.Set(team => team.Properties.Get("propId").Value);
// функция сравнения игроков (Принимает игрока, возвращает значение веса игрока в лидерборде)
LeaderBoard.PlayersWeightGetter.Set(player => player.Properties.Get("propId").Value);
	
// возвращает лидерборд команд в комнате		
LeaderBoard.GetTeams();	

// возвращает лидерборд игроков в комнате	
LeaderBoard.GetPlayers();
// в отсортированном порядке (team - команда)	
LeaderBoard.GetPlayers(ITeamApi team);	
