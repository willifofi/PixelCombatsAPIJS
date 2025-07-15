// ветка room_api.Game - сервис конца матча
import { Game } from "pixel_combats/room";

// если истина, то игра окончена
Game.IsGameOver; // bool 
// перезапускает игру в комнате
Game.RestartGame();

// завершает игру		
// <param name="winner">команда - победитель</param>		
Game.GameOver(winner);		
// <param name="winner">игрок - победитель</param>		
Game.GameOver(winner);	
// <param name="teamsLeaderBoard">лидерборд команд</param>		
Game.GameOver(teamsLeaderBoard);		
// <param name="playersLeaderBoard">лидерборд игроков</param>		
Game.GameOver(playersLeaderBoard);
	
// игра окончена (происходит всегда перед событием победы игроков или команд)
Game.OnGameOver.Add(function(){});	
// игра окончена и выиграла команда или ничья, если в списке больше одного элемента, победу разделили все кто в списке	
Game.OnTeamsWin.Add(function(teams){});
// игра окончена и выиграл игрок или ничья, если в списке больше одного элемента, победу разделили все кто в списке		
Game.OnPlayersWin.Add(function(players){});
