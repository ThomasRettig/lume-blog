export default ({site}) => {

    const { _x, ...rest } = site

    return `
    <!-- Website Schema -->
    <script type="application/ld+json" id="website">
        ${JSON.stringify(rest)}
    </script>
    `
}
