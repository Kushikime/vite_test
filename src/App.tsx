export const App = () => {
    return (
        <div>
            <h1>Hello Vite!</h1>
            <p>NOT_SO_SECRET_KEY: <strong>{import.meta.env.VITE_SECRET_S3_KEY}</strong></p>
            <p>VITE_SECRET_S3_KEY: {import.meta.env.NOT_SO_SECRET_KEY}</p>
        </div>
    )
}