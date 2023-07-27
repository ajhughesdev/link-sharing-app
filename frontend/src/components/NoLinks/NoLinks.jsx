import { ReactComponent as NoLinksSVG } from './../../assets/illustration-empty.svg'
import css from './noLinks.module.css'

const NoLinks = () => {
  return (
    <section className={css.container}>
      <div className={css.main}>
        <div className={css.illustration}>
          <NoLinksSVG />
        </div>
        <h2 className={css.heading}>Let's get you started</h2>
        <p className={css.description}>Use the "Add new link" button to get started. Once you have more than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!</p>
      </div>
    </section>
  )
}

export default NoLinks