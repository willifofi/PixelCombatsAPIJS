// ветка room_api.NewGame - сервис управления новой игрой
import { NewGame } from 'pixel_combats/room';
		
// стандартный перезапуск игры	
NewGame.RestartGame();
		
// перезапуск игры с указанными параметрами новой игры	
// MapId - id карты или 0, если карту оставить туже			
NewGame.RestartGame({ "MapId": 0 });
