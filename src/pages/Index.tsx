import { A } from '@solidjs/router'
import { Component, createResource, For, Show } from 'solid-js'
import { fetchArticles } from '../utils/blog/lib'

import Loader from '../components/Loader'
import { Meta, Title } from '@solidjs/meta'

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
        <div class="pt-14">
          <For each={articles()}>
            {(article) => (
              <A href={`/article/${article.path}`}>{article.title}</A>
            )}
          </For>
        </div>
      </Show>
    </>
  )
}

export default _default
