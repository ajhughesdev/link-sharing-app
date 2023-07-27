import NoLinks from '../NoLinks/NoLinks'
import css from './addLink.module.css'

const AddLink = ({ hasLinks }) => {
  return (
    <>
      <div className={css.container}>
        <button className={css.button}>+ Add new link</button>
        {hasLinks ? <div>test</div> : <NoLinks />}
      </div>
    </>
  )
}

export default AddLink