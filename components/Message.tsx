import { DocumentData } from "firebase/firestore"
import Image from "next/image"

type Props = {
	message: DocumentData
}

function Message({ message }: Props) {
	const isChatGPT = message.user.name === "ChatGPT"
	return (
		<div className={`py-5 text-white ${isChatGPT && "bg-[#434654]"}`}>
			<div className="flex items-start space-x-5 px-10 max-w-2xl mx-auto">
				<Image
					src={message.user.avatar}
					layout="fixed"
					alt=""
					width={35}
					height={35}
				/>

				<p className="pt-1 text-sm">{message.text.content}</p>
			</div>
		</div>
	)
}

export default Message
