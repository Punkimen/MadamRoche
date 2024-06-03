import s from './Header.module.scss';
const Header = () => {
  return (
    <header className={s.header}>
      <p>В старый особняк на <span className={'color-accent'}>Кожевнической 16с4</span> обычно заезжали гости со всего света. Зная секретный код <a
        href="tel:+79992102222" className={'color-accent'}>+7 999 2102222</a>, распрастранявшийся через местных пьяниц, каждый из них попадал в тайную команту…</p>
    </header>
  );
};

export default Header;
