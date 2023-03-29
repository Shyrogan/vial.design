import { GitFile } from './types'

export async function fetchGitFiles(): Promise<GitFile[]> {
  const r = await fetch(
    'https://api.github.com/repos/Shyrogan/blog/contents/',
    {
      mode: 'cors',
      headers: {
        Accept: 'application/vnd.github+json',
      },
    }
  )
  return await r.json()
}
