import AddLink from '../AddLink/AddLink'
import DashboardLinkHeader from '../DashboardLinkHeader/DashboardLinkHeader'
import SaveButton from '../SaveButton/SaveButton'
import css from './links.module.css'

const Links = ({ hasLinks }) => {
  return (
    <div className={css.container}>
      <div className={css.main}>
        <DashboardLinkHeader />
        <AddLink hasLinks={hasLinks} />
      </div>
      <SaveButton />
    </div>
  )
}

export default Links