import React from 'react';
import {
  InsertDriveFile,
  FormatAlignCenter,
  Person,
  Comment,
} from '@material-ui/icons';
import { ListItemIcon } from '@material-ui/core';

const BlogIcon = () => (
  <ListItemIcon><InsertDriveFile /></ListItemIcon>
);

const EntryIcon = () => (
  <ListItemIcon><FormatAlignCenter /></ListItemIcon>
)
const AuthorIcon = () => (
  <ListItemIcon><Person /></ListItemIcon>
)
const CommentIcon = () => (
  <ListItemIcon><Comment /></ListItemIcon>
)

export {
  BlogIcon,
  EntryIcon,
  AuthorIcon,
  CommentIcon,
}
