// ветка room_api.Room - сервис управления комнатой
import { Room } from 'pixel_combats/room';

// закрывает комнату		
// (заставляет всех, кто есть в комнате выйти из нее)	
// при условии если разрешено сервисом Premissions
Room.Close();
