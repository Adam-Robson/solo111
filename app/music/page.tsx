export default function MusicPage() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-center items-center p-2">
      <h1 className="text-center text-6xl sm:text-7xl md:text-8xl font-light tracking-tighter subpixel-antialiased mt-8 mb-4">
        music
      </h1>
      <div className="max-w-sm sm:max-w-md md:max-w-lg w-full mx-auto my-6 px-16">
        <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/artist/4NrRxIaVhlouvojuHGq62y?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>
  );
}
