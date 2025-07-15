// ветка room_api.Permissions - сервис разрешений в игровом режима
// (структура разрешений в комнате)
import { Permissions } from "pixel_combats/room";

// имя файла разрешений ("client/room/permissions.json")
const Permissions.GAME_MODE_ROOM_PERMISSIONS;

// разрешения в комнате	
//(чтобы разрешения в комнате были нестандартные (Permissions.Value.Default)
// нужно при создании режима создать файл Permissions.GAME_MODE_ROOM_PERMISSIONS)	
const params = Permissions.Value;
	
// можно ли закрывать комнату		
var params.CloseRoom; // bool (true, false)	
// разрешения в комнате по умолчанию	
const params.Default;
