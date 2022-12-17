import Button from "./Button"

const Header = () => {
  return (
    <header>
        <div id="header-body">
            <div id="title-container">
                <h1 id="title">The Map</h1>
            </div>
            <Button
            link="https://www.iseyu.xyz/aboutproject.html"
            id="header-button"
            text="What is this and how to use?"
            />
        </div>
        <hr id="hr"/>
    </header>
  )
}

export default Header