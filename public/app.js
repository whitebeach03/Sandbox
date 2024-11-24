const socket = io();

// メッセージを送信
document.getElementById('send').onclick = () => {
    const msg = document.getElementById('message').value;
    if (msg.trim() !== '') {
        socket.emit('chat message', msg);
        document.getElementById('message').value = '';
    }
};

// メッセージを受信
socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    document.getElementById('messages').appendChild(item);
});
