import css from './saveButton.module.css'

const SaveButton = () => {
  return (
    <div className={css.container}>
      <button disabled className={css.button}>
        Save
      </button>
    </div>
  )
}

export default SaveButton