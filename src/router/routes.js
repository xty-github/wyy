import Home from "../views/Home"
import My from "../views/my"
import Friends from "../views/friends"
import discover from "../views/home/discover"
import toplist from "../views/home/toplist"
import playlist from "../views/home/playlist"
import djradio from "../views/home/djradio"
import artist from "../views/home/artist"
import album from "../views/home/album"
import detail from "../views/home/detail"
import al_detail from "../views/home/al_detail"

export default [
    {
        path:"/",
        component:Home,
        children:[
            {
                path:"/discover",
                component:discover,
                alias:"/"
            },
            {
                path:"/discover/toplist",
                component:toplist
            },
            {
                path:"/discover/playlist",
                component:playlist,
            },
            {
                path:"/discover/djradio",
                component:djradio
            },
            {
                path:"/discover/artist",
                component:artist
            },
            {
                path:"/discover/album",
                component:album
            },
            {
                path:"/playlist",
                component:detail,
            },
            {
                path:"/album",
                component:al_detail
            },
        ]
    },
    {
        path:"/my",
        component:My
    },
    {
        path:"/friends",
        component:Friends
    },
    
    
]