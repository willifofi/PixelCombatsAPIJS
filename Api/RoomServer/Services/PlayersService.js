//ветка room_api.Players - сервис для работы с игроками
import { Players } from 'pixel_combats/room';

// возвращает всех игроков в комнате (get)
// Не рекомендуется использовать каждый раз в цикле. Выностие за цикл>
const pls_all = Players.All;
// количество игроков в комнате (get)
const pls_count = Players.Count;
// максимум игроков в комнате (get)
const pls_max = Players.MaxCount;

// если подключился игрок
Players.OnPlayerConnected.Add(function(player){});
// если игрок отключился
Players.OnPlayerDisconnected.Add(function(player){});

// возвращает объект, для работы с игроком или null>
// playerId - ID игрока
const get_player = Player.Get("playerId");
// позволяет получить игрока по его внутрикомнатному ID (int)
// работает быстрее чем получение по обычному ID игрока, однако внутрикомнатный ID всегда разный
const get_player_roomId = GetByRoomId(0);
