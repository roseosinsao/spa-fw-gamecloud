import { MenuItem } from 'src/shared/models/menu-item.model';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Favorites',
        icon: 'glyphicon-dashboard',
        route: '/authenticated/favorites',
        submenu: null
    },
    {
        text: 'Casino',
        icon: 'glyphicon-dashboard',
        route: '/authenticated/casino',
        submenu: null
    },
    {
        text: 'Feature',
        icon: 'glyphicon-flag',
        route: '/authenticated/feature',
        submenu: null
    },
    {
        text: 'Jackpot',
        icon: 'glyphicon-wrench',
        route: '/authenticated/jackpot',
        submenu: null
    },
    {
        text: 'Other',
        icon: 'glyphicon-wrench',
        route: '/authenticated/other',
        submenu: null
    },
]