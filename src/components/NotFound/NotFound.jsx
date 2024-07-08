import css from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={css.notFound__wrap}>
      <h1 className={css.notFound__title}>OOPS... page not found :(</h1>
      <img className={css.notFound__image} src="../../../public/Group.png" />
    </div>
  );
}
