export interface PageMeta {
  title: string
  description: string
  url: string
}

export function setPageMeta({ title, description, url }: PageMeta): void {
  document.title = title

  const set = (selector: string, value: string) => {
    const el = document.querySelector<HTMLMetaElement>(selector)
    if (el) el.content = value
  }

  set('meta[name="description"]', description)
  set('meta[property="og:title"]', title)
  set('meta[property="og:description"]', description)
  set('meta[property="og:url"]', url)
  set('meta[name="twitter:title"]', title)
  set('meta[name="twitter:description"]', description)
}
