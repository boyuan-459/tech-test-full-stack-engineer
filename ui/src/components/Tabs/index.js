import { array, func } from 'prop-types'
import React, { useState } from "react"

import Box from 'components/Box'
import { Tabs, TabList, Tab, TabPanel } from './styles'

const HiTabs = ({ tabs, render }) => {
    const [ selectedIndex, setSelectedIndex ] = useState(0)
    return (
        <Tabs selectedIndex={selectedIndex} onSelect={selectedIndex => setSelectedIndex(selectedIndex)}>
            <Box>
                <TabList>
                    {tabs.map((tab, index) => <Tab key={index}>{tab.name}</Tab>)}
                </TabList>
            </Box>
            {
                tabs.map((tab, index) => (
                    <TabPanel key={index}>
                        {render(tab)}
                    </TabPanel>
                ))
            }
        </Tabs>
    )
}

HiTabs.propTypes = {
    tabs: array,
    render: func,
}

export default HiTabs
