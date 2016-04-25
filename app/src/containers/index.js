import Index from './index/index';
import React from 'react';
import { Router, Route} from 'react-router';

const rootRoute = [
	{
		path: '', 
		component: 'div',
		childRoutes: [
			{path: '/', component: Index},
			{path: '/counter', getComponents(location, callback){
				require.ensure([], function (require) {
				  callback(null, require('./counter'))
				})
			}},
			{path: '/form', getComponents(location, callback){
				require.ensure([], function (require) {
				  callback(null, require('./form'))
				})
			}},
			{path: '/fetch', getComponents(location, callback){
				require.ensure([], function (require) {
				  callback(null, require('./fetch'))
				})
			}},
			{path: '/product', getComponents(location, callback){
				require.ensure([], function (require) {
				  callback(null, require('./product'))
				})
			}}
		]
	}	
]

export default function(history){
	return (
		<Router history={history} routes={rootRoute} />
	)
}
