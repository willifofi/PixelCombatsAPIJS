// контекст строительства
import { BuildBlocksSet, Build, Teams, Player } from "pixel_combats/room";

// контекст строительства для комнаты
const room_build_context = Build.GetContext();
// контекст строительства для команды
const team_build_context = Build.GetContext(Teams.Get("TeamId"));
// контекст строительства для игрока
const player_build_context = Build.GetContext(Players.Get("PlayerId"))
// идентиффикатор блока в руках у игрока
// player_build_context.BuildBlockId;

// контекст строительства 
const build_context = room_build_context;

// набор блоков
build_context.BlocksSet = BuildBlocksSet.AllClear;
		
// разрешена ли пипетка
build_context.Pipette.Value = false;
// разрешена ли заливка одного квада
build_context.FloodFill.Value = false;
// разрешена ли заливка одного блока
build_context.FillQuad.Value = false;
// можно ли удалять квады
build_context.RemoveQuad.Value = false;
// можно ли менять длину балки игрокам
build_context.BalkLenChange.Value = false;
// длина балки (todo не реализовано)
build_context.BalkLen.Value = 10;
// разрешен ли режим полета
build_context.FlyEnable.Value = false;
// можно ли менять скайбокс
build_context.SetSkyEnable.Value = false;
// можно ли генерировать карту
build_context.GenMapEnable.Value = false;
// можно ли менять точки просмотра камеры
build_context.ChangeCameraPointsEnable.Value = false;
// можно ли рисовать квадами
build_context.QuadChangeEnable.Value = false;
// разрешает или запрещает режим строительства
build_context.BuildModeEnable.Value = false;
// можно ли менять количеcтво блоков, которое может упасть
build_context.CollapseChangeEnable.Value = false;
// можно ли переименовываеть карту
build_context.RenameMapEnable.Value = false;
// можно ли менять список авторов карты
build_context.ChangeMapAuthorsEnable.Value = false;
// можно ли загружать карту
build_context.LoadMapEnable.Value = false;
// можно ли менять спавнпоинты
build_context.ChangeSpawnsEnable.Value = false;
// можно ли строить областями. и можно ли редактировать зоны на карте
build_context.BuildRangeEnable.Value = false;
