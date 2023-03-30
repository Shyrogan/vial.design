import { A } from '@solidjs/router'
import { Component, createResource, For, Show } from 'solid-js'
import { fetchArticles } from '../utils/blog/lib'

import Loader from '../components/Loader'
import { Meta, Title } from '@solidjs/meta'

import './Index.scss'

const _default: Component<{}> = () => {
  const [articles] = createResource(fetchArticles)
  return (
    <>
      <Title>vial.design — Home</Title>
      <Meta
        name="description"
        content="Hi! My name is VIAL Sébastien and this is my website/blog. Explore this to learn more about me"
      />
      <Meta property="og:title" content="vial.design — Home" />
      <Meta property="og:type" content="website" />
      <Meta
        property="og:description"
        content="Hi! My name is VIAL Sébastien and this is my website/blog. Explore this to learn more about me"
      />

      <Show when={!articles.loading} fallback={<Loader />}>
        <div class="article-container">
          <For each={articles()}>
            {(article) => (
              <A href={`/article/${article.path}`}>
                <div class="article">
                  <h1 class="title">{article.title}</h1>
                  <h5 class="description">{article.description}</h5>
                  <span class="date">
                    Date: {article.date.toLocaleDateString('en')}
                  </span>
                </div>
              </A>
            )}
          </For>
        </div>
      </Show>
    </>
  )
}

export default _default
