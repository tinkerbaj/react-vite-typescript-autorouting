import React, { Fragment, lazy, Suspense } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';

const ROUTES = import.meta.glob('/src/pages/**/[a-z0-9[]*.tsx')

type lazyType = () => Promise<{
  default: React.ComponentType<any>;
}>

const routes = Object.keys(ROUTES).map((route)  =>  {
  const path = route
    .replace(/\/src\/pages|index|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1')

  return { path, element: lazy(ROUTES[route] as lazyType) }
})


console.log(routes)

const App = () => {

  const ErrorPage = routes.find(x => x.path === "/404")
  const NotFound = ErrorPage != undefined ? ErrorPage.element : () => <div>404</div>

  return (
      <Suspense fallback={'Loading...'}>
        <BrowserRouter>
        <Routes>
          {routes.map(({ path, element: Component = Fragment }) => (
            <Route key={path} path={path} element={ < Component />} />
          ))}
          <Route path="*" element={ < NotFound /> } />
          </Routes>
        </BrowserRouter>
      </Suspense>
  )
}


export default App;
