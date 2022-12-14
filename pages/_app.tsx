import {ChakraProvider, Flex} from '@chakra-ui/react'
import React, {useState} from 'react'
import Navbar from '../src/components/navbar/navbar'
import Sidebar from '../src/components/sidebar/Sidebar'
import {ConnectedUserContext} from '../src/context/ConnectedUserContext'
import '../styles/globals.scss'

export default function MyApp({Component, pageProps}) {

	const [isSidebarOpen, setSidebarOpen] = useState(false)
	const [connectedUser, setConnectedUser] = useState(undefined)

	const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)
	const closeSidebar = () => setSidebarOpen(false)

	return <ChakraProvider>
		<ConnectedUserContext.Provider value={{connectedUser, setConnectedUser}}>
			<Flex direction="column" height="100vh">
				<Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
				<Navbar toggleSidebar={toggleSidebar} />
				<Component {...pageProps} />
			</Flex>
		</ConnectedUserContext.Provider>
	</ChakraProvider>
}
