function website() {
    window.location.href =
        "/home/walkeknow/Dropbox/Sem 6/FWT/Lab/2/media.html";
}

function resetFields() {
    document.getElementById("form").reset();
}

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);

        ctx.font = "30px Arial";
        ctx.strokeText("CANVAS", 10, 50);
    }
}
