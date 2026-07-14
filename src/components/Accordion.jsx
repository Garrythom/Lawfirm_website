import { useState } from 'react'

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <ul className="accordion">
      {items.map((item, index) => {
        const open = index === openIndex
        return (
          <li className={`accordion__item ${open ? 'accordion__item--open' : ''}`} key={item.title}>
            <button
              type="button"
              className="accordion__title"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span>{item.title}</span>
              <span className="accordion__icon" aria-hidden="true">{open ? '−' : '+'}</span>
            </button>
            {open && <div className="accordion__content"><p>{item.text}</p></div>}
          </li>
        )
      })}
    </ul>
  )
}

export default Accordion
