import { 
  Players,            /* ветка services.Players - сервис для работы с игроками  */       
  Properties,         /* ветка services.Properties - сервис для работы          */     
  Spawns,             /* ветка services.Spawns - сервис для работы              */  
  Timers,             /* ветка services.Timers - сервис для работы              */ 
  Build,              /* ветка services.Build - сервис для работы               */
  Damage,             /* ветка services.Damage - сервис для работы              */
  Ui,                 /* ветка services.Ui - сервис для работы                  */
  ContextedProperties /* ветка services.ContextedProperties - сервис для работы */    
} from 'pixel_combats/room';

//ветка basic_api.Index - индекс или воксельная координата
//ветка basic_api.Vector3 - координата в 3д мире
import { Index, Vector3 } from 'pixel_combats/basic';

// возвращает всех игроков в комнате (get)
// Не рекомендуется использовать каждый раз в цикле. Выностие за цикл>
const pls_all = Players.All;
// количество игроков в комнате (get)
const pls_count = Players.Count;
// максимум игроков в комнате (get)
const pls_max = Players.MaxCount;

// если подключился игрок
Players.OnPlayerConnected.Add(function(player){
  const ui_context = Ui.GetContext;
  // сообищение от игрока всем
  ui_context().Hint.Value = `Игрок ${player.NickName}, передает всем Привет!`;
  // сообищение игроку
  ui_context(player).Hint.Value = `Привет!`;
});
// если игрок отключился
Players.OnPlayerDisconnected.Add(function(player){
  const ui_context = Ui.GetContext;
  // сообищение от игрока всем
  ui_context().Hint.Value = `Игрок ${player.NickName}, передает всем Пока(`;
  // сообищение игроку
  ui_context(player).Hint.Value = `Пока((`;  
});

// --- API для работы с игроком ---
// возвращает объект, для работы с игроком или null>
// playerId - ID игрока
const get_player = Player.Get("playerId");
// позволяет получить игрока по его внутрикомнатному ID (int)
// работает быстрее чем получение по обычному ID игрока, однако внутрикомнатный ID всегда разный
const get_player_roomId = GetByRoomId(0);

// ID игрока (get, string)
// этот идентиффикатор всегда постоянный для игрока
const pl_id = get_player.Id;
// целочисленный идентиффикатор игрока в комнате (int, get)
const pl_rid = get_player.IdInRoom;
// ник игрока (string, get)
const pl_name = get_player.NickName;
// истина, если данный игрок онлайн (bool, get)
const p_IsOnline = get_player.IsOnline;
// содержит ссылку на команду, в которой содержится игрок или null, если игрок не находится ни в одной команде
const p_team = get_player.Team;
// жив игрок или нет (get, bool)
//пока не заспванится false
const p_alive = get_player.IsAlive;
// позиция игрока в блоках (get, set)
// это лучше использовать, для понимания точного блока под ногами игрока или его переноса на определенный блок
const pos = { 
  "x": 0, /* координата X */
  "y": 0, /* координата Y */
  "z": 0  /* координата Z */ 
}
get_player.PositionIndex = new Index(pos.x, pos.y, pos.z);
// абсолютная позиция игрока в 3Д мире (get, set)
get_player.Position = new Vector3(0, 0, 0)
// вращение игрока
// используется только x и y составляющая
get_player.Rotation = new Vector3(1,1,0);

// контекст переменных игрока (см сервис PropertiesService)
const p_prop = Properties.GetContext(get_player);
// апи спавнов игрока
const p_prop = Spawns.GetContext(get_player);
// апи инвентаря игрока
const p_prop = Inventory.GetContext(get_player);
// таймеры игрока
const p_prop = Timers.GetContext(get_player);
// строительство игрока
const p_prop = Build.GetContext(get_player);
// контекст урона
const p_prop = Damage.GetContext(get_player);
// контекст пользовательского интерфейса
const p_prop = Ui.GetContext(get_player);
// контекстные свойства
const p_prop_context = ContextedProperties.GetContext(get_player);

// задает одновременно и позицию и вращение игрока
// рекомендуется использовать этот метод в целях оптимизации, если нужно задать одновременно и позицию и вращение
// position позиция игрока
// rotation вращение игрока (только x и y)
const new_position = new Vector3(0, 0, 0);
const new_rotation = new Vector3(0, 0, 0);
get_player.SetPositionAndRotation(new_position, new_rotation);

// сменился онлайн
get_player.OnIsOnline.Add(function(){});
// сменилась команда
get_player.OnTeam.Add(function(){});
// сменился ник
get_player.OnNickName.Add(function(){});
// сменилось состояние жив или мертв
get_player.OnIsAlive.Add(function(){});
