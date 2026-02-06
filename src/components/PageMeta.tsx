import { useEffect } from 'react'

interface PageMetaProps {
  title: string
  description: string
}

export default function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = `${title} | Aqoonmaal`
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute('content', description)
    } else {
      const el = document.createElement('meta')
      el.name = 'description'
      el.content = description
      document.head.appendChild(el)
    }
    return () => {
      document.title = 'Aqoonmaal'
    }
  }, [title, description])
  return null
}
