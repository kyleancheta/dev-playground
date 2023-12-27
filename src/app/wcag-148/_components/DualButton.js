import s from './DualButton.module.css'

export default function DualButton({ plus, minus, children, ...props}) {
  if (plus) {
    return (
      <button className={`${s.main} ${s.plus}`} {...props}>
          {children}
      </button>
    )
  }
  else if (minus) {
    return (
      <button className={`${s.main} ${s.minus}`} {...props}>
          {children}
      </button>
    )
  }
  else {
    return (
      <button className={s.main} {...props}>
          {children}
      </button>
    )
  }
}