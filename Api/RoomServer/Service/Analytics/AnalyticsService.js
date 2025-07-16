//ветка basic_api.AnalyticsParameter - параметры аналитики игрового режима
import { AnalyticsParameter } from 'pixel_combats/basic';
//ветка room_api.AnalyticsParameter - аналитика игрового режима
import { Analytics } from 'pixel_combats/room';

//
const ap1 = new AnalyticsParameter("имя параметра", "сообщение параметра");
		
// отправляет аналитическое событие		
Analytics.LogEvent("имя лога", [ap1]);
