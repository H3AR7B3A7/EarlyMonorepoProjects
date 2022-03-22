import styles from './ui-header.module.scss'

/* eslint-disable-next-line */
export interface UiHeaderProps {}

export function UiHeader(props: UiHeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiHeader!</h1>
    </div>
  )
}

export default UiHeader
