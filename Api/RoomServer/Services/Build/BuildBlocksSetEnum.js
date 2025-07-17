// набор всех пресетов наборов блоков
import { BuildBlocksSet } from "pixel_combats/room";


// пустой набор блоков		
IBlocksSet NullSet { get; }
// набор всех блоков				
IBlocksSet All { get; }
// набор всех чистых блоков (которые не сломанные)		
IBlocksSet AllClear { get; }
// набор блоков для красной команды
IBlocksSet Blue { get; }
// набор блоков для синей команды
IBlocksSet Red { get; }

// возвращает набор блоков по его ID
// (если набора с указанным ID не существует то выдаст пустой набор)
// 0 - ID набора блоков
IBlocksSet Get(0);
