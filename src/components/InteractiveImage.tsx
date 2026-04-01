export type SpotlightImage = {
  src: string;
  alt: string;
  label?: string;
  gallery?: SpotlightImage[];
};

type InteractiveImageProps = {
  image: SpotlightImage;
  imageClassName: string;
  wrapperClassName: string;
  overlayLabel?: string;
  onPreviewStart: (image: SpotlightImage) => void;
  onPreviewEnd: () => void;
  onOpen: (image: SpotlightImage) => void;
};

export function InteractiveImage({
  image,
  imageClassName,
  wrapperClassName,
  overlayLabel = 'View full image',
  onPreviewStart,
  onPreviewEnd,
  onOpen
}: InteractiveImageProps) {
  return (
    <button
      type="button"
      className={`group relative block w-full cursor-zoom-in overflow-hidden ${wrapperClassName}`}
      onMouseEnter={() => onPreviewStart(image)}
      onMouseLeave={onPreviewEnd}
      onFocus={() => onPreviewStart(image)}
      onBlur={onPreviewEnd}
      onClick={() => onOpen(image)}
      aria-label={`${overlayLabel}: ${image.alt}`}
    >
      <img src={image.src} alt={image.alt} className={imageClassName} />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <span className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/45 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        {overlayLabel}
      </span>
    </button>
  );
}
