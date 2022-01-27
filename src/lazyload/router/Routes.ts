import {lazy, LazyExoticComponent} from "react";
//import {LazyPage1, LazyPage2, LazyPage3} from "../pages";

type JSXCompomnent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXCompomnent> | JSXCompomnent;
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "lazypage1" */ "../pages/LazyPage1"));
const Lazy2 = lazy(() => import(/* webpackChunkName: "lazypage2" */ "../pages/LazyPage2"));
const Lazy3 = lazy(() => import(/* webpackChunkName: "lazypage3" */ "../pages/LazyPage3"));

export const RoutesNav: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy 1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy 2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy 3'
    },
]