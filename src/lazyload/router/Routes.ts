import {lazy, LazyExoticComponent} from "react";

type JSXCompomnent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXCompomnent> | JSXCompomnent;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "lazyLayout" */ "../Layout/LazyLayout"));
/*const Lazy1 = lazy(() => import(/!* webpackChunkName: "lazypage1" *!/ "../pages/LazyPage1"));
const Lazy2 = lazy(() => import(/!* webpackChunkName: "lazypage2" *!/ "../pages/LazyPage2"));
const Lazy3 = lazy(() => import(/!* webpackChunkName: "lazypage3" *!/ "../pages/LazyPage3"));*/

export const RoutesNav: Route[] = [
    {
        to: '/lazyLayout',
        path: 'lazyLayout/*',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
/*    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy 2'
    },*/
]