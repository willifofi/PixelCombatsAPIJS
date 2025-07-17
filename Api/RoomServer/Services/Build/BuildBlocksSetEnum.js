// набор всех пресетов наборов блоков
import { BuildBlocksSet } from "pixel_combats/room";

// пустой набор блоков		
const nullSet = BuildBlocksSet.NullSet;
// набор всех блоков				
const allSet = BuildBlocksSet.All;
// набор всех чистых блоков (которые не сломанные)		
const allClearSet = BuildBlocksSet.AllClear;
// набор блоков для синей команды
const blueSet = BuildBlocksSet.Blue;
// набор блоков для красной команды
const RedSet = BuildBlocksSet.Red;

// возвращает набор блоков по его ID
// (если набора с указанным ID не существует то выдаст пустой набор)
// 0 - ID набора блоков
const blockSetById = BuildBlocksSet.Get(0);

// --- обьект набора блока ---
// дупустим набор блоков All
const b_set = allSet;
// идентиффикатор набора блоков
const set_id = b_set.Id;
// сколько всего блоков в наборе
const set_count = b_set.Count;
// проверяет наличие в наборе указанного блока
// 0 - ID блока</param>
const set_cont = b_set.Contains(0);
// возвращает блок по его индексу
// 0 - индекс блока
const block = b_set.GetByIndex(0);
