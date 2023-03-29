import { GitFile } from '../git/types'
import { Article } from './types'
import { fetchGitFiles } from '../git/api'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'
import remarkFrontmatter from 'remark-frontmatter'
import remarkParseFrontmatter from 'remark-parse-frontmatter'

const GIT_MAIN_URL = 'https://raw.githubusercontent.com/Shyrogan/blog/main'

export async function pathToArticle(path: string): Promise<Article> {
  const content_string = await fetch(`${GIT_MAIN_URL}/${path}.md`).then((r) =>
    r.text()
  )

  const file = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkParseFrontmatter)
    .use(remarkHtml, { allowDangerousHtml: true })
    .process(content_string)

  const { title, description, authors, date } = file.data.frontmatter as {
    title: string
    description?: string
    authors?: string[]
    date?: string
  }

  return {
    path,
    title,
    description,
    authors,
    date,
    __content: file.value.toString(),
  }
}

export async function gitToArticle(f: GitFile): Promise<Article> {
  return await pathToArticle(f.name.substring(0, f.name.length - '.md'.length))
}

export async function fetchArticles(): Promise<Article[]> {
  return await Promise.all(
    (await fetchGitFiles())
      .filter((f) => f.name.endsWith('.md'))
      .map(gitToArticle)
  )
}
