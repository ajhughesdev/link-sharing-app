import css from './dashboardLinkHeader.module.css'

const DashboardLinkHeader = () => {
  return (
    <section className={css.title}>
      <h1 className={css.heading}>Customize your links</h1>
      <p className={css.description}>Add/edit/remove links below and then share all your profiles with the world!</p>
    </section>
  )
}

export default DashboardLinkHeader