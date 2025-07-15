// ветка room_api.Permissions - сервис разрешений в игровом режима
// (структура разрешений в комнате)
import { Permissions } from "pixel_combats/room";

// имя файла разрешений ("client/room/permissions.json")
const prerm_file_name = Permissions.GAME_MODE_ROOM_PERMISSIONS;

// разрешения в комнате	
//(чтобы разрешения в комнате были нестандартные (Permissions.Value.Default)
// нужно при создании режима создать файл prerm_file_name)	
const params = Permissions.Value;
	
// можно ли закрывать комнату		
params.CloseRoom = false; // bool (true, false)	
// разрешения в комнате по умолчанию	
params.Default;
