export default ({content, url, nextPost, prevPost, comp}) => {

    const Navigation = comp.navigation

    const notIndex = url !== "/" || ""

    return `
<body>
    <main id="main">
        ${content}
    </main>
    ${notIndex && Navigation({nextPost, prevPost})}
</body>
`}
