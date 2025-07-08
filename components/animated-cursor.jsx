import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedCursor = ({ cursorImage, containerRef }) => {
  const cursorRef = useRef(null);
  const clickEffectRef = useRef(null); // Referencia para el elemento del destello

  useEffect(() => {
    const cursor = cursorRef.current;
    const clickEffect = clickEffectRef.current; // Obtener la referencia al destello
    const container = containerRef.current;

    // Si el contenedor o los elementos del cursor/efecto no están disponibles, salimos.
    if (!container || !cursor || !clickEffect) return;

    // Función para animar el destello
    const animateFlash = () => {
      // Obtenemos la posición actual del cursor.
      const cursorX = gsap.getProperty(cursor, "x");
      const cursorY = gsap.getProperty(cursor, "y");

      // Movemos el destello para que su centro coincida con el centro del cursor.
      // Necesitamos restar la mitad del tamaño del destello para centrarlo.
      gsap.set(clickEffect, {
        x: cursorX + (cursor.offsetWidth / 2) - (clickEffect.offsetWidth / 2),
        y: cursorY + (cursor.offsetHeight / 2) - (clickEffect.offsetHeight / 2),
        opacity: 0, // Asegurarse de que esté oculto antes de animar
        scale: 0.1 // Asegurarse de que esté pequeño antes de animar
      });

      // Animación del destello: aparecer y desaparecer
      gsap.to(clickEffect, {
        opacity: 1,
        scale: 1,
        duration: 0.1, // Duración muy corta para que sea un flash
        ease: "power2.out",
        onComplete: () => {
          gsap.to(clickEffect, {
            opacity: 0,
            scale: 0.1, // Vuelve a un tamaño muy pequeño o casi desaparece
            duration: 0.3, // Un poco más lento para el desvanecimiento
            ease: "power2.out"
          });
        }
      });
    };

    const startAnimation = () => {
      // Obtenemos las dimensiones y la posición del contenedor padre.
      const containerRect = container.getBoundingClientRect();
      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;

      // Calculamos una posición aleatoria para el cursor dentro del contenedor.
      const randomX = gsap.utils.random(0, containerWidth - cursor.offsetWidth);
      const randomY = gsap.utils.random(0, containerHeight - cursor.offsetHeight);

      // Duración aleatoria para el movimiento del cursor entre dos puntos.
      const moveDuration = gsap.utils.random(0.5, 2); // Entre 0.5 y 2 segundos

      // Animación principal: mover el cursor a la nueva posición.
      gsap.to(cursor, {
        x: randomX,
        y: randomY,
        duration: moveDuration,
        ease: "power1.inOut", // Curva de easing suave para un movimiento natural.
        onComplete: () => {
          // Una vez que el cursor ha llegado a su destino, preparamos la simulación del doble clic.
          // Pausa aleatoria antes de que comiencen los clics.
          const pauseBeforeClick = gsap.utils.random(0.05, 0.1); // Pausa muy corta

          gsap.to(cursor, { // Este tween solo maneja el delay antes del primer clic
            delay: pauseBeforeClick,
            onComplete: () => {
              // --- Disparar el destello para el PRIMER clic ---
              animateFlash();

              // --- Primer Clic del Cursor ---
              gsap.to(cursor, {
                scale: 0.9, // El cursor se encoge ligeramente
                duration: 0.05, // Duración muy corta para el efecto de "presionar"
                ease: "power2.out",
                yoyo: true, // Hace que la animación se revierta (vuelve a la escala original)
                repeat: 1, // Repite una vez (para el "presionar" y "soltar")
                onComplete: () => {
                  // --- Pausa corta entre el primer y segundo clic ---
                  gsap.to(cursor, { // Este tween solo maneja el delay entre clics
                    delay: 0.03, // Pausa muy breve
                    onComplete: () => {
                      // --- Disparar el destello para el SEGUNDO clic ---
                      animateFlash();

                      // --- Segundo Clic del Cursor ---
                      gsap.to(cursor, {
                        scale: 0.9,
                        duration: 0.05,
                        ease: "power2.out",
                        yoyo: true,
                        repeat: 1,
                        onComplete: () => {
                          // Aseguramos que el cursor vuelva a su escala normal (1)
                          gsap.set(cursor, { scale: 1 });
                          // Una vez que el doble clic ha terminado, iniciamos la siguiente secuencia de animación.
                          startAnimation();
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    };

    // Iniciamos la animación cuando el componente se monta.
    startAnimation();

    // Función de limpieza: se ejecuta cuando el componente se desmonta.
    return () => {
      // Detenemos todas las animaciones de GSAP que estén activas en el cursor y el efecto de clic.
      gsap.killTweensOf(cursor);
      gsap.killTweensOf(clickEffect);
    };
  }, [containerRef]); // El efecto se re-ejecutará si la referencia del contenedor cambia.

  return (
    <>
      {/* Elemento para el Destello (Flash) */}
      <div
        ref={clickEffectRef}
        className='absolute rounded-full w-[30px] h-[30px] md:w-[50px] md:h-[50px] md:top-[-40px] md:left-[-40px] pointer-events-none top-[-5%] left-[-6%] z-[8]'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          opacity: 0,
          scale: 0.1,
        }}
      />
      {/* Imagen del Cursor Animado */}
      <img
        ref={cursorRef}
        src={cursorImage}
        alt="Animated Cursor"
        className='w-[50px] h-[50px] md:w-[100px] md:h-[100px] pointer-events-none'
        style={{
          position: 'absolute', // Posicionamiento absoluto relativo al padre.
          pointerEvents: 'none', // No interfiere con los eventos del mouse.
          zIndex: 9, // Siempre por encima de todo.
          top: 0, // Posición inicial. GSAP ajustará esto con `x` e `y`.
          left: 0, // Posición inicial.
          scale: 1, // Escala inicial normal.
          opacity: 1, // Opacidad inicial normal.
        }}
      />
    </>
  );
};

export default AnimatedCursor;