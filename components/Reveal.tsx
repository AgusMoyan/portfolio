"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Retardo en segundos para escalonar elementos. */
  delay?: number;
};

/**
 * Aparición sutil al entrar en viewport. Respeta `prefers-reduced-motion`:
 * el árbol renderizado es SIEMPRE el mismo (evita mismatch de hidratación);
 * solo cambia la duración — 0 si el usuario pidió menos movimiento.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { duration: 0.5, delay, ease: "easeOut" }
      }
    >
      {children}
    </motion.div>
  );
}
