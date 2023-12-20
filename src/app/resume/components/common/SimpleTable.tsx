import styles from "./SimpleTable.module.css";

export default function SimpleTable({ list }: { list: string[] }) {
  return (
    <div className={styles.container}>
      {list.map((row) => (
        <p className={styles.cell} key={row}>
          {row}
        </p>
      ))}
    </div>
  );
}
