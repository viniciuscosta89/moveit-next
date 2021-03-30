import React, { Children, useEffect, useState } from 'react';
import { useContext } from 'react';
import { SidebarWrapper } from '../styles/components/Sidebar';
import { LoginContext } from '../contexts/LoginContext';
import { SidebarContext } from '../contexts/SidebarContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';

const slideLeft = {
  visible: {
    opacity: 1,
    x: 0,
    width: '112px',
    transition: {
      delay: 0.3,
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  hidden: {
    opacity: 0,
    x: -32,
    width: 0,
  },
}

const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  const className =
    asPath === props.href || asPath === props.as || asPath === props.title
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link href={props.href}>
      {
        React.cloneElement(child, {
          className: className || null,
        })
      }
    </Link >
  )
}

export default function Sidebar() {
  const { session, handleSignout } = useContext(LoginContext)
  const { isSideBarOpen } = useContext(SidebarContext)

  const isDesktop = useMediaQuery({
    query: '(min-width: 720px)'
  })

  const sidebarAnimationForDesktop = {
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    variants: slideLeft
  }

  const NoAnimationForMobile = {
    initial: false,
    animate: false,
  }

  return (
    <SidebarWrapper
      {...(isDesktop ? { ...sidebarAnimationForDesktop } : { ...NoAnimationForMobile })}
      className={isSideBarOpen && 'open'}
    >
      <img className="logo" src="./img/movit-logo.svg" alt="Logo" />

      <ul>
        <li>
          <ActiveLink activeClassName="active" href="/">
            <a className="sidebar-link" title="Home">
              <svg className="sidebar-link__icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12L16 2.66663L28 12V26.6666C28 27.3739 27.719 28.0522 27.219 28.5522C26.7189 29.0523 26.0406 29.3333 25.3333 29.3333H6.66667C5.95942 29.3333 5.28115 29.0523 4.78105 28.5522C4.28095 28.0522 4 27.3739 4 26.6666V12Z" stroke="inherit" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 29.3333V16H20V29.3333" stroke="inherit" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="sidebar-link__label">Home</span>

            </a>
          </ActiveLink>
        </li>

        {/* <li>
          <ActiveLink activeClassName="active" href="/leaderboard">
            <a className="sidebar-link" title="Leaderboard">
              <svg className="sidebar-link__icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M16.0001 20C21.1547 20 25.3334 15.8214 25.3334 10.6667C25.3334 5.51205 21.1547 1.33337 16.0001 1.33337C10.8454 1.33337 6.66675 5.51205 6.66675 10.6667C6.66675 15.8214 10.8454 20 16.0001 20Z" stroke="inherit" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10.9466 18.52L9.33325 30.6667L15.9999 26.6667L22.6666 30.6667L21.0533 18.5067" stroke="inherit" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <span className="sidebar-link__label">Leaderboard</span>
            </a>

          </ActiveLink>
        </li> */}

        <li>
          {session && (
            <a href="" onClick={handleSignout} title="Logout">
              <span className="sidebar-link__icon material-icons">logout</span>
              <span className="sidebar-link__label">Logout</span>
            </a>
          )}
        </li>


      </ul>

      <div></div>
    </SidebarWrapper>
  )
}
