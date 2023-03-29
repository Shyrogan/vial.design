// https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28
export interface GitFile {
  type: string
  encoding: 'base64' | 'raw' | 'object' | 'none'
  size: number
  name: string
  path: string
  content: string
  sha: string
  url: string
  git_url: string
  html_url: string
  download_url: string
}
