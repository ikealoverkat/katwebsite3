<script lang="ts">
    let { width, height} = $props();
</script>

<div class="my-4 flex flex-row gap-2">
	<a href="https://instagram.com/777luckykat" class="contact-item"
		><img src="/imgs/contact-ig.png" alt="link to my instagram" width={width} height={height} /></a
	>
	<a href="mailto:kat@hackclub.com" class="contact-item"
		><img src="/imgs/contact-mail.png" alt="email me!" width={width} height={height} /></a
	>
	<a href="https://github.com/ikealoverkat" class="contact-item"
		><img src="/imgs/contact-gh.png" alt="link to my github" width={width} height={height} /></a
	>
	<a href="https://hackclub.enterprise.slack.com/team/U08H34LLQQJ" class="contact-item"
		><img src="/imgs/contact-slack.png" alt="send a slack dm!" width={width} height={height} /></a
	>
</div>
