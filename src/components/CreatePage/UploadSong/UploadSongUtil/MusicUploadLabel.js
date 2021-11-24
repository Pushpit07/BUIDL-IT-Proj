import React, { useState } from "react";
import uploadCover from "../../../../assets/music.svg";
import musicRecord from "../../../../assets/music_record.png";
import "./musicUploadLabel.css";

export default function MusicUploadLabel() {
	const [musicUploadState, setMusicUploadState] = useState(false);

	const handleSongUpload = (e) => {
		if (e.target.value.length === 0) return;
		// console.log(e.target.value.split("\\").pop());
		// console.log(document.getElementById("uploaded-song-name"));
		// console.log(document.getElementById("upload-song-inp").value.split("\\").pop());
		document.getElementById("uploaded-song-name").textContent = e.target.value.split("\\").pop();
		setMusicUploadState(true);
	};

	return (
		<div>
			{musicUploadState ? (
				<label className="uploaded-song-label" htmlFor="upload-song-inp">
					<img className="vinyl-record-img" src={musicRecord} alt="vinyl record" />
					<label className="edit-icon-song-btn" htmlFor="upload-song-inp">
						<i className="far fa-edit"></i>
					</label>
				</label>
			) : (
				<label htmlFor="upload-song-inp">
					{/* CSS FOR THIS PART IS SAME AS THAT FOR UPLOAD IMAGE */}
					<div className="upload-img-div">
						<img className="upload-song-option mb-2" src={uploadCover} alt="cover logo" />
						<label htmlFor="upload-song-inp" className="upload-image-label">
							Upload Song
						</label>
					</div>
				</label>
			)}
			<label id="uploaded-song-name" className="mt-2 ml-3">
				No file chosen
			</label>
			<input type="file" id="upload-song-inp" accept="audio/*" className="song-inp-text mt-2 ml-3" onChange={handleSongUpload} required />
		</div>
	);
}
