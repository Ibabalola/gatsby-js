import React from "react"
import styles from "./styles/container.module.css"

export default ({ children }) => (
    <div className={styles.container}>{children}</div>
)