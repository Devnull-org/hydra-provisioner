const client = new WebSocket("ws://127.0.0.1:4001");

client.addEventListener("message", e => {
    const msg = JSON.parse(e.data);
    console.log(msg);
});




