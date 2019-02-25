import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './Components/presentational/navigation.js';
import Home from './Components/Containers/Home.js';
import HomeDetails from './Components/Containers/Home-detail.js';
import NotFound from './Components/presentational/not-found.component.js';
import AbcNews from './Components/Containers/ABC-News.js';
import AbcNewsDetails from './Components/Containers/ABC-News-detail.js';
import BBCNews from './Components/Containers/BBC-News.js';
import BBCNewsDetails from './Components/Containers/BBC-News-detail.js';
import CBCNews from './Components/Containers/CBC-News.js';
import CBCNewsDetails from './Components/Containers/CBC-News-detail.js';
import MoneyNews from './Components/Containers/Money-News.js';
import MoneyNewsDetail from './Components/Containers/Money-News-detail.js';
import SportNews from './Components/Containers/Sport-News.js';
import SportNewsDetail from './Components/Containers/Sport-News-detail.js';
import NBCNews from './Components/Containers/NBC-News.js';
import NBCNewsDetail from './Components/Containers/NBC-News-detail.js';
import Neewsweek from './Components/Containers/Neewsweek-News.js';
import NeewsweekDetail from './Components/Containers/Neewsweek-News-detail.js';
import PolicyNews from './Components/Containers/Policy-News.js';
import PolicyNewsDetail from './Components/Containers/Policy-News-detail.js';
import USANews from './Components/Containers/USA-News.js';
import USANewsDetail from './Components/Containers/USA-News-detail.js';

export default (
    <Route path="/" component={Navigation}>
        <IndexRoute component={Home} />
        <Route path='news/:title' component={HomeDetails} />
        <Route path="AbcNews" component={AbcNews} />
        <Route path='AbcNews/:title' component={AbcNewsDetails} />
        <Route path="BBC_News" component={BBCNews} />
        <Route path='BBC_News/:title' component={BBCNewsDetails} />
        <Route path="CBC_News" component={CBCNews} />
        <Route path='CBC_News/:title' component={CBCNewsDetails} />
        <Route path="Money_News" component={MoneyNews} />
        <Route path='Money_News/:title' component={MoneyNewsDetail} />
        <Route path="Sport" component={SportNews} />
        <Route path='Sport/:title' component={SportNewsDetail} />
        <Route path="NBC_News" component={NBCNews} />
        <Route path='NBC_News/:title' component={NBCNewsDetail} />
        <Route path="Neewsweek" component={Neewsweek} />
        <Route path='Neewsweek/:title' component={NeewsweekDetail} />
        <Route path="Policy" component={PolicyNews} />
        <Route path='Policy/:title' component={PolicyNewsDetail} />
        <Route path="UsaToday" component={USANews} />
        <Route path='UsaToday/:title' component={USANewsDetail} />
        <Route path='*' component={NotFound} />
    </Route>
);
