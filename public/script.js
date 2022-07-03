const socket = io.connect("midi-motors:5000");

socket.on("midi files", (data) => {
	for (file of data) {
		$(".songs-container").append(`<button class="song" onclick="songClick('${file.split(".")[0]}')">${file.split(".")[0]}</button>`);
	}
});

function songClick(song) {
	socket.emit("song chosen", song);
}