import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import UserNew from 'src/components/Dashboard/Views/UserNew.vue'
import UserProfile from 'src/components/Dashboard/Views/UserProfile.vue'
import TableList from 'src/components/Dashboard/Views/TableList.vue'
import Typography from 'src/components/Dashboard/Views/Typography.vue'
import Icons from 'src/components/Dashboard/Views/Icons.vue'
import Maps from 'src/components/Dashboard/Views/Maps.vue'
import Notifications from 'src/components/Dashboard/Views/Notifications.vue'

const routes = [{
        path: '/',
        component: DashboardLayout,
        redirect: '/admin/employees'
    },  
    {
    //aqui deberian ir solo graficos e iconos a los distintos módulos
    //como no hay nada de esto en /admin/ se cargan los empleados        
        path: '/admin',
        component: DashboardLayout,
        children: [{
                path: 'employees',
                name: 'employees',
                component: TableList
            },
            {
                path: 'employees/new',
                name: 'employees-new',
                component: UserNew
            },             
            {
                path: 'employees/:id',
                name: 'employees',
                component: TableList
            },            
           
            {
                path: 'employees/profile/:id',
                name: 'employees-profile',
                component: UserProfile
            }
        ]
    },
    {
        path: '*',
        component: NotFound
    }
]
/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes
