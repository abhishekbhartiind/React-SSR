import App from './App';
import Home from './Home';
import Posts from './Posts';
import Todos from './Todos';
import NotFound from './NotFound';
import loadData from './helper/loadData'

const Routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/posts',
        component: Posts,
        loadData: () => loadData('posts')
    },
    {
        path: '/todos',
        component: Todos,
        loadData: () => loadData('todos')
    },
    {
        component: NotFound
    }
]

export default Routes;