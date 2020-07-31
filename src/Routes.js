import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home } from './components/landing/Home'
import { Us } from './components/us/Us'
import { Contact } from './components/contact/Contact'
import { Collection } from './components/collection/Collection'
import { CollectionDresses } from './components/collection/dresses/CollectionDresses'
import { DressDetail } from './components/collection/detail/DressDetail'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/us' component={Us}/>
            <Route path='/contact' component={Contact}/>
            <Route exact path='/collection' render={props => <Collection {...props}/>}/>
            <Route exact path='/collection/:id'component={CollectionDresses}/>
            <Route path='/collection/:collection/:look'component={DressDetail}/>
        </Switch>
    )
}
