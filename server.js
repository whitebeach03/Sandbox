const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 静的ファイルを提供
app.use(express.static('public'));

// クライアントの接続を管理
io.on('connection', (socket) => {
    console.log('ユーザーが接続しました');
    
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('ユーザーが切断しました');
    });
});

// サーバーを起動
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`サーバーが起動しました: http://localhost:${PORT}`);
});
