// room_api - внутрикомнатный чат
import { Chat } from 'pixel_combats/room';

// возвращает все сообщения в чате		
const msg = Chat.GetAllMessages();

// если в чате возникает сообщение		
Chat.OnMessage.Add(function(message){
	// id игрока в комнате или 0 - если отправитель сервер
	const m_s = message.Sender;
	if (m_s == 0) return;
		
	// имя игрока или null
	const m_nn = message.NickName;
	// текст сообщения
	const m_t = message.Text;
	// id команды отправителя в момент отправки сообщения или null
	const m_t_id = message.TeamId;

	// получаем игрока по айди отправителя
	//const player = Players.Get(m_s);
});
