import React from 'react';

interface PageTitleType {
  title: string;
}

export const PageTitle = (props: PageTitleType) => {
  return (
    <div>{props.title}</div>
  );
};

