"use client";

import clsx from "clsx";
import { useCallback, useState } from "react";
import { EfficientCursor } from "react-efficient-cursor";

import styles from "./Cursor.module.css";

const isOnInteractiveElement = (element: HTMLElement) =>
  ["A", "IMG"].includes(element.tagName);

export default function Cursor() {
  const [isReady, setReady] = useState(false);
  const [isInteracting, setInteractive] = useState(false);

  const onMove = useCallback((e: MouseEvent) => {
    setReady(true);
    setInteractive(isOnInteractiveElement(e.target as HTMLElement));
  }, []);

  return (
    <EfficientCursor onMove={onMove} className={styles.container}>
      <div
        className={clsx(styles.cursor, {
          [styles.ready]: isReady,
          [styles.interacting]: isInteracting,
        })}
      />
    </EfficientCursor>
  );
}
