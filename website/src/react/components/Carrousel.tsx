import React, { useEffect, useState, useMemo } from 'react';

interface SliderProps {
  children: React.ReactNode; // Accepting ReactNode for flexibility
  width?: string; // Optional width prop for each slide
  duration?: number; // Optional duration for the animation in seconds
  toRight?: boolean; // Optional boolean to control direction of the animation
  pauseOnHover?: boolean; // Optional boolean to pause animation on hover
  blurBorders?: boolean; // Optional boolean to add blur effects on the borders
  blurBorderColor?: string; // Optional color for blur border effect
}

interface SlideProps {
  children: React.ReactNode; // Children for each individual slide
  width?: string; // Optional width for each slide
}

const Slider: React.FC<SliderProps> & { Slide: React.FC<SlideProps> } = ({
  children,
  width = '200px',
  duration = 40,
  toRight = false,
  pauseOnHover = false,
  blurBorders = false,
  blurBorderColor = '#fff',
}) => {
  const [idNanoid, setIdNanoid] = useState<string>('');

  // Convert children to array and filter out invalid elements
  const childrenArray = useMemo(() => {
    return React.Children.toArray(children).filter((child) =>
      React.isValidElement(child)
    ) as React.ReactElement[];
  }, [children]);

  // Generate a random string ID for keyframes
  const generarCadenaAleatoria = (): string => {
    let cadena = '';
    const caracteres =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 10; i++) {
      cadena += caracteres.charAt(
        Math.floor(Math.random() * caracteres.length)
      );
    }
    return cadena;
  };

  useEffect(() => {
    setIdNanoid(generarCadenaAleatoria());
  }, []);

  useEffect(() => {
    if (!idNanoid || childrenArray.length === 0) return;

    // Calculate the total translation value based on children length and width
    // This moves exactly one set of children to create seamless loop
    const totalTranslateX = `calc(${toRight ? '' : '-'}${width} * ${
      childrenArray.length
    })`;

    // Dynamically create the CSS keyframes for the animation
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = `slider-style-${idNanoid}`;
    const keyFrames = `
      @keyframes slider_logo_slider_${idNanoid} {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(${totalTranslateX});
        }
      }`;

    style.innerHTML = keyFrames;
    document.getElementsByTagName('head')[0].appendChild(style);

    // Cleanup the created styles on component unmount
    return () => {
      const existingStyle = document.getElementById(`slider-style-${idNanoid}`);
      if (existingStyle) {
        document.getElementsByTagName('head')[0].removeChild(existingStyle);
      }
    };
  }, [toRight, width, childrenArray.length, idNanoid]);

  const handleMouseEnter = () => {
    const sliderElement = document.getElementById(`slider_${idNanoid}`);
    if (sliderElement) sliderElement.style.animationPlayState = 'paused';
  };

  const handleMouseLeave = () => {
    const sliderElement = document.getElementById(`slider_${idNanoid}`);
    if (sliderElement) sliderElement.style.animationPlayState = 'running';
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          width: '100%',
          height: 'auto',
          margin: 'auto',
          overflow: 'hidden',
          position: 'relative',
        }}
        onMouseEnter={() => pauseOnHover && handleMouseEnter()}
        onMouseLeave={() => pauseOnHover && handleMouseLeave()}
        id={`slider_wrapper_${idNanoid}`}
      >
        <div
          style={{
            display: 'flex',
            animation: idNanoid
              ? `slider_logo_slider_${idNanoid} ${duration}s linear infinite`
              : 'none',
            width: `calc(${width} * ${childrenArray.length * 3})`,
            willChange: 'transform',
          }}
          id={`slider_${idNanoid}`}
        >
          {childrenArray.map((child, i) => (
            <React.Fragment key={`set1-${i}`}>
              {React.isValidElement(child)
                ? React.cloneElement(child, { width } as Partial<SlideProps>)
                : child}
            </React.Fragment>
          ))}
          {childrenArray.map((child, i) => (
            <React.Fragment key={`set2-${i}`}>
              {React.isValidElement(child)
                ? React.cloneElement(child, { width } as Partial<SlideProps>)
                : child}
            </React.Fragment>
          ))}
          {childrenArray.map((child, i) => (
            <React.Fragment key={`set3-${i}`}>
              {React.isValidElement(child)
                ? React.cloneElement(child, { width } as Partial<SlideProps>)
                : child}
            </React.Fragment>
          ))}
        </div>
      </div>

      {blurBorders && (
        <>
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              width: '180px',
              transform: 'rotate(180deg)',
              zIndex: 10,
              height: '105%',
              background: `linear-gradient(90deg, ${blurBorderColor} 10%, rgba(255, 255, 255, 0) 80%)`,
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '180px',
              zIndex: 10,
              height: '120%',
              background: `linear-gradient(90deg, ${blurBorderColor} 10%, rgba(255, 255, 255, 0) 80%)`,
            }}
          />
        </>
      )}
    </div>
  );
};

// Slide component definition with TypeScript
const Slide: React.FC<SlideProps> = ({
  children,
  width = '200px',
  ...props
}) => {
  return (
    <div
      style={{
        width: width,
        minWidth: width,
        flexShrink: 0,
        alignItems: 'center',
        display: 'flex',
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// Assign the Slide component to Slider.Slide
Slider.Slide = Slide;

export default Slider;
