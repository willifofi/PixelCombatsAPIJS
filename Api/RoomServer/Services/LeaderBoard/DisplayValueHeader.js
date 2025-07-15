// ветка basic_api.DisplayValueHeader
import { DisplayValueHeader } from "pixel_combats/basic";
	
// имя значения (propertiesId)
const VALUE = "ExampleName";
// выводимый заголовок (если null тогда VALUE)
const DISPLAY_NAME = "ExampleDisplayName";
const SHORT_DISPLAY_NAME = "ExampleShortDisplayName";
// сокращенное выводимое значение (если null тогда SHORT_DISPLAY_NAME)
const displayValueHeader = new DisplayValueHeader(VALUE, DISPLAY_NAME, SHORT_DISPLAY_NAME);
