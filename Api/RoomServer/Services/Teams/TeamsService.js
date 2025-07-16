// ветка room_api.Teams -  Сервис работы с командами
import { Teams } from "pixel_combats/room";
import { 
  Teams,              /* ветка services.Teams -      сервис работы с командами  */       
  Properties,         /* ветка services.Properties - сервис для работы          */     
  Spawns,             /* ветка services.Spawns -     сервис для работы          */  
  Timers,             /* ветка services.Timers -     сервис для работы          */ 
  Build,              /* ветка services.Build -      сервис для работы          */
  Damage,             /* ветка services.Damage -     сервис для работы          */
  Ui,                 /* ветка services.Ui -         сервис для работы          */
  ContextedProperties /* ветка services.ContextedProperties - сервис для работы */    
} from 'pixel_combats/room';

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

// ID команды
const team_id = get_team.Id;
// имя команды, которое видит игрок
const team_name = get_team.Name;
// цвет команды
const team_color = get_team.Color;}
// если истина, то команда активна
// неактивная команда это либо та, которая удалилась в процессе игры, либо не существующая по каким-то причинам в комнате
// если запросить ссылку на несуществующую команду, то такая ссылка будет получена, но будет неактивна, пока ее не добавят через Teams.Add
const team_id = get_team.IsActive;
// возвращает количество живых игроков в команде
const team_id = GetAlivePlayersCount();

// контекст переменных игрока (см сервис PropertiesService)
const team_prop = Properties.GetContext(get_team);
// апи спавнов игрока (см сервис PropertiesService)
const team_spawns = Spawns.GetContext(get_team);
// апи инвентаря игрока (см сервис PropertiesService)
const team_inventory = Inventory.GetContext(get_team);
// таймеры игрока (см сервис PropertiesService)
const team_timers = Timers.GetContext(get_team);
// строительство игрока (см сервис PropertiesService)
const team_bild = Build.GetContext(get_team);
// контекст урона (см сервис PropertiesService)
const team_damage = Damage.GetContext(get_team);
// контекст пользовательского интерфейса (см сервис UIService)
const team_ui = Ui.GetContext(get_team);
// контекстные свойства (см сервис PropertiesService)
const team_prop_context = contextedProperties.GetContext(get_team);

// сколько игроков в команде
const t_pls_count = get_team.Count;
// все игроки в команде
// <para>не рекомендуется вызывать каждый раз в цикле</para>
const t_pls_all = get_team.Players;

// возвращает истину, если игрок есть в команде
// <param name="player">игрок</param>
// <returns>истина, если игрок есть в команде</returns>
get_team.Contains(player);
// Добавляет игрока в команду. 
// Если игрок уже есть в команде, то ничего не происходит
// player - игрок
get_team.Add(player);
// Исключает игрока из команды.
// Если игрока в команде нет, то ничего не происходит
// <param name="player">игрок</param>
get_team.Remove(player);
// убирает всех игроков из команды, делая их вне команд
get_team.Clear();

// добавился игрок
get_team.OnAddPlayer.Add(function(player){});
// удалился игрок
get_team.OnRemove.Add(function(player){});
