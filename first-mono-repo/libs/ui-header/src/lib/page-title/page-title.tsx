import styles from './page-title.module.scss'

/* eslint-disable-next-line */
export interface PageTitleProps {}

export function PageTitle(props: PageTitleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PageTitle!</h1>
    </div>
  )
}

export default PageTitle
