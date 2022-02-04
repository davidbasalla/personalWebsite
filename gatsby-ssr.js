// Import React so that you can use JSX in HeadComponents
const React = require('react')

const HeadComponents = [
  <script
    async
    defer
    data-domain="davidbasalla.com"
    src="https://plausible.io/js/plausible.js"
  />,
]

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents(HeadComponents)
}
