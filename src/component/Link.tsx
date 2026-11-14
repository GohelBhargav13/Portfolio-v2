import { type ReactNode } from "react"

type linkProps = {
    children: ReactNode;
    link: string;
}

function Link({ children, link }: linkProps) {
  return (
    <a href={link} className="text-lg font-bold hover:text-blue-500" target="_blank">
        { children }
    </a>
  )
}

export default Link