import { BreackGraph } from "pixel_combats/api";
// --- граф поломок вокселей ---
// используется для определения модели повреждений блоков

// можно ли ломать блоки
BreackGraph.Damage = true;		
// можно ли ломать блоки игроков
BreackGraph.PlayerBlockDmg = true;
// усиление блоков игрок
BreackGraph.PlayerBlockBoost = false;
// ослабить блоки
BreackGraph.WeakBlocks = false;
// если истина, то может быть сломан любой блок
// (делает возможным сломать такие блоки как металл, лава итд)
BreackGraph.BreackAll = false;
// если истина, то ломаль можно только блоки игроков
BreackGraph.OnlyPlayerBlocksDmg = false;

// если были изменены опции графа поломок		
BreackGraph.OnOptions.Add(function(){});
	
