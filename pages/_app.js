import { Provider } from 'react-redux'
import App from 'next/app'
import withRedux from '../lib/with-redux'
import { hotjar } from 'react-hotjar'
import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: 'GTM-K9R7NGD'
}
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
      }
    }
  }
  componentDidMount() {
    TagManager.initialize(tagManagerArgs)
    hotjar.initialize(1356487, 6)
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(MyApp)
