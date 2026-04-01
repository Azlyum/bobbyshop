import { useEffect } from 'react';
import { GalleryImage } from '../data/siteContent';
import { SpotlightImage } from './InteractiveImage';

type GalleryModalProps = {
  images: GalleryImage[];
  open: boolean;
  onClose: () => void;
  onOpenImage: (image: SpotlightImage) => void;
};

export function GalleryModal({ images, open, onClose, onOpenImage }: GalleryModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8" aria-modal="true" role="dialog">
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close gallery"
      />
      <div className="relative z-10 flex max-h-[88vh] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(3,7,18,0.96),rgba(15,23,42,0.92))] shadow-[0_45px_140px_rgba(2,6,23,0.72)]">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-5 sm:px-7">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-lime-100/80">Gallery</p>
            <h2 className="mt-3 font-['Space_Grotesk'] text-2xl font-semibold text-white sm:text-3xl">Finished work from the shop.</h2>
            <p className="mt-2 text-sm text-slate-300">{images.length} after-work images</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/40 text-2xl text-white transition hover:border-white/30 hover:bg-black/60"
            aria-label="Close gallery"
          >
            &times;
          </button>
        </div>
        <div className="overflow-y-auto px-5 py-5 sm:px-7 sm:py-7">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {images.map((item) => (
              <button
                key={`${item.imageSrc}-${item.label}`}
                type="button"
                className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-slate-950/50 text-left transition duration-300 hover:-translate-y-0.5 hover:border-lime-300/30 hover:bg-slate-950/65"
                onClick={() => {
                  onClose();
                  onOpenImage({
                    src: item.imageSrc,
                    alt: item.imageAlt,
                    label: item.label
                  });
                }}
              >
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.04] group-hover:brightness-110"
                />
                <div className="border-t border-white/10 px-4 py-4">
                  <p className="text-sm font-medium text-slate-100">{item.label}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
