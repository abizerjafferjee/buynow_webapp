import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAppContext } from '../libs/contextLib'

export default function AuthenticatedRoute({ children, ...rest }) {
	// const { pathname, search } = useLocation()
	const { isAuthenticated } = useAppContext()

	return (
		<Route {...rest}>
			{isAuthenticated ? (
				children
			) : (
				<Redirect
					to={`/signin`}
				/>
			)}
		</Route>
	)
}