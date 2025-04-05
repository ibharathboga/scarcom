"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

const LinkListItem = ({ href, text }) => (
	<li className="mb-2">
		<a href={href} target="_blank" className="text-blue-500 hover:underline">
			{text}
		</a>
	</li>
);

export default function Page() {
	return (
		<div className="grow flex justify-center p-10">
			<SidebarTrigger className="absolute top-3 left-3 lg:hidden" />

			<div className="max-w-[900px] min-w-[250px]">
				<h1 className="text-3xl font-bold text-center">About Scarcom</h1>
				<div className="flex flex-col space-y-10 py-10 ">
					<section>
						<h2 className="text-2xl font-semibold mb-4 border-b pb-2">Key Features</h2>
						<ul className="list-disc list-inside space-y-3 pl-4">
							<li>
								<strong>Real-Time Messaging:</strong> Leveraging WebSocket technology via Pusher, messages are delivered instantly between users without needing manual refreshes.
							</li>
							<li>
								<strong>Responsive User Interface:</strong> Built with Next.js, Tailwind CSS, and the elegant Shadcn UI component library, the interface adapts beautifully to various screen sizes, offering a consistent experience across devices.

							</li>
							<li>
								<strong>Secure User Authentication:</strong> User accounts are protected with secure password hashing using bcrypt. Session management and authorization are handled reliably through JSON Web Tokens (JWT).
							</li>
							<li>
								<strong>Persistent Data:</strong> Conversations and user information are securely stored in a robust PostgreSQL database (via Neon), ensuring data integrity and availability.
							</li>
						</ul>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4 border-b pb-2">Tech Stack</h2>
						<div className="space-y-4">
							<div>
								<h3 className="text-lg font-medium mb-2">Frontend:</h3>
								<ul className="list-disc list-inside space-y-2 pl-4">
									<li><strong>Next.js:</strong> A React framework for server-side rendering, static site generation, and building fast user interfaces.</li>
									<li><strong>Tailwind CSS:</strong> A utility-first CSS framework for rapid UI development.</li>
									<li><strong>Shadcn UI:</strong> A collection of beautifully designed, accessible, and reusable UI components.</li>
								</ul>
							</div>
							<div>
								<h3 className="text-lg font-medium mb-2">Backend & Database:</h3>
								<ul className="list-disc list-inside space-y-2 pl-4">
									<li><strong>PostgreSQL (via Neon):</strong> A powerful, popular, serverless relational database providing reliable data storage.</li>
									<li><strong>Drizzle ORM:</strong> A modern TypeScript ORM used for database interactions.</li>
									<li><strong>Next.js API Routes:</strong> Handling backend logic and API endpoints within the Next.js framework.</li>
								</ul>
							</div>
							<div>
								<h3 className="text-lg font-medium mb-2">Real-Time Communication:</h3>
								<ul className="list-disc list-inside space-y-2 pl-4">
									<li><strong>Pusher:</strong> A service simplifying the implementation of WebSockets for real-time features.</li>
								</ul>
							</div>
							<div>
								<h3 className="text-lg font-medium mb-2">Authentication:</h3>
								<ul className="list-disc list-inside space-y-2 pl-4">
									<li><strong>bcrypt:</strong> Industry-standard library for password hashing.</li>
									<li><strong>JWT (JSON Web Tokens):</strong> Used for secure user authorization and session management.</li>
								</ul>
							</div>
							<div>
								<h3 className="text-lg font-medium mb-2">Deployment:</h3>
								<ul className="list-disc list-inside space-y-2 pl-4">
									<li><strong>Vercel:</strong> A platform optimized for deploying Next.js applications with ease and scalability.</li>
								</ul>
							</div>
						</div>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4 border-b pb-2">Acknowledgements</h2>
						<p className="leading-relaxed">
							This project would not have been possible without the help and inspiration from various resources. I would like to express my gratitude to all who have been helpful to me in my journey, especially to the people who teach and explain on YouTube, StackOverflow, GitHub discussions and Reddit, as well as those responsible for documentation works and libraries.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4 border-b pb-2">References</h2>

						<ul className="list-disc list-inside pl-4">
							<LinkListItem
								href="https://github.com/shadcn-ui/ui/issues/5746#issuecomment-2461248985"
								text="fix: shadcn sidebar mobile issue (github)"
							/>
							<LinkListItem
								href="https://stackoverflow.com/questions/75674866/adding-favicon-to-nextjs-app-router-application/76412379#76412379"
								text="way to change tab icon (stack overflow)"
							/>
							<LinkListItem
								href="https://www.radix-ui.com/primitives/docs/components/tooltip"
								text="radix tooltip (radix ui documentation)"
							/>
							<LinkListItem
								href="https://www.reddit.com/r/nextjs/comments/1ajp6nm/comment/kp2le9c/?rdt=64292"
								text="bcryptjs instead of bcrypt (reddit)"
							/>
							<LinkListItem
								href="https://www.youtube.com/watch?v=hpL9C5FWIRk"
								text="postgres sequence (youtube)"
							/>
							<LinkListItem
								href="https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react"
								text="to be able to scroll to bottom with a click (stack overflow)"
							/>
							<LinkListItem
								href="https://stackoverflow.com/questions/23427384/get-form-data-in-react"
								text="get form data in react (stack overflow)"
							/>
							<LinkListItem
								href="https://stackoverflow.com/questions/75638720/nextauth-js-credentials-provider-unable-to-return-user-or-error-message/75639662#75639662"
								text="to get user info via nextauth js token (stack overflow)"
							/>
							<LinkListItem
								href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-route-segments"
								text="dynamic routes (nextjs documentation)"
							/>
							<LinkListItem
								href="https://stackoverflow.com/questions/40385133/retrieve-data-from-a-readablestream-object"
								text="being able to print readable stream (stack overflow)"
							/>
						</ul>
					</section>
				</div>

			</div>
		</div>
	);
}