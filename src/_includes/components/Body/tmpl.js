import SiteHeader from '../SiteHeader/tmpl.js'
import SiteNavigation from '../SiteNavigation/tmpl.js'
import SiteFooter from '../SiteFooter/tmpl.js'

export default ({content, site, author}) => `
<body>
    ${SiteHeader()}
    <main id="main">
        ${content}
    </main>
    ${SiteNavigation({author})}
    ${SiteFooter({site, author})}
</body>
`