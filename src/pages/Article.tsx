import { useParams } from '@solidjs/router'
import { Component, createResource, Show } from 'solid-js'
import { pathToArticle } from '../utils/blog/lib'
import { Article } from '../utils/blog/types'
import { Meta, Title } from '@solidjs/meta'

import Loader from '../components/Loader'

import './Article.scss'

export const Content: Component<{ article: Article }> = ({ article }) => {
  const div = document.createElement('div')
  div.classList.add('article-markdown')
  div.innerHTML = article.__content

  return (
    <>
      <Title>vial.design — {article.title}</Title>
      <Meta name="description" content={article.description} />
      <Meta property="og:title" content={article.title} />
      <Meta property="og:type" content="website" />
      <Meta property="og:description" content={article.description} />

      <div class="article-meta">
        <h1 class="title">Title: {article.title}</h1>
        <Show when={article.description}>
          <h4 class="subtitle">Description: {article.description}</h4>
        </Show>
        <Show when={article.date}>
          <h5 class="date">Date: {article.date}</h5>
        </Show>
      </div>

      {div}
    </>
  )
}

const _default: Component<{}> = () => {
  const { path } = useParams()
  const [article] = createResource(async () => pathToArticle(path))

  return (
    <Show when={!article.loading} fallback={<Loader />}>
      <div class="article">
        <div class="article-content">
          <Content article={article()} />
        </div>
      </div>
    </Show>
  )
}

export default _default
