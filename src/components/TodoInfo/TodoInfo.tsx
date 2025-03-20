import React from 'react';
import { ToDo } from '../../types/Todo';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: ToDo;
  key: number;
};

export const TodoInfo: React.FC<Props> = ({ todo, key }) => {
  return (
    <article
      key={key}
      data-id={todo.id}
      className={classNames('TodoInfo', {
        'TodoInfo--completed': todo.completed,
      })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      <UserInfo user={todo.user} />
    </article>
  );
};
