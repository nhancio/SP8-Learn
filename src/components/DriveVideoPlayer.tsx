import React from "react";

const DriveVideoPlayer = () => {
  const fileId = "1A2B3C4D5E6F7G8H9"; // Replace with your actual file ID
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className="w-full h-auto">
      <iframe
        src={embedUrl}
        width="100%"
        height="480"
        allow="autoplay"
        title="Google Drive Video"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default DriveVideoPlayer; 