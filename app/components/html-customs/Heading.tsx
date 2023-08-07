interface Props {
  children: React.ReactNode
  className?: string
  level: number
}
export default function Heading (props: Props): JSX.Element {
  const { children, className = '', level } = props
  const headings: { [key: number]: () => React.ReactElement } = {
    1: () => <h1 className={`text-5xl${className === '' ? '' : ` ${className}`}`}>{children}</h1>,

    2: () => <h2 className={`text-4xl${className === '' ? '' : ` ${className}`}`}>{children}</h2>,

    3: () => <h3 className={`text-3xl${className === '' ? '' : ` ${className}`}`}>{children}</h3>,

    4: () => <h4 className={`text-2xl${className === '' ? '' : ` ${className}`}`}>{children}</h4>,

    5: () => <h5 className={`text-xl${className === '' ? '' : ` ${className}`}`}>{children}</h5>,

    6: () => <h6 className={`text-lg${className === '' ? '' : ` ${className}`}`}>{children}</h6>
  }
  return headings[level]()
}
