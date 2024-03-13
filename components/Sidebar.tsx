"use client"

import React from "react"
import NewChatButton from "./NewChatButton"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { signOut } from "next-auth/react"
import { useCollection } from "react-firebase-hooks/firestore"
import { collection, orderBy, query } from "firebase/firestore"
import { db } from "@/firebase"
import ChatRow from "./ChatRow"

function Sidebar() {
	const { data: session } = useSession()
	const [chats, loading, error] = useCollection(
		session &&
			query(
				collection(db, "users", session.user?.email!, "chats"),
				orderBy("createdAt", "asc")
			)
	)
	return (
		<div className="p-2 flex flex-col h-screen">
			<div className="flex-1">
				<div>
					{/* New Chat */}
					<NewChatButton />

					<div>{/* Model Selection */}</div>

					{/* Chat Rows */}
					{chats?.docs.map((chat) => (
						<ChatRow key={chat.id} id={chat.id} />
					))}
				</div>
			</div>
			{session && (
				<Image
					onClick={() => signOut()}
					src={session.user?.image!}
					alt="Profile picture"
					width={12}
					height={12}
					className="h-12 w-12 rounded-full mx-auto mb-2 hover:opacity-50"
				/>
			)}
		</div>
	)
}

export default Sidebar
