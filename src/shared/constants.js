import React from 'react';
import {
  BlogIcon,
  EntryIcon,
  AuthorIcon,
  CommentIcon,
} from '../components/ui/icons/Icons';
import { freezeObj } from './utility';

const Entities = freezeObj({
  Entries: 'entries',
  Blogs: 'blogs',
  Authors: 'authors',
  Comments: 'comments',
});

const EntitiesArray = freezeObj(
  Object.keys(Entities).map((key) => Entities[key])
)

const EntityNames = freezeObj({
  [Entities.Entries]: {
    single: 'Entry',
    plural: 'Entries',
  },
  [Entities.Blogs]: {
    single: 'Blog',
    plural: 'Blogs',
  },
  [Entities.Authors]: {
    single: 'Author',
    plural: 'Authors',
  },
  [Entities.Comments]: {
    single: 'Comment',
    plural: 'Comments',
  },
})

const Icons = freezeObj({
  [Entities.Entries]: <EntryIcon />,
  [Entities.Blogs]: <BlogIcon />,
  [Entities.Authors]: <AuthorIcon />,
  [Entities.Comments]: <CommentIcon />,
});

export {
  Entities,
  EntitiesArray,
  Icons,
  EntityNames,
}
