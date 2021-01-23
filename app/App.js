
import { Header } from './components/Headers.js'
import { Loader } from './components/Loader.js'
import { Main } from './components/Main.js';
import { Router } from './components/Router.js';
import { InfiniteScroll } from './helpers/infinite_scroll.js';

export function App(){

    const $root = document.getElementById('root');
    console.log($root);
    $root.innerHTML = null;

    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());

    Router();
    InfiniteScroll();
    
}