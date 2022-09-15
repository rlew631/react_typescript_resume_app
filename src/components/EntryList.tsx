import React from 'react';
import { EntryListItem } from './EntryListItem';

interface Props {
  entries: Entry[];
}

export const EntryList: React.FC<Props> = ({ entries}) => {
  return (
    <ul>
      {entries.map((entry) => (
        <EntryListItem key={entry.job} entry={entry}/>
      ))}
    </ul>
  )
}