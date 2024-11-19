import { useState } from 'react';
import TabButton from '../../components/TabButton/TabButton.jsx';
import { EXAMPLES } from '../../data.js'
import './Examples.css'
import Tabs from '../Tabs.jsx';

export default function Examples() {
    let [selectedTopic, setSelectedTopic] = useState()

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton)
    }

    let tabContent = <p>Please select a topic.</p>

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
                </pre>
            </div>
        )
    }

    return (
        <section id="examples">
          <h2>Examples</h2>
          <Tabs
            buttons={
              <>
                <TabButton 
                  isSelected={selectedTopic === 'components'} 
                  onClick={() => handleSelect('components')}
                >
                  Components
                </TabButton>
                <TabButton 
                  isSelected={selectedTopic === 'jsx'} 
                  onClick={() => handleSelect('jsx')}
                >
                  JSX
                </TabButton>
                <TabButton 
                  isSelected={selectedTopic === 'props'} 
                  onClick={() => handleSelect('props')}
                >
                  Props
                </TabButton>
                <TabButton 
                  isSelected={selectedTopic === 'state'} 
                  onClick={() => handleSelect('state')}
                >
                  State
                </TabButton>
              </>
          }>
            {tabContent}
          </Tabs>
        </section>
    )
}