import s from './PageTitle.module.css';
export const PageTitle = props => {
  return <h1 className={s.title}>{props.text}</h1>;
};
