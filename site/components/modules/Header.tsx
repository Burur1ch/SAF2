'use client'

import { useLang } from "@/hooks/useLang";
import Logo from "../elements/Logo";

export const Header = () =>{
    const {lang, translations} = useLang()
    return(
        <header className="header">
            <div className="container header__container">
                <button className="btn-reset header_burger">
                    {translations[lang].header.menu_btn}
                </button>
                <div className="header_logo">
                    <Logo/>
                </div>
                <ul className='header__links list-reset'>
          <li className='header__links__item'>
            {/* <button
              className='btn-reset header__links__item__btn header__links__item__btn--search'
              onClick={handleOpenSearchModal}
            /> */}
          </li>
          <li className='header__links__item'>
            {/* <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--favorites'
            >
              {!!currentFavoritesByAuth.length && (
                <span className='not-empty' />
              )}
            </Link> */}
          </li>
          <li className='header__links__item'>
            {/* <Link
              className='header__links__item__btn header__links__item__btn--compare'
              href='/comparison'
            >
              {!!currentComparisonByAuth.length && (
                <span className='not-empty' />
              )}
            </Link> */}
          </li>
          <li className='header__links__item'>
            {/* <CartPopup /> */}
          </li>
          <li className='header__links__item header__links__item--profile'>
            {/* {isAuth ? (
              <HeaderProfile />
            ) : loginCheckSpinner ? (
              <FontAwesomeIcon icon={faSpinner} spin />
            ) : (
              <button
                className='btn-reset header__links__item__btn header__links__item__btn--profile'
                // onClick={handleOpenAuthPopup}
              />
            )} */}
          </li>
        </ul>
            </div>
        </header>
    )
}