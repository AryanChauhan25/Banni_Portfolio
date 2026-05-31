import { Reveal } from './Reveal'

export function SectionHeading({ eyebrow, title, description }) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </Reveal>
  )
}
