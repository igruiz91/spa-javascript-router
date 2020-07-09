import 'bootstrap/dist/css/bootstrap.min.css'
import './main.scss';
import {router} from './router/index.routes'


router(window.location.hash)

window.addEventListener('hashchange', function(){
    router(window.location.hash)
})

