import React from 'react'
import { Element } from '../commons/Element'
import { distanceInWordsToNow } from 'date-fns'
import ruLocale from 'date-fns/locale/ru'

export const PostAuthor = ({ createdAt, author }) => (
  <Element name='author'>
    Написал{' '}
    <Element tag='span' name='author-name'>
      {author.fullName}
    </Element>{' '}
    {distanceInWordsToNow(createdAt, { locale: ruLocale })} назад
  </Element>
)
