// ветка room_api.Validate - сервис валидности режима
import { Validate } from 'pixel_combats/room';
	
// если истина, то режим валидный	
const g_valid = Validate.IsValid { get; }		
// сообщение о невалидности
const g_v_msg =  Validate.Message;
	
// сообщает в систему о неполадке в режиме		
Validate.ReportInvalid("message");
// если это дело вызвать то все последующие вызовы репортов не учитываются
Validate.ReportValid();

// после репорта валидности	
Validate.OnValid.Add(function(){});
