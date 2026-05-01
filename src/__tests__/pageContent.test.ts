import { describe, it, expect } from 'vitest'
import { pageContent } from '../pageContent'

const expectedSlugs = [
  'data-analytics',
  'management-philosophy',
  'observability',
  'web-development',
  'agentic-flow',
]

describe('pageContent', () => {
  it('contains all expected page slugs', () => {
    for (const slug of expectedSlugs) {
      expect(pageContent[slug], `Missing page: ${slug}`).toBeDefined()
    }
  })

  it('every page has a non-empty title and subtitle', () => {
    for (const [slug, page] of Object.entries(pageContent)) {
      expect(page.title, `${slug} missing title`).toBeTruthy()
      expect(page.subtitle, `${slug} missing subtitle`).toBeTruthy()
    }
  })

  it('every page has at least one section', () => {
    for (const [slug, page] of Object.entries(pageContent)) {
      expect(page.sections.length, `${slug} has no sections`).toBeGreaterThan(0)
    }
  })

  it('every section has a non-empty id and heading', () => {
    for (const [slug, page] of Object.entries(pageContent)) {
      for (const section of page.sections) {
        expect(section.id, `${slug} section missing id`).toBeTruthy()
        expect(section.heading, `${slug} section missing heading`).toBeTruthy()
      }
    }
  })

  it('sections with badges have a valid badgeVariant', () => {
    const validVariants: string[] = ['cyan', 'orange']
    for (const [slug, page] of Object.entries(pageContent)) {
      for (const section of page.sections) {
        if (section.badges) {
          expect(
            validVariants,
            `${slug} > ${section.id} has invalid or missing badgeVariant`,
          ).toContain(section.badgeVariant)
          expect(
            section.badges.length,
            `${slug} > ${section.id} badges array is empty`,
          ).toBeGreaterThan(0)
        }
      }
    }
  })

  it('section ids are unique within each page', () => {
    for (const [slug, page] of Object.entries(pageContent)) {
      const ids = page.sections.map((s) => s.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size, `${slug} has duplicate section ids`).toBe(ids.length)
    }
  })

  it('observability page has titleSuffix "(O11y)"', () => {
    expect(pageContent['observability'].titleSuffix).toBe('(O11y)')
  })

  it('pages without titleSuffix have undefined titleSuffix', () => {
    const pagesWithoutSuffix = expectedSlugs.filter((s) => s !== 'observability')
    for (const slug of pagesWithoutSuffix) {
      expect(pageContent[slug].titleSuffix, `${slug} unexpectedly has titleSuffix`).toBeUndefined()
    }
  })
})
