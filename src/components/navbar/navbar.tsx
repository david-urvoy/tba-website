import {HamburgerIcon} from '@chakra-ui/icons'
import {Flex, Spacer} from '@chakra-ui/react'
import {default as React} from 'react'
import ToolsMenu from './tools-menu/ToolsMenu'

export default function Navbar(props: {toggleSidebar: () => void}) {

	return (
		<Flex
			justify="space-between"
			align="center"
			padding="10px 20px 10px 20px"
			borderBottom="solid 1px"
		>
			<HamburgerIcon w={8} h={8}
				style={{cursor: "pointer"}} onClick={props.toggleSidebar} />
			<Spacer />
			<ToolsMenu />
		</Flex>
	)
}

