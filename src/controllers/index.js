import home from './home.controller';
import posts from './posts.controller';
import products from './products.controller';
import notFound from './404.controller';

const pages = {
    home,
    posts,
    products,
    notFound
}

export {pages}