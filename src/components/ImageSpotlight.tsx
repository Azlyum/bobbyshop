import { useEffect } from 'react';
import { SpotlightImage } from './InteractiveImage';

type ImageSpotlightProps = {
  image: SpotlightImage | null;
  pinned: boolean;
  onClose: () => void;
};

export function ImageSpotlight({ image, pinned, onClose }: ImageSpotlightProps) {
  useEffect(() => {
    if (!pinned) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, pinned]);

  if (!image) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 ${pinned ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!pinned}
    >
      <div className={`absolute inset-0 transition duration-300 ${pinned ? 'bg-slate-950/72 backdrop-blur-md' : 'bg-slate-950/18 backdrop-blur-[2px]'}`} onClick={pinned ? onClose : undefined} />
      <div className="relative mx-auto w-full max-w-5xl">
        <div className={`relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(3,7,18,0.92),rgba(15,23,42,0.82))] shadow-[0_45px_140px_rgba(2,6,23,0.65)] transition duration-300 ${pinned ? 'scale-100 opacity-100' : 'scale-[0.985] opacity-100'}`}>
          {pinned ? (
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 text-xl text-white transition hover:border-white/30 hover:bg-black/60"
              aria-label="Close image preview"
            >
              ×
            </button>
          ) : null}
          <div className="grid gap-0 lg:grid-cols-[1fr_18rem]">
            <div className="bg-black/30 p-3 sm:p-4">
              <img src={image.src} alt={image.alt} className="max-h-[76vh] w-full rounded-[1.5rem] object-contain" />
            </div>
            <div className="flex flex-col justify-end border-t border-white/10 bg-black/30 p-5 lg:border-l lg:border-t-0 lg:p-6">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-lime-100/80">{pinned ? 'Full view' : 'Hover preview'}</p>
              <p className="mt-4 text-sm leading-7 text-slate-200">{image.label ?? image.alt}</p>
              {pinned ? <p className="mt-5 text-xs uppercase tracking-[0.22em] text-slate-400">Press escape or click outside to close</p> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
