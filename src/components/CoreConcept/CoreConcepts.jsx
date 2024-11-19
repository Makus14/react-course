import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from '../../data.js'
import './CoreConcept.css'

export default function CoreConcepts() {

    let coreConcept = CORE_CONCEPTS.map((item) => {
        return (
          <CoreConcept 
            key={item.title}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        )
      })

    return (
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {coreConcept}
          </ul>
        </section>
    )
}