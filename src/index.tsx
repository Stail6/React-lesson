import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello App.js</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                quia ex autem doloribus libero quo vitae excepturi vero cum,
                sunt deserunt itaque cumque. Adipisci qui quaerat vitae, labore
                commodi odit.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                obcaecati reprehenderit, tempora at voluptatibus laudantium
                inventore. Laboriosam sapiente modi recusandae nulla quas
                voluptatibus, dolorum quis dolor accusantium voluptates
                asperiores pariatur?
            </p>
        </React.Fragment>
    )
}

function App() {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
