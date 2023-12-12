const client = new WebSocket("ws://127.0.0.1:4001");
const status = document.querySelector("#status");

client.addEventListener("message", e => {
    const msg = JSON.parse(e.data);
    console.log(msg);
});

client.onopen = (e) => {
    writeStatus("CONNECTED");
};

client.onclose = (e) => {
    writeStatus("DISCONNECTED");
};

client.onerror = (e) => {
    writeStatus(`ERROR: ${e.data}`);
};

function writeStatus(message) {
    status.innerHTML = `<p>STATUS: ${message}</p>`;
}

