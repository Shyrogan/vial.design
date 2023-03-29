import { Component } from 'solid-js'

export interface Article {
  path: string
  title: string
  description?: string
  authors?: string[]
  date?: string
  __content: string
}
