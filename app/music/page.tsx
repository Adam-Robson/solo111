export default function MusicPage() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-center items-center p-12">
      <div className="max-w-2xl">
        <div className="p-2 m-2">
          <p className="text-center text-7xl md:text-8xl font-light tracking-tighter subpixel-antialiased">
            music
          </p>
        </div>

        <div className="max-w-md w-full ml-10 pr-12">
          <div className="max-w-sm sm:max-w-md mx-auto my-6">
            <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/artist/4NrRxIaVhlouvojuHGq62y?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        </div>
      </div>
    </div>
  );
}
