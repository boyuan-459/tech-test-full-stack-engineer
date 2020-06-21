import React, { Component } from 'react';
import { Grid } from 'react-styled-flexboxgrid'
import { Provider } from 'react-redux'

import store from 'redux/store'
import Block from 'components/Block'
import Tabs from 'components/Tabs'
import Leads from 'containers/Leads'

const tabs = [
    {
        name: 'Invited',
        status: 'new',
    },
    {
        name: 'Accepted',
        status: 'accepted',
    }
]

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Grid className="App">
                <Block>
                    <Tabs
                        tabs={tabs}
                        render={tab => <Leads status={tab.status} />}
                    />
                </Block>
            </Grid>
        </Provider>
    );
  }
}

export default App;
