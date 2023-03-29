import { A } from '@solidjs/router'
import { Component, createResource, For, Show } from 'solid-js'
import { fetchArticles } from '../utils/blog/lib'

import Loader from '../components/Loader'

const _default: Component<{}> = () => {
  const [articles] = createResource(fetchArticles)
  return (
    <Show when={!articles.loading} fallback={<Loader />}>
      <div class="pt-14">
        <For each={articles()}>
          {(article) => (
            <A href={`/article/${article.path}`}>{article.title}</A>
          )}
        </For>
      </div>
    </Show>
  )
}

export default _default
