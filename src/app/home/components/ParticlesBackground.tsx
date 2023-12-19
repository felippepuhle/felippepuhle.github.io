"use client";

import clsx from "clsx";
import { useLayoutEffect, useState } from "react";
import Particles, { IParticlesProps } from "react-particles";
import { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

import styles from "./ParticlesBackground.module.css";

const OPTIONS: IParticlesProps["options"] = {
  fullScreen: true,
  detectRetina: true,
  fpsLimit: 120,
  particles: {
    color: {
      value: "#ffffff",
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 1024,
      },
      value: 100,
    },
    opacity: {
      value: 0.5,
      animation: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 3,
    },
  },
};

async function init(engine: Engine) {
  await loadSlim(engine);
}

export default function ParticlesBackground() {
  const [isReady, setReady] = useState(false);

  useLayoutEffect(() => {
    setReady(true);
  }, []);

  return (
    <Particles
      options={OPTIONS}
      init={init}
      className={clsx(styles.container, { [styles.ready]: isReady })}
    />
  );
}
