function Home({ setParentUrl, text }) {
    setParentUrl('/home')
    console.log(text)
    return (
        <span>Home</span>
    );
}

export default Home;