import { ReactNode } from "react";

import styles from "./PeriodDescription.module.css";

export default function PeriodDescription({
  title,
  period,
  children,
}: {
  title: string;
  period: {
    start: string;
    end: string;
  };
  children?: ReactNode;
}) {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <div className={styles.period}>
        {period.start} - {period.end}
      </div>
      {children}
    </div>
  );
}
