---
title: "Jamf Now App Deployment"
layout: 'layouts/base.html'
permalink: "jamf-now-blueprint-apps/"
description: A two-year project to empower small businesses with better IT tools.
---

<div class="secondary-nav">
	<nav class="page-nav">
		{% include "partials/nav-logo.html" %}
		<a href=".." class="l-align btn-icon icon-back no-link-decor" alt="back"></a>
		<a href="#product" class="btn no-link-decor">Product</a>
		<a href="#problems" class="btn no-link-decor">Problems</a>
		<a href="#process" class="btn no-link-decor">Process</a>
		<a href="#outcomes" class="btn no-link-decor">Outcomes</a>
	</nav>
</div>

<section id="intro" class="greeting">
	<div class="container">
		<header>
			<h1>{{ title }}</h1>
			<p>Creating a better, future-proofed workflow that empowers administrators to view and choose the apps their co-workers need. Leaning on partnerships with Engineering, Product, and Support to build something customers will love.</p>
			<div class="row">
				<div class="double-column">
					<span class="small-caps">Collaborators</span>
					<ul class="no-list-decor">
						<li>Ryan Rud, UI Engineer</li>
						<li>Bartek Stolarek, UI Engineer</li>
						<li>Gary Flavin, UX Designer</li>
					</ul>
				</div>
				<div class="column">
					<span class="small-caps">Timeframe</span>
					<p>2 weeks</p>
				</div>
				<div class="double-column">
					<span class="small-caps">Goals</span>
					<ul class="no-list-decor">
						<li>Reduce unnecessary UI clutter and improve workflow flexibility</li>
						<li>Make room for future deployment options</li>
						<li>Finish out the last of a year's worth of roadmap work</li>
					</ul>
				</div>
			</div>
		</header>
	</div>
</section>

<section id="product">
	<div class="row container">
		<div class="column">
			<header>
				<h2>Product</h2>
			</header>
		</div>
		<div class="double-column">
			<h3 class="subheading">Jamf Now</h3>
			<p>A cloud-based SaaS Apple device management platform for small business. More than <a href="https://www.imore.com/jamf-now-manages-20-million-apple-devices-around-world">20 million devices</a> are managed through Jamf &mdash; almost 500,000 of those are on <a href="https://www.jamf.com/products/jamf-now/">Jamf Now</a>.</p>
			<p>We offer Standard and Plus subscriptions, leveraging Plus as a set of entirely optional advanced features, intended to avoid unnecessary upselling.</p>
			<h3 class="subheading">User</h3>
			<p>UX at Jamf has established five user personas, spanning every level of technical proficiency, from the basics of using a Mac, to writing custom apps and building out company networks. Jamf Now is the <strong>only product at Jamf</strong> with all five personas represented in its user base.</p>
			<p>The majority of Jamf Now's customers manage devices as a <strong>secondary or tertiary responsibility</strong>.</p>
			<h3 class="subheading">My role</h3>
			<p>As the UX designer for Jamf Now, my primary role is co-creating <strong>experience-driven roadmap projects and strategies</strong>. I aim to design consistent, reusable patterns, workflows, and improvements toward the quality of life across the platform. We accomplish this with constant cross-team, cross-discipline collaboration and a culture of open, candid feedback.</p>
			<p>We want to empower anyone, regardless of technical proficiency, with confidence to use our product.</p>
		</div>
	</div>
</section>

<section id="problems">
	<div class="row container">
		<div class="column">
			<header>
				<h2>Problems</h2>
			</header>
		</div>
		<div class="double-column">
			<h3 class="subheading">Thinking ahead</h3>
			<p>There is only one decision to make today when deploying apps on Jamf Now -- install to all compatible devices, or don't install at all. A new, major roadmap initiative came with a new, major deployment option that would allow our admins to offer apps to their co-workers as a choice, but our existing UI wasn't having it.</p>
			<h3 class="subheading">Quick turnaround</h3>
			<p>I had a two-week window to get this done and documented.</p>
			<p><em>Wait, just two weeks?</em></p>
			<p>Yep! After months of interviews conducted with my UX Research partner, negotiating with stakeholders, and iterating on strategies to get this roadmap shipped on time, this was the last workflow for more than a year's worth of roadmap work. In two weeks, Engineering would begin the estimation process, which meant pencils down for design. Thankfully, all that work we already put in gave me a ton of confidence.</p>
			<h3 class="subheading">No room</h3>
			<p>Literally. The existing modal on desktop couldn't handle the addition of a second deployment option <strong>[fig.1]</strong>. There was too much visual noise in an overburdened modal. And our long-neglected mobile experience was already practically unusable <strong>[fig.2]</strong>. In order to add this per-app option, we realized that we needed to rethink the entire workflow.</p>
		</div>
	</div>
	<div class="img-row">
		<figure>
			<video controls muted>
				<source src="https://jshbrtz.s3.us-east-2.amazonaws.com/blue-apps/apps-modal-english.mp4" type="video/mp4">
			</video>
			<figcaption><strong>[fig.1]</strong> The modal portrayed the action of adding from a different list, but there were no visual cues to see which apps you just added. We also literally boxed ourselves in, making adding functionality very challenging.</figcaption>
		</figure>
		<figure>
			<video controls muted>
				<source src="https://jshbrtz.s3.us-east-2.amazonaws.com/blue-apps/apps-modal-mobile.mp4" type="video/mp4">
			</video>
			<figcaption><strong>[fig.2]</strong> On an iPhone 12, you'd be lucky to see an app and a half.</figcaption>
		</figure>
	</div>
</section>
<section id="process">
	<div class="row container">
		<div class="column">
			<header>
				<h2>Process</h2>
			</header>
		</div>
		<div class="double-column">
			<p>I partnered with Ryan Rud, one of my UI Engineering peers. We recalled an idea from an early planning session: make an Edit mode.</p>
			<p>Rip out the modal from this workflow, we said. It doesn't scale well for the amount of information it shows.</p>
			<p>Let's allow the user to look at one clearly labeled list, we challenged.</p>
			<!-- <p>We talked through how this approach might work in other product workflows and how it would impact the next set of roadmap projects. It could fit our design approach: repeatable, reusable patterns that improve the quality of life for all users.</p> this paragraph might be mentioned later -->
			<p>Without time for a usability study, I used my high fidelity mockups like paper prototypes to gather feedback internally from UI Engineers, Product Owners, Product Managers, fellow UX Designers, and the Jamf Now Customer Success and Support teams as they were available. The Sketch component library I made for Jamf Now made iterations easy. <strong>Lean design, all the way.</strong></p>
			<p>The result was a workflow that everyone agreed was a pound-for-pound improvement over the existing. And we had plenty of time left to write up thorough design documentation for handoff.</p>
		</div>
	</div>
</section>