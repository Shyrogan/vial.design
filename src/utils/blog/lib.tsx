import { GitFile } from '../git/types'
import { Article } from './types'
import { loadFront } from 'yaml-front-matter'
import { fetchGitFiles } from '../git/api'

const GIT_MAIN_URL = 'https://raw.githubusercontent.com/Shyrogan/blog/main'

export async function pathToArticle(path: string): Promise<Article> {
  const content_string = await fetch(`${GIT_MAIN_URL}/${path}.md`).then((r) =>
    r.text()
  )
  const { title, description, authors, date, __content } =
    loadFront(content_string)

  return {
    path,
    title,
    description,
    authors,
    date,
    __content,
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
