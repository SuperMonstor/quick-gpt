"use client"
import { signIn } from "next-auth/react"
import Image from "next/image"
import React from "react"

function Login() {
	return (
		<div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
			<Image
				src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freelogovectors.net%2Fwp-content%2Fuploads%2F2023%2F01%2Fchatgpt-logo-freelogovectors.net_.png&f=1&nofb=1&ipt=9a0eba29a18d854fffbf8628aac1e000ea62c2f5a6f978c18bc04b9972a98d5b&ipo=images"
				width={300}
				height={300}
				alt="logo"
			/>
			<button className="text-white font-bold text-3xl animate-pulse" onClick={() => signIn('google')}>Sign in to use ChatGPT</button>
		</div>
	)
}

export default Login
