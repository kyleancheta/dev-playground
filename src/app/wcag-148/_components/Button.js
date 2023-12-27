import s from './Button.module.css'

export default function Button({ children, ...props}) {
  return (
    <button className={s.main} {...props}>
        {children}
    </button>
  )
}