import {AiOutlineHome} from 'react-icons/ai';
import {MdDevices} from 'react-icons/md';
import {BsClipboardData} from 'react-icons/bs';
import{FiSettings} from 'react-icons/fi';
import {BiNetworkChart} from 'react-icons/bi';
import {VscFileSubmodule} from 'react-icons/vsc';
import {AiOutlineMail} from 'react-icons/ai';
export const LeftNavData={
    "leftNav": [
        {
            "name": "Home",
            "application": "TestApp",
            "order": 1,
            "basePath": "https://www.google.com",
            "displayName": "Home",
            "insightLabel": "Home",
            "subMenu": null,
            "icon":<AiOutlineHome/>,
            "to":'/'
        },
        {
            "name": "myportfolio",
            "application": "TestApp",
            "order": 3,
            "basePath": "https://www.google.com",
            "displayName": "Devices",
            "insightLabel": "Devices",
            "subMenu": null,
            "icon":<MdDevices/>,
            "to":'/Devices'
        },
        {
            "name": "reports",
            "application": "TestApp",
            "order": 6,
            "basePath": "https://www.google.com",
            "displayName": "Reports",
            "insightLabel": "Reports",
            "subMenu": null,
            "icon":<BsClipboardData/>,
            'to':'/Reports'
        },
        {
            "name": "email",
            "application": "TestApp",
            "order": 7,
            "basePath": "https://www.google.com",
            "displayName": "Email",
            "insightLabel": "Email",
            "subMenu": null,
            "icon":<AiOutlineMail/>,
            'to':'/Email'
        },
        {
            "name": "profile_settings",
            "application": "TestApp",
            "order": 9,
            "basePath": "https://www.google.com",
            "displayName": "Settings",
            "insightLabel": "Settings",
            "subMenu": null,
            "icon":<FiSettings/>,
            'to':'/Settings/Policies'
        }
    ]
}