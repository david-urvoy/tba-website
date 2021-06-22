import {MenuButton} from '@chakra-ui/react'
import {User} from 'discord.js'
import React from "react"
import styles from './tools-icon.module.scss'

interface ToolsIconProps {
	connectedUser: User,
	handleClick: (event: React.MouseEvent<HTMLElement>) => void
}

export default function ToolsIcon({connectedUser, handleClick}: ToolsIconProps) {
	return <span className={styles.settingsIcon}>
		{!!connectedUser && <label className={styles.iconLabel}>Bienvenue, {connectedUser.username}</label>}
		<MenuButton onClick={handleClick}>
			<img src={!!connectedUser ? `https://cdn.discordapp.com/avatars/${connectedUser.id}/${connectedUser.avatar}.png` : "/brain-academy-logo.ico"}
				alt="TBA-logo"
				className={styles.roundLogo}
			/>
		</MenuButton>
	</span>
}
