import React from 'react';

interface Props {
  entry: Entry;
}

export const EntryListItem: React.FC<Props> = ({ entry }) => {
  return (
    <div>
      <div className="jobtitle">{entry.job}</div>
      <div>{entry.location}</div>
      <div>{entry.startDate} - {entry.endDate}</div>
      <div>Responsibilities: {entry.responsibilities}</div>
      <div>Tools: {entry.tools}</div>
    </div>
  )
}