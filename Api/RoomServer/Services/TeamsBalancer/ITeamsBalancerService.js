// ветка room_api.TeamsBalancer - Определяет баланс команд в игре
import { TeamsBalancer } from 'pixel_combats/room';

// если true то будет всегда балансировать автоматически
TeamsBalancer.IsAutoBalance = false;	
// максимальная разница игроков.
// (по умолчанию 1 и если 0 то не работает)				
TeamsBalancer.MaxPlayerDifference = 0;
	
// производит баланс команд		
TeamsBalancer.BalanceTeams();

// сменился флаг автобаланса
TeamsBalancer.OnIsAutoBalance.Add(function(){});		
// если изменилась максимальная разница в командах
TeamsBalancer.OnMaxPlayerDifference.Add(function(){});	
// после балансировки команд
TeamsBalancer.OnBalanceTeams.Add(function(){});
