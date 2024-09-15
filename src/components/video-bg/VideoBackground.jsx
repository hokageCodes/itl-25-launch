
const VideoBackground = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
      }}
    >
      <source src="/assets/hero-video.mp4" type="video/mp4" />
      <track
        src="/assets/captions_en.vtt"
        kind="captions"
        srcLang="en"
        label="English"
        default
      />
      <track
        src="/assets/captions_es.vtt"
        kind="captions"
        srcLang="es"
        label="Español"
      />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;