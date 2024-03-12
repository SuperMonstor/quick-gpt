import React from "react"
import NewChatButton from "./NewChatButton"

function Sidebar() {
	return (
		<div className="p-2 flex flex-col h-screen">
			<div className="flex-1">
				<div>
					{/* New Chat */}
          <NewChatButton />

					<div>{/* Model Selection */}</div>

					{/* Chat Rows */}
				</div>
			</div>
		</div>
	)
}

export default Sidebar
