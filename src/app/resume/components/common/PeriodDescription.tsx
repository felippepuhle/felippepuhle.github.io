import clsx from "clsx";
import { ReactNode } from "react";

import styles from "./PeriodDescription.module.css";

export default function PeriodDescription({
  title,
  subtitle,
  period,
  children,
  hideOnPrint,
}: {
  title: string;
  subtitle?: string;
  period: {
    start: string;
    end: string;
  };
  children?: ReactNode;
  hideOnPrint?: boolean;
}) {
  return (
    <div
      className={clsx(styles.container, {
        [styles.hideOnPrint]: hideOnPrint,
      })}
    >
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      <div className={styles.period}>
        {period.start} - {period.end}
      </div>
      {children}
    </div>
  );
}
