interface LazyImageProps {
  src: string
  alt: string
}

export const LazyImage = (props: LazyImageProps) => {
  return <img src={props.src} alt={props.alt} loading="lazy" />;
}
